__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 1000,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 21,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 30,
        "decorators": [],
        "name": "Type",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 31,
        "end": 42,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 33,
            "end": 34,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 36,
            "end": 37,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 39,
            "end": 40,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 44,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 70,
        "decorators": [],
        "name": "PayloadStructure",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 71,
        "end": 113,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 77,
            "end": 92,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 85,
              "decorators": [],
              "name": "dataType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 91,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 87,
                "end": 91,
                "typeName": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 91,
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 97,
            "end": 111,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 101,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 110,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 103,
                "end": 110
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
      "start": 115,
      "end": 202,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 133,
        "decorators": [],
        "name": "PayloadA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 142,
          "end": 158,
          "expression": {
            "type": "Identifier",
            "start": 142,
            "end": 158,
            "decorators": [],
            "name": "PayloadStructure",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 159,
        "end": 202,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 165,
            "end": 182,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 165,
              "end": 173,
              "decorators": [],
              "name": "dataType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 173,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 175,
                "end": 181,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 175,
                  "end": 181,
                  "left": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 179,
                    "decorators": [],
                    "name": "Type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 181,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 187,
            "end": 200,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 191,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 199,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 193,
                "end": 199
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
      "start": 204,
      "end": 291,
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 222,
        "decorators": [],
        "name": "PayloadB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 231,
          "end": 247,
          "expression": {
            "type": "Identifier",
            "start": 231,
            "end": 247,
            "decorators": [],
            "name": "PayloadStructure",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 248,
        "end": 291,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 254,
            "end": 271,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 262,
              "decorators": [],
              "name": "dataType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 262,
              "end": 270,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 264,
                "end": 270,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 264,
                  "end": 270,
                  "left": {
                    "type": "Identifier",
                    "start": 264,
                    "end": 268,
                    "decorators": [],
                    "name": "Type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 270,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 276,
            "end": 289,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 276,
              "end": 280,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 280,
              "end": 288,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 282,
                "end": 288
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
      "start": 293,
      "end": 419,
      "id": {
        "type": "Identifier",
        "start": 303,
        "end": 311,
        "decorators": [],
        "name": "PayloadC",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 320,
          "end": 336,
          "expression": {
            "type": "Identifier",
            "start": 320,
            "end": 336,
            "decorators": [],
            "name": "PayloadStructure",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 337,
        "end": 419,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 343,
            "end": 360,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 343,
              "end": 351,
              "decorators": [],
              "name": "dataType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 351,
              "end": 359,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 353,
                "end": 359,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 353,
                  "end": 359,
                  "left": {
                    "type": "Identifier",
                    "start": 353,
                    "end": 357,
                    "decorators": [],
                    "name": "Type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 358,
                    "end": 359,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 365,
            "end": 417,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 365,
              "end": 369,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 369,
              "end": 416,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 371,
                "end": 416,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 381,
                    "end": 391,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 381,
                      "end": 382,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 382,
                      "end": 390,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 384,
                        "end": 390
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 400,
                    "end": 410,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 400,
                      "end": 401,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 401,
                      "end": 409,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 403,
                        "end": 409
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "type": "TSTypeAliasDeclaration",
      "start": 421,
      "end": 466,
      "id": {
        "type": "Identifier",
        "start": 426,
        "end": 433,
        "decorators": [],
        "name": "Payload",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 436,
        "end": 466,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 436,
            "end": 444,
            "typeName": {
              "type": "Identifier",
              "start": 436,
              "end": 444,
              "decorators": [],
              "name": "PayloadA",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 447,
            "end": 455,
            "typeName": {
              "type": "Identifier",
              "start": 447,
              "end": 455,
              "decorators": [],
              "name": "PayloadB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 458,
            "end": 466,
            "typeName": {
              "type": "Identifier",
              "start": 458,
              "end": 466,
              "decorators": [],
              "name": "PayloadC",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 468,
      "end": 563,
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 487,
        "decorators": [],
        "name": "MappedPayload2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 490,
        "end": 563,
        "key": {
          "type": "Identifier",
          "start": 497,
          "end": 498,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 502,
          "end": 506,
          "typeName": {
            "type": "Identifier",
            "start": 502,
            "end": 506,
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 510,
          "end": 561,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 511,
              "end": 552,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 515,
                "end": 552,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 517,
                  "end": 552,
                  "objectType": {
                    "type": "TSIntersectionType",
                    "start": 518,
                    "end": 543,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 518,
                        "end": 525,
                        "typeName": {
                          "type": "Identifier",
                          "start": 518,
                          "end": 525,
                          "decorators": [],
                          "name": "Payload",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 528,
                        "end": 543,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 530,
                            "end": 541,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 530,
                              "end": 538,
                              "decorators": [],
                              "name": "dataType",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 538,
                              "end": 541,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 540,
                                "end": 541,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 540,
                                  "end": 541,
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    ]
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 545,
                    "end": 551,
                    "literal": {
                      "type": "Literal",
                      "start": 545,
                      "end": 551,
                      "value": "data",
                      "raw": "\"data\""
                    }
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 554,
            "end": 561,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 557,
              "end": 561
            }
          }
        },
        "optional": true,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 565,
      "end": 646,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 571,
          "end": 646,
          "id": {
            "type": "Identifier",
            "start": 571,
            "end": 596,
            "decorators": [],
            "name": "payloads2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 580,
              "end": 596,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 582,
                "end": 596,
                "typeName": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 596,
                  "decorators": [],
                  "name": "MappedPayload2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 599,
            "end": 646,
            "properties": [
              {
                "type": "Property",
                "start": 605,
                "end": 644,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 606,
                  "end": 612,
                  "object": {
                    "type": "Identifier",
                    "start": 606,
                    "end": 610,
                    "decorators": [],
                    "name": "Type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 611,
                    "end": 612,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 615,
                  "end": 644,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 615,
                      "end": 619,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 623,
                    "end": 644,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 625,
                        "end": 642,
                        "expression": {
                          "type": "CallExpression",
                          "start": 625,
                          "end": 642,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 625,
                            "end": 636,
                            "object": {
                              "type": "Identifier",
                              "start": 625,
                              "end": 632,
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 633,
                              "end": 636,
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 637,
                              "end": 641,
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 680,
      "end": 782,
      "id": {
        "type": "Identifier",
        "start": 685,
        "end": 695,
        "decorators": [],
        "name": "GetPayload",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 695,
        "end": 733,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 696,
            "end": 713,
            "name": {
              "type": "Identifier",
              "start": 696,
              "end": 697,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 706,
              "end": 713,
              "typeName": {
                "type": "Identifier",
                "start": 706,
                "end": 713,
                "decorators": [],
                "name": "Payload",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 715,
            "end": 732,
            "name": {
              "type": "Identifier",
              "start": 715,
              "end": 716,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 725,
              "end": 732,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 731,
                "end": 732,
                "typeName": {
                  "type": "Identifier",
                  "start": 731,
                  "end": 732,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 736,
        "end": 781,
        "checkType": {
          "type": "TSTypeReference",
          "start": 736,
          "end": 737,
          "typeName": {
            "type": "Identifier",
            "start": 736,
            "end": 737,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 746,
          "end": 761,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 748,
              "end": 759,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 748,
                "end": 756,
                "decorators": [],
                "name": "dataType",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 756,
                "end": 759,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 758,
                  "end": 759,
                  "typeName": {
                    "type": "Identifier",
                    "start": 758,
                    "end": 759,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "start": 764,
          "end": 773,
          "objectType": {
            "type": "TSTypeReference",
            "start": 764,
            "end": 765,
            "typeName": {
              "type": "Identifier",
              "start": 764,
              "end": 765,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSLiteralType",
            "start": 766,
            "end": 772,
            "literal": {
              "type": "Literal",
              "start": 766,
              "end": 772,
              "value": "data",
              "raw": "\"data\""
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 776,
          "end": 781
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 806,
      "end": 893,
      "id": {
        "type": "Identifier",
        "start": 811,
        "end": 819,
        "decorators": [],
        "name": "AnyOneof",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 822,
        "end": 892,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 822,
            "end": 865,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 824,
                "end": 842,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 824,
                  "end": 833,
                  "decorators": [],
                  "name": "oneofKind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 833,
                  "end": 841,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 835,
                    "end": 841
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSIndexSignature",
                "start": 843,
                "end": 863,
                "parameters": [
                  {
                    "type": "Identifier",
                    "start": 844,
                    "end": 853,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 845,
                      "end": 853,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 847,
                        "end": 853
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 854,
                  "end": 863,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 856,
                    "end": 863
                  }
                },
                "readonly": false,
                "static": false,
                "accessibility": null
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 868,
            "end": 892,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 870,
                "end": 890,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 870,
                  "end": 879,
                  "decorators": [],
                  "name": "oneofKind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 879,
                  "end": 890,
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 881,
                    "end": 890
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 894,
      "end": 1000,
      "id": {
        "type": "Identifier",
        "start": 899,
        "end": 911,
        "decorators": [],
        "name": "AnyOneofKind",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 911,
        "end": 931,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 912,
            "end": 930,
            "name": {
              "type": "Identifier",
              "start": 912,
              "end": 913,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 922,
              "end": 930,
              "typeName": {
                "type": "Identifier",
                "start": 922,
                "end": 930,
                "decorators": [],
                "name": "AnyOneof",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 934,
        "end": 999,
        "checkType": {
          "type": "TSTypeReference",
          "start": 934,
          "end": 935,
          "typeName": {
            "type": "Identifier",
            "start": 934,
            "end": 935,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 944,
          "end": 966,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 946,
              "end": 964,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 946,
                "end": 955,
                "decorators": [],
                "name": "oneofKind",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 955,
                "end": 964,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 957,
                  "end": 964,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 963,
                    "end": 964,
                    "typeName": {
                      "type": "Identifier",
                      "start": 963,
                      "end": 964,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "start": 973,
          "end": 987,
          "objectType": {
            "type": "TSTypeReference",
            "start": 973,
            "end": 974,
            "typeName": {
              "type": "Identifier",
              "start": 973,
              "end": 974,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSLiteralType",
            "start": 975,
            "end": 986,
            "literal": {
              "type": "Literal",
              "start": 975,
              "end": 986,
              "value": "oneofKind",
              "raw": "'oneofKind'"
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 994,
          "end": 999
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
