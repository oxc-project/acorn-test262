__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 827,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 138,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 28,
        "end": 138,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 136,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 45,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 45,
              "end": 136,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 128,
                "end": 136,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 46,
                  "end": 75,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 75,
                    "decorators": [],
                    "name": "entity",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 61,
                      "end": 75,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 63,
                        "end": 75,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 75,
                          "decorators": [],
                          "name": "TEntityClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 77,
                  "end": 126,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 126,
                    "decorators": [],
                    "name": "settings",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 93,
                      "end": 126,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 95,
                        "end": 126,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 112,
                          "end": 126,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 113,
                              "end": 125,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 113,
                                "end": 125,
                                "decorators": [],
                                "name": "TEntityClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 112,
                          "decorators": [],
                          "name": "SettingsInterface",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "ClassA",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 25,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 25,
              "decorators": [],
              "name": "TEntityClass",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 139,
      "end": 245,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 146,
        "end": 245,
        "body": {
          "type": "TSInterfaceBody",
          "start": 184,
          "end": 245,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 190,
              "end": 223,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 190,
                "end": 194,
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 195,
                "end": 222,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 197,
                  "end": 222,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 198,
                      "end": 214,
                      "decorators": [],
                      "name": "row",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 201,
                        "end": 214,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 203,
                          "end": 214,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 203,
                            "end": 214,
                            "decorators": [],
                            "name": "TValueClass",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 216,
                    "end": 222,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 219,
                      "end": 222
                    }
                  },
                  "typeParameters": null
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 228,
              "end": 243,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 228,
                "end": 233,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 234,
                "end": 242,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 236,
                  "end": 242
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 156,
          "end": 170,
          "decorators": [],
          "name": "ValueInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 170,
          "end": 183,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 171,
              "end": 182,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 171,
                "end": 182,
                "decorators": [],
                "name": "TValueClass",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 246,
      "end": 348,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 253,
        "end": 348,
        "body": {
          "type": "TSInterfaceBody",
          "start": 289,
          "end": 348,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 295,
              "end": 346,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 295,
                "end": 301,
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 302,
                "end": 345,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 304,
                  "end": 345,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 305,
                      "end": 316,
                      "decorators": [],
                      "name": "row",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 308,
                        "end": 316,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 310,
                          "end": 316,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 310,
                            "end": 316,
                            "decorators": [],
                            "name": "TClass",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 318,
                    "end": 345,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 321,
                      "end": 345,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 321,
                        "end": 343,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 335,
                          "end": 343,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 336,
                              "end": 342,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 336,
                                "end": 342,
                                "decorators": [],
                                "name": "TClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 321,
                          "end": 335,
                          "decorators": [],
                          "name": "ValueInterface",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
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
          "start": 263,
          "end": 280,
          "decorators": [],
          "name": "SettingsInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 280,
          "end": 288,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 281,
              "end": 287,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 281,
                "end": 287,
                "decorators": [],
                "name": "TClass",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 349,
      "end": 397,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 369,
        "end": 397,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 375,
            "end": 395,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 375,
              "end": 382,
              "decorators": [],
              "name": "theName",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 385,
              "end": 394,
              "raw": "'myClass'",
              "value": "myClass"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 368,
        "decorators": [],
        "name": "ConcreteClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 399,
      "end": 611,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 403,
          "end": 610,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 403,
            "end": 424,
            "decorators": [],
            "name": "thisGetsTheFalseError",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 427,
            "end": 610,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 438,
                "end": 457,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 455,
                  "decorators": [],
                  "name": "ConcreteClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "ObjectExpression",
                "start": 459,
                "end": 609,
                "properties": [
                  {
                    "type": "Property",
                    "start": 465,
                    "end": 607,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 465,
                      "end": 471,
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 473,
                      "end": 607,
                      "async": false,
                      "body": {
                        "type": "ArrayExpression",
                        "start": 478,
                        "end": 607,
                        "elements": [
                          {
                            "type": "ObjectExpression",
                            "start": 488,
                            "end": 601,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 502,
                                "end": 518,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 502,
                                  "end": 507,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "MemberExpression",
                                  "start": 509,
                                  "end": 518,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 509,
                                    "end": 510,
                                    "decorators": [],
                                    "name": "o",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 511,
                                    "end": 518,
                                    "decorators": [],
                                    "name": "theName",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              },
                              {
                                "type": "Property",
                                "start": 532,
                                "end": 591,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 532,
                                  "end": 536,
                                  "decorators": [],
                                  "name": "func",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 538,
                                  "end": 591,
                                  "async": false,
                                  "body": {
                                    "type": "Literal",
                                    "start": 543,
                                    "end": 591,
                                    "raw": "'asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj'",
                                    "value": "asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj"
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 538,
                                      "end": 539,
                                      "decorators": [],
                                      "name": "x",
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
                        ]
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 473,
                          "end": 474,
                          "decorators": [],
                          "name": "o",
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
            ],
            "callee": {
              "type": "Identifier",
              "start": 431,
              "end": 437,
              "decorators": [],
              "name": "ClassA",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 613,
      "end": 827,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 617,
          "end": 826,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 617,
            "end": 625,
            "decorators": [],
            "name": "thisIsOk",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 628,
            "end": 826,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 654,
                "end": 673,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 658,
                  "end": 671,
                  "decorators": [],
                  "name": "ConcreteClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "ObjectExpression",
                "start": 675,
                "end": 825,
                "properties": [
                  {
                    "type": "Property",
                    "start": 681,
                    "end": 823,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 681,
                      "end": 687,
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 689,
                      "end": 823,
                      "async": false,
                      "body": {
                        "type": "ArrayExpression",
                        "start": 694,
                        "end": 823,
                        "elements": [
                          {
                            "type": "ObjectExpression",
                            "start": 704,
                            "end": 817,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 718,
                                "end": 734,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 718,
                                  "end": 723,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "MemberExpression",
                                  "start": 725,
                                  "end": 734,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 725,
                                    "end": 726,
                                    "decorators": [],
                                    "name": "o",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 727,
                                    "end": 734,
                                    "decorators": [],
                                    "name": "theName",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              },
                              {
                                "type": "Property",
                                "start": 748,
                                "end": 807,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 748,
                                  "end": 752,
                                  "decorators": [],
                                  "name": "func",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 754,
                                  "end": 807,
                                  "async": false,
                                  "body": {
                                    "type": "Literal",
                                    "start": 759,
                                    "end": 807,
                                    "raw": "'asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj'",
                                    "value": "asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj"
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 754,
                                      "end": 755,
                                      "decorators": [],
                                      "name": "x",
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
                        ]
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 689,
                          "end": 690,
                          "decorators": [],
                          "name": "o",
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
            ],
            "callee": {
              "type": "Identifier",
              "start": 632,
              "end": 638,
              "decorators": [],
              "name": "ClassA",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 638,
              "end": 653,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 639,
                  "end": 652,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 639,
                    "end": 652,
                    "decorators": [],
                    "name": "ConcreteClass",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
