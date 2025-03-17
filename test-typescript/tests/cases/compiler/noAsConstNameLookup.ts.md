__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 649,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 23,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 33,
        "name": "Store",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 36,
        "end": 46,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 38,
            "end": 44,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": 123,
                  "raw": "123"
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
    {
      "type": "ExportNamedDeclaration",
      "start": 47,
      "end": 128,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 54,
        "end": 128,
        "id": {
          "type": "Identifier",
          "start": 59,
          "end": 66,
          "name": "Cleaner",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 69,
          "end": 128,
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 69,
            "end": 86,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 70,
                "end": 85,
                "name": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "name": "W",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 80,
                  "end": 85,
                  "typeName": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 85,
                    "name": "Store",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
              "start": 87,
              "end": 111,
              "name": "runner",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 93,
                "end": 111,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 95,
                  "end": 111,
                  "typeName": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 108,
                    "name": "FeatureRunner",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 108,
                    "end": 111,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 109,
                        "end": 110,
                        "typeName": {
                          "type": "Identifier",
                          "start": 109,
                          "end": 110,
                          "name": "W",
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
              "optional": false
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
              "typeName": {
                "type": "Identifier",
                "start": 116,
                "end": 123,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          }
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
      "start": 130,
      "end": 552,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 137,
        "end": 552,
        "id": {
          "type": "Identifier",
          "start": 143,
          "end": 156,
          "name": "FeatureRunner",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 174,
          "end": 552,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 180,
              "end": 221,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 197,
                "end": 205,
                "name": "cleaners",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrayExpression",
                "start": 219,
                "end": 221,
                "elements": []
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 214,
                      "name": "Cleaner",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 227,
              "end": 419,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 233,
                "end": 243,
                "name": "runFeature",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 243,
                "end": 419,
                "id": null,
                "expression": false,
                "generator": false,
                "async": true,
                "params": [],
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
                          "id": {
                            "type": "Identifier",
                            "start": 276,
                            "end": 300,
                            "name": "objectWhichShouldBeConst",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 317,
                                    "end": 322,
                                    "name": "flags",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "ObjectExpression",
                                    "start": 324,
                                    "end": 326,
                                    "properties": []
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 340,
                                  "end": 352,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 340,
                                    "end": 348,
                                    "name": "settings",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "ObjectExpression",
                                    "start": 350,
                                    "end": 352,
                                    "properties": []
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 367,
                              "end": 372,
                              "typeName": {
                                "type": "Identifier",
                                "start": 367,
                                "end": 372,
                                "name": "const",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "definite": false
                        }
                      ],
                      "kind": "const",
                      "declare": false
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 382,
                      "end": 413,
                      "argument": {
                        "type": "Identifier",
                        "start": 389,
                        "end": 413,
                        "name": "objectWhichShouldBeConst",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 245,
                  "end": 259,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 247,
                    "end": 259,
                    "typeName": {
                      "type": "Identifier",
                      "start": 247,
                      "end": 254,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 425,
              "end": 550,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 431,
                "end": 434,
                "name": "run",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 434,
                "end": 550,
                "id": null,
                "expression": false,
                "generator": false,
                "async": true,
                "params": [],
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
                          "id": {
                            "type": "Identifier",
                            "start": 467,
                            "end": 473,
                            "name": "result",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "ObjectExpression",
                            "start": 476,
                            "end": 478,
                            "properties": []
                          },
                          "definite": false
                        }
                      ],
                      "kind": "const",
                      "declare": false
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 487,
                      "end": 522,
                      "expression": {
                        "type": "CallExpression",
                        "start": 487,
                        "end": 522,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 487,
                          "end": 508,
                          "object": {
                            "type": "MemberExpression",
                            "start": 487,
                            "end": 500,
                            "object": {
                              "type": "ThisExpression",
                              "start": 487,
                              "end": 491
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 492,
                              "end": 500,
                              "name": "cleaners",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 501,
                            "end": 508,
                            "name": "forEach",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 509,
                            "end": 521,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 509,
                                "end": 510,
                                "name": "c",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "CallExpression",
                              "start": 514,
                              "end": 521,
                              "callee": {
                                "type": "Identifier",
                                "start": 514,
                                "end": 515,
                                "name": "c",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 516,
                                  "end": 520
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "typeParameters": null,
                            "returnType": null
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 531,
                      "end": 544,
                      "argument": {
                        "type": "Identifier",
                        "start": 538,
                        "end": 544,
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 436,
                  "end": 450,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 438,
                    "end": 450,
                    "typeName": {
                      "type": "Identifier",
                      "start": 438,
                      "end": 445,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                }
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
          "start": 156,
          "end": 173,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 157,
              "end": 172,
              "name": {
                "type": "Identifier",
                "start": 157,
                "end": 158,
                "name": "W",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 167,
                "end": 172,
                "typeName": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 172,
                  "name": "Store",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 554,
      "end": 627,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 561,
        "end": 627,
        "id": {
          "type": "Identifier",
          "start": 567,
          "end": 568,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 572,
          "end": 627,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 578,
              "end": 625,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 578,
                "end": 579,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 579,
                "end": 625,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                          "id": {
                            "type": "Identifier",
                            "start": 602,
                            "end": 605,
                            "name": "one",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "TSAsExpression",
                            "start": 608,
                            "end": 618,
                            "expression": {
                              "type": "Literal",
                              "start": 608,
                              "end": 609,
                              "value": 1,
                              "raw": "1"
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 613,
                              "end": 618,
                              "typeName": {
                                "type": "Identifier",
                                "start": 613,
                                "end": 618,
                                "name": "const",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "definite": false
                        }
                      ],
                      "kind": "let",
                      "declare": false
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 581,
                  "end": 587,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 583,
                    "end": 587
                  }
                }
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
          "start": 568,
          "end": 571,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 569,
              "end": 570,
              "name": {
                "type": "Identifier",
                "start": 569,
                "end": 570,
                "name": "T",
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 628,
      "end": 648,
      "expression": {
        "type": "CallExpression",
        "start": 628,
        "end": 647,
        "callee": {
          "type": "MemberExpression",
          "start": 628,
          "end": 645,
          "object": {
            "type": "NewExpression",
            "start": 628,
            "end": 643,
            "callee": {
              "type": "Identifier",
              "start": 632,
              "end": 633,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
          "property": {
            "type": "Identifier",
            "start": 644,
            "end": 645,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
