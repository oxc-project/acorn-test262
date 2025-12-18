__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 25,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "IterableWeakMap_cleanup",
    "start": 31,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 65,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 78,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "WeakRef",
    "start": 92,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 113,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "WeakRef",
    "start": 131,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 152,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 161,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "delete",
    "start": 165,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 172,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 277,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 284,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "IterableWeakMap",
    "start": 290,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 308,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 316,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 327,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "WeakMap",
    "start": 338,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 358,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 366,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 376,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "toStringTag",
    "start": 383,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396
  },
  {
    "type": "String",
    "value": "\"IterableWeakMap\"",
    "start": 397,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "PrivateIdentifier",
    "value": "weakMap",
    "start": 421,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 432,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "WeakMap",
    "start": 436,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 449,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 458,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "WeakRef",
    "start": 463,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 475,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "PrivateIdentifier",
    "value": "refSet",
    "start": 494,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 504,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 508,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "WeakRef",
    "start": 512,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "PrivateIdentifier",
    "value": "finalizationGroup",
    "start": 531,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 552,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "FinalizationRegistry",
    "start": 556,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "IterableWeakMap_cleanup",
    "start": 577,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 608,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 620,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 630,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 640,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 648,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 659,
    "end": 660
  },
  {
    "type": "Null",
    "value": "null",
    "start": 661,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 666,
    "end": 667
  },
  {
    "type": "Null",
    "value": "null",
    "start": 668,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 674,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 684,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 688,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 697,
    "end": 700
  },
  {
    "type": "Null",
    "value": "null",
    "start": 701,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 721,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 726,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 732,
    "end": 733
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 737,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 740,
    "end": 741
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 745,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 753,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 756,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 766,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 784,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 789,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 793,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 798,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 841,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 845,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 853,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 864,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 869,
    "end": 870
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 879,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 885,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 891,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 893,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 897,
    "end": 898
  },
  {
    "type": "PrivateIdentifier",
    "value": "weakMap",
    "start": 898,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 907,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 911,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 925,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 929,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 935,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 939,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 964,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 970,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 978,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 993,
    "end": 994
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 995,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1014,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1020,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1026,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "WeakRef",
    "start": 1030,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1038,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1057,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "PrivateIdentifier",
    "value": "weakMap",
    "start": 1062,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1071,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1075,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1082,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1087,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1109,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "PrivateIdentifier",
    "value": "refSet",
    "start": 1114,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 1122,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1126,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1144,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "PrivateIdentifier",
    "value": "finalizationGroup",
    "start": 1149,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "register",
    "start": 1168,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1177,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1200,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1205,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "PrivateIdentifier",
    "value": "refSet",
    "start": 1210,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1235,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1255,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1279,
    "end": 1285
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1286,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "has",
    "start": 1303,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1307,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1316,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1334,
    "end": 1340
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1341,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "PrivateIdentifier",
    "value": "weakMap",
    "start": 1346,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "has",
    "start": 1355,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1359,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1376,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1380,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1393,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1413,
    "end": 1419
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1420,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "PrivateIdentifier",
    "value": "weakMap",
    "start": 1425,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1434,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1438,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1442,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1444,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "delete",
    "start": 1462,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1469,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1478,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1496,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1502,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1510,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "PrivateIdentifier",
    "value": "weakMap",
    "start": 1515,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1524,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1528,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1542,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1546,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1552,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1556,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1581,
    "end": 1587
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1588,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1614,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1622,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1630,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1645,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "PrivateIdentifier",
    "value": "weakMap",
    "start": 1650,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "delete",
    "start": 1659,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1666,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1680,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "PrivateIdentifier",
    "value": "refSet",
    "start": 1685,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "delete",
    "start": 1693,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1700,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1714,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "PrivateIdentifier",
    "value": "finalizationGroup",
    "start": 1719,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "unregister",
    "start": 1738,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1749,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1763,
    "end": 1769
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1770,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1787,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1796,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 1803,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1814,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "String",
    "value": "\"entries\"",
    "start": 1819,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 1836,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 1847,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1858,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1866,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1877,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1893,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1898,
    "end": 1903
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1904,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1908,
    "end": 1910
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1911,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "PrivateIdentifier",
    "value": "refSet",
    "start": 1916,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1939,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1945,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1951,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "deref",
    "start": 1955,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1976,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1980,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1984,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1988,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1999,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2021,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2029,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2039,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "PrivateIdentifier",
    "value": "weakMap",
    "start": 2044,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2053,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2057,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2076,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2083,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2088,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 2118,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2135,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2140,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2151,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2157,
    "end": 2159
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2160,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2180,
    "end": 2185
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2186,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 2213,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2232,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2237,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2248,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2256,
    "end": 2258
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2259,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2279,
    "end": 2284
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2285,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 2311,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Identifier",
    "value": "defineProperties",
    "start": 2318,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "IterableWeakMap",
    "start": 2335,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 2351,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2369,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 2376,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "configurable",
    "start": 2397,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2411,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Identifier",
    "value": "enumerable",
    "start": 2425,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2437,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "writable",
    "start": 2452,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2462,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2476,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 2483,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Identifier",
    "value": "getOwnPropertyDescriptor",
    "start": 2490,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Identifier",
    "value": "IterableWeakMap",
    "start": 2528,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 2544,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "String",
    "value": "\"entries\"",
    "start": 2567,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2589,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2608,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Identifier",
    "value": "toStringTag",
    "start": 2615,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Identifier",
    "value": "configurable",
    "start": 2639,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2653,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Identifier",
    "value": "enumerable",
    "start": 2667,
    "end": 2677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2679,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "writable",
    "start": 2694,
    "end": 2702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2704,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2719,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "String",
    "value": "\"IterableWeakMap\"",
    "start": 2726,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2752,
    "end": 2753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2754,
    "end": 2755
  }
]
```
