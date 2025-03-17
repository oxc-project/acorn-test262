__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 2774,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 70,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 62,
        "end": 69,
        "raw": "\"react\"",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 51,
          "end": 56,
          "local": {
            "type": "Identifier",
            "start": 51,
            "end": 56,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 107,
      "end": 451,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 124,
        "end": 451,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 130,
            "end": 163,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 135,
              "end": 146,
              "decorators": [],
              "name": "stringType1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 149,
              "end": 162,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 149,
                  "end": 154,
                  "literal": {
                    "type": "Literal",
                    "start": 149,
                    "end": 154,
                    "raw": "\"foo\"",
                    "value": "foo"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 157,
                  "end": 162,
                  "literal": {
                    "type": "Literal",
                    "start": 157,
                    "end": 162,
                    "raw": "\"bar\"",
                    "value": "bar"
                  }
                }
              ]
            },
            "typeParameters": null
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 168,
            "end": 201,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 173,
              "end": 184,
              "decorators": [],
              "name": "stringType2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 187,
              "end": 200,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 187,
                  "end": 192,
                  "literal": {
                    "type": "Literal",
                    "start": 187,
                    "end": 192,
                    "raw": "\"baz\"",
                    "value": "baz"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 195,
                  "end": 200,
                  "literal": {
                    "type": "Literal",
                    "start": 195,
                    "end": 200,
                    "raw": "\"bar\"",
                    "value": "bar"
                  }
                }
              ]
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 207,
            "end": 275,
            "body": {
              "type": "TSInterfaceBody",
              "start": 223,
              "end": 275,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 233,
                  "end": 269,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 233,
                    "end": 241,
                    "decorators": [],
                    "name": "getValue",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 242,
                      "end": 259,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 246,
                        "end": 259,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 248,
                          "end": 259,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 248,
                            "end": 259,
                            "decorators": [],
                            "name": "stringType1",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 260,
                    "end": 268,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 262,
                      "end": 268
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
              "start": 217,
              "end": 222,
              "decorators": [],
              "name": "Temp1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 281,
            "end": 349,
            "body": {
              "type": "TSInterfaceBody",
              "start": 297,
              "end": 349,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 307,
                  "end": 343,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 307,
                    "end": 315,
                    "decorators": [],
                    "name": "getValue",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 316,
                      "end": 333,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 320,
                        "end": 333,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 322,
                          "end": 333,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 322,
                            "end": 333,
                            "decorators": [],
                            "name": "stringType2",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 334,
                    "end": 342,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 336,
                      "end": 342
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
              "start": 291,
              "end": 296,
              "decorators": [],
              "name": "Temp2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 355,
            "end": 449,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 387,
              "end": 449,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 397,
                  "end": 425,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 403,
                      "end": 424,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 403,
                        "end": 404,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 407,
                        "end": 424,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 418,
                            "end": 423,
                            "raw": "\"bar\"",
                            "value": "bar"
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 407,
                          "end": 417,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 407,
                            "end": 408,
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 409,
                            "end": 417,
                            "decorators": [],
                            "name": "getValue",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 364,
              "end": 368,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 369,
                "end": 385,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 370,
                  "end": 385,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 372,
                    "end": 385,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 372,
                        "end": 377,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 372,
                          "end": 377,
                          "decorators": [],
                          "name": "Temp1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 380,
                        "end": 385,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 380,
                          "end": 385,
                          "decorators": [],
                          "name": "Temp2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 121,
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 453,
      "end": 853,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 470,
        "end": 853,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 476,
            "end": 658,
            "body": {
              "type": "TSInterfaceBody",
              "start": 495,
              "end": 658,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 505,
                  "end": 574,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 514,
                    "end": 517,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": true,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 517,
                    "end": 573,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 519,
                      "end": 573,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 520,
                          "end": 562,
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 527,
                            "end": 562,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 529,
                              "end": 562,
                              "members": [
                                {
                                  "type": "TSIndexSignature",
                                  "start": 531,
                                  "end": 550,
                                  "accessibility": null,
                                  "parameters": [
                                    {
                                      "type": "Identifier",
                                      "start": 532,
                                      "end": 543,
                                      "decorators": [],
                                      "name": "key",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 535,
                                        "end": 543,
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 537,
                                          "end": 543
                                        }
                                      }
                                    }
                                  ],
                                  "readonly": false,
                                  "static": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 544,
                                    "end": 549,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 546,
                                      "end": 549
                                    }
                                  }
                                },
                                {
                                  "type": "TSPropertySignature",
                                  "start": 551,
                                  "end": 560,
                                  "accessibility": null,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 551,
                                    "end": 552,
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "readonly": false,
                                  "static": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 552,
                                    "end": 560,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 554,
                                      "end": 560
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 564,
                        "end": 573,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 567,
                          "end": 573
                        }
                      },
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 583,
                  "end": 652,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 592,
                    "end": 595,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": true,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 595,
                    "end": 651,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 597,
                      "end": 651,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 598,
                          "end": 640,
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 605,
                            "end": 640,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 607,
                              "end": 640,
                              "members": [
                                {
                                  "type": "TSIndexSignature",
                                  "start": 609,
                                  "end": 628,
                                  "accessibility": null,
                                  "parameters": [
                                    {
                                      "type": "Identifier",
                                      "start": 610,
                                      "end": 621,
                                      "decorators": [],
                                      "name": "key",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 613,
                                        "end": 621,
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 615,
                                          "end": 621
                                        }
                                      }
                                    }
                                  ],
                                  "readonly": false,
                                  "static": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 622,
                                    "end": 627,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 624,
                                      "end": 627
                                    }
                                  }
                                },
                                {
                                  "type": "TSPropertySignature",
                                  "start": 629,
                                  "end": 638,
                                  "accessibility": null,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 629,
                                    "end": 630,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "readonly": false,
                                  "static": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 630,
                                    "end": 638,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 632,
                                      "end": 638
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 642,
                        "end": 651,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 645,
                          "end": 651
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 486,
              "end": 494,
              "decorators": [],
              "name": "Messages",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "VariableDeclaration",
            "start": 664,
            "end": 765,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 670,
                "end": 764,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 670,
                  "end": 688,
                  "decorators": [],
                  "name": "messages",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 678,
                    "end": 688,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 680,
                      "end": 688,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 680,
                        "end": 688,
                        "decorators": [],
                        "name": "Messages",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 691,
                  "end": 764,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 701,
                      "end": 724,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 701,
                        "end": 704,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 706,
                        "end": 724,
                        "async": false,
                        "body": {
                          "type": "Literal",
                          "start": 719,
                          "end": 724,
                          "raw": "\"Foo\"",
                          "value": "Foo"
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 707,
                            "end": 714,
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 734,
                      "end": 757,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 734,
                        "end": 737,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 739,
                        "end": 757,
                        "async": false,
                        "body": {
                          "type": "Literal",
                          "start": 752,
                          "end": 757,
                          "raw": "\"Bar\"",
                          "value": "Bar"
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 740,
                            "end": 747,
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 771,
            "end": 851,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 777,
                "end": 850,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 777,
                  "end": 782,
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 785,
                  "end": 850,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 818,
                    "end": 850,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "start": 833,
                        "end": 849,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 835,
                            "end": 841,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 835,
                              "end": 836,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 838,
                              "end": 841,
                              "raw": "\"A\"",
                              "value": "A"
                            }
                          },
                          {
                            "type": "Property",
                            "start": 843,
                            "end": 847,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 843,
                              "end": 844,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 846,
                              "end": 847,
                              "raw": "0",
                              "value": 0
                            }
                          }
                        ]
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 818,
                      "end": 832,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 818,
                        "end": 826,
                        "decorators": [],
                        "name": "messages",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 827,
                        "end": 831,
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 786,
                      "end": 805,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 790,
                        "end": 805,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 792,
                          "end": 805,
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "start": 792,
                              "end": 797,
                              "literal": {
                                "type": "Literal",
                                "start": 792,
                                "end": 797,
                                "raw": "\"foo\"",
                                "value": "foo"
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "start": 800,
                              "end": 805,
                              "literal": {
                                "type": "Literal",
                                "start": 800,
                                "end": 805,
                                "raw": "\"bar\"",
                                "value": "bar"
                              }
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 462,
        "end": 467,
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 855,
      "end": 947,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 898,
        "end": 947,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 904,
            "end": 945,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 904,
              "end": 944,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 918,
                  "end": 943,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 926,
                    "end": 943,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 938,
                        "end": 942,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 926,
                      "end": 937,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 926,
                        "end": 933,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 934,
                        "end": 937,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 918,
                      "end": 922,
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 904,
                "end": 917,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 904,
                  "end": 909,
                  "decorators": [],
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 910,
                  "end": 917,
                  "decorators": [],
                  "name": "forEach",
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 864,
        "end": 869,
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 870,
          "end": 896,
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 875,
            "end": 896,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 877,
              "end": 896,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 877,
                  "end": 885,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 877,
                    "end": 883
                  }
                },
                {
                  "type": "TSArrayType",
                  "start": 888,
                  "end": 896,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 888,
                    "end": 894
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 949,
      "end": 1988,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1528,
        "end": 1988,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1534,
            "end": 1541,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1534,
              "end": 1540,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1534,
                "end": 1538,
                "decorators": [],
                "name": "arg1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1546,
            "end": 1565,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1546,
              "end": 1564,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 1551,
                  "end": 1563,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1552,
                      "end": 1556,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1552,
                        "end": 1553,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1555,
                        "end": 1556,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1558,
                      "end": 1562,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1558,
                        "end": 1559,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1561,
                        "end": 1562,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1546,
                "end": 1550,
                "decorators": [],
                "name": "arg1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1570,
            "end": 1603,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1570,
              "end": 1602,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 1575,
                  "end": 1587,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1576,
                      "end": 1580,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1576,
                        "end": 1577,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1579,
                        "end": 1580,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1582,
                      "end": 1586,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1582,
                        "end": 1583,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1585,
                        "end": 1586,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 1589,
                  "end": 1601,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1590,
                      "end": 1594,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1590,
                        "end": 1591,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1593,
                        "end": 1594,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1596,
                      "end": 1600,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1596,
                        "end": 1597,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1599,
                        "end": 1600,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1570,
                "end": 1574,
                "decorators": [],
                "name": "arg1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1609,
            "end": 1630,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1609,
              "end": 1629,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 1614,
                  "end": 1620,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1615,
                      "end": 1619,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1615,
                        "end": 1616,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1618,
                        "end": 1619,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 1622,
                  "end": 1628,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1623,
                      "end": 1627,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1623,
                        "end": 1624,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1626,
                        "end": 1627,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1609,
                "end": 1613,
                "decorators": [],
                "name": "arg2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1636,
            "end": 1649,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1636,
              "end": 1648,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 1641,
                  "end": 1647,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1642,
                      "end": 1646,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1642,
                        "end": 1643,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1645,
                        "end": 1646,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1636,
                "end": 1640,
                "decorators": [],
                "name": "arg3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1654,
            "end": 1681,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1654,
              "end": 1680,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 1659,
                  "end": 1665,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1660,
                      "end": 1664,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1660,
                        "end": 1661,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1663,
                        "end": 1664,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 1667,
                  "end": 1679,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1668,
                      "end": 1672,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1668,
                        "end": 1669,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1671,
                        "end": 1672,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1674,
                      "end": 1678,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1674,
                        "end": 1675,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1677,
                        "end": 1678,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1654,
                "end": 1658,
                "decorators": [],
                "name": "arg3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1686,
            "end": 1727,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1686,
              "end": 1726,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 1691,
                  "end": 1697,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1692,
                      "end": 1696,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1692,
                        "end": 1693,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1695,
                        "end": 1696,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 1699,
                  "end": 1711,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1700,
                      "end": 1704,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1700,
                        "end": 1701,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1703,
                        "end": 1704,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1706,
                      "end": 1710,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1706,
                        "end": 1707,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1709,
                        "end": 1710,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 1713,
                  "end": 1725,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1714,
                      "end": 1718,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1714,
                        "end": 1715,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1717,
                        "end": 1718,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1720,
                      "end": 1724,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1720,
                        "end": 1721,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1723,
                        "end": 1724,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1686,
                "end": 1690,
                "decorators": [],
                "name": "arg3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1733,
            "end": 1740,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1733,
              "end": 1739,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1733,
                "end": 1737,
                "decorators": [],
                "name": "arg4",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1745,
            "end": 1764,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1745,
              "end": 1763,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 1750,
                  "end": 1762,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1751,
                      "end": 1755,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1751,
                        "end": 1752,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1754,
                        "end": 1755,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1757,
                      "end": 1761,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1757,
                        "end": 1758,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1760,
                        "end": 1761,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1745,
                "end": 1749,
                "decorators": [],
                "name": "arg4",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1769,
            "end": 1796,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1769,
              "end": 1795,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 1774,
                  "end": 1786,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1775,
                      "end": 1779,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1775,
                        "end": 1776,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1778,
                        "end": 1779,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1781,
                      "end": 1785,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1781,
                        "end": 1782,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1784,
                        "end": 1785,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 1788,
                  "end": 1794,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1789,
                      "end": 1793,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1789,
                        "end": 1790,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1792,
                        "end": 1793,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1769,
                "end": 1773,
                "decorators": [],
                "name": "arg4",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1802,
            "end": 1809,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1802,
              "end": 1808,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1802,
                "end": 1806,
                "decorators": [],
                "name": "arg5",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1814,
            "end": 1833,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1814,
              "end": 1832,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 1819,
                  "end": 1831,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1820,
                      "end": 1824,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1820,
                        "end": 1821,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1823,
                        "end": 1824,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1826,
                      "end": 1830,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1826,
                        "end": 1827,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1829,
                        "end": 1830,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1814,
                "end": 1818,
                "decorators": [],
                "name": "arg5",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1838,
            "end": 1865,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1838,
              "end": 1864,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 1843,
                  "end": 1855,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1844,
                      "end": 1848,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1844,
                        "end": 1845,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1847,
                        "end": 1848,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1850,
                      "end": 1854,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1850,
                        "end": 1851,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1853,
                        "end": 1854,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 1857,
                  "end": 1863,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1858,
                      "end": 1862,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1858,
                        "end": 1859,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1861,
                        "end": 1862,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1838,
                "end": 1842,
                "decorators": [],
                "name": "arg5",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1871,
            "end": 1878,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1871,
              "end": 1877,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1871,
                "end": 1875,
                "decorators": [],
                "name": "arg6",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1883,
            "end": 1902,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1883,
              "end": 1901,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 1888,
                  "end": 1900,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1889,
                      "end": 1893,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1889,
                        "end": 1890,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1892,
                        "end": 1893,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1895,
                      "end": 1899,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1895,
                        "end": 1896,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1898,
                        "end": 1899,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1883,
                "end": 1887,
                "decorators": [],
                "name": "arg6",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1907,
            "end": 1940,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1907,
              "end": 1939,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 1912,
                  "end": 1924,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1913,
                      "end": 1917,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1913,
                        "end": 1914,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1916,
                        "end": 1917,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1919,
                      "end": 1923,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1919,
                        "end": 1920,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1922,
                        "end": 1923,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 1926,
                  "end": 1938,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1927,
                      "end": 1931,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1927,
                        "end": 1928,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1930,
                        "end": 1931,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1933,
                      "end": 1937,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1933,
                        "end": 1934,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1936,
                        "end": 1937,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1907,
                "end": 1911,
                "decorators": [],
                "name": "arg6",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1945,
            "end": 1986,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1945,
              "end": 1985,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 1950,
                  "end": 1962,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1951,
                      "end": 1955,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1951,
                        "end": 1952,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1954,
                        "end": 1955,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1957,
                      "end": 1961,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1957,
                        "end": 1958,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1960,
                        "end": 1961,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 1964,
                  "end": 1976,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1965,
                      "end": 1969,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1965,
                        "end": 1966,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1968,
                        "end": 1969,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1971,
                      "end": 1975,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1971,
                        "end": 1972,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1974,
                        "end": 1975,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 1978,
                  "end": 1984,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1979,
                      "end": 1983,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1979,
                        "end": 1980,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1982,
                        "end": 1983,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1945,
                "end": 1949,
                "decorators": [],
                "name": "arg6",
                "optional": false,
                "typeAnnotation": null
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
      "id": {
        "type": "Identifier",
        "start": 958,
        "end": 963,
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 969,
          "end": 1050,
          "decorators": [],
          "name": "arg1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 973,
            "end": 1050,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 975,
              "end": 1050,
              "types": [
                {
                  "type": "TSFunctionType",
                  "start": 976,
                  "end": 1010,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 977,
                      "end": 999,
                      "argument": {
                        "type": "Identifier",
                        "start": 980,
                        "end": 984,
                        "decorators": [],
                        "name": "objs",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 984,
                        "end": 999,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 986,
                          "end": 999,
                          "elementType": {
                            "type": "TSTypeLiteral",
                            "start": 986,
                            "end": 997,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 987,
                                "end": 996,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 987,
                                  "end": 988,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 988,
                                  "end": 996,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 990,
                                    "end": 996
                                  }
                                }
                              }
                            ]
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1001,
                    "end": 1010,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1004,
                      "end": 1010
                    }
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSFunctionType",
                  "start": 1015,
                  "end": 1049,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 1016,
                      "end": 1038,
                      "argument": {
                        "type": "Identifier",
                        "start": 1019,
                        "end": 1023,
                        "decorators": [],
                        "name": "objs",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1023,
                        "end": 1038,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 1025,
                          "end": 1038,
                          "elementType": {
                            "type": "TSTypeLiteral",
                            "start": 1025,
                            "end": 1036,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 1026,
                                "end": 1035,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1026,
                                  "end": 1027,
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1027,
                                  "end": 1035,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1029,
                                    "end": 1035
                                  }
                                }
                              }
                            ]
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1040,
                    "end": 1049,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1043,
                      "end": 1049
                    }
                  },
                  "typeParameters": null
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1056,
          "end": 1143,
          "decorators": [],
          "name": "arg2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1060,
            "end": 1143,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1062,
              "end": 1143,
              "types": [
                {
                  "type": "TSFunctionType",
                  "start": 1063,
                  "end": 1100,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1064,
                      "end": 1078,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1065,
                        "end": 1078,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 1067,
                          "end": 1078,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1068,
                              "end": 1077,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1068,
                                "end": 1069,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1069,
                                "end": 1077,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1071,
                                  "end": 1077
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 1080,
                      "end": 1089,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1081,
                        "end": 1089,
                        "typeAnnotation": {
                          "type": "TSObjectKeyword",
                          "start": 1083,
                          "end": 1089
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1091,
                    "end": 1100,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1094,
                      "end": 1100
                    }
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSFunctionType",
                  "start": 1105,
                  "end": 1142,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1106,
                      "end": 1115,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1107,
                        "end": 1115,
                        "typeAnnotation": {
                          "type": "TSObjectKeyword",
                          "start": 1109,
                          "end": 1115
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 1117,
                      "end": 1131,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1118,
                        "end": 1131,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 1120,
                          "end": 1131,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1121,
                              "end": 1130,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1121,
                                "end": 1122,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1122,
                                "end": 1130,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1124,
                                  "end": 1130
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1133,
                    "end": 1142,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1136,
                      "end": 1142
                    }
                  },
                  "typeParameters": null
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1149,
          "end": 1246,
          "decorators": [],
          "name": "arg3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1153,
            "end": 1246,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1155,
              "end": 1246,
              "types": [
                {
                  "type": "TSFunctionType",
                  "start": 1156,
                  "end": 1206,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1157,
                      "end": 1171,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1158,
                        "end": 1171,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 1160,
                          "end": 1171,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1161,
                              "end": 1170,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1161,
                                "end": 1162,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1162,
                                "end": 1170,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1164,
                                  "end": 1170
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "RestElement",
                      "start": 1173,
                      "end": 1195,
                      "argument": {
                        "type": "Identifier",
                        "start": 1176,
                        "end": 1180,
                        "decorators": [],
                        "name": "objs",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1180,
                        "end": 1195,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 1182,
                          "end": 1195,
                          "elementType": {
                            "type": "TSTypeLiteral",
                            "start": 1182,
                            "end": 1193,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 1183,
                                "end": 1192,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1183,
                                  "end": 1184,
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1184,
                                  "end": 1192,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1186,
                                    "end": 1192
                                  }
                                }
                              }
                            ]
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1197,
                    "end": 1206,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1200,
                      "end": 1206
                    }
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSFunctionType",
                  "start": 1211,
                  "end": 1245,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 1212,
                      "end": 1234,
                      "argument": {
                        "type": "Identifier",
                        "start": 1215,
                        "end": 1219,
                        "decorators": [],
                        "name": "objs",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1219,
                        "end": 1234,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 1221,
                          "end": 1234,
                          "elementType": {
                            "type": "TSTypeLiteral",
                            "start": 1221,
                            "end": 1232,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 1222,
                                "end": 1231,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1222,
                                  "end": 1223,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1223,
                                  "end": 1231,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1225,
                                    "end": 1231
                                  }
                                }
                              }
                            ]
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1236,
                    "end": 1245,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1239,
                      "end": 1245
                    }
                  },
                  "typeParameters": null
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1252,
          "end": 1336,
          "decorators": [],
          "name": "arg4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1256,
            "end": 1336,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1258,
              "end": 1336,
              "types": [
                {
                  "type": "TSFunctionType",
                  "start": 1259,
                  "end": 1303,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1260,
                      "end": 1275,
                      "decorators": [],
                      "name": "a",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1262,
                        "end": 1275,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 1264,
                          "end": 1275,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1265,
                              "end": 1274,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1265,
                                "end": 1266,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1266,
                                "end": 1274,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1268,
                                  "end": 1274
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 1277,
                      "end": 1292,
                      "decorators": [],
                      "name": "b",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1279,
                        "end": 1292,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 1281,
                          "end": 1292,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1282,
                              "end": 1291,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1282,
                                "end": 1283,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1283,
                                "end": 1291,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1285,
                                  "end": 1291
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1294,
                    "end": 1303,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1297,
                      "end": 1303
                    }
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSFunctionType",
                  "start": 1308,
                  "end": 1335,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1309,
                      "end": 1324,
                      "decorators": [],
                      "name": "a",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1311,
                        "end": 1324,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 1313,
                          "end": 1324,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1314,
                              "end": 1323,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1314,
                                "end": 1315,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1315,
                                "end": 1323,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1317,
                                  "end": 1323
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1326,
                    "end": 1335,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1329,
                      "end": 1335
                    }
                  },
                  "typeParameters": null
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1342,
          "end": 1430,
          "decorators": [],
          "name": "arg5",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1346,
            "end": 1430,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1348,
              "end": 1430,
              "types": [
                {
                  "type": "TSFunctionType",
                  "start": 1349,
                  "end": 1397,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1350,
                      "end": 1365,
                      "decorators": [],
                      "name": "a",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1352,
                        "end": 1365,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 1354,
                          "end": 1365,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1355,
                              "end": 1364,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1355,
                                "end": 1356,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1356,
                                "end": 1364,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1358,
                                  "end": 1364
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "RestElement",
                      "start": 1367,
                      "end": 1386,
                      "argument": {
                        "type": "Identifier",
                        "start": 1370,
                        "end": 1371,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1371,
                        "end": 1386,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 1373,
                          "end": 1386,
                          "elementType": {
                            "type": "TSTypeLiteral",
                            "start": 1373,
                            "end": 1384,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 1374,
                                "end": 1383,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1374,
                                  "end": 1375,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1375,
                                  "end": 1383,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1377,
                                    "end": 1383
                                  }
                                }
                              }
                            ]
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1388,
                    "end": 1397,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1391,
                      "end": 1397
                    }
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSFunctionType",
                  "start": 1402,
                  "end": 1429,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1403,
                      "end": 1418,
                      "decorators": [],
                      "name": "a",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1405,
                        "end": 1418,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 1407,
                          "end": 1418,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1408,
                              "end": 1417,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1408,
                                "end": 1409,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1409,
                                "end": 1417,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1411,
                                  "end": 1417
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1420,
                    "end": 1429,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1423,
                      "end": 1429
                    }
                  },
                  "typeParameters": null
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1436,
          "end": 1524,
          "decorators": [],
          "name": "arg6",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1440,
            "end": 1524,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1442,
              "end": 1524,
              "types": [
                {
                  "type": "TSFunctionType",
                  "start": 1443,
                  "end": 1487,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1444,
                      "end": 1459,
                      "decorators": [],
                      "name": "a",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1446,
                        "end": 1459,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 1448,
                          "end": 1459,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1449,
                              "end": 1458,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1449,
                                "end": 1450,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1450,
                                "end": 1458,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1452,
                                  "end": 1458
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 1461,
                      "end": 1476,
                      "decorators": [],
                      "name": "b",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1463,
                        "end": 1476,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 1465,
                          "end": 1476,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1466,
                              "end": 1475,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1466,
                                "end": 1467,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1467,
                                "end": 1475,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1469,
                                  "end": 1475
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1478,
                    "end": 1487,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1481,
                      "end": 1487
                    }
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSFunctionType",
                  "start": 1492,
                  "end": 1523,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 1493,
                      "end": 1512,
                      "argument": {
                        "type": "Identifier",
                        "start": 1496,
                        "end": 1497,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1497,
                        "end": 1512,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 1499,
                          "end": 1512,
                          "elementType": {
                            "type": "TSTypeLiteral",
                            "start": 1499,
                            "end": 1510,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 1500,
                                "end": 1509,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1500,
                                  "end": 1501,
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1501,
                                  "end": 1509,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1503,
                                    "end": 1509
                                  }
                                }
                              }
                            ]
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1514,
                    "end": 1523,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1517,
                      "end": 1523
                    }
                  },
                  "typeParameters": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2007,
      "end": 2773,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2024,
        "end": 2773,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 2065,
            "end": 2193,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 2112,
              "end": 2193,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2122,
                  "end": 2155,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2128,
                      "end": 2154,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2128,
                        "end": 2131,
                        "decorators": [],
                        "name": "Tag",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 2134,
                        "end": 2154,
                        "alternate": {
                          "type": "Literal",
                          "start": 2146,
                          "end": 2154,
                          "raw": "'button'",
                          "value": "button"
                        },
                        "consequent": {
                          "type": "Literal",
                          "start": 2140,
                          "end": 2143,
                          "raw": "'a'",
                          "value": "a"
                        },
                        "test": {
                          "type": "Identifier",
                          "start": 2134,
                          "end": 2137,
                          "decorators": [],
                          "name": "url",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ReturnStatement",
                  "start": 2164,
                  "end": 2187,
                  "argument": {
                    "type": "JSXElement",
                    "start": 2171,
                    "end": 2186,
                    "children": [
                      {
                        "type": "JSXText",
                        "start": 2176,
                        "end": 2180,
                        "raw": "test",
                        "value": "test"
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "start": 2180,
                      "end": 2186,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 2182,
                        "end": 2185,
                        "name": "Tag"
                      }
                    },
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 2171,
                      "end": 2176,
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 2172,
                        "end": 2175,
                        "name": "Tag"
                      },
                      "selfClosing": false,
                      "typeArguments": null
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 2074,
              "end": 2080,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 2081,
                "end": 2093,
                "decorators": [],
                "name": "url",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2085,
                  "end": 2093,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2087,
                    "end": 2093
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2094,
              "end": 2111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2096,
                "end": 2111,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2096,
                  "end": 2111,
                  "left": {
                    "type": "Identifier",
                    "start": 2096,
                    "end": 2101,
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2102,
                    "end": 2111,
                    "decorators": [],
                    "name": "ReactNode",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "typeParameters": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 2254,
            "end": 2394,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 2305,
              "end": 2394,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2315,
                  "end": 2361,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2321,
                      "end": 2360,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2321,
                        "end": 2342,
                        "decorators": [],
                        "name": "Comp",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2325,
                          "end": 2342,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2327,
                            "end": 2342,
                            "typeArguments": null,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 2327,
                              "end": 2342,
                              "left": {
                                "type": "Identifier",
                                "start": 2327,
                                "end": 2332,
                                "decorators": [],
                                "name": "React",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 2333,
                                "end": 2342,
                                "decorators": [],
                                "name": "ReactType",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 2345,
                        "end": 2360,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 2345,
                          "end": 2350,
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2351,
                          "end": 2360,
                          "decorators": [],
                          "name": "component",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ReturnStatement",
                  "start": 2370,
                  "end": 2388,
                  "argument": {
                    "type": "JSXElement",
                    "start": 2378,
                    "end": 2386,
                    "children": [],
                    "closingElement": null,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 2378,
                      "end": 2386,
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 2379,
                        "end": 2383,
                        "name": "Comp"
                      },
                      "selfClosing": true,
                      "typeArguments": null
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 2263,
              "end": 2266,
              "decorators": [],
              "name": "App",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 2267,
                "end": 2303,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2272,
                  "end": 2303,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 2274,
                    "end": 2303,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2276,
                        "end": 2301,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2276,
                          "end": 2285,
                          "decorators": [],
                          "name": "component",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2285,
                          "end": 2301,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2286,
                            "end": 2301,
                            "typeArguments": null,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 2286,
                              "end": 2301,
                              "left": {
                                "type": "Identifier",
                                "start": 2286,
                                "end": 2291,
                                "decorators": [],
                                "name": "React",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 2292,
                                "end": 2301,
                                "decorators": [],
                                "name": "ReactType",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 2447,
            "end": 2771,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 2466,
              "end": 2771,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 2476,
                  "end": 2549,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 2489,
                    "end": 2549,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2503,
                        "end": 2515,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2503,
                          "end": 2504,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2505,
                          "end": 2514,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2507,
                            "end": 2514
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 2528,
                        "end": 2539,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2528,
                          "end": 2529,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2530,
                          "end": 2538,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2532,
                            "end": 2538
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 2486,
                    "end": 2488,
                    "decorators": [],
                    "name": "P1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 2558,
                  "end": 2649,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 2571,
                    "end": 2649,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2585,
                        "end": 2597,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2585,
                          "end": 2586,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2587,
                          "end": 2596,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2589,
                            "end": 2596
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 2610,
                        "end": 2618,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2610,
                          "end": 2611,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2612,
                          "end": 2617,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2614,
                            "end": 2617
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 2631,
                        "end": 2639,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2631,
                          "end": 2632,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2633,
                          "end": 2638,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2635,
                            "end": 2638
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 2568,
                    "end": 2570,
                    "decorators": [],
                    "name": "P2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2659,
                  "end": 2730,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2663,
                      "end": 2729,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2663,
                        "end": 2715,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2664,
                          "end": 2715,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 2666,
                            "end": 2715,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 2666,
                                "end": 2689,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 2685,
                                  "end": 2689,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 2686,
                                      "end": 2688,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2686,
                                        "end": 2688,
                                        "decorators": [],
                                        "name": "P1",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 2666,
                                  "end": 2685,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 2666,
                                    "end": 2671,
                                    "decorators": [],
                                    "name": "React",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 2672,
                                    "end": 2685,
                                    "decorators": [],
                                    "name": "ComponentType",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 2692,
                                "end": 2715,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 2711,
                                  "end": 2715,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 2712,
                                      "end": 2714,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2712,
                                        "end": 2714,
                                        "decorators": [],
                                        "name": "P2",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 2692,
                                  "end": 2711,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 2692,
                                    "end": 2697,
                                    "decorators": [],
                                    "name": "React",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 2698,
                                    "end": 2711,
                                    "decorators": [],
                                    "name": "ComponentType",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            ]
                          }
                        }
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "start": 2718,
                        "end": 2729,
                        "expression": {
                          "type": "Literal",
                          "start": 2718,
                          "end": 2722,
                          "raw": "null",
                          "value": null
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2726,
                          "end": 2729
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2740,
                  "end": 2765,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2746,
                      "end": 2764,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2746,
                        "end": 2747,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "JSXElement",
                        "start": 2750,
                        "end": 2764,
                        "children": [],
                        "closingElement": null,
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "start": 2750,
                          "end": 2764,
                          "attributes": [
                            {
                              "type": "JSXAttribute",
                              "start": 2753,
                              "end": 2761,
                              "name": {
                                "type": "JSXIdentifier",
                                "start": 2753,
                                "end": 2754,
                                "name": "p"
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "start": 2755,
                                "end": 2761,
                                "expression": {
                                  "type": "Literal",
                                  "start": 2756,
                                  "end": 2760,
                                  "raw": "true",
                                  "value": true
                                }
                              }
                            }
                          ],
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 2751,
                            "end": 2752,
                            "name": "C"
                          },
                          "selfClosing": true,
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 2456,
              "end": 2463,
              "decorators": [],
              "name": "render2",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2016,
        "end": 2021,
        "decorators": [],
        "name": "test5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
