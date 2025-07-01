__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PubSubRecordIsStoredInRedisAsA",
          "optional": false,
          "typeAnnotation": null,
          "start": 206,
          "end": 236
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "redisHash",
                "optional": false,
                "typeAnnotation": null,
                "start": 243,
                "end": 252
              },
              "initializer": {
                "type": "Literal",
                "value": "redisHash",
                "raw": "\"redisHash\"",
                "start": 255,
                "end": 266
              },
              "computed": false,
              "start": 243,
              "end": 266
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "jsonEncodedRedisString",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 294
              },
              "initializer": {
                "type": "Literal",
                "value": "jsonEncodedRedisString",
                "raw": "\"jsonEncodedRedisString\"",
                "start": 297,
                "end": 321
              },
              "computed": false,
              "start": 272,
              "end": 321
            }
          ],
          "start": 237,
          "end": 325
        },
        "const": false,
        "declare": false,
        "start": 201,
        "end": 325
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 194,
      "end": 325
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PubSubRecord",
          "optional": false,
          "typeAnnotation": null,
          "start": 348,
          "end": 360
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "NAME",
                "optional": false,
                "typeAnnotation": null,
                "start": 361,
                "end": 365
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 374,
                "end": 380
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 361,
              "end": 380
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "RECORD",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 388
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 382,
              "end": 388
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "IDENTIFIER",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 400
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 409,
                  "end": 416
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RECORD",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 417,
                        "end": 423
                      },
                      "typeArguments": null,
                      "start": 417,
                      "end": 423
                    }
                  ],
                  "start": 416,
                  "end": 424
                },
                "start": 409,
                "end": 424
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 390,
              "end": 424
            }
          ],
          "start": 360,
          "end": 425
        },
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
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 432,
                "end": 436
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NAME",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 442
                  },
                  "typeArguments": null,
                  "start": 438,
                  "end": 442
                },
                "start": 436,
                "end": 442
              },
              "accessibility": null,
              "static": false,
              "start": 432,
              "end": 443
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "record",
                "optional": false,
                "typeAnnotation": null,
                "start": 448,
                "end": 454
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RECORD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 456,
                    "end": 462
                  },
                  "typeArguments": null,
                  "start": 456,
                  "end": 462
                },
                "start": 454,
                "end": 462
              },
              "accessibility": null,
              "static": false,
              "start": 448,
              "end": 463
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "identifier",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 478
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IDENTIFIER",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 480,
                    "end": 490
                  },
                  "typeArguments": null,
                  "start": 480,
                  "end": 490
                },
                "start": 478,
                "end": 490
              },
              "accessibility": null,
              "static": false,
              "start": 468,
              "end": 491
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "storedAs",
                "optional": false,
                "typeAnnotation": null,
                "start": 496,
                "end": 504
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PubSubRecordIsStoredInRedisAsA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 506,
                    "end": 536
                  },
                  "typeArguments": null,
                  "start": 506,
                  "end": 536
                },
                "start": 504,
                "end": 536
              },
              "accessibility": null,
              "static": false,
              "start": 496,
              "end": 537
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "maxMsToWaitBeforePublishing",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 569
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 571,
                  "end": 577
                },
                "start": 569,
                "end": 577
              },
              "accessibility": null,
              "static": false,
              "start": 542,
              "end": 578
            }
          ],
          "start": 426,
          "end": 582
        },
        "declare": false,
        "start": 338,
        "end": 582
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 331,
      "end": 582
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NameFieldConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 593,
        "end": 613
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 614,
              "end": 620
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 614,
            "end": 620
          }
        ],
        "start": 613,
        "end": 621
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SO_FAR",
            "optional": false,
            "typeAnnotation": null,
            "start": 628,
            "end": 634
          },
          "typeArguments": null,
          "start": 628,
          "end": 634
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
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 644,
                "end": 648
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 650,
                  "end": 653
                },
                "start": 648,
                "end": 653
              },
              "accessibility": null,
              "static": false,
              "start": 644,
              "end": 653
            }
          ],
          "start": 643,
          "end": 654
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 657,
          "end": 659
        },
        "falseType": {
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
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 670,
                "end": 674
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TYPE",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 677,
                          "end": 681
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 677,
                        "end": 681
                      }
                    ],
                    "start": 676,
                    "end": 682
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TYPE",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 687,
                            "end": 691
                          },
                          "typeArguments": null,
                          "start": 687,
                          "end": 691
                        },
                        "start": 685,
                        "end": 691
                      },
                      "start": 683,
                      "end": 691
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 696,
                        "end": 717
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 718,
                                  "end": 724
                                },
                                "typeArguments": null,
                                "start": 718,
                                "end": 724
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
                                      "name": "name",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 728,
                                      "end": 732
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "TYPE",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 734,
                                          "end": 738
                                        },
                                        "typeArguments": null,
                                        "start": 734,
                                        "end": 738
                                      },
                                      "start": 732,
                                      "end": 738
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 728,
                                    "end": 738
                                  }
                                ],
                                "start": 727,
                                "end": 739
                              }
                            ],
                            "start": 718,
                            "end": 739
                          }
                        ],
                        "start": 717,
                        "end": 740
                      },
                      "start": 696,
                      "end": 740
                    },
                    "start": 693,
                    "end": 740
                  },
                  "start": 676,
                  "end": 740
                },
                "start": 674,
                "end": 740
              },
              "accessibility": null,
              "static": false,
              "start": 670,
              "end": 740
            }
          ],
          "start": 662,
          "end": 746
        },
        "start": 628,
        "end": 746
      },
      "declare": false,
      "start": 588,
      "end": 746
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
            "name": "buildNameFieldConstructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 758,
            "end": 783
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 787,
                    "end": 793
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 787,
                  "end": 793
                }
              ],
              "start": 786,
              "end": 794
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 802,
                      "end": 808
                    },
                    "typeArguments": null,
                    "start": 802,
                    "end": 808
                  },
                  "start": 800,
                  "end": 808
                },
                "start": 795,
                "end": 808
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "name",
                  "raw": "\"name\"",
                  "start": 819,
                  "end": 825
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "soFar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 829,
                  "end": 834
                },
                "start": 819,
                "end": 834
              },
              "consequent": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 837,
                "end": 839
              },
              "alternate": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 850,
                      "end": 854
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TYPE",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 857,
                              "end": 861
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 857,
                            "end": 861
                          }
                        ],
                        "start": 856,
                        "end": 862
                      },
                      "params": [
                        {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TYPE",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 873,
                                  "end": 877
                                },
                                "typeArguments": null,
                                "start": 873,
                                "end": 877
                              },
                              "start": 871,
                              "end": 877
                            },
                            "start": 863,
                            "end": 877
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 880,
                            "end": 889
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 863,
                          "end": 889
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 902,
                            "end": 923
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TSAsExpression",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 924,
                                    "end": 930
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 931,
                                    "end": 937
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 924,
                                  "end": 937
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 938,
                                    "end": 940
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 942,
                                    "end": 947
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "name",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 950,
                                          "end": 954
                                        },
                                        "value": {
                                          "type": "TSAsExpression",
                                          "expression": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "instance",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 956,
                                            "end": 964
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 968,
                                              "end": 972
                                            },
                                            "typeArguments": null,
                                            "start": 968,
                                            "end": 972
                                          },
                                          "start": 956,
                                          "end": 972
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 950,
                                        "end": 972
                                      }
                                    ],
                                    "start": 949,
                                    "end": 973
                                  }
                                ],
                                "optional": false,
                                "start": 924,
                                "end": 974
                              },
                              "typeAnnotation": {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 978,
                                      "end": 984
                                    },
                                    "typeArguments": null,
                                    "start": 978,
                                    "end": 984
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
                                          "name": "name",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 988,
                                          "end": 992
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 994,
                                              "end": 998
                                            },
                                            "typeArguments": null,
                                            "start": 994,
                                            "end": 998
                                          },
                                          "start": 992,
                                          "end": 998
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 988,
                                        "end": 998
                                      }
                                    ],
                                    "start": 987,
                                    "end": 999
                                  }
                                ],
                                "start": 978,
                                "end": 999
                              },
                              "start": 924,
                              "end": 999
                            }
                          ],
                          "optional": false,
                          "start": 902,
                          "end": 1000
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1004,
                            "end": 1025
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1026,
                                      "end": 1032
                                    },
                                    "typeArguments": null,
                                    "start": 1026,
                                    "end": 1032
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
                                          "name": "name",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1036,
                                          "end": 1040
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1042,
                                              "end": 1046
                                            },
                                            "typeArguments": null,
                                            "start": 1042,
                                            "end": 1046
                                          },
                                          "start": 1040,
                                          "end": 1046
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 1036,
                                        "end": 1046
                                      }
                                    ],
                                    "start": 1035,
                                    "end": 1047
                                  }
                                ],
                                "start": 1026,
                                "end": 1047
                              }
                            ],
                            "start": 1025,
                            "end": 1048
                          },
                          "start": 1004,
                          "end": 1048
                        },
                        "start": 902,
                        "end": 1048
                      },
                      "id": null,
                      "generator": false,
                      "start": 856,
                      "end": 1048
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 850,
                    "end": 1048
                  }
                ],
                "start": 842,
                "end": 1054
              },
              "start": 819,
              "end": 1054
            },
            "id": null,
            "generator": false,
            "start": 786,
            "end": 1058
          },
          "definite": false,
          "start": 758,
          "end": 1058
        }
      ],
      "declare": false,
      "start": 752,
      "end": 1059
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StoredAsConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 1070,
        "end": 1089
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 1090,
              "end": 1096
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1090,
            "end": 1096
          }
        ],
        "start": 1089,
        "end": 1097
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SO_FAR",
            "optional": false,
            "typeAnnotation": null,
            "start": 1104,
            "end": 1110
          },
          "typeArguments": null,
          "start": 1104,
          "end": 1110
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
                "name": "storedAs",
                "optional": false,
                "typeAnnotation": null,
                "start": 1120,
                "end": 1128
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1130,
                  "end": 1133
                },
                "start": 1128,
                "end": 1133
              },
              "accessibility": null,
              "static": false,
              "start": 1120,
              "end": 1133
            }
          ],
          "start": 1119,
          "end": 1134
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 1137,
          "end": 1139
        },
        "falseType": {
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
                "name": "storedAsJsonEncodedRedisString",
                "optional": false,
                "typeAnnotation": null,
                "start": 1150,
                "end": 1180
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1188,
                        "end": 1209
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1210,
                                  "end": 1216
                                },
                                "typeArguments": null,
                                "start": 1210,
                                "end": 1216
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
                                      "name": "storedAs",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1220,
                                      "end": 1228
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
                                            "name": "PubSubRecordIsStoredInRedisAsA",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1230,
                                            "end": 1260
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "jsonEncodedRedisString",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1261,
                                            "end": 1283
                                          },
                                          "start": 1230,
                                          "end": 1283
                                        },
                                        "typeArguments": null,
                                        "start": 1230,
                                        "end": 1283
                                      },
                                      "start": 1228,
                                      "end": 1283
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 1220,
                                    "end": 1283
                                  }
                                ],
                                "start": 1219,
                                "end": 1284
                              }
                            ],
                            "start": 1210,
                            "end": 1284
                          }
                        ],
                        "start": 1209,
                        "end": 1285
                      },
                      "start": 1188,
                      "end": 1285
                    },
                    "start": 1185,
                    "end": 1285
                  },
                  "start": 1182,
                  "end": 1285
                },
                "start": 1180,
                "end": 1285
              },
              "accessibility": null,
              "static": false,
              "start": 1150,
              "end": 1286
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "storedRedisHash",
                "optional": false,
                "typeAnnotation": null,
                "start": 1293,
                "end": 1308
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1316,
                        "end": 1337
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1338,
                                  "end": 1344
                                },
                                "typeArguments": null,
                                "start": 1338,
                                "end": 1344
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
                                      "name": "storedAs",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1348,
                                      "end": 1356
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
                                            "name": "PubSubRecordIsStoredInRedisAsA",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1358,
                                            "end": 1388
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "redisHash",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1389,
                                            "end": 1398
                                          },
                                          "start": 1358,
                                          "end": 1398
                                        },
                                        "typeArguments": null,
                                        "start": 1358,
                                        "end": 1398
                                      },
                                      "start": 1356,
                                      "end": 1398
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 1348,
                                    "end": 1398
                                  }
                                ],
                                "start": 1347,
                                "end": 1399
                              }
                            ],
                            "start": 1338,
                            "end": 1399
                          }
                        ],
                        "start": 1337,
                        "end": 1400
                      },
                      "start": 1316,
                      "end": 1400
                    },
                    "start": 1313,
                    "end": 1400
                  },
                  "start": 1310,
                  "end": 1400
                },
                "start": 1308,
                "end": 1400
              },
              "accessibility": null,
              "static": false,
              "start": 1293,
              "end": 1401
            }
          ],
          "start": 1142,
          "end": 1407
        },
        "start": 1104,
        "end": 1407
      },
      "declare": false,
      "start": 1065,
      "end": 1407
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
            "name": "buildStoredAsConstructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 1419,
            "end": 1443
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1447,
                    "end": 1453
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1447,
                  "end": 1453
                }
              ],
              "start": 1446,
              "end": 1454
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1462,
                      "end": 1468
                    },
                    "typeArguments": null,
                    "start": 1462,
                    "end": 1468
                  },
                  "start": 1460,
                  "end": 1468
                },
                "start": 1455,
                "end": 1468
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "storedAs",
                  "raw": "\"storedAs\"",
                  "start": 1479,
                  "end": 1489
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "soFar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1493,
                  "end": 1498
                },
                "start": 1479,
                "end": 1498
              },
              "consequent": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1501,
                "end": 1503
              },
              "alternate": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "storedAsJsonEncodedRedisString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1514,
                      "end": 1544
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1560,
                            "end": 1581
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Object",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1582,
                                  "end": 1588
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assign",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1589,
                                  "end": 1595
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1582,
                                "end": 1595
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ObjectExpression",
                                  "properties": [],
                                  "start": 1596,
                                  "end": 1598
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "soFar",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1600,
                                  "end": 1605
                                },
                                {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "storedAs",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1608,
                                        "end": 1616
                                      },
                                      "value": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "PubSubRecordIsStoredInRedisAsA",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1618,
                                          "end": 1648
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "jsonEncodedRedisString",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1649,
                                          "end": 1671
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1618,
                                        "end": 1671
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1608,
                                      "end": 1671
                                    }
                                  ],
                                  "start": 1607,
                                  "end": 1672
                                }
                              ],
                              "optional": false,
                              "start": 1582,
                              "end": 1673
                            }
                          ],
                          "optional": false,
                          "start": 1560,
                          "end": 1674
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1688,
                            "end": 1709
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1710,
                                      "end": 1716
                                    },
                                    "typeArguments": null,
                                    "start": 1710,
                                    "end": 1716
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
                                          "name": "storedAs",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1720,
                                          "end": 1728
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
                                                "name": "PubSubRecordIsStoredInRedisAsA",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1730,
                                                "end": 1760
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "jsonEncodedRedisString",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1761,
                                                "end": 1783
                                              },
                                              "start": 1730,
                                              "end": 1783
                                            },
                                            "typeArguments": null,
                                            "start": 1730,
                                            "end": 1783
                                          },
                                          "start": 1728,
                                          "end": 1783
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 1720,
                                        "end": 1783
                                      }
                                    ],
                                    "start": 1719,
                                    "end": 1784
                                  }
                                ],
                                "start": 1710,
                                "end": 1784
                              }
                            ],
                            "start": 1709,
                            "end": 1785
                          },
                          "start": 1688,
                          "end": 1785
                        },
                        "start": 1560,
                        "end": 1785
                      },
                      "id": null,
                      "generator": false,
                      "start": 1546,
                      "end": 1785
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1514,
                    "end": 1785
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "storedAsRedisHash",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1793,
                      "end": 1810
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1826,
                            "end": 1847
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Object",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1848,
                                  "end": 1854
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assign",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1855,
                                  "end": 1861
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1848,
                                "end": 1861
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ObjectExpression",
                                  "properties": [],
                                  "start": 1862,
                                  "end": 1864
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "soFar",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1866,
                                  "end": 1871
                                },
                                {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "storedAs",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1874,
                                        "end": 1882
                                      },
                                      "value": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "PubSubRecordIsStoredInRedisAsA",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1884,
                                          "end": 1914
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "redisHash",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1915,
                                          "end": 1924
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1884,
                                        "end": 1924
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1874,
                                      "end": 1924
                                    }
                                  ],
                                  "start": 1873,
                                  "end": 1925
                                }
                              ],
                              "optional": false,
                              "start": 1848,
                              "end": 1926
                            }
                          ],
                          "optional": false,
                          "start": 1826,
                          "end": 1927
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1941,
                            "end": 1962
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1963,
                                      "end": 1969
                                    },
                                    "typeArguments": null,
                                    "start": 1963,
                                    "end": 1969
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
                                          "name": "storedAs",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1973,
                                          "end": 1981
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
                                                "name": "PubSubRecordIsStoredInRedisAsA",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1983,
                                                "end": 2013
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "redisHash",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 2014,
                                                "end": 2023
                                              },
                                              "start": 1983,
                                              "end": 2023
                                            },
                                            "typeArguments": null,
                                            "start": 1983,
                                            "end": 2023
                                          },
                                          "start": 1981,
                                          "end": 2023
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 1973,
                                        "end": 2023
                                      }
                                    ],
                                    "start": 1972,
                                    "end": 2024
                                  }
                                ],
                                "start": 1963,
                                "end": 2024
                              }
                            ],
                            "start": 1962,
                            "end": 2025
                          },
                          "start": 1941,
                          "end": 2025
                        },
                        "start": 1826,
                        "end": 2025
                      },
                      "id": null,
                      "generator": false,
                      "start": 1812,
                      "end": 2025
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1793,
                    "end": 2025
                  }
                ],
                "start": 1506,
                "end": 2032
              },
              "start": 1479,
              "end": 2032
            },
            "id": null,
            "generator": false,
            "start": 1446,
            "end": 2036
          },
          "definite": false,
          "start": 1419,
          "end": 2036
        }
      ],
      "declare": false,
      "start": 1413,
      "end": 2037
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IdentifierFieldConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 2048,
        "end": 2074
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 2075,
              "end": 2081
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2075,
            "end": 2081
          }
        ],
        "start": 2074,
        "end": 2082
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SO_FAR",
            "optional": false,
            "typeAnnotation": null,
            "start": 2089,
            "end": 2095
          },
          "typeArguments": null,
          "start": 2089,
          "end": 2095
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
                "name": "identifier",
                "optional": false,
                "typeAnnotation": null,
                "start": 2105,
                "end": 2115
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 2117,
                  "end": 2120
                },
                "start": 2115,
                "end": 2120
              },
              "accessibility": null,
              "static": false,
              "start": 2105,
              "end": 2120
            }
          ],
          "start": 2104,
          "end": 2121
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 2124,
          "end": 2126
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 2133,
              "end": 2139
            },
            "typeArguments": null,
            "start": 2133,
            "end": 2139
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
                  "name": "record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2149,
                  "end": 2155
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2157,
                    "end": 2160
                  },
                  "start": 2155,
                  "end": 2160
                },
                "accessibility": null,
                "static": false,
                "start": 2149,
                "end": 2160
              }
            ],
            "start": 2148,
            "end": 2161
          },
          "trueType": {
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
                  "name": "identifier",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2172,
                  "end": 2182
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TYPE",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2185,
                            "end": 2189
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Partial",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2198,
                              "end": 2205
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2206,
                                      "end": 2212
                                    },
                                    "typeArguments": null,
                                    "start": 2206,
                                    "end": 2212
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "record",
                                      "raw": "\"record\"",
                                      "start": 2213,
                                      "end": 2221
                                    },
                                    "start": 2213,
                                    "end": 2221
                                  },
                                  "start": 2206,
                                  "end": 2222
                                }
                              ],
                              "start": 2205,
                              "end": 2223
                            },
                            "start": 2198,
                            "end": 2223
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 2185,
                          "end": 2223
                        }
                      ],
                      "start": 2184,
                      "end": 2224
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TYPE",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2229,
                              "end": 2233
                            },
                            "typeArguments": null,
                            "start": 2229,
                            "end": 2233
                          },
                          "start": 2227,
                          "end": 2233
                        },
                        "start": 2225,
                        "end": 2233
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "BuildPubSubRecordType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2238,
                          "end": 2259
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSIntersectionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SO_FAR",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2260,
                                    "end": 2266
                                  },
                                  "typeArguments": null,
                                  "start": 2260,
                                  "end": 2266
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
                                        "name": "identifier",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2270,
                                        "end": 2280
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "TYPE",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2282,
                                            "end": 2286
                                          },
                                          "typeArguments": null,
                                          "start": 2282,
                                          "end": 2286
                                        },
                                        "start": 2280,
                                        "end": 2286
                                      },
                                      "accessibility": null,
                                      "static": false,
                                      "start": 2270,
                                      "end": 2286
                                    }
                                  ],
                                  "start": 2269,
                                  "end": 2287
                                }
                              ],
                              "start": 2260,
                              "end": 2287
                            }
                          ],
                          "start": 2259,
                          "end": 2288
                        },
                        "start": 2238,
                        "end": 2288
                      },
                      "start": 2235,
                      "end": 2288
                    },
                    "start": 2184,
                    "end": 2288
                  },
                  "start": 2182,
                  "end": 2288
                },
                "accessibility": null,
                "static": false,
                "start": 2172,
                "end": 2288
              }
            ],
            "start": 2164,
            "end": 2294
          },
          "falseType": {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 2297,
            "end": 2299
          },
          "start": 2133,
          "end": 2299
        },
        "start": 2089,
        "end": 2299
      },
      "declare": false,
      "start": 2043,
      "end": 2299
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
            "name": "buildIdentifierFieldConstructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 2311,
            "end": 2342
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2346,
                    "end": 2352
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2346,
                  "end": 2352
                }
              ],
              "start": 2345,
              "end": 2353
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2361,
                      "end": 2367
                    },
                    "typeArguments": null,
                    "start": 2361,
                    "end": 2367
                  },
                  "start": 2359,
                  "end": 2367
                },
                "start": 2354,
                "end": 2367
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "identifier",
                    "raw": "\"identifier\"",
                    "start": 2378,
                    "end": 2390
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "soFar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2394,
                    "end": 2399
                  },
                  "start": 2378,
                  "end": 2399
                },
                "operator": "||",
                "right": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "record",
                      "raw": "\"record\"",
                      "start": 2406,
                      "end": 2414
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "soFar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2418,
                      "end": 2423
                    },
                    "start": 2406,
                    "end": 2423
                  },
                  "prefix": true,
                  "start": 2404,
                  "end": 2424
                },
                "start": 2378,
                "end": 2425
              },
              "consequent": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 2428,
                "end": 2430
              },
              "alternate": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "identifier",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2441,
                      "end": 2451
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TYPE",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2454,
                              "end": 2458
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2454,
                            "end": 2458
                          }
                        ],
                        "start": 2453,
                        "end": 2459
                      },
                      "params": [
                        {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TYPE",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2470,
                                  "end": 2474
                                },
                                "typeArguments": null,
                                "start": 2470,
                                "end": 2474
                              },
                              "start": 2468,
                              "end": 2474
                            },
                            "start": 2460,
                            "end": 2474
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2477,
                            "end": 2486
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2460,
                          "end": 2486
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2499,
                            "end": 2520
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TSAsExpression",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2521,
                                    "end": 2527
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2528,
                                    "end": 2534
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2521,
                                  "end": 2534
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 2535,
                                    "end": 2537
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2539,
                                    "end": 2544
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "identifier",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2547,
                                          "end": 2557
                                        },
                                        "value": {
                                          "type": "TSAsExpression",
                                          "expression": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "instance",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2559,
                                            "end": 2567
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2571,
                                              "end": 2575
                                            },
                                            "typeArguments": null,
                                            "start": 2571,
                                            "end": 2575
                                          },
                                          "start": 2559,
                                          "end": 2575
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 2547,
                                        "end": 2575
                                      }
                                    ],
                                    "start": 2546,
                                    "end": 2576
                                  }
                                ],
                                "optional": false,
                                "start": 2521,
                                "end": 2577
                              },
                              "typeAnnotation": {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2581,
                                      "end": 2587
                                    },
                                    "typeArguments": null,
                                    "start": 2581,
                                    "end": 2587
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
                                          "name": "identifier",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2591,
                                          "end": 2601
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2603,
                                              "end": 2607
                                            },
                                            "typeArguments": null,
                                            "start": 2603,
                                            "end": 2607
                                          },
                                          "start": 2601,
                                          "end": 2607
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2591,
                                        "end": 2607
                                      }
                                    ],
                                    "start": 2590,
                                    "end": 2608
                                  }
                                ],
                                "start": 2581,
                                "end": 2608
                              },
                              "start": 2521,
                              "end": 2608
                            }
                          ],
                          "optional": false,
                          "start": 2499,
                          "end": 2609
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2613,
                            "end": 2634
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2635,
                                      "end": 2641
                                    },
                                    "typeArguments": null,
                                    "start": 2635,
                                    "end": 2641
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
                                          "name": "identifier",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2645,
                                          "end": 2655
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2657,
                                              "end": 2661
                                            },
                                            "typeArguments": null,
                                            "start": 2657,
                                            "end": 2661
                                          },
                                          "start": 2655,
                                          "end": 2661
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2645,
                                        "end": 2661
                                      }
                                    ],
                                    "start": 2644,
                                    "end": 2662
                                  }
                                ],
                                "start": 2635,
                                "end": 2662
                              }
                            ],
                            "start": 2634,
                            "end": 2663
                          },
                          "start": 2613,
                          "end": 2663
                        },
                        "start": 2499,
                        "end": 2663
                      },
                      "id": null,
                      "generator": false,
                      "start": 2453,
                      "end": 2663
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2441,
                    "end": 2663
                  }
                ],
                "start": 2433,
                "end": 2669
              },
              "start": 2378,
              "end": 2669
            },
            "id": null,
            "generator": false,
            "start": 2345,
            "end": 2673
          },
          "definite": false,
          "start": 2311,
          "end": 2673
        }
      ],
      "declare": false,
      "start": 2305,
      "end": 2674
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RecordFieldConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 2685,
        "end": 2707
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 2708,
              "end": 2714
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2708,
            "end": 2714
          }
        ],
        "start": 2707,
        "end": 2715
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SO_FAR",
            "optional": false,
            "typeAnnotation": null,
            "start": 2722,
            "end": 2728
          },
          "typeArguments": null,
          "start": 2722,
          "end": 2728
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
                "name": "record",
                "optional": false,
                "typeAnnotation": null,
                "start": 2738,
                "end": 2744
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 2746,
                  "end": 2749
                },
                "start": 2744,
                "end": 2749
              },
              "accessibility": null,
              "static": false,
              "start": 2738,
              "end": 2749
            }
          ],
          "start": 2737,
          "end": 2750
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 2753,
          "end": 2755
        },
        "falseType": {
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
                "name": "record",
                "optional": false,
                "typeAnnotation": null,
                "start": 2766,
                "end": 2772
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TYPE",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2775,
                          "end": 2779
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2775,
                        "end": 2779
                      }
                    ],
                    "start": 2774,
                    "end": 2780
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TYPE",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2785,
                            "end": 2789
                          },
                          "typeArguments": null,
                          "start": 2785,
                          "end": 2789
                        },
                        "start": 2783,
                        "end": 2789
                      },
                      "start": 2781,
                      "end": 2789
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2794,
                        "end": 2815
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2816,
                                  "end": 2822
                                },
                                "typeArguments": null,
                                "start": 2816,
                                "end": 2822
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
                                      "name": "record",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2826,
                                      "end": 2832
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "TYPE",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2834,
                                          "end": 2838
                                        },
                                        "typeArguments": null,
                                        "start": 2834,
                                        "end": 2838
                                      },
                                      "start": 2832,
                                      "end": 2838
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2826,
                                    "end": 2838
                                  }
                                ],
                                "start": 2825,
                                "end": 2839
                              }
                            ],
                            "start": 2816,
                            "end": 2839
                          }
                        ],
                        "start": 2815,
                        "end": 2840
                      },
                      "start": 2794,
                      "end": 2840
                    },
                    "start": 2791,
                    "end": 2840
                  },
                  "start": 2774,
                  "end": 2840
                },
                "start": 2772,
                "end": 2840
              },
              "accessibility": null,
              "static": false,
              "start": 2766,
              "end": 2840
            }
          ],
          "start": 2758,
          "end": 2846
        },
        "start": 2722,
        "end": 2846
      },
      "declare": false,
      "start": 2680,
      "end": 2846
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
            "name": "buildRecordFieldConstructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 2858,
            "end": 2885
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2889,
                    "end": 2895
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2889,
                  "end": 2895
                }
              ],
              "start": 2888,
              "end": 2896
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2904,
                      "end": 2910
                    },
                    "typeArguments": null,
                    "start": 2904,
                    "end": 2910
                  },
                  "start": 2902,
                  "end": 2910
                },
                "start": 2897,
                "end": 2910
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "record",
                  "raw": "\"record\"",
                  "start": 2921,
                  "end": 2929
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "soFar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2933,
                  "end": 2938
                },
                "start": 2921,
                "end": 2938
              },
              "consequent": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 2941,
                "end": 2943
              },
              "alternate": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2954,
                      "end": 2960
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TYPE",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2963,
                              "end": 2967
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2963,
                            "end": 2967
                          }
                        ],
                        "start": 2962,
                        "end": 2968
                      },
                      "params": [
                        {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TYPE",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2979,
                                  "end": 2983
                                },
                                "typeArguments": null,
                                "start": 2979,
                                "end": 2983
                              },
                              "start": 2977,
                              "end": 2983
                            },
                            "start": 2969,
                            "end": 2983
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2986,
                            "end": 2995
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2969,
                          "end": 2995
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3008,
                            "end": 3029
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TSAsExpression",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3030,
                                    "end": 3036
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3037,
                                    "end": 3043
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3030,
                                  "end": 3043
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 3044,
                                    "end": 3046
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3048,
                                    "end": 3053
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "record",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3056,
                                          "end": 3062
                                        },
                                        "value": {
                                          "type": "TSAsExpression",
                                          "expression": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "instance",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3064,
                                            "end": 3072
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3076,
                                              "end": 3080
                                            },
                                            "typeArguments": null,
                                            "start": 3076,
                                            "end": 3080
                                          },
                                          "start": 3064,
                                          "end": 3080
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3056,
                                        "end": 3080
                                      }
                                    ],
                                    "start": 3055,
                                    "end": 3081
                                  }
                                ],
                                "optional": false,
                                "start": 3030,
                                "end": 3082
                              },
                              "typeAnnotation": {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3086,
                                      "end": 3092
                                    },
                                    "typeArguments": null,
                                    "start": 3086,
                                    "end": 3092
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
                                          "name": "record",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3096,
                                          "end": 3102
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3104,
                                              "end": 3108
                                            },
                                            "typeArguments": null,
                                            "start": 3104,
                                            "end": 3108
                                          },
                                          "start": 3102,
                                          "end": 3108
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3096,
                                        "end": 3108
                                      }
                                    ],
                                    "start": 3095,
                                    "end": 3109
                                  }
                                ],
                                "start": 3086,
                                "end": 3109
                              },
                              "start": 3030,
                              "end": 3109
                            }
                          ],
                          "optional": false,
                          "start": 3008,
                          "end": 3110
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3114,
                            "end": 3135
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3136,
                                      "end": 3142
                                    },
                                    "typeArguments": null,
                                    "start": 3136,
                                    "end": 3142
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
                                          "name": "record",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3146,
                                          "end": 3152
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3154,
                                              "end": 3158
                                            },
                                            "typeArguments": null,
                                            "start": 3154,
                                            "end": 3158
                                          },
                                          "start": 3152,
                                          "end": 3158
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3146,
                                        "end": 3158
                                      }
                                    ],
                                    "start": 3145,
                                    "end": 3159
                                  }
                                ],
                                "start": 3136,
                                "end": 3159
                              }
                            ],
                            "start": 3135,
                            "end": 3160
                          },
                          "start": 3114,
                          "end": 3160
                        },
                        "start": 3008,
                        "end": 3160
                      },
                      "id": null,
                      "generator": false,
                      "start": 2962,
                      "end": 3160
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2954,
                    "end": 3160
                  }
                ],
                "start": 2946,
                "end": 3166
              },
              "start": 2921,
              "end": 3166
            },
            "id": null,
            "generator": false,
            "start": 2888,
            "end": 3170
          },
          "definite": false,
          "start": 2858,
          "end": 3170
        }
      ],
      "declare": false,
      "start": 2852,
      "end": 3171
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MaxMsToWaitBeforePublishingFieldConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 3182,
        "end": 3225
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 3226,
              "end": 3232
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3226,
            "end": 3232
          }
        ],
        "start": 3225,
        "end": 3233
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SO_FAR",
            "optional": false,
            "typeAnnotation": null,
            "start": 3240,
            "end": 3246
          },
          "typeArguments": null,
          "start": 3240,
          "end": 3246
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
                "name": "maxMsToWaitBeforePublishing",
                "optional": false,
                "typeAnnotation": null,
                "start": 3256,
                "end": 3283
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3285,
                  "end": 3288
                },
                "start": 3283,
                "end": 3288
              },
              "accessibility": null,
              "static": false,
              "start": 3256,
              "end": 3288
            }
          ],
          "start": 3255,
          "end": 3289
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 3292,
          "end": 3294
        },
        "falseType": {
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
                "name": "maxMsToWaitBeforePublishing",
                "optional": false,
                "typeAnnotation": null,
                "start": 3305,
                "end": 3332
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3338,
                          "end": 3344
                        },
                        "start": 3336,
                        "end": 3344
                      },
                      "start": 3335,
                      "end": 3344
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3349,
                        "end": 3370
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3371,
                                  "end": 3377
                                },
                                "typeArguments": null,
                                "start": 3371,
                                "end": 3377
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
                                      "name": "maxMsToWaitBeforePublishing",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3381,
                                      "end": 3408
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 3410,
                                        "end": 3416
                                      },
                                      "start": 3408,
                                      "end": 3416
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 3381,
                                    "end": 3416
                                  }
                                ],
                                "start": 3380,
                                "end": 3417
                              }
                            ],
                            "start": 3371,
                            "end": 3417
                          }
                        ],
                        "start": 3370,
                        "end": 3418
                      },
                      "start": 3349,
                      "end": 3418
                    },
                    "start": 3346,
                    "end": 3418
                  },
                  "start": 3334,
                  "end": 3418
                },
                "start": 3332,
                "end": 3418
              },
              "accessibility": null,
              "static": false,
              "start": 3305,
              "end": 3419
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "neverDelayPublishing",
                "optional": false,
                "typeAnnotation": null,
                "start": 3426,
                "end": 3446
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3454,
                        "end": 3475
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3476,
                                  "end": 3482
                                },
                                "typeArguments": null,
                                "start": 3476,
                                "end": 3482
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
                                      "name": "maxMsToWaitBeforePublishing",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3486,
                                      "end": 3513
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSLiteralType",
                                        "literal": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 3515,
                                          "end": 3516
                                        },
                                        "start": 3515,
                                        "end": 3516
                                      },
                                      "start": 3513,
                                      "end": 3516
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 3486,
                                    "end": 3516
                                  }
                                ],
                                "start": 3485,
                                "end": 3517
                              }
                            ],
                            "start": 3476,
                            "end": 3517
                          }
                        ],
                        "start": 3475,
                        "end": 3518
                      },
                      "start": 3454,
                      "end": 3518
                    },
                    "start": 3451,
                    "end": 3518
                  },
                  "start": 3448,
                  "end": 3518
                },
                "start": 3446,
                "end": 3518
              },
              "accessibility": null,
              "static": false,
              "start": 3426,
              "end": 3519
            }
          ],
          "start": 3297,
          "end": 3525
        },
        "start": 3240,
        "end": 3525
      },
      "declare": false,
      "start": 3177,
      "end": 3525
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
            "name": "buildMaxMsToWaitBeforePublishingFieldConstructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 3537,
            "end": 3585
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3589,
                    "end": 3595
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3589,
                  "end": 3595
                }
              ],
              "start": 3588,
              "end": 3596
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3604,
                      "end": 3610
                    },
                    "typeArguments": null,
                    "start": 3604,
                    "end": 3610
                  },
                  "start": 3602,
                  "end": 3610
                },
                "start": 3597,
                "end": 3610
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MaxMsToWaitBeforePublishingFieldConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3613,
                  "end": 3656
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SO_FAR",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3657,
                        "end": 3663
                      },
                      "typeArguments": null,
                      "start": 3657,
                      "end": 3663
                    }
                  ],
                  "start": 3656,
                  "end": 3664
                },
                "start": 3613,
                "end": 3664
              },
              "start": 3611,
              "end": 3664
            },
            "body": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "maxMsToWaitBeforePublishing",
                    "raw": "\"maxMsToWaitBeforePublishing\"",
                    "start": 3674,
                    "end": 3703
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "soFar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3707,
                    "end": 3712
                  },
                  "start": 3674,
                  "end": 3712
                },
                "consequent": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 3715,
                  "end": 3717
                },
                "alternate": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "maxMsToWaitBeforePublishing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3728,
                        "end": 3755
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "instance",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3768,
                                  "end": 3774
                                },
                                "start": 3766,
                                "end": 3774
                              },
                              "start": 3758,
                              "end": 3774
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 3777,
                              "end": 3778
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3758,
                            "end": 3778
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "buildPubSubRecordType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3791,
                              "end": 3812
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3813,
                                    "end": 3819
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3820,
                                    "end": 3826
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3813,
                                  "end": 3826
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 3827,
                                    "end": 3829
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3831,
                                    "end": 3836
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "maxMsToWaitBeforePublishing",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3839,
                                          "end": 3866
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "instance",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3868,
                                          "end": 3876
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 3839,
                                        "end": 3876
                                      }
                                    ],
                                    "start": 3838,
                                    "end": 3877
                                  }
                                ],
                                "optional": false,
                                "start": 3813,
                                "end": 3878
                              }
                            ],
                            "optional": false,
                            "start": 3791,
                            "end": 3879
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "BuildPubSubRecordType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3883,
                              "end": 3904
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIntersectionType",
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "SO_FAR",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3905,
                                        "end": 3911
                                      },
                                      "typeArguments": null,
                                      "start": 3905,
                                      "end": 3911
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
                                            "name": "maxMsToWaitBeforePublishing",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3915,
                                            "end": 3942
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 3944,
                                              "end": 3950
                                            },
                                            "start": 3942,
                                            "end": 3950
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 3915,
                                          "end": 3950
                                        }
                                      ],
                                      "start": 3914,
                                      "end": 3951
                                    }
                                  ],
                                  "start": 3905,
                                  "end": 3951
                                }
                              ],
                              "start": 3904,
                              "end": 3952
                            },
                            "start": 3883,
                            "end": 3952
                          },
                          "start": 3791,
                          "end": 3952
                        },
                        "id": null,
                        "generator": false,
                        "start": 3757,
                        "end": 3952
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3728,
                      "end": 3952
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "neverDelayPublishing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3960,
                        "end": 3980
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "buildPubSubRecordType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3996,
                              "end": 4017
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4018,
                                    "end": 4024
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4025,
                                    "end": 4031
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4018,
                                  "end": 4031
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 4032,
                                    "end": 4034
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4036,
                                    "end": 4041
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "maxMsToWaitBeforePublishing",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4044,
                                          "end": 4071
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 4073,
                                          "end": 4074
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 4044,
                                        "end": 4074
                                      }
                                    ],
                                    "start": 4043,
                                    "end": 4075
                                  }
                                ],
                                "optional": false,
                                "start": 4018,
                                "end": 4076
                              }
                            ],
                            "optional": false,
                            "start": 3996,
                            "end": 4077
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "BuildPubSubRecordType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4081,
                              "end": 4102
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSIntersectionType",
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "SO_FAR",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4103,
                                        "end": 4109
                                      },
                                      "typeArguments": null,
                                      "start": 4103,
                                      "end": 4109
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
                                            "name": "maxMsToWaitBeforePublishing",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4113,
                                            "end": 4140
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSLiteralType",
                                              "literal": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0",
                                                "start": 4142,
                                                "end": 4143
                                              },
                                              "start": 4142,
                                              "end": 4143
                                            },
                                            "start": 4140,
                                            "end": 4143
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 4113,
                                          "end": 4143
                                        }
                                      ],
                                      "start": 4112,
                                      "end": 4144
                                    }
                                  ],
                                  "start": 4103,
                                  "end": 4144
                                }
                              ],
                              "start": 4102,
                              "end": 4145
                            },
                            "start": 4081,
                            "end": 4145
                          },
                          "start": 3996,
                          "end": 4145
                        },
                        "id": null,
                        "generator": false,
                        "start": 3982,
                        "end": 4145
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3960,
                      "end": 4145
                    }
                  ],
                  "start": 3720,
                  "end": 4152
                },
                "start": 3674,
                "end": 4152
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MaxMsToWaitBeforePublishingFieldConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4160,
                  "end": 4203
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SO_FAR",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4204,
                        "end": 4210
                      },
                      "typeArguments": null,
                      "start": 4204,
                      "end": 4210
                    }
                  ],
                  "start": 4203,
                  "end": 4211
                },
                "start": 4160,
                "end": 4211
              },
              "start": 3668,
              "end": 4211
            },
            "id": null,
            "generator": false,
            "start": 3588,
            "end": 4211
          },
          "definite": false,
          "start": 3537,
          "end": 4211
        }
      ],
      "declare": false,
      "start": 3531,
      "end": 4212
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 4223,
        "end": 4238
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 4239,
              "end": 4245
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4239,
            "end": 4245
          }
        ],
        "start": 4238,
        "end": 4246
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SO_FAR",
            "optional": false,
            "typeAnnotation": null,
            "start": 4253,
            "end": 4259
          },
          "typeArguments": null,
          "start": 4253,
          "end": 4259
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
                "name": "identifier",
                "optional": false,
                "typeAnnotation": null,
                "start": 4269,
                "end": 4279
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4281,
                  "end": 4284
                },
                "start": 4279,
                "end": 4284
              },
              "accessibility": null,
              "static": false,
              "start": 4269,
              "end": 4285
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "record",
                "optional": false,
                "typeAnnotation": null,
                "start": 4286,
                "end": 4292
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4294,
                  "end": 4297
                },
                "start": 4292,
                "end": 4297
              },
              "accessibility": null,
              "static": false,
              "start": 4286,
              "end": 4298
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "maxMsToWaitBeforePublishing",
                "optional": false,
                "typeAnnotation": null,
                "start": 4299,
                "end": 4326
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4328,
                  "end": 4334
                },
                "start": 4326,
                "end": 4334
              },
              "accessibility": null,
              "static": false,
              "start": 4299,
              "end": 4335
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "storedAs",
                "optional": false,
                "typeAnnotation": null,
                "start": 4336,
                "end": 4344
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PubSubRecordIsStoredInRedisAsA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4346,
                    "end": 4376
                  },
                  "typeArguments": null,
                  "start": 4346,
                  "end": 4376
                },
                "start": 4344,
                "end": 4376
              },
              "accessibility": null,
              "static": false,
              "start": 4336,
              "end": 4376
            }
          ],
          "start": 4268,
          "end": 4377
        },
        "trueType": {
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
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 4388,
                "end": 4392
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4394,
                    "end": 4400
                  },
                  "typeArguments": null,
                  "start": 4394,
                  "end": 4400
                },
                "start": 4392,
                "end": 4400
              },
              "accessibility": null,
              "static": false,
              "start": 4388,
              "end": 4401
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fields",
                "optional": false,
                "typeAnnotation": null,
                "start": 4408,
                "end": 4414
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4416,
                    "end": 4419
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SO_FAR",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4426,
                            "end": 4432
                          },
                          "typeArguments": null,
                          "start": 4426,
                          "end": 4432
                        },
                        "start": 4420,
                        "end": 4432
                      }
                    ],
                    "start": 4419,
                    "end": 4433
                  },
                  "start": 4416,
                  "end": 4433
                },
                "start": 4414,
                "end": 4433
              },
              "accessibility": null,
              "static": false,
              "start": 4408,
              "end": 4434
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasField",
                "optional": false,
                "typeAnnotation": null,
                "start": 4441,
                "end": 4449
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fieldName",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 4463,
                              "end": 4469
                            },
                            {
                              "type": "TSNumberKeyword",
                              "start": 4472,
                              "end": 4478
                            },
                            {
                              "type": "TSSymbolKeyword",
                              "start": 4481,
                              "end": 4487
                            }
                          ],
                          "start": 4463,
                          "end": 4487
                        },
                        "start": 4461,
                        "end": 4487
                      },
                      "start": 4452,
                      "end": 4487
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "parameterName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fieldName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4492,
                        "end": 4501
                      },
                      "asserts": false,
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
                              "name": "SO_FAR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4511,
                              "end": 4517
                            },
                            "typeArguments": null,
                            "start": 4511,
                            "end": 4517
                          },
                          "start": 4505,
                          "end": 4517
                        },
                        "start": 4505,
                        "end": 4517
                      },
                      "start": 4492,
                      "end": 4517
                    },
                    "start": 4489,
                    "end": 4517
                  },
                  "start": 4451,
                  "end": 4517
                },
                "start": 4449,
                "end": 4517
              },
              "accessibility": null,
              "static": false,
              "start": 4441,
              "end": 4517
            }
          ],
          "start": 4380,
          "end": 4523
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 4526,
          "end": 4528
        },
        "start": 4253,
        "end": 4528
      },
      "declare": false,
      "start": 4218,
      "end": 4528
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
            "name": "buildType",
            "optional": false,
            "typeAnnotation": null,
            "start": 4540,
            "end": 4549
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4553,
                    "end": 4559
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4553,
                  "end": 4559
                }
              ],
              "start": 4552,
              "end": 4560
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4568,
                      "end": 4574
                    },
                    "typeArguments": null,
                    "start": 4568,
                    "end": 4574
                  },
                  "start": 4566,
                  "end": 4574
                },
                "start": 4561,
                "end": 4574
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "identifier",
                        "raw": "\"identifier\"",
                        "start": 4585,
                        "end": 4597
                      },
                      "operator": "in",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4601,
                        "end": 4606
                      },
                      "start": 4585,
                      "end": 4606
                    },
                    "operator": "&&",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "object",
                        "raw": "\"object\"",
                        "start": 4610,
                        "end": 4618
                      },
                      "operator": "in",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4622,
                        "end": 4627
                      },
                      "start": 4610,
                      "end": 4627
                    },
                    "start": 4585,
                    "end": 4627
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "maxMsToWaitBeforePublishing",
                      "raw": "\"maxMsToWaitBeforePublishing\"",
                      "start": 4631,
                      "end": 4660
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "soFar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4664,
                      "end": 4669
                    },
                    "start": 4631,
                    "end": 4669
                  },
                  "start": 4585,
                  "end": 4669
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "PubSubRecordIsStoredInRedisAsA",
                    "raw": "\"PubSubRecordIsStoredInRedisAsA\"",
                    "start": 4673,
                    "end": 4705
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "soFar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4709,
                    "end": 4714
                  },
                  "start": 4673,
                  "end": 4714
                },
                "start": 4585,
                "end": 4714
              },
              "consequent": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 4717,
                "end": 4719
              },
              "alternate": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4730,
                      "end": 4734
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "soFar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4736,
                      "end": 4741
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4730,
                    "end": 4741
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4749,
                      "end": 4755
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Set",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4767,
                          "end": 4770
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Object",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4771,
                                  "end": 4777
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "keys",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4778,
                                  "end": 4782
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4771,
                                "end": 4782
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "soFar",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4783,
                                  "end": 4788
                                }
                              ],
                              "optional": false,
                              "start": 4771,
                              "end": 4789
                            },
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SO_FAR",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4800,
                                    "end": 4806
                                  },
                                  "typeArguments": null,
                                  "start": 4800,
                                  "end": 4806
                                },
                                "start": 4794,
                                "end": 4806
                              },
                              "start": 4793,
                              "end": 4809
                            },
                            "start": 4771,
                            "end": 4809
                          }
                        ],
                        "start": 4763,
                        "end": 4810
                      },
                      "id": null,
                      "generator": false,
                      "start": 4757,
                      "end": 4810
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4749,
                    "end": 4810
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "hasField",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4818,
                      "end": 4826
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fieldName",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 4840,
                                  "end": 4846
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 4849,
                                  "end": 4855
                                },
                                {
                                  "type": "TSSymbolKeyword",
                                  "start": 4858,
                                  "end": 4864
                                }
                              ],
                              "start": 4840,
                              "end": 4864
                            },
                            "start": 4838,
                            "end": 4864
                          },
                          "start": 4829,
                          "end": 4864
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fieldName",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4869,
                          "end": 4878
                        },
                        "operator": "in",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "soFar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4882,
                          "end": 4887
                        },
                        "start": 4869,
                        "end": 4887
                      },
                      "id": null,
                      "generator": false,
                      "start": 4828,
                      "end": 4887
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4818,
                    "end": 4887
                  }
                ],
                "start": 4722,
                "end": 4893
              },
              "start": 4585,
              "end": 4893
            },
            "id": null,
            "generator": false,
            "start": 4552,
            "end": 4897
          },
          "definite": false,
          "start": 4540,
          "end": 4897
        }
      ],
      "declare": false,
      "start": 4534,
      "end": 4898
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BuildPubSubRecordType",
        "optional": false,
        "typeAnnotation": null,
        "start": 4909,
        "end": 4930
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null,
              "start": 4931,
              "end": 4937
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4931,
            "end": 4937
          }
        ],
        "start": 4930,
        "end": 4938
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NameFieldConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 4945,
              "end": 4965
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4966,
                    "end": 4972
                  },
                  "typeArguments": null,
                  "start": 4966,
                  "end": 4972
                }
              ],
              "start": 4965,
              "end": 4973
            },
            "start": 4945,
            "end": 4973
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IdentifierFieldConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 4980,
              "end": 5006
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5007,
                    "end": 5013
                  },
                  "typeArguments": null,
                  "start": 5007,
                  "end": 5013
                }
              ],
              "start": 5006,
              "end": 5014
            },
            "start": 4980,
            "end": 5014
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "RecordFieldConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 5021,
              "end": 5043
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5044,
                    "end": 5050
                  },
                  "typeArguments": null,
                  "start": 5044,
                  "end": 5050
                }
              ],
              "start": 5043,
              "end": 5051
            },
            "start": 5021,
            "end": 5051
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "StoredAsConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 5058,
              "end": 5077
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5078,
                    "end": 5084
                  },
                  "typeArguments": null,
                  "start": 5078,
                  "end": 5084
                }
              ],
              "start": 5077,
              "end": 5085
            },
            "start": 5058,
            "end": 5085
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MaxMsToWaitBeforePublishingFieldConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 5150,
              "end": 5193
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5194,
                    "end": 5200
                  },
                  "typeArguments": null,
                  "start": 5194,
                  "end": 5200
                }
              ],
              "start": 5193,
              "end": 5201
            },
            "start": 5150,
            "end": 5201
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 5208,
              "end": 5223
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5224,
                    "end": 5230
                  },
                  "typeArguments": null,
                  "start": 5224,
                  "end": 5230
                }
              ],
              "start": 5223,
              "end": 5231
            },
            "start": 5208,
            "end": 5231
          }
        ],
        "start": 4945,
        "end": 5231
      },
      "declare": false,
      "start": 4904,
      "end": 5231
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
            "name": "buildPubSubRecordType",
            "optional": false,
            "typeAnnotation": null,
            "start": 5243,
            "end": 5264
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5268,
                    "end": 5274
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5268,
                  "end": 5274
                }
              ],
              "start": 5267,
              "end": 5275
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5283,
                      "end": 5289
                    },
                    "typeArguments": null,
                    "start": 5283,
                    "end": 5289
                  },
                  "start": 5281,
                  "end": 5289
                },
                "start": 5276,
                "end": 5289
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSAsExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5294,
                    "end": 5300
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "assign",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5301,
                    "end": 5307
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5294,
                  "end": 5307
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 5313,
                    "end": 5315
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "buildNameFieldConstructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5321,
                      "end": 5346
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5347,
                        "end": 5352
                      }
                    ],
                    "optional": false,
                    "start": 5321,
                    "end": 5353
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "buildIdentifierFieldConstructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5359,
                      "end": 5390
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5391,
                        "end": 5396
                      }
                    ],
                    "optional": false,
                    "start": 5359,
                    "end": 5397
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "buildRecordFieldConstructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5403,
                      "end": 5430
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5431,
                        "end": 5436
                      }
                    ],
                    "optional": false,
                    "start": 5403,
                    "end": 5437
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "buildStoredAsConstructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5443,
                      "end": 5467
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5468,
                        "end": 5473
                      }
                    ],
                    "optional": false,
                    "start": 5443,
                    "end": 5474
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "buildMaxMsToWaitBeforePublishingFieldConstructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5480,
                      "end": 5528
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5529,
                        "end": 5534
                      }
                    ],
                    "optional": false,
                    "start": 5480,
                    "end": 5535
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "buildType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5541,
                      "end": 5550
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5551,
                        "end": 5556
                      }
                    ],
                    "optional": false,
                    "start": 5541,
                    "end": 5557
                  }
                ],
                "optional": false,
                "start": 5294,
                "end": 5561
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BuildPubSubRecordType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5565,
                  "end": 5586
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SO_FAR",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5587,
                        "end": 5593
                      },
                      "typeArguments": null,
                      "start": 5587,
                      "end": 5593
                    }
                  ],
                  "start": 5586,
                  "end": 5594
                },
                "start": 5565,
                "end": 5594
              },
              "start": 5294,
              "end": 5594
            },
            "id": null,
            "generator": false,
            "start": 5267,
            "end": 5594
          },
          "definite": false,
          "start": 5243,
          "end": 5594
        }
      ],
      "declare": false,
      "start": 5237,
      "end": 5595
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
            "name": "PubSubRecordType",
            "optional": false,
            "typeAnnotation": null,
            "start": 5604,
            "end": 5620
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "buildPubSubRecordType",
              "optional": false,
              "typeAnnotation": null,
              "start": 5623,
              "end": 5644
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 5645,
                "end": 5647
              }
            ],
            "optional": false,
            "start": 5623,
            "end": 5648
          },
          "definite": false,
          "start": 5604,
          "end": 5648
        }
      ],
      "declare": false,
      "start": 5598,
      "end": 5649
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 194,
  "end": 5649
}
```
