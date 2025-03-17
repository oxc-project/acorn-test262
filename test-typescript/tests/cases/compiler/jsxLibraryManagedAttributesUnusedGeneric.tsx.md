__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 868,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 14,
      "end": 39,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 32,
        "end": 39,
        "raw": "'react'",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 21,
          "end": 26,
          "local": {
            "type": "Identifier",
            "start": 21,
            "end": 26,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 86,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 86,
            "decorators": [],
            "name": "jsx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 86,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 60,
                "end": 86,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 67,
                  "end": 86,
                  "left": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 72,
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 86,
                    "decorators": [],
                    "name": "createElement",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 87,
      "end": 779,
      "body": {
        "type": "TSModuleBlock",
        "start": 101,
        "end": 779,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 107,
            "end": 777,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 114,
              "end": 777,
              "body": {
                "type": "TSModuleBlock",
                "start": 128,
                "end": 777,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 138,
                    "end": 165,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 145,
                      "end": 165,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 163,
                        "end": 165,
                        "body": []
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 162,
                        "decorators": [],
                        "name": "Element",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 174,
                    "end": 206,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 181,
                      "end": 206,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 204,
                        "end": 206,
                        "body": []
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 203,
                        "decorators": [],
                        "name": "ElementClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 215,
                    "end": 260,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 222,
                      "end": 260,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 258,
                        "end": 260,
                        "body": []
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "start": 232,
                        "end": 257,
                        "decorators": [],
                        "name": "ElementAttributesProperty",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 269,
                    "end": 313,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 276,
                      "end": 313,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 311,
                        "end": 313,
                        "body": []
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "start": 286,
                        "end": 310,
                        "decorators": [],
                        "name": "ElementChildrenAttribute",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 322,
                    "end": 361,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 329,
                      "end": 361,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 359,
                        "end": 361,
                        "body": []
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "start": 339,
                        "end": 358,
                        "decorators": [],
                        "name": "IntrinsicAttributes",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 370,
                    "end": 417,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 377,
                      "end": 417,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 415,
                        "end": 417,
                        "body": []
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 411,
                        "decorators": [],
                        "name": "IntrinsicClassAttributes",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 411,
                        "end": 414,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 412,
                            "end": 413,
                            "const": false,
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 412,
                              "end": 413,
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
                    "exportKind": "type",
                    "source": null,
                    "specifiers": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 426,
                    "end": 508,
                    "attributes": [],
                    "declaration": {
                      "type": "TSTypeAliasDeclaration",
                      "start": 433,
                      "end": 508,
                      "declare": false,
                      "id": {
                        "type": "Identifier",
                        "start": 438,
                        "end": 455,
                        "decorators": [],
                        "name": "IntrinsicElements",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 458,
                        "end": 508,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 472,
                            "end": 498,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 472,
                              "end": 475,
                              "decorators": [],
                              "name": "div",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 475,
                              "end": 498,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 477,
                                "end": 498,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 479,
                                    "end": 496,
                                    "accessibility": null,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 479,
                                      "end": 488,
                                      "decorators": [],
                                      "name": "className",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 488,
                                      "end": 496,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 490,
                                        "end": 496
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        ]
                      },
                      "typeParameters": null
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 654,
                    "end": 702,
                    "attributes": [],
                    "declaration": {
                      "type": "TSTypeAliasDeclaration",
                      "start": 661,
                      "end": 702,
                      "declare": false,
                      "id": {
                        "type": "Identifier",
                        "start": 666,
                        "end": 677,
                        "decorators": [],
                        "name": "WithCSSProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSIntersectionType",
                        "start": 683,
                        "end": 702,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 683,
                            "end": 684,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 683,
                              "end": 684,
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 687,
                            "end": 702,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 689,
                                "end": 700,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 689,
                                  "end": 692,
                                  "decorators": [],
                                  "name": "css",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 692,
                                  "end": 700,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 694,
                                    "end": 700
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 677,
                        "end": 680,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 678,
                            "end": 679,
                            "const": false,
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 678,
                              "end": 679,
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "out": false
                          }
                        ]
                      }
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 711,
                    "end": 770,
                    "attributes": [],
                    "declaration": {
                      "type": "TSTypeAliasDeclaration",
                      "start": 718,
                      "end": 770,
                      "declare": false,
                      "id": {
                        "type": "Identifier",
                        "start": 723,
                        "end": 747,
                        "decorators": [],
                        "name": "LibraryManagedAttributes",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 756,
                        "end": 770,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 767,
                          "end": 770,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 768,
                              "end": 769,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 768,
                                "end": 769,
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 756,
                          "end": 767,
                          "decorators": [],
                          "name": "WithCSSProp",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 747,
                        "end": 753,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 748,
                            "end": 749,
                            "const": false,
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 748,
                              "end": 749,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "out": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 751,
                            "end": 752,
                            "const": false,
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 751,
                              "end": 752,
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "out": false
                          }
                        ]
                      }
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": []
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 124,
                "end": 127,
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "namespace"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 100,
        "decorators": [],
        "name": "jsx",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "VariableDeclaration",
      "start": 781,
      "end": 839,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 795,
          "end": 836,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 795,
            "end": 836,
            "decorators": [],
            "name": "Comp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 799,
              "end": 836,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 801,
                "end": 836,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 802,
                    "end": 827,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 803,
                      "end": 827,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 805,
                        "end": 827,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 807,
                            "end": 825,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 807,
                              "end": 816,
                              "decorators": [],
                              "name": "className",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": true,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 817,
                              "end": 825,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 819,
                                "end": 825
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 829,
                  "end": 836,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 832,
                    "end": 836
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 839,
      "end": 868,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 839,
        "end": 868,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 839,
          "end": 868,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 845,
              "end": 865,
              "name": {
                "type": "JSXIdentifier",
                "start": 845,
                "end": 848,
                "name": "css"
              },
              "value": {
                "type": "Literal",
                "start": 849,
                "end": 865,
                "raw": "\"color:hotpink;\"",
                "value": "color:hotpink;"
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 840,
            "end": 844,
            "name": "Comp"
          },
          "selfClosing": true,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
