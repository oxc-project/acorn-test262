__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 15026,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 18,
        "name": "privateClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 22,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 52,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 31,
        "end": 52,
        "id": {
          "type": "Identifier",
          "start": 37,
          "end": 48,
          "name": "publicClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 49,
          "end": 52,
          "body": []
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
      "start": 54,
      "end": 266,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 61,
        "end": 266,
        "id": {
          "type": "Identifier",
          "start": 71,
          "end": 110,
          "name": "publicInterfaceWithPrivateParmeterTypes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 111,
          "end": 266,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 117,
              "end": 156,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 122,
                  "end": 141,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 127,
                    "end": 141,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 129,
                      "end": 141,
                      "typeName": {
                        "type": "Identifier",
                        "start": 129,
                        "end": 141,
                        "name": "privateClass",
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
                "start": 142,
                "end": 155,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 144,
                  "end": 155,
                  "typeName": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 155,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 170,
              "end": 205,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 171,
                  "end": 190,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 176,
                    "end": 190,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 178,
                      "end": 190,
                      "typeName": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 190,
                        "name": "privateClass",
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
                "start": 191,
                "end": 204,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 193,
                  "end": 204,
                  "typeName": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 204,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "start": 219,
              "end": 255,
              "key": {
                "type": "Identifier",
                "start": 219,
                "end": 227,
                "name": "myMethod",
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
                  "start": 228,
                  "end": 247,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 233,
                    "end": 247,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 235,
                      "end": 247,
                      "typeName": {
                        "type": "Identifier",
                        "start": 235,
                        "end": 247,
                        "name": "privateClass",
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
                "start": 248,
                "end": 254,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 250,
                  "end": 254
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 268,
      "end": 449,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 275,
        "end": 449,
        "id": {
          "type": "Identifier",
          "start": 285,
          "end": 323,
          "name": "publicInterfaceWithPublicParmeterTypes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 324,
          "end": 449,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 330,
              "end": 368,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 335,
                  "end": 353,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 340,
                    "end": 353,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 342,
                      "end": 353,
                      "typeName": {
                        "type": "Identifier",
                        "start": 342,
                        "end": 353,
                        "name": "publicClass",
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
                "start": 354,
                "end": 367,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 356,
                  "end": 367,
                  "typeName": {
                    "type": "Identifier",
                    "start": 356,
                    "end": 367,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 373,
              "end": 407,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 374,
                  "end": 392,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 379,
                    "end": 392,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 381,
                      "end": 392,
                      "typeName": {
                        "type": "Identifier",
                        "start": 381,
                        "end": 392,
                        "name": "publicClass",
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
                "start": 393,
                "end": 406,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 395,
                  "end": 406,
                  "typeName": {
                    "type": "Identifier",
                    "start": 395,
                    "end": 406,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "start": 412,
              "end": 447,
              "key": {
                "type": "Identifier",
                "start": 412,
                "end": 420,
                "name": "myMethod",
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
                  "start": 421,
                  "end": 439,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 426,
                    "end": 439,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 428,
                      "end": 439,
                      "typeName": {
                        "type": "Identifier",
                        "start": 428,
                        "end": 439,
                        "name": "publicClass",
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
                "start": 440,
                "end": 446,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 442,
                  "end": 446
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
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 451,
      "end": 632,
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 501,
        "name": "privateInterfaceWithPrivateParmeterTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 502,
        "end": 632,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 508,
            "end": 548,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 513,
                "end": 532,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 518,
                  "end": 532,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 520,
                    "end": 532,
                    "typeName": {
                      "type": "Identifier",
                      "start": 520,
                      "end": 532,
                      "name": "privateClass",
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
              "start": 533,
              "end": 547,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 535,
                "end": 547,
                "typeName": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 547,
                  "name": "privateClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 553,
            "end": 589,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 554,
                "end": 573,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 559,
                  "end": 573,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 561,
                    "end": 573,
                    "typeName": {
                      "type": "Identifier",
                      "start": 561,
                      "end": 573,
                      "name": "privateClass",
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
              "start": 574,
              "end": 588,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 576,
                "end": 588,
                "typeName": {
                  "type": "Identifier",
                  "start": 576,
                  "end": 588,
                  "name": "privateClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 594,
            "end": 630,
            "key": {
              "type": "Identifier",
              "start": 594,
              "end": 602,
              "name": "myMethod",
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
                "start": 603,
                "end": 622,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 608,
                  "end": 622,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 610,
                    "end": 622,
                    "typeName": {
                      "type": "Identifier",
                      "start": 610,
                      "end": 622,
                      "name": "privateClass",
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
              "start": 623,
              "end": 629,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 625,
                "end": 629
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
      "start": 634,
      "end": 809,
      "id": {
        "type": "Identifier",
        "start": 644,
        "end": 683,
        "name": "privateInterfaceWithPublicParmeterTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 684,
        "end": 809,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 690,
            "end": 728,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 695,
                "end": 713,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 700,
                  "end": 713,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 702,
                    "end": 713,
                    "typeName": {
                      "type": "Identifier",
                      "start": 702,
                      "end": 713,
                      "name": "publicClass",
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
              "start": 714,
              "end": 727,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 716,
                "end": 727,
                "typeName": {
                  "type": "Identifier",
                  "start": 716,
                  "end": 727,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 733,
            "end": 767,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 734,
                "end": 752,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 739,
                  "end": 752,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 741,
                    "end": 752,
                    "typeName": {
                      "type": "Identifier",
                      "start": 741,
                      "end": 752,
                      "name": "publicClass",
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
              "start": 753,
              "end": 766,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 755,
                "end": 766,
                "typeName": {
                  "type": "Identifier",
                  "start": 755,
                  "end": 766,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 772,
            "end": 807,
            "key": {
              "type": "Identifier",
              "start": 772,
              "end": 780,
              "name": "myMethod",
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
                "start": 781,
                "end": 799,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 786,
                  "end": 799,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 788,
                    "end": 799,
                    "typeName": {
                      "type": "Identifier",
                      "start": 788,
                      "end": 799,
                      "name": "publicClass",
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
              "start": 800,
              "end": 806,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 802,
                "end": 806
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
      "start": 811,
      "end": 1234,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 818,
        "end": 1234,
        "id": {
          "type": "Identifier",
          "start": 824,
          "end": 863,
          "name": "publicClassWithWithPrivateParmeterTypes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 864,
          "end": 1234,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 870,
              "end": 935,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 877,
                "end": 897,
                "name": "myPublicStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 897,
                "end": 935,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 898,
                    "end": 917,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 903,
                      "end": 917,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 905,
                        "end": 917,
                        "typeName": {
                          "type": "Identifier",
                          "start": 905,
                          "end": 917,
                          "name": "privateClass",
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
                  "start": 919,
                  "end": 935,
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
              "start": 940,
              "end": 1005,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 955,
                "end": 976,
                "name": "myPrivateStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 976,
                "end": 1005,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 977,
                    "end": 996,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 982,
                      "end": 996,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 984,
                        "end": 996,
                        "typeName": {
                          "type": "Identifier",
                          "start": 984,
                          "end": 996,
                          "name": "privateClass",
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
                  "start": 998,
                  "end": 1005,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 1010,
              "end": 1062,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1010,
                "end": 1024,
                "name": "myPublicMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1024,
                "end": 1062,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1025,
                    "end": 1044,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1030,
                      "end": 1044,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1032,
                        "end": 1044,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1032,
                          "end": 1044,
                          "name": "privateClass",
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
                  "start": 1046,
                  "end": 1062,
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
              "start": 1067,
              "end": 1119,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1075,
                "end": 1090,
                "name": "myPrivateMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1090,
                "end": 1119,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1091,
                    "end": 1110,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1096,
                      "end": 1110,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1098,
                        "end": 1110,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1098,
                          "end": 1110,
                          "name": "privateClass",
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
                  "start": 1112,
                  "end": 1119,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 1124,
              "end": 1232,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1124,
                "end": 1135,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 1135,
                "end": 1232,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1136,
                    "end": 1155,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1141,
                      "end": 1155,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1143,
                        "end": 1155,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1143,
                          "end": 1155,
                          "name": "privateClass",
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
                    "type": "TSParameterProperty",
                    "start": 1157,
                    "end": 1185,
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 1165,
                      "end": 1185,
                      "name": "param1",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1171,
                        "end": 1185,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1173,
                          "end": 1185,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1173,
                            "end": 1185,
                            "name": "privateClass",
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
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSParameterProperty",
                    "start": 1187,
                    "end": 1214,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 1194,
                      "end": 1214,
                      "name": "param2",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1200,
                        "end": 1214,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1202,
                          "end": 1214,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1202,
                            "end": 1214,
                            "name": "privateClass",
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
                    "readonly": false,
                    "static": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 1216,
                  "end": 1232,
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
      "start": 1236,
      "end": 1624,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1243,
        "end": 1624,
        "id": {
          "type": "Identifier",
          "start": 1249,
          "end": 1287,
          "name": "publicClassWithWithPublicParmeterTypes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 1288,
          "end": 1624,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 1294,
              "end": 1349,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1301,
                "end": 1321,
                "name": "myPublicStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1321,
                "end": 1349,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1322,
                    "end": 1340,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1327,
                      "end": 1340,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1329,
                        "end": 1340,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1329,
                          "end": 1340,
                          "name": "publicClass",
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
                  "start": 1342,
                  "end": 1349,
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
              "start": 1354,
              "end": 1418,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1369,
                "end": 1390,
                "name": "myPrivateStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1390,
                "end": 1418,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1391,
                    "end": 1409,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1396,
                      "end": 1409,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1398,
                        "end": 1409,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1398,
                          "end": 1409,
                          "name": "publicClass",
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
                  "start": 1411,
                  "end": 1418,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 1423,
              "end": 1465,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1423,
                "end": 1437,
                "name": "myPublicMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1437,
                "end": 1465,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1438,
                    "end": 1456,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1443,
                      "end": 1456,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1445,
                        "end": 1456,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1445,
                          "end": 1456,
                          "name": "publicClass",
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
                  "start": 1458,
                  "end": 1465,
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
              "start": 1470,
              "end": 1521,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1478,
                "end": 1493,
                "name": "myPrivateMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1493,
                "end": 1521,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1494,
                    "end": 1512,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1499,
                      "end": 1512,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1501,
                        "end": 1512,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1501,
                          "end": 1512,
                          "name": "publicClass",
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
                  "start": 1514,
                  "end": 1521,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 1526,
              "end": 1622,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1526,
                "end": 1537,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 1537,
                "end": 1622,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1538,
                    "end": 1556,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1543,
                      "end": 1556,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1545,
                        "end": 1556,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1545,
                          "end": 1556,
                          "name": "publicClass",
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
                    "type": "TSParameterProperty",
                    "start": 1558,
                    "end": 1585,
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 1566,
                      "end": 1585,
                      "name": "param1",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1572,
                        "end": 1585,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1574,
                          "end": 1585,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1574,
                            "end": 1585,
                            "name": "publicClass",
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
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSParameterProperty",
                    "start": 1587,
                    "end": 1613,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 1594,
                      "end": 1613,
                      "name": "param2",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1600,
                        "end": 1613,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1602,
                          "end": 1613,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1602,
                            "end": 1613,
                            "name": "publicClass",
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
                    "readonly": false,
                    "static": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 1615,
                  "end": 1622,
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
      "type": "ClassDeclaration",
      "start": 1626,
      "end": 2017,
      "id": {
        "type": "Identifier",
        "start": 1632,
        "end": 1672,
        "name": "privateClassWithWithPrivateParmeterTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1673,
        "end": 2017,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1679,
            "end": 1735,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1686,
              "end": 1706,
              "name": "myPublicStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1706,
              "end": 1735,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1707,
                  "end": 1726,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1712,
                    "end": 1726,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1714,
                      "end": 1726,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1714,
                        "end": 1726,
                        "name": "privateClass",
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
                "start": 1728,
                "end": 1735,
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
            "start": 1740,
            "end": 1805,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1755,
              "end": 1776,
              "name": "myPrivateStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1776,
              "end": 1805,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1777,
                  "end": 1796,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1782,
                    "end": 1796,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1784,
                      "end": 1796,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1784,
                        "end": 1796,
                        "name": "privateClass",
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
                "start": 1798,
                "end": 1805,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 1810,
            "end": 1854,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1810,
              "end": 1824,
              "name": "myPublicMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1824,
              "end": 1854,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1825,
                  "end": 1844,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1830,
                    "end": 1844,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1832,
                      "end": 1844,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1832,
                        "end": 1844,
                        "name": "privateClass",
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
                "start": 1846,
                "end": 1854,
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
            "start": 1859,
            "end": 1911,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1867,
              "end": 1882,
              "name": "myPrivateMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1882,
              "end": 1911,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1883,
                  "end": 1902,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1888,
                    "end": 1902,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1890,
                      "end": 1902,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1890,
                        "end": 1902,
                        "name": "privateClass",
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
                "start": 1904,
                "end": 1911,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 1916,
            "end": 2015,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1916,
              "end": 1927,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1927,
              "end": 2015,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1928,
                  "end": 1947,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1933,
                    "end": 1947,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1935,
                      "end": 1947,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1935,
                        "end": 1947,
                        "name": "privateClass",
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
                  "type": "TSParameterProperty",
                  "start": 1949,
                  "end": 1977,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 1957,
                    "end": 1977,
                    "name": "param1",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1963,
                      "end": 1977,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1965,
                        "end": 1977,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1965,
                          "end": 1977,
                          "name": "privateClass",
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
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 1979,
                  "end": 2006,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 1986,
                    "end": 2006,
                    "name": "param2",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1992,
                      "end": 2006,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1994,
                        "end": 2006,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1994,
                          "end": 2006,
                          "name": "privateClass",
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
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2008,
                "end": 2015,
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
    {
      "type": "ClassDeclaration",
      "start": 2019,
      "end": 2401,
      "id": {
        "type": "Identifier",
        "start": 2025,
        "end": 2064,
        "name": "privateClassWithWithPublicParmeterTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2065,
        "end": 2401,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2071,
            "end": 2126,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2078,
              "end": 2098,
              "name": "myPublicStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2098,
              "end": 2126,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2099,
                  "end": 2117,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2104,
                    "end": 2117,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2106,
                      "end": 2117,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2106,
                        "end": 2117,
                        "name": "publicClass",
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
                "start": 2119,
                "end": 2126,
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
            "start": 2131,
            "end": 2195,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2146,
              "end": 2167,
              "name": "myPrivateStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2167,
              "end": 2195,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2168,
                  "end": 2186,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2173,
                    "end": 2186,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2175,
                      "end": 2186,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2175,
                        "end": 2186,
                        "name": "publicClass",
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
                "start": 2188,
                "end": 2195,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 2200,
            "end": 2242,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2200,
              "end": 2214,
              "name": "myPublicMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2214,
              "end": 2242,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2215,
                  "end": 2233,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2220,
                    "end": 2233,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2222,
                      "end": 2233,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2222,
                        "end": 2233,
                        "name": "publicClass",
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
                "start": 2235,
                "end": 2242,
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
            "start": 2247,
            "end": 2298,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2255,
              "end": 2270,
              "name": "myPrivateMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2270,
              "end": 2298,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2271,
                  "end": 2289,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2276,
                    "end": 2289,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2278,
                      "end": 2289,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2278,
                        "end": 2289,
                        "name": "publicClass",
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
                "start": 2291,
                "end": 2298,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 2303,
            "end": 2399,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2303,
              "end": 2314,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 2314,
              "end": 2399,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2315,
                  "end": 2333,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2320,
                    "end": 2333,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2322,
                      "end": 2333,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2322,
                        "end": 2333,
                        "name": "publicClass",
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
                  "type": "TSParameterProperty",
                  "start": 2335,
                  "end": 2362,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 2343,
                    "end": 2362,
                    "name": "param1",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2349,
                      "end": 2362,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2351,
                        "end": 2362,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2351,
                          "end": 2362,
                          "name": "publicClass",
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
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 2364,
                  "end": 2390,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 2371,
                    "end": 2390,
                    "name": "param2",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2377,
                      "end": 2390,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2379,
                        "end": 2390,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2379,
                          "end": 2390,
                          "name": "publicClass",
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
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2392,
                "end": 2399,
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
    {
      "type": "ExportNamedDeclaration",
      "start": 2403,
      "end": 2491,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 2410,
        "end": 2491,
        "id": {
          "type": "Identifier",
          "start": 2419,
          "end": 2457,
          "name": "publicFunctionWithPrivateParmeterTypes",
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
            "start": 2458,
            "end": 2477,
            "name": "param",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2463,
              "end": 2477,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2465,
                "end": 2477,
                "typeName": {
                  "type": "Identifier",
                  "start": 2465,
                  "end": 2477,
                  "name": "privateClass",
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
          "start": 2479,
          "end": 2491,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2492,
      "end": 2569,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 2499,
        "end": 2569,
        "id": {
          "type": "Identifier",
          "start": 2508,
          "end": 2545,
          "name": "publicFunctionWithPublicParmeterTypes",
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
            "start": 2546,
            "end": 2564,
            "name": "param",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2551,
              "end": 2564,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2553,
                "end": 2564,
                "typeName": {
                  "type": "Identifier",
                  "start": 2553,
                  "end": 2564,
                  "name": "publicClass",
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
          "start": 2566,
          "end": 2569,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 2570,
      "end": 2643,
      "id": {
        "type": "Identifier",
        "start": 2579,
        "end": 2618,
        "name": "privateFunctionWithPrivateParmeterTypes",
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
          "start": 2619,
          "end": 2638,
          "name": "param",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2624,
            "end": 2638,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2626,
              "end": 2638,
              "typeName": {
                "type": "Identifier",
                "start": 2626,
                "end": 2638,
                "name": "privateClass",
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
        "start": 2640,
        "end": 2643,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2644,
      "end": 2715,
      "id": {
        "type": "Identifier",
        "start": 2653,
        "end": 2691,
        "name": "privateFunctionWithPublicParmeterTypes",
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
          "start": 2692,
          "end": 2710,
          "name": "param",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2697,
            "end": 2710,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2699,
              "end": 2710,
              "typeName": {
                "type": "Identifier",
                "start": 2699,
                "end": 2710,
                "name": "publicClass",
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
        "start": 2712,
        "end": 2715,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2717,
      "end": 2814,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 2724,
        "end": 2814,
        "id": {
          "type": "Identifier",
          "start": 2741,
          "end": 2786,
          "name": "publicAmbientFunctionWithPrivateParmeterTypes",
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
            "start": 2787,
            "end": 2806,
            "name": "param",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2792,
              "end": 2806,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2794,
                "end": 2806,
                "typeName": {
                  "type": "Identifier",
                  "start": 2794,
                  "end": 2806,
                  "name": "privateClass",
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
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 2807,
          "end": 2813,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 2809,
            "end": 2813
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2824,
      "end": 2919,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 2831,
        "end": 2919,
        "id": {
          "type": "Identifier",
          "start": 2848,
          "end": 2892,
          "name": "publicAmbientFunctionWithPublicParmeterTypes",
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
            "start": 2893,
            "end": 2911,
            "name": "param",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2898,
              "end": 2911,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2900,
                "end": 2911,
                "typeName": {
                  "type": "Identifier",
                  "start": 2900,
                  "end": 2911,
                  "name": "publicClass",
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
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 2912,
          "end": 2918,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 2914,
            "end": 2918
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSDeclareFunction",
      "start": 2920,
      "end": 3011,
      "id": {
        "type": "Identifier",
        "start": 2937,
        "end": 2983,
        "name": "privateAmbientFunctionWithPrivateParmeterTypes",
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
          "start": 2984,
          "end": 3003,
          "name": "param",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2989,
            "end": 3003,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2991,
              "end": 3003,
              "typeName": {
                "type": "Identifier",
                "start": 2991,
                "end": 3003,
                "name": "privateClass",
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
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3004,
        "end": 3010,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3006,
          "end": 3010
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3012,
      "end": 3101,
      "id": {
        "type": "Identifier",
        "start": 3029,
        "end": 3074,
        "name": "privateAmbientFunctionWithPublicParmeterTypes",
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
          "start": 3075,
          "end": 3093,
          "name": "param",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3080,
            "end": 3093,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3082,
              "end": 3093,
              "typeName": {
                "type": "Identifier",
                "start": 3082,
                "end": 3093,
                "name": "publicClass",
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
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3094,
        "end": 3100,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3096,
          "end": 3100
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3103,
      "end": 3361,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 3110,
        "end": 3361,
        "id": {
          "type": "Identifier",
          "start": 3120,
          "end": 3166,
          "name": "publicInterfaceWithPrivateModuleParameterTypes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 3167,
          "end": 3361,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 3173,
              "end": 3225,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3178,
                  "end": 3210,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3183,
                    "end": 3210,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3185,
                      "end": 3210,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 3185,
                        "end": 3210,
                        "left": {
                          "type": "Identifier",
                          "start": 3185,
                          "end": 3198,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 3199,
                          "end": 3210,
                          "name": "publicClass",
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
                "start": 3211,
                "end": 3224,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3213,
                  "end": 3224,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3213,
                    "end": 3224,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 3239,
              "end": 3287,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3240,
                  "end": 3272,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3245,
                    "end": 3272,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3247,
                      "end": 3272,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 3247,
                        "end": 3272,
                        "left": {
                          "type": "Identifier",
                          "start": 3247,
                          "end": 3260,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 3261,
                          "end": 3272,
                          "name": "publicClass",
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
                "start": 3273,
                "end": 3286,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3275,
                  "end": 3286,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3275,
                    "end": 3286,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "start": 3301,
              "end": 3350,
              "key": {
                "type": "Identifier",
                "start": 3301,
                "end": 3309,
                "name": "myMethod",
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
                  "start": 3310,
                  "end": 3342,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3315,
                    "end": 3342,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3317,
                      "end": 3342,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 3317,
                        "end": 3342,
                        "left": {
                          "type": "Identifier",
                          "start": 3317,
                          "end": 3330,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 3331,
                          "end": 3342,
                          "name": "publicClass",
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
                "start": 3343,
                "end": 3349,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3345,
                  "end": 3349
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3362,
      "end": 3726,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 3369,
        "end": 3726,
        "id": {
          "type": "Identifier",
          "start": 3375,
          "end": 3417,
          "name": "publicClassWithPrivateModuleParameterTypes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 3418,
          "end": 3726,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 3424,
              "end": 3502,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3431,
                "end": 3451,
                "name": "myPublicStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 3451,
                "end": 3502,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3452,
                    "end": 3484,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3457,
                      "end": 3484,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3459,
                        "end": 3484,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 3459,
                          "end": 3484,
                          "left": {
                            "type": "Identifier",
                            "start": 3459,
                            "end": 3472,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 3473,
                            "end": 3484,
                            "name": "publicClass",
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
                "body": {
                  "type": "BlockStatement",
                  "start": 3486,
                  "end": 3502,
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
              "start": 3507,
              "end": 3572,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3507,
                "end": 3521,
                "name": "myPublicMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 3521,
                "end": 3572,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3522,
                    "end": 3554,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3527,
                      "end": 3554,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3529,
                        "end": 3554,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 3529,
                          "end": 3554,
                          "left": {
                            "type": "Identifier",
                            "start": 3529,
                            "end": 3542,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 3543,
                            "end": 3554,
                            "name": "publicClass",
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
                "body": {
                  "type": "BlockStatement",
                  "start": 3556,
                  "end": 3572,
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
              "start": 3577,
              "end": 3724,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3577,
                "end": 3588,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 3588,
                "end": 3724,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3589,
                    "end": 3621,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3594,
                      "end": 3621,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3596,
                        "end": 3621,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 3596,
                          "end": 3621,
                          "left": {
                            "type": "Identifier",
                            "start": 3596,
                            "end": 3609,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 3610,
                            "end": 3621,
                            "name": "publicClass",
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
                  },
                  {
                    "type": "TSParameterProperty",
                    "start": 3623,
                    "end": 3664,
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 3631,
                      "end": 3664,
                      "name": "param1",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3637,
                        "end": 3664,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3639,
                          "end": 3664,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 3639,
                            "end": 3664,
                            "left": {
                              "type": "Identifier",
                              "start": 3639,
                              "end": 3652,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 3653,
                              "end": 3664,
                              "name": "publicClass",
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
                    },
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSParameterProperty",
                    "start": 3666,
                    "end": 3706,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 3673,
                      "end": 3706,
                      "name": "param2",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3679,
                        "end": 3706,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3681,
                          "end": 3706,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 3681,
                            "end": 3706,
                            "left": {
                              "type": "Identifier",
                              "start": 3681,
                              "end": 3694,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 3695,
                              "end": 3706,
                              "name": "publicClass",
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
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 3708,
                  "end": 3724,
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
      "start": 3727,
      "end": 3835,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 3734,
        "end": 3835,
        "id": {
          "type": "Identifier",
          "start": 3743,
          "end": 3788,
          "name": "publicFunctionWithPrivateModuleParameterTypes",
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
            "start": 3789,
            "end": 3821,
            "name": "param",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3794,
              "end": 3821,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3796,
                "end": 3821,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 3796,
                  "end": 3821,
                  "left": {
                    "type": "Identifier",
                    "start": 3796,
                    "end": 3809,
                    "name": "privateModule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3810,
                    "end": 3821,
                    "name": "publicClass",
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
        "body": {
          "type": "BlockStatement",
          "start": 3823,
          "end": 3835,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3836,
      "end": 3953,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 3843,
        "end": 3953,
        "id": {
          "type": "Identifier",
          "start": 3860,
          "end": 3912,
          "name": "publicAmbientFunctionWithPrivateModuleParameterTypes",
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
            "start": 3913,
            "end": 3945,
            "name": "param",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3918,
              "end": 3945,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3920,
                "end": 3945,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 3920,
                  "end": 3945,
                  "left": {
                    "type": "Identifier",
                    "start": 3920,
                    "end": 3933,
                    "name": "privateModule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3934,
                    "end": 3945,
                    "name": "publicClass",
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
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 3946,
          "end": 3952,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3948,
            "end": 3952
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3964,
      "end": 4189,
      "id": {
        "type": "Identifier",
        "start": 3974,
        "end": 4021,
        "name": "privateInterfaceWithPrivateModuleParameterTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 4022,
        "end": 4189,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 4028,
            "end": 4080,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 4033,
                "end": 4065,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4038,
                  "end": 4065,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4040,
                    "end": 4065,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 4040,
                      "end": 4065,
                      "left": {
                        "type": "Identifier",
                        "start": 4040,
                        "end": 4053,
                        "name": "privateModule",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 4054,
                        "end": 4065,
                        "name": "publicClass",
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
              "start": 4066,
              "end": 4079,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4068,
                "end": 4079,
                "typeName": {
                  "type": "Identifier",
                  "start": 4068,
                  "end": 4079,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 4085,
            "end": 4133,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 4086,
                "end": 4118,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4091,
                  "end": 4118,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4093,
                    "end": 4118,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 4093,
                      "end": 4118,
                      "left": {
                        "type": "Identifier",
                        "start": 4093,
                        "end": 4106,
                        "name": "privateModule",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 4107,
                        "end": 4118,
                        "name": "publicClass",
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
              "start": 4119,
              "end": 4132,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4121,
                "end": 4132,
                "typeName": {
                  "type": "Identifier",
                  "start": 4121,
                  "end": 4132,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 4138,
            "end": 4187,
            "key": {
              "type": "Identifier",
              "start": 4138,
              "end": 4146,
              "name": "myMethod",
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
                "start": 4147,
                "end": 4179,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4152,
                  "end": 4179,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4154,
                    "end": 4179,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 4154,
                      "end": 4179,
                      "left": {
                        "type": "Identifier",
                        "start": 4154,
                        "end": 4167,
                        "name": "privateModule",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 4168,
                        "end": 4179,
                        "name": "publicClass",
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
              "start": 4180,
              "end": 4186,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 4182,
                "end": 4186
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
      "type": "ClassDeclaration",
      "start": 4190,
      "end": 4521,
      "id": {
        "type": "Identifier",
        "start": 4196,
        "end": 4239,
        "name": "privateClassWithPrivateModuleParameterTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 4240,
        "end": 4521,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 4246,
            "end": 4315,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4253,
              "end": 4273,
              "name": "myPublicStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4273,
              "end": 4315,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4274,
                  "end": 4306,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4279,
                    "end": 4306,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4281,
                      "end": 4306,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 4281,
                        "end": 4306,
                        "left": {
                          "type": "Identifier",
                          "start": 4281,
                          "end": 4294,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 4295,
                          "end": 4306,
                          "name": "publicClass",
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
              "body": {
                "type": "BlockStatement",
                "start": 4308,
                "end": 4315,
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
            "start": 4320,
            "end": 4376,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4320,
              "end": 4334,
              "name": "myPublicMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4334,
              "end": 4376,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4335,
                  "end": 4367,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4340,
                    "end": 4367,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4342,
                      "end": 4367,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 4342,
                        "end": 4367,
                        "left": {
                          "type": "Identifier",
                          "start": 4342,
                          "end": 4355,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 4356,
                          "end": 4367,
                          "name": "publicClass",
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
              "body": {
                "type": "BlockStatement",
                "start": 4369,
                "end": 4376,
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
            "start": 4381,
            "end": 4519,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4381,
              "end": 4392,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 4392,
              "end": 4519,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4393,
                  "end": 4425,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4398,
                    "end": 4425,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4400,
                      "end": 4425,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 4400,
                        "end": 4425,
                        "left": {
                          "type": "Identifier",
                          "start": 4400,
                          "end": 4413,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 4414,
                          "end": 4425,
                          "name": "publicClass",
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
                },
                {
                  "type": "TSParameterProperty",
                  "start": 4427,
                  "end": 4468,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 4435,
                    "end": 4468,
                    "name": "param1",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4441,
                      "end": 4468,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4443,
                        "end": 4468,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 4443,
                          "end": 4468,
                          "left": {
                            "type": "Identifier",
                            "start": 4443,
                            "end": 4456,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 4457,
                            "end": 4468,
                            "name": "publicClass",
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
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 4470,
                  "end": 4510,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 4477,
                    "end": 4510,
                    "name": "param2",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4483,
                      "end": 4510,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4485,
                        "end": 4510,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 4485,
                          "end": 4510,
                          "left": {
                            "type": "Identifier",
                            "start": 4485,
                            "end": 4498,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 4499,
                            "end": 4510,
                            "name": "publicClass",
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
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 4512,
                "end": 4519,
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
    {
      "type": "FunctionDeclaration",
      "start": 4522,
      "end": 4615,
      "id": {
        "type": "Identifier",
        "start": 4531,
        "end": 4577,
        "name": "privateFunctionWithPrivateModuleParameterTypes",
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
          "start": 4578,
          "end": 4610,
          "name": "param",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4583,
            "end": 4610,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4585,
              "end": 4610,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 4585,
                "end": 4610,
                "left": {
                  "type": "Identifier",
                  "start": 4585,
                  "end": 4598,
                  "name": "privateModule",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 4599,
                  "end": 4610,
                  "name": "publicClass",
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
      "body": {
        "type": "BlockStatement",
        "start": 4612,
        "end": 4615,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 4616,
      "end": 4727,
      "id": {
        "type": "Identifier",
        "start": 4633,
        "end": 4686,
        "name": "privateAmbientFunctionWithPrivateModuleParameterTypes",
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
          "start": 4687,
          "end": 4719,
          "name": "param",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4692,
            "end": 4719,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4694,
              "end": 4719,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 4694,
                "end": 4719,
                "left": {
                  "type": "Identifier",
                  "start": 4694,
                  "end": 4707,
                  "name": "privateModule",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 4708,
                  "end": 4719,
                  "name": "publicClass",
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
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4720,
        "end": 4726,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 4722,
          "end": 4726
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4729,
      "end": 9952,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 4736,
        "end": 9952,
        "id": {
          "type": "Identifier",
          "start": 4743,
          "end": 4755,
          "name": "publicModule",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 4756,
          "end": 9952,
          "body": [
            {
              "type": "ClassDeclaration",
              "start": 4762,
              "end": 4788,
              "id": {
                "type": "Identifier",
                "start": 4768,
                "end": 4780,
                "name": "privateClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 4781,
                "end": 4788,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 4794,
              "end": 4826,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 4801,
                "end": 4826,
                "id": {
                  "type": "Identifier",
                  "start": 4807,
                  "end": 4818,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 4819,
                  "end": 4826,
                  "body": []
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
              "start": 4833,
              "end": 5061,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 4840,
                "end": 5061,
                "id": {
                  "type": "Identifier",
                  "start": 4850,
                  "end": 4889,
                  "name": "publicInterfaceWithPrivateParmeterTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 4890,
                  "end": 5061,
                  "body": [
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "start": 4900,
                      "end": 4939,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4905,
                          "end": 4924,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4910,
                            "end": 4924,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4912,
                              "end": 4924,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4912,
                                "end": 4924,
                                "name": "privateClass",
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
                        "start": 4925,
                        "end": 4938,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4927,
                          "end": 4938,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4927,
                            "end": 4938,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 4957,
                      "end": 4992,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4958,
                          "end": 4977,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4963,
                            "end": 4977,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4965,
                              "end": 4977,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4965,
                                "end": 4977,
                                "name": "privateClass",
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
                        "start": 4978,
                        "end": 4991,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4980,
                          "end": 4991,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4980,
                            "end": 4991,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 5010,
                      "end": 5046,
                      "key": {
                        "type": "Identifier",
                        "start": 5010,
                        "end": 5018,
                        "name": "myMethod",
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
                          "start": 5019,
                          "end": 5038,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5024,
                            "end": 5038,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 5026,
                              "end": 5038,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5026,
                                "end": 5038,
                                "name": "privateClass",
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
                        "start": 5039,
                        "end": 5045,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 5041,
                          "end": 5045
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
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 5067,
              "end": 5264,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 5074,
                "end": 5264,
                "id": {
                  "type": "Identifier",
                  "start": 5084,
                  "end": 5122,
                  "name": "publicInterfaceWithPublicParmeterTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 5123,
                  "end": 5264,
                  "body": [
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "start": 5133,
                      "end": 5171,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5138,
                          "end": 5156,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5143,
                            "end": 5156,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 5145,
                              "end": 5156,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5145,
                                "end": 5156,
                                "name": "publicClass",
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
                        "start": 5157,
                        "end": 5170,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5159,
                          "end": 5170,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5159,
                            "end": 5170,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 5180,
                      "end": 5214,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 5181,
                          "end": 5199,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5186,
                            "end": 5199,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 5188,
                              "end": 5199,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5188,
                                "end": 5199,
                                "name": "publicClass",
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
                        "start": 5200,
                        "end": 5213,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 5202,
                          "end": 5213,
                          "typeName": {
                            "type": "Identifier",
                            "start": 5202,
                            "end": 5213,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 5223,
                      "end": 5258,
                      "key": {
                        "type": "Identifier",
                        "start": 5223,
                        "end": 5231,
                        "name": "myMethod",
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
                          "start": 5232,
                          "end": 5250,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 5237,
                            "end": 5250,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 5239,
                              "end": 5250,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5239,
                                "end": 5250,
                                "name": "publicClass",
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
                        "start": 5251,
                        "end": 5257,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 5253,
                          "end": 5257
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
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 5270,
              "end": 5467,
              "id": {
                "type": "Identifier",
                "start": 5280,
                "end": 5320,
                "name": "privateInterfaceWithPrivateParmeterTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 5321,
                "end": 5467,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 5331,
                    "end": 5371,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5336,
                        "end": 5355,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5341,
                          "end": 5355,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5343,
                            "end": 5355,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5343,
                              "end": 5355,
                              "name": "privateClass",
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
                      "start": 5356,
                      "end": 5370,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5358,
                        "end": 5370,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5358,
                          "end": 5370,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 5380,
                    "end": 5416,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5381,
                        "end": 5400,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5386,
                          "end": 5400,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5388,
                            "end": 5400,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5388,
                              "end": 5400,
                              "name": "privateClass",
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
                      "start": 5401,
                      "end": 5415,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5403,
                        "end": 5415,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5403,
                          "end": 5415,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5425,
                    "end": 5461,
                    "key": {
                      "type": "Identifier",
                      "start": 5425,
                      "end": 5433,
                      "name": "myMethod",
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
                        "start": 5434,
                        "end": 5453,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5439,
                          "end": 5453,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5441,
                            "end": 5453,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5441,
                              "end": 5453,
                              "name": "privateClass",
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
                      "start": 5454,
                      "end": 5460,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5456,
                        "end": 5460
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
              "start": 5473,
              "end": 5664,
              "id": {
                "type": "Identifier",
                "start": 5483,
                "end": 5522,
                "name": "privateInterfaceWithPublicParmeterTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 5523,
                "end": 5664,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 5533,
                    "end": 5571,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5538,
                        "end": 5556,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5543,
                          "end": 5556,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5545,
                            "end": 5556,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5545,
                              "end": 5556,
                              "name": "publicClass",
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
                      "start": 5557,
                      "end": 5570,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5559,
                        "end": 5570,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5559,
                          "end": 5570,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 5580,
                    "end": 5614,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5581,
                        "end": 5599,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5586,
                          "end": 5599,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5588,
                            "end": 5599,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5588,
                              "end": 5599,
                              "name": "publicClass",
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
                      "start": 5600,
                      "end": 5613,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5602,
                        "end": 5613,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5602,
                          "end": 5613,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5623,
                    "end": 5658,
                    "key": {
                      "type": "Identifier",
                      "start": 5623,
                      "end": 5631,
                      "name": "myMethod",
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
                        "start": 5632,
                        "end": 5650,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5637,
                          "end": 5650,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5639,
                            "end": 5650,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5639,
                              "end": 5650,
                              "name": "publicClass",
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
                      "start": 5651,
                      "end": 5657,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5653,
                        "end": 5657
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
              "start": 5670,
              "end": 6137,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 5677,
                "end": 6137,
                "id": {
                  "type": "Identifier",
                  "start": 5683,
                  "end": 5722,
                  "name": "publicClassWithWithPrivateParmeterTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 5723,
                  "end": 6137,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 5733,
                      "end": 5802,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5740,
                        "end": 5760,
                        "name": "myPublicStaticMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 5760,
                        "end": 5802,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 5761,
                            "end": 5780,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5766,
                              "end": 5780,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 5768,
                                "end": 5780,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5768,
                                  "end": 5780,
                                  "name": "privateClass",
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
                          "start": 5782,
                          "end": 5802,
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
                      "start": 5811,
                      "end": 5880,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5826,
                        "end": 5847,
                        "name": "myPrivateStaticMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 5847,
                        "end": 5880,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 5848,
                            "end": 5867,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5853,
                              "end": 5867,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 5855,
                                "end": 5867,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5855,
                                  "end": 5867,
                                  "name": "privateClass",
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
                          "start": 5869,
                          "end": 5880,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 5889,
                      "end": 5945,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5889,
                        "end": 5903,
                        "name": "myPublicMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 5903,
                        "end": 5945,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 5904,
                            "end": 5923,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5909,
                              "end": 5923,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 5911,
                                "end": 5923,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5911,
                                  "end": 5923,
                                  "name": "privateClass",
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
                          "start": 5925,
                          "end": 5945,
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
                      "start": 5954,
                      "end": 6010,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5962,
                        "end": 5977,
                        "name": "myPrivateMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 5977,
                        "end": 6010,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 5978,
                            "end": 5997,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5983,
                              "end": 5997,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 5985,
                                "end": 5997,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5985,
                                  "end": 5997,
                                  "name": "privateClass",
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
                          "start": 5999,
                          "end": 6010,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 6019,
                      "end": 6131,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 6019,
                        "end": 6030,
                        "name": "constructor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "constructor",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6030,
                        "end": 6131,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 6031,
                            "end": 6050,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6036,
                              "end": 6050,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6038,
                                "end": 6050,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6038,
                                  "end": 6050,
                                  "name": "privateClass",
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
                            "type": "TSParameterProperty",
                            "start": 6052,
                            "end": 6080,
                            "accessibility": "private",
                            "decorators": [],
                            "override": false,
                            "parameter": {
                              "type": "Identifier",
                              "start": 6060,
                              "end": 6080,
                              "name": "param1",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 6066,
                                "end": 6080,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6068,
                                  "end": 6080,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6068,
                                    "end": 6080,
                                    "name": "privateClass",
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
                            "readonly": false,
                            "static": false
                          },
                          {
                            "type": "TSParameterProperty",
                            "start": 6082,
                            "end": 6109,
                            "accessibility": "public",
                            "decorators": [],
                            "override": false,
                            "parameter": {
                              "type": "Identifier",
                              "start": 6089,
                              "end": 6109,
                              "name": "param2",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 6095,
                                "end": 6109,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6097,
                                  "end": 6109,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6097,
                                    "end": 6109,
                                    "name": "privateClass",
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
                            "readonly": false,
                            "static": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 6111,
                          "end": 6131,
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
              "start": 6143,
              "end": 6575,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 6150,
                "end": 6575,
                "id": {
                  "type": "Identifier",
                  "start": 6156,
                  "end": 6194,
                  "name": "publicClassWithWithPublicParmeterTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 6195,
                  "end": 6575,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 6205,
                      "end": 6264,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 6212,
                        "end": 6232,
                        "name": "myPublicStaticMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6232,
                        "end": 6264,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 6233,
                            "end": 6251,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6238,
                              "end": 6251,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6240,
                                "end": 6251,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6240,
                                  "end": 6251,
                                  "name": "publicClass",
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
                          "start": 6253,
                          "end": 6264,
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
                      "start": 6273,
                      "end": 6341,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 6288,
                        "end": 6309,
                        "name": "myPrivateStaticMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6309,
                        "end": 6341,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 6310,
                            "end": 6328,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6315,
                              "end": 6328,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6317,
                                "end": 6328,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6317,
                                  "end": 6328,
                                  "name": "publicClass",
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
                          "start": 6330,
                          "end": 6341,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 6350,
                      "end": 6396,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 6350,
                        "end": 6364,
                        "name": "myPublicMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6364,
                        "end": 6396,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 6365,
                            "end": 6383,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6370,
                              "end": 6383,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6372,
                                "end": 6383,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6372,
                                  "end": 6383,
                                  "name": "publicClass",
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
                          "start": 6385,
                          "end": 6396,
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
                      "start": 6405,
                      "end": 6460,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 6413,
                        "end": 6428,
                        "name": "myPrivateMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6428,
                        "end": 6460,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 6429,
                            "end": 6447,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6434,
                              "end": 6447,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6436,
                                "end": 6447,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6436,
                                  "end": 6447,
                                  "name": "publicClass",
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
                          "start": 6449,
                          "end": 6460,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 6469,
                      "end": 6569,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 6469,
                        "end": 6480,
                        "name": "constructor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "constructor",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6480,
                        "end": 6569,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 6481,
                            "end": 6499,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6486,
                              "end": 6499,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6488,
                                "end": 6499,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6488,
                                  "end": 6499,
                                  "name": "publicClass",
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
                            "type": "TSParameterProperty",
                            "start": 6501,
                            "end": 6528,
                            "accessibility": "private",
                            "decorators": [],
                            "override": false,
                            "parameter": {
                              "type": "Identifier",
                              "start": 6509,
                              "end": 6528,
                              "name": "param1",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 6515,
                                "end": 6528,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6517,
                                  "end": 6528,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6517,
                                    "end": 6528,
                                    "name": "publicClass",
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
                            "readonly": false,
                            "static": false
                          },
                          {
                            "type": "TSParameterProperty",
                            "start": 6530,
                            "end": 6556,
                            "accessibility": "public",
                            "decorators": [],
                            "override": false,
                            "parameter": {
                              "type": "Identifier",
                              "start": 6537,
                              "end": 6556,
                              "name": "param2",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 6543,
                                "end": 6556,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6545,
                                  "end": 6556,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6545,
                                    "end": 6556,
                                    "name": "publicClass",
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
                            "readonly": false,
                            "static": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 6558,
                          "end": 6569,
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
              "type": "ClassDeclaration",
              "start": 6581,
              "end": 7015,
              "id": {
                "type": "Identifier",
                "start": 6587,
                "end": 6627,
                "name": "privateClassWithWithPrivateParmeterTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 6628,
                "end": 7015,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 6638,
                    "end": 6698,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6645,
                      "end": 6665,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 6665,
                      "end": 6698,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 6666,
                          "end": 6685,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 6671,
                            "end": 6685,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 6673,
                              "end": 6685,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6673,
                                "end": 6685,
                                "name": "privateClass",
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
                        "start": 6687,
                        "end": 6698,
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
                    "start": 6707,
                    "end": 6776,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6722,
                      "end": 6743,
                      "name": "myPrivateStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 6743,
                      "end": 6776,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 6744,
                          "end": 6763,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 6749,
                            "end": 6763,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 6751,
                              "end": 6763,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6751,
                                "end": 6763,
                                "name": "privateClass",
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
                        "start": 6765,
                        "end": 6776,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 6785,
                    "end": 6832,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6785,
                      "end": 6799,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 6799,
                      "end": 6832,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 6800,
                          "end": 6819,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 6805,
                            "end": 6819,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 6807,
                              "end": 6819,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6807,
                                "end": 6819,
                                "name": "privateClass",
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
                        "start": 6821,
                        "end": 6832,
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
                    "start": 6841,
                    "end": 6897,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6849,
                      "end": 6864,
                      "name": "myPrivateMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 6864,
                      "end": 6897,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 6865,
                          "end": 6884,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 6870,
                            "end": 6884,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 6872,
                              "end": 6884,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6872,
                                "end": 6884,
                                "name": "privateClass",
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
                        "start": 6886,
                        "end": 6897,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 6906,
                    "end": 7009,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6906,
                      "end": 6917,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 6917,
                      "end": 7009,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 6918,
                          "end": 6937,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 6923,
                            "end": 6937,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 6925,
                              "end": 6937,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6925,
                                "end": 6937,
                                "name": "privateClass",
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
                          "type": "TSParameterProperty",
                          "start": 6939,
                          "end": 6967,
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 6947,
                            "end": 6967,
                            "name": "param1",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6953,
                              "end": 6967,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6955,
                                "end": 6967,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6955,
                                  "end": 6967,
                                  "name": "privateClass",
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
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 6969,
                          "end": 6996,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 6976,
                            "end": 6996,
                            "name": "param2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 6982,
                              "end": 6996,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6984,
                                "end": 6996,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 6984,
                                  "end": 6996,
                                  "name": "privateClass",
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
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 6998,
                        "end": 7009,
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
            {
              "type": "ClassDeclaration",
              "start": 7021,
              "end": 7447,
              "id": {
                "type": "Identifier",
                "start": 7027,
                "end": 7066,
                "name": "privateClassWithWithPublicParmeterTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 7067,
                "end": 7447,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 7077,
                    "end": 7136,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7084,
                      "end": 7104,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7104,
                      "end": 7136,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 7105,
                          "end": 7123,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 7110,
                            "end": 7123,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 7112,
                              "end": 7123,
                              "typeName": {
                                "type": "Identifier",
                                "start": 7112,
                                "end": 7123,
                                "name": "publicClass",
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
                        "start": 7125,
                        "end": 7136,
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
                    "start": 7145,
                    "end": 7213,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7160,
                      "end": 7181,
                      "name": "myPrivateStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7181,
                      "end": 7213,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 7182,
                          "end": 7200,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 7187,
                            "end": 7200,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 7189,
                              "end": 7200,
                              "typeName": {
                                "type": "Identifier",
                                "start": 7189,
                                "end": 7200,
                                "name": "publicClass",
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
                        "start": 7202,
                        "end": 7213,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 7222,
                    "end": 7268,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7222,
                      "end": 7236,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7236,
                      "end": 7268,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 7237,
                          "end": 7255,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 7242,
                            "end": 7255,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 7244,
                              "end": 7255,
                              "typeName": {
                                "type": "Identifier",
                                "start": 7244,
                                "end": 7255,
                                "name": "publicClass",
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
                        "start": 7257,
                        "end": 7268,
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
                    "start": 7277,
                    "end": 7332,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7285,
                      "end": 7300,
                      "name": "myPrivateMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7300,
                      "end": 7332,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 7301,
                          "end": 7319,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 7306,
                            "end": 7319,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 7308,
                              "end": 7319,
                              "typeName": {
                                "type": "Identifier",
                                "start": 7308,
                                "end": 7319,
                                "name": "publicClass",
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
                        "start": 7321,
                        "end": 7332,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 7341,
                    "end": 7441,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7341,
                      "end": 7352,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7352,
                      "end": 7441,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 7353,
                          "end": 7371,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 7358,
                            "end": 7371,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 7360,
                              "end": 7371,
                              "typeName": {
                                "type": "Identifier",
                                "start": 7360,
                                "end": 7371,
                                "name": "publicClass",
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
                          "type": "TSParameterProperty",
                          "start": 7373,
                          "end": 7400,
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 7381,
                            "end": 7400,
                            "name": "param1",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7387,
                              "end": 7400,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 7389,
                                "end": 7400,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 7389,
                                  "end": 7400,
                                  "name": "publicClass",
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
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 7402,
                          "end": 7428,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 7409,
                            "end": 7428,
                            "name": "param2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7415,
                              "end": 7428,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 7417,
                                "end": 7428,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 7417,
                                  "end": 7428,
                                  "name": "publicClass",
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
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 7430,
                        "end": 7441,
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
            {
              "type": "ExportNamedDeclaration",
              "start": 7453,
              "end": 7545,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 7460,
                "end": 7545,
                "id": {
                  "type": "Identifier",
                  "start": 7469,
                  "end": 7507,
                  "name": "publicFunctionWithPrivateParmeterTypes",
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
                    "start": 7508,
                    "end": 7527,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7513,
                      "end": 7527,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7515,
                        "end": 7527,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7515,
                          "end": 7527,
                          "name": "privateClass",
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
                  "start": 7529,
                  "end": 7545,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 7550,
              "end": 7631,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 7557,
                "end": 7631,
                "id": {
                  "type": "Identifier",
                  "start": 7566,
                  "end": 7603,
                  "name": "publicFunctionWithPublicParmeterTypes",
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
                    "start": 7604,
                    "end": 7622,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7609,
                      "end": 7622,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7611,
                        "end": 7622,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7611,
                          "end": 7622,
                          "name": "publicClass",
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
                  "start": 7624,
                  "end": 7631,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "FunctionDeclaration",
              "start": 7636,
              "end": 7713,
              "id": {
                "type": "Identifier",
                "start": 7645,
                "end": 7684,
                "name": "privateFunctionWithPrivateParmeterTypes",
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
                  "start": 7685,
                  "end": 7704,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 7690,
                    "end": 7704,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7692,
                      "end": 7704,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7692,
                        "end": 7704,
                        "name": "privateClass",
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
                "start": 7706,
                "end": 7713,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            {
              "type": "FunctionDeclaration",
              "start": 7718,
              "end": 7793,
              "id": {
                "type": "Identifier",
                "start": 7727,
                "end": 7765,
                "name": "privateFunctionWithPublicParmeterTypes",
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
                  "start": 7766,
                  "end": 7784,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 7771,
                    "end": 7784,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7773,
                      "end": 7784,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7773,
                        "end": 7784,
                        "name": "publicClass",
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
                "start": 7786,
                "end": 7793,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 7799,
              "end": 7896,
              "declaration": {
                "type": "TSDeclareFunction",
                "start": 7806,
                "end": 7896,
                "id": {
                  "type": "Identifier",
                  "start": 7823,
                  "end": 7868,
                  "name": "publicAmbientFunctionWithPrivateParmeterTypes",
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
                    "start": 7869,
                    "end": 7888,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7874,
                      "end": 7888,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7876,
                        "end": 7888,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7876,
                          "end": 7888,
                          "name": "privateClass",
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
                "declare": true,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 7889,
                  "end": 7895,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 7891,
                    "end": 7895
                  }
                }
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "type"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 7910,
              "end": 8005,
              "declaration": {
                "type": "TSDeclareFunction",
                "start": 7917,
                "end": 8005,
                "id": {
                  "type": "Identifier",
                  "start": 7934,
                  "end": 7978,
                  "name": "publicAmbientFunctionWithPublicParmeterTypes",
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
                    "start": 7979,
                    "end": 7997,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7984,
                      "end": 7997,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7986,
                        "end": 7997,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7986,
                          "end": 7997,
                          "name": "publicClass",
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
                "declare": true,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 7998,
                  "end": 8004,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 8000,
                    "end": 8004
                  }
                }
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "type"
            },
            {
              "type": "TSDeclareFunction",
              "start": 8010,
              "end": 8101,
              "id": {
                "type": "Identifier",
                "start": 8027,
                "end": 8073,
                "name": "privateAmbientFunctionWithPrivateParmeterTypes",
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
                  "start": 8074,
                  "end": 8093,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 8079,
                    "end": 8093,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 8081,
                      "end": 8093,
                      "typeName": {
                        "type": "Identifier",
                        "start": 8081,
                        "end": 8093,
                        "name": "privateClass",
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
              "declare": true,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 8094,
                "end": 8100,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 8096,
                  "end": 8100
                }
              }
            },
            {
              "type": "TSDeclareFunction",
              "start": 8106,
              "end": 8195,
              "id": {
                "type": "Identifier",
                "start": 8123,
                "end": 8168,
                "name": "privateAmbientFunctionWithPublicParmeterTypes",
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
                  "start": 8169,
                  "end": 8187,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 8174,
                    "end": 8187,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 8176,
                      "end": 8187,
                      "typeName": {
                        "type": "Identifier",
                        "start": 8176,
                        "end": 8187,
                        "name": "publicClass",
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
              "declare": true,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 8188,
                "end": 8194,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 8190,
                  "end": 8194
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 8201,
              "end": 8475,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 8208,
                "end": 8475,
                "id": {
                  "type": "Identifier",
                  "start": 8218,
                  "end": 8264,
                  "name": "publicInterfaceWithPrivateModuleParameterTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 8265,
                  "end": 8475,
                  "body": [
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "start": 8275,
                      "end": 8327,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 8280,
                          "end": 8312,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 8285,
                            "end": 8312,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 8287,
                              "end": 8312,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 8287,
                                "end": 8312,
                                "left": {
                                  "type": "Identifier",
                                  "start": 8287,
                                  "end": 8300,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 8301,
                                  "end": 8312,
                                  "name": "publicClass",
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
                        "start": 8313,
                        "end": 8326,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8315,
                          "end": 8326,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8315,
                            "end": 8326,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 8345,
                      "end": 8393,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 8346,
                          "end": 8378,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 8351,
                            "end": 8378,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 8353,
                              "end": 8378,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 8353,
                                "end": 8378,
                                "left": {
                                  "type": "Identifier",
                                  "start": 8353,
                                  "end": 8366,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 8367,
                                  "end": 8378,
                                  "name": "publicClass",
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
                        "start": 8379,
                        "end": 8392,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8381,
                          "end": 8392,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8381,
                            "end": 8392,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 8411,
                      "end": 8460,
                      "key": {
                        "type": "Identifier",
                        "start": 8411,
                        "end": 8419,
                        "name": "myMethod",
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
                          "start": 8420,
                          "end": 8452,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 8425,
                            "end": 8452,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 8427,
                              "end": 8452,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 8427,
                                "end": 8452,
                                "left": {
                                  "type": "Identifier",
                                  "start": 8427,
                                  "end": 8440,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 8441,
                                  "end": 8452,
                                  "name": "publicClass",
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
                        "start": 8453,
                        "end": 8459,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8455,
                          "end": 8459
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
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 8480,
              "end": 8872,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 8487,
                "end": 8872,
                "id": {
                  "type": "Identifier",
                  "start": 8493,
                  "end": 8535,
                  "name": "publicClassWithPrivateModuleParameterTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 8536,
                  "end": 8872,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 8546,
                      "end": 8628,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 8553,
                        "end": 8573,
                        "name": "myPublicStaticMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 8573,
                        "end": 8628,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 8574,
                            "end": 8606,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8579,
                              "end": 8606,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 8581,
                                "end": 8606,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 8581,
                                  "end": 8606,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 8581,
                                    "end": 8594,
                                    "name": "privateModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 8595,
                                    "end": 8606,
                                    "name": "publicClass",
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
                        "body": {
                          "type": "BlockStatement",
                          "start": 8608,
                          "end": 8628,
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
                      "start": 8637,
                      "end": 8706,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 8637,
                        "end": 8651,
                        "name": "myPublicMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 8651,
                        "end": 8706,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 8652,
                            "end": 8684,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8657,
                              "end": 8684,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 8659,
                                "end": 8684,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 8659,
                                  "end": 8684,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 8659,
                                    "end": 8672,
                                    "name": "privateModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 8673,
                                    "end": 8684,
                                    "name": "publicClass",
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
                        "body": {
                          "type": "BlockStatement",
                          "start": 8686,
                          "end": 8706,
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
                      "start": 8715,
                      "end": 8866,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 8715,
                        "end": 8726,
                        "name": "constructor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "constructor",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 8726,
                        "end": 8866,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 8727,
                            "end": 8759,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8732,
                              "end": 8759,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 8734,
                                "end": 8759,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 8734,
                                  "end": 8759,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 8734,
                                    "end": 8747,
                                    "name": "privateModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 8748,
                                    "end": 8759,
                                    "name": "publicClass",
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
                          },
                          {
                            "type": "TSParameterProperty",
                            "start": 8761,
                            "end": 8802,
                            "accessibility": "private",
                            "decorators": [],
                            "override": false,
                            "parameter": {
                              "type": "Identifier",
                              "start": 8769,
                              "end": 8802,
                              "name": "param1",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 8775,
                                "end": 8802,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 8777,
                                  "end": 8802,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 8777,
                                    "end": 8802,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 8777,
                                      "end": 8790,
                                      "name": "privateModule",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 8791,
                                      "end": 8802,
                                      "name": "publicClass",
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
                            },
                            "readonly": false,
                            "static": false
                          },
                          {
                            "type": "TSParameterProperty",
                            "start": 8804,
                            "end": 8844,
                            "accessibility": "public",
                            "decorators": [],
                            "override": false,
                            "parameter": {
                              "type": "Identifier",
                              "start": 8811,
                              "end": 8844,
                              "name": "param2",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 8817,
                                "end": 8844,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 8819,
                                  "end": 8844,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 8819,
                                    "end": 8844,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 8819,
                                      "end": 8832,
                                      "name": "privateModule",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 8833,
                                      "end": 8844,
                                      "name": "publicClass",
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
                            },
                            "readonly": false,
                            "static": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 8846,
                          "end": 8866,
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
              "start": 8877,
              "end": 8989,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 8884,
                "end": 8989,
                "id": {
                  "type": "Identifier",
                  "start": 8893,
                  "end": 8938,
                  "name": "publicFunctionWithPrivateModuleParameterTypes",
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
                    "start": 8939,
                    "end": 8971,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8944,
                      "end": 8971,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 8946,
                        "end": 8971,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 8946,
                          "end": 8971,
                          "left": {
                            "type": "Identifier",
                            "start": 8946,
                            "end": 8959,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 8960,
                            "end": 8971,
                            "name": "publicClass",
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
                "body": {
                  "type": "BlockStatement",
                  "start": 8973,
                  "end": 8989,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 8994,
              "end": 9111,
              "declaration": {
                "type": "TSDeclareFunction",
                "start": 9001,
                "end": 9111,
                "id": {
                  "type": "Identifier",
                  "start": 9018,
                  "end": 9070,
                  "name": "publicAmbientFunctionWithPrivateModuleParameterTypes",
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
                    "start": 9071,
                    "end": 9103,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 9076,
                      "end": 9103,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 9078,
                        "end": 9103,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 9078,
                          "end": 9103,
                          "left": {
                            "type": "Identifier",
                            "start": 9078,
                            "end": 9091,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 9092,
                            "end": 9103,
                            "name": "publicClass",
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
                "body": null,
                "declare": true,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 9104,
                  "end": 9110,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 9106,
                    "end": 9110
                  }
                }
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "type"
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 9126,
              "end": 9367,
              "id": {
                "type": "Identifier",
                "start": 9136,
                "end": 9183,
                "name": "privateInterfaceWithPrivateModuleParameterTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 9184,
                "end": 9367,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 9194,
                    "end": 9246,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 9199,
                        "end": 9231,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 9204,
                          "end": 9231,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 9206,
                            "end": 9231,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 9206,
                              "end": 9231,
                              "left": {
                                "type": "Identifier",
                                "start": 9206,
                                "end": 9219,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 9220,
                                "end": 9231,
                                "name": "publicClass",
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
                      "start": 9232,
                      "end": 9245,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 9234,
                        "end": 9245,
                        "typeName": {
                          "type": "Identifier",
                          "start": 9234,
                          "end": 9245,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 9255,
                    "end": 9303,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 9256,
                        "end": 9288,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 9261,
                          "end": 9288,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 9263,
                            "end": 9288,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 9263,
                              "end": 9288,
                              "left": {
                                "type": "Identifier",
                                "start": 9263,
                                "end": 9276,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 9277,
                                "end": 9288,
                                "name": "publicClass",
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
                      "start": 9289,
                      "end": 9302,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 9291,
                        "end": 9302,
                        "typeName": {
                          "type": "Identifier",
                          "start": 9291,
                          "end": 9302,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 9312,
                    "end": 9361,
                    "key": {
                      "type": "Identifier",
                      "start": 9312,
                      "end": 9320,
                      "name": "myMethod",
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
                        "start": 9321,
                        "end": 9353,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 9326,
                          "end": 9353,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 9328,
                            "end": 9353,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 9328,
                              "end": 9353,
                              "left": {
                                "type": "Identifier",
                                "start": 9328,
                                "end": 9341,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 9342,
                                "end": 9353,
                                "name": "publicClass",
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
                      "start": 9354,
                      "end": 9360,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 9356,
                        "end": 9360
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
              "type": "ClassDeclaration",
              "start": 9372,
              "end": 9731,
              "id": {
                "type": "Identifier",
                "start": 9378,
                "end": 9421,
                "name": "privateClassWithPrivateModuleParameterTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 9422,
                "end": 9731,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 9432,
                    "end": 9505,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9439,
                      "end": 9459,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9459,
                      "end": 9505,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 9460,
                          "end": 9492,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9465,
                            "end": 9492,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9467,
                              "end": 9492,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 9467,
                                "end": 9492,
                                "left": {
                                  "type": "Identifier",
                                  "start": 9467,
                                  "end": 9480,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 9481,
                                  "end": 9492,
                                  "name": "publicClass",
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 9494,
                        "end": 9505,
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
                    "start": 9514,
                    "end": 9574,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9514,
                      "end": 9528,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9528,
                      "end": 9574,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 9529,
                          "end": 9561,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9534,
                            "end": 9561,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9536,
                              "end": 9561,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 9536,
                                "end": 9561,
                                "left": {
                                  "type": "Identifier",
                                  "start": 9536,
                                  "end": 9549,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 9550,
                                  "end": 9561,
                                  "name": "publicClass",
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 9563,
                        "end": 9574,
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
                    "start": 9583,
                    "end": 9725,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9583,
                      "end": 9594,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9594,
                      "end": 9725,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 9595,
                          "end": 9627,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9600,
                            "end": 9627,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9602,
                              "end": 9627,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 9602,
                                "end": 9627,
                                "left": {
                                  "type": "Identifier",
                                  "start": 9602,
                                  "end": 9615,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 9616,
                                  "end": 9627,
                                  "name": "publicClass",
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
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 9629,
                          "end": 9670,
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 9637,
                            "end": 9670,
                            "name": "param1",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 9643,
                              "end": 9670,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 9645,
                                "end": 9670,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 9645,
                                  "end": 9670,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 9645,
                                    "end": 9658,
                                    "name": "privateModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 9659,
                                    "end": 9670,
                                    "name": "publicClass",
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
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 9672,
                          "end": 9712,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 9679,
                            "end": 9712,
                            "name": "param2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 9685,
                              "end": 9712,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 9687,
                                "end": 9712,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 9687,
                                  "end": 9712,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 9687,
                                    "end": 9700,
                                    "name": "privateModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 9701,
                                    "end": 9712,
                                    "name": "publicClass",
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
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 9714,
                        "end": 9725,
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
            {
              "type": "FunctionDeclaration",
              "start": 9736,
              "end": 9833,
              "id": {
                "type": "Identifier",
                "start": 9745,
                "end": 9791,
                "name": "privateFunctionWithPrivateModuleParameterTypes",
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
                  "start": 9792,
                  "end": 9824,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 9797,
                    "end": 9824,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 9799,
                      "end": 9824,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 9799,
                        "end": 9824,
                        "left": {
                          "type": "Identifier",
                          "start": 9799,
                          "end": 9812,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 9813,
                          "end": 9824,
                          "name": "publicClass",
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
              "body": {
                "type": "BlockStatement",
                "start": 9826,
                "end": 9833,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            {
              "type": "TSDeclareFunction",
              "start": 9838,
              "end": 9949,
              "id": {
                "type": "Identifier",
                "start": 9855,
                "end": 9908,
                "name": "privateAmbientFunctionWithPrivateModuleParameterTypes",
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
                  "start": 9909,
                  "end": 9941,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 9914,
                    "end": 9941,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 9916,
                      "end": 9941,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 9916,
                        "end": 9941,
                        "left": {
                          "type": "Identifier",
                          "start": 9916,
                          "end": 9929,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 9930,
                          "end": 9941,
                          "name": "publicClass",
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
              "body": null,
              "declare": true,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 9942,
                "end": 9948,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 9944,
                  "end": 9948
                }
              }
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 9954,
      "end": 15025,
      "id": {
        "type": "Identifier",
        "start": 9961,
        "end": 9974,
        "name": "privateModule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9975,
        "end": 15025,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 9981,
            "end": 10007,
            "id": {
              "type": "Identifier",
              "start": 9987,
              "end": 9999,
              "name": "privateClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 10000,
              "end": 10007,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 10013,
            "end": 10045,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 10020,
              "end": 10045,
              "id": {
                "type": "Identifier",
                "start": 10026,
                "end": 10037,
                "name": "publicClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 10038,
                "end": 10045,
                "body": []
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
            "start": 10051,
            "end": 10252,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 10058,
              "end": 10252,
              "id": {
                "type": "Identifier",
                "start": 10068,
                "end": 10107,
                "name": "publicInterfaceWithPrivateParmeterTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 10108,
                "end": 10252,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 10118,
                    "end": 10157,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 10123,
                        "end": 10142,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 10128,
                          "end": 10142,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 10130,
                            "end": 10142,
                            "typeName": {
                              "type": "Identifier",
                              "start": 10130,
                              "end": 10142,
                              "name": "privateClass",
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
                      "start": 10143,
                      "end": 10156,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10145,
                        "end": 10156,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10145,
                          "end": 10156,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 10166,
                    "end": 10201,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 10167,
                        "end": 10186,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 10172,
                          "end": 10186,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 10174,
                            "end": 10186,
                            "typeName": {
                              "type": "Identifier",
                              "start": 10174,
                              "end": 10186,
                              "name": "privateClass",
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
                      "start": 10187,
                      "end": 10200,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10189,
                        "end": 10200,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10189,
                          "end": 10200,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 10210,
                    "end": 10246,
                    "key": {
                      "type": "Identifier",
                      "start": 10210,
                      "end": 10218,
                      "name": "myMethod",
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
                        "start": 10219,
                        "end": 10238,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 10224,
                          "end": 10238,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 10226,
                            "end": 10238,
                            "typeName": {
                              "type": "Identifier",
                              "start": 10226,
                              "end": 10238,
                              "name": "privateClass",
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
                      "start": 10239,
                      "end": 10245,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 10241,
                        "end": 10245
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 10258,
            "end": 10455,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 10265,
              "end": 10455,
              "id": {
                "type": "Identifier",
                "start": 10275,
                "end": 10313,
                "name": "publicInterfaceWithPublicParmeterTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 10314,
                "end": 10455,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 10324,
                    "end": 10362,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 10329,
                        "end": 10347,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 10334,
                          "end": 10347,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 10336,
                            "end": 10347,
                            "typeName": {
                              "type": "Identifier",
                              "start": 10336,
                              "end": 10347,
                              "name": "publicClass",
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
                      "start": 10348,
                      "end": 10361,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10350,
                        "end": 10361,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10350,
                          "end": 10361,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 10371,
                    "end": 10405,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 10372,
                        "end": 10390,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 10377,
                          "end": 10390,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 10379,
                            "end": 10390,
                            "typeName": {
                              "type": "Identifier",
                              "start": 10379,
                              "end": 10390,
                              "name": "publicClass",
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
                      "start": 10391,
                      "end": 10404,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10393,
                        "end": 10404,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10393,
                          "end": 10404,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 10414,
                    "end": 10449,
                    "key": {
                      "type": "Identifier",
                      "start": 10414,
                      "end": 10422,
                      "name": "myMethod",
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
                        "start": 10423,
                        "end": 10441,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 10428,
                          "end": 10441,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 10430,
                            "end": 10441,
                            "typeName": {
                              "type": "Identifier",
                              "start": 10430,
                              "end": 10441,
                              "name": "publicClass",
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
                      "start": 10442,
                      "end": 10448,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 10444,
                        "end": 10448
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
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 10461,
            "end": 10658,
            "id": {
              "type": "Identifier",
              "start": 10471,
              "end": 10511,
              "name": "privateInterfaceWithPrivateParmeterTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 10512,
              "end": 10658,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 10522,
                  "end": 10562,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 10527,
                      "end": 10546,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 10532,
                        "end": 10546,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 10534,
                          "end": 10546,
                          "typeName": {
                            "type": "Identifier",
                            "start": 10534,
                            "end": 10546,
                            "name": "privateClass",
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
                    "start": 10547,
                    "end": 10561,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 10549,
                      "end": 10561,
                      "typeName": {
                        "type": "Identifier",
                        "start": 10549,
                        "end": 10561,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 10571,
                  "end": 10607,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 10572,
                      "end": 10591,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 10577,
                        "end": 10591,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 10579,
                          "end": 10591,
                          "typeName": {
                            "type": "Identifier",
                            "start": 10579,
                            "end": 10591,
                            "name": "privateClass",
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
                    "start": 10592,
                    "end": 10606,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 10594,
                      "end": 10606,
                      "typeName": {
                        "type": "Identifier",
                        "start": 10594,
                        "end": 10606,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 10616,
                  "end": 10652,
                  "key": {
                    "type": "Identifier",
                    "start": 10616,
                    "end": 10624,
                    "name": "myMethod",
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
                      "start": 10625,
                      "end": 10644,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 10630,
                        "end": 10644,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 10632,
                          "end": 10644,
                          "typeName": {
                            "type": "Identifier",
                            "start": 10632,
                            "end": 10644,
                            "name": "privateClass",
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
                    "start": 10645,
                    "end": 10651,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 10647,
                      "end": 10651
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
            "start": 10664,
            "end": 10855,
            "id": {
              "type": "Identifier",
              "start": 10674,
              "end": 10713,
              "name": "privateInterfaceWithPublicParmeterTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 10714,
              "end": 10855,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 10724,
                  "end": 10762,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 10729,
                      "end": 10747,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 10734,
                        "end": 10747,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 10736,
                          "end": 10747,
                          "typeName": {
                            "type": "Identifier",
                            "start": 10736,
                            "end": 10747,
                            "name": "publicClass",
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
                    "start": 10748,
                    "end": 10761,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 10750,
                      "end": 10761,
                      "typeName": {
                        "type": "Identifier",
                        "start": 10750,
                        "end": 10761,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 10771,
                  "end": 10805,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 10772,
                      "end": 10790,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 10777,
                        "end": 10790,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 10779,
                          "end": 10790,
                          "typeName": {
                            "type": "Identifier",
                            "start": 10779,
                            "end": 10790,
                            "name": "publicClass",
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
                    "start": 10791,
                    "end": 10804,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 10793,
                      "end": 10804,
                      "typeName": {
                        "type": "Identifier",
                        "start": 10793,
                        "end": 10804,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 10814,
                  "end": 10849,
                  "key": {
                    "type": "Identifier",
                    "start": 10814,
                    "end": 10822,
                    "name": "myMethod",
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
                      "start": 10823,
                      "end": 10841,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 10828,
                        "end": 10841,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 10830,
                          "end": 10841,
                          "typeName": {
                            "type": "Identifier",
                            "start": 10830,
                            "end": 10841,
                            "name": "publicClass",
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
                    "start": 10842,
                    "end": 10848,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 10844,
                      "end": 10848
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
            "start": 10861,
            "end": 11301,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 10868,
              "end": 11301,
              "id": {
                "type": "Identifier",
                "start": 10874,
                "end": 10913,
                "name": "publicClassWithWithPrivateParmeterTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 10914,
                "end": 11301,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 10924,
                    "end": 10984,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 10931,
                      "end": 10951,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 10951,
                      "end": 10984,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 10952,
                          "end": 10971,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 10957,
                            "end": 10971,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 10959,
                              "end": 10971,
                              "typeName": {
                                "type": "Identifier",
                                "start": 10959,
                                "end": 10971,
                                "name": "privateClass",
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
                        "start": 10973,
                        "end": 10984,
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
                    "start": 10993,
                    "end": 11062,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11008,
                      "end": 11029,
                      "name": "myPrivateStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11029,
                      "end": 11062,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11030,
                          "end": 11049,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11035,
                            "end": 11049,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11037,
                              "end": 11049,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11037,
                                "end": 11049,
                                "name": "privateClass",
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
                        "start": 11051,
                        "end": 11062,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11071,
                    "end": 11118,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11071,
                      "end": 11085,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11085,
                      "end": 11118,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11086,
                          "end": 11105,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11091,
                            "end": 11105,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11093,
                              "end": 11105,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11093,
                                "end": 11105,
                                "name": "privateClass",
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
                        "start": 11107,
                        "end": 11118,
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
                    "start": 11127,
                    "end": 11183,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11135,
                      "end": 11150,
                      "name": "myPrivateMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11150,
                      "end": 11183,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11151,
                          "end": 11170,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11156,
                            "end": 11170,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11158,
                              "end": 11170,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11158,
                                "end": 11170,
                                "name": "privateClass",
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
                        "start": 11172,
                        "end": 11183,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11192,
                    "end": 11295,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11192,
                      "end": 11203,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11203,
                      "end": 11295,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11204,
                          "end": 11223,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11209,
                            "end": 11223,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11211,
                              "end": 11223,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11211,
                                "end": 11223,
                                "name": "privateClass",
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
                          "type": "TSParameterProperty",
                          "start": 11225,
                          "end": 11253,
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 11233,
                            "end": 11253,
                            "name": "param1",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 11239,
                              "end": 11253,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 11241,
                                "end": 11253,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 11241,
                                  "end": 11253,
                                  "name": "privateClass",
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
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 11255,
                          "end": 11282,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 11262,
                            "end": 11282,
                            "name": "param2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 11268,
                              "end": 11282,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 11270,
                                "end": 11282,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 11270,
                                  "end": 11282,
                                  "name": "privateClass",
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
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 11284,
                        "end": 11295,
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
            "start": 11307,
            "end": 11739,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 11314,
              "end": 11739,
              "id": {
                "type": "Identifier",
                "start": 11320,
                "end": 11358,
                "name": "publicClassWithWithPublicParmeterTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 11359,
                "end": 11739,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 11369,
                    "end": 11428,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11376,
                      "end": 11396,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11396,
                      "end": 11428,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11397,
                          "end": 11415,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11402,
                            "end": 11415,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11404,
                              "end": 11415,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11404,
                                "end": 11415,
                                "name": "publicClass",
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
                        "start": 11417,
                        "end": 11428,
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
                    "start": 11437,
                    "end": 11505,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11452,
                      "end": 11473,
                      "name": "myPrivateStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11473,
                      "end": 11505,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11474,
                          "end": 11492,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11479,
                            "end": 11492,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11481,
                              "end": 11492,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11481,
                                "end": 11492,
                                "name": "publicClass",
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
                        "start": 11494,
                        "end": 11505,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11514,
                    "end": 11560,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11514,
                      "end": 11528,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11528,
                      "end": 11560,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11529,
                          "end": 11547,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11534,
                            "end": 11547,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11536,
                              "end": 11547,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11536,
                                "end": 11547,
                                "name": "publicClass",
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
                        "start": 11549,
                        "end": 11560,
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
                    "start": 11569,
                    "end": 11624,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11577,
                      "end": 11592,
                      "name": "myPrivateMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11592,
                      "end": 11624,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11593,
                          "end": 11611,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11598,
                            "end": 11611,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11600,
                              "end": 11611,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11600,
                                "end": 11611,
                                "name": "publicClass",
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
                        "start": 11613,
                        "end": 11624,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11633,
                    "end": 11733,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11633,
                      "end": 11644,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11644,
                      "end": 11733,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11645,
                          "end": 11663,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11650,
                            "end": 11663,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11652,
                              "end": 11663,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11652,
                                "end": 11663,
                                "name": "publicClass",
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
                          "type": "TSParameterProperty",
                          "start": 11665,
                          "end": 11692,
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 11673,
                            "end": 11692,
                            "name": "param1",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 11679,
                              "end": 11692,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 11681,
                                "end": 11692,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 11681,
                                  "end": 11692,
                                  "name": "publicClass",
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
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 11694,
                          "end": 11720,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 11701,
                            "end": 11720,
                            "name": "param2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 11707,
                              "end": 11720,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 11709,
                                "end": 11720,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 11709,
                                  "end": 11720,
                                  "name": "publicClass",
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
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 11722,
                        "end": 11733,
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
            "type": "ClassDeclaration",
            "start": 11745,
            "end": 12179,
            "id": {
              "type": "Identifier",
              "start": 11751,
              "end": 11791,
              "name": "privateClassWithWithPrivateParmeterTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 11792,
              "end": 12179,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 11802,
                  "end": 11862,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 11809,
                    "end": 11829,
                    "name": "myPublicStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 11829,
                    "end": 11862,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 11830,
                        "end": 11849,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 11835,
                          "end": 11849,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 11837,
                            "end": 11849,
                            "typeName": {
                              "type": "Identifier",
                              "start": 11837,
                              "end": 11849,
                              "name": "privateClass",
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
                      "start": 11851,
                      "end": 11862,
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
                  "start": 11871,
                  "end": 11940,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 11886,
                    "end": 11907,
                    "name": "myPrivateStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 11907,
                    "end": 11940,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 11908,
                        "end": 11927,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 11913,
                          "end": 11927,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 11915,
                            "end": 11927,
                            "typeName": {
                              "type": "Identifier",
                              "start": 11915,
                              "end": 11927,
                              "name": "privateClass",
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
                      "start": 11929,
                      "end": 11940,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 11949,
                  "end": 11996,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 11949,
                    "end": 11963,
                    "name": "myPublicMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 11963,
                    "end": 11996,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 11964,
                        "end": 11983,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 11969,
                          "end": 11983,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 11971,
                            "end": 11983,
                            "typeName": {
                              "type": "Identifier",
                              "start": 11971,
                              "end": 11983,
                              "name": "privateClass",
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
                      "start": 11985,
                      "end": 11996,
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
                  "start": 12005,
                  "end": 12061,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 12013,
                    "end": 12028,
                    "name": "myPrivateMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12028,
                    "end": 12061,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12029,
                        "end": 12048,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12034,
                          "end": 12048,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12036,
                            "end": 12048,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12036,
                              "end": 12048,
                              "name": "privateClass",
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
                      "start": 12050,
                      "end": 12061,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 12070,
                  "end": 12173,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 12070,
                    "end": 12081,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12081,
                    "end": 12173,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12082,
                        "end": 12101,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12087,
                          "end": 12101,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12089,
                            "end": 12101,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12089,
                              "end": 12101,
                              "name": "privateClass",
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
                        "type": "TSParameterProperty",
                        "start": 12103,
                        "end": 12131,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 12111,
                          "end": 12131,
                          "name": "param1",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 12117,
                            "end": 12131,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 12119,
                              "end": 12131,
                              "typeName": {
                                "type": "Identifier",
                                "start": 12119,
                                "end": 12131,
                                "name": "privateClass",
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
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 12133,
                        "end": 12160,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 12140,
                          "end": 12160,
                          "name": "param2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 12146,
                            "end": 12160,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 12148,
                              "end": 12160,
                              "typeName": {
                                "type": "Identifier",
                                "start": 12148,
                                "end": 12160,
                                "name": "privateClass",
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
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 12162,
                      "end": 12173,
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
          {
            "type": "ClassDeclaration",
            "start": 12185,
            "end": 12611,
            "id": {
              "type": "Identifier",
              "start": 12191,
              "end": 12230,
              "name": "privateClassWithWithPublicParmeterTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 12231,
              "end": 12611,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 12241,
                  "end": 12300,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 12248,
                    "end": 12268,
                    "name": "myPublicStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12268,
                    "end": 12300,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12269,
                        "end": 12287,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12274,
                          "end": 12287,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12276,
                            "end": 12287,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12276,
                              "end": 12287,
                              "name": "publicClass",
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
                      "start": 12289,
                      "end": 12300,
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
                  "start": 12309,
                  "end": 12377,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 12324,
                    "end": 12345,
                    "name": "myPrivateStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12345,
                    "end": 12377,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12346,
                        "end": 12364,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12351,
                          "end": 12364,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12353,
                            "end": 12364,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12353,
                              "end": 12364,
                              "name": "publicClass",
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
                      "start": 12366,
                      "end": 12377,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 12386,
                  "end": 12432,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 12386,
                    "end": 12400,
                    "name": "myPublicMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12400,
                    "end": 12432,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12401,
                        "end": 12419,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12406,
                          "end": 12419,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12408,
                            "end": 12419,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12408,
                              "end": 12419,
                              "name": "publicClass",
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
                      "start": 12421,
                      "end": 12432,
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
                  "start": 12441,
                  "end": 12496,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 12449,
                    "end": 12464,
                    "name": "myPrivateMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12464,
                    "end": 12496,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12465,
                        "end": 12483,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12470,
                          "end": 12483,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12472,
                            "end": 12483,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12472,
                              "end": 12483,
                              "name": "publicClass",
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
                      "start": 12485,
                      "end": 12496,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 12505,
                  "end": 12605,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 12505,
                    "end": 12516,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12516,
                    "end": 12605,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12517,
                        "end": 12535,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12522,
                          "end": 12535,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12524,
                            "end": 12535,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12524,
                              "end": 12535,
                              "name": "publicClass",
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
                        "type": "TSParameterProperty",
                        "start": 12537,
                        "end": 12564,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 12545,
                          "end": 12564,
                          "name": "param1",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 12551,
                            "end": 12564,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 12553,
                              "end": 12564,
                              "typeName": {
                                "type": "Identifier",
                                "start": 12553,
                                "end": 12564,
                                "name": "publicClass",
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
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 12566,
                        "end": 12592,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 12573,
                          "end": 12592,
                          "name": "param2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 12579,
                            "end": 12592,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 12581,
                              "end": 12592,
                              "typeName": {
                                "type": "Identifier",
                                "start": 12581,
                                "end": 12592,
                                "name": "publicClass",
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
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 12594,
                      "end": 12605,
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
          {
            "type": "ExportNamedDeclaration",
            "start": 12617,
            "end": 12700,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 12624,
              "end": 12700,
              "id": {
                "type": "Identifier",
                "start": 12633,
                "end": 12671,
                "name": "publicFunctionWithPrivateParmeterTypes",
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
                  "start": 12672,
                  "end": 12691,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 12677,
                    "end": 12691,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 12679,
                      "end": 12691,
                      "typeName": {
                        "type": "Identifier",
                        "start": 12679,
                        "end": 12691,
                        "name": "privateClass",
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
                "start": 12693,
                "end": 12700,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 12705,
            "end": 12786,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 12712,
              "end": 12786,
              "id": {
                "type": "Identifier",
                "start": 12721,
                "end": 12758,
                "name": "publicFunctionWithPublicParmeterTypes",
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
                  "start": 12759,
                  "end": 12777,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 12764,
                    "end": 12777,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 12766,
                      "end": 12777,
                      "typeName": {
                        "type": "Identifier",
                        "start": 12766,
                        "end": 12777,
                        "name": "publicClass",
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
                "start": 12779,
                "end": 12786,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "FunctionDeclaration",
            "start": 12791,
            "end": 12868,
            "id": {
              "type": "Identifier",
              "start": 12800,
              "end": 12839,
              "name": "privateFunctionWithPrivateParmeterTypes",
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
                "start": 12840,
                "end": 12859,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 12845,
                  "end": 12859,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 12847,
                    "end": 12859,
                    "typeName": {
                      "type": "Identifier",
                      "start": 12847,
                      "end": 12859,
                      "name": "privateClass",
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
              "start": 12861,
              "end": 12868,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 12873,
            "end": 12948,
            "id": {
              "type": "Identifier",
              "start": 12882,
              "end": 12920,
              "name": "privateFunctionWithPublicParmeterTypes",
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
                "start": 12921,
                "end": 12939,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 12926,
                  "end": 12939,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 12928,
                    "end": 12939,
                    "typeName": {
                      "type": "Identifier",
                      "start": 12928,
                      "end": 12939,
                      "name": "publicClass",
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
              "start": 12941,
              "end": 12948,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 12954,
            "end": 13051,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 12961,
              "end": 13051,
              "id": {
                "type": "Identifier",
                "start": 12978,
                "end": 13023,
                "name": "publicAmbientFunctionWithPrivateParmeterTypes",
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
                  "start": 13024,
                  "end": 13043,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 13029,
                    "end": 13043,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 13031,
                      "end": 13043,
                      "typeName": {
                        "type": "Identifier",
                        "start": 13031,
                        "end": 13043,
                        "name": "privateClass",
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
              "declare": true,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 13044,
                "end": 13050,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 13046,
                  "end": 13050
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 13056,
            "end": 13151,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 13063,
              "end": 13151,
              "id": {
                "type": "Identifier",
                "start": 13080,
                "end": 13124,
                "name": "publicAmbientFunctionWithPublicParmeterTypes",
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
                  "start": 13125,
                  "end": 13143,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 13130,
                    "end": 13143,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 13132,
                      "end": 13143,
                      "typeName": {
                        "type": "Identifier",
                        "start": 13132,
                        "end": 13143,
                        "name": "publicClass",
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
              "declare": true,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 13144,
                "end": 13150,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 13146,
                  "end": 13150
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSDeclareFunction",
            "start": 13156,
            "end": 13247,
            "id": {
              "type": "Identifier",
              "start": 13173,
              "end": 13219,
              "name": "privateAmbientFunctionWithPrivateParmeterTypes",
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
                "start": 13220,
                "end": 13239,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 13225,
                  "end": 13239,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 13227,
                    "end": 13239,
                    "typeName": {
                      "type": "Identifier",
                      "start": 13227,
                      "end": 13239,
                      "name": "privateClass",
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
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 13240,
              "end": 13246,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 13242,
                "end": 13246
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 13252,
            "end": 13341,
            "id": {
              "type": "Identifier",
              "start": 13269,
              "end": 13314,
              "name": "privateAmbientFunctionWithPublicParmeterTypes",
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
                "start": 13315,
                "end": 13333,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 13320,
                  "end": 13333,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 13322,
                    "end": 13333,
                    "typeName": {
                      "type": "Identifier",
                      "start": 13322,
                      "end": 13333,
                      "name": "publicClass",
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
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 13334,
              "end": 13340,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 13336,
                "end": 13340
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 13347,
            "end": 13594,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 13354,
              "end": 13594,
              "id": {
                "type": "Identifier",
                "start": 13364,
                "end": 13410,
                "name": "publicInterfaceWithPrivateModuleParameterTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 13411,
                "end": 13594,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 13421,
                    "end": 13473,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 13426,
                        "end": 13458,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 13431,
                          "end": 13458,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 13433,
                            "end": 13458,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 13433,
                              "end": 13458,
                              "left": {
                                "type": "Identifier",
                                "start": 13433,
                                "end": 13446,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 13447,
                                "end": 13458,
                                "name": "publicClass",
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
                      "start": 13459,
                      "end": 13472,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 13461,
                        "end": 13472,
                        "typeName": {
                          "type": "Identifier",
                          "start": 13461,
                          "end": 13472,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 13482,
                    "end": 13530,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 13483,
                        "end": 13515,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 13488,
                          "end": 13515,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 13490,
                            "end": 13515,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 13490,
                              "end": 13515,
                              "left": {
                                "type": "Identifier",
                                "start": 13490,
                                "end": 13503,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 13504,
                                "end": 13515,
                                "name": "publicClass",
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
                      "start": 13516,
                      "end": 13529,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 13518,
                        "end": 13529,
                        "typeName": {
                          "type": "Identifier",
                          "start": 13518,
                          "end": 13529,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 13539,
                    "end": 13588,
                    "key": {
                      "type": "Identifier",
                      "start": 13539,
                      "end": 13547,
                      "name": "myMethod",
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
                        "start": 13548,
                        "end": 13580,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 13553,
                          "end": 13580,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 13555,
                            "end": 13580,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 13555,
                              "end": 13580,
                              "left": {
                                "type": "Identifier",
                                "start": 13555,
                                "end": 13568,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 13569,
                                "end": 13580,
                                "name": "publicClass",
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
                      "start": 13581,
                      "end": 13587,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 13583,
                        "end": 13587
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 13599,
            "end": 13964,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 13606,
              "end": 13964,
              "id": {
                "type": "Identifier",
                "start": 13612,
                "end": 13654,
                "name": "publicClassWithPrivateModuleParameterTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 13655,
                "end": 13964,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 13665,
                    "end": 13738,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 13672,
                      "end": 13692,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 13692,
                      "end": 13738,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 13693,
                          "end": 13725,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 13698,
                            "end": 13725,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 13700,
                              "end": 13725,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 13700,
                                "end": 13725,
                                "left": {
                                  "type": "Identifier",
                                  "start": 13700,
                                  "end": 13713,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 13714,
                                  "end": 13725,
                                  "name": "publicClass",
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 13727,
                        "end": 13738,
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
                    "start": 13747,
                    "end": 13807,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 13747,
                      "end": 13761,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 13761,
                      "end": 13807,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 13762,
                          "end": 13794,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 13767,
                            "end": 13794,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 13769,
                              "end": 13794,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 13769,
                                "end": 13794,
                                "left": {
                                  "type": "Identifier",
                                  "start": 13769,
                                  "end": 13782,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 13783,
                                  "end": 13794,
                                  "name": "publicClass",
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 13796,
                        "end": 13807,
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
                    "start": 13816,
                    "end": 13958,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 13816,
                      "end": 13827,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 13827,
                      "end": 13958,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 13828,
                          "end": 13860,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 13833,
                            "end": 13860,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 13835,
                              "end": 13860,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 13835,
                                "end": 13860,
                                "left": {
                                  "type": "Identifier",
                                  "start": 13835,
                                  "end": 13848,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 13849,
                                  "end": 13860,
                                  "name": "publicClass",
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
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 13862,
                          "end": 13903,
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 13870,
                            "end": 13903,
                            "name": "param1",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 13876,
                              "end": 13903,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 13878,
                                "end": 13903,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 13878,
                                  "end": 13903,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 13878,
                                    "end": 13891,
                                    "name": "privateModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 13892,
                                    "end": 13903,
                                    "name": "publicClass",
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
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 13905,
                          "end": 13945,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 13912,
                            "end": 13945,
                            "name": "param2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 13918,
                              "end": 13945,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 13920,
                                "end": 13945,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 13920,
                                  "end": 13945,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 13920,
                                    "end": 13933,
                                    "name": "privateModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 13934,
                                    "end": 13945,
                                    "name": "publicClass",
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
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 13947,
                        "end": 13958,
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
            "start": 13969,
            "end": 14072,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 13976,
              "end": 14072,
              "id": {
                "type": "Identifier",
                "start": 13985,
                "end": 14030,
                "name": "publicFunctionWithPrivateModuleParameterTypes",
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
                  "start": 14031,
                  "end": 14063,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 14036,
                    "end": 14063,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 14038,
                      "end": 14063,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 14038,
                        "end": 14063,
                        "left": {
                          "type": "Identifier",
                          "start": 14038,
                          "end": 14051,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 14052,
                          "end": 14063,
                          "name": "publicClass",
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
              "body": {
                "type": "BlockStatement",
                "start": 14065,
                "end": 14072,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 14077,
            "end": 14194,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 14084,
              "end": 14194,
              "id": {
                "type": "Identifier",
                "start": 14101,
                "end": 14153,
                "name": "publicAmbientFunctionWithPrivateModuleParameterTypes",
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
                  "start": 14154,
                  "end": 14186,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 14159,
                    "end": 14186,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 14161,
                      "end": 14186,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 14161,
                        "end": 14186,
                        "left": {
                          "type": "Identifier",
                          "start": 14161,
                          "end": 14174,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 14175,
                          "end": 14186,
                          "name": "publicClass",
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
              "body": null,
              "declare": true,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 14187,
                "end": 14193,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 14189,
                  "end": 14193
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 14200,
            "end": 14441,
            "id": {
              "type": "Identifier",
              "start": 14210,
              "end": 14257,
              "name": "privateInterfaceWithPrivateModuleParameterTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 14258,
              "end": 14441,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 14268,
                  "end": 14320,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 14273,
                      "end": 14305,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 14278,
                        "end": 14305,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 14280,
                          "end": 14305,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 14280,
                            "end": 14305,
                            "left": {
                              "type": "Identifier",
                              "start": 14280,
                              "end": 14293,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 14294,
                              "end": 14305,
                              "name": "publicClass",
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
                    "start": 14306,
                    "end": 14319,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 14308,
                      "end": 14319,
                      "typeName": {
                        "type": "Identifier",
                        "start": 14308,
                        "end": 14319,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 14329,
                  "end": 14377,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 14330,
                      "end": 14362,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 14335,
                        "end": 14362,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 14337,
                          "end": 14362,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 14337,
                            "end": 14362,
                            "left": {
                              "type": "Identifier",
                              "start": 14337,
                              "end": 14350,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 14351,
                              "end": 14362,
                              "name": "publicClass",
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
                    "start": 14363,
                    "end": 14376,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 14365,
                      "end": 14376,
                      "typeName": {
                        "type": "Identifier",
                        "start": 14365,
                        "end": 14376,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 14386,
                  "end": 14435,
                  "key": {
                    "type": "Identifier",
                    "start": 14386,
                    "end": 14394,
                    "name": "myMethod",
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
                      "start": 14395,
                      "end": 14427,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 14400,
                        "end": 14427,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 14402,
                          "end": 14427,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 14402,
                            "end": 14427,
                            "left": {
                              "type": "Identifier",
                              "start": 14402,
                              "end": 14415,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 14416,
                              "end": 14427,
                              "name": "publicClass",
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
                    "start": 14428,
                    "end": 14434,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 14430,
                      "end": 14434
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
            "type": "ClassDeclaration",
            "start": 14446,
            "end": 14805,
            "id": {
              "type": "Identifier",
              "start": 14452,
              "end": 14495,
              "name": "privateClassWithPrivateModuleParameterTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 14496,
              "end": 14805,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 14506,
                  "end": 14579,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 14513,
                    "end": 14533,
                    "name": "myPublicStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14533,
                    "end": 14579,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 14534,
                        "end": 14566,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 14539,
                          "end": 14566,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 14541,
                            "end": 14566,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 14541,
                              "end": 14566,
                              "left": {
                                "type": "Identifier",
                                "start": 14541,
                                "end": 14554,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 14555,
                                "end": 14566,
                                "name": "publicClass",
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
                    "body": {
                      "type": "BlockStatement",
                      "start": 14568,
                      "end": 14579,
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
                  "start": 14588,
                  "end": 14648,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 14588,
                    "end": 14602,
                    "name": "myPublicMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14602,
                    "end": 14648,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 14603,
                        "end": 14635,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 14608,
                          "end": 14635,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 14610,
                            "end": 14635,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 14610,
                              "end": 14635,
                              "left": {
                                "type": "Identifier",
                                "start": 14610,
                                "end": 14623,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 14624,
                                "end": 14635,
                                "name": "publicClass",
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
                    "body": {
                      "type": "BlockStatement",
                      "start": 14637,
                      "end": 14648,
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
                  "start": 14657,
                  "end": 14799,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 14657,
                    "end": 14668,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14668,
                    "end": 14799,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 14669,
                        "end": 14701,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 14674,
                          "end": 14701,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 14676,
                            "end": 14701,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 14676,
                              "end": 14701,
                              "left": {
                                "type": "Identifier",
                                "start": 14676,
                                "end": 14689,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 14690,
                                "end": 14701,
                                "name": "publicClass",
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
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 14703,
                        "end": 14744,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 14711,
                          "end": 14744,
                          "name": "param1",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 14717,
                            "end": 14744,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 14719,
                              "end": 14744,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 14719,
                                "end": 14744,
                                "left": {
                                  "type": "Identifier",
                                  "start": 14719,
                                  "end": 14732,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 14733,
                                  "end": 14744,
                                  "name": "publicClass",
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
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 14746,
                        "end": 14786,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 14753,
                          "end": 14786,
                          "name": "param2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 14759,
                            "end": 14786,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 14761,
                              "end": 14786,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 14761,
                                "end": 14786,
                                "left": {
                                  "type": "Identifier",
                                  "start": 14761,
                                  "end": 14774,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 14775,
                                  "end": 14786,
                                  "name": "publicClass",
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
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 14788,
                      "end": 14799,
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
          {
            "type": "FunctionDeclaration",
            "start": 14810,
            "end": 14907,
            "id": {
              "type": "Identifier",
              "start": 14819,
              "end": 14865,
              "name": "privateFunctionWithPrivateModuleParameterTypes",
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
                "start": 14866,
                "end": 14898,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 14871,
                  "end": 14898,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 14873,
                    "end": 14898,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 14873,
                      "end": 14898,
                      "left": {
                        "type": "Identifier",
                        "start": 14873,
                        "end": 14886,
                        "name": "privateModule",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 14887,
                        "end": 14898,
                        "name": "publicClass",
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
            "body": {
              "type": "BlockStatement",
              "start": 14900,
              "end": 14907,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSDeclareFunction",
            "start": 14912,
            "end": 15023,
            "id": {
              "type": "Identifier",
              "start": 14929,
              "end": 14982,
              "name": "privateAmbientFunctionWithPrivateModuleParameterTypes",
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
                "start": 14983,
                "end": 15015,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 14988,
                  "end": 15015,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 14990,
                    "end": 15015,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 14990,
                      "end": 15015,
                      "left": {
                        "type": "Identifier",
                        "start": 14990,
                        "end": 15003,
                        "name": "privateModule",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 15004,
                        "end": 15015,
                        "name": "publicClass",
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
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 15016,
              "end": 15022,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 15018,
                "end": 15022
              }
            }
          }
        ]
      },
      "kind": "module",
      "declare": false,
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
  "end": 11659,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 25,
        "name": "publicClassInGlobal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 29,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 30,
      "end": 252,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 86,
        "name": "publicInterfaceWithPublicParmeterTypesInGlobal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 87,
        "end": 252,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 93,
            "end": 147,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 98,
                "end": 124,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 103,
                  "end": 124,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 105,
                    "end": 124,
                    "typeName": {
                      "type": "Identifier",
                      "start": 105,
                      "end": 124,
                      "name": "publicClassInGlobal",
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
              "start": 125,
              "end": 146,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 127,
                "end": 146,
                "typeName": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 146,
                  "name": "publicClassInGlobal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 152,
            "end": 202,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 153,
                "end": 179,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 158,
                  "end": 179,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 160,
                    "end": 179,
                    "typeName": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 179,
                      "name": "publicClassInGlobal",
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
              "start": 180,
              "end": 201,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 182,
                "end": 201,
                "typeName": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 201,
                  "name": "publicClassInGlobal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 207,
            "end": 250,
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 215,
              "name": "myMethod",
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
                "start": 216,
                "end": 242,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 221,
                  "end": 242,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 223,
                    "end": 242,
                    "typeName": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 242,
                      "name": "publicClassInGlobal",
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
              "start": 243,
              "end": 249,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 245,
                "end": 249
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
      "type": "ClassDeclaration",
      "start": 253,
      "end": 698,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 305,
        "name": "publicClassWithWithPublicParmeterTypesInGlobal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 306,
        "end": 698,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 312,
            "end": 375,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 319,
              "end": 339,
              "name": "myPublicStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 339,
              "end": 375,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 340,
                  "end": 366,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 345,
                    "end": 366,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 347,
                      "end": 366,
                      "typeName": {
                        "type": "Identifier",
                        "start": 347,
                        "end": 366,
                        "name": "publicClassInGlobal",
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
                "start": 368,
                "end": 375,
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
            "start": 380,
            "end": 452,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 395,
              "end": 416,
              "name": "myPrivateStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 416,
              "end": 452,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 417,
                  "end": 443,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 422,
                    "end": 443,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 424,
                      "end": 443,
                      "typeName": {
                        "type": "Identifier",
                        "start": 424,
                        "end": 443,
                        "name": "publicClassInGlobal",
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
                "start": 445,
                "end": 452,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 457,
            "end": 507,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 457,
              "end": 471,
              "name": "myPublicMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 471,
              "end": 507,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 472,
                  "end": 498,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 477,
                    "end": 498,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 479,
                      "end": 498,
                      "typeName": {
                        "type": "Identifier",
                        "start": 479,
                        "end": 498,
                        "name": "publicClassInGlobal",
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
                "start": 500,
                "end": 507,
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
            "start": 512,
            "end": 571,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 520,
              "end": 535,
              "name": "myPrivateMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 535,
              "end": 571,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 536,
                  "end": 562,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 541,
                    "end": 562,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 543,
                      "end": 562,
                      "typeName": {
                        "type": "Identifier",
                        "start": 543,
                        "end": 562,
                        "name": "publicClassInGlobal",
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
                "start": 564,
                "end": 571,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 576,
            "end": 696,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 576,
              "end": 587,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 587,
              "end": 696,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 588,
                  "end": 614,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 593,
                    "end": 614,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 595,
                      "end": 614,
                      "typeName": {
                        "type": "Identifier",
                        "start": 595,
                        "end": 614,
                        "name": "publicClassInGlobal",
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
                  "type": "TSParameterProperty",
                  "start": 616,
                  "end": 651,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 624,
                    "end": 651,
                    "name": "param1",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 630,
                      "end": 651,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 632,
                        "end": 651,
                        "typeName": {
                          "type": "Identifier",
                          "start": 632,
                          "end": 651,
                          "name": "publicClassInGlobal",
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
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 653,
                  "end": 687,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 660,
                    "end": 687,
                    "name": "param2",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 666,
                      "end": 687,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 668,
                        "end": 687,
                        "typeName": {
                          "type": "Identifier",
                          "start": 668,
                          "end": 687,
                          "name": "publicClassInGlobal",
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
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 689,
                "end": 696,
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
    {
      "type": "FunctionDeclaration",
      "start": 699,
      "end": 785,
      "id": {
        "type": "Identifier",
        "start": 708,
        "end": 753,
        "name": "publicFunctionWithPublicParmeterTypesInGlobal",
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
          "start": 754,
          "end": 780,
          "name": "param",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 759,
            "end": 780,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 761,
              "end": 780,
              "typeName": {
                "type": "Identifier",
                "start": 761,
                "end": 780,
                "name": "publicClassInGlobal",
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
        "start": 782,
        "end": 785,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 786,
      "end": 890,
      "id": {
        "type": "Identifier",
        "start": 803,
        "end": 855,
        "name": "publicAmbientFunctionWithPublicParmeterTypesInGlobal",
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
          "start": 856,
          "end": 882,
          "name": "param",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 861,
            "end": 882,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 863,
              "end": 882,
              "typeName": {
                "type": "Identifier",
                "start": 863,
                "end": 882,
                "name": "publicClassInGlobal",
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
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 883,
        "end": 889,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 885,
          "end": 889
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 892,
      "end": 11659,
      "id": {
        "type": "Identifier",
        "start": 899,
        "end": 919,
        "name": "publicModuleInGlobal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 920,
        "end": 11659,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 926,
            "end": 952,
            "id": {
              "type": "Identifier",
              "start": 932,
              "end": 944,
              "name": "privateClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 945,
              "end": 952,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 958,
            "end": 990,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 965,
              "end": 990,
              "id": {
                "type": "Identifier",
                "start": 971,
                "end": 982,
                "name": "publicClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 983,
                "end": 990,
                "body": []
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
            "type": "TSModuleDeclaration",
            "start": 996,
            "end": 6535,
            "id": {
              "type": "Identifier",
              "start": 1003,
              "end": 1016,
              "name": "privateModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 1017,
              "end": 6535,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 1027,
                  "end": 1057,
                  "id": {
                    "type": "Identifier",
                    "start": 1033,
                    "end": 1045,
                    "name": "privateClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 1046,
                    "end": 1057,
                    "body": []
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 1067,
                  "end": 1103,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 1074,
                    "end": 1103,
                    "id": {
                      "type": "Identifier",
                      "start": 1080,
                      "end": 1091,
                      "name": "publicClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 1092,
                      "end": 1103,
                      "body": []
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
                  "start": 1113,
                  "end": 1330,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 1120,
                    "end": 1330,
                    "id": {
                      "type": "Identifier",
                      "start": 1130,
                      "end": 1169,
                      "name": "publicInterfaceWithPrivateParmeterTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 1170,
                      "end": 1330,
                      "body": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 1184,
                          "end": 1223,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1189,
                              "end": 1208,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1194,
                                "end": 1208,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1196,
                                  "end": 1208,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1196,
                                    "end": 1208,
                                    "name": "privateClass",
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
                            "start": 1209,
                            "end": 1222,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1211,
                              "end": 1222,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1211,
                                "end": 1222,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 1236,
                          "end": 1271,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1237,
                              "end": 1256,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1242,
                                "end": 1256,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1244,
                                  "end": 1256,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1244,
                                    "end": 1256,
                                    "name": "privateClass",
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
                            "start": 1257,
                            "end": 1270,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1259,
                              "end": 1270,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1259,
                                "end": 1270,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        {
                          "type": "TSMethodSignature",
                          "start": 1284,
                          "end": 1320,
                          "key": {
                            "type": "Identifier",
                            "start": 1284,
                            "end": 1292,
                            "name": "myMethod",
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
                              "start": 1293,
                              "end": 1312,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1298,
                                "end": 1312,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1300,
                                  "end": 1312,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1300,
                                    "end": 1312,
                                    "name": "privateClass",
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
                            "start": 1313,
                            "end": 1319,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1315,
                              "end": 1319
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
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 1340,
                  "end": 1553,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 1347,
                    "end": 1553,
                    "id": {
                      "type": "Identifier",
                      "start": 1357,
                      "end": 1395,
                      "name": "publicInterfaceWithPublicParmeterTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 1396,
                      "end": 1553,
                      "body": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 1410,
                          "end": 1448,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1415,
                              "end": 1433,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1420,
                                "end": 1433,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1422,
                                  "end": 1433,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1422,
                                    "end": 1433,
                                    "name": "publicClass",
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
                            "start": 1434,
                            "end": 1447,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1436,
                              "end": 1447,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1436,
                                "end": 1447,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 1461,
                          "end": 1495,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1462,
                              "end": 1480,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1467,
                                "end": 1480,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1469,
                                  "end": 1480,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1469,
                                    "end": 1480,
                                    "name": "publicClass",
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
                            "start": 1481,
                            "end": 1494,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1483,
                              "end": 1494,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1483,
                                "end": 1494,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        {
                          "type": "TSMethodSignature",
                          "start": 1508,
                          "end": 1543,
                          "key": {
                            "type": "Identifier",
                            "start": 1508,
                            "end": 1516,
                            "name": "myMethod",
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
                              "start": 1517,
                              "end": 1535,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1522,
                                "end": 1535,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1524,
                                  "end": 1535,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1524,
                                    "end": 1535,
                                    "name": "publicClass",
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
                            "start": 1536,
                            "end": 1542,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1538,
                              "end": 1542
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
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 1563,
                  "end": 1776,
                  "id": {
                    "type": "Identifier",
                    "start": 1573,
                    "end": 1613,
                    "name": "privateInterfaceWithPrivateParmeterTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1614,
                    "end": 1776,
                    "body": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1628,
                        "end": 1668,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1633,
                            "end": 1652,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1638,
                              "end": 1652,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1640,
                                "end": 1652,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1640,
                                  "end": 1652,
                                  "name": "privateClass",
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
                          "start": 1653,
                          "end": 1667,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1655,
                            "end": 1667,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1655,
                              "end": 1667,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1681,
                        "end": 1717,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1682,
                            "end": 1701,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1687,
                              "end": 1701,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1689,
                                "end": 1701,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1689,
                                  "end": 1701,
                                  "name": "privateClass",
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
                          "start": 1702,
                          "end": 1716,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1704,
                            "end": 1716,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1704,
                              "end": 1716,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "TSMethodSignature",
                        "start": 1730,
                        "end": 1766,
                        "key": {
                          "type": "Identifier",
                          "start": 1730,
                          "end": 1738,
                          "name": "myMethod",
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
                            "start": 1739,
                            "end": 1758,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1744,
                              "end": 1758,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1746,
                                "end": 1758,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1746,
                                  "end": 1758,
                                  "name": "privateClass",
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
                          "start": 1759,
                          "end": 1765,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 1761,
                            "end": 1765
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
                  "start": 1786,
                  "end": 1993,
                  "id": {
                    "type": "Identifier",
                    "start": 1796,
                    "end": 1835,
                    "name": "privateInterfaceWithPublicParmeterTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1836,
                    "end": 1993,
                    "body": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1850,
                        "end": 1888,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1855,
                            "end": 1873,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1860,
                              "end": 1873,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1862,
                                "end": 1873,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1862,
                                  "end": 1873,
                                  "name": "publicClass",
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
                          "start": 1874,
                          "end": 1887,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1876,
                            "end": 1887,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1876,
                              "end": 1887,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1901,
                        "end": 1935,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1902,
                            "end": 1920,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1907,
                              "end": 1920,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1909,
                                "end": 1920,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1909,
                                  "end": 1920,
                                  "name": "publicClass",
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
                          "start": 1921,
                          "end": 1934,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1923,
                            "end": 1934,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1923,
                              "end": 1934,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "TSMethodSignature",
                        "start": 1948,
                        "end": 1983,
                        "key": {
                          "type": "Identifier",
                          "start": 1948,
                          "end": 1956,
                          "name": "myMethod",
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
                            "start": 1957,
                            "end": 1975,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1962,
                              "end": 1975,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1964,
                                "end": 1975,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1964,
                                  "end": 1975,
                                  "name": "publicClass",
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
                          "start": 1976,
                          "end": 1982,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 1978,
                            "end": 1982
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
                  "start": 2003,
                  "end": 2487,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 2010,
                    "end": 2487,
                    "id": {
                      "type": "Identifier",
                      "start": 2016,
                      "end": 2055,
                      "name": "publicClassWithWithPrivateParmeterTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 2056,
                      "end": 2487,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 2070,
                          "end": 2134,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2077,
                            "end": 2097,
                            "name": "myPublicStaticMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2097,
                            "end": 2134,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2098,
                                "end": 2117,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2103,
                                  "end": 2117,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2105,
                                    "end": 2117,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2105,
                                      "end": 2117,
                                      "name": "privateClass",
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
                              "start": 2119,
                              "end": 2134,
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
                          "start": 2147,
                          "end": 2220,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2162,
                            "end": 2183,
                            "name": "myPrivateStaticMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2183,
                            "end": 2220,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2184,
                                "end": 2203,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2189,
                                  "end": 2203,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2191,
                                    "end": 2203,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2191,
                                      "end": 2203,
                                      "name": "privateClass",
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
                              "start": 2205,
                              "end": 2220,
                              "body": []
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "decorators": [],
                          "override": false,
                          "optional": false,
                          "accessibility": "private"
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 2233,
                          "end": 2284,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2233,
                            "end": 2247,
                            "name": "myPublicMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2247,
                            "end": 2284,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2248,
                                "end": 2267,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2253,
                                  "end": 2267,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2255,
                                    "end": 2267,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2255,
                                      "end": 2267,
                                      "name": "privateClass",
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
                              "start": 2269,
                              "end": 2284,
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
                          "start": 2297,
                          "end": 2357,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2305,
                            "end": 2320,
                            "name": "myPrivateMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2320,
                            "end": 2357,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2321,
                                "end": 2340,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2326,
                                  "end": 2340,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2328,
                                    "end": 2340,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2328,
                                      "end": 2340,
                                      "name": "privateClass",
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
                              "start": 2342,
                              "end": 2357,
                              "body": []
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "decorators": [],
                          "override": false,
                          "optional": false,
                          "accessibility": "private"
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 2370,
                          "end": 2477,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2370,
                            "end": 2381,
                            "name": "constructor",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "constructor",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2381,
                            "end": 2477,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2382,
                                "end": 2401,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2387,
                                  "end": 2401,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2389,
                                    "end": 2401,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2389,
                                      "end": 2401,
                                      "name": "privateClass",
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
                                "type": "TSParameterProperty",
                                "start": 2403,
                                "end": 2431,
                                "accessibility": "private",
                                "decorators": [],
                                "override": false,
                                "parameter": {
                                  "type": "Identifier",
                                  "start": 2411,
                                  "end": 2431,
                                  "name": "param1",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2417,
                                    "end": 2431,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2419,
                                      "end": 2431,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2419,
                                        "end": 2431,
                                        "name": "privateClass",
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
                                "readonly": false,
                                "static": false
                              },
                              {
                                "type": "TSParameterProperty",
                                "start": 2433,
                                "end": 2460,
                                "accessibility": "public",
                                "decorators": [],
                                "override": false,
                                "parameter": {
                                  "type": "Identifier",
                                  "start": 2440,
                                  "end": 2460,
                                  "name": "param2",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2446,
                                    "end": 2460,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2448,
                                      "end": 2460,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2448,
                                        "end": 2460,
                                        "name": "privateClass",
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
                                "readonly": false,
                                "static": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 2462,
                              "end": 2477,
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
                  "start": 2497,
                  "end": 2973,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 2504,
                    "end": 2973,
                    "id": {
                      "type": "Identifier",
                      "start": 2510,
                      "end": 2548,
                      "name": "publicClassWithWithPublicParmeterTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 2549,
                      "end": 2973,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 2563,
                          "end": 2626,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2570,
                            "end": 2590,
                            "name": "myPublicStaticMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2590,
                            "end": 2626,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2591,
                                "end": 2609,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2596,
                                  "end": 2609,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2598,
                                    "end": 2609,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2598,
                                      "end": 2609,
                                      "name": "publicClass",
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
                              "start": 2611,
                              "end": 2626,
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
                          "start": 2639,
                          "end": 2711,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2654,
                            "end": 2675,
                            "name": "myPrivateStaticMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2675,
                            "end": 2711,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2676,
                                "end": 2694,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2681,
                                  "end": 2694,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2683,
                                    "end": 2694,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2683,
                                      "end": 2694,
                                      "name": "publicClass",
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
                              "start": 2696,
                              "end": 2711,
                              "body": []
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "decorators": [],
                          "override": false,
                          "optional": false,
                          "accessibility": "private"
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 2724,
                          "end": 2774,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2724,
                            "end": 2738,
                            "name": "myPublicMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2738,
                            "end": 2774,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2739,
                                "end": 2757,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2744,
                                  "end": 2757,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2746,
                                    "end": 2757,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2746,
                                      "end": 2757,
                                      "name": "publicClass",
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
                              "start": 2759,
                              "end": 2774,
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
                          "start": 2787,
                          "end": 2846,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2795,
                            "end": 2810,
                            "name": "myPrivateMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2810,
                            "end": 2846,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2811,
                                "end": 2829,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2816,
                                  "end": 2829,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2818,
                                    "end": 2829,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2818,
                                      "end": 2829,
                                      "name": "publicClass",
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
                              "start": 2831,
                              "end": 2846,
                              "body": []
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "decorators": [],
                          "override": false,
                          "optional": false,
                          "accessibility": "private"
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 2859,
                          "end": 2963,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2859,
                            "end": 2870,
                            "name": "constructor",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "constructor",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2870,
                            "end": 2963,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2871,
                                "end": 2889,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2876,
                                  "end": 2889,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2878,
                                    "end": 2889,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2878,
                                      "end": 2889,
                                      "name": "publicClass",
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
                                "type": "TSParameterProperty",
                                "start": 2891,
                                "end": 2918,
                                "accessibility": "private",
                                "decorators": [],
                                "override": false,
                                "parameter": {
                                  "type": "Identifier",
                                  "start": 2899,
                                  "end": 2918,
                                  "name": "param1",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2905,
                                    "end": 2918,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2907,
                                      "end": 2918,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2907,
                                        "end": 2918,
                                        "name": "publicClass",
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
                                "readonly": false,
                                "static": false
                              },
                              {
                                "type": "TSParameterProperty",
                                "start": 2920,
                                "end": 2946,
                                "accessibility": "public",
                                "decorators": [],
                                "override": false,
                                "parameter": {
                                  "type": "Identifier",
                                  "start": 2927,
                                  "end": 2946,
                                  "name": "param2",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2933,
                                    "end": 2946,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2935,
                                      "end": 2946,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2935,
                                        "end": 2946,
                                        "name": "publicClass",
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
                                "readonly": false,
                                "static": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 2948,
                              "end": 2963,
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
                  "type": "ClassDeclaration",
                  "start": 2983,
                  "end": 3461,
                  "id": {
                    "type": "Identifier",
                    "start": 2989,
                    "end": 3029,
                    "name": "privateClassWithWithPrivateParmeterTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 3030,
                    "end": 3461,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 3044,
                        "end": 3108,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3051,
                          "end": 3071,
                          "name": "myPublicStaticMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "method",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3071,
                          "end": 3108,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 3072,
                              "end": 3091,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3077,
                                "end": 3091,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 3079,
                                  "end": 3091,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3079,
                                    "end": 3091,
                                    "name": "privateClass",
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
                            "start": 3093,
                            "end": 3108,
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
                        "start": 3121,
                        "end": 3194,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3136,
                          "end": 3157,
                          "name": "myPrivateStaticMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "method",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3157,
                          "end": 3194,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 3158,
                              "end": 3177,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3163,
                                "end": 3177,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 3165,
                                  "end": 3177,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3165,
                                    "end": 3177,
                                    "name": "privateClass",
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
                            "start": 3179,
                            "end": 3194,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": "private"
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 3207,
                        "end": 3258,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3207,
                          "end": 3221,
                          "name": "myPublicMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "method",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3221,
                          "end": 3258,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 3222,
                              "end": 3241,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3227,
                                "end": 3241,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 3229,
                                  "end": 3241,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3229,
                                    "end": 3241,
                                    "name": "privateClass",
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
                            "start": 3243,
                            "end": 3258,
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
                        "start": 3271,
                        "end": 3331,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3279,
                          "end": 3294,
                          "name": "myPrivateMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "method",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3294,
                          "end": 3331,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 3295,
                              "end": 3314,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3300,
                                "end": 3314,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 3302,
                                  "end": 3314,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3302,
                                    "end": 3314,
                                    "name": "privateClass",
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
                            "start": 3316,
                            "end": 3331,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": "private"
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 3344,
                        "end": 3451,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3344,
                          "end": 3355,
                          "name": "constructor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "constructor",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3355,
                          "end": 3451,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 3356,
                              "end": 3375,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3361,
                                "end": 3375,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 3363,
                                  "end": 3375,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3363,
                                    "end": 3375,
                                    "name": "privateClass",
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
                              "type": "TSParameterProperty",
                              "start": 3377,
                              "end": 3405,
                              "accessibility": "private",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "start": 3385,
                                "end": 3405,
                                "name": "param1",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3391,
                                  "end": 3405,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 3393,
                                    "end": 3405,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3393,
                                      "end": 3405,
                                      "name": "privateClass",
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
                              "readonly": false,
                              "static": false
                            },
                            {
                              "type": "TSParameterProperty",
                              "start": 3407,
                              "end": 3434,
                              "accessibility": "public",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "start": 3414,
                                "end": 3434,
                                "name": "param2",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3420,
                                  "end": 3434,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 3422,
                                    "end": 3434,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3422,
                                      "end": 3434,
                                      "name": "privateClass",
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
                              "readonly": false,
                              "static": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 3436,
                            "end": 3451,
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
                {
                  "type": "ClassDeclaration",
                  "start": 3471,
                  "end": 3941,
                  "id": {
                    "type": "Identifier",
                    "start": 3477,
                    "end": 3516,
                    "name": "privateClassWithWithPublicParmeterTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 3517,
                    "end": 3941,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 3531,
                        "end": 3594,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3538,
                          "end": 3558,
                          "name": "myPublicStaticMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "method",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3558,
                          "end": 3594,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 3559,
                              "end": 3577,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3564,
                                "end": 3577,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 3566,
                                  "end": 3577,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3566,
                                    "end": 3577,
                                    "name": "publicClass",
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
                            "start": 3579,
                            "end": 3594,
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
                        "start": 3607,
                        "end": 3679,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3622,
                          "end": 3643,
                          "name": "myPrivateStaticMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "method",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3643,
                          "end": 3679,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 3644,
                              "end": 3662,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3649,
                                "end": 3662,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 3651,
                                  "end": 3662,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3651,
                                    "end": 3662,
                                    "name": "publicClass",
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
                            "start": 3664,
                            "end": 3679,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": "private"
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 3692,
                        "end": 3742,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3692,
                          "end": 3706,
                          "name": "myPublicMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "method",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3706,
                          "end": 3742,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 3707,
                              "end": 3725,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3712,
                                "end": 3725,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 3714,
                                  "end": 3725,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3714,
                                    "end": 3725,
                                    "name": "publicClass",
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
                            "start": 3727,
                            "end": 3742,
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
                        "start": 3755,
                        "end": 3814,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3763,
                          "end": 3778,
                          "name": "myPrivateMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "method",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3778,
                          "end": 3814,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 3779,
                              "end": 3797,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3784,
                                "end": 3797,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 3786,
                                  "end": 3797,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3786,
                                    "end": 3797,
                                    "name": "publicClass",
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
                            "start": 3799,
                            "end": 3814,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": "private"
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 3827,
                        "end": 3931,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3827,
                          "end": 3838,
                          "name": "constructor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "constructor",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3838,
                          "end": 3931,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 3839,
                              "end": 3857,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3844,
                                "end": 3857,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 3846,
                                  "end": 3857,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3846,
                                    "end": 3857,
                                    "name": "publicClass",
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
                              "type": "TSParameterProperty",
                              "start": 3859,
                              "end": 3886,
                              "accessibility": "private",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "start": 3867,
                                "end": 3886,
                                "name": "param1",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3873,
                                  "end": 3886,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 3875,
                                    "end": 3886,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3875,
                                      "end": 3886,
                                      "name": "publicClass",
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
                              "readonly": false,
                              "static": false
                            },
                            {
                              "type": "TSParameterProperty",
                              "start": 3888,
                              "end": 3914,
                              "accessibility": "public",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "start": 3895,
                                "end": 3914,
                                "name": "param2",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3901,
                                  "end": 3914,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 3903,
                                    "end": 3914,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3903,
                                      "end": 3914,
                                      "name": "publicClass",
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
                              "readonly": false,
                              "static": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 3916,
                            "end": 3931,
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
                {
                  "type": "ExportNamedDeclaration",
                  "start": 3951,
                  "end": 4038,
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "start": 3958,
                    "end": 4038,
                    "id": {
                      "type": "Identifier",
                      "start": 3967,
                      "end": 4005,
                      "name": "publicFunctionWithPrivateParmeterTypes",
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
                        "start": 4006,
                        "end": 4025,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4011,
                          "end": 4025,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4013,
                            "end": 4025,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4013,
                              "end": 4025,
                              "name": "privateClass",
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
                      "start": 4027,
                      "end": 4038,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 4047,
                  "end": 4132,
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "start": 4054,
                    "end": 4132,
                    "id": {
                      "type": "Identifier",
                      "start": 4063,
                      "end": 4100,
                      "name": "publicFunctionWithPublicParmeterTypes",
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
                        "start": 4101,
                        "end": 4119,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4106,
                          "end": 4119,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4108,
                            "end": 4119,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4108,
                              "end": 4119,
                              "name": "publicClass",
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
                      "start": 4121,
                      "end": 4132,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "FunctionDeclaration",
                  "start": 4141,
                  "end": 4222,
                  "id": {
                    "type": "Identifier",
                    "start": 4150,
                    "end": 4189,
                    "name": "privateFunctionWithPrivateParmeterTypes",
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
                      "start": 4190,
                      "end": 4209,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4195,
                        "end": 4209,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4197,
                          "end": 4209,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4197,
                            "end": 4209,
                            "name": "privateClass",
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
                    "start": 4211,
                    "end": 4222,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                {
                  "type": "FunctionDeclaration",
                  "start": 4231,
                  "end": 4310,
                  "id": {
                    "type": "Identifier",
                    "start": 4240,
                    "end": 4278,
                    "name": "privateFunctionWithPublicParmeterTypes",
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
                      "start": 4279,
                      "end": 4297,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4284,
                        "end": 4297,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4286,
                          "end": 4297,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4286,
                            "end": 4297,
                            "name": "publicClass",
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
                    "start": 4299,
                    "end": 4310,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 4320,
                  "end": 4417,
                  "declaration": {
                    "type": "TSDeclareFunction",
                    "start": 4327,
                    "end": 4417,
                    "id": {
                      "type": "Identifier",
                      "start": 4344,
                      "end": 4389,
                      "name": "publicAmbientFunctionWithPrivateParmeterTypes",
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
                        "start": 4390,
                        "end": 4409,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4395,
                          "end": 4409,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4397,
                            "end": 4409,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4397,
                              "end": 4409,
                              "name": "privateClass",
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
                    "declare": true,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4410,
                      "end": 4416,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 4412,
                        "end": 4416
                      }
                    }
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "type"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 4426,
                  "end": 4521,
                  "declaration": {
                    "type": "TSDeclareFunction",
                    "start": 4433,
                    "end": 4521,
                    "id": {
                      "type": "Identifier",
                      "start": 4450,
                      "end": 4494,
                      "name": "publicAmbientFunctionWithPublicParmeterTypes",
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
                        "start": 4495,
                        "end": 4513,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4500,
                          "end": 4513,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4502,
                            "end": 4513,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4502,
                              "end": 4513,
                              "name": "publicClass",
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
                    "declare": true,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4514,
                      "end": 4520,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 4516,
                        "end": 4520
                      }
                    }
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "type"
                },
                {
                  "type": "TSDeclareFunction",
                  "start": 4530,
                  "end": 4621,
                  "id": {
                    "type": "Identifier",
                    "start": 4547,
                    "end": 4593,
                    "name": "privateAmbientFunctionWithPrivateParmeterTypes",
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
                      "start": 4594,
                      "end": 4613,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4599,
                        "end": 4613,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4601,
                          "end": 4613,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4601,
                            "end": 4613,
                            "name": "privateClass",
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
                  "declare": true,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 4614,
                    "end": 4620,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 4616,
                      "end": 4620
                    }
                  }
                },
                {
                  "type": "TSDeclareFunction",
                  "start": 4630,
                  "end": 4719,
                  "id": {
                    "type": "Identifier",
                    "start": 4647,
                    "end": 4692,
                    "name": "privateAmbientFunctionWithPublicParmeterTypes",
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
                      "start": 4693,
                      "end": 4711,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4698,
                        "end": 4711,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4700,
                          "end": 4711,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4700,
                            "end": 4711,
                            "name": "publicClass",
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
                  "declare": true,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 4712,
                    "end": 4718,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 4714,
                      "end": 4718
                    }
                  }
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 4729,
                  "end": 4992,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 4736,
                    "end": 4992,
                    "id": {
                      "type": "Identifier",
                      "start": 4746,
                      "end": 4792,
                      "name": "publicInterfaceWithPrivateModuleParameterTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 4793,
                      "end": 4992,
                      "body": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 4807,
                          "end": 4859,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 4812,
                              "end": 4844,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 4817,
                                "end": 4844,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 4819,
                                  "end": 4844,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 4819,
                                    "end": 4844,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 4819,
                                      "end": 4832,
                                      "name": "privateModule",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 4833,
                                      "end": 4844,
                                      "name": "publicClass",
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
                            "start": 4845,
                            "end": 4858,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4847,
                              "end": 4858,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4847,
                                "end": 4858,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 4872,
                          "end": 4920,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 4873,
                              "end": 4905,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 4878,
                                "end": 4905,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 4880,
                                  "end": 4905,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 4880,
                                    "end": 4905,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 4880,
                                      "end": 4893,
                                      "name": "privateModule",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 4894,
                                      "end": 4905,
                                      "name": "publicClass",
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
                            "start": 4906,
                            "end": 4919,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4908,
                              "end": 4919,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4908,
                                "end": 4919,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        {
                          "type": "TSMethodSignature",
                          "start": 4933,
                          "end": 4982,
                          "key": {
                            "type": "Identifier",
                            "start": 4933,
                            "end": 4941,
                            "name": "myMethod",
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
                              "start": 4942,
                              "end": 4974,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 4947,
                                "end": 4974,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 4949,
                                  "end": 4974,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 4949,
                                    "end": 4974,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 4949,
                                      "end": 4962,
                                      "name": "privateModule",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 4963,
                                      "end": 4974,
                                      "name": "publicClass",
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
                            "start": 4975,
                            "end": 4981,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 4977,
                              "end": 4981
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
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 5001,
                  "end": 5394,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 5008,
                    "end": 5394,
                    "id": {
                      "type": "Identifier",
                      "start": 5014,
                      "end": 5056,
                      "name": "publicClassWithPrivateModuleParameterTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 5057,
                      "end": 5394,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 5071,
                          "end": 5148,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 5078,
                            "end": 5098,
                            "name": "myPublicStaticMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 5098,
                            "end": 5148,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5099,
                                "end": 5131,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5104,
                                  "end": 5131,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5106,
                                    "end": 5131,
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "start": 5106,
                                      "end": 5131,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 5106,
                                        "end": 5119,
                                        "name": "privateModule",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 5120,
                                        "end": 5131,
                                        "name": "publicClass",
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
                            "body": {
                              "type": "BlockStatement",
                              "start": 5133,
                              "end": 5148,
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
                          "start": 5161,
                          "end": 5225,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 5161,
                            "end": 5175,
                            "name": "myPublicMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 5175,
                            "end": 5225,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5176,
                                "end": 5208,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5181,
                                  "end": 5208,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5183,
                                    "end": 5208,
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "start": 5183,
                                      "end": 5208,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 5183,
                                        "end": 5196,
                                        "name": "privateModule",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 5197,
                                        "end": 5208,
                                        "name": "publicClass",
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
                            "body": {
                              "type": "BlockStatement",
                              "start": 5210,
                              "end": 5225,
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
                          "start": 5238,
                          "end": 5384,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 5238,
                            "end": 5249,
                            "name": "constructor",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "constructor",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 5249,
                            "end": 5384,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5250,
                                "end": 5282,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5255,
                                  "end": 5282,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5257,
                                    "end": 5282,
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "start": 5257,
                                      "end": 5282,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 5257,
                                        "end": 5270,
                                        "name": "privateModule",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 5271,
                                        "end": 5282,
                                        "name": "publicClass",
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
                              },
                              {
                                "type": "TSParameterProperty",
                                "start": 5284,
                                "end": 5325,
                                "accessibility": "private",
                                "decorators": [],
                                "override": false,
                                "parameter": {
                                  "type": "Identifier",
                                  "start": 5292,
                                  "end": 5325,
                                  "name": "param1",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 5298,
                                    "end": 5325,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 5300,
                                      "end": 5325,
                                      "typeName": {
                                        "type": "TSQualifiedName",
                                        "start": 5300,
                                        "end": 5325,
                                        "left": {
                                          "type": "Identifier",
                                          "start": 5300,
                                          "end": 5313,
                                          "name": "privateModule",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 5314,
                                          "end": 5325,
                                          "name": "publicClass",
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
                                },
                                "readonly": false,
                                "static": false
                              },
                              {
                                "type": "TSParameterProperty",
                                "start": 5327,
                                "end": 5367,
                                "accessibility": "public",
                                "decorators": [],
                                "override": false,
                                "parameter": {
                                  "type": "Identifier",
                                  "start": 5334,
                                  "end": 5367,
                                  "name": "param2",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 5340,
                                    "end": 5367,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 5342,
                                      "end": 5367,
                                      "typeName": {
                                        "type": "TSQualifiedName",
                                        "start": 5342,
                                        "end": 5367,
                                        "left": {
                                          "type": "Identifier",
                                          "start": 5342,
                                          "end": 5355,
                                          "name": "privateModule",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 5356,
                                          "end": 5367,
                                          "name": "publicClass",
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
                                },
                                "readonly": false,
                                "static": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 5369,
                              "end": 5384,
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
                  "start": 5403,
                  "end": 5510,
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "start": 5410,
                    "end": 5510,
                    "id": {
                      "type": "Identifier",
                      "start": 5419,
                      "end": 5464,
                      "name": "publicFunctionWithPrivateModuleParameterTypes",
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
                        "start": 5465,
                        "end": 5497,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5470,
                          "end": 5497,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5472,
                            "end": 5497,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 5472,
                              "end": 5497,
                              "left": {
                                "type": "Identifier",
                                "start": 5472,
                                "end": 5485,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 5486,
                                "end": 5497,
                                "name": "publicClass",
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
                    "body": {
                      "type": "BlockStatement",
                      "start": 5499,
                      "end": 5510,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 5519,
                  "end": 5636,
                  "declaration": {
                    "type": "TSDeclareFunction",
                    "start": 5526,
                    "end": 5636,
                    "id": {
                      "type": "Identifier",
                      "start": 5543,
                      "end": 5595,
                      "name": "publicAmbientFunctionWithPrivateModuleParameterTypes",
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
                        "start": 5596,
                        "end": 5628,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5601,
                          "end": 5628,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5603,
                            "end": 5628,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 5603,
                              "end": 5628,
                              "left": {
                                "type": "Identifier",
                                "start": 5603,
                                "end": 5616,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 5617,
                                "end": 5628,
                                "name": "publicClass",
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
                    "body": null,
                    "declare": true,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5629,
                      "end": 5635,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 5631,
                        "end": 5635
                      }
                    }
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "type"
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 5646,
                  "end": 5903,
                  "id": {
                    "type": "Identifier",
                    "start": 5656,
                    "end": 5703,
                    "name": "privateInterfaceWithPrivateModuleParameterTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 5704,
                    "end": 5903,
                    "body": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 5718,
                        "end": 5770,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 5723,
                            "end": 5755,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5728,
                              "end": 5755,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 5730,
                                "end": 5755,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 5730,
                                  "end": 5755,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 5730,
                                    "end": 5743,
                                    "name": "privateModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 5744,
                                    "end": 5755,
                                    "name": "publicClass",
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
                          "start": 5756,
                          "end": 5769,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5758,
                            "end": 5769,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5758,
                              "end": 5769,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 5783,
                        "end": 5831,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 5784,
                            "end": 5816,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5789,
                              "end": 5816,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 5791,
                                "end": 5816,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 5791,
                                  "end": 5816,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 5791,
                                    "end": 5804,
                                    "name": "privateModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 5805,
                                    "end": 5816,
                                    "name": "publicClass",
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
                          "start": 5817,
                          "end": 5830,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5819,
                            "end": 5830,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5819,
                              "end": 5830,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "TSMethodSignature",
                        "start": 5844,
                        "end": 5893,
                        "key": {
                          "type": "Identifier",
                          "start": 5844,
                          "end": 5852,
                          "name": "myMethod",
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
                            "start": 5853,
                            "end": 5885,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5858,
                              "end": 5885,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 5860,
                                "end": 5885,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 5860,
                                  "end": 5885,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 5860,
                                    "end": 5873,
                                    "name": "privateModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 5874,
                                    "end": 5885,
                                    "name": "publicClass",
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
                          "start": 5886,
                          "end": 5892,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 5888,
                            "end": 5892
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
                  "type": "ClassDeclaration",
                  "start": 5912,
                  "end": 6299,
                  "id": {
                    "type": "Identifier",
                    "start": 5918,
                    "end": 5961,
                    "name": "privateClassWithPrivateModuleParameterTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 5962,
                    "end": 6299,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 5976,
                        "end": 6053,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 5983,
                          "end": 6003,
                          "name": "myPublicStaticMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "method",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 6003,
                          "end": 6053,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 6004,
                              "end": 6036,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 6009,
                                "end": 6036,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6011,
                                  "end": 6036,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 6011,
                                    "end": 6036,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 6011,
                                      "end": 6024,
                                      "name": "privateModule",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 6025,
                                      "end": 6036,
                                      "name": "publicClass",
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
                          "body": {
                            "type": "BlockStatement",
                            "start": 6038,
                            "end": 6053,
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
                        "start": 6066,
                        "end": 6130,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 6066,
                          "end": 6080,
                          "name": "myPublicMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "method",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 6080,
                          "end": 6130,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 6081,
                              "end": 6113,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 6086,
                                "end": 6113,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6088,
                                  "end": 6113,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 6088,
                                    "end": 6113,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 6088,
                                      "end": 6101,
                                      "name": "privateModule",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 6102,
                                      "end": 6113,
                                      "name": "publicClass",
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
                          "body": {
                            "type": "BlockStatement",
                            "start": 6115,
                            "end": 6130,
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
                        "start": 6143,
                        "end": 6289,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 6143,
                          "end": 6154,
                          "name": "constructor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "constructor",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 6154,
                          "end": 6289,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 6155,
                              "end": 6187,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 6160,
                                "end": 6187,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6162,
                                  "end": 6187,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 6162,
                                    "end": 6187,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 6162,
                                      "end": 6175,
                                      "name": "privateModule",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 6176,
                                      "end": 6187,
                                      "name": "publicClass",
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
                            },
                            {
                              "type": "TSParameterProperty",
                              "start": 6189,
                              "end": 6230,
                              "accessibility": "private",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "start": 6197,
                                "end": 6230,
                                "name": "param1",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 6203,
                                  "end": 6230,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 6205,
                                    "end": 6230,
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "start": 6205,
                                      "end": 6230,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 6205,
                                        "end": 6218,
                                        "name": "privateModule",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 6219,
                                        "end": 6230,
                                        "name": "publicClass",
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
                              },
                              "readonly": false,
                              "static": false
                            },
                            {
                              "type": "TSParameterProperty",
                              "start": 6232,
                              "end": 6272,
                              "accessibility": "public",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "start": 6239,
                                "end": 6272,
                                "name": "param2",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 6245,
                                  "end": 6272,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 6247,
                                    "end": 6272,
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "start": 6247,
                                      "end": 6272,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 6247,
                                        "end": 6260,
                                        "name": "privateModule",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 6261,
                                        "end": 6272,
                                        "name": "publicClass",
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
                              },
                              "readonly": false,
                              "static": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 6274,
                            "end": 6289,
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
                {
                  "type": "FunctionDeclaration",
                  "start": 6308,
                  "end": 6409,
                  "id": {
                    "type": "Identifier",
                    "start": 6317,
                    "end": 6363,
                    "name": "privateFunctionWithPrivateModuleParameterTypes",
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
                      "start": 6364,
                      "end": 6396,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 6369,
                        "end": 6396,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 6371,
                          "end": 6396,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 6371,
                            "end": 6396,
                            "left": {
                              "type": "Identifier",
                              "start": 6371,
                              "end": 6384,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 6385,
                              "end": 6396,
                              "name": "publicClass",
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 6398,
                    "end": 6409,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                {
                  "type": "TSDeclareFunction",
                  "start": 6418,
                  "end": 6529,
                  "id": {
                    "type": "Identifier",
                    "start": 6435,
                    "end": 6488,
                    "name": "privateAmbientFunctionWithPrivateModuleParameterTypes",
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
                      "start": 6489,
                      "end": 6521,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 6494,
                        "end": 6521,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 6496,
                          "end": 6521,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 6496,
                            "end": 6521,
                            "left": {
                              "type": "Identifier",
                              "start": 6496,
                              "end": 6509,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 6510,
                              "end": 6521,
                              "name": "publicClass",
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
                  "body": null,
                  "declare": true,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 6522,
                    "end": 6528,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 6524,
                      "end": 6528
                    }
                  }
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6541,
            "end": 6769,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 6548,
              "end": 6769,
              "id": {
                "type": "Identifier",
                "start": 6558,
                "end": 6597,
                "name": "publicInterfaceWithPrivateParmeterTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 6598,
                "end": 6769,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 6608,
                    "end": 6647,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 6613,
                        "end": 6632,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 6618,
                          "end": 6632,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6620,
                            "end": 6632,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6620,
                              "end": 6632,
                              "name": "privateClass",
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
                      "start": 6633,
                      "end": 6646,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6635,
                        "end": 6646,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6635,
                          "end": 6646,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 6665,
                    "end": 6700,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 6666,
                        "end": 6685,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 6671,
                          "end": 6685,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6673,
                            "end": 6685,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6673,
                              "end": 6685,
                              "name": "privateClass",
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
                      "start": 6686,
                      "end": 6699,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6688,
                        "end": 6699,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6688,
                          "end": 6699,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 6718,
                    "end": 6754,
                    "key": {
                      "type": "Identifier",
                      "start": 6718,
                      "end": 6726,
                      "name": "myMethod",
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
                        "start": 6727,
                        "end": 6746,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 6732,
                          "end": 6746,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6734,
                            "end": 6746,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6734,
                              "end": 6746,
                              "name": "privateClass",
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
                      "start": 6747,
                      "end": 6753,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 6749,
                        "end": 6753
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6775,
            "end": 6972,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 6782,
              "end": 6972,
              "id": {
                "type": "Identifier",
                "start": 6792,
                "end": 6830,
                "name": "publicInterfaceWithPublicParmeterTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 6831,
                "end": 6972,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 6841,
                    "end": 6879,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 6846,
                        "end": 6864,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 6851,
                          "end": 6864,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6853,
                            "end": 6864,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6853,
                              "end": 6864,
                              "name": "publicClass",
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
                      "start": 6865,
                      "end": 6878,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6867,
                        "end": 6878,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6867,
                          "end": 6878,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 6888,
                    "end": 6922,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 6889,
                        "end": 6907,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 6894,
                          "end": 6907,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6896,
                            "end": 6907,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6896,
                              "end": 6907,
                              "name": "publicClass",
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
                      "start": 6908,
                      "end": 6921,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 6910,
                        "end": 6921,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6910,
                          "end": 6921,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 6931,
                    "end": 6966,
                    "key": {
                      "type": "Identifier",
                      "start": 6931,
                      "end": 6939,
                      "name": "myMethod",
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
                        "start": 6940,
                        "end": 6958,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 6945,
                          "end": 6958,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6947,
                            "end": 6958,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6947,
                              "end": 6958,
                              "name": "publicClass",
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
                      "start": 6959,
                      "end": 6965,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 6961,
                        "end": 6965
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
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 6978,
            "end": 7175,
            "id": {
              "type": "Identifier",
              "start": 6988,
              "end": 7028,
              "name": "privateInterfaceWithPrivateParmeterTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 7029,
              "end": 7175,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 7039,
                  "end": 7079,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 7044,
                      "end": 7063,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7049,
                        "end": 7063,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7051,
                          "end": 7063,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7051,
                            "end": 7063,
                            "name": "privateClass",
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
                    "start": 7064,
                    "end": 7078,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7066,
                      "end": 7078,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7066,
                        "end": 7078,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 7088,
                  "end": 7124,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 7089,
                      "end": 7108,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7094,
                        "end": 7108,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7096,
                          "end": 7108,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7096,
                            "end": 7108,
                            "name": "privateClass",
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
                    "start": 7109,
                    "end": 7123,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7111,
                      "end": 7123,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7111,
                        "end": 7123,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 7133,
                  "end": 7169,
                  "key": {
                    "type": "Identifier",
                    "start": 7133,
                    "end": 7141,
                    "name": "myMethod",
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
                      "start": 7142,
                      "end": 7161,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7147,
                        "end": 7161,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7149,
                          "end": 7161,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7149,
                            "end": 7161,
                            "name": "privateClass",
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
                    "start": 7162,
                    "end": 7168,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 7164,
                      "end": 7168
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
            "start": 7181,
            "end": 7372,
            "id": {
              "type": "Identifier",
              "start": 7191,
              "end": 7230,
              "name": "privateInterfaceWithPublicParmeterTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 7231,
              "end": 7372,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 7241,
                  "end": 7279,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 7246,
                      "end": 7264,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7251,
                        "end": 7264,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7253,
                          "end": 7264,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7253,
                            "end": 7264,
                            "name": "publicClass",
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
                    "start": 7265,
                    "end": 7278,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7267,
                      "end": 7278,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7267,
                        "end": 7278,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 7288,
                  "end": 7322,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 7289,
                      "end": 7307,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7294,
                        "end": 7307,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7296,
                          "end": 7307,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7296,
                            "end": 7307,
                            "name": "publicClass",
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
                    "start": 7308,
                    "end": 7321,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7310,
                      "end": 7321,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7310,
                        "end": 7321,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 7331,
                  "end": 7366,
                  "key": {
                    "type": "Identifier",
                    "start": 7331,
                    "end": 7339,
                    "name": "myMethod",
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
                      "start": 7340,
                      "end": 7358,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7345,
                        "end": 7358,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7347,
                          "end": 7358,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7347,
                            "end": 7358,
                            "name": "publicClass",
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
                    "start": 7359,
                    "end": 7365,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 7361,
                      "end": 7365
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
            "start": 7378,
            "end": 7845,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 7385,
              "end": 7845,
              "id": {
                "type": "Identifier",
                "start": 7391,
                "end": 7430,
                "name": "publicClassWithWithPrivateParmeterTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 7431,
                "end": 7845,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 7441,
                    "end": 7510,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7448,
                      "end": 7468,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7468,
                      "end": 7510,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 7469,
                          "end": 7488,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 7474,
                            "end": 7488,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 7476,
                              "end": 7488,
                              "typeName": {
                                "type": "Identifier",
                                "start": 7476,
                                "end": 7488,
                                "name": "privateClass",
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
                        "start": 7490,
                        "end": 7510,
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
                    "start": 7519,
                    "end": 7588,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7534,
                      "end": 7555,
                      "name": "myPrivateStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7555,
                      "end": 7588,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 7556,
                          "end": 7575,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 7561,
                            "end": 7575,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 7563,
                              "end": 7575,
                              "typeName": {
                                "type": "Identifier",
                                "start": 7563,
                                "end": 7575,
                                "name": "privateClass",
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
                        "start": 7577,
                        "end": 7588,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 7597,
                    "end": 7653,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7597,
                      "end": 7611,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7611,
                      "end": 7653,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 7612,
                          "end": 7631,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 7617,
                            "end": 7631,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 7619,
                              "end": 7631,
                              "typeName": {
                                "type": "Identifier",
                                "start": 7619,
                                "end": 7631,
                                "name": "privateClass",
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
                        "start": 7633,
                        "end": 7653,
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
                    "start": 7662,
                    "end": 7718,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7670,
                      "end": 7685,
                      "name": "myPrivateMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7685,
                      "end": 7718,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 7686,
                          "end": 7705,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 7691,
                            "end": 7705,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 7693,
                              "end": 7705,
                              "typeName": {
                                "type": "Identifier",
                                "start": 7693,
                                "end": 7705,
                                "name": "privateClass",
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
                        "start": 7707,
                        "end": 7718,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 7727,
                    "end": 7839,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7727,
                      "end": 7738,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7738,
                      "end": 7839,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 7739,
                          "end": 7758,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 7744,
                            "end": 7758,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 7746,
                              "end": 7758,
                              "typeName": {
                                "type": "Identifier",
                                "start": 7746,
                                "end": 7758,
                                "name": "privateClass",
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
                          "type": "TSParameterProperty",
                          "start": 7760,
                          "end": 7788,
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 7768,
                            "end": 7788,
                            "name": "param1",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7774,
                              "end": 7788,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 7776,
                                "end": 7788,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 7776,
                                  "end": 7788,
                                  "name": "privateClass",
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
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 7790,
                          "end": 7817,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 7797,
                            "end": 7817,
                            "name": "param2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 7803,
                              "end": 7817,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 7805,
                                "end": 7817,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 7805,
                                  "end": 7817,
                                  "name": "privateClass",
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
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 7819,
                        "end": 7839,
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
            "start": 7851,
            "end": 8283,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 7858,
              "end": 8283,
              "id": {
                "type": "Identifier",
                "start": 7864,
                "end": 7902,
                "name": "publicClassWithWithPublicParmeterTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 7903,
                "end": 8283,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 7913,
                    "end": 7972,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7920,
                      "end": 7940,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7940,
                      "end": 7972,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 7941,
                          "end": 7959,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 7946,
                            "end": 7959,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 7948,
                              "end": 7959,
                              "typeName": {
                                "type": "Identifier",
                                "start": 7948,
                                "end": 7959,
                                "name": "publicClass",
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
                        "start": 7961,
                        "end": 7972,
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
                    "start": 7981,
                    "end": 8049,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7996,
                      "end": 8017,
                      "name": "myPrivateStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8017,
                      "end": 8049,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 8018,
                          "end": 8036,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 8023,
                            "end": 8036,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 8025,
                              "end": 8036,
                              "typeName": {
                                "type": "Identifier",
                                "start": 8025,
                                "end": 8036,
                                "name": "publicClass",
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
                        "start": 8038,
                        "end": 8049,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8058,
                    "end": 8104,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8058,
                      "end": 8072,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8072,
                      "end": 8104,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 8073,
                          "end": 8091,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 8078,
                            "end": 8091,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 8080,
                              "end": 8091,
                              "typeName": {
                                "type": "Identifier",
                                "start": 8080,
                                "end": 8091,
                                "name": "publicClass",
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
                        "start": 8093,
                        "end": 8104,
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
                    "start": 8113,
                    "end": 8168,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8121,
                      "end": 8136,
                      "name": "myPrivateMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8136,
                      "end": 8168,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 8137,
                          "end": 8155,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 8142,
                            "end": 8155,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 8144,
                              "end": 8155,
                              "typeName": {
                                "type": "Identifier",
                                "start": 8144,
                                "end": 8155,
                                "name": "publicClass",
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
                        "start": 8157,
                        "end": 8168,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8177,
                    "end": 8277,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8177,
                      "end": 8188,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8188,
                      "end": 8277,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 8189,
                          "end": 8207,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 8194,
                            "end": 8207,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 8196,
                              "end": 8207,
                              "typeName": {
                                "type": "Identifier",
                                "start": 8196,
                                "end": 8207,
                                "name": "publicClass",
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
                          "type": "TSParameterProperty",
                          "start": 8209,
                          "end": 8236,
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 8217,
                            "end": 8236,
                            "name": "param1",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8223,
                              "end": 8236,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 8225,
                                "end": 8236,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8225,
                                  "end": 8236,
                                  "name": "publicClass",
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
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 8238,
                          "end": 8264,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 8245,
                            "end": 8264,
                            "name": "param2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8251,
                              "end": 8264,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 8253,
                                "end": 8264,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8253,
                                  "end": 8264,
                                  "name": "publicClass",
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
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 8266,
                        "end": 8277,
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
            "type": "ClassDeclaration",
            "start": 8289,
            "end": 8723,
            "id": {
              "type": "Identifier",
              "start": 8295,
              "end": 8335,
              "name": "privateClassWithWithPrivateParmeterTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 8336,
              "end": 8723,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 8346,
                  "end": 8406,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 8353,
                    "end": 8373,
                    "name": "myPublicStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 8373,
                    "end": 8406,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 8374,
                        "end": 8393,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 8379,
                          "end": 8393,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 8381,
                            "end": 8393,
                            "typeName": {
                              "type": "Identifier",
                              "start": 8381,
                              "end": 8393,
                              "name": "privateClass",
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
                      "start": 8395,
                      "end": 8406,
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
                  "start": 8415,
                  "end": 8484,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 8430,
                    "end": 8451,
                    "name": "myPrivateStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 8451,
                    "end": 8484,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 8452,
                        "end": 8471,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 8457,
                          "end": 8471,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 8459,
                            "end": 8471,
                            "typeName": {
                              "type": "Identifier",
                              "start": 8459,
                              "end": 8471,
                              "name": "privateClass",
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
                      "start": 8473,
                      "end": 8484,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 8493,
                  "end": 8540,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 8493,
                    "end": 8507,
                    "name": "myPublicMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 8507,
                    "end": 8540,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 8508,
                        "end": 8527,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 8513,
                          "end": 8527,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 8515,
                            "end": 8527,
                            "typeName": {
                              "type": "Identifier",
                              "start": 8515,
                              "end": 8527,
                              "name": "privateClass",
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
                      "start": 8529,
                      "end": 8540,
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
                  "start": 8549,
                  "end": 8605,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 8557,
                    "end": 8572,
                    "name": "myPrivateMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 8572,
                    "end": 8605,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 8573,
                        "end": 8592,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 8578,
                          "end": 8592,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 8580,
                            "end": 8592,
                            "typeName": {
                              "type": "Identifier",
                              "start": 8580,
                              "end": 8592,
                              "name": "privateClass",
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
                      "start": 8594,
                      "end": 8605,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 8614,
                  "end": 8717,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 8614,
                    "end": 8625,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 8625,
                    "end": 8717,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 8626,
                        "end": 8645,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 8631,
                          "end": 8645,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 8633,
                            "end": 8645,
                            "typeName": {
                              "type": "Identifier",
                              "start": 8633,
                              "end": 8645,
                              "name": "privateClass",
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
                        "type": "TSParameterProperty",
                        "start": 8647,
                        "end": 8675,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 8655,
                          "end": 8675,
                          "name": "param1",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 8661,
                            "end": 8675,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 8663,
                              "end": 8675,
                              "typeName": {
                                "type": "Identifier",
                                "start": 8663,
                                "end": 8675,
                                "name": "privateClass",
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
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 8677,
                        "end": 8704,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 8684,
                          "end": 8704,
                          "name": "param2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 8690,
                            "end": 8704,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 8692,
                              "end": 8704,
                              "typeName": {
                                "type": "Identifier",
                                "start": 8692,
                                "end": 8704,
                                "name": "privateClass",
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
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 8706,
                      "end": 8717,
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
          {
            "type": "ClassDeclaration",
            "start": 8729,
            "end": 9155,
            "id": {
              "type": "Identifier",
              "start": 8735,
              "end": 8774,
              "name": "privateClassWithWithPublicParmeterTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 8775,
              "end": 9155,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 8785,
                  "end": 8844,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 8792,
                    "end": 8812,
                    "name": "myPublicStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 8812,
                    "end": 8844,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 8813,
                        "end": 8831,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 8818,
                          "end": 8831,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 8820,
                            "end": 8831,
                            "typeName": {
                              "type": "Identifier",
                              "start": 8820,
                              "end": 8831,
                              "name": "publicClass",
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
                      "start": 8833,
                      "end": 8844,
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
                  "start": 8853,
                  "end": 8921,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 8868,
                    "end": 8889,
                    "name": "myPrivateStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 8889,
                    "end": 8921,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 8890,
                        "end": 8908,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 8895,
                          "end": 8908,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 8897,
                            "end": 8908,
                            "typeName": {
                              "type": "Identifier",
                              "start": 8897,
                              "end": 8908,
                              "name": "publicClass",
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
                      "start": 8910,
                      "end": 8921,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 8930,
                  "end": 8976,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 8930,
                    "end": 8944,
                    "name": "myPublicMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 8944,
                    "end": 8976,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 8945,
                        "end": 8963,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 8950,
                          "end": 8963,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 8952,
                            "end": 8963,
                            "typeName": {
                              "type": "Identifier",
                              "start": 8952,
                              "end": 8963,
                              "name": "publicClass",
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
                      "start": 8965,
                      "end": 8976,
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
                  "start": 8985,
                  "end": 9040,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 8993,
                    "end": 9008,
                    "name": "myPrivateMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 9008,
                    "end": 9040,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 9009,
                        "end": 9027,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 9014,
                          "end": 9027,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 9016,
                            "end": 9027,
                            "typeName": {
                              "type": "Identifier",
                              "start": 9016,
                              "end": 9027,
                              "name": "publicClass",
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
                      "start": 9029,
                      "end": 9040,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 9049,
                  "end": 9149,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 9049,
                    "end": 9060,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 9060,
                    "end": 9149,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 9061,
                        "end": 9079,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 9066,
                          "end": 9079,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 9068,
                            "end": 9079,
                            "typeName": {
                              "type": "Identifier",
                              "start": 9068,
                              "end": 9079,
                              "name": "publicClass",
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
                        "type": "TSParameterProperty",
                        "start": 9081,
                        "end": 9108,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 9089,
                          "end": 9108,
                          "name": "param1",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9095,
                            "end": 9108,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9097,
                              "end": 9108,
                              "typeName": {
                                "type": "Identifier",
                                "start": 9097,
                                "end": 9108,
                                "name": "publicClass",
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
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 9110,
                        "end": 9136,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 9117,
                          "end": 9136,
                          "name": "param2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9123,
                            "end": 9136,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9125,
                              "end": 9136,
                              "typeName": {
                                "type": "Identifier",
                                "start": 9125,
                                "end": 9136,
                                "name": "publicClass",
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
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 9138,
                      "end": 9149,
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
          {
            "type": "ExportNamedDeclaration",
            "start": 9161,
            "end": 9253,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 9168,
              "end": 9253,
              "id": {
                "type": "Identifier",
                "start": 9177,
                "end": 9215,
                "name": "publicFunctionWithPrivateParmeterTypes",
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
                  "start": 9216,
                  "end": 9235,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 9221,
                    "end": 9235,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 9223,
                      "end": 9235,
                      "typeName": {
                        "type": "Identifier",
                        "start": 9223,
                        "end": 9235,
                        "name": "privateClass",
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
                "start": 9237,
                "end": 9253,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 9258,
            "end": 9339,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 9265,
              "end": 9339,
              "id": {
                "type": "Identifier",
                "start": 9274,
                "end": 9311,
                "name": "publicFunctionWithPublicParmeterTypes",
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
                  "start": 9312,
                  "end": 9330,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 9317,
                    "end": 9330,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 9319,
                      "end": 9330,
                      "typeName": {
                        "type": "Identifier",
                        "start": 9319,
                        "end": 9330,
                        "name": "publicClass",
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
                "start": 9332,
                "end": 9339,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "FunctionDeclaration",
            "start": 9344,
            "end": 9421,
            "id": {
              "type": "Identifier",
              "start": 9353,
              "end": 9392,
              "name": "privateFunctionWithPrivateParmeterTypes",
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
                "start": 9393,
                "end": 9412,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 9398,
                  "end": 9412,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 9400,
                    "end": 9412,
                    "typeName": {
                      "type": "Identifier",
                      "start": 9400,
                      "end": 9412,
                      "name": "privateClass",
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
              "start": 9414,
              "end": 9421,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 9426,
            "end": 9501,
            "id": {
              "type": "Identifier",
              "start": 9435,
              "end": 9473,
              "name": "privateFunctionWithPublicParmeterTypes",
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
                "start": 9474,
                "end": 9492,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 9479,
                  "end": 9492,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 9481,
                    "end": 9492,
                    "typeName": {
                      "type": "Identifier",
                      "start": 9481,
                      "end": 9492,
                      "name": "publicClass",
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
              "start": 9494,
              "end": 9501,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 9507,
            "end": 9604,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 9514,
              "end": 9604,
              "id": {
                "type": "Identifier",
                "start": 9531,
                "end": 9576,
                "name": "publicAmbientFunctionWithPrivateParmeterTypes",
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
                  "start": 9577,
                  "end": 9596,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 9582,
                    "end": 9596,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 9584,
                      "end": 9596,
                      "typeName": {
                        "type": "Identifier",
                        "start": 9584,
                        "end": 9596,
                        "name": "privateClass",
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
              "declare": true,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 9597,
                "end": 9603,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 9599,
                  "end": 9603
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 9618,
            "end": 9713,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 9625,
              "end": 9713,
              "id": {
                "type": "Identifier",
                "start": 9642,
                "end": 9686,
                "name": "publicAmbientFunctionWithPublicParmeterTypes",
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
                  "start": 9687,
                  "end": 9705,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 9692,
                    "end": 9705,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 9694,
                      "end": 9705,
                      "typeName": {
                        "type": "Identifier",
                        "start": 9694,
                        "end": 9705,
                        "name": "publicClass",
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
              "declare": true,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 9706,
                "end": 9712,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 9708,
                  "end": 9712
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSDeclareFunction",
            "start": 9718,
            "end": 9809,
            "id": {
              "type": "Identifier",
              "start": 9735,
              "end": 9781,
              "name": "privateAmbientFunctionWithPrivateParmeterTypes",
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
                "start": 9782,
                "end": 9801,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 9787,
                  "end": 9801,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 9789,
                    "end": 9801,
                    "typeName": {
                      "type": "Identifier",
                      "start": 9789,
                      "end": 9801,
                      "name": "privateClass",
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
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 9802,
              "end": 9808,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 9804,
                "end": 9808
              }
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 9814,
            "end": 9903,
            "id": {
              "type": "Identifier",
              "start": 9831,
              "end": 9876,
              "name": "privateAmbientFunctionWithPublicParmeterTypes",
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
                "start": 9877,
                "end": 9895,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 9882,
                  "end": 9895,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 9884,
                    "end": 9895,
                    "typeName": {
                      "type": "Identifier",
                      "start": 9884,
                      "end": 9895,
                      "name": "publicClass",
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
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 9896,
              "end": 9902,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 9898,
                "end": 9902
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 9909,
            "end": 10183,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 9916,
              "end": 10183,
              "id": {
                "type": "Identifier",
                "start": 9926,
                "end": 9972,
                "name": "publicInterfaceWithPrivateModuleParameterTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 9973,
                "end": 10183,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 9983,
                    "end": 10035,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 9988,
                        "end": 10020,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 9993,
                          "end": 10020,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 9995,
                            "end": 10020,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 9995,
                              "end": 10020,
                              "left": {
                                "type": "Identifier",
                                "start": 9995,
                                "end": 10008,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 10009,
                                "end": 10020,
                                "name": "publicClass",
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
                      "start": 10021,
                      "end": 10034,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10023,
                        "end": 10034,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10023,
                          "end": 10034,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 10053,
                    "end": 10101,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 10054,
                        "end": 10086,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 10059,
                          "end": 10086,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 10061,
                            "end": 10086,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 10061,
                              "end": 10086,
                              "left": {
                                "type": "Identifier",
                                "start": 10061,
                                "end": 10074,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 10075,
                                "end": 10086,
                                "name": "publicClass",
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
                      "start": 10087,
                      "end": 10100,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10089,
                        "end": 10100,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10089,
                          "end": 10100,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 10119,
                    "end": 10168,
                    "key": {
                      "type": "Identifier",
                      "start": 10119,
                      "end": 10127,
                      "name": "myMethod",
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
                        "start": 10128,
                        "end": 10160,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 10133,
                          "end": 10160,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 10135,
                            "end": 10160,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 10135,
                              "end": 10160,
                              "left": {
                                "type": "Identifier",
                                "start": 10135,
                                "end": 10148,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 10149,
                                "end": 10160,
                                "name": "publicClass",
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
                      "start": 10161,
                      "end": 10167,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 10163,
                        "end": 10167
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 10188,
            "end": 10580,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 10195,
              "end": 10580,
              "id": {
                "type": "Identifier",
                "start": 10201,
                "end": 10243,
                "name": "publicClassWithPrivateModuleParameterTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 10244,
                "end": 10580,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 10254,
                    "end": 10336,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 10261,
                      "end": 10281,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 10281,
                      "end": 10336,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 10282,
                          "end": 10314,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 10287,
                            "end": 10314,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 10289,
                              "end": 10314,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 10289,
                                "end": 10314,
                                "left": {
                                  "type": "Identifier",
                                  "start": 10289,
                                  "end": 10302,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 10303,
                                  "end": 10314,
                                  "name": "publicClass",
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 10316,
                        "end": 10336,
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
                    "start": 10345,
                    "end": 10414,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 10345,
                      "end": 10359,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 10359,
                      "end": 10414,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 10360,
                          "end": 10392,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 10365,
                            "end": 10392,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 10367,
                              "end": 10392,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 10367,
                                "end": 10392,
                                "left": {
                                  "type": "Identifier",
                                  "start": 10367,
                                  "end": 10380,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 10381,
                                  "end": 10392,
                                  "name": "publicClass",
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 10394,
                        "end": 10414,
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
                    "start": 10423,
                    "end": 10574,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 10423,
                      "end": 10434,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 10434,
                      "end": 10574,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 10435,
                          "end": 10467,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 10440,
                            "end": 10467,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 10442,
                              "end": 10467,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 10442,
                                "end": 10467,
                                "left": {
                                  "type": "Identifier",
                                  "start": 10442,
                                  "end": 10455,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 10456,
                                  "end": 10467,
                                  "name": "publicClass",
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
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 10469,
                          "end": 10510,
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 10477,
                            "end": 10510,
                            "name": "param1",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 10483,
                              "end": 10510,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 10485,
                                "end": 10510,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 10485,
                                  "end": 10510,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 10485,
                                    "end": 10498,
                                    "name": "privateModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 10499,
                                    "end": 10510,
                                    "name": "publicClass",
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
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 10512,
                          "end": 10552,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 10519,
                            "end": 10552,
                            "name": "param2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 10525,
                              "end": 10552,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 10527,
                                "end": 10552,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 10527,
                                  "end": 10552,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 10527,
                                    "end": 10540,
                                    "name": "privateModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 10541,
                                    "end": 10552,
                                    "name": "publicClass",
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
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 10554,
                        "end": 10574,
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
            "start": 10585,
            "end": 10697,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 10592,
              "end": 10697,
              "id": {
                "type": "Identifier",
                "start": 10601,
                "end": 10646,
                "name": "publicFunctionWithPrivateModuleParameterTypes",
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
                  "start": 10647,
                  "end": 10679,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 10652,
                    "end": 10679,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 10654,
                      "end": 10679,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 10654,
                        "end": 10679,
                        "left": {
                          "type": "Identifier",
                          "start": 10654,
                          "end": 10667,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 10668,
                          "end": 10679,
                          "name": "publicClass",
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
              "body": {
                "type": "BlockStatement",
                "start": 10681,
                "end": 10697,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 10702,
            "end": 10819,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 10709,
              "end": 10819,
              "id": {
                "type": "Identifier",
                "start": 10726,
                "end": 10778,
                "name": "publicAmbientFunctionWithPrivateModuleParameterTypes",
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
                  "start": 10779,
                  "end": 10811,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 10784,
                    "end": 10811,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 10786,
                      "end": 10811,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 10786,
                        "end": 10811,
                        "left": {
                          "type": "Identifier",
                          "start": 10786,
                          "end": 10799,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 10800,
                          "end": 10811,
                          "name": "publicClass",
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
              "body": null,
              "declare": true,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 10812,
                "end": 10818,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 10814,
                  "end": 10818
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 10834,
            "end": 11075,
            "id": {
              "type": "Identifier",
              "start": 10844,
              "end": 10891,
              "name": "privateInterfaceWithPrivateModuleParameterTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 10892,
              "end": 11075,
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 10902,
                  "end": 10954,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 10907,
                      "end": 10939,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 10912,
                        "end": 10939,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 10914,
                          "end": 10939,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 10914,
                            "end": 10939,
                            "left": {
                              "type": "Identifier",
                              "start": 10914,
                              "end": 10927,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 10928,
                              "end": 10939,
                              "name": "publicClass",
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
                    "start": 10940,
                    "end": 10953,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 10942,
                      "end": 10953,
                      "typeName": {
                        "type": "Identifier",
                        "start": 10942,
                        "end": 10953,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 10963,
                  "end": 11011,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 10964,
                      "end": 10996,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 10969,
                        "end": 10996,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 10971,
                          "end": 10996,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 10971,
                            "end": 10996,
                            "left": {
                              "type": "Identifier",
                              "start": 10971,
                              "end": 10984,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 10985,
                              "end": 10996,
                              "name": "publicClass",
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
                    "start": 10997,
                    "end": 11010,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 10999,
                      "end": 11010,
                      "typeName": {
                        "type": "Identifier",
                        "start": 10999,
                        "end": 11010,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 11020,
                  "end": 11069,
                  "key": {
                    "type": "Identifier",
                    "start": 11020,
                    "end": 11028,
                    "name": "myMethod",
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
                      "start": 11029,
                      "end": 11061,
                      "name": "param",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 11034,
                        "end": 11061,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 11036,
                          "end": 11061,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 11036,
                            "end": 11061,
                            "left": {
                              "type": "Identifier",
                              "start": 11036,
                              "end": 11049,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 11050,
                              "end": 11061,
                              "name": "publicClass",
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
                    "start": 11062,
                    "end": 11068,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 11064,
                      "end": 11068
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
            "type": "ClassDeclaration",
            "start": 11080,
            "end": 11439,
            "id": {
              "type": "Identifier",
              "start": 11086,
              "end": 11129,
              "name": "privateClassWithPrivateModuleParameterTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 11130,
              "end": 11439,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 11140,
                  "end": 11213,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 11147,
                    "end": 11167,
                    "name": "myPublicStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 11167,
                    "end": 11213,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 11168,
                        "end": 11200,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 11173,
                          "end": 11200,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 11175,
                            "end": 11200,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 11175,
                              "end": 11200,
                              "left": {
                                "type": "Identifier",
                                "start": 11175,
                                "end": 11188,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 11189,
                                "end": 11200,
                                "name": "publicClass",
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
                    "body": {
                      "type": "BlockStatement",
                      "start": 11202,
                      "end": 11213,
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
                  "start": 11222,
                  "end": 11282,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 11222,
                    "end": 11236,
                    "name": "myPublicMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 11236,
                    "end": 11282,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 11237,
                        "end": 11269,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 11242,
                          "end": 11269,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 11244,
                            "end": 11269,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 11244,
                              "end": 11269,
                              "left": {
                                "type": "Identifier",
                                "start": 11244,
                                "end": 11257,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 11258,
                                "end": 11269,
                                "name": "publicClass",
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
                    "body": {
                      "type": "BlockStatement",
                      "start": 11271,
                      "end": 11282,
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
                  "start": 11291,
                  "end": 11433,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 11291,
                    "end": 11302,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 11302,
                    "end": 11433,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 11303,
                        "end": 11335,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 11308,
                          "end": 11335,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 11310,
                            "end": 11335,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 11310,
                              "end": 11335,
                              "left": {
                                "type": "Identifier",
                                "start": 11310,
                                "end": 11323,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 11324,
                                "end": 11335,
                                "name": "publicClass",
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
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 11337,
                        "end": 11378,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 11345,
                          "end": 11378,
                          "name": "param1",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11351,
                            "end": 11378,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11353,
                              "end": 11378,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 11353,
                                "end": 11378,
                                "left": {
                                  "type": "Identifier",
                                  "start": 11353,
                                  "end": 11366,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 11367,
                                  "end": 11378,
                                  "name": "publicClass",
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
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 11380,
                        "end": 11420,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 11387,
                          "end": 11420,
                          "name": "param2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11393,
                            "end": 11420,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11395,
                              "end": 11420,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 11395,
                                "end": 11420,
                                "left": {
                                  "type": "Identifier",
                                  "start": 11395,
                                  "end": 11408,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 11409,
                                  "end": 11420,
                                  "name": "publicClass",
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
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 11422,
                      "end": 11433,
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
          {
            "type": "FunctionDeclaration",
            "start": 11444,
            "end": 11541,
            "id": {
              "type": "Identifier",
              "start": 11453,
              "end": 11499,
              "name": "privateFunctionWithPrivateModuleParameterTypes",
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
                "start": 11500,
                "end": 11532,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 11505,
                  "end": 11532,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 11507,
                    "end": 11532,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 11507,
                      "end": 11532,
                      "left": {
                        "type": "Identifier",
                        "start": 11507,
                        "end": 11520,
                        "name": "privateModule",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 11521,
                        "end": 11532,
                        "name": "publicClass",
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
            "body": {
              "type": "BlockStatement",
              "start": 11534,
              "end": 11541,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSDeclareFunction",
            "start": 11546,
            "end": 11657,
            "id": {
              "type": "Identifier",
              "start": 11563,
              "end": 11616,
              "name": "privateAmbientFunctionWithPrivateModuleParameterTypes",
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
                "start": 11617,
                "end": 11649,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 11622,
                  "end": 11649,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 11624,
                    "end": 11649,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 11624,
                      "end": 11649,
                      "left": {
                        "type": "Identifier",
                        "start": 11624,
                        "end": 11637,
                        "name": "privateModule",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 11638,
                        "end": 11649,
                        "name": "publicClass",
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
            "body": null,
            "declare": true,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 11650,
              "end": 11656,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 11652,
                "end": 11656
              }
            }
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
