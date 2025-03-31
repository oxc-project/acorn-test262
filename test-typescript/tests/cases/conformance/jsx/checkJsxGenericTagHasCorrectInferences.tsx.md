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
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "name": "BaseProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "initialValues",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
              "name": "nextValues",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "cur",
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
                          "name": "T",
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 138,
        "name": "GenericComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 176,
        "end": 191,
        "object": {
          "type": "Identifier",
          "start": 176,
          "end": 181,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 182,
          "end": 191,
          "name": "Component",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 223,
        "end": 240,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 227,
            "end": 238,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 227,
              "end": 229,
              "name": "iv",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "Values",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
              "name": "Props",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "Values",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": true,
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
                  "name": "Props",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "BaseProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "Values",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 242,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 246,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 246,
            "end": 247,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 250,
            "end": 317,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 250,
              "end": 317,
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 285,
                            "end": 286,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 288,
                            "end": 291,
                            "value": "y",
                            "raw": "\"y\""
                          },
                          "kind": "init",
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 307,
                          "end": 308,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Identifier",
                        "start": 312,
                        "end": 313,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 251,
                "end": 267,
                "name": "GenericComponent"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 331,
      "end": 399,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 398,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 336,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 339,
            "end": 398,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 339,
              "end": 398,
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 388,
                          "end": 389,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Identifier",
                        "start": 393,
                        "end": 394,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 340,
                "end": 356,
                "name": "GenericComponent"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 508,
      "end": 595,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 512,
          "end": 594,
          "id": {
            "type": "Identifier",
            "start": 512,
            "end": 513,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 516,
            "end": 594,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 516,
              "end": 594,
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 551,
                            "end": 552,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 554,
                            "end": 557,
                            "value": "y",
                            "raw": "\"y\""
                          },
                          "kind": "init",
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 573,
                          "end": 574,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "ObjectExpression",
                        "start": 579,
                        "end": 589,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 581,
                            "end": 587,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 581,
                              "end": 582,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 584,
                              "end": 587,
                              "object": {
                                "type": "Identifier",
                                "start": 584,
                                "end": 585,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 586,
                                "end": 587,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 517,
                "end": 533,
                "name": "GenericComponent"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 608,
      "end": 686,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 612,
          "end": 685,
          "id": {
            "type": "Identifier",
            "start": 612,
            "end": 613,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 616,
            "end": 685,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 616,
              "end": 685,
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 651,
                            "end": 652,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 654,
                            "end": 657,
                            "value": "y",
                            "raw": "\"y\""
                          },
                          "kind": "init",
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 673,
                          "end": 674,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "MemberExpression",
                        "start": 678,
                        "end": 681,
                        "object": {
                          "type": "Identifier",
                          "start": 678,
                          "end": 679,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 680,
                          "end": 681,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 617,
                "end": 633,
                "name": "GenericComponent"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
