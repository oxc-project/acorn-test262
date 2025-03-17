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
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 51,
          "end": 56,
          "local": {
            "type": "Identifier",
            "start": 51,
            "end": 56,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 62,
        "end": 69,
        "value": "react",
        "raw": "\"react\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 107,
      "end": 451,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 121,
        "name": "test1",
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
        "start": 124,
        "end": 451,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 130,
            "end": 163,
            "id": {
              "type": "Identifier",
              "start": 135,
              "end": 146,
              "name": "stringType1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
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
                    "value": "foo",
                    "raw": "\"foo\""
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
                    "value": "bar",
                    "raw": "\"bar\""
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 168,
            "end": 201,
            "id": {
              "type": "Identifier",
              "start": 173,
              "end": 184,
              "name": "stringType2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
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
                    "value": "baz",
                    "raw": "\"baz\""
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
                    "value": "bar",
                    "raw": "\"bar\""
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 207,
            "end": 275,
            "id": {
              "type": "Identifier",
              "start": 217,
              "end": 222,
              "name": "Temp1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 223,
              "end": 275,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 233,
                  "end": 269,
                  "key": {
                    "type": "Identifier",
                    "start": 233,
                    "end": 241,
                    "name": "getValue",
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
                      "start": 242,
                      "end": 259,
                      "name": "name",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 246,
                        "end": 259,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 248,
                          "end": 259,
                          "typeName": {
                            "type": "Identifier",
                            "start": 248,
                            "end": 259,
                            "name": "stringType1",
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
                    "start": 260,
                    "end": 268,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 262,
                      "end": 268
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
            "start": 281,
            "end": 349,
            "id": {
              "type": "Identifier",
              "start": 291,
              "end": 296,
              "name": "Temp2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 297,
              "end": 349,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 307,
                  "end": 343,
                  "key": {
                    "type": "Identifier",
                    "start": 307,
                    "end": 315,
                    "name": "getValue",
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
                      "start": 316,
                      "end": 333,
                      "name": "name",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 320,
                        "end": 333,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 322,
                          "end": 333,
                          "typeName": {
                            "type": "Identifier",
                            "start": 322,
                            "end": 333,
                            "name": "stringType2",
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
                    "start": 334,
                    "end": 342,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 336,
                      "end": 342
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
            "type": "FunctionDeclaration",
            "start": 355,
            "end": 449,
            "id": {
              "type": "Identifier",
              "start": 364,
              "end": 368,
              "name": "test",
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
                "start": 369,
                "end": 385,
                "name": "t",
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 372,
                          "end": 377,
                          "name": "Temp1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 380,
                        "end": 385,
                        "typeName": {
                          "type": "Identifier",
                          "start": 380,
                          "end": 385,
                          "name": "Temp2",
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
              }
            ],
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
                      "id": {
                        "type": "Identifier",
                        "start": 403,
                        "end": 404,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 407,
                        "end": 424,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 407,
                          "end": 417,
                          "object": {
                            "type": "Identifier",
                            "start": 407,
                            "end": 408,
                            "name": "t",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 409,
                            "end": 417,
                            "name": "getValue",
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
                            "start": 418,
                            "end": 423,
                            "value": "bar",
                            "raw": "\"bar\""
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 453,
      "end": 853,
      "id": {
        "type": "Identifier",
        "start": 462,
        "end": 467,
        "name": "test2",
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
        "start": 470,
        "end": 853,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 476,
            "end": 658,
            "id": {
              "type": "Identifier",
              "start": 486,
              "end": 494,
              "name": "Messages",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 495,
              "end": 658,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 505,
                  "end": 574,
                  "computed": false,
                  "optional": false,
                  "readonly": true,
                  "key": {
                    "type": "Identifier",
                    "start": 514,
                    "end": 517,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 517,
                    "end": 573,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 519,
                      "end": 573,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 520,
                          "end": 562,
                          "name": "options",
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
                                  "parameters": [
                                    {
                                      "type": "Identifier",
                                      "start": 532,
                                      "end": 543,
                                      "name": "key",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 535,
                                        "end": 543,
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 537,
                                          "end": 543
                                        }
                                      },
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 544,
                                    "end": 549,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 546,
                                      "end": 549
                                    }
                                  },
                                  "readonly": false,
                                  "static": false,
                                  "accessibility": null
                                },
                                {
                                  "type": "TSPropertySignature",
                                  "start": 551,
                                  "end": 560,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 551,
                                    "end": 552,
                                    "name": "b",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 552,
                                    "end": 560,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 554,
                                      "end": 560
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 564,
                        "end": 573,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 567,
                          "end": 573
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 583,
                  "end": 652,
                  "computed": false,
                  "optional": false,
                  "readonly": true,
                  "key": {
                    "type": "Identifier",
                    "start": 592,
                    "end": 595,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 595,
                    "end": 651,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 597,
                      "end": 651,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 598,
                          "end": 640,
                          "name": "options",
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
                                  "parameters": [
                                    {
                                      "type": "Identifier",
                                      "start": 610,
                                      "end": 621,
                                      "name": "key",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 613,
                                        "end": 621,
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 615,
                                          "end": 621
                                        }
                                      },
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 622,
                                    "end": 627,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 624,
                                      "end": 627
                                    }
                                  },
                                  "readonly": false,
                                  "static": false,
                                  "accessibility": null
                                },
                                {
                                  "type": "TSPropertySignature",
                                  "start": 629,
                                  "end": 638,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 629,
                                    "end": 630,
                                    "name": "a",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 630,
                                    "end": 638,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 632,
                                      "end": 638
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 642,
                        "end": 651,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 645,
                          "end": 651
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
            "start": 664,
            "end": 765,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 670,
                "end": 764,
                "id": {
                  "type": "Identifier",
                  "start": 670,
                  "end": 688,
                  "name": "messages",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 678,
                    "end": 688,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 680,
                      "end": 688,
                      "typeName": {
                        "type": "Identifier",
                        "start": 680,
                        "end": 688,
                        "name": "Messages",
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
                  "start": 691,
                  "end": 764,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 701,
                      "end": 724,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 701,
                        "end": 704,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 706,
                        "end": 724,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 707,
                            "end": 714,
                            "name": "options",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "Literal",
                          "start": 719,
                          "end": 724,
                          "value": "Foo",
                          "raw": "\"Foo\""
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 734,
                      "end": 757,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 734,
                        "end": 737,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 739,
                        "end": 757,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 740,
                            "end": 747,
                            "name": "options",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "Literal",
                          "start": 752,
                          "end": 757,
                          "value": "Bar",
                          "raw": "\"Bar\""
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 777,
                  "end": 782,
                  "name": "test1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 785,
                  "end": 850,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 786,
                      "end": 805,
                      "name": "type",
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
                                "value": "foo",
                                "raw": "\"foo\""
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
                                "value": "bar",
                                "raw": "\"bar\""
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
                    "type": "CallExpression",
                    "start": 818,
                    "end": 850,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 818,
                      "end": 832,
                      "object": {
                        "type": "Identifier",
                        "start": 818,
                        "end": 826,
                        "name": "messages",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 827,
                        "end": 831,
                        "name": "type",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": true,
                      "optional": false
                    },
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 835,
                              "end": 836,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 838,
                              "end": 841,
                              "value": "A",
                              "raw": "\"A\""
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 843,
                            "end": 847,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 843,
                              "end": 844,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 846,
                              "end": 847,
                              "value": 0,
                              "raw": "0"
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
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 855,
      "end": 947,
      "id": {
        "type": "Identifier",
        "start": 864,
        "end": 869,
        "name": "test3",
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
          "start": 870,
          "end": 896,
          "name": "items",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 898,
        "end": 947,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 904,
            "end": 945,
            "expression": {
              "type": "CallExpression",
              "start": 904,
              "end": 944,
              "callee": {
                "type": "MemberExpression",
                "start": 904,
                "end": 917,
                "object": {
                  "type": "Identifier",
                  "start": 904,
                  "end": 909,
                  "name": "items",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 910,
                  "end": 917,
                  "name": "forEach",
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
                  "start": 918,
                  "end": 943,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 918,
                      "end": 922,
                      "name": "item",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "CallExpression",
                    "start": 926,
                    "end": 943,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 926,
                      "end": 937,
                      "object": {
                        "type": "Identifier",
                        "start": 926,
                        "end": 933,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 934,
                        "end": 937,
                        "name": "log",
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
                        "start": 938,
                        "end": 942,
                        "name": "item",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "typeParameters": null,
                  "returnType": null
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
    {
      "type": "FunctionDeclaration",
      "start": 949,
      "end": 1988,
      "id": {
        "type": "Identifier",
        "start": 958,
        "end": 963,
        "name": "test4",
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
          "start": 969,
          "end": 1050,
          "name": "arg1",
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
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 977,
                      "end": 999,
                      "argument": {
                        "type": "Identifier",
                        "start": 980,
                        "end": 984,
                        "name": "objs",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 987,
                                  "end": 988,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 988,
                                  "end": 996,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 990,
                                    "end": 996
                                  }
                                },
                                "accessibility": null,
                                "static": false
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
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 1015,
                  "end": 1049,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 1016,
                      "end": 1038,
                      "argument": {
                        "type": "Identifier",
                        "start": 1019,
                        "end": 1023,
                        "name": "objs",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1026,
                                  "end": 1027,
                                  "name": "y",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1027,
                                  "end": 1035,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1029,
                                    "end": 1035
                                  }
                                },
                                "accessibility": null,
                                "static": false
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
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1056,
          "end": 1143,
          "name": "arg2",
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
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1064,
                      "end": 1078,
                      "name": "a",
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1068,
                                "end": 1069,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1069,
                                "end": 1077,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1071,
                                  "end": 1077
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
                    },
                    {
                      "type": "Identifier",
                      "start": 1080,
                      "end": 1089,
                      "name": "b",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1081,
                        "end": 1089,
                        "typeAnnotation": {
                          "type": "TSObjectKeyword",
                          "start": 1083,
                          "end": 1089
                        }
                      },
                      "decorators": [],
                      "optional": false
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
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 1105,
                  "end": 1142,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1106,
                      "end": 1115,
                      "name": "a",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1107,
                        "end": 1115,
                        "typeAnnotation": {
                          "type": "TSObjectKeyword",
                          "start": 1109,
                          "end": 1115
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1117,
                      "end": 1131,
                      "name": "b",
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1121,
                                "end": 1122,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1122,
                                "end": 1130,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1124,
                                  "end": 1130
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
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1133,
                    "end": 1142,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1136,
                      "end": 1142
                    }
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1149,
          "end": 1246,
          "name": "arg3",
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
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1157,
                      "end": 1171,
                      "name": "a",
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1161,
                                "end": 1162,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1162,
                                "end": 1170,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1164,
                                  "end": 1170
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
                    },
                    {
                      "type": "RestElement",
                      "start": 1173,
                      "end": 1195,
                      "argument": {
                        "type": "Identifier",
                        "start": 1176,
                        "end": 1180,
                        "name": "objs",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1183,
                                  "end": 1184,
                                  "name": "y",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1184,
                                  "end": 1192,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1186,
                                    "end": 1192
                                  }
                                },
                                "accessibility": null,
                                "static": false
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
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 1211,
                  "end": 1245,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 1212,
                      "end": 1234,
                      "argument": {
                        "type": "Identifier",
                        "start": 1215,
                        "end": 1219,
                        "name": "objs",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1222,
                                  "end": 1223,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1223,
                                  "end": 1231,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1225,
                                    "end": 1231
                                  }
                                },
                                "accessibility": null,
                                "static": false
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
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1252,
          "end": 1336,
          "name": "arg4",
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
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1260,
                      "end": 1275,
                      "name": "a",
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1265,
                                "end": 1266,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1266,
                                "end": 1274,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1268,
                                  "end": 1274
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      },
                      "decorators": [],
                      "optional": true
                    },
                    {
                      "type": "Identifier",
                      "start": 1277,
                      "end": 1292,
                      "name": "b",
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1282,
                                "end": 1283,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1283,
                                "end": 1291,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1285,
                                  "end": 1291
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      },
                      "decorators": [],
                      "optional": true
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
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 1308,
                  "end": 1335,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1309,
                      "end": 1324,
                      "name": "a",
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1314,
                                "end": 1315,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1315,
                                "end": 1323,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1317,
                                  "end": 1323
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      },
                      "decorators": [],
                      "optional": true
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
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1342,
          "end": 1430,
          "name": "arg5",
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
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1350,
                      "end": 1365,
                      "name": "a",
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1355,
                                "end": 1356,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1356,
                                "end": 1364,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1358,
                                  "end": 1364
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      },
                      "decorators": [],
                      "optional": true
                    },
                    {
                      "type": "RestElement",
                      "start": 1367,
                      "end": 1386,
                      "argument": {
                        "type": "Identifier",
                        "start": 1370,
                        "end": 1371,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1374,
                                  "end": 1375,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1375,
                                  "end": 1383,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1377,
                                    "end": 1383
                                  }
                                },
                                "accessibility": null,
                                "static": false
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
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 1402,
                  "end": 1429,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1403,
                      "end": 1418,
                      "name": "a",
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1408,
                                "end": 1409,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1409,
                                "end": 1417,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1411,
                                  "end": 1417
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      },
                      "decorators": [],
                      "optional": true
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
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1436,
          "end": 1524,
          "name": "arg6",
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
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1444,
                      "end": 1459,
                      "name": "a",
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1449,
                                "end": 1450,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1450,
                                "end": 1458,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1452,
                                  "end": 1458
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      },
                      "decorators": [],
                      "optional": true
                    },
                    {
                      "type": "Identifier",
                      "start": 1461,
                      "end": 1476,
                      "name": "b",
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1466,
                                "end": 1467,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1467,
                                "end": 1475,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1469,
                                  "end": 1475
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      },
                      "decorators": [],
                      "optional": true
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
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 1492,
                  "end": 1523,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 1493,
                      "end": 1512,
                      "argument": {
                        "type": "Identifier",
                        "start": 1496,
                        "end": 1497,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1500,
                                  "end": 1501,
                                  "name": "y",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1501,
                                  "end": 1509,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1503,
                                    "end": 1509
                                  }
                                },
                                "accessibility": null,
                                "static": false
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
        "start": 1528,
        "end": 1988,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1534,
            "end": 1541,
            "expression": {
              "type": "CallExpression",
              "start": 1534,
              "end": 1540,
              "callee": {
                "type": "Identifier",
                "start": 1534,
                "end": 1538,
                "name": "arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1546,
            "end": 1565,
            "expression": {
              "type": "CallExpression",
              "start": 1546,
              "end": 1564,
              "callee": {
                "type": "Identifier",
                "start": 1546,
                "end": 1550,
                "name": "arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1552,
                        "end": 1553,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1555,
                        "end": 1556,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1558,
                      "end": 1562,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1558,
                        "end": 1559,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1561,
                        "end": 1562,
                        "value": 0,
                        "raw": "0"
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1570,
            "end": 1603,
            "expression": {
              "type": "CallExpression",
              "start": 1570,
              "end": 1602,
              "callee": {
                "type": "Identifier",
                "start": 1570,
                "end": 1574,
                "name": "arg1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1576,
                        "end": 1577,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1579,
                        "end": 1580,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1582,
                      "end": 1586,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1582,
                        "end": 1583,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1585,
                        "end": 1586,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1590,
                        "end": 1591,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1593,
                        "end": 1594,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1596,
                      "end": 1600,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1596,
                        "end": 1597,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1599,
                        "end": 1600,
                        "value": 1,
                        "raw": "1"
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1609,
            "end": 1630,
            "expression": {
              "type": "CallExpression",
              "start": 1609,
              "end": 1629,
              "callee": {
                "type": "Identifier",
                "start": 1609,
                "end": 1613,
                "name": "arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1615,
                        "end": 1616,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1618,
                        "end": 1619,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1623,
                        "end": 1624,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1626,
                        "end": 1627,
                        "value": 0,
                        "raw": "0"
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1636,
            "end": 1649,
            "expression": {
              "type": "CallExpression",
              "start": 1636,
              "end": 1648,
              "callee": {
                "type": "Identifier",
                "start": 1636,
                "end": 1640,
                "name": "arg3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1642,
                        "end": 1643,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1645,
                        "end": 1646,
                        "value": 0,
                        "raw": "0"
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1654,
            "end": 1681,
            "expression": {
              "type": "CallExpression",
              "start": 1654,
              "end": 1680,
              "callee": {
                "type": "Identifier",
                "start": 1654,
                "end": 1658,
                "name": "arg3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1660,
                        "end": 1661,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1663,
                        "end": 1664,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1668,
                        "end": 1669,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1671,
                        "end": 1672,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1674,
                      "end": 1678,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1674,
                        "end": 1675,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1677,
                        "end": 1678,
                        "value": 0,
                        "raw": "0"
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1686,
            "end": 1727,
            "expression": {
              "type": "CallExpression",
              "start": 1686,
              "end": 1726,
              "callee": {
                "type": "Identifier",
                "start": 1686,
                "end": 1690,
                "name": "arg3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1692,
                        "end": 1693,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1695,
                        "end": 1696,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1700,
                        "end": 1701,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1703,
                        "end": 1704,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1706,
                      "end": 1710,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1706,
                        "end": 1707,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1709,
                        "end": 1710,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1714,
                        "end": 1715,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1717,
                        "end": 1718,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1720,
                      "end": 1724,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1720,
                        "end": 1721,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1723,
                        "end": 1724,
                        "value": 0,
                        "raw": "0"
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1733,
            "end": 1740,
            "expression": {
              "type": "CallExpression",
              "start": 1733,
              "end": 1739,
              "callee": {
                "type": "Identifier",
                "start": 1733,
                "end": 1737,
                "name": "arg4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1745,
            "end": 1764,
            "expression": {
              "type": "CallExpression",
              "start": 1745,
              "end": 1763,
              "callee": {
                "type": "Identifier",
                "start": 1745,
                "end": 1749,
                "name": "arg4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1751,
                        "end": 1752,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1754,
                        "end": 1755,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1757,
                      "end": 1761,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1757,
                        "end": 1758,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1760,
                        "end": 1761,
                        "value": 0,
                        "raw": "0"
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1769,
            "end": 1796,
            "expression": {
              "type": "CallExpression",
              "start": 1769,
              "end": 1795,
              "callee": {
                "type": "Identifier",
                "start": 1769,
                "end": 1773,
                "name": "arg4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1775,
                        "end": 1776,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1778,
                        "end": 1779,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1781,
                      "end": 1785,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1781,
                        "end": 1782,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1784,
                        "end": 1785,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1789,
                        "end": 1790,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1792,
                        "end": 1793,
                        "value": 0,
                        "raw": "0"
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1802,
            "end": 1809,
            "expression": {
              "type": "CallExpression",
              "start": 1802,
              "end": 1808,
              "callee": {
                "type": "Identifier",
                "start": 1802,
                "end": 1806,
                "name": "arg5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1814,
            "end": 1833,
            "expression": {
              "type": "CallExpression",
              "start": 1814,
              "end": 1832,
              "callee": {
                "type": "Identifier",
                "start": 1814,
                "end": 1818,
                "name": "arg5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1820,
                        "end": 1821,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1823,
                        "end": 1824,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1826,
                      "end": 1830,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1826,
                        "end": 1827,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1829,
                        "end": 1830,
                        "value": 0,
                        "raw": "0"
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1838,
            "end": 1865,
            "expression": {
              "type": "CallExpression",
              "start": 1838,
              "end": 1864,
              "callee": {
                "type": "Identifier",
                "start": 1838,
                "end": 1842,
                "name": "arg5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1844,
                        "end": 1845,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1847,
                        "end": 1848,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1850,
                      "end": 1854,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1850,
                        "end": 1851,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1853,
                        "end": 1854,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1858,
                        "end": 1859,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1861,
                        "end": 1862,
                        "value": 0,
                        "raw": "0"
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1871,
            "end": 1878,
            "expression": {
              "type": "CallExpression",
              "start": 1871,
              "end": 1877,
              "callee": {
                "type": "Identifier",
                "start": 1871,
                "end": 1875,
                "name": "arg6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1883,
            "end": 1902,
            "expression": {
              "type": "CallExpression",
              "start": 1883,
              "end": 1901,
              "callee": {
                "type": "Identifier",
                "start": 1883,
                "end": 1887,
                "name": "arg6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1889,
                        "end": 1890,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1892,
                        "end": 1893,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1895,
                      "end": 1899,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1895,
                        "end": 1896,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1898,
                        "end": 1899,
                        "value": 0,
                        "raw": "0"
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1907,
            "end": 1940,
            "expression": {
              "type": "CallExpression",
              "start": 1907,
              "end": 1939,
              "callee": {
                "type": "Identifier",
                "start": 1907,
                "end": 1911,
                "name": "arg6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1913,
                        "end": 1914,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1916,
                        "end": 1917,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1919,
                      "end": 1923,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1919,
                        "end": 1920,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1922,
                        "end": 1923,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1927,
                        "end": 1928,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1930,
                        "end": 1931,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1933,
                      "end": 1937,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1933,
                        "end": 1934,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1936,
                        "end": 1937,
                        "value": 0,
                        "raw": "0"
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1945,
            "end": 1986,
            "expression": {
              "type": "CallExpression",
              "start": 1945,
              "end": 1985,
              "callee": {
                "type": "Identifier",
                "start": 1945,
                "end": 1949,
                "name": "arg6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1951,
                        "end": 1952,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1954,
                        "end": 1955,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1957,
                      "end": 1961,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1957,
                        "end": 1958,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1960,
                        "end": 1961,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1965,
                        "end": 1966,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1968,
                        "end": 1969,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1971,
                      "end": 1975,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1971,
                        "end": 1972,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1974,
                        "end": 1975,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1979,
                        "end": 1980,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1982,
                        "end": 1983,
                        "value": 0,
                        "raw": "0"
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
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2007,
      "end": 2773,
      "id": {
        "type": "Identifier",
        "start": 2016,
        "end": 2021,
        "name": "test5",
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
        "start": 2024,
        "end": 2773,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 2065,
            "end": 2193,
            "id": {
              "type": "Identifier",
              "start": 2074,
              "end": 2080,
              "name": "render",
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
                "start": 2081,
                "end": 2093,
                "name": "url",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2085,
                  "end": 2093,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2087,
                    "end": 2093
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
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
                      "id": {
                        "type": "Identifier",
                        "start": 2128,
                        "end": 2131,
                        "name": "Tag",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 2134,
                        "end": 2154,
                        "test": {
                          "type": "Identifier",
                          "start": 2134,
                          "end": 2137,
                          "name": "url",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "consequent": {
                          "type": "Literal",
                          "start": 2140,
                          "end": 2143,
                          "value": "a",
                          "raw": "'a'"
                        },
                        "alternate": {
                          "type": "Literal",
                          "start": 2146,
                          "end": 2154,
                          "value": "button",
                          "raw": "'button'"
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 2164,
                  "end": 2187,
                  "argument": {
                    "type": "JSXElement",
                    "start": 2171,
                    "end": 2186,
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
                    },
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
                    "children": [
                      {
                        "type": "JSXText",
                        "start": 2176,
                        "end": 2180,
                        "value": "test",
                        "raw": "test"
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2094,
              "end": 2111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2096,
                "end": 2111,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2096,
                  "end": 2111,
                  "left": {
                    "type": "Identifier",
                    "start": 2096,
                    "end": 2101,
                    "name": "React",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2102,
                    "end": 2111,
                    "name": "ReactNode",
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
            "type": "FunctionDeclaration",
            "start": 2254,
            "end": 2394,
            "id": {
              "type": "Identifier",
              "start": 2263,
              "end": 2266,
              "name": "App",
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
                "start": 2267,
                "end": 2303,
                "name": "props",
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2276,
                          "end": 2285,
                          "name": "component",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2285,
                          "end": 2301,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2286,
                            "end": 2301,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 2286,
                              "end": 2301,
                              "left": {
                                "type": "Identifier",
                                "start": 2286,
                                "end": 2291,
                                "name": "React",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 2292,
                                "end": 2301,
                                "name": "ReactType",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
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
                      "id": {
                        "type": "Identifier",
                        "start": 2321,
                        "end": 2342,
                        "name": "Comp",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2325,
                          "end": 2342,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2327,
                            "end": 2342,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 2327,
                              "end": 2342,
                              "left": {
                                "type": "Identifier",
                                "start": 2327,
                                "end": 2332,
                                "name": "React",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 2333,
                                "end": 2342,
                                "name": "ReactType",
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
                      "init": {
                        "type": "MemberExpression",
                        "start": 2345,
                        "end": 2360,
                        "object": {
                          "type": "Identifier",
                          "start": 2345,
                          "end": 2350,
                          "name": "props",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2351,
                          "end": 2360,
                          "name": "component",
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
                },
                {
                  "type": "ReturnStatement",
                  "start": 2370,
                  "end": 2388,
                  "argument": {
                    "type": "JSXElement",
                    "start": 2378,
                    "end": 2386,
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
                    },
                    "closingElement": null,
                    "children": []
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 2447,
            "end": 2771,
            "id": {
              "type": "Identifier",
              "start": 2456,
              "end": 2463,
              "name": "render2",
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
              "start": 2466,
              "end": 2771,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 2476,
                  "end": 2549,
                  "id": {
                    "type": "Identifier",
                    "start": 2486,
                    "end": 2488,
                    "name": "P1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 2489,
                    "end": 2549,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2503,
                        "end": 2515,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2503,
                          "end": 2504,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2505,
                          "end": 2514,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2507,
                            "end": 2514
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 2528,
                        "end": 2539,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2528,
                          "end": 2529,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2530,
                          "end": 2538,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2532,
                            "end": 2538
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
                  "start": 2558,
                  "end": 2649,
                  "id": {
                    "type": "Identifier",
                    "start": 2568,
                    "end": 2570,
                    "name": "P2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 2571,
                    "end": 2649,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2585,
                        "end": 2597,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2585,
                          "end": 2586,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2587,
                          "end": 2596,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2589,
                            "end": 2596
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 2610,
                        "end": 2618,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2610,
                          "end": 2611,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2612,
                          "end": 2617,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2614,
                            "end": 2617
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 2631,
                        "end": 2639,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2631,
                          "end": 2632,
                          "name": "d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2633,
                          "end": 2638,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2635,
                            "end": 2638
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
                  "start": 2659,
                  "end": 2730,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2663,
                      "end": 2729,
                      "id": {
                        "type": "Identifier",
                        "start": 2663,
                        "end": 2715,
                        "name": "C",
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
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 2666,
                                  "end": 2685,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 2666,
                                    "end": 2671,
                                    "name": "React",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 2672,
                                    "end": 2685,
                                    "name": "ComponentType",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 2685,
                                  "end": 2689,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 2686,
                                      "end": 2688,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2686,
                                        "end": 2688,
                                        "name": "P1",
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
                                "type": "TSTypeReference",
                                "start": 2692,
                                "end": 2715,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 2692,
                                  "end": 2711,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 2692,
                                    "end": 2697,
                                    "name": "React",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 2698,
                                    "end": 2711,
                                    "name": "ComponentType",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 2711,
                                  "end": 2715,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 2712,
                                      "end": 2714,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2712,
                                        "end": 2714,
                                        "name": "P2",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "start": 2718,
                        "end": 2729,
                        "expression": {
                          "type": "Literal",
                          "start": 2718,
                          "end": 2722,
                          "value": null,
                          "raw": "null"
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2726,
                          "end": 2729
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
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
                      "id": {
                        "type": "Identifier",
                        "start": 2746,
                        "end": 2747,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "JSXElement",
                        "start": 2750,
                        "end": 2764,
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
                                  "value": true,
                                  "raw": "true"
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
                        },
                        "closingElement": null,
                        "children": []
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
