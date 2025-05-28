__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 741,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 30,
        "value": "react",
        "raw": "\"react\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 51,
        "decorators": [],
        "name": "BaseProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 51,
        "end": 54,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 52,
            "end": 53,
            "name": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "T",
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
        "start": 55,
        "end": 107,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 59,
            "end": 76,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 72,
              "decorators": [],
              "name": "initialValues",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 75,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 74,
                "end": 75,
                "typeName": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 79,
            "end": 105,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 89,
              "decorators": [],
              "name": "nextValues",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 104,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 91,
                "end": 104,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 92,
                    "end": 98,
                    "decorators": [],
                    "name": "cur",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 95,
                      "end": 98,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 97,
                        "end": 98,
                        "typeName": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 98,
                          "decorators": [],
                          "name": "T",
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
                  "start": 100,
                  "end": 104,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 103,
                    "end": 104,
                    "typeName": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 104,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
    {
      "type": "ClassDeclaration",
      "start": 108,
      "end": 240,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 138,
        "decorators": [],
        "name": "GenericComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 138,
        "end": 167,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 139,
            "end": 149,
            "name": {
              "type": "Identifier",
              "start": 139,
              "end": 144,
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 147,
              "end": 149,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 151,
            "end": 166,
            "name": {
              "type": "Identifier",
              "start": 151,
              "end": 157,
              "decorators": [],
              "name": "Values",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSObjectKeyword",
              "start": 160,
              "end": 166
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 176,
        "end": 191,
        "object": {
          "type": "Identifier",
          "start": 176,
          "end": 181,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 182,
          "end": 191,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 191,
        "end": 222,
        "params": [
          {
            "type": "TSIntersectionType",
            "start": 192,
            "end": 217,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 192,
                "end": 197,
                "typeName": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 197,
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 200,
                "end": 217,
                "typeName": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 209,
                  "decorators": [],
                  "name": "BaseProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 209,
                  "end": 217,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 210,
                      "end": 216,
                      "typeName": {
                        "type": "Identifier",
                        "start": 210,
                        "end": 216,
                        "decorators": [],
                        "name": "Values",
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
          {
            "type": "TSTypeLiteral",
            "start": 219,
            "end": 221,
            "members": []
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 223,
        "end": 240,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 227,
            "end": 238,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 227,
              "end": 229,
              "decorators": [],
              "name": "iv",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 229,
              "end": 237,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 231,
                "end": 237,
                "typeName": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 237,
                  "decorators": [],
                  "name": "Values",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 242,
      "end": 318,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 246,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 246,
            "end": 247,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 250,
            "end": 317,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 250,
              "end": 317,
              "name": {
                "type": "JSXIdentifier",
                "start": 251,
                "end": 267,
                "name": "GenericComponent"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 268,
                  "end": 294,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 268,
                    "end": 281,
                    "name": "initialValues"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 282,
                    "end": 294,
                    "expression": {
                      "type": "ObjectExpression",
                      "start": 283,
                      "end": 293,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 285,
                          "end": 291,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 285,
                            "end": 286,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 288,
                            "end": 291,
                            "value": "y",
                            "raw": "\"y\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 295,
                  "end": 314,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 295,
                    "end": 305,
                    "name": "nextValues"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 306,
                    "end": 314,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 307,
                      "end": 313,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 307,
                          "end": 308,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 312,
                        "end": 313,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 331,
      "end": 399,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 398,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 336,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 339,
            "end": 398,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 339,
              "end": 398,
              "name": {
                "type": "JSXIdentifier",
                "start": 340,
                "end": 356,
                "name": "GenericComponent"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 357,
                  "end": 375,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 357,
                    "end": 370,
                    "name": "initialValues"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 371,
                    "end": 375,
                    "expression": {
                      "type": "Literal",
                      "start": 372,
                      "end": 374,
                      "value": 12,
                      "raw": "12"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 376,
                  "end": 395,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 376,
                    "end": 386,
                    "name": "nextValues"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 387,
                    "end": 395,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 388,
                      "end": 394,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 388,
                          "end": 389,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 393,
                        "end": 394,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 508,
      "end": 595,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 512,
          "end": 594,
          "id": {
            "type": "Identifier",
            "start": 512,
            "end": 513,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 516,
            "end": 594,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 516,
              "end": 594,
              "name": {
                "type": "JSXIdentifier",
                "start": 517,
                "end": 533,
                "name": "GenericComponent"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 534,
                  "end": 560,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 534,
                    "end": 547,
                    "name": "initialValues"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 548,
                    "end": 560,
                    "expression": {
                      "type": "ObjectExpression",
                      "start": 549,
                      "end": 559,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 551,
                          "end": 557,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 551,
                            "end": 552,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 554,
                            "end": 557,
                            "value": "y",
                            "raw": "\"y\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 561,
                  "end": 591,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 561,
                    "end": 571,
                    "name": "nextValues"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 572,
                    "end": 591,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 573,
                      "end": 590,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 573,
                          "end": 574,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ObjectExpression",
                        "start": 579,
                        "end": 589,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 581,
                            "end": 587,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 581,
                              "end": 582,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 584,
                              "end": 587,
                              "object": {
                                "type": "Identifier",
                                "start": 584,
                                "end": 585,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 586,
                                "end": 587,
                                "decorators": [],
                                "name": "x",
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
                      "id": null,
                      "generator": false
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 608,
      "end": 686,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 612,
          "end": 685,
          "id": {
            "type": "Identifier",
            "start": 612,
            "end": 613,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 616,
            "end": 685,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 616,
              "end": 685,
              "name": {
                "type": "JSXIdentifier",
                "start": 617,
                "end": 633,
                "name": "GenericComponent"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 634,
                  "end": 660,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 634,
                    "end": 647,
                    "name": "initialValues"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 648,
                    "end": 660,
                    "expression": {
                      "type": "ObjectExpression",
                      "start": 649,
                      "end": 659,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 651,
                          "end": 657,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 651,
                            "end": 652,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 654,
                            "end": 657,
                            "value": "y",
                            "raw": "\"y\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 661,
                  "end": 682,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 661,
                    "end": 671,
                    "name": "nextValues"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 672,
                    "end": 682,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 673,
                      "end": 681,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 673,
                          "end": 674,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "start": 678,
                        "end": 681,
                        "object": {
                          "type": "Identifier",
                          "start": 678,
                          "end": 679,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 680,
                          "end": 681,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "id": null,
                      "generator": false
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
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
