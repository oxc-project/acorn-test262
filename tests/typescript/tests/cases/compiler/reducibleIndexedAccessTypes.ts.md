__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Type",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 30
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "initializer": null,
            "computed": false,
            "start": 33,
            "end": 34
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "initializer": null,
            "computed": false,
            "start": 36,
            "end": 37
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "initializer": null,
            "computed": false,
            "start": 39,
            "end": 40
          }
        ],
        "start": 31,
        "end": 42
      },
      "const": false,
      "declare": false,
      "start": 21,
      "end": 42
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PayloadStructure",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 70
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataType",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 85
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 91
                },
                "typeArguments": null,
                "start": 87,
                "end": 91
              },
              "start": 85,
              "end": 91
            },
            "accessibility": null,
            "static": false,
            "start": 77,
            "end": 92
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 101
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 103,
                "end": 110
              },
              "start": 101,
              "end": 110
            },
            "accessibility": null,
            "static": false,
            "start": 97,
            "end": 111
          }
        ],
        "start": 71,
        "end": 113
      },
      "declare": false,
      "start": 44,
      "end": 113
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PayloadA",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 133
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PayloadStructure",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 158
          },
          "typeArguments": null,
          "start": 142,
          "end": 158
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataType",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 173
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 175,
                    "end": 179
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 180,
                    "end": 181
                  },
                  "start": 175,
                  "end": 181
                },
                "typeArguments": null,
                "start": 175,
                "end": 181
              },
              "start": 173,
              "end": 181
            },
            "accessibility": null,
            "static": false,
            "start": 165,
            "end": 182
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 191
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 193,
                "end": 199
              },
              "start": 191,
              "end": 199
            },
            "accessibility": null,
            "static": false,
            "start": 187,
            "end": 200
          }
        ],
        "start": 159,
        "end": 202
      },
      "declare": false,
      "start": 115,
      "end": 202
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PayloadB",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 222
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PayloadStructure",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 247
          },
          "typeArguments": null,
          "start": 231,
          "end": 247
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataType",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 262
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 264,
                    "end": 268
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 269,
                    "end": 270
                  },
                  "start": 264,
                  "end": 270
                },
                "typeArguments": null,
                "start": 264,
                "end": 270
              },
              "start": 262,
              "end": 270
            },
            "accessibility": null,
            "static": false,
            "start": 254,
            "end": 271
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 280
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 282,
                "end": 288
              },
              "start": 280,
              "end": 288
            },
            "accessibility": null,
            "static": false,
            "start": 276,
            "end": 289
          }
        ],
        "start": 248,
        "end": 291
      },
      "declare": false,
      "start": 204,
      "end": 291
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PayloadC",
        "optional": false,
        "typeAnnotation": null,
        "start": 303,
        "end": 311
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PayloadStructure",
            "optional": false,
            "typeAnnotation": null,
            "start": 320,
            "end": 336
          },
          "typeArguments": null,
          "start": 320,
          "end": 336
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataType",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 351
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 353,
                    "end": 357
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 358,
                    "end": 359
                  },
                  "start": 353,
                  "end": 359
                },
                "typeArguments": null,
                "start": 353,
                "end": 359
              },
              "start": 351,
              "end": 359
            },
            "accessibility": null,
            "static": false,
            "start": 343,
            "end": 360
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 365,
              "end": 369
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 381,
                      "end": 382
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 384,
                        "end": 390
                      },
                      "start": 382,
                      "end": 390
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 381,
                    "end": 391
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 400,
                      "end": 401
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 403,
                        "end": 409
                      },
                      "start": 401,
                      "end": 409
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 400,
                    "end": 410
                  }
                ],
                "start": 371,
                "end": 416
              },
              "start": 369,
              "end": 416
            },
            "accessibility": null,
            "static": false,
            "start": 365,
            "end": 417
          }
        ],
        "start": 337,
        "end": 419
      },
      "declare": false,
      "start": 293,
      "end": 419
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Payload",
        "optional": false,
        "typeAnnotation": null,
        "start": 426,
        "end": 433
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PayloadA",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 444
            },
            "typeArguments": null,
            "start": 436,
            "end": 444
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PayloadB",
              "optional": false,
              "typeAnnotation": null,
              "start": 447,
              "end": 455
            },
            "typeArguments": null,
            "start": 447,
            "end": 455
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PayloadC",
              "optional": false,
              "typeAnnotation": null,
              "start": 458,
              "end": 466
            },
            "typeArguments": null,
            "start": 458,
            "end": 466
          }
        ],
        "start": 436,
        "end": 466
      },
      "declare": false,
      "start": 421,
      "end": 466
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MappedPayload2",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 487
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 497,
          "end": 498
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 506
          },
          "typeArguments": null,
          "start": 502,
          "end": 506
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Payload",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 518,
                          "end": 525
                        },
                        "typeArguments": null,
                        "start": 518,
                        "end": 525
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dataType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 530,
                              "end": 538
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 540,
                                  "end": 541
                                },
                                "typeArguments": null,
                                "start": 540,
                                "end": 541
                              },
                              "start": 538,
                              "end": 541
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 530,
                            "end": 541
                          }
                        ],
                        "start": 528,
                        "end": 543
                      }
                    ],
                    "start": 518,
                    "end": 543
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "data",
                      "raw": "\"data\"",
                      "start": 545,
                      "end": 551
                    },
                    "start": 545,
                    "end": 551
                  },
                  "start": 517,
                  "end": 552
                },
                "start": 515,
                "end": 552
              },
              "start": 511,
              "end": 552
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 557,
              "end": 561
            },
            "start": 554,
            "end": 561
          },
          "start": 510,
          "end": 561
        },
        "optional": true,
        "readonly": null,
        "start": 490,
        "end": 563
      },
      "declare": false,
      "start": 468,
      "end": 563
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "payloads2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MappedPayload2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 582,
                  "end": 596
                },
                "typeArguments": null,
                "start": 582,
                "end": 596
              },
              "start": 580,
              "end": 596
            },
            "start": 571,
            "end": 596
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 606,
                    "end": 610
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 611,
                    "end": 612
                  },
                  "optional": false,
                  "computed": false,
                  "start": 606,
                  "end": 612
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 615,
                      "end": 619
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 625,
                              "end": 632
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 633,
                              "end": 636
                            },
                            "optional": false,
                            "computed": false,
                            "start": 625,
                            "end": 636
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 637,
                              "end": 641
                            }
                          ],
                          "optional": false,
                          "start": 625,
                          "end": 642
                        },
                        "directive": null,
                        "start": 625,
                        "end": 642
                      }
                    ],
                    "start": 623,
                    "end": 644
                  },
                  "id": null,
                  "generator": false,
                  "start": 615,
                  "end": 644
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 605,
                "end": 644
              }
            ],
            "start": 599,
            "end": 646
          },
          "definite": false,
          "start": 571,
          "end": 646
        }
      ],
      "declare": false,
      "start": 565,
      "end": 646
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetPayload",
        "optional": false,
        "typeAnnotation": null,
        "start": 685,
        "end": 695
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 696,
              "end": 697
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 706,
                "end": 713
              },
              "typeArguments": null,
              "start": 706,
              "end": 713
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 696,
            "end": 713
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 715,
              "end": 716
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 731,
                  "end": 732
                },
                "typeArguments": null,
                "start": 731,
                "end": 732
              },
              "start": 725,
              "end": 732
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 715,
            "end": 732
          }
        ],
        "start": 695,
        "end": 733
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 736,
            "end": 737
          },
          "typeArguments": null,
          "start": 736,
          "end": 737
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "dataType",
                "optional": false,
                "typeAnnotation": null,
                "start": 748,
                "end": 756
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 758,
                    "end": 759
                  },
                  "typeArguments": null,
                  "start": 758,
                  "end": 759
                },
                "start": 756,
                "end": 759
              },
              "accessibility": null,
              "static": false,
              "start": 748,
              "end": 759
            }
          ],
          "start": 746,
          "end": 761
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 764,
              "end": 765
            },
            "typeArguments": null,
            "start": 764,
            "end": 765
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "data",
              "raw": "\"data\"",
              "start": 766,
              "end": 772
            },
            "start": 766,
            "end": 772
          },
          "start": 764,
          "end": 773
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 776,
          "end": 781
        },
        "start": 736,
        "end": 781
      },
      "declare": false,
      "start": 680,
      "end": 782
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyOneof",
        "optional": false,
        "typeAnnotation": null,
        "start": 811,
        "end": 819
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oneofKind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 824,
                  "end": 833
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 835,
                    "end": 841
                  },
                  "start": 833,
                  "end": 841
                },
                "accessibility": null,
                "static": false,
                "start": 824,
                "end": 842
              },
              {
                "type": "TSIndexSignature",
                "parameters": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 847,
                        "end": 853
                      },
                      "start": 845,
                      "end": 853
                    },
                    "start": 844,
                    "end": 853
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 856,
                    "end": 863
                  },
                  "start": 854,
                  "end": 863
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 843,
                "end": 863
              }
            ],
            "start": 822,
            "end": 865
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oneofKind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 870,
                  "end": 879
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 881,
                    "end": 890
                  },
                  "start": 879,
                  "end": 890
                },
                "accessibility": null,
                "static": false,
                "start": 870,
                "end": 890
              }
            ],
            "start": 868,
            "end": 892
          }
        ],
        "start": 822,
        "end": 892
      },
      "declare": false,
      "start": 806,
      "end": 893
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyOneofKind",
        "optional": false,
        "typeAnnotation": null,
        "start": 899,
        "end": 911
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 912,
              "end": 913
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnyOneof",
                "optional": false,
                "typeAnnotation": null,
                "start": 922,
                "end": 930
              },
              "typeArguments": null,
              "start": 922,
              "end": 930
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 912,
            "end": 930
          }
        ],
        "start": 911,
        "end": 931
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 934,
            "end": 935
          },
          "typeArguments": null,
          "start": 934,
          "end": 935
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "oneofKind",
                "optional": false,
                "typeAnnotation": null,
                "start": 946,
                "end": 955
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 963,
                      "end": 964
                    },
                    "typeArguments": null,
                    "start": 963,
                    "end": 964
                  },
                  "start": 957,
                  "end": 964
                },
                "start": 955,
                "end": 964
              },
              "accessibility": null,
              "static": false,
              "start": 946,
              "end": 964
            }
          ],
          "start": 944,
          "end": 966
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 973,
              "end": 974
            },
            "typeArguments": null,
            "start": 973,
            "end": 974
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "oneofKind",
              "raw": "'oneofKind'",
              "start": 975,
              "end": 986
            },
            "start": 975,
            "end": 986
          },
          "start": 973,
          "end": 987
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 994,
          "end": 999
        },
        "start": 934,
        "end": 999
      },
      "declare": false,
      "start": 894,
      "end": 1000
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 1000
}
```
