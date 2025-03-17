__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1641,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 1045,
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
        "end": 1045,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 403,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 23,
              "end": 403,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 32,
                "name": "m2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 33,
                "end": 403,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 45,
                    "end": 83,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 52,
                      "end": 83,
                      "id": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 63,
                        "name": "f1",
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
                          "start": 64,
                          "end": 70,
                          "name": "c1",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 66,
                            "end": 70,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 68,
                              "end": 70,
                              "typeName": {
                                "type": "Identifier",
                                "start": 68,
                                "end": 70,
                                "name": "C1",
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
                        "start": 72,
                        "end": 83,
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
                    "start": 92,
                    "end": 130,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 99,
                      "end": 130,
                      "id": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 110,
                        "name": "f2",
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
                          "start": 111,
                          "end": 117,
                          "name": "c2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 113,
                            "end": 117,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 115,
                              "end": 117,
                              "typeName": {
                                "type": "Identifier",
                                "start": 115,
                                "end": 117,
                                "name": "C2",
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
                        "start": 119,
                        "end": 130,
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
                    "start": 140,
                    "end": 397,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 147,
                      "end": 397,
                      "id": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 155,
                        "name": "C2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 173,
                        "end": 397,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 187,
                            "end": 254,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 198,
                              "end": 200,
                              "name": "p1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "get",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 200,
                              "end": 254,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 201,
                                  "end": 204,
                                  "name": "arg",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "body": {
                                "type": "BlockStatement",
                                "start": 206,
                                "end": 254,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 224,
                                    "end": 240,
                                    "argument": {
                                      "type": "NewExpression",
                                      "start": 231,
                                      "end": 239,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 235,
                                        "end": 237,
                                        "name": "C1",
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
                            "decorators": [],
                            "override": false,
                            "optional": false,
                            "accessibility": "public"
                          },
                          {
                            "type": "MethodDefinition",
                            "start": 268,
                            "end": 307,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 279,
                              "end": 281,
                              "name": "p1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "set",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 281,
                              "end": 307,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 282,
                                  "end": 290,
                                  "name": "arg1",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 286,
                                    "end": 290,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 288,
                                      "end": 290,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 288,
                                        "end": 290,
                                        "name": "C1",
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
                                "start": 292,
                                "end": 307,
                                "body": []
                              },
                              "declare": false,
                              "typeParameters": null,
                              "returnType": null
                            },
                            "decorators": [],
                            "override": false,
                            "optional": false,
                            "accessibility": "public"
                          },
                          {
                            "type": "MethodDefinition",
                            "start": 321,
                            "end": 387,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 328,
                              "end": 331,
                              "name": "f55",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "method",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 331,
                              "end": 387,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 334,
                                "end": 387,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 352,
                                    "end": 373,
                                    "argument": {
                                      "type": "Literal",
                                      "start": 359,
                                      "end": 372,
                                      "value": "Hello world",
                                      "raw": "\"Hello world\""
                                    }
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
                            "accessibility": "public"
                          }
                        ]
                      },
                      "decorators": [],
                      "typeParameters": null,
                      "implements": [
                        {
                          "type": "TSClassImplements",
                          "start": 167,
                          "end": 172,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 167,
                            "end": 172,
                            "object": {
                              "type": "Identifier",
                              "start": 167,
                              "end": 169,
                              "name": "m3",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 170,
                              "end": 172,
                              "name": "i3",
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 409,
            "end": 464,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 416,
              "end": 464,
              "id": {
                "type": "Identifier",
                "start": 425,
                "end": 427,
                "name": "f2",
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
                  "start": 428,
                  "end": 455,
                  "name": "arg1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 432,
                    "end": 455,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 434,
                      "end": 455,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 436,
                          "end": 443,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 436,
                            "end": 437,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 438,
                            "end": 442,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 440,
                              "end": 442,
                              "typeName": {
                                "type": "Identifier",
                                "start": 440,
                                "end": 442,
                                "name": "C1",
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
                          "start": 444,
                          "end": 453,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 444,
                            "end": 445,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 445,
                            "end": 453,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 447,
                              "end": 453
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 457,
                "end": 464,
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
            "start": 470,
            "end": 554,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 477,
              "end": 554,
              "id": {
                "type": "Identifier",
                "start": 486,
                "end": 488,
                "name": "f3",
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
                "start": 526,
                "end": 554,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 536,
                    "end": 548,
                    "argument": {
                      "type": "Literal",
                      "start": 543,
                      "end": 547,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 490,
                "end": 525,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 492,
                  "end": 525,
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 502,
                      "end": 519,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 503,
                          "end": 512,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 504,
                            "end": 512,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 506,
                              "end": 512
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 514,
                        "end": 518,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 516,
                          "end": 518,
                          "typeName": {
                            "type": "Identifier",
                            "start": 516,
                            "end": 518,
                            "name": "C1",
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
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 560,
            "end": 677,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 567,
              "end": 677,
              "id": {
                "type": "Identifier",
                "start": 576,
                "end": 578,
                "name": "f4",
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
                  "start": 579,
                  "end": 668,
                  "name": "arg1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 583,
                    "end": 668,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 590,
                      "end": 668,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 596,
                          "end": 609,
                          "computed": true,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 597,
                            "end": 603,
                            "name": "number",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 604,
                            "end": 608,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 606,
                              "end": 608,
                              "typeName": {
                                "type": "Identifier",
                                "start": 606,
                                "end": 608,
                                "name": "C1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 670,
                "end": 677,
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
            "start": 684,
            "end": 753,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 691,
              "end": 753,
              "id": {
                "type": "Identifier",
                "start": 700,
                "end": 702,
                "name": "f5",
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
                  "start": 703,
                  "end": 744,
                  "name": "arg2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 707,
                    "end": 744,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 709,
                      "end": 744,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 719,
                          "end": 738,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 724,
                              "end": 732,
                              "name": "arg1",
                              "typeAnnotation": {
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
                                    "name": "C1",
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
                            "start": 734,
                            "end": 738,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 736,
                              "end": 738,
                              "typeName": {
                                "type": "Identifier",
                                "start": 736,
                                "end": 738,
                                "name": "C1",
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
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 746,
                "end": 753,
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
            "type": "TSModuleDeclaration",
            "start": 758,
            "end": 883,
            "id": {
              "type": "Identifier",
              "start": 765,
              "end": 767,
              "name": "m3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 768,
              "end": 883,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 778,
                  "end": 809,
                  "id": {
                    "type": "Identifier",
                    "start": 787,
                    "end": 789,
                    "name": "f2",
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
                      "start": 790,
                      "end": 796,
                      "name": "f1",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 792,
                        "end": 796,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 794,
                          "end": 796,
                          "typeName": {
                            "type": "Identifier",
                            "start": 794,
                            "end": 796,
                            "name": "C1",
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
                    "start": 798,
                    "end": 809,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 819,
                  "end": 877,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 826,
                    "end": 877,
                    "id": {
                      "type": "Identifier",
                      "start": 836,
                      "end": 838,
                      "name": "i3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 839,
                      "end": 877,
                      "body": [
                        {
                          "type": "TSMethodSignature",
                          "start": 853,
                          "end": 867,
                          "key": {
                            "type": "Identifier",
                            "start": 853,
                            "end": 856,
                            "name": "f55",
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
                            "start": 858,
                            "end": 866,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 860,
                              "end": 866
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
            "type": "ClassDeclaration",
            "start": 889,
            "end": 905,
            "id": {
              "type": "Identifier",
              "start": 895,
              "end": 897,
              "name": "C1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 898,
              "end": 905,
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
            "start": 911,
            "end": 949,
            "id": {
              "type": "Identifier",
              "start": 921,
              "end": 922,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 923,
              "end": 949,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 933,
                  "end": 943,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 933,
                    "end": 934,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 934,
                    "end": 942,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 936,
                      "end": 942
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
            "type": "ExportNamedDeclaration",
            "start": 955,
            "end": 1017,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 962,
              "end": 1017,
              "id": {
                "type": "Identifier",
                "start": 968,
                "end": 970,
                "name": "C5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 984,
                "end": 1017,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 994,
                    "end": 1011,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1001,
                      "end": 1002,
                      "name": "x",
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
                      "start": 1002,
                      "end": 1010,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1004,
                        "end": 1010
                      }
                    },
                    "accessibility": "public"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 982,
                  "end": 983,
                  "expression": {
                    "type": "Identifier",
                    "start": 982,
                    "end": 983,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
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
            "start": 1023,
            "end": 1043,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1030,
              "end": 1043,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1034,
                  "end": 1042,
                  "id": {
                    "type": "Identifier",
                    "start": 1034,
                    "end": 1042,
                    "name": "v2",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1036,
                      "end": 1042,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1038,
                        "end": 1042,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 1038,
                          "end": 1040,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1038,
                            "end": 1040,
                            "name": "C1",
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
      "type": "ClassDeclaration",
      "start": 1047,
      "end": 1059,
      "id": {
        "type": "Identifier",
        "start": 1053,
        "end": 1055,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1056,
        "end": 1059,
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
      "type": "TSModuleDeclaration",
      "start": 1061,
      "end": 1520,
      "id": {
        "type": "Identifier",
        "start": 1068,
        "end": 1070,
        "name": "m2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1071,
        "end": 1520,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1077,
            "end": 1518,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 1084,
              "end": 1518,
              "id": {
                "type": "Identifier",
                "start": 1091,
                "end": 1093,
                "name": "m3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 1094,
                "end": 1518,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 1105,
                    "end": 1230,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 1112,
                      "end": 1230,
                      "id": {
                        "type": "Identifier",
                        "start": 1118,
                        "end": 1122,
                        "name": "c_pr",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 1154,
                        "end": 1230,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 1168,
                            "end": 1220,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1168,
                              "end": 1170,
                              "name": "f1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "method",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 1170,
                              "end": 1220,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 1173,
                                "end": 1220,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 1191,
                                    "end": 1206,
                                    "argument": {
                                      "type": "Literal",
                                      "start": 1198,
                                      "end": 1205,
                                      "value": "Hello",
                                      "raw": "\"Hello\""
                                    }
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
                      "implements": [
                        {
                          "type": "TSClassImplements",
                          "start": 1135,
                          "end": 1143,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 1135,
                            "end": 1143,
                            "object": {
                              "type": "Identifier",
                              "start": 1135,
                              "end": 1140,
                              "name": "mglo5",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1141,
                              "end": 1143,
                              "name": "i5",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSClassImplements",
                          "start": 1145,
                          "end": 1153,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 1145,
                            "end": 1153,
                            "object": {
                              "type": "Identifier",
                              "start": 1145,
                              "end": 1150,
                              "name": "mglo5",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1151,
                              "end": 1153,
                              "name": "i6",
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
                    "start": 1248,
                    "end": 1511,
                    "id": {
                      "type": "Identifier",
                      "start": 1255,
                      "end": 1257,
                      "name": "m4",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "body": {
                      "type": "TSModuleBlock",
                      "start": 1258,
                      "end": 1511,
                      "body": [
                        {
                          "type": "ClassDeclaration",
                          "start": 1272,
                          "end": 1295,
                          "id": {
                            "type": "Identifier",
                            "start": 1278,
                            "end": 1279,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "superClass": null,
                          "body": {
                            "type": "ClassBody",
                            "start": 1280,
                            "end": 1295,
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
                          "type": "TSModuleDeclaration",
                          "start": 1308,
                          "end": 1501,
                          "id": {
                            "type": "Identifier",
                            "start": 1315,
                            "end": 1317,
                            "name": "m5",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "body": {
                            "type": "TSModuleBlock",
                            "start": 1318,
                            "end": 1501,
                            "body": [
                              {
                                "type": "ExportNamedDeclaration",
                                "start": 1353,
                                "end": 1487,
                                "declaration": {
                                  "type": "TSModuleDeclaration",
                                  "start": 1360,
                                  "end": 1487,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 1367,
                                    "end": 1369,
                                    "name": "m6",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "body": {
                                    "type": "TSModuleBlock",
                                    "start": 1370,
                                    "end": 1487,
                                    "body": [
                                      {
                                        "type": "FunctionDeclaration",
                                        "start": 1392,
                                        "end": 1469,
                                        "id": {
                                          "type": "Identifier",
                                          "start": 1401,
                                          "end": 1403,
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
                                          "start": 1406,
                                          "end": 1469,
                                          "body": [
                                            {
                                              "type": "ReturnStatement",
                                              "start": 1432,
                                              "end": 1447,
                                              "argument": {
                                                "type": "NewExpression",
                                                "start": 1439,
                                                "end": 1446,
                                                "callee": {
                                                  "type": "Identifier",
                                                  "start": 1443,
                                                  "end": 1444,
                                                  "name": "C",
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
              "declare": false,
              "global": false
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
      "start": 1522,
      "end": 1640,
      "id": {
        "type": "Identifier",
        "start": 1529,
        "end": 1534,
        "name": "mglo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1535,
        "end": 1640,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1541,
            "end": 1590,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1548,
              "end": 1590,
              "id": {
                "type": "Identifier",
                "start": 1558,
                "end": 1560,
                "name": "i5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1561,
                "end": 1590,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 1571,
                    "end": 1584,
                    "key": {
                      "type": "Identifier",
                      "start": 1571,
                      "end": 1573,
                      "name": "f1",
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
                      "start": 1575,
                      "end": 1583,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1577,
                        "end": 1583
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
            "start": 1596,
            "end": 1638,
            "id": {
              "type": "Identifier",
              "start": 1606,
              "end": 1608,
              "name": "i6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1609,
              "end": 1638,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 1619,
                  "end": 1632,
                  "key": {
                    "type": "Identifier",
                    "start": 1619,
                    "end": 1621,
                    "name": "f6",
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
                    "start": 1623,
                    "end": 1631,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1625,
                      "end": 1631
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
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
