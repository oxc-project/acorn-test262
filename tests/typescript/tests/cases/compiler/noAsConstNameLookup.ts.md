__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 648,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 23,
      "end": 46,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 33,
        "decorators": [],
        "name": "Store",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 36,
        "end": 46,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 38,
            "end": 44,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 44,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 41,
                "end": 44,
                "literal": {
                  "type": "Literal",
                  "start": 41,
                  "end": 44,
                  "raw": "123",
                  "value": 123
                }
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 47,
      "end": 128,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 54,
        "end": 128,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 59,
          "end": 66,
          "decorators": [],
          "name": "Cleaner",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 69,
          "end": 128,
          "params": [
            {
              "type": "Identifier",
              "start": 87,
              "end": 111,
              "decorators": [],
              "name": "runner",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 93,
                "end": 111,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 95,
                  "end": 111,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 108,
                    "end": 111,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 109,
                        "end": 110,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 109,
                          "end": 110,
                          "decorators": [],
                          "name": "W",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 108,
                    "decorators": [],
                    "name": "FeatureRunner",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 113,
            "end": 128,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 116,
              "end": 128,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 123,
                "end": 128,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 124,
                    "end": 127
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 116,
                "end": 123,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 69,
            "end": 86,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 70,
                "end": 85,
                "const": false,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 80,
                  "end": 85,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 85,
                    "decorators": [],
                    "name": "Store",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "default": null,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "typeAnnotation": null
                },
                "out": false
              }
            ]
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 130,
      "end": 552,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 137,
        "end": 552,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 174,
          "end": 552,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 180,
              "end": 221,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 197,
                "end": 205,
                "decorators": [],
                "name": "cleaners",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 205,
                "end": 216,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 207,
                  "end": 216,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 207,
                    "end": 214,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 214,
                      "decorators": [],
                      "name": "Cleaner",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "value": {
                "type": "ArrayExpression",
                "start": 219,
                "end": 221,
                "elements": []
              }
            },
            {
              "type": "MethodDefinition",
              "start": 227,
              "end": 419,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 233,
                "end": 243,
                "decorators": [],
                "name": "runFeature",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 243,
                "end": 419,
                "async": true,
                "body": {
                  "type": "BlockStatement",
                  "start": 260,
                  "end": 419,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 270,
                      "end": 373,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 276,
                          "end": 372,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 276,
                            "end": 300,
                            "decorators": [],
                            "name": "objectWhichShouldBeConst",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "TSAsExpression",
                            "start": 303,
                            "end": 372,
                            "expression": {
                              "type": "ObjectExpression",
                              "start": 303,
                              "end": 363,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 317,
                                  "end": 326,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 317,
                                    "end": 322,
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "ObjectExpression",
                                    "start": 324,
                                    "end": 326,
                                    "properties": []
                                  }
                                },
                                {
                                  "type": "Property",
                                  "start": 340,
                                  "end": 352,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 340,
                                    "end": 348,
                                    "decorators": [],
                                    "name": "settings",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "ObjectExpression",
                                    "start": 350,
                                    "end": 352,
                                    "properties": []
                                  }
                                }
                              ]
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 367,
                              "end": 372,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 367,
                                "end": 372,
                                "decorators": [],
                                "name": "const",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const"
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 382,
                      "end": 413,
                      "argument": {
                        "type": "Identifier",
                        "start": 389,
                        "end": 413,
                        "decorators": [],
                        "name": "objectWhichShouldBeConst",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 245,
                  "end": 259,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 247,
                    "end": 259,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 254,
                      "end": 259,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 255,
                          "end": 258
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 247,
                      "end": 254,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 425,
              "end": 550,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 431,
                "end": 434,
                "decorators": [],
                "name": "run",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 434,
                "end": 550,
                "async": true,
                "body": {
                  "type": "BlockStatement",
                  "start": 451,
                  "end": 550,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 461,
                      "end": 478,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 467,
                          "end": 478,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 467,
                            "end": 473,
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "ObjectExpression",
                            "start": 476,
                            "end": 478,
                            "properties": []
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const"
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 487,
                      "end": 522,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 487,
                        "end": 522,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 509,
                            "end": 521,
                            "async": false,
                            "body": {
                              "type": "CallExpression",
                              "start": 514,
                              "end": 521,
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 516,
                                  "end": 520
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 514,
                                "end": 515,
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 509,
                                "end": 510,
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 487,
                          "end": 508,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 487,
                            "end": 500,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 487,
                              "end": 491
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 492,
                              "end": 500,
                              "decorators": [],
                              "name": "cleaners",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 501,
                            "end": 508,
                            "decorators": [],
                            "name": "forEach",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 531,
                      "end": 544,
                      "argument": {
                        "type": "Identifier",
                        "start": 538,
                        "end": 544,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 436,
                  "end": 450,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 438,
                    "end": 450,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 445,
                      "end": 450,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 446,
                          "end": 449
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 438,
                      "end": 445,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 143,
          "end": 156,
          "decorators": [],
          "name": "FeatureRunner",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 156,
          "end": 173,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 157,
              "end": 172,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 167,
                "end": 172,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 172,
                  "decorators": [],
                  "name": "Store",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 157,
                "end": 158,
                "decorators": [],
                "name": "W",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 554,
      "end": 627,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 561,
        "end": 627,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 572,
          "end": 627,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 578,
              "end": 625,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 578,
                "end": 579,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 579,
                "end": 625,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 588,
                  "end": 625,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 598,
                      "end": 619,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 602,
                          "end": 618,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 602,
                            "end": 605,
                            "decorators": [],
                            "name": "one",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "TSAsExpression",
                            "start": 608,
                            "end": 618,
                            "expression": {
                              "type": "Literal",
                              "start": 608,
                              "end": 609,
                              "raw": "1",
                              "value": 1
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 613,
                              "end": 618,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 613,
                                "end": 618,
                                "decorators": [],
                                "name": "const",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "let"
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 581,
                  "end": 587,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 583,
                    "end": 587
                  }
                },
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 567,
          "end": 568,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 568,
          "end": 571,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 569,
              "end": 570,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 569,
                "end": 570,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 628,
      "end": 648,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 628,
        "end": 647,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 628,
          "end": 645,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 628,
            "end": 643,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 632,
              "end": 633,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 633,
              "end": 641,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 634,
                  "end": 640
                }
              ]
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 644,
            "end": 645,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
