__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "IterableWeakMap_cleanup",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 54
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 63
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 63
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 60,
                    "end": 63
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 68
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 68
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 65,
                    "end": 68
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": true,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ref",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 87,
                          "end": 90
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "WeakRef",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 92,
                              "end": 99
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSObjectKeyword",
                                  "start": 100,
                                  "end": 106
                                }
                              ],
                              "start": 99,
                              "end": 107
                            },
                            "start": 92,
                            "end": 107
                          },
                          "start": 90,
                          "end": 107
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 78,
                        "end": 108
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": true,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "set",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 122,
                          "end": 125
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
                              "start": 127,
                              "end": 130
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "WeakRef",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 131,
                                    "end": 138
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSObjectKeyword",
                                        "start": 139,
                                        "end": 145
                                      }
                                    ],
                                    "start": 138,
                                    "end": 146
                                  },
                                  "start": 131,
                                  "end": 146
                                }
                              ],
                              "start": 130,
                              "end": 147
                            },
                            "start": 127,
                            "end": 147
                          },
                          "start": 125,
                          "end": 147
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 113,
                        "end": 148
                      }
                    ],
                    "start": 72,
                    "end": 150
                  },
                  "start": 70,
                  "end": 150
                },
                "start": 58,
                "end": 150
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
                        "name": "set",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 164
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "delete",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 165,
                        "end": 171
                      },
                      "optional": false,
                      "computed": false,
                      "start": 161,
                      "end": 171
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ref",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 172,
                        "end": 175
                      }
                    ],
                    "optional": false,
                    "start": 161,
                    "end": 176
                  },
                  "directive": null,
                  "start": 161,
                  "end": 177
                }
              ],
              "start": 155,
              "end": 179
            },
            "id": null,
            "generator": false,
            "start": 57,
            "end": 179
          },
          "definite": false,
          "start": 31,
          "end": 179
        }
      ],
      "declare": false,
      "start": 25,
      "end": 180
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IterableWeakMap",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 305
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 307
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 316,
                "end": 322
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 306,
              "end": 322
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 325
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 324,
              "end": 325
            }
          ],
          "start": 305,
          "end": 326
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "WeakMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 345
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 346,
                    "end": 347
                  },
                  "typeArguments": null,
                  "start": 346,
                  "end": 347
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 350
                  },
                  "typeArguments": null,
                  "start": 349,
                  "end": 350
                }
              ],
              "start": 345,
              "end": 351
            },
            "start": 338,
            "end": 351
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 376,
                  "end": 382
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toStringTag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 383,
                  "end": 394
                },
                "optional": false,
                "computed": false,
                "start": 376,
                "end": 394
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "IterableWeakMap",
                    "raw": "\"IterableWeakMap\"",
                    "start": 397,
                    "end": 414
                  },
                  "start": 397,
                  "end": 414
                },
                "start": 395,
                "end": 414
              },
              "value": null,
              "computed": true,
              "static": false,
              "declare": true,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 358,
              "end": 415
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "weakMap",
                "start": 421,
                "end": 429
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WeakMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 436,
                  "end": 443
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 444,
                        "end": 445
                      },
                      "typeArguments": null,
                      "start": 444,
                      "end": 445
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": true,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 458,
                            "end": 461
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "WeakRef",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 463,
                                "end": 470
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "K",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 471,
                                      "end": 472
                                    },
                                    "typeArguments": null,
                                    "start": 471,
                                    "end": 472
                                  }
                                ],
                                "start": 470,
                                "end": 473
                              },
                              "start": 463,
                              "end": 473
                            },
                            "start": 461,
                            "end": 473
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 449,
                          "end": 474
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 475,
                            "end": 480
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 482,
                                "end": 483
                              },
                              "typeArguments": null,
                              "start": 482,
                              "end": 483
                            },
                            "start": 480,
                            "end": 483
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 475,
                          "end": 483
                        }
                      ],
                      "start": 447,
                      "end": 485
                    }
                  ],
                  "start": 443,
                  "end": 486
                },
                "arguments": [],
                "start": 432,
                "end": 488
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 421,
              "end": 489
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "refSet",
                "start": 494,
                "end": 501
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 511
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WeakRef",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 512,
                        "end": 519
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 520,
                              "end": 521
                            },
                            "typeArguments": null,
                            "start": 520,
                            "end": 521
                          }
                        ],
                        "start": 519,
                        "end": 522
                      },
                      "start": 512,
                      "end": 522
                    }
                  ],
                  "start": 511,
                  "end": 523
                },
                "arguments": [],
                "start": 504,
                "end": 525
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 494,
              "end": 526
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "finalizationGroup",
                "start": 531,
                "end": 549
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FinalizationRegistry",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 556,
                  "end": 576
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IterableWeakMap_cleanup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 577,
                    "end": 600
                  }
                ],
                "start": 552,
                "end": 601
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 531,
              "end": 602
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 608,
                "end": 619
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "iterable",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Iterable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 630,
                                "end": 638
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTupleType",
                                    "elementTypes": [
                                      {
                                        "type": "TSNamedTupleMember",
                                        "label": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "key",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 640,
                                          "end": 643
                                        },
                                        "elementType": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "K",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 645,
                                            "end": 646
                                          },
                                          "typeArguments": null,
                                          "start": 645,
                                          "end": 646
                                        },
                                        "optional": false,
                                        "start": 640,
                                        "end": 646
                                      },
                                      {
                                        "type": "TSNamedTupleMember",
                                        "label": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 648,
                                          "end": 653
                                        },
                                        "elementType": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "V",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 655,
                                            "end": 656
                                          },
                                          "typeArguments": null,
                                          "start": 655,
                                          "end": 656
                                        },
                                        "optional": false,
                                        "start": 648,
                                        "end": 656
                                      }
                                    ],
                                    "start": 639,
                                    "end": 657
                                  }
                                ],
                                "start": 638,
                                "end": 658
                              },
                              "start": 630,
                              "end": 658
                            },
                            {
                              "type": "TSNullKeyword",
                              "start": 661,
                              "end": 665
                            }
                          ],
                          "start": 630,
                          "end": 665
                        },
                        "start": 628,
                        "end": 665
                      },
                      "start": 620,
                      "end": 665
                    },
                    "right": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 668,
                      "end": 672
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 620,
                    "end": 672
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "iterable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 688,
                          "end": 696
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 701,
                          "end": 705
                        },
                        "start": 688,
                        "end": 705
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ForOfStatement",
                            "await": false,
                            "left": {
                              "type": "VariableDeclaration",
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "ObjectPattern",
                                    "decorators": [],
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 734,
                                          "end": 735
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "key",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 737,
                                          "end": 740
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 734,
                                        "end": 740
                                      },
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1",
                                          "start": 742,
                                          "end": 743
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 745,
                                          "end": 750
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 742,
                                        "end": 750
                                      }
                                    ],
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 732,
                                    "end": 752
                                  },
                                  "init": null,
                                  "definite": false,
                                  "start": 732,
                                  "end": 752
                                }
                              ],
                              "declare": false,
                              "start": 726,
                              "end": 752
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "iterable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 756,
                              "end": 764
                            },
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
                                        "type": "ThisExpression",
                                        "start": 784,
                                        "end": 788
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "set",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 789,
                                        "end": 792
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 784,
                                      "end": 792
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "key",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 793,
                                        "end": 796
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 798,
                                        "end": 803
                                      }
                                    ],
                                    "optional": false,
                                    "start": 784,
                                    "end": 804
                                  },
                                  "directive": null,
                                  "start": 784,
                                  "end": 805
                                }
                              ],
                              "start": 766,
                              "end": 819
                            },
                            "start": 721,
                            "end": 819
                          }
                        ],
                        "start": 707,
                        "end": 829
                      },
                      "alternate": null,
                      "start": 684,
                      "end": 829
                    }
                  ],
                  "start": 674,
                  "end": 835
                },
                "expression": false,
                "start": 619,
                "end": 835
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 608,
              "end": 835
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null,
                "start": 841,
                "end": 844
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
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
                          "start": 850,
                          "end": 851
                        },
                        "typeArguments": null,
                        "start": 850,
                        "end": 851
                      },
                      "start": 848,
                      "end": 851
                    },
                    "start": 845,
                    "end": 851
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 860,
                          "end": 861
                        },
                        "typeArguments": null,
                        "start": 860,
                        "end": 861
                      },
                      "start": 858,
                      "end": 861
                    },
                    "start": 853,
                    "end": 861
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 864,
                    "end": 868
                  },
                  "start": 862,
                  "end": 868
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "entry",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 885,
                            "end": 890
                          },
                          "init": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 893,
                                  "end": 897
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "weakMap",
                                  "start": 898,
                                  "end": 906
                                },
                                "optional": false,
                                "computed": false,
                                "start": 893,
                                "end": 906
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "get",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 907,
                                "end": 910
                              },
                              "optional": false,
                              "computed": false,
                              "start": 893,
                              "end": 910
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 911,
                                "end": 914
                              }
                            ],
                            "optional": false,
                            "start": 893,
                            "end": 915
                          },
                          "definite": false,
                          "start": 885,
                          "end": 915
                        }
                      ],
                      "declare": false,
                      "start": 879,
                      "end": 916
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 929,
                          "end": 934
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 939,
                          "end": 948
                        },
                        "start": 929,
                        "end": 948
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 964,
                                  "end": 969
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 970,
                                  "end": 975
                                },
                                "optional": false,
                                "computed": false,
                                "start": 964,
                                "end": 975
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 978,
                                "end": 983
                              },
                              "start": 964,
                              "end": 983
                            },
                            "directive": null,
                            "start": 964,
                            "end": 984
                          }
                        ],
                        "start": 950,
                        "end": 994
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1020,
                                  "end": 1023
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "WeakRef",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1030,
                                    "end": 1037
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "key",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1038,
                                      "end": 1041
                                    }
                                  ],
                                  "start": 1026,
                                  "end": 1042
                                },
                                "definite": false,
                                "start": 1020,
                                "end": 1042
                              }
                            ],
                            "declare": false,
                            "start": 1014,
                            "end": 1043
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1057,
                                    "end": 1061
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "name": "weakMap",
                                    "start": 1062,
                                    "end": 1070
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1057,
                                  "end": 1070
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "set",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1071,
                                  "end": 1074
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1057,
                                "end": 1074
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1075,
                                  "end": 1078
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
                                        "name": "ref",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1082,
                                        "end": 1085
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ref",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1082,
                                        "end": 1085
                                      },
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1082,
                                      "end": 1085
                                    },
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1087,
                                        "end": 1092
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1087,
                                        "end": 1092
                                      },
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1087,
                                      "end": 1092
                                    }
                                  ],
                                  "start": 1080,
                                  "end": 1094
                                }
                              ],
                              "optional": false,
                              "start": 1057,
                              "end": 1095
                            },
                            "directive": null,
                            "start": 1057,
                            "end": 1096
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1109,
                                    "end": 1113
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "name": "refSet",
                                    "start": 1114,
                                    "end": 1121
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1109,
                                  "end": 1121
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "add",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1122,
                                  "end": 1125
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1109,
                                "end": 1125
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1126,
                                  "end": 1129
                                }
                              ],
                              "optional": false,
                              "start": 1109,
                              "end": 1130
                            },
                            "directive": null,
                            "start": 1109,
                            "end": 1131
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1144,
                                    "end": 1148
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "name": "finalizationGroup",
                                    "start": 1149,
                                    "end": 1167
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1144,
                                  "end": 1167
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "register",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1168,
                                  "end": 1176
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1144,
                                "end": 1176
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1177,
                                  "end": 1180
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
                                        "name": "set",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1200,
                                        "end": 1203
                                      },
                                      "value": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1205,
                                          "end": 1209
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "name": "refSet",
                                          "start": 1210,
                                          "end": 1217
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1205,
                                        "end": 1217
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1200,
                                      "end": 1217
                                    },
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ref",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1235,
                                        "end": 1238
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ref",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1235,
                                        "end": 1238
                                      },
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1235,
                                      "end": 1238
                                    }
                                  ],
                                  "start": 1182,
                                  "end": 1253
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1255,
                                  "end": 1258
                                }
                              ],
                              "optional": false,
                              "start": 1144,
                              "end": 1259
                            },
                            "directive": null,
                            "start": 1144,
                            "end": 1260
                          }
                        ],
                        "start": 1000,
                        "end": 1270
                      },
                      "start": 925,
                      "end": 1270
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ThisExpression",
                        "start": 1286,
                        "end": 1290
                      },
                      "start": 1279,
                      "end": 1291
                    }
                  ],
                  "start": 869,
                  "end": 1297
                },
                "expression": false,
                "start": 844,
                "end": 1297
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 841,
              "end": 1297
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "has",
                "optional": false,
                "typeAnnotation": null,
                "start": 1303,
                "end": 1306
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
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
                          "start": 1312,
                          "end": 1313
                        },
                        "typeArguments": null,
                        "start": 1312,
                        "end": 1313
                      },
                      "start": 1310,
                      "end": 1313
                    },
                    "start": 1307,
                    "end": 1313
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1316,
                    "end": 1323
                  },
                  "start": 1314,
                  "end": 1323
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1341,
                              "end": 1345
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "weakMap",
                              "start": 1346,
                              "end": 1354
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1341,
                            "end": 1354
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "has",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1355,
                            "end": 1358
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1341,
                          "end": 1358
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1359,
                            "end": 1362
                          }
                        ],
                        "optional": false,
                        "start": 1341,
                        "end": 1363
                      },
                      "start": 1334,
                      "end": 1364
                    }
                  ],
                  "start": 1324,
                  "end": 1370
                },
                "expression": false,
                "start": 1306,
                "end": 1370
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1303,
              "end": 1370
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 1376,
                "end": 1379
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
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
                          "start": 1385,
                          "end": 1386
                        },
                        "typeArguments": null,
                        "start": 1385,
                        "end": 1386
                      },
                      "start": 1383,
                      "end": 1386
                    },
                    "start": 1380,
                    "end": 1386
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1389,
                          "end": 1390
                        },
                        "typeArguments": null,
                        "start": 1389,
                        "end": 1390
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1393,
                        "end": 1402
                      }
                    ],
                    "start": 1389,
                    "end": 1402
                  },
                  "start": 1387,
                  "end": 1402
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ChainExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1420,
                                  "end": 1424
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "weakMap",
                                  "start": 1425,
                                  "end": 1433
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1420,
                                "end": 1433
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "get",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1434,
                                "end": 1437
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1420,
                              "end": 1437
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1438,
                                "end": 1441
                              }
                            ],
                            "optional": false,
                            "start": 1420,
                            "end": 1442
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1444,
                            "end": 1449
                          },
                          "optional": true,
                          "computed": false,
                          "start": 1420,
                          "end": 1449
                        },
                        "start": 1420,
                        "end": 1449
                      },
                      "start": 1413,
                      "end": 1450
                    }
                  ],
                  "start": 1403,
                  "end": 1456
                },
                "expression": false,
                "start": 1379,
                "end": 1456
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1376,
              "end": 1456
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "delete",
                "optional": false,
                "typeAnnotation": null,
                "start": 1462,
                "end": 1468
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
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
                          "start": 1474,
                          "end": 1475
                        },
                        "typeArguments": null,
                        "start": 1474,
                        "end": 1475
                      },
                      "start": 1472,
                      "end": 1475
                    },
                    "start": 1469,
                    "end": 1475
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1478,
                    "end": 1485
                  },
                  "start": 1476,
                  "end": 1485
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "entry",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1502,
                            "end": 1507
                          },
                          "init": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1510,
                                  "end": 1514
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "weakMap",
                                  "start": 1515,
                                  "end": 1523
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1510,
                                "end": 1523
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "get",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1524,
                                "end": 1527
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1510,
                              "end": 1527
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1528,
                                "end": 1531
                              }
                            ],
                            "optional": false,
                            "start": 1510,
                            "end": 1532
                          },
                          "definite": false,
                          "start": 1502,
                          "end": 1532
                        }
                      ],
                      "declare": false,
                      "start": 1496,
                      "end": 1533
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1546,
                          "end": 1551
                        },
                        "operator": "===",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1556,
                          "end": 1565
                        },
                        "start": 1546,
                        "end": 1565
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 1588,
                              "end": 1593
                            },
                            "start": 1581,
                            "end": 1594
                          }
                        ],
                        "start": 1567,
                        "end": 1604
                      },
                      "alternate": null,
                      "start": 1542,
                      "end": 1604
                    },
                    {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "ObjectPattern",
                            "decorators": [],
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1622,
                                  "end": 1625
                                },
                                "value": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1622,
                                  "end": 1625
                                },
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "optional": false,
                                "start": 1622,
                                "end": 1625
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1620,
                            "end": 1627
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "entry",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1630,
                            "end": 1635
                          },
                          "definite": false,
                          "start": 1620,
                          "end": 1635
                        }
                      ],
                      "declare": false,
                      "start": 1614,
                      "end": 1636
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1645,
                              "end": 1649
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "weakMap",
                              "start": 1650,
                              "end": 1658
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1645,
                            "end": 1658
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "delete",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1659,
                            "end": 1665
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1645,
                          "end": 1665
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1666,
                            "end": 1669
                          }
                        ],
                        "optional": false,
                        "start": 1645,
                        "end": 1670
                      },
                      "directive": null,
                      "start": 1645,
                      "end": 1671
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1680,
                              "end": 1684
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "refSet",
                              "start": 1685,
                              "end": 1692
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1680,
                            "end": 1692
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "delete",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1693,
                            "end": 1699
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1680,
                          "end": 1699
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1700,
                            "end": 1703
                          }
                        ],
                        "optional": false,
                        "start": 1680,
                        "end": 1704
                      },
                      "directive": null,
                      "start": 1680,
                      "end": 1705
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1714,
                              "end": 1718
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "finalizationGroup",
                              "start": 1719,
                              "end": 1737
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1714,
                            "end": 1737
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "unregister",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1738,
                            "end": 1748
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1714,
                          "end": 1748
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1749,
                            "end": 1752
                          }
                        ],
                        "optional": false,
                        "start": 1714,
                        "end": 1753
                      },
                      "directive": null,
                      "start": 1714,
                      "end": 1754
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1770,
                        "end": 1774
                      },
                      "start": 1763,
                      "end": 1775
                    }
                  ],
                  "start": 1486,
                  "end": 1781
                },
                "expression": false,
                "start": 1468,
                "end": 1781
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1462,
              "end": 1781
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1796,
                  "end": 1802
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1803,
                  "end": 1811
                },
                "optional": false,
                "computed": false,
                "start": 1796,
                "end": 1811
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSThisType",
                    "start": 1814,
                    "end": 1818
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "entries",
                      "raw": "\"entries\"",
                      "start": 1819,
                      "end": 1828
                    },
                    "start": 1819,
                    "end": 1828
                  },
                  "start": 1814,
                  "end": 1829
                },
                "start": 1812,
                "end": 1829
              },
              "value": null,
              "computed": true,
              "static": false,
              "declare": true,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 1787,
              "end": 1830
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 1836,
                "end": 1843
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": true,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Generator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1847,
                      "end": 1856
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSNamedTupleMember",
                              "label": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1858,
                                "end": 1861
                              },
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1863,
                                  "end": 1864
                                },
                                "typeArguments": null,
                                "start": 1863,
                                "end": 1864
                              },
                              "optional": false,
                              "start": 1858,
                              "end": 1864
                            },
                            {
                              "type": "TSNamedTupleMember",
                              "label": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1866,
                                "end": 1871
                              },
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1873,
                                  "end": 1874
                                },
                                "typeArguments": null,
                                "start": 1873,
                                "end": 1874
                              },
                              "optional": false,
                              "start": 1866,
                              "end": 1874
                            }
                          ],
                          "start": 1857,
                          "end": 1875
                        },
                        {
                          "type": "TSVoidKeyword",
                          "start": 1877,
                          "end": 1881
                        }
                      ],
                      "start": 1856,
                      "end": 1882
                    },
                    "start": 1847,
                    "end": 1882
                  },
                  "start": 1845,
                  "end": 1882
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "await": false,
                      "left": {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ref",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1904,
                              "end": 1907
                            },
                            "init": null,
                            "definite": false,
                            "start": 1904,
                            "end": 1907
                          }
                        ],
                        "declare": false,
                        "start": 1898,
                        "end": 1907
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1911,
                          "end": 1915
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "refSet",
                          "start": 1916,
                          "end": 1923
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1911,
                        "end": 1923
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1945,
                                  "end": 1948
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ref",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1951,
                                      "end": 1954
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "deref",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1955,
                                      "end": 1960
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1951,
                                    "end": 1960
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 1951,
                                  "end": 1962
                                },
                                "definite": false,
                                "start": 1945,
                                "end": 1962
                              }
                            ],
                            "declare": false,
                            "start": 1939,
                            "end": 1963
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1980,
                                "end": 1983
                              },
                              "operator": "===",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "undefined",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1988,
                                "end": 1997
                              },
                              "start": 1980,
                              "end": 1997
                            },
                            "consequent": {
                              "type": "ContinueStatement",
                              "label": null,
                              "start": 1999,
                              "end": 2008
                            },
                            "alternate": null,
                            "start": 1976,
                            "end": 2008
                          },
                          {
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "ObjectPattern",
                                  "decorators": [],
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2029,
                                        "end": 2034
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2029,
                                        "end": 2034
                                      },
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "optional": false,
                                      "start": 2029,
                                      "end": 2034
                                    }
                                  ],
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2027,
                                  "end": 2036
                                },
                                "init": {
                                  "type": "TSNonNullExpression",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 2039,
                                          "end": 2043
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "name": "weakMap",
                                          "start": 2044,
                                          "end": 2052
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 2039,
                                        "end": 2052
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "get",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2053,
                                        "end": 2056
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2039,
                                      "end": 2056
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "key",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2057,
                                        "end": 2060
                                      }
                                    ],
                                    "optional": false,
                                    "start": 2039,
                                    "end": 2061
                                  },
                                  "start": 2039,
                                  "end": 2062
                                },
                                "definite": false,
                                "start": 2027,
                                "end": 2062
                              }
                            ],
                            "declare": false,
                            "start": 2021,
                            "end": 2063
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "YieldExpression",
                              "delegate": false,
                              "argument": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "key",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2083,
                                    "end": 2086
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2088,
                                    "end": 2093
                                  }
                                ],
                                "start": 2082,
                                "end": 2094
                              },
                              "start": 2076,
                              "end": 2094
                            },
                            "directive": null,
                            "start": 2076,
                            "end": 2095
                          }
                        ],
                        "start": 1925,
                        "end": 2105
                      },
                      "start": 1893,
                      "end": 2105
                    }
                  ],
                  "start": 1883,
                  "end": 2111
                },
                "expression": false,
                "start": 1843,
                "end": 2111
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1835,
              "end": 2111
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 2118,
                "end": 2122
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": true,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "await": false,
                      "left": {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "ObjectPattern",
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2148,
                                    "end": 2149
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "key",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2151,
                                    "end": 2154
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2148,
                                  "end": 2154
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2146,
                              "end": 2156
                            },
                            "init": null,
                            "definite": false,
                            "start": 2146,
                            "end": 2156
                          }
                        ],
                        "declare": false,
                        "start": 2140,
                        "end": 2156
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 2160,
                        "end": 2164
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "YieldExpression",
                              "delegate": false,
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2186,
                                "end": 2189
                              },
                              "start": 2180,
                              "end": 2189
                            },
                            "directive": null,
                            "start": 2180,
                            "end": 2190
                          }
                        ],
                        "start": 2166,
                        "end": 2200
                      },
                      "start": 2135,
                      "end": 2200
                    }
                  ],
                  "start": 2125,
                  "end": 2206
                },
                "expression": false,
                "start": 2122,
                "end": 2206
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2117,
              "end": 2206
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 2213,
                "end": 2219
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": true,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "await": false,
                      "left": {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "ObjectPattern",
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 2245,
                                    "end": 2246
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2248,
                                    "end": 2253
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2245,
                                  "end": 2253
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2243,
                              "end": 2255
                            },
                            "init": null,
                            "definite": false,
                            "start": 2243,
                            "end": 2255
                          }
                        ],
                        "declare": false,
                        "start": 2237,
                        "end": 2255
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 2259,
                        "end": 2263
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "YieldExpression",
                              "delegate": false,
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2285,
                                "end": 2290
                              },
                              "start": 2279,
                              "end": 2290
                            },
                            "directive": null,
                            "start": 2279,
                            "end": 2291
                          }
                        ],
                        "start": 2265,
                        "end": 2301
                      },
                      "start": 2232,
                      "end": 2301
                    }
                  ],
                  "start": 2222,
                  "end": 2307
                },
                "expression": false,
                "start": 2219,
                "end": 2307
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2212,
              "end": 2307
            }
          ],
          "start": 352,
          "end": 2309
        },
        "abstract": false,
        "declare": false,
        "start": 284,
        "end": 2309
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 277,
      "end": 2309
    },
    {
      "type": "ExpressionStatement",
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
            "start": 2311,
            "end": 2317
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperties",
            "optional": false,
            "typeAnnotation": null,
            "start": 2318,
            "end": 2334
          },
          "optional": false,
          "computed": false,
          "start": 2311,
          "end": 2334
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "IterableWeakMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 2335,
              "end": 2350
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 2351,
              "end": 2360
            },
            "optional": false,
            "computed": false,
            "start": 2335,
            "end": 2360
          },
          {
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
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2369,
                    "end": 2375
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2376,
                    "end": 2384
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2369,
                  "end": 2384
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "configurable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2397,
                        "end": 2409
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 2411,
                        "end": 2415
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2397,
                      "end": 2415
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "enumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2425,
                        "end": 2435
                      },
                      "value": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 2437,
                        "end": 2442
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2425,
                      "end": 2442
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "writable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2452,
                        "end": 2460
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 2462,
                        "end": 2466
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2452,
                      "end": 2466
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2476,
                        "end": 2481
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "TSNonNullExpression",
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
                                "start": 2483,
                                "end": 2489
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "getOwnPropertyDescriptor",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2490,
                                "end": 2514
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2483,
                              "end": 2514
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "IterableWeakMap",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2528,
                                  "end": 2543
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prototype",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2544,
                                  "end": 2553
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2528,
                                "end": 2553
                              },
                              {
                                "type": "Literal",
                                "value": "entries",
                                "raw": "\"entries\"",
                                "start": 2567,
                                "end": 2576
                              }
                            ],
                            "optional": false,
                            "start": 2483,
                            "end": 2587
                          },
                          "start": 2483,
                          "end": 2588
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2589,
                          "end": 2594
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2483,
                        "end": 2594
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2476,
                      "end": 2594
                    }
                  ],
                  "start": 2387,
                  "end": 2601
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 2368,
                "end": 2601
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2608,
                    "end": 2614
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2615,
                    "end": 2626
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2608,
                  "end": 2626
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "configurable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2639,
                        "end": 2651
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 2653,
                        "end": 2657
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2639,
                      "end": 2657
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "enumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2667,
                        "end": 2677
                      },
                      "value": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 2679,
                        "end": 2684
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2667,
                      "end": 2684
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "writable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2694,
                        "end": 2702
                      },
                      "value": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 2704,
                        "end": 2709
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2694,
                      "end": 2709
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2719,
                        "end": 2724
                      },
                      "value": {
                        "type": "Literal",
                        "value": "IterableWeakMap",
                        "raw": "\"IterableWeakMap\"",
                        "start": 2726,
                        "end": 2743
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2719,
                      "end": 2743
                    }
                  ],
                  "start": 2629,
                  "end": 2750
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 2607,
                "end": 2750
              }
            ],
            "start": 2362,
            "end": 2753
          }
        ],
        "optional": false,
        "start": 2311,
        "end": 2754
      },
      "directive": null,
      "start": 2311,
      "end": 2755
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 25,
  "end": 2755
}
```
