__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 17
          },
          "start": 7,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 23,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 51
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
              "start": 52,
              "end": 53
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 52,
            "end": 53
          }
        ],
        "start": 51,
        "end": 54
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "initialValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 72
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 75
                },
                "typeArguments": null,
                "start": 74,
                "end": 75
              },
              "start": 72,
              "end": 75
            },
            "accessibility": null,
            "static": false,
            "start": 59,
            "end": 76
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nextValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 89
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
                    "name": "cur",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 97,
                          "end": 98
                        },
                        "typeArguments": null,
                        "start": 97,
                        "end": 98
                      },
                      "start": 95,
                      "end": 98
                    },
                    "start": 92,
                    "end": 98
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 103,
                      "end": 104
                    },
                    "typeArguments": null,
                    "start": 103,
                    "end": 104
                  },
                  "start": 100,
                  "end": 104
                },
                "start": 91,
                "end": 104
              },
              "start": 89,
              "end": 104
            },
            "accessibility": null,
            "static": false,
            "start": 79,
            "end": 105
          }
        ],
        "start": 55,
        "end": 107
      },
      "declare": false,
      "start": 32,
      "end": 107
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 138
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 144
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 147,
              "end": 149
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 139,
            "end": 149
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Values",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 157
            },
            "constraint": null,
            "default": {
              "type": "TSObjectKeyword",
              "start": 160,
              "end": 166
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 151,
            "end": 166
          }
        ],
        "start": 138,
        "end": 167
      },
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 181
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 191
        },
        "optional": false,
        "computed": false,
        "start": 176,
        "end": 191
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 197
                },
                "typeArguments": null,
                "start": 192,
                "end": 197
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BaseProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 200,
                  "end": 209
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Values",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 210,
                        "end": 216
                      },
                      "typeArguments": null,
                      "start": 210,
                      "end": 216
                    }
                  ],
                  "start": 209,
                  "end": 217
                },
                "start": 200,
                "end": 217
              }
            ],
            "start": 192,
            "end": 217
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 219,
            "end": 221
          }
        ],
        "start": 191,
        "end": 222
      },
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
              "name": "iv",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 229
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Values",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 237
                },
                "typeArguments": null,
                "start": 231,
                "end": 237
              },
              "start": 229,
              "end": 237
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 227,
            "end": 238
          }
        ],
        "start": 223,
        "end": 240
      },
      "abstract": false,
      "declare": true,
      "start": 108,
      "end": 240
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 247
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "GenericComponent",
                "start": 251,
                "end": 267
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "initialValues",
                    "start": 268,
                    "end": 281
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 285,
                            "end": 286
                          },
                          "value": {
                            "type": "Literal",
                            "value": "y",
                            "raw": "\"y\"",
                            "start": 288,
                            "end": 291
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 285,
                          "end": 291
                        }
                      ],
                      "start": 283,
                      "end": 293
                    },
                    "start": 282,
                    "end": 294
                  },
                  "start": 268,
                  "end": 294
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "nextValues",
                    "start": 295,
                    "end": 305
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 307,
                          "end": 308
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 312,
                        "end": 313
                      },
                      "id": null,
                      "generator": false,
                      "start": 307,
                      "end": 313
                    },
                    "start": 306,
                    "end": 314
                  },
                  "start": 295,
                  "end": 314
                }
              ],
              "selfClosing": true,
              "start": 250,
              "end": 317
            },
            "children": [],
            "closingElement": null,
            "start": 250,
            "end": 317
          },
          "definite": false,
          "start": 246,
          "end": 317
        }
      ],
      "declare": false,
      "start": 242,
      "end": 318
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 336
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "GenericComponent",
                "start": 340,
                "end": 356
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "initialValues",
                    "start": 357,
                    "end": 370
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 372,
                      "end": 374
                    },
                    "start": 371,
                    "end": 375
                  },
                  "start": 357,
                  "end": 375
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "nextValues",
                    "start": 376,
                    "end": 386
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 388,
                          "end": 389
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 393,
                        "end": 394
                      },
                      "id": null,
                      "generator": false,
                      "start": 388,
                      "end": 394
                    },
                    "start": 387,
                    "end": 395
                  },
                  "start": 376,
                  "end": 395
                }
              ],
              "selfClosing": true,
              "start": 339,
              "end": 398
            },
            "children": [],
            "closingElement": null,
            "start": 339,
            "end": 398
          },
          "definite": false,
          "start": 335,
          "end": 398
        }
      ],
      "declare": false,
      "start": 331,
      "end": 399
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 512,
            "end": 513
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "GenericComponent",
                "start": 517,
                "end": 533
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "initialValues",
                    "start": 534,
                    "end": 547
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 551,
                            "end": 552
                          },
                          "value": {
                            "type": "Literal",
                            "value": "y",
                            "raw": "\"y\"",
                            "start": 554,
                            "end": 557
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 551,
                          "end": 557
                        }
                      ],
                      "start": 549,
                      "end": 559
                    },
                    "start": 548,
                    "end": 560
                  },
                  "start": 534,
                  "end": 560
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "nextValues",
                    "start": 561,
                    "end": 571
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 573,
                          "end": 574
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 581,
                              "end": 582
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 584,
                                "end": 585
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 586,
                                "end": 587
                              },
                              "optional": false,
                              "computed": false,
                              "start": 584,
                              "end": 587
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 581,
                            "end": 587
                          }
                        ],
                        "start": 579,
                        "end": 589
                      },
                      "id": null,
                      "generator": false,
                      "start": 573,
                      "end": 590
                    },
                    "start": 572,
                    "end": 591
                  },
                  "start": 561,
                  "end": 591
                }
              ],
              "selfClosing": true,
              "start": 516,
              "end": 594
            },
            "children": [],
            "closingElement": null,
            "start": 516,
            "end": 594
          },
          "definite": false,
          "start": 512,
          "end": 594
        }
      ],
      "declare": false,
      "start": 508,
      "end": 595
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 612,
            "end": 613
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "GenericComponent",
                "start": 617,
                "end": 633
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "initialValues",
                    "start": 634,
                    "end": 647
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 651,
                            "end": 652
                          },
                          "value": {
                            "type": "Literal",
                            "value": "y",
                            "raw": "\"y\"",
                            "start": 654,
                            "end": 657
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 651,
                          "end": 657
                        }
                      ],
                      "start": 649,
                      "end": 659
                    },
                    "start": 648,
                    "end": 660
                  },
                  "start": 634,
                  "end": 660
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "nextValues",
                    "start": 661,
                    "end": 671
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 673,
                          "end": 674
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 678,
                          "end": 679
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 680,
                          "end": 681
                        },
                        "optional": false,
                        "computed": false,
                        "start": 678,
                        "end": 681
                      },
                      "id": null,
                      "generator": false,
                      "start": 673,
                      "end": 681
                    },
                    "start": 672,
                    "end": 682
                  },
                  "start": 661,
                  "end": 682
                }
              ],
              "selfClosing": true,
              "start": 616,
              "end": 685
            },
            "children": [],
            "closingElement": null,
            "start": 616,
            "end": 685
          },
          "definite": false,
          "start": 612,
          "end": 685
        }
      ],
      "declare": false,
      "start": 608,
      "end": 686
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 741
}
```
