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
        "name": "Component",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 84,
        "name": "Component",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 91,
        "end": 208,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 97,
            "end": 134,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 108,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 108,
              "end": 134,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 109,
                  "end": 117,
                  "name": "props",
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
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 119,
                  "end": 132,
                  "name": "context",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 127,
                    "end": 132,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 129,
                      "end": 132
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 152,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 145,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 145,
              "end": 152,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
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
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 157,
            "end": 206,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 162,
              "name": "props",
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
                      "name": "Readonly",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                                "name": "children",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                      "name": "Readonly",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "P",
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
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "S",
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 210,
      "end": 568,
      "id": {
        "type": "Identifier",
        "start": 218,
        "end": 224,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "Element",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
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
                    "name": "ElementClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
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
                          "name": "render",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "name": "ElementAttributesProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
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
                          "name": "props",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "name": "ElementChildrenAttribute",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
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
                          "name": "children",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "name": "IntrinsicAttributes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
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
                    "name": "IntrinsicClassAttributes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
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
          "name": "RouteProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
                "name": "children",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "props",
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
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                      },
                      "decorators": [],
                      "optional": false
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 648,
      "end": 732,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 655,
        "end": 732,
        "id": {
          "type": "Identifier",
          "start": 661,
          "end": 672,
          "name": "MyComponent",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 716,
          "end": 725,
          "name": "Component",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 729,
          "end": 732,
          "body": []
        },
        "decorators": [],
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 683,
                "end": 693,
                "typeName": {
                  "type": "Identifier",
                  "start": 683,
                  "end": 693,
                  "name": "RouteProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "RouteProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "implements": [],
        "abstract": false,
        "declare": false,
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "start": 757,
                      "end": 762,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 759,
                          "end": 760,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 759,
                            "end": 760,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 759,
                            "end": 760,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 767,
                    "end": 769,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 734,
            "end": 745,
            "name": "MyComponent"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
