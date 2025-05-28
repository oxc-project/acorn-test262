__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 772,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 21,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 40,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 40,
        "end": 56,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 41,
            "end": 47,
            "name": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 45,
              "end": 47,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 49,
            "end": 55,
            "name": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 53,
              "end": 55,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 60,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 208,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 84,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 84,
        "end": 90,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 85,
            "end": 86,
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 88,
            "end": 89,
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "S",
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
        "start": 91,
        "end": 208,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 97,
            "end": 134,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 108,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 108,
              "end": 134,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 109,
                  "end": 117,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 114,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 116,
                      "end": 117,
                      "typeName": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 117,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 119,
                  "end": 132,
                  "decorators": [],
                  "name": "context",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 127,
                    "end": 132,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 129,
                      "end": 132
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 152,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 145,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 145,
              "end": 152,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 147,
                "end": 151,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 149,
                  "end": 151,
                  "members": []
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 157,
            "end": 206,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 162,
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 205,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 164,
                "end": 205,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 164,
                    "end": 191,
                    "typeName": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 172,
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 172,
                      "end": 191,
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 173,
                          "end": 190,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 175,
                              "end": 188,
                              "computed": false,
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 175,
                                "end": 183,
                                "decorators": [],
                                "name": "children",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 184,
                                "end": 188,
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "start": 186,
                                  "end": 188,
                                  "members": []
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 194,
                    "end": 205,
                    "typeName": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 202,
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 202,
                      "end": 205,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 203,
                          "end": 204,
                          "typeName": {
                            "type": "Identifier",
                            "start": 203,
                            "end": 204,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
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
      "type": "TSModuleDeclaration",
      "start": 210,
      "end": 568,
      "id": {
        "type": "Identifier",
        "start": 218,
        "end": 224,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 225,
        "end": 568,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 231,
            "end": 566,
            "id": {
              "type": "Identifier",
              "start": 241,
              "end": 244,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 245,
              "end": 566,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 255,
                  "end": 277,
                  "id": {
                    "type": "Identifier",
                    "start": 265,
                    "end": 272,
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 274,
                    "end": 277,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 286,
                  "end": 347,
                  "id": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 308,
                    "decorators": [],
                    "name": "ElementClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 310,
                    "end": 347,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 324,
                        "end": 337,
                        "key": {
                          "type": "Identifier",
                          "start": 324,
                          "end": 330,
                          "decorators": [],
                          "name": "render",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 332,
                          "end": 336,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 334,
                            "end": 336,
                            "members": []
                          }
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 356,
                  "end": 406,
                  "id": {
                    "type": "Identifier",
                    "start": 366,
                    "end": 391,
                    "decorators": [],
                    "name": "ElementAttributesProperty",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 392,
                    "end": 406,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 394,
                        "end": 404,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 394,
                          "end": 399,
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 399,
                          "end": 403,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 401,
                            "end": 403,
                            "members": []
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
                  "type": "TSInterfaceDeclaration",
                  "start": 415,
                  "end": 467,
                  "id": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 449,
                    "decorators": [],
                    "name": "ElementChildrenAttribute",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 450,
                    "end": 467,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 452,
                        "end": 465,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 452,
                          "end": 460,
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 460,
                          "end": 464,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 462,
                            "end": 464,
                            "members": []
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
                  "type": "TSInterfaceDeclaration",
                  "start": 476,
                  "end": 510,
                  "id": {
                    "type": "Identifier",
                    "start": 486,
                    "end": 505,
                    "decorators": [],
                    "name": "IntrinsicAttributes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 507,
                    "end": 510,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 519,
                  "end": 560,
                  "id": {
                    "type": "Identifier",
                    "start": 529,
                    "end": 553,
                    "decorators": [],
                    "name": "IntrinsicClassAttributes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 553,
                    "end": 556,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 554,
                        "end": 555,
                        "name": {
                          "type": "Identifier",
                          "start": 554,
                          "end": 555,
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
                    "start": 557,
                    "end": 560,
                    "body": []
                  },
                  "declare": false
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 570,
      "end": 647,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 577,
        "end": 647,
        "id": {
          "type": "Identifier",
          "start": 587,
          "end": 597,
          "decorators": [],
          "name": "RouteProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 598,
          "end": 647,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 604,
              "end": 645,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 604,
                "end": 612,
                "decorators": [],
                "name": "children",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 613,
                "end": 644,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 615,
                  "end": 644,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 616,
                      "end": 636,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 621,
                        "end": 636,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 623,
                          "end": 636,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 625,
                              "end": 634,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 625,
                                "end": 626,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 626,
                                "end": 634,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 628,
                                  "end": 634
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 638,
                    "end": 644,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 641,
                      "end": 644
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
      "type": "ExportNamedDeclaration",
      "start": 648,
      "end": 732,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 655,
        "end": 732,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 661,
          "end": 672,
          "decorators": [],
          "name": "MyComponent",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 672,
          "end": 707,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 673,
              "end": 706,
              "name": {
                "type": "Identifier",
                "start": 673,
                "end": 674,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 683,
                "end": 693,
                "typeName": {
                  "type": "Identifier",
                  "start": 683,
                  "end": 693,
                  "decorators": [],
                  "name": "RouteProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": {
                "type": "TSTypeReference",
                "start": 696,
                "end": 706,
                "typeName": {
                  "type": "Identifier",
                  "start": 696,
                  "end": 706,
                  "decorators": [],
                  "name": "RouteProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "superClass": {
          "type": "Identifier",
          "start": 716,
          "end": 725,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 725,
          "end": 728,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 726,
              "end": 727,
              "typeName": {
                "type": "Identifier",
                "start": 726,
                "end": 727,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 729,
          "end": 732,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 733,
      "end": 772,
      "expression": {
        "type": "JSXElement",
        "start": 733,
        "end": 772,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 733,
          "end": 772,
          "name": {
            "type": "JSXIdentifier",
            "start": 734,
            "end": 745,
            "name": "MyComponent"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 746,
              "end": 770,
              "name": {
                "type": "JSXIdentifier",
                "start": 746,
                "end": 754,
                "name": "children"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 755,
                "end": 770,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 756,
                  "end": 769,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "start": 757,
                      "end": 762,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 759,
                          "end": 760,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 759,
                            "end": 760,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 759,
                            "end": 760,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 767,
                    "end": 769,
                    "body": []
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
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
