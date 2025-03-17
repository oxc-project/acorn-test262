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
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 21,
          "end": 26,
          "local": {
            "type": "Identifier",
            "start": 21,
            "end": 26,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 32,
        "end": 39,
        "value": "react",
        "raw": "'react'"
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 86,
            "name": "jsx",
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
                    "name": "React",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 86,
                    "name": "createElement",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 87,
      "end": 779,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 100,
        "name": "jsx",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 101,
        "end": 779,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 107,
            "end": 777,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 114,
              "end": 777,
              "id": {
                "type": "Identifier",
                "start": 124,
                "end": 127,
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 128,
                "end": 777,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 138,
                    "end": 165,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 145,
                      "end": 165,
                      "id": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 162,
                        "name": "Element",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 163,
                        "end": 165,
                        "body": []
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
                    "start": 174,
                    "end": 206,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 181,
                      "end": 206,
                      "id": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 203,
                        "name": "ElementClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 204,
                        "end": 206,
                        "body": []
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
                    "start": 215,
                    "end": 260,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 222,
                      "end": 260,
                      "id": {
                        "type": "Identifier",
                        "start": 232,
                        "end": 257,
                        "name": "ElementAttributesProperty",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 258,
                        "end": 260,
                        "body": []
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
                    "start": 269,
                    "end": 313,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 276,
                      "end": 313,
                      "id": {
                        "type": "Identifier",
                        "start": 286,
                        "end": 310,
                        "name": "ElementChildrenAttribute",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 311,
                        "end": 313,
                        "body": []
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
                    "start": 322,
                    "end": 361,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 329,
                      "end": 361,
                      "id": {
                        "type": "Identifier",
                        "start": 339,
                        "end": 358,
                        "name": "IntrinsicAttributes",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 359,
                        "end": 361,
                        "body": []
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
                    "start": 370,
                    "end": 417,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 377,
                      "end": 417,
                      "id": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 411,
                        "name": "IntrinsicClassAttributes",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 411,
                        "end": 414,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 412,
                            "end": 413,
                            "name": {
                              "type": "Identifier",
                              "start": 412,
                              "end": 413,
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
                        "start": 415,
                        "end": 417,
                        "body": []
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
                    "start": 426,
                    "end": 508,
                    "declaration": {
                      "type": "TSTypeAliasDeclaration",
                      "start": 433,
                      "end": 508,
                      "id": {
                        "type": "Identifier",
                        "start": 438,
                        "end": 455,
                        "name": "IntrinsicElements",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 458,
                        "end": 508,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 472,
                            "end": 498,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 472,
                              "end": 475,
                              "name": "div",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 479,
                                      "end": 488,
                                      "name": "className",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 488,
                                      "end": 496,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 490,
                                        "end": 496
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
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
                    "start": 654,
                    "end": 702,
                    "declaration": {
                      "type": "TSTypeAliasDeclaration",
                      "start": 661,
                      "end": 702,
                      "id": {
                        "type": "Identifier",
                        "start": 666,
                        "end": 677,
                        "name": "WithCSSProp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "name": {
                              "type": "Identifier",
                              "start": 678,
                              "end": 679,
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
                          }
                        ]
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 683,
                              "end": 684,
                              "name": "P",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
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
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 689,
                                  "end": 692,
                                  "name": "css",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 692,
                                  "end": 700,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 694,
                                    "end": 700
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
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
                    "start": 711,
                    "end": 770,
                    "declaration": {
                      "type": "TSTypeAliasDeclaration",
                      "start": 718,
                      "end": 770,
                      "id": {
                        "type": "Identifier",
                        "start": 723,
                        "end": 747,
                        "name": "LibraryManagedAttributes",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "name": {
                              "type": "Identifier",
                              "start": 748,
                              "end": 749,
                              "name": "C",
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
                            "start": 751,
                            "end": 752,
                            "name": {
                              "type": "Identifier",
                              "start": 751,
                              "end": 752,
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
                          }
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 756,
                        "end": 770,
                        "typeName": {
                          "type": "Identifier",
                          "start": 756,
                          "end": 767,
                          "name": "WithCSSProp",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 767,
                          "end": 770,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 768,
                              "end": 769,
                              "typeName": {
                                "type": "Identifier",
                                "start": 768,
                                "end": 769,
                                "name": "P",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "type"
                  }
                ]
              },
              "kind": "namespace",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 795,
            "end": 836,
            "name": "Comp",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 799,
              "end": 836,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 801,
                "end": 836,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 802,
                    "end": 827,
                    "name": "p",
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
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 807,
                              "end": 816,
                              "name": "className",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 817,
                              "end": 825,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 819,
                                "end": 825
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
                  "start": 829,
                  "end": 836,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 832,
                    "end": 836
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 839,
      "end": 868,
      "expression": {
        "type": "JSXElement",
        "start": 839,
        "end": 868,
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
                "value": "color:hotpink;",
                "raw": "\"color:hotpink;\""
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
