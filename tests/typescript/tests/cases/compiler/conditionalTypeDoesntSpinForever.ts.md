__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 194,
  "end": 5649,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 194,
      "end": 325,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 201,
        "end": 325,
        "id": {
          "type": "Identifier",
          "start": 206,
          "end": 236,
          "decorators": [],
          "name": "PubSubRecordIsStoredInRedisAsA",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 237,
          "end": 325,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 243,
              "end": 266,
              "id": {
                "type": "Identifier",
                "start": 243,
                "end": 252,
                "decorators": [],
                "name": "redisHash",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 255,
                "end": 266,
                "value": "redisHash",
                "raw": "\"redisHash\""
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 272,
              "end": 321,
              "id": {
                "type": "Identifier",
                "start": 272,
                "end": 294,
                "decorators": [],
                "name": "jsonEncodedRedisString",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 297,
                "end": 321,
                "value": "jsonEncodedRedisString",
                "raw": "\"jsonEncodedRedisString\""
              },
              "computed": false
            }
          ]
        },
        "const": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 331,
      "end": 582,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 338,
        "end": 582,
        "id": {
          "type": "Identifier",
          "start": 348,
          "end": 360,
          "decorators": [],
          "name": "PubSubRecord",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 360,
          "end": 425,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 361,
              "end": 380,
              "name": {
                "type": "Identifier",
                "start": 361,
                "end": 365,
                "decorators": [],
                "name": "NAME",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 374,
                "end": 380
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 382,
              "end": 388,
              "name": {
                "type": "Identifier",
                "start": 382,
                "end": 388,
                "decorators": [],
                "name": "RECORD",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 390,
              "end": 424,
              "name": {
                "type": "Identifier",
                "start": 390,
                "end": 400,
                "decorators": [],
                "name": "IDENTIFIER",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 409,
                "end": 424,
                "typeName": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 416,
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 416,
                  "end": 424,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 417,
                      "end": 423,
                      "typeName": {
                        "type": "Identifier",
                        "start": 417,
                        "end": 423,
                        "decorators": [],
                        "name": "RECORD",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 426,
          "end": 582,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 432,
              "end": 443,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 432,
                "end": 436,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 436,
                "end": 442,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 438,
                  "end": 442,
                  "typeName": {
                    "type": "Identifier",
                    "start": 438,
                    "end": 442,
                    "decorators": [],
                    "name": "NAME",
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
              "start": 448,
              "end": 463,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 448,
                "end": 454,
                "decorators": [],
                "name": "record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 454,
                "end": 462,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 456,
                  "end": 462,
                  "typeName": {
                    "type": "Identifier",
                    "start": 456,
                    "end": 462,
                    "decorators": [],
                    "name": "RECORD",
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
              "start": 468,
              "end": 491,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 468,
                "end": 478,
                "decorators": [],
                "name": "identifier",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 478,
                "end": 490,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 480,
                  "end": 490,
                  "typeName": {
                    "type": "Identifier",
                    "start": 480,
                    "end": 490,
                    "decorators": [],
                    "name": "IDENTIFIER",
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
              "start": 496,
              "end": 537,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 496,
                "end": 504,
                "decorators": [],
                "name": "storedAs",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 504,
                "end": 536,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 506,
                  "end": 536,
                  "typeName": {
                    "type": "Identifier",
                    "start": 506,
                    "end": 536,
                    "decorators": [],
                    "name": "PubSubRecordIsStoredInRedisAsA",
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
              "start": 542,
              "end": 578,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 542,
                "end": 569,
                "decorators": [],
                "name": "maxMsToWaitBeforePublishing",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 569,
                "end": 577,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 571,
                  "end": 577
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 588,
      "end": 746,
      "id": {
        "type": "Identifier",
        "start": 593,
        "end": 613,
        "decorators": [],
        "name": "NameFieldConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 613,
        "end": 621,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 614,
            "end": 620,
            "name": {
              "type": "Identifier",
              "start": 614,
              "end": 620,
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 628,
        "end": 746,
        "checkType": {
          "type": "TSTypeReference",
          "start": 628,
          "end": 634,
          "typeName": {
            "type": "Identifier",
            "start": 628,
            "end": 634,
            "decorators": [],
            "name": "SO_FAR",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 643,
          "end": 654,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 644,
              "end": 653,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 644,
                "end": 648,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 648,
                "end": 653,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 650,
                  "end": 653
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "start": 657,
          "end": 659,
          "members": []
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "start": 662,
          "end": 746,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 670,
              "end": 740,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 670,
                "end": 674,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 674,
                "end": 740,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 676,
                  "end": 740,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 676,
                    "end": 682,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 677,
                        "end": 681,
                        "name": {
                          "type": "Identifier",
                          "start": 677,
                          "end": 681,
                          "decorators": [],
                          "name": "TYPE",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 683,
                      "end": 691,
                      "decorators": [],
                      "name": "t",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 685,
                        "end": 691,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 687,
                          "end": 691,
                          "typeName": {
                            "type": "Identifier",
                            "start": 687,
                            "end": 691,
                            "decorators": [],
                            "name": "TYPE",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 693,
                    "end": 740,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 696,
                      "end": 740,
                      "typeName": {
                        "type": "Identifier",
                        "start": 696,
                        "end": 717,
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 717,
                        "end": 740,
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "start": 718,
                            "end": 739,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 718,
                                "end": 724,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 718,
                                  "end": 724,
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeLiteral",
                                "start": 727,
                                "end": 739,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 728,
                                    "end": 738,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 728,
                                      "end": 732,
                                      "decorators": [],
                                      "name": "name",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 732,
                                      "end": 738,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 734,
                                        "end": 738,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 734,
                                          "end": 738,
                                          "decorators": [],
                                          "name": "TYPE",
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
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 752,
      "end": 1059,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 758,
          "end": 1058,
          "id": {
            "type": "Identifier",
            "start": 758,
            "end": 783,
            "decorators": [],
            "name": "buildNameFieldConstructor",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 786,
            "end": 1058,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 786,
              "end": 794,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 787,
                  "end": 793,
                  "name": {
                    "type": "Identifier",
                    "start": 787,
                    "end": 793,
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 795,
                "end": 808,
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 800,
                  "end": 808,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 802,
                    "end": 808,
                    "typeName": {
                      "type": "Identifier",
                      "start": 802,
                      "end": 808,
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "start": 819,
              "end": 1054,
              "test": {
                "type": "BinaryExpression",
                "start": 819,
                "end": 834,
                "left": {
                  "type": "Literal",
                  "start": 819,
                  "end": 825,
                  "value": "name",
                  "raw": "\"name\""
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 829,
                  "end": 834,
                  "decorators": [],
                  "name": "soFar",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "consequent": {
                "type": "ObjectExpression",
                "start": 837,
                "end": 839,
                "properties": []
              },
              "alternate": {
                "type": "ObjectExpression",
                "start": 842,
                "end": 1054,
                "properties": [
                  {
                    "type": "Property",
                    "start": 850,
                    "end": 1048,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 850,
                      "end": 854,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 856,
                      "end": 1048,
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 856,
                        "end": 862,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 857,
                            "end": 861,
                            "name": {
                              "type": "Identifier",
                              "start": 857,
                              "end": 861,
                              "decorators": [],
                              "name": "TYPE",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "AssignmentPattern",
                          "start": 863,
                          "end": 889,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 863,
                            "end": 877,
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 871,
                              "end": 877,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 873,
                                "end": 877,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 873,
                                  "end": 877,
                                  "decorators": [],
                                  "name": "TYPE",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 880,
                            "end": 889,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "TSAsExpression",
                        "start": 902,
                        "end": 1048,
                        "expression": {
                          "type": "CallExpression",
                          "start": 902,
                          "end": 1000,
                          "callee": {
                            "type": "Identifier",
                            "start": 902,
                            "end": 923,
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TSAsExpression",
                              "start": 924,
                              "end": 999,
                              "expression": {
                                "type": "CallExpression",
                                "start": 924,
                                "end": 974,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 924,
                                  "end": 937,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 924,
                                    "end": 930,
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 931,
                                    "end": 937,
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 938,
                                    "end": 940,
                                    "properties": []
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 942,
                                    "end": 947,
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 949,
                                    "end": 973,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 950,
                                        "end": 972,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 950,
                                          "end": 954,
                                          "decorators": [],
                                          "name": "name",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "TSAsExpression",
                                          "start": 956,
                                          "end": 972,
                                          "expression": {
                                            "type": "Identifier",
                                            "start": 956,
                                            "end": 964,
                                            "decorators": [],
                                            "name": "instance",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 968,
                                            "end": 972,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 968,
                                              "end": 972,
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null
                                          }
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSIntersectionType",
                                "start": 978,
                                "end": 999,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 978,
                                    "end": 984,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 978,
                                      "end": 984,
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeLiteral",
                                    "start": 987,
                                    "end": 999,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 988,
                                        "end": 998,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 988,
                                          "end": 992,
                                          "decorators": [],
                                          "name": "name",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 992,
                                          "end": 998,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 994,
                                            "end": 998,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 994,
                                              "end": 998,
                                              "decorators": [],
                                              "name": "TYPE",
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
                              }
                            }
                          ],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1004,
                          "end": 1048,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1004,
                            "end": 1025,
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1025,
                            "end": 1048,
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "start": 1026,
                                "end": 1047,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1026,
                                    "end": 1032,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1026,
                                      "end": 1032,
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeLiteral",
                                    "start": 1035,
                                    "end": 1047,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 1036,
                                        "end": 1046,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1036,
                                          "end": 1040,
                                          "decorators": [],
                                          "name": "name",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1040,
                                          "end": 1046,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 1042,
                                            "end": 1046,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1042,
                                              "end": 1046,
                                              "decorators": [],
                                              "name": "TYPE",
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
                              }
                            ]
                          }
                        }
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1065,
      "end": 1407,
      "id": {
        "type": "Identifier",
        "start": 1070,
        "end": 1089,
        "decorators": [],
        "name": "StoredAsConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1089,
        "end": 1097,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1090,
            "end": 1096,
            "name": {
              "type": "Identifier",
              "start": 1090,
              "end": 1096,
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1104,
        "end": 1407,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1104,
          "end": 1110,
          "typeName": {
            "type": "Identifier",
            "start": 1104,
            "end": 1110,
            "decorators": [],
            "name": "SO_FAR",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 1119,
          "end": 1134,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 1120,
              "end": 1133,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1120,
                "end": 1128,
                "decorators": [],
                "name": "storedAs",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1128,
                "end": 1133,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1130,
                  "end": 1133
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "start": 1137,
          "end": 1139,
          "members": []
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "start": 1142,
          "end": 1407,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 1150,
              "end": 1286,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1150,
                "end": 1180,
                "decorators": [],
                "name": "storedAsJsonEncodedRedisString",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1180,
                "end": 1285,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 1182,
                  "end": 1285,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1185,
                    "end": 1285,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1188,
                      "end": 1285,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1188,
                        "end": 1209,
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1209,
                        "end": 1285,
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "start": 1210,
                            "end": 1284,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 1210,
                                "end": 1216,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1210,
                                  "end": 1216,
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeLiteral",
                                "start": 1219,
                                "end": 1284,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 1220,
                                    "end": 1283,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1220,
                                      "end": 1228,
                                      "decorators": [],
                                      "name": "storedAs",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1228,
                                      "end": 1283,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1230,
                                        "end": 1283,
                                        "typeName": {
                                          "type": "TSQualifiedName",
                                          "start": 1230,
                                          "end": 1283,
                                          "left": {
                                            "type": "Identifier",
                                            "start": 1230,
                                            "end": 1260,
                                            "decorators": [],
                                            "name": "PubSubRecordIsStoredInRedisAsA",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "start": 1261,
                                            "end": 1283,
                                            "decorators": [],
                                            "name": "jsonEncodedRedisString",
                                            "optional": false,
                                            "typeAnnotation": null
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
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1293,
              "end": 1401,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1293,
                "end": 1308,
                "decorators": [],
                "name": "storedRedisHash",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1308,
                "end": 1400,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 1310,
                  "end": 1400,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1313,
                    "end": 1400,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1316,
                      "end": 1400,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1316,
                        "end": 1337,
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1337,
                        "end": 1400,
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "start": 1338,
                            "end": 1399,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 1338,
                                "end": 1344,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1338,
                                  "end": 1344,
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeLiteral",
                                "start": 1347,
                                "end": 1399,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 1348,
                                    "end": 1398,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1348,
                                      "end": 1356,
                                      "decorators": [],
                                      "name": "storedAs",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1356,
                                      "end": 1398,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1358,
                                        "end": 1398,
                                        "typeName": {
                                          "type": "TSQualifiedName",
                                          "start": 1358,
                                          "end": 1398,
                                          "left": {
                                            "type": "Identifier",
                                            "start": 1358,
                                            "end": 1388,
                                            "decorators": [],
                                            "name": "PubSubRecordIsStoredInRedisAsA",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "start": 1389,
                                            "end": 1398,
                                            "decorators": [],
                                            "name": "redisHash",
                                            "optional": false,
                                            "typeAnnotation": null
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
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1413,
      "end": 2037,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1419,
          "end": 2036,
          "id": {
            "type": "Identifier",
            "start": 1419,
            "end": 1443,
            "decorators": [],
            "name": "buildStoredAsConstructor",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1446,
            "end": 2036,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1446,
              "end": 1454,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1447,
                  "end": 1453,
                  "name": {
                    "type": "Identifier",
                    "start": 1447,
                    "end": 1453,
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 1455,
                "end": 1468,
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1460,
                  "end": 1468,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1462,
                    "end": 1468,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1462,
                      "end": 1468,
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "start": 1479,
              "end": 2032,
              "test": {
                "type": "BinaryExpression",
                "start": 1479,
                "end": 1498,
                "left": {
                  "type": "Literal",
                  "start": 1479,
                  "end": 1489,
                  "value": "storedAs",
                  "raw": "\"storedAs\""
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 1493,
                  "end": 1498,
                  "decorators": [],
                  "name": "soFar",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "consequent": {
                "type": "ObjectExpression",
                "start": 1501,
                "end": 1503,
                "properties": []
              },
              "alternate": {
                "type": "ObjectExpression",
                "start": 1506,
                "end": 2032,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1514,
                    "end": 1785,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1514,
                      "end": 1544,
                      "decorators": [],
                      "name": "storedAsJsonEncodedRedisString",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1546,
                      "end": 1785,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "TSAsExpression",
                        "start": 1560,
                        "end": 1785,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1560,
                          "end": 1674,
                          "callee": {
                            "type": "Identifier",
                            "start": 1560,
                            "end": 1581,
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "start": 1582,
                              "end": 1673,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1582,
                                "end": 1595,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1582,
                                  "end": 1588,
                                  "decorators": [],
                                  "name": "Object",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1589,
                                  "end": 1595,
                                  "decorators": [],
                                  "name": "assign",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ObjectExpression",
                                  "start": 1596,
                                  "end": 1598,
                                  "properties": []
                                },
                                {
                                  "type": "Identifier",
                                  "start": 1600,
                                  "end": 1605,
                                  "decorators": [],
                                  "name": "soFar",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "ObjectExpression",
                                  "start": 1607,
                                  "end": 1672,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 1608,
                                      "end": 1671,
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1608,
                                        "end": 1616,
                                        "decorators": [],
                                        "name": "storedAs",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "value": {
                                        "type": "MemberExpression",
                                        "start": 1618,
                                        "end": 1671,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 1618,
                                          "end": 1648,
                                          "decorators": [],
                                          "name": "PubSubRecordIsStoredInRedisAsA",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 1649,
                                          "end": 1671,
                                          "decorators": [],
                                          "name": "jsonEncodedRedisString",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false
                                    }
                                  ]
                                }
                              ],
                              "optional": false
                            }
                          ],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1688,
                          "end": 1785,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1688,
                            "end": 1709,
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1709,
                            "end": 1785,
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "start": 1710,
                                "end": 1784,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1710,
                                    "end": 1716,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1710,
                                      "end": 1716,
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeLiteral",
                                    "start": 1719,
                                    "end": 1784,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 1720,
                                        "end": 1783,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1720,
                                          "end": 1728,
                                          "decorators": [],
                                          "name": "storedAs",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1728,
                                          "end": 1783,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 1730,
                                            "end": 1783,
                                            "typeName": {
                                              "type": "TSQualifiedName",
                                              "start": 1730,
                                              "end": 1783,
                                              "left": {
                                                "type": "Identifier",
                                                "start": 1730,
                                                "end": 1760,
                                                "decorators": [],
                                                "name": "PubSubRecordIsStoredInRedisAsA",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "start": 1761,
                                                "end": 1783,
                                                "decorators": [],
                                                "name": "jsonEncodedRedisString",
                                                "optional": false,
                                                "typeAnnotation": null
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
                                ]
                              }
                            ]
                          }
                        }
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1793,
                    "end": 2025,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1793,
                      "end": 1810,
                      "decorators": [],
                      "name": "storedAsRedisHash",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1812,
                      "end": 2025,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "TSAsExpression",
                        "start": 1826,
                        "end": 2025,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1826,
                          "end": 1927,
                          "callee": {
                            "type": "Identifier",
                            "start": 1826,
                            "end": 1847,
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "start": 1848,
                              "end": 1926,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1848,
                                "end": 1861,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1848,
                                  "end": 1854,
                                  "decorators": [],
                                  "name": "Object",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1855,
                                  "end": 1861,
                                  "decorators": [],
                                  "name": "assign",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ObjectExpression",
                                  "start": 1862,
                                  "end": 1864,
                                  "properties": []
                                },
                                {
                                  "type": "Identifier",
                                  "start": 1866,
                                  "end": 1871,
                                  "decorators": [],
                                  "name": "soFar",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "ObjectExpression",
                                  "start": 1873,
                                  "end": 1925,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 1874,
                                      "end": 1924,
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1874,
                                        "end": 1882,
                                        "decorators": [],
                                        "name": "storedAs",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "value": {
                                        "type": "MemberExpression",
                                        "start": 1884,
                                        "end": 1924,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 1884,
                                          "end": 1914,
                                          "decorators": [],
                                          "name": "PubSubRecordIsStoredInRedisAsA",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 1915,
                                          "end": 1924,
                                          "decorators": [],
                                          "name": "redisHash",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false
                                    }
                                  ]
                                }
                              ],
                              "optional": false
                            }
                          ],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1941,
                          "end": 2025,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1941,
                            "end": 1962,
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1962,
                            "end": 2025,
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "start": 1963,
                                "end": 2024,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1963,
                                    "end": 1969,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1963,
                                      "end": 1969,
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeLiteral",
                                    "start": 1972,
                                    "end": 2024,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 1973,
                                        "end": 2023,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1973,
                                          "end": 1981,
                                          "decorators": [],
                                          "name": "storedAs",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1981,
                                          "end": 2023,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 1983,
                                            "end": 2023,
                                            "typeName": {
                                              "type": "TSQualifiedName",
                                              "start": 1983,
                                              "end": 2023,
                                              "left": {
                                                "type": "Identifier",
                                                "start": 1983,
                                                "end": 2013,
                                                "decorators": [],
                                                "name": "PubSubRecordIsStoredInRedisAsA",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "start": 2014,
                                                "end": 2023,
                                                "decorators": [],
                                                "name": "redisHash",
                                                "optional": false,
                                                "typeAnnotation": null
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
                                ]
                              }
                            ]
                          }
                        }
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2043,
      "end": 2299,
      "id": {
        "type": "Identifier",
        "start": 2048,
        "end": 2074,
        "decorators": [],
        "name": "IdentifierFieldConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2074,
        "end": 2082,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2075,
            "end": 2081,
            "name": {
              "type": "Identifier",
              "start": 2075,
              "end": 2081,
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2089,
        "end": 2299,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2089,
          "end": 2095,
          "typeName": {
            "type": "Identifier",
            "start": 2089,
            "end": 2095,
            "decorators": [],
            "name": "SO_FAR",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 2104,
          "end": 2121,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 2105,
              "end": 2120,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 2105,
                "end": 2115,
                "decorators": [],
                "name": "identifier",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2115,
                "end": 2120,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 2117,
                  "end": 2120
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "start": 2124,
          "end": 2126,
          "members": []
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 2133,
          "end": 2299,
          "checkType": {
            "type": "TSTypeReference",
            "start": 2133,
            "end": 2139,
            "typeName": {
              "type": "Identifier",
              "start": 2133,
              "end": 2139,
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeLiteral",
            "start": 2148,
            "end": 2161,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2149,
                "end": 2160,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2149,
                  "end": 2155,
                  "decorators": [],
                  "name": "record",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2155,
                  "end": 2160,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2157,
                    "end": 2160
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          "trueType": {
            "type": "TSTypeLiteral",
            "start": 2164,
            "end": 2294,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2172,
                "end": 2288,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2172,
                  "end": 2182,
                  "decorators": [],
                  "name": "identifier",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2182,
                  "end": 2288,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2184,
                    "end": 2288,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 2184,
                      "end": 2224,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 2185,
                          "end": 2223,
                          "name": {
                            "type": "Identifier",
                            "start": 2185,
                            "end": 2189,
                            "decorators": [],
                            "name": "TYPE",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 2198,
                            "end": 2223,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2198,
                              "end": 2205,
                              "decorators": [],
                              "name": "Partial",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2205,
                              "end": 2223,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 2206,
                                  "end": 2222,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 2206,
                                    "end": 2212,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2206,
                                      "end": 2212,
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 2213,
                                    "end": 2221,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 2213,
                                      "end": 2221,
                                      "value": "record",
                                      "raw": "\"record\""
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2225,
                        "end": 2233,
                        "decorators": [],
                        "name": "t",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2227,
                          "end": 2233,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2229,
                            "end": 2233,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2229,
                              "end": 2233,
                              "decorators": [],
                              "name": "TYPE",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2235,
                      "end": 2288,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2238,
                        "end": 2288,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2238,
                          "end": 2259,
                          "decorators": [],
                          "name": "BuildPubSubRecordType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2259,
                          "end": 2288,
                          "params": [
                            {
                              "type": "TSIntersectionType",
                              "start": 2260,
                              "end": 2287,
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 2260,
                                  "end": 2266,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2260,
                                    "end": 2266,
                                    "decorators": [],
                                    "name": "SO_FAR",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeLiteral",
                                  "start": 2269,
                                  "end": 2287,
                                  "members": [
                                    {
                                      "type": "TSPropertySignature",
                                      "start": 2270,
                                      "end": 2286,
                                      "computed": false,
                                      "optional": false,
                                      "readonly": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 2270,
                                        "end": 2280,
                                        "decorators": [],
                                        "name": "identifier",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 2280,
                                        "end": 2286,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 2282,
                                          "end": 2286,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2282,
                                            "end": 2286,
                                            "decorators": [],
                                            "name": "TYPE",
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
                            }
                          ]
                        }
                      }
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          "falseType": {
            "type": "TSTypeLiteral",
            "start": 2297,
            "end": 2299,
            "members": []
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2305,
      "end": 2674,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2311,
          "end": 2673,
          "id": {
            "type": "Identifier",
            "start": 2311,
            "end": 2342,
            "decorators": [],
            "name": "buildIdentifierFieldConstructor",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2345,
            "end": 2673,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2345,
              "end": 2353,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2346,
                  "end": 2352,
                  "name": {
                    "type": "Identifier",
                    "start": 2346,
                    "end": 2352,
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 2354,
                "end": 2367,
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2359,
                  "end": 2367,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2361,
                    "end": 2367,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2361,
                      "end": 2367,
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "start": 2378,
              "end": 2669,
              "test": {
                "type": "LogicalExpression",
                "start": 2378,
                "end": 2425,
                "left": {
                  "type": "BinaryExpression",
                  "start": 2378,
                  "end": 2399,
                  "left": {
                    "type": "Literal",
                    "start": 2378,
                    "end": 2390,
                    "value": "identifier",
                    "raw": "\"identifier\""
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 2394,
                    "end": 2399,
                    "decorators": [],
                    "name": "soFar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "||",
                "right": {
                  "type": "UnaryExpression",
                  "start": 2404,
                  "end": 2424,
                  "operator": "!",
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 2406,
                    "end": 2423,
                    "left": {
                      "type": "Literal",
                      "start": 2406,
                      "end": 2414,
                      "value": "record",
                      "raw": "\"record\""
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "start": 2418,
                      "end": 2423,
                      "decorators": [],
                      "name": "soFar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "prefix": true
                }
              },
              "consequent": {
                "type": "ObjectExpression",
                "start": 2428,
                "end": 2430,
                "properties": []
              },
              "alternate": {
                "type": "ObjectExpression",
                "start": 2433,
                "end": 2669,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2441,
                    "end": 2663,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2441,
                      "end": 2451,
                      "decorators": [],
                      "name": "identifier",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2453,
                      "end": 2663,
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2453,
                        "end": 2459,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2454,
                            "end": 2458,
                            "name": {
                              "type": "Identifier",
                              "start": 2454,
                              "end": 2458,
                              "decorators": [],
                              "name": "TYPE",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "AssignmentPattern",
                          "start": 2460,
                          "end": 2486,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 2460,
                            "end": 2474,
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2468,
                              "end": 2474,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2470,
                                "end": 2474,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2470,
                                  "end": 2474,
                                  "decorators": [],
                                  "name": "TYPE",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 2477,
                            "end": 2486,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "TSAsExpression",
                        "start": 2499,
                        "end": 2663,
                        "expression": {
                          "type": "CallExpression",
                          "start": 2499,
                          "end": 2609,
                          "callee": {
                            "type": "Identifier",
                            "start": 2499,
                            "end": 2520,
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TSAsExpression",
                              "start": 2521,
                              "end": 2608,
                              "expression": {
                                "type": "CallExpression",
                                "start": 2521,
                                "end": 2577,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 2521,
                                  "end": 2534,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 2521,
                                    "end": 2527,
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2528,
                                    "end": 2534,
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 2535,
                                    "end": 2537,
                                    "properties": []
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2539,
                                    "end": 2544,
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 2546,
                                    "end": 2576,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 2547,
                                        "end": 2575,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 2547,
                                          "end": 2557,
                                          "decorators": [],
                                          "name": "identifier",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "TSAsExpression",
                                          "start": 2559,
                                          "end": 2575,
                                          "expression": {
                                            "type": "Identifier",
                                            "start": 2559,
                                            "end": 2567,
                                            "decorators": [],
                                            "name": "instance",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2571,
                                            "end": 2575,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2571,
                                              "end": 2575,
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null
                                          }
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSIntersectionType",
                                "start": 2581,
                                "end": 2608,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2581,
                                    "end": 2587,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2581,
                                      "end": 2587,
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeLiteral",
                                    "start": 2590,
                                    "end": 2608,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 2591,
                                        "end": 2607,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 2591,
                                          "end": 2601,
                                          "decorators": [],
                                          "name": "identifier",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2601,
                                          "end": 2607,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2603,
                                            "end": 2607,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2603,
                                              "end": 2607,
                                              "decorators": [],
                                              "name": "TYPE",
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
                              }
                            }
                          ],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2613,
                          "end": 2663,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2613,
                            "end": 2634,
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2634,
                            "end": 2663,
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "start": 2635,
                                "end": 2662,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2635,
                                    "end": 2641,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2635,
                                      "end": 2641,
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeLiteral",
                                    "start": 2644,
                                    "end": 2662,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 2645,
                                        "end": 2661,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 2645,
                                          "end": 2655,
                                          "decorators": [],
                                          "name": "identifier",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2655,
                                          "end": 2661,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2657,
                                            "end": 2661,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2657,
                                              "end": 2661,
                                              "decorators": [],
                                              "name": "TYPE",
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
                              }
                            ]
                          }
                        }
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2680,
      "end": 2846,
      "id": {
        "type": "Identifier",
        "start": 2685,
        "end": 2707,
        "decorators": [],
        "name": "RecordFieldConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2707,
        "end": 2715,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2708,
            "end": 2714,
            "name": {
              "type": "Identifier",
              "start": 2708,
              "end": 2714,
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2722,
        "end": 2846,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2722,
          "end": 2728,
          "typeName": {
            "type": "Identifier",
            "start": 2722,
            "end": 2728,
            "decorators": [],
            "name": "SO_FAR",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 2737,
          "end": 2750,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 2738,
              "end": 2749,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 2738,
                "end": 2744,
                "decorators": [],
                "name": "record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2744,
                "end": 2749,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 2746,
                  "end": 2749
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "start": 2753,
          "end": 2755,
          "members": []
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "start": 2758,
          "end": 2846,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 2766,
              "end": 2840,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 2766,
                "end": 2772,
                "decorators": [],
                "name": "record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2772,
                "end": 2840,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 2774,
                  "end": 2840,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 2774,
                    "end": 2780,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 2775,
                        "end": 2779,
                        "name": {
                          "type": "Identifier",
                          "start": 2775,
                          "end": 2779,
                          "decorators": [],
                          "name": "TYPE",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2781,
                      "end": 2789,
                      "decorators": [],
                      "name": "t",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2783,
                        "end": 2789,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2785,
                          "end": 2789,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2785,
                            "end": 2789,
                            "decorators": [],
                            "name": "TYPE",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2791,
                    "end": 2840,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2794,
                      "end": 2840,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2794,
                        "end": 2815,
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2815,
                        "end": 2840,
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "start": 2816,
                            "end": 2839,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 2816,
                                "end": 2822,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2816,
                                  "end": 2822,
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeLiteral",
                                "start": 2825,
                                "end": 2839,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 2826,
                                    "end": 2838,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2826,
                                      "end": 2832,
                                      "decorators": [],
                                      "name": "record",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2832,
                                      "end": 2838,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 2834,
                                        "end": 2838,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2834,
                                          "end": 2838,
                                          "decorators": [],
                                          "name": "TYPE",
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
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2852,
      "end": 3171,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2858,
          "end": 3170,
          "id": {
            "type": "Identifier",
            "start": 2858,
            "end": 2885,
            "decorators": [],
            "name": "buildRecordFieldConstructor",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2888,
            "end": 3170,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2888,
              "end": 2896,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2889,
                  "end": 2895,
                  "name": {
                    "type": "Identifier",
                    "start": 2889,
                    "end": 2895,
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 2897,
                "end": 2910,
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2902,
                  "end": 2910,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2904,
                    "end": 2910,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2904,
                      "end": 2910,
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "start": 2921,
              "end": 3166,
              "test": {
                "type": "BinaryExpression",
                "start": 2921,
                "end": 2938,
                "left": {
                  "type": "Literal",
                  "start": 2921,
                  "end": 2929,
                  "value": "record",
                  "raw": "\"record\""
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 2933,
                  "end": 2938,
                  "decorators": [],
                  "name": "soFar",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "consequent": {
                "type": "ObjectExpression",
                "start": 2941,
                "end": 2943,
                "properties": []
              },
              "alternate": {
                "type": "ObjectExpression",
                "start": 2946,
                "end": 3166,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2954,
                    "end": 3160,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2954,
                      "end": 2960,
                      "decorators": [],
                      "name": "record",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2962,
                      "end": 3160,
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2962,
                        "end": 2968,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2963,
                            "end": 2967,
                            "name": {
                              "type": "Identifier",
                              "start": 2963,
                              "end": 2967,
                              "decorators": [],
                              "name": "TYPE",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "AssignmentPattern",
                          "start": 2969,
                          "end": 2995,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 2969,
                            "end": 2983,
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2977,
                              "end": 2983,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2979,
                                "end": 2983,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2979,
                                  "end": 2983,
                                  "decorators": [],
                                  "name": "TYPE",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 2986,
                            "end": 2995,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "TSAsExpression",
                        "start": 3008,
                        "end": 3160,
                        "expression": {
                          "type": "CallExpression",
                          "start": 3008,
                          "end": 3110,
                          "callee": {
                            "type": "Identifier",
                            "start": 3008,
                            "end": 3029,
                            "decorators": [],
                            "name": "buildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TSAsExpression",
                              "start": 3030,
                              "end": 3109,
                              "expression": {
                                "type": "CallExpression",
                                "start": 3030,
                                "end": 3082,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 3030,
                                  "end": 3043,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3030,
                                    "end": 3036,
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3037,
                                    "end": 3043,
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3044,
                                    "end": 3046,
                                    "properties": []
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 3048,
                                    "end": 3053,
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3055,
                                    "end": 3081,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3056,
                                        "end": 3080,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3056,
                                          "end": 3062,
                                          "decorators": [],
                                          "name": "record",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "TSAsExpression",
                                          "start": 3064,
                                          "end": 3080,
                                          "expression": {
                                            "type": "Identifier",
                                            "start": 3064,
                                            "end": 3072,
                                            "decorators": [],
                                            "name": "instance",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 3076,
                                            "end": 3080,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 3076,
                                              "end": 3080,
                                              "decorators": [],
                                              "name": "TYPE",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null
                                          }
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSIntersectionType",
                                "start": 3086,
                                "end": 3109,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3086,
                                    "end": 3092,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3086,
                                      "end": 3092,
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeLiteral",
                                    "start": 3095,
                                    "end": 3109,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 3096,
                                        "end": 3108,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3096,
                                          "end": 3102,
                                          "decorators": [],
                                          "name": "record",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 3102,
                                          "end": 3108,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 3104,
                                            "end": 3108,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 3104,
                                              "end": 3108,
                                              "decorators": [],
                                              "name": "TYPE",
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
                              }
                            }
                          ],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3114,
                          "end": 3160,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3114,
                            "end": 3135,
                            "decorators": [],
                            "name": "BuildPubSubRecordType",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3135,
                            "end": 3160,
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "start": 3136,
                                "end": 3159,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3136,
                                    "end": 3142,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3136,
                                      "end": 3142,
                                      "decorators": [],
                                      "name": "SO_FAR",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeLiteral",
                                    "start": 3145,
                                    "end": 3159,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 3146,
                                        "end": 3158,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3146,
                                          "end": 3152,
                                          "decorators": [],
                                          "name": "record",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 3152,
                                          "end": 3158,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 3154,
                                            "end": 3158,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 3154,
                                              "end": 3158,
                                              "decorators": [],
                                              "name": "TYPE",
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
                              }
                            ]
                          }
                        }
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3177,
      "end": 3525,
      "id": {
        "type": "Identifier",
        "start": 3182,
        "end": 3225,
        "decorators": [],
        "name": "MaxMsToWaitBeforePublishingFieldConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3225,
        "end": 3233,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3226,
            "end": 3232,
            "name": {
              "type": "Identifier",
              "start": 3226,
              "end": 3232,
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3240,
        "end": 3525,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3240,
          "end": 3246,
          "typeName": {
            "type": "Identifier",
            "start": 3240,
            "end": 3246,
            "decorators": [],
            "name": "SO_FAR",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 3255,
          "end": 3289,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 3256,
              "end": 3288,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3256,
                "end": 3283,
                "decorators": [],
                "name": "maxMsToWaitBeforePublishing",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3283,
                "end": 3288,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3285,
                  "end": 3288
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "start": 3292,
          "end": 3294,
          "members": []
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "start": 3297,
          "end": 3525,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 3305,
              "end": 3419,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3305,
                "end": 3332,
                "decorators": [],
                "name": "maxMsToWaitBeforePublishing",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3332,
                "end": 3418,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 3334,
                  "end": 3418,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3335,
                      "end": 3344,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3336,
                        "end": 3344,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3338,
                          "end": 3344
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 3346,
                    "end": 3418,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3349,
                      "end": 3418,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3349,
                        "end": 3370,
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 3370,
                        "end": 3418,
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "start": 3371,
                            "end": 3417,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 3371,
                                "end": 3377,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3371,
                                  "end": 3377,
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeLiteral",
                                "start": 3380,
                                "end": 3417,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 3381,
                                    "end": 3416,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 3381,
                                      "end": 3408,
                                      "decorators": [],
                                      "name": "maxMsToWaitBeforePublishing",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 3408,
                                      "end": 3416,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 3410,
                                        "end": 3416
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 3426,
              "end": 3519,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3426,
                "end": 3446,
                "decorators": [],
                "name": "neverDelayPublishing",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3446,
                "end": 3518,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 3448,
                  "end": 3518,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 3451,
                    "end": 3518,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3454,
                      "end": 3518,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3454,
                        "end": 3475,
                        "decorators": [],
                        "name": "BuildPubSubRecordType",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 3475,
                        "end": 3518,
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "start": 3476,
                            "end": 3517,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 3476,
                                "end": 3482,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3476,
                                  "end": 3482,
                                  "decorators": [],
                                  "name": "SO_FAR",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeLiteral",
                                "start": 3485,
                                "end": 3517,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 3486,
                                    "end": 3516,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 3486,
                                      "end": 3513,
                                      "decorators": [],
                                      "name": "maxMsToWaitBeforePublishing",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 3513,
                                      "end": 3516,
                                      "typeAnnotation": {
                                        "type": "TSLiteralType",
                                        "start": 3515,
                                        "end": 3516,
                                        "literal": {
                                          "type": "Literal",
                                          "start": 3515,
                                          "end": 3516,
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3531,
      "end": 4212,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3537,
          "end": 4211,
          "id": {
            "type": "Identifier",
            "start": 3537,
            "end": 3585,
            "decorators": [],
            "name": "buildMaxMsToWaitBeforePublishingFieldConstructor",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3588,
            "end": 4211,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3588,
              "end": 3596,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3589,
                  "end": 3595,
                  "name": {
                    "type": "Identifier",
                    "start": 3589,
                    "end": 3595,
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 3597,
                "end": 3610,
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3602,
                  "end": 3610,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3604,
                    "end": 3610,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3604,
                      "end": 3610,
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3611,
              "end": 3664,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3613,
                "end": 3664,
                "typeName": {
                  "type": "Identifier",
                  "start": 3613,
                  "end": 3656,
                  "decorators": [],
                  "name": "MaxMsToWaitBeforePublishingFieldConstructor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3656,
                  "end": 3664,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 3657,
                      "end": 3663,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3657,
                        "end": 3663,
                        "decorators": [],
                        "name": "SO_FAR",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "body": {
              "type": "TSAsExpression",
              "start": 3668,
              "end": 4211,
              "expression": {
                "type": "ConditionalExpression",
                "start": 3674,
                "end": 4152,
                "test": {
                  "type": "BinaryExpression",
                  "start": 3674,
                  "end": 3712,
                  "left": {
                    "type": "Literal",
                    "start": 3674,
                    "end": 3703,
                    "value": "maxMsToWaitBeforePublishing",
                    "raw": "\"maxMsToWaitBeforePublishing\""
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 3707,
                    "end": 3712,
                    "decorators": [],
                    "name": "soFar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "consequent": {
                  "type": "ObjectExpression",
                  "start": 3715,
                  "end": 3717,
                  "properties": []
                },
                "alternate": {
                  "type": "ObjectExpression",
                  "start": 3720,
                  "end": 4152,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 3728,
                      "end": 3952,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 3728,
                        "end": 3755,
                        "decorators": [],
                        "name": "maxMsToWaitBeforePublishing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 3757,
                        "end": 3952,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "AssignmentPattern",
                            "start": 3758,
                            "end": 3778,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 3758,
                              "end": 3774,
                              "decorators": [],
                              "name": "instance",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3766,
                                "end": 3774,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3768,
                                  "end": 3774
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 3777,
                              "end": 3778,
                              "value": 0,
                              "raw": "0"
                            },
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "TSAsExpression",
                          "start": 3791,
                          "end": 3952,
                          "expression": {
                            "type": "CallExpression",
                            "start": 3791,
                            "end": 3879,
                            "callee": {
                              "type": "Identifier",
                              "start": 3791,
                              "end": 3812,
                              "decorators": [],
                              "name": "buildPubSubRecordType",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 3813,
                                "end": 3878,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 3813,
                                  "end": 3826,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3813,
                                    "end": 3819,
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3820,
                                    "end": 3826,
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3827,
                                    "end": 3829,
                                    "properties": []
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 3831,
                                    "end": 3836,
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 3838,
                                    "end": 3877,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 3839,
                                        "end": 3876,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 3839,
                                          "end": 3866,
                                          "decorators": [],
                                          "name": "maxMsToWaitBeforePublishing",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 3868,
                                          "end": 3876,
                                          "decorators": [],
                                          "name": "instance",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ],
                                "optional": false
                              }
                            ],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3883,
                            "end": 3952,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3883,
                              "end": 3904,
                              "decorators": [],
                              "name": "BuildPubSubRecordType",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 3904,
                              "end": 3952,
                              "params": [
                                {
                                  "type": "TSIntersectionType",
                                  "start": 3905,
                                  "end": 3951,
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 3905,
                                      "end": 3911,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 3905,
                                        "end": 3911,
                                        "decorators": [],
                                        "name": "SO_FAR",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    },
                                    {
                                      "type": "TSTypeLiteral",
                                      "start": 3914,
                                      "end": 3951,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 3915,
                                          "end": 3950,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 3915,
                                            "end": 3942,
                                            "decorators": [],
                                            "name": "maxMsToWaitBeforePublishing",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 3942,
                                            "end": 3950,
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 3944,
                                              "end": 3950
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 3960,
                      "end": 4145,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 3960,
                        "end": 3980,
                        "decorators": [],
                        "name": "neverDelayPublishing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 3982,
                        "end": 4145,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "TSAsExpression",
                          "start": 3996,
                          "end": 4145,
                          "expression": {
                            "type": "CallExpression",
                            "start": 3996,
                            "end": 4077,
                            "callee": {
                              "type": "Identifier",
                              "start": 3996,
                              "end": 4017,
                              "decorators": [],
                              "name": "buildPubSubRecordType",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 4018,
                                "end": 4076,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 4018,
                                  "end": 4031,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 4018,
                                    "end": 4024,
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 4025,
                                    "end": 4031,
                                    "decorators": [],
                                    "name": "assign",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 4032,
                                    "end": 4034,
                                    "properties": []
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 4036,
                                    "end": 4041,
                                    "decorators": [],
                                    "name": "soFar",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "ObjectExpression",
                                    "start": 4043,
                                    "end": 4075,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 4044,
                                        "end": 4074,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 4044,
                                          "end": 4071,
                                          "decorators": [],
                                          "name": "maxMsToWaitBeforePublishing",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 4073,
                                          "end": 4074,
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ],
                                "optional": false
                              }
                            ],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4081,
                            "end": 4145,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4081,
                              "end": 4102,
                              "decorators": [],
                              "name": "BuildPubSubRecordType",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 4102,
                              "end": 4145,
                              "params": [
                                {
                                  "type": "TSIntersectionType",
                                  "start": 4103,
                                  "end": 4144,
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 4103,
                                      "end": 4109,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4103,
                                        "end": 4109,
                                        "decorators": [],
                                        "name": "SO_FAR",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    },
                                    {
                                      "type": "TSTypeLiteral",
                                      "start": 4112,
                                      "end": 4144,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 4113,
                                          "end": 4143,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 4113,
                                            "end": 4140,
                                            "decorators": [],
                                            "name": "maxMsToWaitBeforePublishing",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 4140,
                                            "end": 4143,
                                            "typeAnnotation": {
                                              "type": "TSLiteralType",
                                              "start": 4142,
                                              "end": 4143,
                                              "literal": {
                                                "type": "Literal",
                                                "start": 4142,
                                                "end": 4143,
                                                "value": 0,
                                                "raw": "0"
                                              }
                                            }
                                          },
                                          "accessibility": null,
                                          "static": false
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4160,
                "end": 4211,
                "typeName": {
                  "type": "Identifier",
                  "start": 4160,
                  "end": 4203,
                  "decorators": [],
                  "name": "MaxMsToWaitBeforePublishingFieldConstructor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4203,
                  "end": 4211,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 4204,
                      "end": 4210,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4204,
                        "end": 4210,
                        "decorators": [],
                        "name": "SO_FAR",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4218,
      "end": 4528,
      "id": {
        "type": "Identifier",
        "start": 4223,
        "end": 4238,
        "decorators": [],
        "name": "TypeConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4238,
        "end": 4246,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4239,
            "end": 4245,
            "name": {
              "type": "Identifier",
              "start": 4239,
              "end": 4245,
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 4253,
        "end": 4528,
        "checkType": {
          "type": "TSTypeReference",
          "start": 4253,
          "end": 4259,
          "typeName": {
            "type": "Identifier",
            "start": 4253,
            "end": 4259,
            "decorators": [],
            "name": "SO_FAR",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 4268,
          "end": 4377,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 4269,
              "end": 4285,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 4269,
                "end": 4279,
                "decorators": [],
                "name": "identifier",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4279,
                "end": 4284,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4281,
                  "end": 4284
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 4286,
              "end": 4298,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 4286,
                "end": 4292,
                "decorators": [],
                "name": "record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4292,
                "end": 4297,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4294,
                  "end": 4297
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 4299,
              "end": 4335,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 4299,
                "end": 4326,
                "decorators": [],
                "name": "maxMsToWaitBeforePublishing",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4326,
                "end": 4334,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4328,
                  "end": 4334
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 4336,
              "end": 4376,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 4336,
                "end": 4344,
                "decorators": [],
                "name": "storedAs",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4344,
                "end": 4376,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4346,
                  "end": 4376,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4346,
                    "end": 4376,
                    "decorators": [],
                    "name": "PubSubRecordIsStoredInRedisAsA",
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
          "type": "TSTypeLiteral",
          "start": 4380,
          "end": 4523,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 4388,
              "end": 4401,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 4388,
                "end": 4392,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4392,
                "end": 4400,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4394,
                  "end": 4400,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4394,
                    "end": 4400,
                    "decorators": [],
                    "name": "SO_FAR",
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
              "start": 4408,
              "end": 4434,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 4408,
                "end": 4414,
                "decorators": [],
                "name": "fields",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4414,
                "end": 4433,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4416,
                  "end": 4433,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4416,
                    "end": 4419,
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 4419,
                    "end": 4433,
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "start": 4420,
                        "end": 4432,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4426,
                          "end": 4432,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4426,
                            "end": 4432,
                            "decorators": [],
                            "name": "SO_FAR",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 4441,
              "end": 4517,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 4441,
                "end": 4449,
                "decorators": [],
                "name": "hasField",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4449,
                "end": 4517,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 4451,
                  "end": 4517,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 4452,
                      "end": 4487,
                      "decorators": [],
                      "name": "fieldName",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4461,
                        "end": 4487,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 4463,
                          "end": 4487,
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
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 4489,
                    "end": 4517,
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "start": 4492,
                      "end": 4517,
                      "parameterName": {
                        "type": "Identifier",
                        "start": 4492,
                        "end": 4501,
                        "decorators": [],
                        "name": "fieldName",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "asserts": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4505,
                        "end": 4517,
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "start": 4505,
                          "end": 4517,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4511,
                            "end": 4517,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4511,
                              "end": 4517,
                              "decorators": [],
                              "name": "SO_FAR",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "start": 4526,
          "end": 4528,
          "members": []
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4534,
      "end": 4898,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4540,
          "end": 4897,
          "id": {
            "type": "Identifier",
            "start": 4540,
            "end": 4549,
            "decorators": [],
            "name": "buildType",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 4552,
            "end": 4897,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 4552,
              "end": 4560,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 4553,
                  "end": 4559,
                  "name": {
                    "type": "Identifier",
                    "start": 4553,
                    "end": 4559,
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 4561,
                "end": 4574,
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4566,
                  "end": 4574,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4568,
                    "end": 4574,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4568,
                      "end": 4574,
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "start": 4585,
              "end": 4893,
              "test": {
                "type": "LogicalExpression",
                "start": 4585,
                "end": 4714,
                "left": {
                  "type": "LogicalExpression",
                  "start": 4585,
                  "end": 4669,
                  "left": {
                    "type": "LogicalExpression",
                    "start": 4585,
                    "end": 4627,
                    "left": {
                      "type": "BinaryExpression",
                      "start": 4585,
                      "end": 4606,
                      "left": {
                        "type": "Literal",
                        "start": 4585,
                        "end": 4597,
                        "value": "identifier",
                        "raw": "\"identifier\""
                      },
                      "operator": "in",
                      "right": {
                        "type": "Identifier",
                        "start": 4601,
                        "end": 4606,
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "operator": "&&",
                    "right": {
                      "type": "BinaryExpression",
                      "start": 4610,
                      "end": 4627,
                      "left": {
                        "type": "Literal",
                        "start": 4610,
                        "end": 4618,
                        "value": "object",
                        "raw": "\"object\""
                      },
                      "operator": "in",
                      "right": {
                        "type": "Identifier",
                        "start": 4622,
                        "end": 4627,
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "start": 4631,
                    "end": 4669,
                    "left": {
                      "type": "Literal",
                      "start": 4631,
                      "end": 4660,
                      "value": "maxMsToWaitBeforePublishing",
                      "raw": "\"maxMsToWaitBeforePublishing\""
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "start": 4664,
                      "end": 4669,
                      "decorators": [],
                      "name": "soFar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 4673,
                  "end": 4714,
                  "left": {
                    "type": "Literal",
                    "start": 4673,
                    "end": 4705,
                    "value": "PubSubRecordIsStoredInRedisAsA",
                    "raw": "\"PubSubRecordIsStoredInRedisAsA\""
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 4709,
                    "end": 4714,
                    "decorators": [],
                    "name": "soFar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "consequent": {
                "type": "ObjectExpression",
                "start": 4717,
                "end": 4719,
                "properties": []
              },
              "alternate": {
                "type": "ObjectExpression",
                "start": 4722,
                "end": 4893,
                "properties": [
                  {
                    "type": "Property",
                    "start": 4730,
                    "end": 4741,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 4730,
                      "end": 4734,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 4736,
                      "end": 4741,
                      "decorators": [],
                      "name": "soFar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 4749,
                    "end": 4810,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 4749,
                      "end": 4755,
                      "decorators": [],
                      "name": "fields",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 4757,
                      "end": 4810,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "NewExpression",
                        "start": 4763,
                        "end": 4810,
                        "callee": {
                          "type": "Identifier",
                          "start": 4767,
                          "end": 4770,
                          "decorators": [],
                          "name": "Set",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "TSAsExpression",
                            "start": 4771,
                            "end": 4809,
                            "expression": {
                              "type": "CallExpression",
                              "start": 4771,
                              "end": 4789,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 4771,
                                "end": 4782,
                                "object": {
                                  "type": "Identifier",
                                  "start": 4771,
                                  "end": 4777,
                                  "decorators": [],
                                  "name": "Object",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 4778,
                                  "end": 4782,
                                  "decorators": [],
                                  "name": "keys",
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
                                  "start": 4783,
                                  "end": 4788,
                                  "decorators": [],
                                  "name": "soFar",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 4793,
                              "end": 4809,
                              "elementType": {
                                "type": "TSTypeOperator",
                                "start": 4794,
                                "end": 4806,
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 4800,
                                  "end": 4806,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4800,
                                    "end": 4806,
                                    "decorators": [],
                                    "name": "SO_FAR",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 4818,
                    "end": 4887,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 4818,
                      "end": 4826,
                      "decorators": [],
                      "name": "hasField",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 4828,
                      "end": 4887,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4829,
                          "end": 4864,
                          "decorators": [],
                          "name": "fieldName",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4838,
                            "end": 4864,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 4840,
                              "end": 4864,
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
                              ]
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "start": 4869,
                        "end": 4887,
                        "left": {
                          "type": "Identifier",
                          "start": 4869,
                          "end": 4878,
                          "decorators": [],
                          "name": "fieldName",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "in",
                        "right": {
                          "type": "Identifier",
                          "start": 4882,
                          "end": 4887,
                          "decorators": [],
                          "name": "soFar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4904,
      "end": 5231,
      "id": {
        "type": "Identifier",
        "start": 4909,
        "end": 4930,
        "decorators": [],
        "name": "BuildPubSubRecordType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4930,
        "end": 4938,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4931,
            "end": 4937,
            "name": {
              "type": "Identifier",
              "start": 4931,
              "end": 4937,
              "decorators": [],
              "name": "SO_FAR",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 4945,
        "end": 5231,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 4945,
            "end": 4973,
            "typeName": {
              "type": "Identifier",
              "start": 4945,
              "end": 4965,
              "decorators": [],
              "name": "NameFieldConstructor",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 4965,
              "end": 4973,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 4966,
                  "end": 4972,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4966,
                    "end": 4972,
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 4980,
            "end": 5014,
            "typeName": {
              "type": "Identifier",
              "start": 4980,
              "end": 5006,
              "decorators": [],
              "name": "IdentifierFieldConstructor",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 5006,
              "end": 5014,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 5007,
                  "end": 5013,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5007,
                    "end": 5013,
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 5021,
            "end": 5051,
            "typeName": {
              "type": "Identifier",
              "start": 5021,
              "end": 5043,
              "decorators": [],
              "name": "RecordFieldConstructor",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 5043,
              "end": 5051,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 5044,
                  "end": 5050,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5044,
                    "end": 5050,
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 5058,
            "end": 5085,
            "typeName": {
              "type": "Identifier",
              "start": 5058,
              "end": 5077,
              "decorators": [],
              "name": "StoredAsConstructor",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 5077,
              "end": 5085,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 5078,
                  "end": 5084,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5078,
                    "end": 5084,
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 5150,
            "end": 5201,
            "typeName": {
              "type": "Identifier",
              "start": 5150,
              "end": 5193,
              "decorators": [],
              "name": "MaxMsToWaitBeforePublishingFieldConstructor",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 5193,
              "end": 5201,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 5194,
                  "end": 5200,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5194,
                    "end": 5200,
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 5208,
            "end": 5231,
            "typeName": {
              "type": "Identifier",
              "start": 5208,
              "end": 5223,
              "decorators": [],
              "name": "TypeConstructor",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 5223,
              "end": 5231,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 5224,
                  "end": 5230,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5224,
                    "end": 5230,
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5237,
      "end": 5595,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5243,
          "end": 5594,
          "id": {
            "type": "Identifier",
            "start": 5243,
            "end": 5264,
            "decorators": [],
            "name": "buildPubSubRecordType",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 5267,
            "end": 5594,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 5267,
              "end": 5275,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 5268,
                  "end": 5274,
                  "name": {
                    "type": "Identifier",
                    "start": 5268,
                    "end": 5274,
                    "decorators": [],
                    "name": "SO_FAR",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 5276,
                "end": 5289,
                "decorators": [],
                "name": "soFar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5281,
                  "end": 5289,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 5283,
                    "end": 5289,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5283,
                      "end": 5289,
                      "decorators": [],
                      "name": "SO_FAR",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSAsExpression",
              "start": 5294,
              "end": 5594,
              "expression": {
                "type": "CallExpression",
                "start": 5294,
                "end": 5561,
                "callee": {
                  "type": "MemberExpression",
                  "start": 5294,
                  "end": 5307,
                  "object": {
                    "type": "Identifier",
                    "start": 5294,
                    "end": 5300,
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5301,
                    "end": 5307,
                    "decorators": [],
                    "name": "assign",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ObjectExpression",
                    "start": 5313,
                    "end": 5315,
                    "properties": []
                  },
                  {
                    "type": "CallExpression",
                    "start": 5321,
                    "end": 5353,
                    "callee": {
                      "type": "Identifier",
                      "start": 5321,
                      "end": 5346,
                      "decorators": [],
                      "name": "buildNameFieldConstructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 5347,
                        "end": 5352,
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  {
                    "type": "CallExpression",
                    "start": 5359,
                    "end": 5397,
                    "callee": {
                      "type": "Identifier",
                      "start": 5359,
                      "end": 5390,
                      "decorators": [],
                      "name": "buildIdentifierFieldConstructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 5391,
                        "end": 5396,
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  {
                    "type": "CallExpression",
                    "start": 5403,
                    "end": 5437,
                    "callee": {
                      "type": "Identifier",
                      "start": 5403,
                      "end": 5430,
                      "decorators": [],
                      "name": "buildRecordFieldConstructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 5431,
                        "end": 5436,
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  {
                    "type": "CallExpression",
                    "start": 5443,
                    "end": 5474,
                    "callee": {
                      "type": "Identifier",
                      "start": 5443,
                      "end": 5467,
                      "decorators": [],
                      "name": "buildStoredAsConstructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 5468,
                        "end": 5473,
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  {
                    "type": "CallExpression",
                    "start": 5480,
                    "end": 5535,
                    "callee": {
                      "type": "Identifier",
                      "start": 5480,
                      "end": 5528,
                      "decorators": [],
                      "name": "buildMaxMsToWaitBeforePublishingFieldConstructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 5529,
                        "end": 5534,
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  {
                    "type": "CallExpression",
                    "start": 5541,
                    "end": 5557,
                    "callee": {
                      "type": "Identifier",
                      "start": 5541,
                      "end": 5550,
                      "decorators": [],
                      "name": "buildType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 5551,
                        "end": 5556,
                        "decorators": [],
                        "name": "soFar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  }
                ],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5565,
                "end": 5594,
                "typeName": {
                  "type": "Identifier",
                  "start": 5565,
                  "end": 5586,
                  "decorators": [],
                  "name": "BuildPubSubRecordType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5586,
                  "end": 5594,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 5587,
                      "end": 5593,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5587,
                        "end": 5593,
                        "decorators": [],
                        "name": "SO_FAR",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5598,
      "end": 5649,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5604,
          "end": 5648,
          "id": {
            "type": "Identifier",
            "start": 5604,
            "end": 5620,
            "decorators": [],
            "name": "PubSubRecordType",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5623,
            "end": 5648,
            "callee": {
              "type": "Identifier",
              "start": 5623,
              "end": 5644,
              "decorators": [],
              "name": "buildPubSubRecordType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 5645,
                "end": 5647,
                "properties": []
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
