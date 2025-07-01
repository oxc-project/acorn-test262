__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Store",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 33
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 41,
                  "end": 44
                },
                "start": 41,
                "end": 44
              },
              "start": 39,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 38,
            "end": 44
          }
        ],
        "start": 36,
        "end": 46
      },
      "declare": false,
      "start": 23,
      "end": 46
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cleaner",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 66
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "params": [
              {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 71
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Store",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 85
                  },
                  "typeArguments": null,
                  "start": 80,
                  "end": 85
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 70,
                "end": 85
              }
            ],
            "start": 69,
            "end": 86
          },
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "runner",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FeatureRunner",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 108
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "W",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 109,
                          "end": 110
                        },
                        "typeArguments": null,
                        "start": 109,
                        "end": 110
                      }
                    ],
                    "start": 108,
                    "end": 111
                  },
                  "start": 95,
                  "end": 111
                },
                "start": 93,
                "end": 111
              },
              "start": 87,
              "end": 111
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 123
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 124,
                    "end": 127
                  }
                ],
                "start": 123,
                "end": 128
              },
              "start": 116,
              "end": 128
            },
            "start": 113,
            "end": 128
          },
          "start": 69,
          "end": 128
        },
        "declare": false,
        "start": 54,
        "end": 128
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 47,
      "end": 128
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FeatureRunner",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 156
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "W",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 158
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Store",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 172
                },
                "typeArguments": null,
                "start": 167,
                "end": 172
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 157,
              "end": 172
            }
          ],
          "start": 156,
          "end": 173
        },
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
                "name": "cleaners",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 205
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cleaner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 214
                    },
                    "typeArguments": null,
                    "start": 207,
                    "end": 214
                  },
                  "start": 207,
                  "end": 216
                },
                "start": 205,
                "end": 216
              },
              "value": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 219,
                "end": 221
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": "private",
              "start": 180,
              "end": 221
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "runFeature",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 243
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": true,
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
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 247,
                      "end": 254
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 255,
                          "end": 258
                        }
                      ],
                      "start": 254,
                      "end": 259
                    },
                    "start": 247,
                    "end": 259
                  },
                  "start": 245,
                  "end": 259
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
                            "name": "objectWhichShouldBeConst",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 276,
                            "end": 300
                          },
                          "init": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 317,
                                    "end": 322
                                  },
                                  "value": {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 324,
                                    "end": 326
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 317,
                                  "end": 326
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "settings",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 340,
                                    "end": 348
                                  },
                                  "value": {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 350,
                                    "end": 352
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 340,
                                  "end": 352
                                }
                              ],
                              "start": 303,
                              "end": 363
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "const",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 367,
                                "end": 372
                              },
                              "typeArguments": null,
                              "start": 367,
                              "end": 372
                            },
                            "start": 303,
                            "end": 372
                          },
                          "definite": false,
                          "start": 276,
                          "end": 372
                        }
                      ],
                      "declare": false,
                      "start": 270,
                      "end": 373
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "objectWhichShouldBeConst",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 389,
                        "end": 413
                      },
                      "start": 382,
                      "end": 413
                    }
                  ],
                  "start": 260,
                  "end": 419
                },
                "expression": false,
                "start": 243,
                "end": 419
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 227,
              "end": 419
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "run",
                "optional": false,
                "typeAnnotation": null,
                "start": 431,
                "end": 434
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": true,
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
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 438,
                      "end": 445
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 446,
                          "end": 449
                        }
                      ],
                      "start": 445,
                      "end": 450
                    },
                    "start": 438,
                    "end": 450
                  },
                  "start": 436,
                  "end": 450
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
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 467,
                            "end": 473
                          },
                          "init": {
                            "type": "ObjectExpression",
                            "properties": [],
                            "start": 476,
                            "end": 478
                          },
                          "definite": false,
                          "start": 467,
                          "end": 478
                        }
                      ],
                      "declare": false,
                      "start": 461,
                      "end": 478
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
                              "start": 487,
                              "end": 491
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cleaners",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 492,
                              "end": 500
                            },
                            "optional": false,
                            "computed": false,
                            "start": 487,
                            "end": 500
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "forEach",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 501,
                            "end": 508
                          },
                          "optional": false,
                          "computed": false,
                          "start": 487,
                          "end": 508
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 509,
                                "end": 510
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 514,
                                "end": 515
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 516,
                                  "end": 520
                                }
                              ],
                              "optional": false,
                              "start": 514,
                              "end": 521
                            },
                            "id": null,
                            "generator": false,
                            "start": 509,
                            "end": 521
                          }
                        ],
                        "optional": false,
                        "start": 487,
                        "end": 522
                      },
                      "directive": null,
                      "start": 487,
                      "end": 522
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 538,
                        "end": 544
                      },
                      "start": 531,
                      "end": 544
                    }
                  ],
                  "start": 451,
                  "end": 550
                },
                "expression": false,
                "start": 434,
                "end": 550
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 425,
              "end": 550
            }
          ],
          "start": 174,
          "end": 552
        },
        "abstract": false,
        "declare": false,
        "start": 137,
        "end": 552
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 130,
      "end": 552
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 567,
          "end": 568
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 569,
                "end": 570
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 569,
              "end": 570
            }
          ],
          "start": 568,
          "end": 571
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
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 579
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 583,
                    "end": 587
                  },
                  "start": 581,
                  "end": 587
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "one",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 602,
                            "end": 605
                          },
                          "init": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 608,
                              "end": 609
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "const",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 613,
                                "end": 618
                              },
                              "typeArguments": null,
                              "start": 613,
                              "end": 618
                            },
                            "start": 608,
                            "end": 618
                          },
                          "definite": false,
                          "start": 602,
                          "end": 618
                        }
                      ],
                      "declare": false,
                      "start": 598,
                      "end": 619
                    }
                  ],
                  "start": 588,
                  "end": 625
                },
                "expression": false,
                "start": 579,
                "end": 625
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 578,
              "end": 625
            }
          ],
          "start": 572,
          "end": 627
        },
        "abstract": false,
        "declare": false,
        "start": 561,
        "end": 627
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 554,
      "end": 627
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 632,
              "end": 633
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 634,
                  "end": 640
                }
              ],
              "start": 633,
              "end": 641
            },
            "arguments": [],
            "start": 628,
            "end": 643
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 644,
            "end": 645
          },
          "optional": false,
          "computed": false,
          "start": 628,
          "end": 645
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 628,
        "end": 647
      },
      "directive": null,
      "start": 628,
      "end": 648
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 23,
  "end": 648
}
```
