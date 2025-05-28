__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 2755,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 180,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 54,
            "decorators": [],
            "name": "IterableWeakMap_cleanup",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 57,
            "end": 179,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 58,
                "end": 150,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 60,
                    "end": 63,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 63,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 63,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 65,
                    "end": 68,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 68,
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 68,
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 70,
                  "end": 150,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 72,
                    "end": 150,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 78,
                        "end": 108,
                        "computed": false,
                        "optional": false,
                        "readonly": true,
                        "key": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 90,
                          "decorators": [],
                          "name": "ref",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 90,
                          "end": 107,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 92,
                            "end": 107,
                            "typeName": {
                              "type": "Identifier",
                              "start": 92,
                              "end": 99,
                              "decorators": [],
                              "name": "WeakRef",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 99,
                              "end": 107,
                              "params": [
                                {
                                  "type": "TSObjectKeyword",
                                  "start": 100,
                                  "end": 106
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
                        "start": 113,
                        "end": 148,
                        "computed": false,
                        "optional": false,
                        "readonly": true,
                        "key": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 125,
                          "decorators": [],
                          "name": "set",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 125,
                          "end": 147,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 127,
                            "end": 147,
                            "typeName": {
                              "type": "Identifier",
                              "start": 127,
                              "end": 130,
                              "decorators": [],
                              "name": "Set",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 130,
                              "end": 147,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 131,
                                  "end": 146,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 131,
                                    "end": 138,
                                    "decorators": [],
                                    "name": "WeakRef",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 138,
                                    "end": 146,
                                    "params": [
                                      {
                                        "type": "TSObjectKeyword",
                                        "start": 139,
                                        "end": 145
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 155,
              "end": 179,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 161,
                  "end": 177,
                  "expression": {
                    "type": "CallExpression",
                    "start": 161,
                    "end": 176,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 161,
                      "end": 171,
                      "object": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 164,
                        "decorators": [],
                        "name": "set",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 171,
                        "decorators": [],
                        "name": "delete",
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
                        "start": 172,
                        "end": 175,
                        "decorators": [],
                        "name": "ref",
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 277,
      "end": 2309,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 284,
        "end": 2309,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 290,
          "end": 305,
          "decorators": [],
          "name": "IterableWeakMap",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 305,
          "end": 326,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 306,
              "end": 322,
              "name": {
                "type": "Identifier",
                "start": 306,
                "end": 307,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 316,
                "end": 322
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 324,
              "end": 325,
              "name": {
                "type": "Identifier",
                "start": 324,
                "end": 325,
                "decorators": [],
                "name": "V",
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
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 338,
            "end": 351,
            "expression": {
              "type": "Identifier",
              "start": 338,
              "end": 345,
              "decorators": [],
              "name": "WeakMap",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 345,
              "end": 351,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 346,
                  "end": 347,
                  "typeName": {
                    "type": "Identifier",
                    "start": 346,
                    "end": 347,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 349,
                  "end": 350,
                  "typeName": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 350,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ],
        "body": {
          "type": "ClassBody",
          "start": 352,
          "end": 2309,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 358,
              "end": 415,
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "start": 376,
                "end": 394,
                "object": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 382,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 383,
                  "end": 394,
                  "decorators": [],
                  "name": "toStringTag",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 395,
                "end": 414,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 397,
                  "end": 414,
                  "literal": {
                    "type": "Literal",
                    "start": 397,
                    "end": 414,
                    "value": "IterableWeakMap",
                    "raw": "\"IterableWeakMap\""
                  }
                }
              },
              "value": null,
              "computed": true,
              "static": false,
              "declare": true,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 421,
              "end": 489,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 421,
                "end": 429,
                "name": "weakMap"
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "start": 432,
                "end": 488,
                "callee": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 443,
                  "decorators": [],
                  "name": "WeakMap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 443,
                  "end": 486,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 444,
                      "end": 445,
                      "typeName": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 445,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 447,
                      "end": 485,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 449,
                          "end": 474,
                          "computed": false,
                          "optional": false,
                          "readonly": true,
                          "key": {
                            "type": "Identifier",
                            "start": 458,
                            "end": 461,
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 461,
                            "end": 473,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 463,
                              "end": 473,
                              "typeName": {
                                "type": "Identifier",
                                "start": 463,
                                "end": 470,
                                "decorators": [],
                                "name": "WeakRef",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 470,
                                "end": 473,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 471,
                                    "end": 472,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 471,
                                      "end": 472,
                                      "decorators": [],
                                      "name": "K",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
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
                          "start": 475,
                          "end": 483,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 475,
                            "end": 480,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 480,
                            "end": 483,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 482,
                              "end": 483,
                              "typeName": {
                                "type": "Identifier",
                                "start": 482,
                                "end": 483,
                                "decorators": [],
                                "name": "V",
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
                "arguments": []
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 494,
              "end": 526,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 494,
                "end": 501,
                "name": "refSet"
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "start": 504,
                "end": 525,
                "callee": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 511,
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 511,
                  "end": 523,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 512,
                      "end": 522,
                      "typeName": {
                        "type": "Identifier",
                        "start": 512,
                        "end": 519,
                        "decorators": [],
                        "name": "WeakRef",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 519,
                        "end": 522,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 520,
                            "end": 521,
                            "typeName": {
                              "type": "Identifier",
                              "start": 520,
                              "end": 521,
                              "decorators": [],
                              "name": "K",
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
                "arguments": []
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 531,
              "end": 602,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 531,
                "end": 549,
                "name": "finalizationGroup"
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "start": 552,
                "end": 601,
                "callee": {
                  "type": "Identifier",
                  "start": 556,
                  "end": 576,
                  "decorators": [],
                  "name": "FinalizationRegistry",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 577,
                    "end": 600,
                    "decorators": [],
                    "name": "IterableWeakMap_cleanup",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ]
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 608,
              "end": 835,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 608,
                "end": 619,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 619,
                "end": 835,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 620,
                    "end": 672,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 620,
                      "end": 665,
                      "decorators": [],
                      "name": "iterable",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 628,
                        "end": 665,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 630,
                          "end": 665,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 630,
                              "end": 658,
                              "typeName": {
                                "type": "Identifier",
                                "start": 630,
                                "end": 638,
                                "decorators": [],
                                "name": "Iterable",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 638,
                                "end": 658,
                                "params": [
                                  {
                                    "type": "TSTupleType",
                                    "start": 639,
                                    "end": 657,
                                    "elementTypes": [
                                      {
                                        "type": "TSNamedTupleMember",
                                        "start": 640,
                                        "end": 646,
                                        "label": {
                                          "type": "Identifier",
                                          "start": 640,
                                          "end": 643,
                                          "decorators": [],
                                          "name": "key",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "elementType": {
                                          "type": "TSTypeReference",
                                          "start": 645,
                                          "end": 646,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 645,
                                            "end": 646,
                                            "decorators": [],
                                            "name": "K",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        },
                                        "optional": false
                                      },
                                      {
                                        "type": "TSNamedTupleMember",
                                        "start": 648,
                                        "end": 656,
                                        "label": {
                                          "type": "Identifier",
                                          "start": 648,
                                          "end": 653,
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "elementType": {
                                          "type": "TSTypeReference",
                                          "start": 655,
                                          "end": 656,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 655,
                                            "end": 656,
                                            "decorators": [],
                                            "name": "V",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        },
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              }
                            },
                            {
                              "type": "TSNullKeyword",
                              "start": 661,
                              "end": 665
                            }
                          ]
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 668,
                      "end": 672,
                      "value": null,
                      "raw": "null"
                    },
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 674,
                  "end": 835,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 684,
                      "end": 829,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 688,
                        "end": 705,
                        "left": {
                          "type": "Identifier",
                          "start": 688,
                          "end": 696,
                          "decorators": [],
                          "name": "iterable",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Literal",
                          "start": 701,
                          "end": 705,
                          "value": null,
                          "raw": "null"
                        }
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 707,
                        "end": 829,
                        "body": [
                          {
                            "type": "ForOfStatement",
                            "start": 721,
                            "end": 819,
                            "await": false,
                            "left": {
                              "type": "VariableDeclaration",
                              "start": 726,
                              "end": 752,
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 732,
                                  "end": 752,
                                  "id": {
                                    "type": "ObjectPattern",
                                    "start": 732,
                                    "end": 752,
                                    "decorators": [],
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 734,
                                        "end": 740,
                                        "kind": "init",
                                        "key": {
                                          "type": "Literal",
                                          "start": 734,
                                          "end": 735,
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 737,
                                          "end": 740,
                                          "decorators": [],
                                          "name": "key",
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
                                        "start": 742,
                                        "end": 750,
                                        "kind": "init",
                                        "key": {
                                          "type": "Literal",
                                          "start": 742,
                                          "end": 743,
                                          "value": 1,
                                          "raw": "1"
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 745,
                                          "end": 750,
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ],
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": null,
                                  "definite": false
                                }
                              ],
                              "declare": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 756,
                              "end": 764,
                              "decorators": [],
                              "name": "iterable",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "body": {
                              "type": "BlockStatement",
                              "start": 766,
                              "end": 819,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 784,
                                  "end": 805,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 784,
                                    "end": 804,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 784,
                                      "end": 792,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 784,
                                        "end": 788
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 789,
                                        "end": 792,
                                        "decorators": [],
                                        "name": "set",
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
                                        "start": 793,
                                        "end": 796,
                                        "decorators": [],
                                        "name": "key",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 798,
                                        "end": 803,
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "optional": false
                                  },
                                  "directive": null
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "alternate": null
                    }
                  ]
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 841,
              "end": 1297,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 841,
                "end": 844,
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 844,
                "end": 1297,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 845,
                    "end": 851,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 848,
                      "end": 851,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 850,
                        "end": 851,
                        "typeName": {
                          "type": "Identifier",
                          "start": 850,
                          "end": 851,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 853,
                    "end": 861,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 858,
                      "end": 861,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 860,
                        "end": 861,
                        "typeName": {
                          "type": "Identifier",
                          "start": 860,
                          "end": 861,
                          "decorators": [],
                          "name": "V",
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
                  "start": 862,
                  "end": 868,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 864,
                    "end": 868
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 869,
                  "end": 1297,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 879,
                      "end": 916,
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 885,
                          "end": 915,
                          "id": {
                            "type": "Identifier",
                            "start": 885,
                            "end": 890,
                            "decorators": [],
                            "name": "entry",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "CallExpression",
                            "start": 893,
                            "end": 915,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 893,
                              "end": 910,
                              "object": {
                                "type": "MemberExpression",
                                "start": 893,
                                "end": 906,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 893,
                                  "end": 897
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 898,
                                  "end": 906,
                                  "name": "weakMap"
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 907,
                                "end": 910,
                                "decorators": [],
                                "name": "get",
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
                                "start": 911,
                                "end": 914,
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    {
                      "type": "IfStatement",
                      "start": 925,
                      "end": 1270,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 929,
                        "end": 948,
                        "left": {
                          "type": "Identifier",
                          "start": 929,
                          "end": 934,
                          "decorators": [],
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Identifier",
                          "start": 939,
                          "end": 948,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 950,
                        "end": 994,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 964,
                            "end": 984,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 964,
                              "end": 983,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 964,
                                "end": 975,
                                "object": {
                                  "type": "Identifier",
                                  "start": 964,
                                  "end": 969,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 970,
                                  "end": 975,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 978,
                                "end": 983,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "start": 1000,
                        "end": 1270,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 1014,
                            "end": 1043,
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 1020,
                                "end": 1042,
                                "id": {
                                  "type": "Identifier",
                                  "start": 1020,
                                  "end": 1023,
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "start": 1026,
                                  "end": 1042,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 1030,
                                    "end": 1037,
                                    "decorators": [],
                                    "name": "WeakRef",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 1038,
                                      "end": 1041,
                                      "decorators": [],
                                      "name": "key",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ]
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1057,
                            "end": 1096,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1057,
                              "end": 1095,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1057,
                                "end": 1074,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1057,
                                  "end": 1070,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1057,
                                    "end": 1061
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "start": 1062,
                                    "end": 1070,
                                    "name": "weakMap"
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1071,
                                  "end": 1074,
                                  "decorators": [],
                                  "name": "set",
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
                                  "start": 1075,
                                  "end": 1078,
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "ObjectExpression",
                                  "start": 1080,
                                  "end": 1094,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 1082,
                                      "end": 1085,
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1082,
                                        "end": 1085,
                                        "decorators": [],
                                        "name": "ref",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "start": 1082,
                                        "end": 1085,
                                        "decorators": [],
                                        "name": "ref",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "optional": false
                                    },
                                    {
                                      "type": "Property",
                                      "start": 1087,
                                      "end": 1092,
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1087,
                                        "end": 1092,
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "start": 1087,
                                        "end": 1092,
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "optional": false
                                    }
                                  ]
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1109,
                            "end": 1131,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1109,
                              "end": 1130,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1109,
                                "end": 1125,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1109,
                                  "end": 1121,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1109,
                                    "end": 1113
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "start": 1114,
                                    "end": 1121,
                                    "name": "refSet"
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1122,
                                  "end": 1125,
                                  "decorators": [],
                                  "name": "add",
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
                                  "start": 1126,
                                  "end": 1129,
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1144,
                            "end": 1260,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1144,
                              "end": 1259,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1144,
                                "end": 1176,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1144,
                                  "end": 1167,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1144,
                                    "end": 1148
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "start": 1149,
                                    "end": 1167,
                                    "name": "finalizationGroup"
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1168,
                                  "end": 1176,
                                  "decorators": [],
                                  "name": "register",
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
                                  "start": 1177,
                                  "end": 1180,
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "ObjectExpression",
                                  "start": 1182,
                                  "end": 1253,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 1200,
                                      "end": 1217,
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1200,
                                        "end": 1203,
                                        "decorators": [],
                                        "name": "set",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "value": {
                                        "type": "MemberExpression",
                                        "start": 1205,
                                        "end": 1217,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1205,
                                          "end": 1209
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 1210,
                                          "end": 1217,
                                          "name": "refSet"
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false
                                    },
                                    {
                                      "type": "Property",
                                      "start": 1235,
                                      "end": 1238,
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1235,
                                        "end": 1238,
                                        "decorators": [],
                                        "name": "ref",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "start": 1235,
                                        "end": 1238,
                                        "decorators": [],
                                        "name": "ref",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "optional": false
                                    }
                                  ]
                                },
                                {
                                  "type": "Identifier",
                                  "start": 1255,
                                  "end": 1258,
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1279,
                      "end": 1291,
                      "argument": {
                        "type": "ThisExpression",
                        "start": 1286,
                        "end": 1290
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1303,
              "end": 1370,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1303,
                "end": 1306,
                "decorators": [],
                "name": "has",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1306,
                "end": 1370,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1307,
                    "end": 1313,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1310,
                      "end": 1313,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1312,
                        "end": 1313,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1312,
                          "end": 1313,
                          "decorators": [],
                          "name": "K",
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
                  "start": 1314,
                  "end": 1323,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1316,
                    "end": 1323
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 1324,
                  "end": 1370,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1334,
                      "end": 1364,
                      "argument": {
                        "type": "CallExpression",
                        "start": 1341,
                        "end": 1363,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1341,
                          "end": 1358,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1341,
                            "end": 1354,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1341,
                              "end": 1345
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 1346,
                              "end": 1354,
                              "name": "weakMap"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1355,
                            "end": 1358,
                            "decorators": [],
                            "name": "has",
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
                            "start": 1359,
                            "end": 1362,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1376,
              "end": 1456,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1376,
                "end": 1379,
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1379,
                "end": 1456,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1380,
                    "end": 1386,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1383,
                      "end": 1386,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1385,
                        "end": 1386,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1385,
                          "end": 1386,
                          "decorators": [],
                          "name": "K",
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
                  "start": 1387,
                  "end": 1402,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1389,
                    "end": 1402,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 1389,
                        "end": 1390,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1389,
                          "end": 1390,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1393,
                        "end": 1402
                      }
                    ]
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 1403,
                  "end": 1456,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1413,
                      "end": 1450,
                      "argument": {
                        "type": "ChainExpression",
                        "start": 1420,
                        "end": 1449,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1420,
                          "end": 1449,
                          "object": {
                            "type": "CallExpression",
                            "start": 1420,
                            "end": 1442,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1420,
                              "end": 1437,
                              "object": {
                                "type": "MemberExpression",
                                "start": 1420,
                                "end": 1433,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1420,
                                  "end": 1424
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 1425,
                                  "end": 1433,
                                  "name": "weakMap"
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1434,
                                "end": 1437,
                                "decorators": [],
                                "name": "get",
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
                                "start": 1438,
                                "end": 1441,
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1444,
                            "end": 1449,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": true,
                          "computed": false
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1462,
              "end": 1781,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1462,
                "end": 1468,
                "decorators": [],
                "name": "delete",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1468,
                "end": 1781,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1469,
                    "end": 1475,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1472,
                      "end": 1475,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1474,
                        "end": 1475,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1474,
                          "end": 1475,
                          "decorators": [],
                          "name": "K",
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
                  "start": 1476,
                  "end": 1485,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1478,
                    "end": 1485
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 1486,
                  "end": 1781,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 1496,
                      "end": 1533,
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 1502,
                          "end": 1532,
                          "id": {
                            "type": "Identifier",
                            "start": 1502,
                            "end": 1507,
                            "decorators": [],
                            "name": "entry",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "CallExpression",
                            "start": 1510,
                            "end": 1532,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1510,
                              "end": 1527,
                              "object": {
                                "type": "MemberExpression",
                                "start": 1510,
                                "end": 1523,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1510,
                                  "end": 1514
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 1515,
                                  "end": 1523,
                                  "name": "weakMap"
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1524,
                                "end": 1527,
                                "decorators": [],
                                "name": "get",
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
                                "start": 1528,
                                "end": 1531,
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    {
                      "type": "IfStatement",
                      "start": 1542,
                      "end": 1604,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 1546,
                        "end": 1565,
                        "left": {
                          "type": "Identifier",
                          "start": 1546,
                          "end": 1551,
                          "decorators": [],
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "===",
                        "right": {
                          "type": "Identifier",
                          "start": 1556,
                          "end": 1565,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 1567,
                        "end": 1604,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1581,
                            "end": 1594,
                            "argument": {
                              "type": "Literal",
                              "start": 1588,
                              "end": 1593,
                              "value": false,
                              "raw": "false"
                            }
                          }
                        ]
                      },
                      "alternate": null
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 1614,
                      "end": 1636,
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 1620,
                          "end": 1635,
                          "id": {
                            "type": "ObjectPattern",
                            "start": 1620,
                            "end": 1627,
                            "decorators": [],
                            "properties": [
                              {
                                "type": "Property",
                                "start": 1622,
                                "end": 1625,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 1622,
                                  "end": 1625,
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Identifier",
                                  "start": 1622,
                                  "end": 1625,
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "optional": false
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 1630,
                            "end": 1635,
                            "decorators": [],
                            "name": "entry",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1645,
                      "end": 1671,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1645,
                        "end": 1670,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1645,
                          "end": 1665,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1645,
                            "end": 1658,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1645,
                              "end": 1649
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 1650,
                              "end": 1658,
                              "name": "weakMap"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1659,
                            "end": 1665,
                            "decorators": [],
                            "name": "delete",
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
                            "start": 1666,
                            "end": 1669,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1680,
                      "end": 1705,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1680,
                        "end": 1704,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1680,
                          "end": 1699,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1680,
                            "end": 1692,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1680,
                              "end": 1684
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 1685,
                              "end": 1692,
                              "name": "refSet"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1693,
                            "end": 1699,
                            "decorators": [],
                            "name": "delete",
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
                            "start": 1700,
                            "end": 1703,
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1714,
                      "end": 1754,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1714,
                        "end": 1753,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1714,
                          "end": 1748,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1714,
                            "end": 1737,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1714,
                              "end": 1718
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 1719,
                              "end": 1737,
                              "name": "finalizationGroup"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1738,
                            "end": 1748,
                            "decorators": [],
                            "name": "unregister",
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
                            "start": 1749,
                            "end": 1752,
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1763,
                      "end": 1775,
                      "argument": {
                        "type": "Literal",
                        "start": 1770,
                        "end": 1774,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 1787,
              "end": 1830,
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "start": 1796,
                "end": 1811,
                "object": {
                  "type": "Identifier",
                  "start": 1796,
                  "end": 1802,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1803,
                  "end": 1811,
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1812,
                "end": 1829,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 1814,
                  "end": 1829,
                  "objectType": {
                    "type": "TSThisType",
                    "start": 1814,
                    "end": 1818
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 1819,
                    "end": 1828,
                    "literal": {
                      "type": "Literal",
                      "start": 1819,
                      "end": 1828,
                      "value": "entries",
                      "raw": "\"entries\""
                    }
                  }
                }
              },
              "value": null,
              "computed": true,
              "static": false,
              "declare": true,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1835,
              "end": 2111,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1836,
                "end": 1843,
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1843,
                "end": 2111,
                "id": null,
                "generator": true,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1845,
                  "end": 1882,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1847,
                    "end": 1882,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1847,
                      "end": 1856,
                      "decorators": [],
                      "name": "Generator",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1856,
                      "end": 1882,
                      "params": [
                        {
                          "type": "TSTupleType",
                          "start": 1857,
                          "end": 1875,
                          "elementTypes": [
                            {
                              "type": "TSNamedTupleMember",
                              "start": 1858,
                              "end": 1864,
                              "label": {
                                "type": "Identifier",
                                "start": 1858,
                                "end": 1861,
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 1863,
                                "end": 1864,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1863,
                                  "end": 1864,
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              "optional": false
                            },
                            {
                              "type": "TSNamedTupleMember",
                              "start": 1866,
                              "end": 1874,
                              "label": {
                                "type": "Identifier",
                                "start": 1866,
                                "end": 1871,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 1873,
                                "end": 1874,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1873,
                                  "end": 1874,
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              "optional": false
                            }
                          ]
                        },
                        {
                          "type": "TSVoidKeyword",
                          "start": 1877,
                          "end": 1881
                        }
                      ]
                    }
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 1883,
                  "end": 2111,
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "start": 1893,
                      "end": 2105,
                      "await": false,
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 1898,
                        "end": 1907,
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1904,
                            "end": 1907,
                            "id": {
                              "type": "Identifier",
                              "start": 1904,
                              "end": 1907,
                              "decorators": [],
                              "name": "ref",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 1911,
                        "end": 1923,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1911,
                          "end": 1915
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 1916,
                          "end": 1923,
                          "name": "refSet"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 1925,
                        "end": 2105,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 1939,
                            "end": 1963,
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 1945,
                                "end": 1962,
                                "id": {
                                  "type": "Identifier",
                                  "start": 1945,
                                  "end": 1948,
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 1951,
                                  "end": 1962,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1951,
                                    "end": 1960,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1951,
                                      "end": 1954,
                                      "decorators": [],
                                      "name": "ref",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1955,
                                      "end": 1960,
                                      "decorators": [],
                                      "name": "deref",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          {
                            "type": "IfStatement",
                            "start": 1976,
                            "end": 2008,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 1980,
                              "end": 1997,
                              "left": {
                                "type": "Identifier",
                                "start": 1980,
                                "end": 1983,
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "===",
                              "right": {
                                "type": "Identifier",
                                "start": 1988,
                                "end": 1997,
                                "decorators": [],
                                "name": "undefined",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "consequent": {
                              "type": "ContinueStatement",
                              "start": 1999,
                              "end": 2008,
                              "label": null
                            },
                            "alternate": null
                          },
                          {
                            "type": "VariableDeclaration",
                            "start": 2021,
                            "end": 2063,
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 2027,
                                "end": 2062,
                                "id": {
                                  "type": "ObjectPattern",
                                  "start": 2027,
                                  "end": 2036,
                                  "decorators": [],
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 2029,
                                      "end": 2034,
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "start": 2029,
                                        "end": 2034,
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "start": 2029,
                                        "end": 2034,
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "TSNonNullExpression",
                                  "start": 2039,
                                  "end": 2062,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 2039,
                                    "end": 2061,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 2039,
                                      "end": 2056,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 2039,
                                        "end": 2052,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 2039,
                                          "end": 2043
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 2044,
                                          "end": 2052,
                                          "name": "weakMap"
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2053,
                                        "end": 2056,
                                        "decorators": [],
                                        "name": "get",
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
                                        "start": 2057,
                                        "end": 2060,
                                        "decorators": [],
                                        "name": "key",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "optional": false
                                  }
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 2076,
                            "end": 2095,
                            "expression": {
                              "type": "YieldExpression",
                              "start": 2076,
                              "end": 2094,
                              "delegate": false,
                              "argument": {
                                "type": "ArrayExpression",
                                "start": 2082,
                                "end": 2094,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 2083,
                                    "end": 2086,
                                    "decorators": [],
                                    "name": "key",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2088,
                                    "end": 2093,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              }
                            },
                            "directive": null
                          }
                        ]
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 2117,
              "end": 2206,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2118,
                "end": 2122,
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 2122,
                "end": 2206,
                "id": null,
                "generator": true,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 2125,
                  "end": 2206,
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "start": 2135,
                      "end": 2200,
                      "await": false,
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 2140,
                        "end": 2156,
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 2146,
                            "end": 2156,
                            "id": {
                              "type": "ObjectPattern",
                              "start": 2146,
                              "end": 2156,
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 2148,
                                  "end": 2154,
                                  "kind": "init",
                                  "key": {
                                    "type": "Literal",
                                    "start": 2148,
                                    "end": 2149,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 2151,
                                    "end": 2154,
                                    "decorators": [],
                                    "name": "key",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 2160,
                        "end": 2164
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 2166,
                        "end": 2200,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2180,
                            "end": 2190,
                            "expression": {
                              "type": "YieldExpression",
                              "start": 2180,
                              "end": 2189,
                              "delegate": false,
                              "argument": {
                                "type": "Identifier",
                                "start": 2186,
                                "end": 2189,
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "directive": null
                          }
                        ]
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 2212,
              "end": 2307,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2213,
                "end": 2219,
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 2219,
                "end": 2307,
                "id": null,
                "generator": true,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 2222,
                  "end": 2307,
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "start": 2232,
                      "end": 2301,
                      "await": false,
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 2237,
                        "end": 2255,
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 2243,
                            "end": 2255,
                            "id": {
                              "type": "ObjectPattern",
                              "start": 2243,
                              "end": 2255,
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 2245,
                                  "end": 2253,
                                  "kind": "init",
                                  "key": {
                                    "type": "Literal",
                                    "start": 2245,
                                    "end": 2246,
                                    "value": 1,
                                    "raw": "1"
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 2248,
                                    "end": 2253,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 2259,
                        "end": 2263
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 2265,
                        "end": 2301,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2279,
                            "end": 2291,
                            "expression": {
                              "type": "YieldExpression",
                              "start": 2279,
                              "end": 2290,
                              "delegate": false,
                              "argument": {
                                "type": "Identifier",
                                "start": 2285,
                                "end": 2290,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "directive": null
                          }
                        ]
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 2311,
      "end": 2755,
      "expression": {
        "type": "CallExpression",
        "start": 2311,
        "end": 2754,
        "callee": {
          "type": "MemberExpression",
          "start": 2311,
          "end": 2334,
          "object": {
            "type": "Identifier",
            "start": 2311,
            "end": 2317,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2318,
            "end": 2334,
            "decorators": [],
            "name": "defineProperties",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 2335,
            "end": 2360,
            "object": {
              "type": "Identifier",
              "start": 2335,
              "end": 2350,
              "decorators": [],
              "name": "IterableWeakMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 2351,
              "end": 2360,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          {
            "type": "ObjectExpression",
            "start": 2362,
            "end": 2753,
            "properties": [
              {
                "type": "Property",
                "start": 2368,
                "end": 2601,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 2369,
                  "end": 2384,
                  "object": {
                    "type": "Identifier",
                    "start": 2369,
                    "end": 2375,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2376,
                    "end": 2384,
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 2387,
                  "end": 2601,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2397,
                      "end": 2415,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2397,
                        "end": 2409,
                        "decorators": [],
                        "name": "configurable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2411,
                        "end": 2415,
                        "value": true,
                        "raw": "true"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2425,
                      "end": 2442,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2425,
                        "end": 2435,
                        "decorators": [],
                        "name": "enumerable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2437,
                        "end": 2442,
                        "value": false,
                        "raw": "false"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2452,
                      "end": 2466,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2452,
                        "end": 2460,
                        "decorators": [],
                        "name": "writable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2462,
                        "end": 2466,
                        "value": true,
                        "raw": "true"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2476,
                      "end": 2594,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2476,
                        "end": 2481,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 2483,
                        "end": 2594,
                        "object": {
                          "type": "TSNonNullExpression",
                          "start": 2483,
                          "end": 2588,
                          "expression": {
                            "type": "CallExpression",
                            "start": 2483,
                            "end": 2587,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 2483,
                              "end": 2514,
                              "object": {
                                "type": "Identifier",
                                "start": 2483,
                                "end": 2489,
                                "decorators": [],
                                "name": "Object",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2490,
                                "end": 2514,
                                "decorators": [],
                                "name": "getOwnPropertyDescriptor",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 2528,
                                "end": 2553,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2528,
                                  "end": 2543,
                                  "decorators": [],
                                  "name": "IterableWeakMap",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2544,
                                  "end": 2553,
                                  "decorators": [],
                                  "name": "prototype",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              {
                                "type": "Literal",
                                "start": 2567,
                                "end": 2576,
                                "value": "entries",
                                "raw": "\"entries\""
                              }
                            ],
                            "optional": false
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2589,
                          "end": 2594,
                          "decorators": [],
                          "name": "value",
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
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 2607,
                "end": 2750,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 2608,
                  "end": 2626,
                  "object": {
                    "type": "Identifier",
                    "start": 2608,
                    "end": 2614,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2615,
                    "end": 2626,
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 2629,
                  "end": 2750,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2639,
                      "end": 2657,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2639,
                        "end": 2651,
                        "decorators": [],
                        "name": "configurable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2653,
                        "end": 2657,
                        "value": true,
                        "raw": "true"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2667,
                      "end": 2684,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2667,
                        "end": 2677,
                        "decorators": [],
                        "name": "enumerable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2679,
                        "end": 2684,
                        "value": false,
                        "raw": "false"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2694,
                      "end": 2709,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2694,
                        "end": 2702,
                        "decorators": [],
                        "name": "writable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2704,
                        "end": 2709,
                        "value": false,
                        "raw": "false"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2719,
                      "end": 2743,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2719,
                        "end": 2724,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2726,
                        "end": 2743,
                        "value": "IterableWeakMap",
                        "raw": "\"IterableWeakMap\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
