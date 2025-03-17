__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 5007,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 3098,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 3098,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 209,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 23,
              "end": 209,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 42,
                "name": "m1_M1_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 43,
                "end": 209,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 53,
                    "end": 80,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 60,
                      "end": 80,
                      "id": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 68,
                        "name": "c1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 69,
                        "end": 80,
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
                    "start": 89,
                    "end": 148,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 96,
                      "end": 148,
                      "id": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 107,
                        "name": "f1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 110,
                        "end": 148,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 124,
                            "end": 138,
                            "argument": {
                              "type": "NewExpression",
                              "start": 131,
                              "end": 137,
                              "callee": {
                                "type": "Identifier",
                                "start": 135,
                                "end": 137,
                                "name": "c1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
                          }
                        ]
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
                    "start": 157,
                    "end": 176,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 164,
                      "end": 176,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 168,
                          "end": 175,
                          "id": {
                            "type": "Identifier",
                            "start": 168,
                            "end": 170,
                            "name": "v1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 173,
                            "end": 175,
                            "name": "c1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 185,
                    "end": 203,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 192,
                      "end": 203,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 196,
                          "end": 202,
                          "id": {
                            "type": "Identifier",
                            "start": 196,
                            "end": 202,
                            "name": "v2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 198,
                              "end": 202,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 200,
                                "end": 202,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 200,
                                  "end": 202,
                                  "name": "c1",
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
                      "kind": "var",
                      "declare": false
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 215,
            "end": 402,
            "id": {
              "type": "Identifier",
              "start": 222,
              "end": 235,
              "name": "m1_M2_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 236,
              "end": 402,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 246,
                  "end": 273,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 253,
                    "end": 273,
                    "id": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 261,
                      "name": "c1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 262,
                      "end": 273,
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
                  "start": 282,
                  "end": 341,
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "start": 289,
                    "end": 341,
                    "id": {
                      "type": "Identifier",
                      "start": 298,
                      "end": 300,
                      "name": "f1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 303,
                      "end": 341,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 317,
                          "end": 331,
                          "argument": {
                            "type": "NewExpression",
                            "start": 324,
                            "end": 330,
                            "callee": {
                              "type": "Identifier",
                              "start": 328,
                              "end": 330,
                              "name": "c1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
                        }
                      ]
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
                  "start": 350,
                  "end": 369,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 357,
                    "end": 369,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 361,
                        "end": 368,
                        "id": {
                          "type": "Identifier",
                          "start": 361,
                          "end": 363,
                          "name": "v1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 366,
                          "end": 368,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 378,
                  "end": 396,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 385,
                    "end": 396,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 389,
                        "end": 395,
                        "id": {
                          "type": "Identifier",
                          "start": 389,
                          "end": 395,
                          "name": "v2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 391,
                            "end": 395,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 393,
                              "end": 395,
                              "typeName": {
                                "type": "Identifier",
                                "start": 393,
                                "end": 395,
                                "name": "c1",
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
                    "kind": "var",
                    "declare": false
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
            "type": "ExportNamedDeclaration",
            "start": 408,
            "end": 585,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 415,
              "end": 585,
              "id": {
                "type": "Literal",
                "start": 430,
                "end": 444,
                "value": "m1_M3_public",
                "raw": "\"m1_M3_public\""
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 445,
                "end": 585,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 455,
                    "end": 476,
                    "declaration": {
                      "type": "TSDeclareFunction",
                      "start": 462,
                      "end": 476,
                      "id": {
                        "type": "Identifier",
                        "start": 471,
                        "end": 473,
                        "name": "f1",
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
                      "returnType": null
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 485,
                    "end": 512,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 492,
                      "end": 512,
                      "id": {
                        "type": "Identifier",
                        "start": 498,
                        "end": 500,
                        "name": "c1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 501,
                        "end": 512,
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
                    "start": 521,
                    "end": 552,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 528,
                      "end": 552,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 532,
                          "end": 551,
                          "id": {
                            "type": "Identifier",
                            "start": 532,
                            "end": 551,
                            "name": "v1",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 534,
                              "end": 551,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 536,
                                "end": 551,
                                "members": [
                                  {
                                    "type": "TSConstructSignatureDeclaration",
                                    "start": 538,
                                    "end": 549,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 544,
                                      "end": 548,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 546,
                                        "end": 548,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 546,
                                          "end": 548,
                                          "name": "c1",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  }
                                ]
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
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 561,
                    "end": 579,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 568,
                      "end": 579,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 572,
                          "end": 578,
                          "id": {
                            "type": "Identifier",
                            "start": 572,
                            "end": 578,
                            "name": "v2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 574,
                              "end": 578,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 576,
                                "end": 578,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 576,
                                  "end": 578,
                                  "name": "c1",
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
                      "kind": "var",
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": true,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 591,
            "end": 762,
            "id": {
              "type": "Literal",
              "start": 606,
              "end": 621,
              "value": "m1_M4_private",
              "raw": "\"m1_M4_private\""
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 622,
              "end": 762,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 632,
                  "end": 653,
                  "declaration": {
                    "type": "TSDeclareFunction",
                    "start": 639,
                    "end": 653,
                    "id": {
                      "type": "Identifier",
                      "start": 648,
                      "end": 650,
                      "name": "f1",
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
                    "returnType": null
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 662,
                  "end": 689,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 669,
                    "end": 689,
                    "id": {
                      "type": "Identifier",
                      "start": 675,
                      "end": 677,
                      "name": "c1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 678,
                      "end": 689,
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
                  "start": 698,
                  "end": 729,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 705,
                    "end": 729,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 709,
                        "end": 728,
                        "id": {
                          "type": "Identifier",
                          "start": 709,
                          "end": 728,
                          "name": "v1",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 711,
                            "end": 728,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 713,
                              "end": 728,
                              "members": [
                                {
                                  "type": "TSConstructSignatureDeclaration",
                                  "start": 715,
                                  "end": 726,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "start": 721,
                                    "end": 725,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 723,
                                      "end": 725,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 723,
                                        "end": 725,
                                        "name": "c1",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                }
                              ]
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
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 738,
                  "end": 756,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 745,
                    "end": 756,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 749,
                        "end": 755,
                        "id": {
                          "type": "Identifier",
                          "start": 749,
                          "end": 755,
                          "name": "v2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 751,
                            "end": 755,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 753,
                              "end": 755,
                              "typeName": {
                                "type": "Identifier",
                                "start": 753,
                                "end": 755,
                                "name": "c1",
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
                    "kind": "var",
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                }
              ]
            },
            "kind": "module",
            "declare": true,
            "global": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 768,
            "end": 805,
            "id": {
              "type": "Identifier",
              "start": 775,
              "end": 789,
              "name": "m1_im1_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 792,
              "end": 804,
              "name": "m1_M1_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 810,
            "end": 866,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 817,
              "end": 866,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 821,
                  "end": 865,
                  "id": {
                    "type": "Identifier",
                    "start": 821,
                    "end": 845,
                    "name": "m1_im1_private_v1_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 848,
                    "end": 865,
                    "object": {
                      "type": "Identifier",
                      "start": 848,
                      "end": 862,
                      "name": "m1_im1_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 863,
                      "end": 865,
                      "name": "c1",
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
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 871,
            "end": 933,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 878,
              "end": 933,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 882,
                  "end": 932,
                  "id": {
                    "type": "Identifier",
                    "start": 882,
                    "end": 906,
                    "name": "m1_im1_private_v2_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 909,
                    "end": 932,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 913,
                      "end": 930,
                      "object": {
                        "type": "Identifier",
                        "start": 913,
                        "end": 927,
                        "name": "m1_im1_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 928,
                        "end": 930,
                        "name": "c1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 938,
            "end": 994,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 945,
              "end": 994,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 949,
                  "end": 993,
                  "id": {
                    "type": "Identifier",
                    "start": 949,
                    "end": 973,
                    "name": "m1_im1_private_v3_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 976,
                    "end": 993,
                    "object": {
                      "type": "Identifier",
                      "start": 976,
                      "end": 990,
                      "name": "m1_im1_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 991,
                      "end": 993,
                      "name": "f1",
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
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 999,
            "end": 1057,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1006,
              "end": 1057,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1010,
                  "end": 1056,
                  "id": {
                    "type": "Identifier",
                    "start": 1010,
                    "end": 1034,
                    "name": "m1_im1_private_v4_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1037,
                    "end": 1056,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1037,
                      "end": 1054,
                      "object": {
                        "type": "Identifier",
                        "start": 1037,
                        "end": 1051,
                        "name": "m1_im1_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1052,
                        "end": 1054,
                        "name": "f1",
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
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 1062,
            "end": 1112,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1066,
                "end": 1111,
                "id": {
                  "type": "Identifier",
                  "start": 1066,
                  "end": 1091,
                  "name": "m1_im1_private_v1_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1094,
                  "end": 1111,
                  "object": {
                    "type": "Identifier",
                    "start": 1094,
                    "end": 1108,
                    "name": "m1_im1_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1109,
                    "end": 1111,
                    "name": "c1",
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
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1117,
            "end": 1173,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1121,
                "end": 1172,
                "id": {
                  "type": "Identifier",
                  "start": 1121,
                  "end": 1146,
                  "name": "m1_im1_private_v2_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 1149,
                  "end": 1172,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1153,
                    "end": 1170,
                    "object": {
                      "type": "Identifier",
                      "start": 1153,
                      "end": 1167,
                      "name": "m1_im1_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1168,
                      "end": 1170,
                      "name": "c1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1178,
            "end": 1228,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1182,
                "end": 1227,
                "id": {
                  "type": "Identifier",
                  "start": 1182,
                  "end": 1207,
                  "name": "m1_im1_private_v3_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1210,
                  "end": 1227,
                  "object": {
                    "type": "Identifier",
                    "start": 1210,
                    "end": 1224,
                    "name": "m1_im1_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1225,
                    "end": 1227,
                    "name": "f1",
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
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1233,
            "end": 1285,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1237,
                "end": 1284,
                "id": {
                  "type": "Identifier",
                  "start": 1237,
                  "end": 1262,
                  "name": "m1_im1_private_v4_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1265,
                  "end": 1284,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1265,
                    "end": 1282,
                    "object": {
                      "type": "Identifier",
                      "start": 1265,
                      "end": 1279,
                      "name": "m1_im1_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1280,
                      "end": 1282,
                      "name": "f1",
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
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 1292,
            "end": 1330,
            "id": {
              "type": "Identifier",
              "start": 1299,
              "end": 1313,
              "name": "m1_im2_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 1316,
              "end": 1329,
              "name": "m1_M2_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1335,
            "end": 1391,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1342,
              "end": 1391,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1346,
                  "end": 1390,
                  "id": {
                    "type": "Identifier",
                    "start": 1346,
                    "end": 1370,
                    "name": "m1_im2_private_v1_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 1373,
                    "end": 1390,
                    "object": {
                      "type": "Identifier",
                      "start": 1373,
                      "end": 1387,
                      "name": "m1_im2_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1388,
                      "end": 1390,
                      "name": "c1",
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
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1396,
            "end": 1458,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1403,
              "end": 1458,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1407,
                  "end": 1457,
                  "id": {
                    "type": "Identifier",
                    "start": 1407,
                    "end": 1431,
                    "name": "m1_im2_private_v2_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1434,
                    "end": 1457,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1438,
                      "end": 1455,
                      "object": {
                        "type": "Identifier",
                        "start": 1438,
                        "end": 1452,
                        "name": "m1_im2_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1453,
                        "end": 1455,
                        "name": "c1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1463,
            "end": 1519,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1470,
              "end": 1519,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1474,
                  "end": 1518,
                  "id": {
                    "type": "Identifier",
                    "start": 1474,
                    "end": 1498,
                    "name": "m1_im2_private_v3_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 1501,
                    "end": 1518,
                    "object": {
                      "type": "Identifier",
                      "start": 1501,
                      "end": 1515,
                      "name": "m1_im2_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1516,
                      "end": 1518,
                      "name": "f1",
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
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1524,
            "end": 1582,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1531,
              "end": 1582,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1535,
                  "end": 1581,
                  "id": {
                    "type": "Identifier",
                    "start": 1535,
                    "end": 1559,
                    "name": "m1_im2_private_v4_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1562,
                    "end": 1581,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1562,
                      "end": 1579,
                      "object": {
                        "type": "Identifier",
                        "start": 1562,
                        "end": 1576,
                        "name": "m1_im2_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1577,
                        "end": 1579,
                        "name": "f1",
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
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 1587,
            "end": 1637,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1591,
                "end": 1636,
                "id": {
                  "type": "Identifier",
                  "start": 1591,
                  "end": 1616,
                  "name": "m1_im2_private_v1_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1619,
                  "end": 1636,
                  "object": {
                    "type": "Identifier",
                    "start": 1619,
                    "end": 1633,
                    "name": "m1_im2_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1634,
                    "end": 1636,
                    "name": "c1",
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
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1642,
            "end": 1698,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1646,
                "end": 1697,
                "id": {
                  "type": "Identifier",
                  "start": 1646,
                  "end": 1671,
                  "name": "m1_im2_private_v2_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 1674,
                  "end": 1697,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1678,
                    "end": 1695,
                    "object": {
                      "type": "Identifier",
                      "start": 1678,
                      "end": 1692,
                      "name": "m1_im2_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1693,
                      "end": 1695,
                      "name": "c1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1703,
            "end": 1753,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1707,
                "end": 1752,
                "id": {
                  "type": "Identifier",
                  "start": 1707,
                  "end": 1732,
                  "name": "m1_im2_private_v3_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1735,
                  "end": 1752,
                  "object": {
                    "type": "Identifier",
                    "start": 1735,
                    "end": 1749,
                    "name": "m1_im2_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1750,
                    "end": 1752,
                    "name": "f1",
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
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1758,
            "end": 1810,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1762,
                "end": 1809,
                "id": {
                  "type": "Identifier",
                  "start": 1762,
                  "end": 1787,
                  "name": "m1_im2_private_v4_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1790,
                  "end": 1809,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1790,
                    "end": 1807,
                    "object": {
                      "type": "Identifier",
                      "start": 1790,
                      "end": 1804,
                      "name": "m1_im2_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1805,
                      "end": 1807,
                      "name": "f1",
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
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 1816,
            "end": 1864,
            "id": {
              "type": "Identifier",
              "start": 1823,
              "end": 1837,
              "name": "m1_im3_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 1840,
              "end": 1863,
              "expression": {
                "type": "Literal",
                "start": 1848,
                "end": 1862,
                "value": "m1_M3_public",
                "raw": "\"m1_M3_public\""
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1869,
            "end": 1925,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1876,
              "end": 1925,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1880,
                  "end": 1924,
                  "id": {
                    "type": "Identifier",
                    "start": 1880,
                    "end": 1904,
                    "name": "m1_im3_private_v1_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 1907,
                    "end": 1924,
                    "object": {
                      "type": "Identifier",
                      "start": 1907,
                      "end": 1921,
                      "name": "m1_im3_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1922,
                      "end": 1924,
                      "name": "c1",
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
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1930,
            "end": 1992,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1937,
              "end": 1992,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1941,
                  "end": 1991,
                  "id": {
                    "type": "Identifier",
                    "start": 1941,
                    "end": 1965,
                    "name": "m1_im3_private_v2_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1968,
                    "end": 1991,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1972,
                      "end": 1989,
                      "object": {
                        "type": "Identifier",
                        "start": 1972,
                        "end": 1986,
                        "name": "m1_im3_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1987,
                        "end": 1989,
                        "name": "c1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1997,
            "end": 2053,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2004,
              "end": 2053,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2008,
                  "end": 2052,
                  "id": {
                    "type": "Identifier",
                    "start": 2008,
                    "end": 2032,
                    "name": "m1_im3_private_v3_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 2035,
                    "end": 2052,
                    "object": {
                      "type": "Identifier",
                      "start": 2035,
                      "end": 2049,
                      "name": "m1_im3_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2050,
                      "end": 2052,
                      "name": "f1",
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
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2058,
            "end": 2116,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2065,
              "end": 2116,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2069,
                  "end": 2115,
                  "id": {
                    "type": "Identifier",
                    "start": 2069,
                    "end": 2093,
                    "name": "m1_im3_private_v4_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 2096,
                    "end": 2115,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2096,
                      "end": 2113,
                      "object": {
                        "type": "Identifier",
                        "start": 2096,
                        "end": 2110,
                        "name": "m1_im3_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2111,
                        "end": 2113,
                        "name": "f1",
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
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 2121,
            "end": 2171,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2125,
                "end": 2170,
                "id": {
                  "type": "Identifier",
                  "start": 2125,
                  "end": 2150,
                  "name": "m1_im3_private_v1_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2153,
                  "end": 2170,
                  "object": {
                    "type": "Identifier",
                    "start": 2153,
                    "end": 2167,
                    "name": "m1_im3_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2168,
                    "end": 2170,
                    "name": "c1",
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
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2176,
            "end": 2232,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2180,
                "end": 2231,
                "id": {
                  "type": "Identifier",
                  "start": 2180,
                  "end": 2205,
                  "name": "m1_im3_private_v2_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 2208,
                  "end": 2231,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2212,
                    "end": 2229,
                    "object": {
                      "type": "Identifier",
                      "start": 2212,
                      "end": 2226,
                      "name": "m1_im3_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2227,
                      "end": 2229,
                      "name": "c1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2237,
            "end": 2287,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2241,
                "end": 2286,
                "id": {
                  "type": "Identifier",
                  "start": 2241,
                  "end": 2266,
                  "name": "m1_im3_private_v3_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2269,
                  "end": 2286,
                  "object": {
                    "type": "Identifier",
                    "start": 2269,
                    "end": 2283,
                    "name": "m1_im3_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2284,
                    "end": 2286,
                    "name": "f1",
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
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2292,
            "end": 2344,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2296,
                "end": 2343,
                "id": {
                  "type": "Identifier",
                  "start": 2296,
                  "end": 2321,
                  "name": "m1_im3_private_v4_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2324,
                  "end": 2343,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2324,
                    "end": 2341,
                    "object": {
                      "type": "Identifier",
                      "start": 2324,
                      "end": 2338,
                      "name": "m1_im3_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2339,
                      "end": 2341,
                      "name": "f1",
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
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 2350,
            "end": 2399,
            "id": {
              "type": "Identifier",
              "start": 2357,
              "end": 2371,
              "name": "m1_im4_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 2374,
              "end": 2398,
              "expression": {
                "type": "Literal",
                "start": 2382,
                "end": 2397,
                "value": "m1_M4_private",
                "raw": "\"m1_M4_private\""
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2404,
            "end": 2460,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2411,
              "end": 2460,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2415,
                  "end": 2459,
                  "id": {
                    "type": "Identifier",
                    "start": 2415,
                    "end": 2439,
                    "name": "m1_im4_private_v1_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 2442,
                    "end": 2459,
                    "object": {
                      "type": "Identifier",
                      "start": 2442,
                      "end": 2456,
                      "name": "m1_im4_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2457,
                      "end": 2459,
                      "name": "c1",
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
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2465,
            "end": 2527,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2472,
              "end": 2527,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2476,
                  "end": 2526,
                  "id": {
                    "type": "Identifier",
                    "start": 2476,
                    "end": 2500,
                    "name": "m1_im4_private_v2_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 2503,
                    "end": 2526,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2507,
                      "end": 2524,
                      "object": {
                        "type": "Identifier",
                        "start": 2507,
                        "end": 2521,
                        "name": "m1_im4_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2522,
                        "end": 2524,
                        "name": "c1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2532,
            "end": 2588,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2539,
              "end": 2588,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2543,
                  "end": 2587,
                  "id": {
                    "type": "Identifier",
                    "start": 2543,
                    "end": 2567,
                    "name": "m1_im4_private_v3_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 2570,
                    "end": 2587,
                    "object": {
                      "type": "Identifier",
                      "start": 2570,
                      "end": 2584,
                      "name": "m1_im4_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2585,
                      "end": 2587,
                      "name": "f1",
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
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2593,
            "end": 2651,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2600,
              "end": 2651,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2604,
                  "end": 2650,
                  "id": {
                    "type": "Identifier",
                    "start": 2604,
                    "end": 2628,
                    "name": "m1_im4_private_v4_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 2631,
                    "end": 2650,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2631,
                      "end": 2648,
                      "object": {
                        "type": "Identifier",
                        "start": 2631,
                        "end": 2645,
                        "name": "m1_im4_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2646,
                        "end": 2648,
                        "name": "f1",
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
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 2656,
            "end": 2706,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2660,
                "end": 2705,
                "id": {
                  "type": "Identifier",
                  "start": 2660,
                  "end": 2685,
                  "name": "m1_im4_private_v1_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2688,
                  "end": 2705,
                  "object": {
                    "type": "Identifier",
                    "start": 2688,
                    "end": 2702,
                    "name": "m1_im4_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2703,
                    "end": 2705,
                    "name": "c1",
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
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2711,
            "end": 2767,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2715,
                "end": 2766,
                "id": {
                  "type": "Identifier",
                  "start": 2715,
                  "end": 2740,
                  "name": "m1_im4_private_v2_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 2743,
                  "end": 2766,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2747,
                    "end": 2764,
                    "object": {
                      "type": "Identifier",
                      "start": 2747,
                      "end": 2761,
                      "name": "m1_im4_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2762,
                      "end": 2764,
                      "name": "c1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2772,
            "end": 2822,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2776,
                "end": 2821,
                "id": {
                  "type": "Identifier",
                  "start": 2776,
                  "end": 2801,
                  "name": "m1_im4_private_v3_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2804,
                  "end": 2821,
                  "object": {
                    "type": "Identifier",
                    "start": 2804,
                    "end": 2818,
                    "name": "m1_im4_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2819,
                    "end": 2821,
                    "name": "f1",
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
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2827,
            "end": 2879,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2831,
                "end": 2878,
                "id": {
                  "type": "Identifier",
                  "start": 2831,
                  "end": 2856,
                  "name": "m1_im4_private_v4_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2859,
                  "end": 2878,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2859,
                    "end": 2876,
                    "object": {
                      "type": "Identifier",
                      "start": 2859,
                      "end": 2873,
                      "name": "m1_im4_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2874,
                      "end": 2876,
                      "name": "f1",
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
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2885,
            "end": 2928,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 2892,
              "end": 2928,
              "id": {
                "type": "Identifier",
                "start": 2899,
                "end": 2912,
                "name": "m1_im1_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 2915,
                "end": 2927,
                "name": "m1_M1_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2933,
            "end": 2977,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 2940,
              "end": 2977,
              "id": {
                "type": "Identifier",
                "start": 2947,
                "end": 2960,
                "name": "m1_im2_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 2963,
                "end": 2976,
                "name": "m1_M2_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2982,
            "end": 3036,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 2989,
              "end": 3036,
              "id": {
                "type": "Identifier",
                "start": 2996,
                "end": 3009,
                "name": "m1_im3_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "start": 3012,
                "end": 3035,
                "expression": {
                  "type": "Literal",
                  "start": 3020,
                  "end": 3034,
                  "value": "m1_M3_public",
                  "raw": "\"m1_M3_public\""
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3041,
            "end": 3096,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 3048,
              "end": 3096,
              "id": {
                "type": "Identifier",
                "start": 3055,
                "end": 3068,
                "name": "m1_im4_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "start": 3071,
                "end": 3095,
                "expression": {
                  "type": "Literal",
                  "start": 3079,
                  "end": 3094,
                  "value": "m1_M4_private",
                  "raw": "\"m1_M4_private\""
                }
              },
              "importKind": "value"
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
      "start": 3100,
      "end": 3255,
      "id": {
        "type": "Identifier",
        "start": 3107,
        "end": 3120,
        "name": "glo_M1_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 3121,
        "end": 3255,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 3127,
            "end": 3150,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 3134,
              "end": 3150,
              "id": {
                "type": "Identifier",
                "start": 3140,
                "end": 3142,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 3143,
                "end": 3150,
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
            "start": 3155,
            "end": 3206,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 3162,
              "end": 3206,
              "id": {
                "type": "Identifier",
                "start": 3171,
                "end": 3173,
                "name": "f1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3176,
                "end": 3206,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3186,
                    "end": 3200,
                    "argument": {
                      "type": "NewExpression",
                      "start": 3193,
                      "end": 3199,
                      "callee": {
                        "type": "Identifier",
                        "start": 3197,
                        "end": 3199,
                        "name": "c1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
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
            "start": 3211,
            "end": 3230,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3218,
              "end": 3230,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3222,
                  "end": 3229,
                  "id": {
                    "type": "Identifier",
                    "start": 3222,
                    "end": 3224,
                    "name": "v1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 3227,
                    "end": 3229,
                    "name": "c1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3235,
            "end": 3253,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3242,
              "end": 3253,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3246,
                  "end": 3252,
                  "id": {
                    "type": "Identifier",
                    "start": 3246,
                    "end": 3252,
                    "name": "v2",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3248,
                      "end": 3252,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3250,
                        "end": 3252,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3250,
                          "end": 3252,
                          "name": "c1",
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
              "kind": "var",
              "declare": false
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
      "start": 3257,
      "end": 3404,
      "id": {
        "type": "Literal",
        "start": 3272,
        "end": 3287,
        "value": "glo_M2_public",
        "raw": "\"glo_M2_public\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 3288,
        "end": 3404,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 3294,
            "end": 3315,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 3301,
              "end": 3315,
              "id": {
                "type": "Identifier",
                "start": 3310,
                "end": 3312,
                "name": "f1",
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
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3320,
            "end": 3343,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 3327,
              "end": 3343,
              "id": {
                "type": "Identifier",
                "start": 3333,
                "end": 3335,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 3336,
                "end": 3343,
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
            "start": 3348,
            "end": 3379,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3355,
              "end": 3379,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3359,
                  "end": 3378,
                  "id": {
                    "type": "Identifier",
                    "start": 3359,
                    "end": 3378,
                    "name": "v1",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3361,
                      "end": 3378,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 3363,
                        "end": 3378,
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "start": 3365,
                            "end": 3376,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 3371,
                              "end": 3375,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3373,
                                "end": 3375,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3373,
                                  "end": 3375,
                                  "name": "c1",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ]
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
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3384,
            "end": 3402,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3391,
              "end": 3402,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3395,
                  "end": 3401,
                  "id": {
                    "type": "Identifier",
                    "start": 3395,
                    "end": 3401,
                    "name": "v2",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3397,
                      "end": 3401,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3399,
                        "end": 3401,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3399,
                          "end": 3401,
                          "name": "c1",
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
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 3406,
      "end": 4667,
      "id": {
        "type": "Literal",
        "start": 3421,
        "end": 3440,
        "value": "use_glo_M1_public",
        "raw": "\"use_glo_M1_public\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 3441,
        "end": 4667,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 3447,
            "end": 3488,
            "id": {
              "type": "Identifier",
              "start": 3454,
              "end": 3471,
              "name": "use_glo_M1_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 3474,
              "end": 3487,
              "name": "glo_M1_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3493,
            "end": 3567,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3500,
              "end": 3567,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3504,
                  "end": 3566,
                  "id": {
                    "type": "Identifier",
                    "start": 3504,
                    "end": 3566,
                    "name": "use_glo_M1_public_v1_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3531,
                      "end": 3566,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 3533,
                        "end": 3566,
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "start": 3535,
                            "end": 3564,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 3541,
                              "end": 3563,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3543,
                                "end": 3563,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 3543,
                                  "end": 3563,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 3543,
                                    "end": 3560,
                                    "name": "use_glo_M1_public",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 3561,
                                    "end": 3563,
                                    "name": "c1",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ]
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
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3572,
            "end": 3637,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3579,
              "end": 3637,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3583,
                  "end": 3636,
                  "id": {
                    "type": "Identifier",
                    "start": 3583,
                    "end": 3636,
                    "name": "use_glo_M1_public_v2_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3610,
                      "end": 3636,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 3612,
                        "end": 3636,
                        "exprName": {
                          "type": "Identifier",
                          "start": 3619,
                          "end": 3636,
                          "name": "use_glo_M1_public",
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
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3642,
            "end": 3708,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3649,
              "end": 3708,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3653,
                  "end": 3707,
                  "id": {
                    "type": "Identifier",
                    "start": 3653,
                    "end": 3707,
                    "name": "use_glo_M1_public_v3_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3680,
                      "end": 3707,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 3682,
                        "end": 3707,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3684,
                          "end": 3707,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3687,
                            "end": 3707,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 3687,
                              "end": 3707,
                              "left": {
                                "type": "Identifier",
                                "start": 3687,
                                "end": 3704,
                                "name": "use_glo_M1_public",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3705,
                                "end": 3707,
                                "name": "c1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
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
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 3713,
            "end": 3781,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3717,
                "end": 3780,
                "id": {
                  "type": "Identifier",
                  "start": 3717,
                  "end": 3780,
                  "name": "use_glo_M1_public_v1_private",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3745,
                    "end": 3780,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 3747,
                      "end": 3780,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 3749,
                          "end": 3778,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 3755,
                            "end": 3777,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3757,
                              "end": 3777,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 3757,
                                "end": 3777,
                                "left": {
                                  "type": "Identifier",
                                  "start": 3757,
                                  "end": 3774,
                                  "name": "use_glo_M1_public",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 3775,
                                  "end": 3777,
                                  "name": "c1",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ]
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
          },
          {
            "type": "VariableDeclaration",
            "start": 3786,
            "end": 3845,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3790,
                "end": 3844,
                "id": {
                  "type": "Identifier",
                  "start": 3790,
                  "end": 3844,
                  "name": "use_glo_M1_public_v2_private",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3818,
                    "end": 3844,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 3820,
                      "end": 3844,
                      "exprName": {
                        "type": "Identifier",
                        "start": 3827,
                        "end": 3844,
                        "name": "use_glo_M1_public",
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
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3850,
            "end": 3911,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3854,
                "end": 3910,
                "id": {
                  "type": "Identifier",
                  "start": 3854,
                  "end": 3910,
                  "name": "use_glo_M1_public_v3_private",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3882,
                    "end": 3910,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 3884,
                      "end": 3910,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 3887,
                        "end": 3910,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3890,
                          "end": 3910,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 3890,
                            "end": 3910,
                            "left": {
                              "type": "Identifier",
                              "start": 3890,
                              "end": 3907,
                              "name": "use_glo_M1_public",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 3908,
                              "end": 3910,
                              "name": "c1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
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
            "kind": "var",
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 3917,
            "end": 3969,
            "id": {
              "type": "Identifier",
              "start": 3924,
              "end": 3941,
              "name": "use_glo_M2_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 3944,
              "end": 3968,
              "expression": {
                "type": "Literal",
                "start": 3952,
                "end": 3967,
                "value": "glo_M2_public",
                "raw": "\"glo_M2_public\""
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3974,
            "end": 4048,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3981,
              "end": 4048,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3985,
                  "end": 4047,
                  "id": {
                    "type": "Identifier",
                    "start": 3985,
                    "end": 4047,
                    "name": "use_glo_M2_public_v1_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4012,
                      "end": 4047,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 4014,
                        "end": 4047,
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "start": 4016,
                            "end": 4045,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 4022,
                              "end": 4044,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 4024,
                                "end": 4044,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 4024,
                                  "end": 4044,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 4024,
                                    "end": 4041,
                                    "name": "use_glo_M2_public",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 4042,
                                    "end": 4044,
                                    "name": "c1",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ]
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
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4053,
            "end": 4118,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4060,
              "end": 4118,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4064,
                  "end": 4117,
                  "id": {
                    "type": "Identifier",
                    "start": 4064,
                    "end": 4117,
                    "name": "use_glo_M2_public_v2_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4091,
                      "end": 4117,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 4093,
                        "end": 4117,
                        "exprName": {
                          "type": "Identifier",
                          "start": 4100,
                          "end": 4117,
                          "name": "use_glo_M2_public",
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
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4123,
            "end": 4190,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4130,
              "end": 4190,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4134,
                  "end": 4189,
                  "id": {
                    "type": "Identifier",
                    "start": 4134,
                    "end": 4189,
                    "name": "use_glo_M2_public_v3_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4161,
                      "end": 4189,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 4163,
                        "end": 4189,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4166,
                          "end": 4189,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4169,
                            "end": 4189,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 4169,
                              "end": 4189,
                              "left": {
                                "type": "Identifier",
                                "start": 4169,
                                "end": 4186,
                                "name": "use_glo_M2_public",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 4187,
                                "end": 4189,
                                "name": "c1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
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
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 4195,
            "end": 4263,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4199,
                "end": 4262,
                "id": {
                  "type": "Identifier",
                  "start": 4199,
                  "end": 4262,
                  "name": "use_glo_M2_public_v1_private",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4227,
                    "end": 4262,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 4229,
                      "end": 4262,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 4231,
                          "end": 4260,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 4237,
                            "end": 4259,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4239,
                              "end": 4259,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 4239,
                                "end": 4259,
                                "left": {
                                  "type": "Identifier",
                                  "start": 4239,
                                  "end": 4256,
                                  "name": "use_glo_M2_public",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 4257,
                                  "end": 4259,
                                  "name": "c1",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ]
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
          },
          {
            "type": "VariableDeclaration",
            "start": 4268,
            "end": 4327,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4272,
                "end": 4326,
                "id": {
                  "type": "Identifier",
                  "start": 4272,
                  "end": 4326,
                  "name": "use_glo_M2_public_v2_private",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4300,
                    "end": 4326,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 4302,
                      "end": 4326,
                      "exprName": {
                        "type": "Identifier",
                        "start": 4309,
                        "end": 4326,
                        "name": "use_glo_M2_public",
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
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4332,
            "end": 4393,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4336,
                "end": 4392,
                "id": {
                  "type": "Identifier",
                  "start": 4336,
                  "end": 4392,
                  "name": "use_glo_M2_public_v3_private",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4364,
                    "end": 4392,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 4366,
                      "end": 4392,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 4369,
                        "end": 4392,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4372,
                          "end": 4392,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 4372,
                            "end": 4392,
                            "left": {
                              "type": "Identifier",
                              "start": 4372,
                              "end": 4389,
                              "name": "use_glo_M2_public",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 4390,
                              "end": 4392,
                              "name": "c1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
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
            "kind": "var",
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 4399,
            "end": 4665,
            "id": {
              "type": "Identifier",
              "start": 4406,
              "end": 4408,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 4409,
              "end": 4665,
              "body": [
                {
                  "type": "TSImportEqualsDeclaration",
                  "start": 4419,
                  "end": 4465,
                  "id": {
                    "type": "Identifier",
                    "start": 4426,
                    "end": 4437,
                    "name": "errorImport",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "moduleReference": {
                    "type": "TSExternalModuleReference",
                    "start": 4440,
                    "end": 4464,
                    "expression": {
                      "type": "Literal",
                      "start": 4448,
                      "end": 4463,
                      "value": "glo_M2_public",
                      "raw": "\"glo_M2_public\""
                    }
                  },
                  "importKind": "value"
                },
                {
                  "type": "TSImportEqualsDeclaration",
                  "start": 4474,
                  "end": 4512,
                  "id": {
                    "type": "Identifier",
                    "start": 4481,
                    "end": 4495,
                    "name": "nonerrorImport",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "moduleReference": {
                    "type": "Identifier",
                    "start": 4498,
                    "end": 4511,
                    "name": "glo_M1_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "importKind": "value"
                },
                {
                  "type": "TSModuleDeclaration",
                  "start": 4522,
                  "end": 4659,
                  "id": {
                    "type": "Identifier",
                    "start": 4529,
                    "end": 4531,
                    "name": "m5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "start": 4532,
                    "end": 4659,
                    "body": [
                      {
                        "type": "TSImportEqualsDeclaration",
                        "start": 4546,
                        "end": 4595,
                        "id": {
                          "type": "Identifier",
                          "start": 4553,
                          "end": 4567,
                          "name": "m5_errorImport",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "moduleReference": {
                          "type": "TSExternalModuleReference",
                          "start": 4570,
                          "end": 4594,
                          "expression": {
                            "type": "Literal",
                            "start": 4578,
                            "end": 4593,
                            "value": "glo_M2_public",
                            "raw": "\"glo_M2_public\""
                          }
                        },
                        "importKind": "value"
                      },
                      {
                        "type": "TSImportEqualsDeclaration",
                        "start": 4608,
                        "end": 4649,
                        "id": {
                          "type": "Identifier",
                          "start": 4615,
                          "end": 4632,
                          "name": "m5_nonerrorImport",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "moduleReference": {
                          "type": "Identifier",
                          "start": 4635,
                          "end": 4648,
                          "name": "glo_M1_public",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
      "start": 4669,
      "end": 4853,
      "id": {
        "type": "Literal",
        "start": 4684,
        "end": 4703,
        "value": "anotherParseError",
        "raw": "\"anotherParseError\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 4704,
        "end": 4853,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 4710,
            "end": 4768,
            "id": {
              "type": "Identifier",
              "start": 4717,
              "end": 4719,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 4720,
              "end": 4768,
              "body": [
                {
                  "type": "TSModuleDeclaration",
                  "start": 4730,
                  "end": 4762,
                  "id": {
                    "type": "Literal",
                    "start": 4745,
                    "end": 4750,
                    "value": "abc",
                    "raw": "\"abc\""
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "start": 4751,
                    "end": 4762,
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
            "start": 4774,
            "end": 4825,
            "id": {
              "type": "Identifier",
              "start": 4781,
              "end": 4783,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 4784,
              "end": 4825,
              "body": [
                {
                  "type": "TSModuleDeclaration",
                  "start": 4794,
                  "end": 4819,
                  "id": {
                    "type": "Literal",
                    "start": 4801,
                    "end": 4807,
                    "value": "abc2",
                    "raw": "\"abc2\""
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "start": 4808,
                    "end": 4819,
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
            "start": 4830,
            "end": 4851,
            "id": {
              "type": "Literal",
              "start": 4837,
              "end": 4843,
              "value": "abc3",
              "raw": "\"abc3\""
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 4844,
              "end": 4851,
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
      "start": 4855,
      "end": 5007,
      "id": {
        "type": "Identifier",
        "start": 4862,
        "end": 4864,
        "name": "m2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 4865,
        "end": 5007,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 4871,
            "end": 4912,
            "id": {
              "type": "Identifier",
              "start": 4878,
              "end": 4880,
              "name": "m3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 4883,
              "end": 4911,
              "expression": {
                "type": "Literal",
                "start": 4891,
                "end": 4910,
                "value": "use_glo_M1_public",
                "raw": "\"use_glo_M1_public\""
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 4917,
            "end": 5004,
            "id": {
              "type": "Identifier",
              "start": 4924,
              "end": 4926,
              "name": "m4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 4927,
              "end": 5004,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 4937,
                  "end": 4948,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4941,
                      "end": 4947,
                      "id": {
                        "type": "Identifier",
                        "start": 4941,
                        "end": 4942,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 4945,
                        "end": 4947,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "TSImportEqualsDeclaration",
                  "start": 4957,
                  "end": 4998,
                  "id": {
                    "type": "Identifier",
                    "start": 4964,
                    "end": 4966,
                    "name": "m2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "moduleReference": {
                    "type": "TSExternalModuleReference",
                    "start": 4969,
                    "end": 4997,
                    "expression": {
                      "type": "Literal",
                      "start": 4977,
                      "end": 4996,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
