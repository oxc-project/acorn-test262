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
              "decorators": [],
              "name": "TEntityClass",
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 28,
        "end": 138,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 136,
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
            "value": {
              "type": "FunctionExpression",
              "start": 45,
              "end": 136,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 75,
                          "decorators": [],
                          "name": "TEntityClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 112,
                          "decorators": [],
                          "name": "SettingsInterface",
                          "optional": false,
                          "typeAnnotation": null
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
                                "decorators": [],
                                "name": "TEntityClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 128,
                "end": 136,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
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
              "name": {
                "type": "Identifier",
                "start": 171,
                "end": 182,
                "decorators": [],
                "name": "TValueClass",
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
        "extends": [],
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
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 203,
                            "end": 214,
                            "decorators": [],
                            "name": "TValueClass",
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
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
              "name": {
                "type": "Identifier",
                "start": 281,
                "end": 287,
                "decorators": [],
                "name": "TClass",
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
        "extends": [],
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
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 310,
                            "end": 316,
                            "decorators": [],
                            "name": "TClass",
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
                          "decorators": [],
                          "name": "ValueInterface",
                          "optional": false,
                          "typeAnnotation": null
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
                                "decorators": [],
                                "name": "TClass",
                                "optional": false,
                                "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 349,
      "end": 397,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 369,
        "end": 397,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 375,
            "end": 395,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 375,
              "end": 382,
              "decorators": [],
              "name": "theName",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 385,
              "end": 394,
              "value": "myClass",
              "raw": "'myClass'"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 399,
      "end": 611,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 403,
          "end": 610,
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
            "callee": {
              "type": "Identifier",
              "start": 431,
              "end": 437,
              "decorators": [],
              "name": "ClassA",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 438,
                "end": 457,
                "callee": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 455,
                  "decorators": [],
                  "name": "ConcreteClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 465,
                      "end": 471,
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 473,
                      "end": 607,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
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
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 502,
                                  "end": 507,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "MemberExpression",
                                  "start": 509,
                                  "end": 518,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 509,
                                    "end": 510,
                                    "decorators": [],
                                    "name": "o",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 511,
                                    "end": 518,
                                    "decorators": [],
                                    "name": "theName",
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
                              },
                              {
                                "type": "Property",
                                "start": 532,
                                "end": 591,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 532,
                                  "end": 536,
                                  "decorators": [],
                                  "name": "func",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 538,
                                  "end": 591,
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
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
                                  "body": {
                                    "type": "Literal",
                                    "start": 543,
                                    "end": 591,
                                    "value": "asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj",
                                    "raw": "'asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj'"
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
                        ]
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
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 613,
      "end": 827,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 617,
          "end": 826,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 639,
                    "end": 652,
                    "decorators": [],
                    "name": "ConcreteClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
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
                  "decorators": [],
                  "name": "ConcreteClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 681,
                      "end": 687,
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 689,
                      "end": 823,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
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
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 718,
                                  "end": 723,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "MemberExpression",
                                  "start": 725,
                                  "end": 734,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 725,
                                    "end": 726,
                                    "decorators": [],
                                    "name": "o",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 727,
                                    "end": 734,
                                    "decorators": [],
                                    "name": "theName",
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
                              },
                              {
                                "type": "Property",
                                "start": 748,
                                "end": 807,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 748,
                                  "end": 752,
                                  "decorators": [],
                                  "name": "func",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 754,
                                  "end": 807,
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
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
                                  "body": {
                                    "type": "Literal",
                                    "start": 759,
                                    "end": 807,
                                    "value": "asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj",
                                    "raw": "'asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj'"
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
                        ]
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
            ]
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
