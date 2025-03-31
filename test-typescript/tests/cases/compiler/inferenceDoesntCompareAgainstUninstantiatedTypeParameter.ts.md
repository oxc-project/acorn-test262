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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "name": "ClassA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 28,
        "end": 138,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 136,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 45,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 45,
              "end": 136,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "entity",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 61,
                      "end": 75,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 63,
                        "end": 75,
                        "typeName": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 75,
                          "name": "TEntityClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": true
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
                    "name": "settings",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 93,
                      "end": 126,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 95,
                        "end": 126,
                        "typeName": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 112,
                          "name": "SettingsInterface",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 112,
                          "end": 126,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 113,
                              "end": 125,
                              "typeName": {
                                "type": "Identifier",
                                "start": 113,
                                "end": 125,
                                "name": "TEntityClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 128,
                "end": 136,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 25,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 25,
              "name": "TEntityClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 139,
      "end": 245,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 146,
        "end": 245,
        "id": {
          "type": "Identifier",
          "start": 156,
          "end": 170,
          "name": "ValueInterface",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 170,
          "end": 183,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 171,
              "end": 182,
              "name": {
                "type": "Identifier",
                "start": 171,
                "end": 182,
                "name": "TValueClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "body": {
          "type": "TSInterfaceBody",
          "start": 184,
          "end": 245,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 190,
              "end": 223,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 190,
                "end": 194,
                "name": "func",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 195,
                "end": 222,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 197,
                  "end": 222,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 198,
                      "end": 214,
                      "name": "row",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 201,
                        "end": 214,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 203,
                          "end": 214,
                          "typeName": {
                            "type": "Identifier",
                            "start": 203,
                            "end": 214,
                            "name": "TValueClass",
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
                    "start": 216,
                    "end": 222,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 219,
                      "end": 222
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 228,
              "end": 243,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 228,
                "end": 233,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 234,
                "end": 242,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 236,
                  "end": 242
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 246,
      "end": 348,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 253,
        "end": 348,
        "id": {
          "type": "Identifier",
          "start": 263,
          "end": 280,
          "name": "SettingsInterface",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 280,
          "end": 288,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 281,
              "end": 287,
              "name": {
                "type": "Identifier",
                "start": 281,
                "end": 287,
                "name": "TClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "body": {
          "type": "TSInterfaceBody",
          "start": 289,
          "end": 348,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 295,
              "end": 346,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 295,
                "end": 301,
                "name": "values",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 302,
                "end": 345,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 304,
                  "end": 345,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 305,
                      "end": 316,
                      "name": "row",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 308,
                        "end": 316,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 310,
                          "end": 316,
                          "typeName": {
                            "type": "Identifier",
                            "start": 310,
                            "end": 316,
                            "name": "TClass",
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 321,
                          "end": 335,
                          "name": "ValueInterface",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 335,
                          "end": 343,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 336,
                              "end": 342,
                              "typeName": {
                                "type": "Identifier",
                                "start": 336,
                                "end": 342,
                                "name": "TClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ClassDeclaration",
      "start": 349,
      "end": 397,
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 368,
        "name": "ConcreteClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 369,
        "end": 397,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 375,
            "end": 395,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 375,
              "end": 382,
              "name": "theName",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 385,
              "end": 394,
              "value": "myClass",
              "raw": "'myClass'"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 403,
            "end": 424,
            "name": "thisGetsTheFalseError",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 427,
            "end": 610,
            "callee": {
              "type": "Identifier",
              "start": 431,
              "end": 437,
              "name": "ClassA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "NewExpression",
                "start": 438,
                "end": 457,
                "callee": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 455,
                  "name": "ConcreteClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 465,
                      "end": 471,
                      "name": "values",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 473,
                      "end": 607,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 473,
                          "end": 474,
                          "name": "o",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 502,
                                  "end": 507,
                                  "name": "value",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "MemberExpression",
                                  "start": 509,
                                  "end": 518,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 509,
                                    "end": 510,
                                    "name": "o",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 511,
                                    "end": 518,
                                    "name": "theName",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "kind": "init",
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 532,
                                "end": 591,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 532,
                                  "end": 536,
                                  "name": "func",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 538,
                                  "end": 591,
                                  "id": null,
                                  "expression": true,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 538,
                                      "end": 539,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "body": {
                                    "type": "Literal",
                                    "start": 543,
                                    "end": 591,
                                    "value": "asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj",
                                    "raw": "'asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj'"
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 617,
            "end": 625,
            "name": "thisIsOk",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 628,
            "end": 826,
            "callee": {
              "type": "Identifier",
              "start": 632,
              "end": 638,
              "name": "ClassA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "NewExpression",
                "start": 654,
                "end": 673,
                "callee": {
                  "type": "Identifier",
                  "start": 658,
                  "end": 671,
                  "name": "ConcreteClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 681,
                      "end": 687,
                      "name": "values",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 689,
                      "end": 823,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 689,
                          "end": 690,
                          "name": "o",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 718,
                                  "end": 723,
                                  "name": "value",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "MemberExpression",
                                  "start": 725,
                                  "end": 734,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 725,
                                    "end": 726,
                                    "name": "o",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 727,
                                    "end": 734,
                                    "name": "theName",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "kind": "init",
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 748,
                                "end": 807,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 748,
                                  "end": 752,
                                  "name": "func",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 754,
                                  "end": 807,
                                  "id": null,
                                  "expression": true,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 754,
                                      "end": 755,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "body": {
                                    "type": "Literal",
                                    "start": 759,
                                    "end": 807,
                                    "value": "asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj",
                                    "raw": "'asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj'"
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 638,
              "end": 653,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 639,
                  "end": 652,
                  "typeName": {
                    "type": "Identifier",
                    "start": 639,
                    "end": 652,
                    "name": "ConcreteClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
