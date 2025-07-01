__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassA",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TEntityClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 25
          }
        ],
        "start": 12,
        "end": 26
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 45
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "entity",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TEntityClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 63,
                          "end": 75
                        },
                        "typeArguments": null,
                        "start": 63,
                        "end": 75
                      },
                      "start": 61,
                      "end": 75
                    },
                    "start": 54,
                    "end": 75
                  },
                  "readonly": false,
                  "static": false,
                  "start": 46,
                  "end": 75
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "settings",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SettingsInterface",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 112
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TEntityClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 113,
                                "end": 125
                              },
                              "typeArguments": null,
                              "start": 113,
                              "end": 125
                            }
                          ],
                          "start": 112,
                          "end": 126
                        },
                        "start": 95,
                        "end": 126
                      },
                      "start": 93,
                      "end": 126
                    },
                    "start": 84,
                    "end": 126
                  },
                  "readonly": false,
                  "static": false,
                  "start": 77,
                  "end": 126
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 128,
                "end": 136
              },
              "expression": false,
              "start": 45,
              "end": 136
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 34,
            "end": 136
          }
        ],
        "start": 28,
        "end": 138
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 138
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ValueInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 156,
          "end": 170
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValueClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 182
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 171,
              "end": 182
            }
          ],
          "start": 170,
          "end": 183
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 194
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
                      "name": "row",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValueClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 203,
                            "end": 214
                          },
                          "typeArguments": null,
                          "start": 203,
                          "end": 214
                        },
                        "start": 201,
                        "end": 214
                      },
                      "start": 198,
                      "end": 214
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 219,
                      "end": 222
                    },
                    "start": 216,
                    "end": 222
                  },
                  "start": 197,
                  "end": 222
                },
                "start": 195,
                "end": 222
              },
              "accessibility": null,
              "static": false,
              "start": 190,
              "end": 223
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 233
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 236,
                  "end": 242
                },
                "start": 234,
                "end": 242
              },
              "accessibility": null,
              "static": false,
              "start": 228,
              "end": 243
            }
          ],
          "start": 184,
          "end": 245
        },
        "declare": false,
        "start": 146,
        "end": 245
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 139,
      "end": 245
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SettingsInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 263,
          "end": 280
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 281,
                "end": 287
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 281,
              "end": 287
            }
          ],
          "start": 280,
          "end": 288
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 295,
                "end": 301
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
                      "name": "row",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 310,
                            "end": 316
                          },
                          "typeArguments": null,
                          "start": 310,
                          "end": 316
                        },
                        "start": 308,
                        "end": 316
                      },
                      "start": 305,
                      "end": 316
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ValueInterface",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 321,
                          "end": 335
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 336,
                                "end": 342
                              },
                              "typeArguments": null,
                              "start": 336,
                              "end": 342
                            }
                          ],
                          "start": 335,
                          "end": 343
                        },
                        "start": 321,
                        "end": 343
                      },
                      "start": 321,
                      "end": 345
                    },
                    "start": 318,
                    "end": 345
                  },
                  "start": 304,
                  "end": 345
                },
                "start": 302,
                "end": 345
              },
              "accessibility": null,
              "static": false,
              "start": 295,
              "end": 346
            }
          ],
          "start": 289,
          "end": 348
        },
        "declare": false,
        "start": 253,
        "end": 348
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 246,
      "end": 348
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConcreteClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 355,
        "end": 368
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "theName",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 382
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "myClass",
              "raw": "'myClass'",
              "start": 385,
              "end": 394
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 375,
            "end": 395
          }
        ],
        "start": 369,
        "end": 397
      },
      "abstract": false,
      "declare": false,
      "start": 349,
      "end": 397
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "thisGetsTheFalseError",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 424
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassA",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 437
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConcreteClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 442,
                  "end": 455
                },
                "typeArguments": null,
                "arguments": [],
                "start": 438,
                "end": 457
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
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 465,
                      "end": 471
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
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 473,
                          "end": 474
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "ObjectExpression",
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
                                  "start": 502,
                                  "end": 507
                                },
                                "value": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "o",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 509,
                                    "end": 510
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "theName",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 511,
                                    "end": 518
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 509,
                                  "end": 518
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 502,
                                "end": 518
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "func",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 532,
                                  "end": 536
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
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 538,
                                      "end": 539
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "Literal",
                                    "value": "asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj",
                                    "raw": "'asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj'",
                                    "start": 543,
                                    "end": 591
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 538,
                                  "end": 591
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 532,
                                "end": 591
                              }
                            ],
                            "start": 488,
                            "end": 601
                          }
                        ],
                        "start": 478,
                        "end": 607
                      },
                      "id": null,
                      "generator": false,
                      "start": 473,
                      "end": 607
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 465,
                    "end": 607
                  }
                ],
                "start": 459,
                "end": 609
              }
            ],
            "start": 427,
            "end": 610
          },
          "definite": false,
          "start": 403,
          "end": 610
        }
      ],
      "declare": false,
      "start": 399,
      "end": 611
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "thisIsOk",
            "optional": false,
            "typeAnnotation": null,
            "start": 617,
            "end": 625
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassA",
              "optional": false,
              "typeAnnotation": null,
              "start": 632,
              "end": 638
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ConcreteClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 639,
                    "end": 652
                  },
                  "typeArguments": null,
                  "start": 639,
                  "end": 652
                }
              ],
              "start": 638,
              "end": 653
            },
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConcreteClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 658,
                  "end": 671
                },
                "typeArguments": null,
                "arguments": [],
                "start": 654,
                "end": 673
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
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 681,
                      "end": 687
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
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 689,
                          "end": 690
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "ObjectExpression",
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
                                  "start": 718,
                                  "end": 723
                                },
                                "value": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "o",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 725,
                                    "end": 726
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "theName",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 727,
                                    "end": 734
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 725,
                                  "end": 734
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 718,
                                "end": 734
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "func",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 748,
                                  "end": 752
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
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 754,
                                      "end": 755
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "Literal",
                                    "value": "asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj",
                                    "raw": "'asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj'",
                                    "start": 759,
                                    "end": 807
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 754,
                                  "end": 807
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 748,
                                "end": 807
                              }
                            ],
                            "start": 704,
                            "end": 817
                          }
                        ],
                        "start": 694,
                        "end": 823
                      },
                      "id": null,
                      "generator": false,
                      "start": 689,
                      "end": 823
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 681,
                    "end": 823
                  }
                ],
                "start": 675,
                "end": 825
              }
            ],
            "start": 628,
            "end": 826
          },
          "definite": false,
          "start": 617,
          "end": 826
        }
      ],
      "declare": false,
      "start": 613,
      "end": 827
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 827
}
```
