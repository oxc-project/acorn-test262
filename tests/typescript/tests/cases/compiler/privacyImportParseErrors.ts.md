__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 12379,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 3105,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 3105,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 16,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 17,
          "end": 3105,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 23,
              "end": 216,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 30,
                "end": 216,
                "id": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 49,
                  "decorators": [],
                  "name": "m1_M1_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 50,
                  "end": 216,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 60,
                      "end": 87,
                      "declaration": {
                        "type": "ClassDeclaration",
                        "start": 67,
                        "end": 87,
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 75,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "start": 76,
                          "end": 87,
                          "body": []
                        },
                        "abstract": false,
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": []
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 96,
                      "end": 155,
                      "declaration": {
                        "type": "FunctionDeclaration",
                        "start": 103,
                        "end": 155,
                        "id": {
                          "type": "Identifier",
                          "start": 112,
                          "end": 114,
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 117,
                          "end": 155,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 131,
                              "end": 145,
                              "argument": {
                                "type": "NewExpression",
                                "start": 138,
                                "end": 144,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 142,
                                  "end": 144,
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": []
                              }
                            }
                          ]
                        },
                        "expression": false
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": []
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 164,
                      "end": 183,
                      "declaration": {
                        "type": "VariableDeclaration",
                        "start": 171,
                        "end": 183,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 175,
                            "end": 182,
                            "id": {
                              "type": "Identifier",
                              "start": 175,
                              "end": 177,
                              "decorators": [],
                              "name": "v1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 180,
                              "end": 182,
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": []
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 192,
                      "end": 210,
                      "declaration": {
                        "type": "VariableDeclaration",
                        "start": 199,
                        "end": 210,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 203,
                            "end": 209,
                            "id": {
                              "type": "Identifier",
                              "start": 203,
                              "end": 209,
                              "decorators": [],
                              "name": "v2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 205,
                                "end": 209,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 207,
                                  "end": 209,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 207,
                                    "end": 209,
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": []
                    }
                  ]
                },
                "kind": "module",
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "TSModuleDeclaration",
              "start": 222,
              "end": 409,
              "id": {
                "type": "Identifier",
                "start": 229,
                "end": 242,
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 243,
                "end": 409,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 253,
                    "end": 280,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 260,
                      "end": 280,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 266,
                        "end": 268,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 269,
                        "end": 280,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 289,
                    "end": 348,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 296,
                      "end": 348,
                      "id": {
                        "type": "Identifier",
                        "start": 305,
                        "end": 307,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 310,
                        "end": 348,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 324,
                            "end": 338,
                            "argument": {
                              "type": "NewExpression",
                              "start": 331,
                              "end": 337,
                              "callee": {
                                "type": "Identifier",
                                "start": 335,
                                "end": 337,
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": []
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 357,
                    "end": 376,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 364,
                      "end": 376,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 368,
                          "end": 375,
                          "id": {
                            "type": "Identifier",
                            "start": 368,
                            "end": 370,
                            "decorators": [],
                            "name": "v1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 373,
                            "end": 375,
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 385,
                    "end": 403,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 392,
                      "end": 403,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 396,
                          "end": 402,
                          "id": {
                            "type": "Identifier",
                            "start": 396,
                            "end": 402,
                            "decorators": [],
                            "name": "v2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 398,
                              "end": 402,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 400,
                                "end": 402,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 400,
                                  "end": 402,
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 415,
              "end": 592,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 422,
                "end": 592,
                "id": {
                  "type": "Literal",
                  "start": 437,
                  "end": 451,
                  "value": "m1_M3_public",
                  "raw": "\"m1_M3_public\""
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 452,
                  "end": 592,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 462,
                      "end": 483,
                      "declaration": {
                        "type": "TSDeclareFunction",
                        "start": 469,
                        "end": 483,
                        "id": {
                          "type": "Identifier",
                          "start": 478,
                          "end": 480,
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": null,
                        "expression": false
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": []
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 492,
                      "end": 519,
                      "declaration": {
                        "type": "ClassDeclaration",
                        "start": 499,
                        "end": 519,
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "start": 505,
                          "end": 507,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "start": 508,
                          "end": 519,
                          "body": []
                        },
                        "abstract": false,
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": []
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 528,
                      "end": 559,
                      "declaration": {
                        "type": "VariableDeclaration",
                        "start": 535,
                        "end": 559,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 539,
                            "end": 558,
                            "id": {
                              "type": "Identifier",
                              "start": 539,
                              "end": 558,
                              "decorators": [],
                              "name": "v1",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 541,
                                "end": 558,
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "start": 543,
                                  "end": 558,
                                  "members": [
                                    {
                                      "type": "TSConstructSignatureDeclaration",
                                      "start": 545,
                                      "end": 556,
                                      "typeParameters": null,
                                      "params": [],
                                      "returnType": {
                                        "type": "TSTypeAnnotation",
                                        "start": 551,
                                        "end": 555,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 553,
                                          "end": 555,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 553,
                                            "end": 555,
                                            "decorators": [],
                                            "name": "c1",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        }
                                      }
                                    }
                                  ]
                                }
                              }
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": []
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 568,
                      "end": 586,
                      "declaration": {
                        "type": "VariableDeclaration",
                        "start": 575,
                        "end": 586,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 579,
                            "end": 585,
                            "id": {
                              "type": "Identifier",
                              "start": 579,
                              "end": 585,
                              "decorators": [],
                              "name": "v2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 581,
                                "end": 585,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 583,
                                  "end": 585,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 583,
                                    "end": 585,
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": []
                    }
                  ]
                },
                "kind": "module",
                "declare": true,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": []
            },
            {
              "type": "TSModuleDeclaration",
              "start": 598,
              "end": 769,
              "id": {
                "type": "Literal",
                "start": 613,
                "end": 628,
                "value": "m1_M4_private",
                "raw": "\"m1_M4_private\""
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 629,
                "end": 769,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 639,
                    "end": 660,
                    "declaration": {
                      "type": "TSDeclareFunction",
                      "start": 646,
                      "end": 660,
                      "id": {
                        "type": "Identifier",
                        "start": 655,
                        "end": 657,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": null,
                      "expression": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 669,
                    "end": 696,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 676,
                      "end": 696,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 682,
                        "end": 684,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 685,
                        "end": 696,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 705,
                    "end": 736,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 712,
                      "end": 736,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 716,
                          "end": 735,
                          "id": {
                            "type": "Identifier",
                            "start": 716,
                            "end": 735,
                            "decorators": [],
                            "name": "v1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 718,
                              "end": 735,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 720,
                                "end": 735,
                                "members": [
                                  {
                                    "type": "TSConstructSignatureDeclaration",
                                    "start": 722,
                                    "end": 733,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 728,
                                      "end": 732,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 730,
                                        "end": 732,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 730,
                                          "end": 732,
                                          "decorators": [],
                                          "name": "c1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 745,
                    "end": 763,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 752,
                      "end": 763,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 756,
                          "end": 762,
                          "id": {
                            "type": "Identifier",
                            "start": 756,
                            "end": 762,
                            "decorators": [],
                            "name": "v2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 758,
                              "end": 762,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 760,
                                "end": 762,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 760,
                                  "end": 762,
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": true,
              "global": false
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 775,
              "end": 812,
              "id": {
                "type": "Identifier",
                "start": 782,
                "end": 796,
                "decorators": [],
                "name": "m1_im1_private",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 799,
                "end": 811,
                "decorators": [],
                "name": "m1_M1_public",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 817,
              "end": 873,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 824,
                "end": 873,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 828,
                    "end": 872,
                    "id": {
                      "type": "Identifier",
                      "start": 828,
                      "end": 852,
                      "decorators": [],
                      "name": "m1_im1_private_v1_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 855,
                      "end": 872,
                      "object": {
                        "type": "Identifier",
                        "start": 855,
                        "end": 869,
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 870,
                        "end": 872,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 878,
              "end": 940,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 885,
                "end": 940,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 889,
                    "end": 939,
                    "id": {
                      "type": "Identifier",
                      "start": 889,
                      "end": 913,
                      "decorators": [],
                      "name": "m1_im1_private_v2_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 916,
                      "end": 939,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 920,
                        "end": 937,
                        "object": {
                          "type": "Identifier",
                          "start": 920,
                          "end": 934,
                          "decorators": [],
                          "name": "m1_im1_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 935,
                          "end": 937,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 945,
              "end": 1001,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 952,
                "end": 1001,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 956,
                    "end": 1000,
                    "id": {
                      "type": "Identifier",
                      "start": 956,
                      "end": 980,
                      "decorators": [],
                      "name": "m1_im1_private_v3_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 983,
                      "end": 1000,
                      "object": {
                        "type": "Identifier",
                        "start": 983,
                        "end": 997,
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 998,
                        "end": 1000,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1006,
              "end": 1064,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1013,
                "end": 1064,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1017,
                    "end": 1063,
                    "id": {
                      "type": "Identifier",
                      "start": 1017,
                      "end": 1041,
                      "decorators": [],
                      "name": "m1_im1_private_v4_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "CallExpression",
                      "start": 1044,
                      "end": 1063,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1044,
                        "end": 1061,
                        "object": {
                          "type": "Identifier",
                          "start": 1044,
                          "end": 1058,
                          "decorators": [],
                          "name": "m1_im1_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1059,
                          "end": 1061,
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 1069,
              "end": 1119,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1073,
                  "end": 1118,
                  "id": {
                    "type": "Identifier",
                    "start": 1073,
                    "end": 1098,
                    "decorators": [],
                    "name": "m1_im1_private_v1_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 1101,
                    "end": 1118,
                    "object": {
                      "type": "Identifier",
                      "start": 1101,
                      "end": 1115,
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1116,
                      "end": 1118,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 1124,
              "end": 1180,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1128,
                  "end": 1179,
                  "id": {
                    "type": "Identifier",
                    "start": 1128,
                    "end": 1153,
                    "decorators": [],
                    "name": "m1_im1_private_v2_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1156,
                    "end": 1179,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1160,
                      "end": 1177,
                      "object": {
                        "type": "Identifier",
                        "start": 1160,
                        "end": 1174,
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1175,
                        "end": 1177,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 1185,
              "end": 1235,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1189,
                  "end": 1234,
                  "id": {
                    "type": "Identifier",
                    "start": 1189,
                    "end": 1214,
                    "decorators": [],
                    "name": "m1_im1_private_v3_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 1217,
                    "end": 1234,
                    "object": {
                      "type": "Identifier",
                      "start": 1217,
                      "end": 1231,
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1232,
                      "end": 1234,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 1240,
              "end": 1292,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1244,
                  "end": 1291,
                  "id": {
                    "type": "Identifier",
                    "start": 1244,
                    "end": 1269,
                    "decorators": [],
                    "name": "m1_im1_private_v4_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1272,
                    "end": 1291,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1272,
                      "end": 1289,
                      "object": {
                        "type": "Identifier",
                        "start": 1272,
                        "end": 1286,
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1287,
                        "end": 1289,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 1299,
              "end": 1337,
              "id": {
                "type": "Identifier",
                "start": 1306,
                "end": 1320,
                "decorators": [],
                "name": "m1_im2_private",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 1323,
                "end": 1336,
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1342,
              "end": 1398,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1349,
                "end": 1398,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1353,
                    "end": 1397,
                    "id": {
                      "type": "Identifier",
                      "start": 1353,
                      "end": 1377,
                      "decorators": [],
                      "name": "m1_im2_private_v1_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 1380,
                      "end": 1397,
                      "object": {
                        "type": "Identifier",
                        "start": 1380,
                        "end": 1394,
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1395,
                        "end": 1397,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1403,
              "end": 1465,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1410,
                "end": 1465,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1414,
                    "end": 1464,
                    "id": {
                      "type": "Identifier",
                      "start": 1414,
                      "end": 1438,
                      "decorators": [],
                      "name": "m1_im2_private_v2_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 1441,
                      "end": 1464,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1445,
                        "end": 1462,
                        "object": {
                          "type": "Identifier",
                          "start": 1445,
                          "end": 1459,
                          "decorators": [],
                          "name": "m1_im2_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1460,
                          "end": 1462,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1470,
              "end": 1526,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1477,
                "end": 1526,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1481,
                    "end": 1525,
                    "id": {
                      "type": "Identifier",
                      "start": 1481,
                      "end": 1505,
                      "decorators": [],
                      "name": "m1_im2_private_v3_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 1508,
                      "end": 1525,
                      "object": {
                        "type": "Identifier",
                        "start": 1508,
                        "end": 1522,
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1523,
                        "end": 1525,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1531,
              "end": 1589,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1538,
                "end": 1589,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1542,
                    "end": 1588,
                    "id": {
                      "type": "Identifier",
                      "start": 1542,
                      "end": 1566,
                      "decorators": [],
                      "name": "m1_im2_private_v4_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "CallExpression",
                      "start": 1569,
                      "end": 1588,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1569,
                        "end": 1586,
                        "object": {
                          "type": "Identifier",
                          "start": 1569,
                          "end": 1583,
                          "decorators": [],
                          "name": "m1_im2_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1584,
                          "end": 1586,
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 1594,
              "end": 1644,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1598,
                  "end": 1643,
                  "id": {
                    "type": "Identifier",
                    "start": 1598,
                    "end": 1623,
                    "decorators": [],
                    "name": "m1_im2_private_v1_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 1626,
                    "end": 1643,
                    "object": {
                      "type": "Identifier",
                      "start": 1626,
                      "end": 1640,
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1641,
                      "end": 1643,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 1649,
              "end": 1705,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1653,
                  "end": 1704,
                  "id": {
                    "type": "Identifier",
                    "start": 1653,
                    "end": 1678,
                    "decorators": [],
                    "name": "m1_im2_private_v2_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1681,
                    "end": 1704,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1685,
                      "end": 1702,
                      "object": {
                        "type": "Identifier",
                        "start": 1685,
                        "end": 1699,
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1700,
                        "end": 1702,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 1710,
              "end": 1760,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1714,
                  "end": 1759,
                  "id": {
                    "type": "Identifier",
                    "start": 1714,
                    "end": 1739,
                    "decorators": [],
                    "name": "m1_im2_private_v3_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 1742,
                    "end": 1759,
                    "object": {
                      "type": "Identifier",
                      "start": 1742,
                      "end": 1756,
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1757,
                      "end": 1759,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 1765,
              "end": 1817,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1769,
                  "end": 1816,
                  "id": {
                    "type": "Identifier",
                    "start": 1769,
                    "end": 1794,
                    "decorators": [],
                    "name": "m1_im2_private_v4_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1797,
                    "end": 1816,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1797,
                      "end": 1814,
                      "object": {
                        "type": "Identifier",
                        "start": 1797,
                        "end": 1811,
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1812,
                        "end": 1814,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 1823,
              "end": 1871,
              "id": {
                "type": "Identifier",
                "start": 1830,
                "end": 1844,
                "decorators": [],
                "name": "m1_im3_private",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "start": 1847,
                "end": 1870,
                "expression": {
                  "type": "Literal",
                  "start": 1855,
                  "end": 1869,
                  "value": "m1_M3_public",
                  "raw": "\"m1_M3_public\""
                }
              },
              "importKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1876,
              "end": 1932,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1883,
                "end": 1932,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1887,
                    "end": 1931,
                    "id": {
                      "type": "Identifier",
                      "start": 1887,
                      "end": 1911,
                      "decorators": [],
                      "name": "m1_im3_private_v1_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 1914,
                      "end": 1931,
                      "object": {
                        "type": "Identifier",
                        "start": 1914,
                        "end": 1928,
                        "decorators": [],
                        "name": "m1_im3_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1929,
                        "end": 1931,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1937,
              "end": 1999,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1944,
                "end": 1999,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1948,
                    "end": 1998,
                    "id": {
                      "type": "Identifier",
                      "start": 1948,
                      "end": 1972,
                      "decorators": [],
                      "name": "m1_im3_private_v2_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 1975,
                      "end": 1998,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1979,
                        "end": 1996,
                        "object": {
                          "type": "Identifier",
                          "start": 1979,
                          "end": 1993,
                          "decorators": [],
                          "name": "m1_im3_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1994,
                          "end": 1996,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2004,
              "end": 2060,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 2011,
                "end": 2060,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 2015,
                    "end": 2059,
                    "id": {
                      "type": "Identifier",
                      "start": 2015,
                      "end": 2039,
                      "decorators": [],
                      "name": "m1_im3_private_v3_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 2042,
                      "end": 2059,
                      "object": {
                        "type": "Identifier",
                        "start": 2042,
                        "end": 2056,
                        "decorators": [],
                        "name": "m1_im3_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2057,
                        "end": 2059,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2065,
              "end": 2123,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 2072,
                "end": 2123,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 2076,
                    "end": 2122,
                    "id": {
                      "type": "Identifier",
                      "start": 2076,
                      "end": 2100,
                      "decorators": [],
                      "name": "m1_im3_private_v4_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "CallExpression",
                      "start": 2103,
                      "end": 2122,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2103,
                        "end": 2120,
                        "object": {
                          "type": "Identifier",
                          "start": 2103,
                          "end": 2117,
                          "decorators": [],
                          "name": "m1_im3_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2118,
                          "end": 2120,
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 2128,
              "end": 2178,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2132,
                  "end": 2177,
                  "id": {
                    "type": "Identifier",
                    "start": 2132,
                    "end": 2157,
                    "decorators": [],
                    "name": "m1_im3_private_v1_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 2160,
                    "end": 2177,
                    "object": {
                      "type": "Identifier",
                      "start": 2160,
                      "end": 2174,
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2175,
                      "end": 2177,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 2183,
              "end": 2239,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2187,
                  "end": 2238,
                  "id": {
                    "type": "Identifier",
                    "start": 2187,
                    "end": 2212,
                    "decorators": [],
                    "name": "m1_im3_private_v2_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 2215,
                    "end": 2238,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2219,
                      "end": 2236,
                      "object": {
                        "type": "Identifier",
                        "start": 2219,
                        "end": 2233,
                        "decorators": [],
                        "name": "m1_im3_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2234,
                        "end": 2236,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 2244,
              "end": 2294,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2248,
                  "end": 2293,
                  "id": {
                    "type": "Identifier",
                    "start": 2248,
                    "end": 2273,
                    "decorators": [],
                    "name": "m1_im3_private_v3_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 2276,
                    "end": 2293,
                    "object": {
                      "type": "Identifier",
                      "start": 2276,
                      "end": 2290,
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2291,
                      "end": 2293,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 2299,
              "end": 2351,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2303,
                  "end": 2350,
                  "id": {
                    "type": "Identifier",
                    "start": 2303,
                    "end": 2328,
                    "decorators": [],
                    "name": "m1_im3_private_v4_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 2331,
                    "end": 2350,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2331,
                      "end": 2348,
                      "object": {
                        "type": "Identifier",
                        "start": 2331,
                        "end": 2345,
                        "decorators": [],
                        "name": "m1_im3_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2346,
                        "end": 2348,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 2357,
              "end": 2406,
              "id": {
                "type": "Identifier",
                "start": 2364,
                "end": 2378,
                "decorators": [],
                "name": "m1_im4_private",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "start": 2381,
                "end": 2405,
                "expression": {
                  "type": "Literal",
                  "start": 2389,
                  "end": 2404,
                  "value": "m1_M4_private",
                  "raw": "\"m1_M4_private\""
                }
              },
              "importKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2411,
              "end": 2467,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 2418,
                "end": 2467,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 2422,
                    "end": 2466,
                    "id": {
                      "type": "Identifier",
                      "start": 2422,
                      "end": 2446,
                      "decorators": [],
                      "name": "m1_im4_private_v1_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 2449,
                      "end": 2466,
                      "object": {
                        "type": "Identifier",
                        "start": 2449,
                        "end": 2463,
                        "decorators": [],
                        "name": "m1_im4_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2464,
                        "end": 2466,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2472,
              "end": 2534,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 2479,
                "end": 2534,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 2483,
                    "end": 2533,
                    "id": {
                      "type": "Identifier",
                      "start": 2483,
                      "end": 2507,
                      "decorators": [],
                      "name": "m1_im4_private_v2_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 2510,
                      "end": 2533,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2514,
                        "end": 2531,
                        "object": {
                          "type": "Identifier",
                          "start": 2514,
                          "end": 2528,
                          "decorators": [],
                          "name": "m1_im4_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2529,
                          "end": 2531,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": []
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2539,
              "end": 2595,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 2546,
                "end": 2595,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 2550,
                    "end": 2594,
                    "id": {
                      "type": "Identifier",
                      "start": 2550,
                      "end": 2574,
                      "decorators": [],
                      "name": "m1_im4_private_v3_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 2577,
                      "end": 2594,
                      "object": {
                        "type": "Identifier",
                        "start": 2577,
                        "end": 2591,
                        "decorators": [],
                        "name": "m1_im4_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2592,
                        "end": 2594,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2600,
              "end": 2658,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 2607,
                "end": 2658,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 2611,
                    "end": 2657,
                    "id": {
                      "type": "Identifier",
                      "start": 2611,
                      "end": 2635,
                      "decorators": [],
                      "name": "m1_im4_private_v4_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "CallExpression",
                      "start": 2638,
                      "end": 2657,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2638,
                        "end": 2655,
                        "object": {
                          "type": "Identifier",
                          "start": 2638,
                          "end": 2652,
                          "decorators": [],
                          "name": "m1_im4_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2653,
                          "end": 2655,
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 2663,
              "end": 2713,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2667,
                  "end": 2712,
                  "id": {
                    "type": "Identifier",
                    "start": 2667,
                    "end": 2692,
                    "decorators": [],
                    "name": "m1_im4_private_v1_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 2695,
                    "end": 2712,
                    "object": {
                      "type": "Identifier",
                      "start": 2695,
                      "end": 2709,
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2710,
                      "end": 2712,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 2718,
              "end": 2774,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2722,
                  "end": 2773,
                  "id": {
                    "type": "Identifier",
                    "start": 2722,
                    "end": 2747,
                    "decorators": [],
                    "name": "m1_im4_private_v2_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 2750,
                    "end": 2773,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2754,
                      "end": 2771,
                      "object": {
                        "type": "Identifier",
                        "start": 2754,
                        "end": 2768,
                        "decorators": [],
                        "name": "m1_im4_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2769,
                        "end": 2771,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 2779,
              "end": 2829,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2783,
                  "end": 2828,
                  "id": {
                    "type": "Identifier",
                    "start": 2783,
                    "end": 2808,
                    "decorators": [],
                    "name": "m1_im4_private_v3_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 2811,
                    "end": 2828,
                    "object": {
                      "type": "Identifier",
                      "start": 2811,
                      "end": 2825,
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2826,
                      "end": 2828,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 2834,
              "end": 2886,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2838,
                  "end": 2885,
                  "id": {
                    "type": "Identifier",
                    "start": 2838,
                    "end": 2863,
                    "decorators": [],
                    "name": "m1_im4_private_v4_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 2866,
                    "end": 2885,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2866,
                      "end": 2883,
                      "object": {
                        "type": "Identifier",
                        "start": 2866,
                        "end": 2880,
                        "decorators": [],
                        "name": "m1_im4_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2881,
                        "end": 2883,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2892,
              "end": 2935,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 2899,
                "end": 2935,
                "id": {
                  "type": "Identifier",
                  "start": 2906,
                  "end": 2919,
                  "decorators": [],
                  "name": "m1_im1_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "Identifier",
                  "start": 2922,
                  "end": 2934,
                  "decorators": [],
                  "name": "m1_M1_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2940,
              "end": 2984,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 2947,
                "end": 2984,
                "id": {
                  "type": "Identifier",
                  "start": 2954,
                  "end": 2967,
                  "decorators": [],
                  "name": "m1_im2_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "Identifier",
                  "start": 2970,
                  "end": 2983,
                  "decorators": [],
                  "name": "m1_M2_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2989,
              "end": 3043,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 2996,
                "end": 3043,
                "id": {
                  "type": "Identifier",
                  "start": 3003,
                  "end": 3016,
                  "decorators": [],
                  "name": "m1_im3_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "TSExternalModuleReference",
                  "start": 3019,
                  "end": 3042,
                  "expression": {
                    "type": "Literal",
                    "start": 3027,
                    "end": 3041,
                    "value": "m1_M3_public",
                    "raw": "\"m1_M3_public\""
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 3048,
              "end": 3103,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 3055,
                "end": 3103,
                "id": {
                  "type": "Identifier",
                  "start": 3062,
                  "end": 3075,
                  "decorators": [],
                  "name": "m1_im4_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "TSExternalModuleReference",
                  "start": 3078,
                  "end": 3102,
                  "expression": {
                    "type": "Literal",
                    "start": 3086,
                    "end": 3101,
                    "value": "m1_M4_private",
                    "raw": "\"m1_M4_private\""
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 3107,
      "end": 6241,
      "id": {
        "type": "Identifier",
        "start": 3114,
        "end": 3116,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 3117,
        "end": 6241,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 3123,
            "end": 3316,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 3130,
              "end": 3316,
              "id": {
                "type": "Identifier",
                "start": 3137,
                "end": 3149,
                "decorators": [],
                "name": "m2_M1_public",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 3150,
                "end": 3316,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 3160,
                    "end": 3187,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 3167,
                      "end": 3187,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 3173,
                        "end": 3175,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 3176,
                        "end": 3187,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 3196,
                    "end": 3255,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 3203,
                      "end": 3255,
                      "id": {
                        "type": "Identifier",
                        "start": 3212,
                        "end": 3214,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 3217,
                        "end": 3255,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 3231,
                            "end": 3245,
                            "argument": {
                              "type": "NewExpression",
                              "start": 3238,
                              "end": 3244,
                              "callee": {
                                "type": "Identifier",
                                "start": 3242,
                                "end": 3244,
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": []
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 3264,
                    "end": 3283,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 3271,
                      "end": 3283,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 3275,
                          "end": 3282,
                          "id": {
                            "type": "Identifier",
                            "start": 3275,
                            "end": 3277,
                            "decorators": [],
                            "name": "v1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 3280,
                            "end": 3282,
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 3292,
                    "end": 3310,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 3299,
                      "end": 3310,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 3303,
                          "end": 3309,
                          "id": {
                            "type": "Identifier",
                            "start": 3303,
                            "end": 3309,
                            "decorators": [],
                            "name": "v2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3305,
                              "end": 3309,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3307,
                                "end": 3309,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3307,
                                  "end": 3309,
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "TSModuleDeclaration",
            "start": 3322,
            "end": 3509,
            "id": {
              "type": "Identifier",
              "start": 3329,
              "end": 3342,
              "decorators": [],
              "name": "m2_M2_private",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 3343,
              "end": 3509,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 3353,
                  "end": 3380,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 3360,
                    "end": 3380,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 3366,
                      "end": 3368,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 3369,
                      "end": 3380,
                      "body": []
                    },
                    "abstract": false,
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 3389,
                  "end": 3448,
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "start": 3396,
                    "end": 3448,
                    "id": {
                      "type": "Identifier",
                      "start": 3405,
                      "end": 3407,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 3410,
                      "end": 3448,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 3424,
                          "end": 3438,
                          "argument": {
                            "type": "NewExpression",
                            "start": 3431,
                            "end": 3437,
                            "callee": {
                              "type": "Identifier",
                              "start": 3435,
                              "end": 3437,
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": []
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 3457,
                  "end": 3476,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 3464,
                    "end": 3476,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3468,
                        "end": 3475,
                        "id": {
                          "type": "Identifier",
                          "start": 3468,
                          "end": 3470,
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3473,
                          "end": 3475,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 3485,
                  "end": 3503,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 3492,
                    "end": 3503,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3496,
                        "end": 3502,
                        "id": {
                          "type": "Identifier",
                          "start": 3496,
                          "end": 3502,
                          "decorators": [],
                          "name": "v2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3498,
                            "end": 3502,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3500,
                              "end": 3502,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3500,
                                "end": 3502,
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3515,
            "end": 3692,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 3522,
              "end": 3692,
              "id": {
                "type": "Literal",
                "start": 3537,
                "end": 3551,
                "value": "m2_M3_public",
                "raw": "\"m2_M3_public\""
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 3552,
                "end": 3692,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 3562,
                    "end": 3583,
                    "declaration": {
                      "type": "TSDeclareFunction",
                      "start": 3569,
                      "end": 3583,
                      "id": {
                        "type": "Identifier",
                        "start": 3578,
                        "end": 3580,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": null,
                      "expression": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 3592,
                    "end": 3619,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 3599,
                      "end": 3619,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 3605,
                        "end": 3607,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 3608,
                        "end": 3619,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 3628,
                    "end": 3659,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 3635,
                      "end": 3659,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 3639,
                          "end": 3658,
                          "id": {
                            "type": "Identifier",
                            "start": 3639,
                            "end": 3658,
                            "decorators": [],
                            "name": "v1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3641,
                              "end": 3658,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 3643,
                                "end": 3658,
                                "members": [
                                  {
                                    "type": "TSConstructSignatureDeclaration",
                                    "start": 3645,
                                    "end": 3656,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 3651,
                                      "end": 3655,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 3653,
                                        "end": 3655,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3653,
                                          "end": 3655,
                                          "decorators": [],
                                          "name": "c1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 3668,
                    "end": 3686,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 3675,
                      "end": 3686,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 3679,
                          "end": 3685,
                          "id": {
                            "type": "Identifier",
                            "start": 3679,
                            "end": 3685,
                            "decorators": [],
                            "name": "v2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3681,
                              "end": 3685,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3683,
                                "end": 3685,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3683,
                                  "end": 3685,
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": true,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "TSModuleDeclaration",
            "start": 3698,
            "end": 3869,
            "id": {
              "type": "Literal",
              "start": 3713,
              "end": 3728,
              "value": "m2_M4_private",
              "raw": "\"m2_M4_private\""
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 3729,
              "end": 3869,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 3739,
                  "end": 3760,
                  "declaration": {
                    "type": "TSDeclareFunction",
                    "start": 3746,
                    "end": 3760,
                    "id": {
                      "type": "Identifier",
                      "start": 3755,
                      "end": 3757,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 3769,
                  "end": 3796,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 3776,
                    "end": 3796,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 3782,
                      "end": 3784,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 3785,
                      "end": 3796,
                      "body": []
                    },
                    "abstract": false,
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 3805,
                  "end": 3836,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 3812,
                    "end": 3836,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3816,
                        "end": 3835,
                        "id": {
                          "type": "Identifier",
                          "start": 3816,
                          "end": 3835,
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3818,
                            "end": 3835,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 3820,
                              "end": 3835,
                              "members": [
                                {
                                  "type": "TSConstructSignatureDeclaration",
                                  "start": 3822,
                                  "end": 3833,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "start": 3828,
                                    "end": 3832,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 3830,
                                      "end": 3832,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 3830,
                                        "end": 3832,
                                        "decorators": [],
                                        "name": "c1",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 3845,
                  "end": 3863,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 3852,
                    "end": 3863,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3856,
                        "end": 3862,
                        "id": {
                          "type": "Identifier",
                          "start": 3856,
                          "end": 3862,
                          "decorators": [],
                          "name": "v2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3858,
                            "end": 3862,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3860,
                              "end": 3862,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3860,
                                "end": 3862,
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                }
              ]
            },
            "kind": "module",
            "declare": true,
            "global": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 3875,
            "end": 3912,
            "id": {
              "type": "Identifier",
              "start": 3882,
              "end": 3896,
              "decorators": [],
              "name": "m1_im1_private",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 3899,
              "end": 3911,
              "decorators": [],
              "name": "m2_M1_public",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3917,
            "end": 3973,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3924,
              "end": 3973,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3928,
                  "end": 3972,
                  "id": {
                    "type": "Identifier",
                    "start": 3928,
                    "end": 3952,
                    "decorators": [],
                    "name": "m1_im1_private_v1_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 3955,
                    "end": 3972,
                    "object": {
                      "type": "Identifier",
                      "start": 3955,
                      "end": 3969,
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3970,
                      "end": 3972,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3978,
            "end": 4040,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3985,
              "end": 4040,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3989,
                  "end": 4039,
                  "id": {
                    "type": "Identifier",
                    "start": 3989,
                    "end": 4013,
                    "decorators": [],
                    "name": "m1_im1_private_v2_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 4016,
                    "end": 4039,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 4020,
                      "end": 4037,
                      "object": {
                        "type": "Identifier",
                        "start": 4020,
                        "end": 4034,
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4035,
                        "end": 4037,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4045,
            "end": 4101,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4052,
              "end": 4101,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4056,
                  "end": 4100,
                  "id": {
                    "type": "Identifier",
                    "start": 4056,
                    "end": 4080,
                    "decorators": [],
                    "name": "m1_im1_private_v3_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 4083,
                    "end": 4100,
                    "object": {
                      "type": "Identifier",
                      "start": 4083,
                      "end": 4097,
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4098,
                      "end": 4100,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4106,
            "end": 4164,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4113,
              "end": 4164,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4117,
                  "end": 4163,
                  "id": {
                    "type": "Identifier",
                    "start": 4117,
                    "end": 4141,
                    "decorators": [],
                    "name": "m1_im1_private_v4_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 4144,
                    "end": 4163,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 4144,
                      "end": 4161,
                      "object": {
                        "type": "Identifier",
                        "start": 4144,
                        "end": 4158,
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4159,
                        "end": 4161,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 4169,
            "end": 4219,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4173,
                "end": 4218,
                "id": {
                  "type": "Identifier",
                  "start": 4173,
                  "end": 4198,
                  "decorators": [],
                  "name": "m1_im1_private_v1_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 4201,
                  "end": 4218,
                  "object": {
                    "type": "Identifier",
                    "start": 4201,
                    "end": 4215,
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4216,
                    "end": 4218,
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4224,
            "end": 4280,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4228,
                "end": 4279,
                "id": {
                  "type": "Identifier",
                  "start": 4228,
                  "end": 4253,
                  "decorators": [],
                  "name": "m1_im1_private_v2_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 4256,
                  "end": 4279,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4260,
                    "end": 4277,
                    "object": {
                      "type": "Identifier",
                      "start": 4260,
                      "end": 4274,
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4275,
                      "end": 4277,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4285,
            "end": 4335,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4289,
                "end": 4334,
                "id": {
                  "type": "Identifier",
                  "start": 4289,
                  "end": 4314,
                  "decorators": [],
                  "name": "m1_im1_private_v3_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 4317,
                  "end": 4334,
                  "object": {
                    "type": "Identifier",
                    "start": 4317,
                    "end": 4331,
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4332,
                    "end": 4334,
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4340,
            "end": 4392,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4344,
                "end": 4391,
                "id": {
                  "type": "Identifier",
                  "start": 4344,
                  "end": 4369,
                  "decorators": [],
                  "name": "m1_im1_private_v4_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4372,
                  "end": 4391,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4372,
                    "end": 4389,
                    "object": {
                      "type": "Identifier",
                      "start": 4372,
                      "end": 4386,
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4387,
                      "end": 4389,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 4399,
            "end": 4437,
            "id": {
              "type": "Identifier",
              "start": 4406,
              "end": 4420,
              "decorators": [],
              "name": "m1_im2_private",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 4423,
              "end": 4436,
              "decorators": [],
              "name": "m2_M2_private",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4442,
            "end": 4498,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4449,
              "end": 4498,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4453,
                  "end": 4497,
                  "id": {
                    "type": "Identifier",
                    "start": 4453,
                    "end": 4477,
                    "decorators": [],
                    "name": "m1_im2_private_v1_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 4480,
                    "end": 4497,
                    "object": {
                      "type": "Identifier",
                      "start": 4480,
                      "end": 4494,
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4495,
                      "end": 4497,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4503,
            "end": 4565,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4510,
              "end": 4565,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4514,
                  "end": 4564,
                  "id": {
                    "type": "Identifier",
                    "start": 4514,
                    "end": 4538,
                    "decorators": [],
                    "name": "m1_im2_private_v2_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 4541,
                    "end": 4564,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 4545,
                      "end": 4562,
                      "object": {
                        "type": "Identifier",
                        "start": 4545,
                        "end": 4559,
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4560,
                        "end": 4562,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4570,
            "end": 4626,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4577,
              "end": 4626,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4581,
                  "end": 4625,
                  "id": {
                    "type": "Identifier",
                    "start": 4581,
                    "end": 4605,
                    "decorators": [],
                    "name": "m1_im2_private_v3_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 4608,
                    "end": 4625,
                    "object": {
                      "type": "Identifier",
                      "start": 4608,
                      "end": 4622,
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4623,
                      "end": 4625,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4631,
            "end": 4689,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4638,
              "end": 4689,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4642,
                  "end": 4688,
                  "id": {
                    "type": "Identifier",
                    "start": 4642,
                    "end": 4666,
                    "decorators": [],
                    "name": "m1_im2_private_v4_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 4669,
                    "end": 4688,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 4669,
                      "end": 4686,
                      "object": {
                        "type": "Identifier",
                        "start": 4669,
                        "end": 4683,
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4684,
                        "end": 4686,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 4694,
            "end": 4744,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4698,
                "end": 4743,
                "id": {
                  "type": "Identifier",
                  "start": 4698,
                  "end": 4723,
                  "decorators": [],
                  "name": "m1_im2_private_v1_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 4726,
                  "end": 4743,
                  "object": {
                    "type": "Identifier",
                    "start": 4726,
                    "end": 4740,
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4741,
                    "end": 4743,
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4749,
            "end": 4805,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4753,
                "end": 4804,
                "id": {
                  "type": "Identifier",
                  "start": 4753,
                  "end": 4778,
                  "decorators": [],
                  "name": "m1_im2_private_v2_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 4781,
                  "end": 4804,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4785,
                    "end": 4802,
                    "object": {
                      "type": "Identifier",
                      "start": 4785,
                      "end": 4799,
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4800,
                      "end": 4802,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4810,
            "end": 4860,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4814,
                "end": 4859,
                "id": {
                  "type": "Identifier",
                  "start": 4814,
                  "end": 4839,
                  "decorators": [],
                  "name": "m1_im2_private_v3_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 4842,
                  "end": 4859,
                  "object": {
                    "type": "Identifier",
                    "start": 4842,
                    "end": 4856,
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4857,
                    "end": 4859,
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4865,
            "end": 4917,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4869,
                "end": 4916,
                "id": {
                  "type": "Identifier",
                  "start": 4869,
                  "end": 4894,
                  "decorators": [],
                  "name": "m1_im2_private_v4_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4897,
                  "end": 4916,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4897,
                    "end": 4914,
                    "object": {
                      "type": "Identifier",
                      "start": 4897,
                      "end": 4911,
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4912,
                      "end": 4914,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 4923,
            "end": 4971,
            "id": {
              "type": "Identifier",
              "start": 4930,
              "end": 4944,
              "decorators": [],
              "name": "m1_im3_private",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 4947,
              "end": 4970,
              "expression": {
                "type": "Literal",
                "start": 4955,
                "end": 4969,
                "value": "m2_M3_public",
                "raw": "\"m2_M3_public\""
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4976,
            "end": 5032,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4983,
              "end": 5032,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4987,
                  "end": 5031,
                  "id": {
                    "type": "Identifier",
                    "start": 4987,
                    "end": 5011,
                    "decorators": [],
                    "name": "m1_im3_private_v1_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 5014,
                    "end": 5031,
                    "object": {
                      "type": "Identifier",
                      "start": 5014,
                      "end": 5028,
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5029,
                      "end": 5031,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5037,
            "end": 5099,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 5044,
              "end": 5099,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5048,
                  "end": 5098,
                  "id": {
                    "type": "Identifier",
                    "start": 5048,
                    "end": 5072,
                    "decorators": [],
                    "name": "m1_im3_private_v2_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 5075,
                    "end": 5098,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 5079,
                      "end": 5096,
                      "object": {
                        "type": "Identifier",
                        "start": 5079,
                        "end": 5093,
                        "decorators": [],
                        "name": "m1_im3_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 5094,
                        "end": 5096,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5104,
            "end": 5160,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 5111,
              "end": 5160,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5115,
                  "end": 5159,
                  "id": {
                    "type": "Identifier",
                    "start": 5115,
                    "end": 5139,
                    "decorators": [],
                    "name": "m1_im3_private_v3_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 5142,
                    "end": 5159,
                    "object": {
                      "type": "Identifier",
                      "start": 5142,
                      "end": 5156,
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5157,
                      "end": 5159,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5165,
            "end": 5223,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 5172,
              "end": 5223,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5176,
                  "end": 5222,
                  "id": {
                    "type": "Identifier",
                    "start": 5176,
                    "end": 5200,
                    "decorators": [],
                    "name": "m1_im3_private_v4_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 5203,
                    "end": 5222,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 5203,
                      "end": 5220,
                      "object": {
                        "type": "Identifier",
                        "start": 5203,
                        "end": 5217,
                        "decorators": [],
                        "name": "m1_im3_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 5218,
                        "end": 5220,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 5228,
            "end": 5278,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5232,
                "end": 5277,
                "id": {
                  "type": "Identifier",
                  "start": 5232,
                  "end": 5257,
                  "decorators": [],
                  "name": "m1_im3_private_v1_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 5260,
                  "end": 5277,
                  "object": {
                    "type": "Identifier",
                    "start": 5260,
                    "end": 5274,
                    "decorators": [],
                    "name": "m1_im3_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5275,
                    "end": 5277,
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 5283,
            "end": 5339,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5287,
                "end": 5338,
                "id": {
                  "type": "Identifier",
                  "start": 5287,
                  "end": 5312,
                  "decorators": [],
                  "name": "m1_im3_private_v2_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 5315,
                  "end": 5338,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5319,
                    "end": 5336,
                    "object": {
                      "type": "Identifier",
                      "start": 5319,
                      "end": 5333,
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5334,
                      "end": 5336,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 5344,
            "end": 5394,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5348,
                "end": 5393,
                "id": {
                  "type": "Identifier",
                  "start": 5348,
                  "end": 5373,
                  "decorators": [],
                  "name": "m1_im3_private_v3_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 5376,
                  "end": 5393,
                  "object": {
                    "type": "Identifier",
                    "start": 5376,
                    "end": 5390,
                    "decorators": [],
                    "name": "m1_im3_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5391,
                    "end": 5393,
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 5399,
            "end": 5451,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5403,
                "end": 5450,
                "id": {
                  "type": "Identifier",
                  "start": 5403,
                  "end": 5428,
                  "decorators": [],
                  "name": "m1_im3_private_v4_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 5431,
                  "end": 5450,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5431,
                    "end": 5448,
                    "object": {
                      "type": "Identifier",
                      "start": 5431,
                      "end": 5445,
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5446,
                      "end": 5448,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 5457,
            "end": 5506,
            "id": {
              "type": "Identifier",
              "start": 5464,
              "end": 5478,
              "decorators": [],
              "name": "m1_im4_private",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 5481,
              "end": 5505,
              "expression": {
                "type": "Literal",
                "start": 5489,
                "end": 5504,
                "value": "m2_M4_private",
                "raw": "\"m2_M4_private\""
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5511,
            "end": 5567,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 5518,
              "end": 5567,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5522,
                  "end": 5566,
                  "id": {
                    "type": "Identifier",
                    "start": 5522,
                    "end": 5546,
                    "decorators": [],
                    "name": "m1_im4_private_v1_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 5549,
                    "end": 5566,
                    "object": {
                      "type": "Identifier",
                      "start": 5549,
                      "end": 5563,
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5564,
                      "end": 5566,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5572,
            "end": 5634,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 5579,
              "end": 5634,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5583,
                  "end": 5633,
                  "id": {
                    "type": "Identifier",
                    "start": 5583,
                    "end": 5607,
                    "decorators": [],
                    "name": "m1_im4_private_v2_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 5610,
                    "end": 5633,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 5614,
                      "end": 5631,
                      "object": {
                        "type": "Identifier",
                        "start": 5614,
                        "end": 5628,
                        "decorators": [],
                        "name": "m1_im4_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 5629,
                        "end": 5631,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5639,
            "end": 5695,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 5646,
              "end": 5695,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5650,
                  "end": 5694,
                  "id": {
                    "type": "Identifier",
                    "start": 5650,
                    "end": 5674,
                    "decorators": [],
                    "name": "m1_im4_private_v3_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 5677,
                    "end": 5694,
                    "object": {
                      "type": "Identifier",
                      "start": 5677,
                      "end": 5691,
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5692,
                      "end": 5694,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5700,
            "end": 5758,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 5707,
              "end": 5758,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5711,
                  "end": 5757,
                  "id": {
                    "type": "Identifier",
                    "start": 5711,
                    "end": 5735,
                    "decorators": [],
                    "name": "m1_im4_private_v4_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 5738,
                    "end": 5757,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 5738,
                      "end": 5755,
                      "object": {
                        "type": "Identifier",
                        "start": 5738,
                        "end": 5752,
                        "decorators": [],
                        "name": "m1_im4_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 5753,
                        "end": 5755,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 5763,
            "end": 5813,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5767,
                "end": 5812,
                "id": {
                  "type": "Identifier",
                  "start": 5767,
                  "end": 5792,
                  "decorators": [],
                  "name": "m1_im4_private_v1_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 5795,
                  "end": 5812,
                  "object": {
                    "type": "Identifier",
                    "start": 5795,
                    "end": 5809,
                    "decorators": [],
                    "name": "m1_im4_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5810,
                    "end": 5812,
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 5818,
            "end": 5874,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5822,
                "end": 5873,
                "id": {
                  "type": "Identifier",
                  "start": 5822,
                  "end": 5847,
                  "decorators": [],
                  "name": "m1_im4_private_v2_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 5850,
                  "end": 5873,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5854,
                    "end": 5871,
                    "object": {
                      "type": "Identifier",
                      "start": 5854,
                      "end": 5868,
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5869,
                      "end": 5871,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 5879,
            "end": 5929,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5883,
                "end": 5928,
                "id": {
                  "type": "Identifier",
                  "start": 5883,
                  "end": 5908,
                  "decorators": [],
                  "name": "m1_im4_private_v3_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 5911,
                  "end": 5928,
                  "object": {
                    "type": "Identifier",
                    "start": 5911,
                    "end": 5925,
                    "decorators": [],
                    "name": "m1_im4_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5926,
                    "end": 5928,
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 5934,
            "end": 5986,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5938,
                "end": 5985,
                "id": {
                  "type": "Identifier",
                  "start": 5938,
                  "end": 5963,
                  "decorators": [],
                  "name": "m1_im4_private_v4_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 5966,
                  "end": 5985,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 5966,
                    "end": 5983,
                    "object": {
                      "type": "Identifier",
                      "start": 5966,
                      "end": 5980,
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5981,
                      "end": 5983,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6028,
            "end": 6071,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 6035,
              "end": 6071,
              "id": {
                "type": "Identifier",
                "start": 6042,
                "end": 6055,
                "decorators": [],
                "name": "m1_im1_public",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 6058,
                "end": 6070,
                "decorators": [],
                "name": "m2_M1_public",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6076,
            "end": 6120,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 6083,
              "end": 6120,
              "id": {
                "type": "Identifier",
                "start": 6090,
                "end": 6103,
                "decorators": [],
                "name": "m1_im2_public",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 6106,
                "end": 6119,
                "decorators": [],
                "name": "m2_M2_private",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6125,
            "end": 6179,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 6132,
              "end": 6179,
              "id": {
                "type": "Identifier",
                "start": 6139,
                "end": 6152,
                "decorators": [],
                "name": "m1_im3_public",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "start": 6155,
                "end": 6178,
                "expression": {
                  "type": "Literal",
                  "start": 6163,
                  "end": 6177,
                  "value": "m2_M3_public",
                  "raw": "\"m2_M3_public\""
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6184,
            "end": 6239,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 6191,
              "end": 6239,
              "id": {
                "type": "Identifier",
                "start": 6198,
                "end": 6211,
                "decorators": [],
                "name": "m1_im4_public",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "start": 6214,
                "end": 6238,
                "expression": {
                  "type": "Literal",
                  "start": 6222,
                  "end": 6237,
                  "value": "m2_M4_private",
                  "raw": "\"m2_M4_private\""
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 6243,
      "end": 6405,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 6250,
        "end": 6405,
        "id": {
          "type": "Identifier",
          "start": 6257,
          "end": 6270,
          "decorators": [],
          "name": "glo_M1_public",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 6271,
          "end": 6405,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 6277,
              "end": 6300,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 6284,
                "end": 6300,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 6290,
                  "end": 6292,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 6293,
                  "end": 6300,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6305,
              "end": 6356,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 6312,
                "end": 6356,
                "id": {
                  "type": "Identifier",
                  "start": 6321,
                  "end": 6323,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 6326,
                  "end": 6356,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 6336,
                      "end": 6350,
                      "argument": {
                        "type": "NewExpression",
                        "start": 6343,
                        "end": 6349,
                        "callee": {
                          "type": "Identifier",
                          "start": 6347,
                          "end": 6349,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": []
                      }
                    }
                  ]
                },
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6361,
              "end": 6380,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 6368,
                "end": 6380,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 6372,
                    "end": 6379,
                    "id": {
                      "type": "Identifier",
                      "start": 6372,
                      "end": 6374,
                      "decorators": [],
                      "name": "v1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 6377,
                      "end": 6379,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6385,
              "end": 6403,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 6392,
                "end": 6403,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 6396,
                    "end": 6402,
                    "id": {
                      "type": "Identifier",
                      "start": 6396,
                      "end": 6402,
                      "decorators": [],
                      "name": "v2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 6398,
                        "end": 6402,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 6400,
                          "end": 6402,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6400,
                            "end": 6402,
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 6407,
      "end": 6561,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 6414,
        "end": 6561,
        "id": {
          "type": "Literal",
          "start": 6429,
          "end": 6444,
          "value": "glo_M2_public",
          "raw": "\"glo_M2_public\""
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 6445,
          "end": 6561,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 6451,
              "end": 6472,
              "declaration": {
                "type": "TSDeclareFunction",
                "start": 6458,
                "end": 6472,
                "id": {
                  "type": "Identifier",
                  "start": 6467,
                  "end": 6469,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": null,
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6477,
              "end": 6500,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 6484,
                "end": 6500,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 6490,
                  "end": 6492,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 6493,
                  "end": 6500,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6505,
              "end": 6536,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 6512,
                "end": 6536,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 6516,
                    "end": 6535,
                    "id": {
                      "type": "Identifier",
                      "start": 6516,
                      "end": 6535,
                      "decorators": [],
                      "name": "v1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 6518,
                        "end": 6535,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 6520,
                          "end": 6535,
                          "members": [
                            {
                              "type": "TSConstructSignatureDeclaration",
                              "start": 6522,
                              "end": 6533,
                              "typeParameters": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 6528,
                                "end": 6532,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6530,
                                  "end": 6532,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6530,
                                    "end": 6532,
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6541,
              "end": 6559,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 6548,
                "end": 6559,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 6552,
                    "end": 6558,
                    "id": {
                      "type": "Identifier",
                      "start": 6552,
                      "end": 6558,
                      "decorators": [],
                      "name": "v2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 6554,
                        "end": 6558,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 6556,
                          "end": 6558,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6556,
                            "end": 6558,
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": true,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 6563,
      "end": 6726,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 6570,
        "end": 6726,
        "id": {
          "type": "Identifier",
          "start": 6577,
          "end": 6591,
          "decorators": [],
          "name": "glo_M3_private",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 6592,
          "end": 6726,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 6598,
              "end": 6621,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 6605,
                "end": 6621,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 6611,
                  "end": 6613,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 6614,
                  "end": 6621,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6626,
              "end": 6677,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 6633,
                "end": 6677,
                "id": {
                  "type": "Identifier",
                  "start": 6642,
                  "end": 6644,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 6647,
                  "end": 6677,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 6657,
                      "end": 6671,
                      "argument": {
                        "type": "NewExpression",
                        "start": 6664,
                        "end": 6670,
                        "callee": {
                          "type": "Identifier",
                          "start": 6668,
                          "end": 6670,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": []
                      }
                    }
                  ]
                },
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6682,
              "end": 6701,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 6689,
                "end": 6701,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 6693,
                    "end": 6700,
                    "id": {
                      "type": "Identifier",
                      "start": 6693,
                      "end": 6695,
                      "decorators": [],
                      "name": "v1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 6698,
                      "end": 6700,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6706,
              "end": 6724,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 6713,
                "end": 6724,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 6717,
                    "end": 6723,
                    "id": {
                      "type": "Identifier",
                      "start": 6717,
                      "end": 6723,
                      "decorators": [],
                      "name": "v2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 6719,
                        "end": 6723,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 6721,
                          "end": 6723,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6721,
                            "end": 6723,
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 6728,
      "end": 6883,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 6735,
        "end": 6883,
        "id": {
          "type": "Literal",
          "start": 6750,
          "end": 6766,
          "value": "glo_M4_private",
          "raw": "\"glo_M4_private\""
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 6767,
          "end": 6883,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 6773,
              "end": 6794,
              "declaration": {
                "type": "TSDeclareFunction",
                "start": 6780,
                "end": 6794,
                "id": {
                  "type": "Identifier",
                  "start": 6789,
                  "end": 6791,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": null,
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6799,
              "end": 6822,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 6806,
                "end": 6822,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 6812,
                  "end": 6814,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 6815,
                  "end": 6822,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6827,
              "end": 6858,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 6834,
                "end": 6858,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 6838,
                    "end": 6857,
                    "id": {
                      "type": "Identifier",
                      "start": 6838,
                      "end": 6857,
                      "decorators": [],
                      "name": "v1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 6840,
                        "end": 6857,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 6842,
                          "end": 6857,
                          "members": [
                            {
                              "type": "TSConstructSignatureDeclaration",
                              "start": 6844,
                              "end": 6855,
                              "typeParameters": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 6850,
                                "end": 6854,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6852,
                                  "end": 6854,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6852,
                                    "end": 6854,
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6863,
              "end": 6881,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 6870,
                "end": 6881,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 6874,
                    "end": 6880,
                    "id": {
                      "type": "Identifier",
                      "start": 6874,
                      "end": 6880,
                      "decorators": [],
                      "name": "v2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 6876,
                        "end": 6880,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 6878,
                          "end": 6880,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6878,
                            "end": 6880,
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": true,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 6886,
      "end": 6925,
      "id": {
        "type": "Identifier",
        "start": 6893,
        "end": 6908,
        "decorators": [],
        "name": "glo_im1_private",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 6911,
        "end": 6924,
        "decorators": [],
        "name": "glo_M1_public",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 6926,
      "end": 6984,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 6933,
        "end": 6984,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 6937,
            "end": 6983,
            "id": {
              "type": "Identifier",
              "start": 6937,
              "end": 6962,
              "decorators": [],
              "name": "glo_im1_private_v1_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 6965,
              "end": 6983,
              "object": {
                "type": "Identifier",
                "start": 6965,
                "end": 6980,
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6981,
                "end": 6983,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 6985,
      "end": 7049,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 6992,
        "end": 7049,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 6996,
            "end": 7048,
            "id": {
              "type": "Identifier",
              "start": 6996,
              "end": 7021,
              "decorators": [],
              "name": "glo_im1_private_v2_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 7024,
              "end": 7048,
              "callee": {
                "type": "MemberExpression",
                "start": 7028,
                "end": 7046,
                "object": {
                  "type": "Identifier",
                  "start": 7028,
                  "end": 7043,
                  "decorators": [],
                  "name": "glo_im1_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 7044,
                  "end": 7046,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": []
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 7050,
      "end": 7108,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7057,
        "end": 7108,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 7061,
            "end": 7107,
            "id": {
              "type": "Identifier",
              "start": 7061,
              "end": 7086,
              "decorators": [],
              "name": "glo_im1_private_v3_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 7089,
              "end": 7107,
              "object": {
                "type": "Identifier",
                "start": 7089,
                "end": 7104,
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7105,
                "end": 7107,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 7109,
      "end": 7169,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7116,
        "end": 7169,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 7120,
            "end": 7168,
            "id": {
              "type": "Identifier",
              "start": 7120,
              "end": 7145,
              "decorators": [],
              "name": "glo_im1_private_v4_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 7148,
              "end": 7168,
              "callee": {
                "type": "MemberExpression",
                "start": 7148,
                "end": 7166,
                "object": {
                  "type": "Identifier",
                  "start": 7148,
                  "end": 7163,
                  "decorators": [],
                  "name": "glo_im1_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 7164,
                  "end": 7166,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 7170,
      "end": 7222,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7174,
          "end": 7221,
          "id": {
            "type": "Identifier",
            "start": 7174,
            "end": 7200,
            "decorators": [],
            "name": "glo_im1_private_v1_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 7203,
            "end": 7221,
            "object": {
              "type": "Identifier",
              "start": 7203,
              "end": 7218,
              "decorators": [],
              "name": "glo_im1_private",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 7219,
              "end": 7221,
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7223,
      "end": 7281,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7227,
          "end": 7280,
          "id": {
            "type": "Identifier",
            "start": 7227,
            "end": 7253,
            "decorators": [],
            "name": "glo_im1_private_v2_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 7256,
            "end": 7280,
            "callee": {
              "type": "MemberExpression",
              "start": 7260,
              "end": 7278,
              "object": {
                "type": "Identifier",
                "start": 7260,
                "end": 7275,
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7276,
                "end": 7278,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7282,
      "end": 7334,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7286,
          "end": 7333,
          "id": {
            "type": "Identifier",
            "start": 7286,
            "end": 7312,
            "decorators": [],
            "name": "glo_im1_private_v3_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 7315,
            "end": 7333,
            "object": {
              "type": "Identifier",
              "start": 7315,
              "end": 7330,
              "decorators": [],
              "name": "glo_im1_private",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 7331,
              "end": 7333,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7335,
      "end": 7389,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7339,
          "end": 7388,
          "id": {
            "type": "Identifier",
            "start": 7339,
            "end": 7365,
            "decorators": [],
            "name": "glo_im1_private_v4_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 7368,
            "end": 7388,
            "callee": {
              "type": "MemberExpression",
              "start": 7368,
              "end": 7386,
              "object": {
                "type": "Identifier",
                "start": 7368,
                "end": 7383,
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7384,
                "end": 7386,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 7392,
      "end": 7442,
      "id": {
        "type": "Identifier",
        "start": 7399,
        "end": 7414,
        "decorators": [],
        "name": "glo_im2_private",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 7417,
        "end": 7441,
        "expression": {
          "type": "Literal",
          "start": 7425,
          "end": 7440,
          "value": "glo_M2_public",
          "raw": "\"glo_M2_public\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 7443,
      "end": 7501,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7450,
        "end": 7501,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 7454,
            "end": 7500,
            "id": {
              "type": "Identifier",
              "start": 7454,
              "end": 7479,
              "decorators": [],
              "name": "glo_im2_private_v1_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 7482,
              "end": 7500,
              "object": {
                "type": "Identifier",
                "start": 7482,
                "end": 7497,
                "decorators": [],
                "name": "glo_im2_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7498,
                "end": 7500,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 7502,
      "end": 7566,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7509,
        "end": 7566,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 7513,
            "end": 7565,
            "id": {
              "type": "Identifier",
              "start": 7513,
              "end": 7538,
              "decorators": [],
              "name": "glo_im2_private_v2_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 7541,
              "end": 7565,
              "callee": {
                "type": "MemberExpression",
                "start": 7545,
                "end": 7563,
                "object": {
                  "type": "Identifier",
                  "start": 7545,
                  "end": 7560,
                  "decorators": [],
                  "name": "glo_im2_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 7561,
                  "end": 7563,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": []
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 7567,
      "end": 7625,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7574,
        "end": 7625,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 7578,
            "end": 7624,
            "id": {
              "type": "Identifier",
              "start": 7578,
              "end": 7603,
              "decorators": [],
              "name": "glo_im2_private_v3_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 7606,
              "end": 7624,
              "object": {
                "type": "Identifier",
                "start": 7606,
                "end": 7621,
                "decorators": [],
                "name": "glo_im2_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7622,
                "end": 7624,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 7626,
      "end": 7686,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7633,
        "end": 7686,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 7637,
            "end": 7685,
            "id": {
              "type": "Identifier",
              "start": 7637,
              "end": 7662,
              "decorators": [],
              "name": "glo_im2_private_v4_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 7665,
              "end": 7685,
              "callee": {
                "type": "MemberExpression",
                "start": 7665,
                "end": 7683,
                "object": {
                  "type": "Identifier",
                  "start": 7665,
                  "end": 7680,
                  "decorators": [],
                  "name": "glo_im2_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 7681,
                  "end": 7683,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 7687,
      "end": 7739,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7691,
          "end": 7738,
          "id": {
            "type": "Identifier",
            "start": 7691,
            "end": 7717,
            "decorators": [],
            "name": "glo_im2_private_v1_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 7720,
            "end": 7738,
            "object": {
              "type": "Identifier",
              "start": 7720,
              "end": 7735,
              "decorators": [],
              "name": "glo_im2_private",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 7736,
              "end": 7738,
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7740,
      "end": 7798,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7744,
          "end": 7797,
          "id": {
            "type": "Identifier",
            "start": 7744,
            "end": 7770,
            "decorators": [],
            "name": "glo_im2_private_v2_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 7773,
            "end": 7797,
            "callee": {
              "type": "MemberExpression",
              "start": 7777,
              "end": 7795,
              "object": {
                "type": "Identifier",
                "start": 7777,
                "end": 7792,
                "decorators": [],
                "name": "glo_im2_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7793,
                "end": 7795,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7799,
      "end": 7851,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7803,
          "end": 7850,
          "id": {
            "type": "Identifier",
            "start": 7803,
            "end": 7829,
            "decorators": [],
            "name": "glo_im2_private_v3_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 7832,
            "end": 7850,
            "object": {
              "type": "Identifier",
              "start": 7832,
              "end": 7847,
              "decorators": [],
              "name": "glo_im2_private",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 7848,
              "end": 7850,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7852,
      "end": 7906,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7856,
          "end": 7905,
          "id": {
            "type": "Identifier",
            "start": 7856,
            "end": 7882,
            "decorators": [],
            "name": "glo_im2_private_v4_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 7885,
            "end": 7905,
            "callee": {
              "type": "MemberExpression",
              "start": 7885,
              "end": 7903,
              "object": {
                "type": "Identifier",
                "start": 7885,
                "end": 7900,
                "decorators": [],
                "name": "glo_im2_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7901,
                "end": 7903,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 7908,
      "end": 7948,
      "id": {
        "type": "Identifier",
        "start": 7915,
        "end": 7930,
        "decorators": [],
        "name": "glo_im3_private",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 7933,
        "end": 7947,
        "decorators": [],
        "name": "glo_M3_private",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 7949,
      "end": 8007,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7956,
        "end": 8007,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 7960,
            "end": 8006,
            "id": {
              "type": "Identifier",
              "start": 7960,
              "end": 7985,
              "decorators": [],
              "name": "glo_im3_private_v1_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 7988,
              "end": 8006,
              "object": {
                "type": "Identifier",
                "start": 7988,
                "end": 8003,
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8004,
                "end": 8006,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8008,
      "end": 8072,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 8015,
        "end": 8072,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 8019,
            "end": 8071,
            "id": {
              "type": "Identifier",
              "start": 8019,
              "end": 8044,
              "decorators": [],
              "name": "glo_im3_private_v2_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 8047,
              "end": 8071,
              "callee": {
                "type": "MemberExpression",
                "start": 8051,
                "end": 8069,
                "object": {
                  "type": "Identifier",
                  "start": 8051,
                  "end": 8066,
                  "decorators": [],
                  "name": "glo_im3_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 8067,
                  "end": 8069,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": []
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8073,
      "end": 8131,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 8080,
        "end": 8131,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 8084,
            "end": 8130,
            "id": {
              "type": "Identifier",
              "start": 8084,
              "end": 8109,
              "decorators": [],
              "name": "glo_im3_private_v3_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 8112,
              "end": 8130,
              "object": {
                "type": "Identifier",
                "start": 8112,
                "end": 8127,
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8128,
                "end": 8130,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8132,
      "end": 8192,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 8139,
        "end": 8192,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 8143,
            "end": 8191,
            "id": {
              "type": "Identifier",
              "start": 8143,
              "end": 8168,
              "decorators": [],
              "name": "glo_im3_private_v4_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 8171,
              "end": 8191,
              "callee": {
                "type": "MemberExpression",
                "start": 8171,
                "end": 8189,
                "object": {
                  "type": "Identifier",
                  "start": 8171,
                  "end": 8186,
                  "decorators": [],
                  "name": "glo_im3_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 8187,
                  "end": 8189,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 8193,
      "end": 8245,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8197,
          "end": 8244,
          "id": {
            "type": "Identifier",
            "start": 8197,
            "end": 8223,
            "decorators": [],
            "name": "glo_im3_private_v1_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 8226,
            "end": 8244,
            "object": {
              "type": "Identifier",
              "start": 8226,
              "end": 8241,
              "decorators": [],
              "name": "glo_im3_private",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 8242,
              "end": 8244,
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 8246,
      "end": 8304,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8250,
          "end": 8303,
          "id": {
            "type": "Identifier",
            "start": 8250,
            "end": 8276,
            "decorators": [],
            "name": "glo_im3_private_v2_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 8279,
            "end": 8303,
            "callee": {
              "type": "MemberExpression",
              "start": 8283,
              "end": 8301,
              "object": {
                "type": "Identifier",
                "start": 8283,
                "end": 8298,
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8299,
                "end": 8301,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 8305,
      "end": 8357,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8309,
          "end": 8356,
          "id": {
            "type": "Identifier",
            "start": 8309,
            "end": 8335,
            "decorators": [],
            "name": "glo_im3_private_v3_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 8338,
            "end": 8356,
            "object": {
              "type": "Identifier",
              "start": 8338,
              "end": 8353,
              "decorators": [],
              "name": "glo_im3_private",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 8354,
              "end": 8356,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 8358,
      "end": 8412,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8362,
          "end": 8411,
          "id": {
            "type": "Identifier",
            "start": 8362,
            "end": 8388,
            "decorators": [],
            "name": "glo_im3_private_v4_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8391,
            "end": 8411,
            "callee": {
              "type": "MemberExpression",
              "start": 8391,
              "end": 8409,
              "object": {
                "type": "Identifier",
                "start": 8391,
                "end": 8406,
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8407,
                "end": 8409,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 8414,
      "end": 8465,
      "id": {
        "type": "Identifier",
        "start": 8421,
        "end": 8436,
        "decorators": [],
        "name": "glo_im4_private",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 8439,
        "end": 8464,
        "expression": {
          "type": "Literal",
          "start": 8447,
          "end": 8463,
          "value": "glo_M4_private",
          "raw": "\"glo_M4_private\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8466,
      "end": 8524,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 8473,
        "end": 8524,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 8477,
            "end": 8523,
            "id": {
              "type": "Identifier",
              "start": 8477,
              "end": 8502,
              "decorators": [],
              "name": "glo_im4_private_v1_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 8505,
              "end": 8523,
              "object": {
                "type": "Identifier",
                "start": 8505,
                "end": 8520,
                "decorators": [],
                "name": "glo_im4_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8521,
                "end": 8523,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8525,
      "end": 8589,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 8532,
        "end": 8589,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 8536,
            "end": 8588,
            "id": {
              "type": "Identifier",
              "start": 8536,
              "end": 8561,
              "decorators": [],
              "name": "glo_im4_private_v2_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 8564,
              "end": 8588,
              "callee": {
                "type": "MemberExpression",
                "start": 8568,
                "end": 8586,
                "object": {
                  "type": "Identifier",
                  "start": 8568,
                  "end": 8583,
                  "decorators": [],
                  "name": "glo_im4_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 8584,
                  "end": 8586,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": []
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8590,
      "end": 8648,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 8597,
        "end": 8648,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 8601,
            "end": 8647,
            "id": {
              "type": "Identifier",
              "start": 8601,
              "end": 8626,
              "decorators": [],
              "name": "glo_im4_private_v3_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 8629,
              "end": 8647,
              "object": {
                "type": "Identifier",
                "start": 8629,
                "end": 8644,
                "decorators": [],
                "name": "glo_im4_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8645,
                "end": 8647,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8649,
      "end": 8709,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 8656,
        "end": 8709,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 8660,
            "end": 8708,
            "id": {
              "type": "Identifier",
              "start": 8660,
              "end": 8685,
              "decorators": [],
              "name": "glo_im4_private_v4_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 8688,
              "end": 8708,
              "callee": {
                "type": "MemberExpression",
                "start": 8688,
                "end": 8706,
                "object": {
                  "type": "Identifier",
                  "start": 8688,
                  "end": 8703,
                  "decorators": [],
                  "name": "glo_im4_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 8704,
                  "end": 8706,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 8710,
      "end": 8762,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8714,
          "end": 8761,
          "id": {
            "type": "Identifier",
            "start": 8714,
            "end": 8740,
            "decorators": [],
            "name": "glo_im4_private_v1_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 8743,
            "end": 8761,
            "object": {
              "type": "Identifier",
              "start": 8743,
              "end": 8758,
              "decorators": [],
              "name": "glo_im4_private",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 8759,
              "end": 8761,
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 8763,
      "end": 8821,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8767,
          "end": 8820,
          "id": {
            "type": "Identifier",
            "start": 8767,
            "end": 8793,
            "decorators": [],
            "name": "glo_im4_private_v2_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 8796,
            "end": 8820,
            "callee": {
              "type": "MemberExpression",
              "start": 8800,
              "end": 8818,
              "object": {
                "type": "Identifier",
                "start": 8800,
                "end": 8815,
                "decorators": [],
                "name": "glo_im4_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8816,
                "end": 8818,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 8822,
      "end": 8874,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8826,
          "end": 8873,
          "id": {
            "type": "Identifier",
            "start": 8826,
            "end": 8852,
            "decorators": [],
            "name": "glo_im4_private_v3_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 8855,
            "end": 8873,
            "object": {
              "type": "Identifier",
              "start": 8855,
              "end": 8870,
              "decorators": [],
              "name": "glo_im4_private",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 8871,
              "end": 8873,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 8875,
      "end": 8929,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8879,
          "end": 8928,
          "id": {
            "type": "Identifier",
            "start": 8879,
            "end": 8905,
            "decorators": [],
            "name": "glo_im4_private_v4_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8908,
            "end": 8928,
            "callee": {
              "type": "MemberExpression",
              "start": 8908,
              "end": 8926,
              "object": {
                "type": "Identifier",
                "start": 8908,
                "end": 8923,
                "decorators": [],
                "name": "glo_im4_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8924,
                "end": 8926,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8963,
      "end": 9008,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 8970,
        "end": 9008,
        "id": {
          "type": "Identifier",
          "start": 8977,
          "end": 8991,
          "decorators": [],
          "name": "glo_im1_public",
          "optional": false,
          "typeAnnotation": null
        },
        "moduleReference": {
          "type": "Identifier",
          "start": 8994,
          "end": 9007,
          "decorators": [],
          "name": "glo_M1_public",
          "optional": false,
          "typeAnnotation": null
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 9009,
      "end": 9055,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 9016,
        "end": 9055,
        "id": {
          "type": "Identifier",
          "start": 9023,
          "end": 9037,
          "decorators": [],
          "name": "glo_im2_public",
          "optional": false,
          "typeAnnotation": null
        },
        "moduleReference": {
          "type": "Identifier",
          "start": 9040,
          "end": 9054,
          "decorators": [],
          "name": "glo_M3_private",
          "optional": false,
          "typeAnnotation": null
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 9056,
      "end": 9112,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 9063,
        "end": 9112,
        "id": {
          "type": "Identifier",
          "start": 9070,
          "end": 9084,
          "decorators": [],
          "name": "glo_im3_public",
          "optional": false,
          "typeAnnotation": null
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 9087,
          "end": 9111,
          "expression": {
            "type": "Literal",
            "start": 9095,
            "end": 9110,
            "value": "glo_M2_public",
            "raw": "\"glo_M2_public\""
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 9113,
      "end": 9170,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 9120,
        "end": 9170,
        "id": {
          "type": "Identifier",
          "start": 9127,
          "end": 9141,
          "decorators": [],
          "name": "glo_im4_public",
          "optional": false,
          "typeAnnotation": null
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 9144,
          "end": 9169,
          "expression": {
            "type": "Literal",
            "start": 9152,
            "end": 9168,
            "value": "glo_M4_private",
            "raw": "\"glo_M4_private\""
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 9173,
      "end": 10414,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 9180,
        "end": 10414,
        "id": {
          "type": "Literal",
          "start": 9195,
          "end": 9214,
          "value": "use_glo_M1_public",
          "raw": "\"use_glo_M1_public\""
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 9215,
          "end": 10414,
          "body": [
            {
              "type": "TSImportEqualsDeclaration",
              "start": 9221,
              "end": 9262,
              "id": {
                "type": "Identifier",
                "start": 9228,
                "end": 9245,
                "decorators": [],
                "name": "use_glo_M1_public",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 9248,
                "end": 9261,
                "decorators": [],
                "name": "glo_M1_public",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 9267,
              "end": 9341,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 9274,
                "end": 9341,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 9278,
                    "end": 9340,
                    "id": {
                      "type": "Identifier",
                      "start": 9278,
                      "end": 9340,
                      "decorators": [],
                      "name": "use_glo_M1_public_v1_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 9305,
                        "end": 9340,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 9307,
                          "end": 9340,
                          "members": [
                            {
                              "type": "TSConstructSignatureDeclaration",
                              "start": 9309,
                              "end": 9338,
                              "typeParameters": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 9315,
                                "end": 9337,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 9317,
                                  "end": 9337,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 9317,
                                    "end": 9337,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 9317,
                                      "end": 9334,
                                      "decorators": [],
                                      "name": "use_glo_M1_public",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 9335,
                                      "end": 9337,
                                      "decorators": [],
                                      "name": "c1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 9346,
              "end": 9404,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 9353,
                "end": 9404,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 9357,
                    "end": 9403,
                    "id": {
                      "type": "Identifier",
                      "start": 9357,
                      "end": 9403,
                      "decorators": [],
                      "name": "use_glo_M1_public_v2_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 9384,
                        "end": 9403,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 9386,
                          "end": 9403,
                          "typeName": {
                            "type": "Identifier",
                            "start": 9386,
                            "end": 9403,
                            "decorators": [],
                            "name": "use_glo_M1_public",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 9409,
              "end": 9476,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 9416,
                "end": 9476,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 9420,
                    "end": 9475,
                    "id": {
                      "type": "Identifier",
                      "start": 9420,
                      "end": 9475,
                      "decorators": [],
                      "name": "use_glo_M1_public_v3_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 9447,
                        "end": 9475,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 9449,
                          "end": 9475,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 9452,
                            "end": 9475,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9455,
                              "end": 9475,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 9455,
                                "end": 9475,
                                "left": {
                                  "type": "Identifier",
                                  "start": 9455,
                                  "end": 9472,
                                  "decorators": [],
                                  "name": "use_glo_M1_public",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 9473,
                                  "end": 9475,
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 9481,
              "end": 9549,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 9485,
                  "end": 9548,
                  "id": {
                    "type": "Identifier",
                    "start": 9485,
                    "end": 9548,
                    "decorators": [],
                    "name": "use_glo_M1_public_v1_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 9513,
                      "end": 9548,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 9515,
                        "end": 9548,
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "start": 9517,
                            "end": 9546,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 9523,
                              "end": 9545,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 9525,
                                "end": 9545,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 9525,
                                  "end": 9545,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 9525,
                                    "end": 9542,
                                    "decorators": [],
                                    "name": "use_glo_M1_public",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 9543,
                                    "end": 9545,
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 9554,
              "end": 9606,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 9558,
                  "end": 9605,
                  "id": {
                    "type": "Identifier",
                    "start": 9558,
                    "end": 9605,
                    "decorators": [],
                    "name": "use_glo_M1_public_v2_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 9586,
                      "end": 9605,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 9588,
                        "end": 9605,
                        "typeName": {
                          "type": "Identifier",
                          "start": 9588,
                          "end": 9605,
                          "decorators": [],
                          "name": "use_glo_M1_public",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 9611,
              "end": 9672,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 9615,
                  "end": 9671,
                  "id": {
                    "type": "Identifier",
                    "start": 9615,
                    "end": 9671,
                    "decorators": [],
                    "name": "use_glo_M1_public_v3_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 9643,
                      "end": 9671,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 9645,
                        "end": 9671,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 9648,
                          "end": 9671,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 9651,
                            "end": 9671,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 9651,
                              "end": 9671,
                              "left": {
                                "type": "Identifier",
                                "start": 9651,
                                "end": 9668,
                                "decorators": [],
                                "name": "use_glo_M1_public",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 9669,
                                "end": 9671,
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 9678,
              "end": 9730,
              "id": {
                "type": "Identifier",
                "start": 9685,
                "end": 9702,
                "decorators": [],
                "name": "use_glo_M2_public",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "start": 9705,
                "end": 9729,
                "expression": {
                  "type": "Literal",
                  "start": 9713,
                  "end": 9728,
                  "value": "glo_M2_public",
                  "raw": "\"glo_M2_public\""
                }
              },
              "importKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 9735,
              "end": 9809,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 9742,
                "end": 9809,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 9746,
                    "end": 9808,
                    "id": {
                      "type": "Identifier",
                      "start": 9746,
                      "end": 9808,
                      "decorators": [],
                      "name": "use_glo_M2_public_v1_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 9773,
                        "end": 9808,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 9775,
                          "end": 9808,
                          "members": [
                            {
                              "type": "TSConstructSignatureDeclaration",
                              "start": 9777,
                              "end": 9806,
                              "typeParameters": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 9783,
                                "end": 9805,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 9785,
                                  "end": 9805,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 9785,
                                    "end": 9805,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 9785,
                                      "end": 9802,
                                      "decorators": [],
                                      "name": "use_glo_M2_public",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 9803,
                                      "end": 9805,
                                      "decorators": [],
                                      "name": "c1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 9814,
              "end": 9872,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 9821,
                "end": 9872,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 9825,
                    "end": 9871,
                    "id": {
                      "type": "Identifier",
                      "start": 9825,
                      "end": 9871,
                      "decorators": [],
                      "name": "use_glo_M2_public_v2_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 9852,
                        "end": 9871,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 9854,
                          "end": 9871,
                          "typeName": {
                            "type": "Identifier",
                            "start": 9854,
                            "end": 9871,
                            "decorators": [],
                            "name": "use_glo_M2_public",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 9877,
              "end": 9944,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 9884,
                "end": 9944,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 9888,
                    "end": 9943,
                    "id": {
                      "type": "Identifier",
                      "start": 9888,
                      "end": 9943,
                      "decorators": [],
                      "name": "use_glo_M2_public_v3_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 9915,
                        "end": 9943,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 9917,
                          "end": 9943,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 9920,
                            "end": 9943,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9923,
                              "end": 9943,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 9923,
                                "end": 9943,
                                "left": {
                                  "type": "Identifier",
                                  "start": 9923,
                                  "end": 9940,
                                  "decorators": [],
                                  "name": "use_glo_M2_public",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 9941,
                                  "end": 9943,
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 9949,
              "end": 10017,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 9953,
                  "end": 10016,
                  "id": {
                    "type": "Identifier",
                    "start": 9953,
                    "end": 10016,
                    "decorators": [],
                    "name": "use_glo_M2_public_v1_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 9981,
                      "end": 10016,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 9983,
                        "end": 10016,
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "start": 9985,
                            "end": 10014,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 9991,
                              "end": 10013,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 9993,
                                "end": 10013,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 9993,
                                  "end": 10013,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 9993,
                                    "end": 10010,
                                    "decorators": [],
                                    "name": "use_glo_M2_public",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 10011,
                                    "end": 10013,
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 10022,
              "end": 10074,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 10026,
                  "end": 10073,
                  "id": {
                    "type": "Identifier",
                    "start": 10026,
                    "end": 10073,
                    "decorators": [],
                    "name": "use_glo_M2_public_v2_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10054,
                      "end": 10073,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10056,
                        "end": 10073,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10056,
                          "end": 10073,
                          "decorators": [],
                          "name": "use_glo_M2_public",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 10079,
              "end": 10140,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 10083,
                  "end": 10139,
                  "id": {
                    "type": "Identifier",
                    "start": 10083,
                    "end": 10139,
                    "decorators": [],
                    "name": "use_glo_M2_public_v3_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10111,
                      "end": 10139,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 10113,
                        "end": 10139,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 10116,
                          "end": 10139,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 10119,
                            "end": 10139,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 10119,
                              "end": 10139,
                              "left": {
                                "type": "Identifier",
                                "start": 10119,
                                "end": 10136,
                                "decorators": [],
                                "name": "use_glo_M2_public",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 10137,
                                "end": 10139,
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "TSModuleDeclaration",
              "start": 10146,
              "end": 10412,
              "id": {
                "type": "Identifier",
                "start": 10153,
                "end": 10155,
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 10156,
                "end": 10412,
                "body": [
                  {
                    "type": "TSImportEqualsDeclaration",
                    "start": 10166,
                    "end": 10212,
                    "id": {
                      "type": "Identifier",
                      "start": 10173,
                      "end": 10184,
                      "decorators": [],
                      "name": "errorImport",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "moduleReference": {
                      "type": "TSExternalModuleReference",
                      "start": 10187,
                      "end": 10211,
                      "expression": {
                        "type": "Literal",
                        "start": 10195,
                        "end": 10210,
                        "value": "glo_M2_public",
                        "raw": "\"glo_M2_public\""
                      }
                    },
                    "importKind": "value"
                  },
                  {
                    "type": "TSImportEqualsDeclaration",
                    "start": 10221,
                    "end": 10259,
                    "id": {
                      "type": "Identifier",
                      "start": 10228,
                      "end": 10242,
                      "decorators": [],
                      "name": "nonerrorImport",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "moduleReference": {
                      "type": "Identifier",
                      "start": 10245,
                      "end": 10258,
                      "decorators": [],
                      "name": "glo_M1_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "importKind": "value"
                  },
                  {
                    "type": "TSModuleDeclaration",
                    "start": 10269,
                    "end": 10406,
                    "id": {
                      "type": "Identifier",
                      "start": 10276,
                      "end": 10278,
                      "decorators": [],
                      "name": "m5",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "body": {
                      "type": "TSModuleBlock",
                      "start": 10279,
                      "end": 10406,
                      "body": [
                        {
                          "type": "TSImportEqualsDeclaration",
                          "start": 10293,
                          "end": 10342,
                          "id": {
                            "type": "Identifier",
                            "start": 10300,
                            "end": 10314,
                            "decorators": [],
                            "name": "m5_errorImport",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "moduleReference": {
                            "type": "TSExternalModuleReference",
                            "start": 10317,
                            "end": 10341,
                            "expression": {
                              "type": "Literal",
                              "start": 10325,
                              "end": 10340,
                              "value": "glo_M2_public",
                              "raw": "\"glo_M2_public\""
                            }
                          },
                          "importKind": "value"
                        },
                        {
                          "type": "TSImportEqualsDeclaration",
                          "start": 10355,
                          "end": 10396,
                          "id": {
                            "type": "Identifier",
                            "start": 10362,
                            "end": 10379,
                            "decorators": [],
                            "name": "m5_nonerrorImport",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "moduleReference": {
                            "type": "Identifier",
                            "start": 10382,
                            "end": 10395,
                            "decorators": [],
                            "name": "glo_M1_public",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "importKind": "value"
                        }
                      ]
                    },
                    "kind": "module",
                    "declare": false,
                    "global": false
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            }
          ]
        },
        "kind": "module",
        "declare": true,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 10417,
      "end": 11684,
      "id": {
        "type": "Literal",
        "start": 10432,
        "end": 10452,
        "value": "use_glo_M3_private",
        "raw": "\"use_glo_M3_private\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10453,
        "end": 11684,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 10459,
            "end": 10502,
            "id": {
              "type": "Identifier",
              "start": 10466,
              "end": 10484,
              "decorators": [],
              "name": "use_glo_M3_private",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 10487,
              "end": 10501,
              "decorators": [],
              "name": "glo_M3_private",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 10507,
            "end": 10583,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 10514,
              "end": 10583,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 10518,
                  "end": 10582,
                  "id": {
                    "type": "Identifier",
                    "start": 10518,
                    "end": 10582,
                    "decorators": [],
                    "name": "use_glo_M3_private_v1_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10546,
                      "end": 10582,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 10548,
                        "end": 10582,
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "start": 10550,
                            "end": 10580,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 10556,
                              "end": 10579,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 10558,
                                "end": 10579,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 10558,
                                  "end": 10579,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 10558,
                                    "end": 10576,
                                    "decorators": [],
                                    "name": "use_glo_M3_private",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 10577,
                                    "end": 10579,
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 10588,
            "end": 10648,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 10595,
              "end": 10648,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 10599,
                  "end": 10647,
                  "id": {
                    "type": "Identifier",
                    "start": 10599,
                    "end": 10647,
                    "decorators": [],
                    "name": "use_glo_M3_private_v2_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10627,
                      "end": 10647,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10629,
                        "end": 10647,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10629,
                          "end": 10647,
                          "decorators": [],
                          "name": "use_glo_M3_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 10653,
            "end": 10722,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 10660,
              "end": 10722,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 10664,
                  "end": 10721,
                  "id": {
                    "type": "Identifier",
                    "start": 10664,
                    "end": 10721,
                    "decorators": [],
                    "name": "use_glo_M3_private_v3_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10692,
                      "end": 10721,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 10694,
                        "end": 10721,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 10697,
                          "end": 10721,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 10700,
                            "end": 10721,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 10700,
                              "end": 10721,
                              "left": {
                                "type": "Identifier",
                                "start": 10700,
                                "end": 10718,
                                "decorators": [],
                                "name": "use_glo_M3_private",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 10719,
                                "end": 10721,
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 10727,
            "end": 10797,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 10731,
                "end": 10796,
                "id": {
                  "type": "Identifier",
                  "start": 10731,
                  "end": 10796,
                  "decorators": [],
                  "name": "use_glo_M3_private_v1_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 10760,
                    "end": 10796,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 10762,
                      "end": 10796,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 10764,
                          "end": 10794,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 10770,
                            "end": 10793,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 10772,
                              "end": 10793,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 10772,
                                "end": 10793,
                                "left": {
                                  "type": "Identifier",
                                  "start": 10772,
                                  "end": 10790,
                                  "decorators": [],
                                  "name": "use_glo_M3_private",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 10791,
                                  "end": 10793,
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 10802,
            "end": 10856,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 10806,
                "end": 10855,
                "id": {
                  "type": "Identifier",
                  "start": 10806,
                  "end": 10855,
                  "decorators": [],
                  "name": "use_glo_M3_private_v2_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 10835,
                    "end": 10855,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 10837,
                      "end": 10855,
                      "typeName": {
                        "type": "Identifier",
                        "start": 10837,
                        "end": 10855,
                        "decorators": [],
                        "name": "use_glo_M3_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 10861,
            "end": 10924,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 10865,
                "end": 10923,
                "id": {
                  "type": "Identifier",
                  "start": 10865,
                  "end": 10923,
                  "decorators": [],
                  "name": "use_glo_M3_private_v3_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 10894,
                    "end": 10923,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 10896,
                      "end": 10923,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 10899,
                        "end": 10923,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 10902,
                          "end": 10923,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 10902,
                            "end": 10923,
                            "left": {
                              "type": "Identifier",
                              "start": 10902,
                              "end": 10920,
                              "decorators": [],
                              "name": "use_glo_M3_private",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 10921,
                              "end": 10923,
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 10930,
            "end": 10984,
            "id": {
              "type": "Identifier",
              "start": 10937,
              "end": 10955,
              "decorators": [],
              "name": "use_glo_M4_private",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 10958,
              "end": 10983,
              "expression": {
                "type": "Literal",
                "start": 10966,
                "end": 10982,
                "value": "glo_M4_private",
                "raw": "\"glo_M4_private\""
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 10989,
            "end": 11065,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 10996,
              "end": 11065,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 11000,
                  "end": 11064,
                  "id": {
                    "type": "Identifier",
                    "start": 11000,
                    "end": 11064,
                    "decorators": [],
                    "name": "use_glo_M4_private_v1_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 11028,
                      "end": 11064,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 11030,
                        "end": 11064,
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "start": 11032,
                            "end": 11062,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 11038,
                              "end": 11061,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 11040,
                                "end": 11061,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 11040,
                                  "end": 11061,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 11040,
                                    "end": 11058,
                                    "decorators": [],
                                    "name": "use_glo_M4_private",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 11059,
                                    "end": 11061,
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 11070,
            "end": 11130,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 11077,
              "end": 11130,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 11081,
                  "end": 11129,
                  "id": {
                    "type": "Identifier",
                    "start": 11081,
                    "end": 11129,
                    "decorators": [],
                    "name": "use_glo_M4_private_v2_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 11109,
                      "end": 11129,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 11111,
                        "end": 11129,
                        "typeName": {
                          "type": "Identifier",
                          "start": 11111,
                          "end": 11129,
                          "decorators": [],
                          "name": "use_glo_M4_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 11135,
            "end": 11204,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 11142,
              "end": 11204,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 11146,
                  "end": 11203,
                  "id": {
                    "type": "Identifier",
                    "start": 11146,
                    "end": 11203,
                    "decorators": [],
                    "name": "use_glo_M4_private_v3_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 11174,
                      "end": 11203,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 11176,
                        "end": 11203,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 11179,
                          "end": 11203,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 11182,
                            "end": 11203,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 11182,
                              "end": 11203,
                              "left": {
                                "type": "Identifier",
                                "start": 11182,
                                "end": 11200,
                                "decorators": [],
                                "name": "use_glo_M4_private",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 11201,
                                "end": 11203,
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 11209,
            "end": 11279,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 11213,
                "end": 11278,
                "id": {
                  "type": "Identifier",
                  "start": 11213,
                  "end": 11278,
                  "decorators": [],
                  "name": "use_glo_M4_private_v1_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 11242,
                    "end": 11278,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 11244,
                      "end": 11278,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 11246,
                          "end": 11276,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 11252,
                            "end": 11275,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11254,
                              "end": 11275,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 11254,
                                "end": 11275,
                                "left": {
                                  "type": "Identifier",
                                  "start": 11254,
                                  "end": 11272,
                                  "decorators": [],
                                  "name": "use_glo_M4_private",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 11273,
                                  "end": 11275,
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 11284,
            "end": 11338,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 11288,
                "end": 11337,
                "id": {
                  "type": "Identifier",
                  "start": 11288,
                  "end": 11337,
                  "decorators": [],
                  "name": "use_glo_M4_private_v2_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 11317,
                    "end": 11337,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 11319,
                      "end": 11337,
                      "typeName": {
                        "type": "Identifier",
                        "start": 11319,
                        "end": 11337,
                        "decorators": [],
                        "name": "use_glo_M4_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 11343,
            "end": 11406,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 11347,
                "end": 11405,
                "id": {
                  "type": "Identifier",
                  "start": 11347,
                  "end": 11405,
                  "decorators": [],
                  "name": "use_glo_M4_private_v3_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 11376,
                    "end": 11405,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 11378,
                      "end": 11405,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 11381,
                        "end": 11405,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 11384,
                          "end": 11405,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 11384,
                            "end": 11405,
                            "left": {
                              "type": "Identifier",
                              "start": 11384,
                              "end": 11402,
                              "decorators": [],
                              "name": "use_glo_M4_private",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 11403,
                              "end": 11405,
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 11412,
            "end": 11682,
            "id": {
              "type": "Identifier",
              "start": 11419,
              "end": 11421,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 11422,
              "end": 11682,
              "body": [
                {
                  "type": "TSImportEqualsDeclaration",
                  "start": 11432,
                  "end": 11479,
                  "id": {
                    "type": "Identifier",
                    "start": 11439,
                    "end": 11450,
                    "decorators": [],
                    "name": "errorImport",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "moduleReference": {
                    "type": "TSExternalModuleReference",
                    "start": 11453,
                    "end": 11478,
                    "expression": {
                      "type": "Literal",
                      "start": 11461,
                      "end": 11477,
                      "value": "glo_M4_private",
                      "raw": "\"glo_M4_private\""
                    }
                  },
                  "importKind": "value"
                },
                {
                  "type": "TSImportEqualsDeclaration",
                  "start": 11488,
                  "end": 11527,
                  "id": {
                    "type": "Identifier",
                    "start": 11495,
                    "end": 11509,
                    "decorators": [],
                    "name": "nonerrorImport",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "moduleReference": {
                    "type": "Identifier",
                    "start": 11512,
                    "end": 11526,
                    "decorators": [],
                    "name": "glo_M3_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "importKind": "value"
                },
                {
                  "type": "TSModuleDeclaration",
                  "start": 11537,
                  "end": 11676,
                  "id": {
                    "type": "Identifier",
                    "start": 11544,
                    "end": 11546,
                    "decorators": [],
                    "name": "m5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "start": 11547,
                    "end": 11676,
                    "body": [
                      {
                        "type": "TSImportEqualsDeclaration",
                        "start": 11561,
                        "end": 11611,
                        "id": {
                          "type": "Identifier",
                          "start": 11568,
                          "end": 11582,
                          "decorators": [],
                          "name": "m5_errorImport",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "moduleReference": {
                          "type": "TSExternalModuleReference",
                          "start": 11585,
                          "end": 11610,
                          "expression": {
                            "type": "Literal",
                            "start": 11593,
                            "end": 11609,
                            "value": "glo_M4_private",
                            "raw": "\"glo_M4_private\""
                          }
                        },
                        "importKind": "value"
                      },
                      {
                        "type": "TSImportEqualsDeclaration",
                        "start": 11624,
                        "end": 11666,
                        "id": {
                          "type": "Identifier",
                          "start": 11631,
                          "end": 11648,
                          "decorators": [],
                          "name": "m5_nonerrorImport",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "moduleReference": {
                          "type": "Identifier",
                          "start": 11651,
                          "end": 11665,
                          "decorators": [],
                          "name": "glo_M3_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "importKind": "value"
                      }
                    ]
                  },
                  "kind": "module",
                  "declare": false,
                  "global": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11686,
      "end": 11870,
      "id": {
        "type": "Literal",
        "start": 11701,
        "end": 11720,
        "value": "anotherParseError",
        "raw": "\"anotherParseError\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11721,
        "end": 11870,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 11727,
            "end": 11785,
            "id": {
              "type": "Identifier",
              "start": 11734,
              "end": 11736,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 11737,
              "end": 11785,
              "body": [
                {
                  "type": "TSModuleDeclaration",
                  "start": 11747,
                  "end": 11779,
                  "id": {
                    "type": "Literal",
                    "start": 11762,
                    "end": 11767,
                    "value": "abc",
                    "raw": "\"abc\""
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "start": 11768,
                    "end": 11779,
                    "body": []
                  },
                  "kind": "module",
                  "declare": true,
                  "global": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 11791,
            "end": 11842,
            "id": {
              "type": "Identifier",
              "start": 11798,
              "end": 11800,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 11801,
              "end": 11842,
              "body": [
                {
                  "type": "TSModuleDeclaration",
                  "start": 11811,
                  "end": 11836,
                  "id": {
                    "type": "Literal",
                    "start": 11818,
                    "end": 11824,
                    "value": "abc2",
                    "raw": "\"abc2\""
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "start": 11825,
                    "end": 11836,
                    "body": []
                  },
                  "kind": "module",
                  "declare": false,
                  "global": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 11847,
            "end": 11868,
            "id": {
              "type": "Literal",
              "start": 11854,
              "end": 11860,
              "value": "abc3",
              "raw": "\"abc3\""
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 11861,
              "end": 11868,
              "body": []
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11872,
      "end": 12064,
      "id": {
        "type": "Literal",
        "start": 11894,
        "end": 11914,
        "value": "anotherParseError2",
        "raw": "\"anotherParseError2\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11915,
        "end": 12064,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 11921,
            "end": 11979,
            "id": {
              "type": "Identifier",
              "start": 11928,
              "end": 11930,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 11931,
              "end": 11979,
              "body": [
                {
                  "type": "TSModuleDeclaration",
                  "start": 11941,
                  "end": 11973,
                  "id": {
                    "type": "Literal",
                    "start": 11956,
                    "end": 11961,
                    "value": "abc",
                    "raw": "\"abc\""
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "start": 11962,
                    "end": 11973,
                    "body": []
                  },
                  "kind": "module",
                  "declare": true,
                  "global": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 11985,
            "end": 12036,
            "id": {
              "type": "Identifier",
              "start": 11992,
              "end": 11994,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 11995,
              "end": 12036,
              "body": [
                {
                  "type": "TSModuleDeclaration",
                  "start": 12005,
                  "end": 12030,
                  "id": {
                    "type": "Literal",
                    "start": 12012,
                    "end": 12018,
                    "value": "abc2",
                    "raw": "\"abc2\""
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "start": 12019,
                    "end": 12030,
                    "body": []
                  },
                  "kind": "module",
                  "declare": false,
                  "global": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 12041,
            "end": 12062,
            "id": {
              "type": "Literal",
              "start": 12048,
              "end": 12054,
              "value": "abc3",
              "raw": "\"abc3\""
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 12055,
              "end": 12062,
              "body": []
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 12066,
      "end": 12218,
      "id": {
        "type": "Identifier",
        "start": 12073,
        "end": 12075,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12076,
        "end": 12218,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 12082,
            "end": 12123,
            "id": {
              "type": "Identifier",
              "start": 12089,
              "end": 12091,
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 12094,
              "end": 12122,
              "expression": {
                "type": "Literal",
                "start": 12102,
                "end": 12121,
                "value": "use_glo_M1_public",
                "raw": "\"use_glo_M1_public\""
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 12128,
            "end": 12215,
            "id": {
              "type": "Identifier",
              "start": 12135,
              "end": 12137,
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 12138,
              "end": 12215,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 12148,
                  "end": 12159,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 12152,
                      "end": 12158,
                      "id": {
                        "type": "Identifier",
                        "start": 12152,
                        "end": 12153,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 12156,
                        "end": 12158,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "TSImportEqualsDeclaration",
                  "start": 12168,
                  "end": 12209,
                  "id": {
                    "type": "Identifier",
                    "start": 12175,
                    "end": 12177,
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "moduleReference": {
                    "type": "TSExternalModuleReference",
                    "start": 12180,
                    "end": 12208,
                    "expression": {
                      "type": "Literal",
                      "start": 12188,
                      "end": 12207,
                      "value": "use_glo_M1_public",
                      "raw": "\"use_glo_M1_public\""
                    }
                  },
                  "importKind": "value"
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 12220,
      "end": 12379,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 12227,
        "end": 12379,
        "id": {
          "type": "Identifier",
          "start": 12234,
          "end": 12236,
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 12237,
          "end": 12379,
          "body": [
            {
              "type": "TSImportEqualsDeclaration",
              "start": 12243,
              "end": 12284,
              "id": {
                "type": "Identifier",
                "start": 12250,
                "end": 12252,
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "start": 12255,
                "end": 12283,
                "expression": {
                  "type": "Literal",
                  "start": 12263,
                  "end": 12282,
                  "value": "use_glo_M1_public",
                  "raw": "\"use_glo_M1_public\""
                }
              },
              "importKind": "value"
            },
            {
              "type": "TSModuleDeclaration",
              "start": 12289,
              "end": 12376,
              "id": {
                "type": "Identifier",
                "start": 12296,
                "end": 12298,
                "decorators": [],
                "name": "m4",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 12299,
                "end": 12376,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 12309,
                    "end": 12320,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 12313,
                        "end": 12319,
                        "id": {
                          "type": "Identifier",
                          "start": 12313,
                          "end": 12314,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 12317,
                          "end": 12319,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "TSImportEqualsDeclaration",
                    "start": 12329,
                    "end": 12370,
                    "id": {
                      "type": "Identifier",
                      "start": 12336,
                      "end": 12338,
                      "decorators": [],
                      "name": "m2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "moduleReference": {
                      "type": "TSExternalModuleReference",
                      "start": 12341,
                      "end": 12369,
                      "expression": {
                        "type": "Literal",
                        "start": 12349,
                        "end": 12368,
                        "value": "use_glo_M1_public",
                        "raw": "\"use_glo_M1_public\""
                      }
                    },
                    "importKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
