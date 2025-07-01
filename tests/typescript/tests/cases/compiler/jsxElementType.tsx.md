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
            "start": 56,
            "end": 61
          },
          "start": 51,
          "end": 61
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 67,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 75
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React18ReactFragment",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 102
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReadonlyArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 118
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "React18ReactNode",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 135
              },
              "typeArguments": null,
              "start": 119,
              "end": 135
            }
          ],
          "start": 118,
          "end": 136
        },
        "start": 105,
        "end": 136
      },
      "declare": false,
      "start": 77,
      "end": 137
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React18ReactNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 159
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "React",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 171
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReactElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 184
              },
              "start": 166,
              "end": 184
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 185,
                  "end": 188
                }
              ],
              "start": 184,
              "end": 189
            },
            "start": 166,
            "end": 189
          },
          {
            "type": "TSStringKeyword",
            "start": 194,
            "end": 200
          },
          {
            "type": "TSNumberKeyword",
            "start": 205,
            "end": 211
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "React18ReactFragment",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 236
            },
            "typeArguments": null,
            "start": 216,
            "end": 236
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "React",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 246
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReactPortal",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 258
              },
              "start": 241,
              "end": 258
            },
            "typeArguments": null,
            "start": 241,
            "end": 258
          },
          {
            "type": "TSBooleanKeyword",
            "start": 263,
            "end": 270
          },
          {
            "type": "TSNullKeyword",
            "start": 275,
            "end": 279
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 284,
            "end": 293
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 305
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React18ReactNode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 306,
                    "end": 322
                  },
                  "typeArguments": null,
                  "start": 306,
                  "end": 322
                }
              ],
              "start": 305,
              "end": 323
            },
            "start": 298,
            "end": 323
          }
        ],
        "start": 164,
        "end": 323
      },
      "declare": false,
      "start": 138,
      "end": 324
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NewReactJSXElementConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 425,
        "end": 454
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 455,
              "end": 456
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 455,
            "end": 456
          }
        ],
        "start": 454,
        "end": 457
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 473,
                      "end": 474
                    },
                    "typeArguments": null,
                    "start": 473,
                    "end": 474
                  },
                  "start": 471,
                  "end": 474
                },
                "start": 466,
                "end": 474
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "React18ReactNode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 479,
                  "end": 495
                },
                "typeArguments": null,
                "start": 479,
                "end": 495
              },
              "start": 476,
              "end": 495
            },
            "start": 465,
            "end": 495
          },
          {
            "type": "TSConstructorType",
            "abstract": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 514,
                      "end": 515
                    },
                    "typeArguments": null,
                    "start": 514,
                    "end": 515
                  },
                  "start": 512,
                  "end": 515
                },
                "start": 507,
                "end": 515
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 520,
                    "end": 525
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Component",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 535
                  },
                  "start": 520,
                  "end": 535
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 536,
                        "end": 537
                      },
                      "typeArguments": null,
                      "start": 536,
                      "end": 537
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 539,
                      "end": 542
                    }
                  ],
                  "start": 535,
                  "end": 543
                },
                "start": 520,
                "end": 543
              },
              "start": 517,
              "end": 543
            },
            "start": 502,
            "end": 543
          }
        ],
        "start": 462,
        "end": 544
      },
      "declare": false,
      "start": 420,
      "end": 545
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 555,
        "end": 561
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 576,
              "end": 579
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 591,
                    "end": 602
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 605,
                        "end": 611
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NewReactJSXElementConstructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 614,
                          "end": 643
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 644,
                              "end": 647
                            }
                          ],
                          "start": 643,
                          "end": 648
                        },
                        "start": 614,
                        "end": 648
                      }
                    ],
                    "start": 605,
                    "end": 648
                  },
                  "declare": false,
                  "start": 586,
                  "end": 649
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 664,
                    "end": 681
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": true,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Literal",
                          "value": "my-custom-element",
                          "raw": "'my-custom-element'",
                          "start": 691,
                          "end": 710
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "React",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 713,
                                "end": 718
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DOMAttributes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 719,
                                "end": 732
                              },
                              "start": 713,
                              "end": 732
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSUnknownKeyword",
                                  "start": 733,
                                  "end": 740
                                }
                              ],
                              "start": 732,
                              "end": 741
                            },
                            "start": 713,
                            "end": 741
                          },
                          "start": 711,
                          "end": 741
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 690,
                        "end": 742
                      }
                    ],
                    "start": 682,
                    "end": 748
                  },
                  "declare": false,
                  "start": 654,
                  "end": 748
                }
              ],
              "start": 580,
              "end": 752
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 566,
            "end": 752
          }
        ],
        "start": 562,
        "end": 754
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 547,
      "end": 754
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
            "name": "Component",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NewReactJSXElementConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 800
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "title",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 803,
                            "end": 808
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 810,
                              "end": 816
                            },
                            "start": 808,
                            "end": 816
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 803,
                          "end": 816
                        }
                      ],
                      "start": 801,
                      "end": 818
                    }
                  ],
                  "start": 800,
                  "end": 819
                },
                "start": 771,
                "end": 819
              },
              "start": 769,
              "end": 819
            },
            "start": 760,
            "end": 819
          },
          "init": null,
          "definite": false,
          "start": 760,
          "end": 819
        }
      ],
      "declare": false,
      "start": 756,
      "end": 820
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "RenderElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 828,
            "end": 841
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 847,
                      "end": 852
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 847,
                      "end": 852
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 847,
                    "end": 852
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
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
                          "name": "title",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 858,
                          "end": 863
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 865,
                            "end": 871
                          },
                          "start": 863,
                          "end": 871
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 858,
                        "end": 871
                      }
                    ],
                    "start": 856,
                    "end": 873
                  },
                  "start": 854,
                  "end": 873
                },
                "start": 845,
                "end": 873
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 879,
                  "end": 882
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 878,
                "end": 883
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "title",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 884,
                    "end": 889
                  },
                  "start": 883,
                  "end": 890
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 892,
                  "end": 895
                },
                "start": 890,
                "end": 896
              },
              "start": 878,
              "end": 896
            },
            "id": null,
            "generator": false,
            "start": 844,
            "end": 896
          },
          "definite": false,
          "start": 828,
          "end": 896
        }
      ],
      "declare": false,
      "start": 822,
      "end": 897
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 898,
          "end": 907
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "RenderElement",
          "optional": false,
          "typeAnnotation": null,
          "start": 910,
          "end": 923
        },
        "start": 898,
        "end": 923
      },
      "directive": null,
      "start": 898,
      "end": 924
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderElement",
            "start": 926,
            "end": 939
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 925,
          "end": 942
        },
        "children": [],
        "closingElement": null,
        "start": 925,
        "end": 942
      },
      "directive": null,
      "start": 925,
      "end": 943
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderElement",
            "start": 945,
            "end": 958
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "title",
                "start": 959,
                "end": 964
              },
              "value": {
                "type": "Literal",
                "value": "react",
                "raw": "\"react\"",
                "start": 965,
                "end": 972
              },
              "start": 959,
              "end": 972
            }
          ],
          "selfClosing": true,
          "start": 944,
          "end": 975
        },
        "children": [],
        "closingElement": null,
        "start": 944,
        "end": 975
      },
      "directive": null,
      "start": 944,
      "end": 976
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderElement",
            "start": 978,
            "end": 991
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "excessProp",
                "start": 992,
                "end": 1002
              },
              "value": null,
              "start": 992,
              "end": 1002
            }
          ],
          "selfClosing": true,
          "start": 977,
          "end": 1005
        },
        "children": [],
        "closingElement": null,
        "start": 977,
        "end": 1005
      },
      "directive": null,
      "start": 977,
      "end": 1006
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "RenderString",
            "optional": false,
            "typeAnnotation": null,
            "start": 1014,
            "end": 1026
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1032,
                      "end": 1037
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1032,
                      "end": 1037
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1032,
                    "end": 1037
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
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
                          "name": "title",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1043,
                          "end": 1048
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1050,
                            "end": 1056
                          },
                          "start": 1048,
                          "end": 1056
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1043,
                        "end": 1056
                      }
                    ],
                    "start": 1041,
                    "end": 1058
                  },
                  "start": 1039,
                  "end": 1058
                },
                "start": 1030,
                "end": 1058
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "title",
              "optional": false,
              "typeAnnotation": null,
              "start": 1063,
              "end": 1068
            },
            "id": null,
            "generator": false,
            "start": 1029,
            "end": 1068
          },
          "definite": false,
          "start": 1014,
          "end": 1068
        }
      ],
      "declare": false,
      "start": 1008,
      "end": 1069
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 1070,
          "end": 1079
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "RenderString",
          "optional": false,
          "typeAnnotation": null,
          "start": 1082,
          "end": 1094
        },
        "start": 1070,
        "end": 1094
      },
      "directive": null,
      "start": 1070,
      "end": 1095
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderString",
            "start": 1097,
            "end": 1109
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 1096,
          "end": 1112
        },
        "children": [],
        "closingElement": null,
        "start": 1096,
        "end": 1112
      },
      "directive": null,
      "start": 1096,
      "end": 1113
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderString",
            "start": 1115,
            "end": 1127
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "title",
                "start": 1128,
                "end": 1133
              },
              "value": {
                "type": "Literal",
                "value": "react",
                "raw": "\"react\"",
                "start": 1134,
                "end": 1141
              },
              "start": 1128,
              "end": 1141
            }
          ],
          "selfClosing": true,
          "start": 1114,
          "end": 1144
        },
        "children": [],
        "closingElement": null,
        "start": 1114,
        "end": 1144
      },
      "directive": null,
      "start": 1114,
      "end": 1145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderString",
            "start": 1147,
            "end": 1159
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "excessProp",
                "start": 1160,
                "end": 1170
              },
              "value": null,
              "start": 1160,
              "end": 1170
            }
          ],
          "selfClosing": true,
          "start": 1146,
          "end": 1173
        },
        "children": [],
        "closingElement": null,
        "start": 1146,
        "end": 1173
      },
      "directive": null,
      "start": 1146,
      "end": 1174
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "RenderNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 1182,
            "end": 1194
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1200,
                      "end": 1205
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1200,
                      "end": 1205
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1200,
                    "end": 1205
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
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
                          "name": "title",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1211,
                          "end": 1216
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1218,
                            "end": 1224
                          },
                          "start": 1216,
                          "end": 1224
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1211,
                        "end": 1224
                      }
                    ],
                    "start": 1209,
                    "end": 1226
                  },
                  "start": 1207,
                  "end": 1226
                },
                "start": 1198,
                "end": 1226
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "title",
                "optional": false,
                "typeAnnotation": null,
                "start": 1231,
                "end": 1236
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 1237,
                "end": 1243
              },
              "optional": false,
              "computed": false,
              "start": 1231,
              "end": 1243
            },
            "id": null,
            "generator": false,
            "start": 1197,
            "end": 1243
          },
          "definite": false,
          "start": 1182,
          "end": 1243
        }
      ],
      "declare": false,
      "start": 1176,
      "end": 1244
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 1245,
          "end": 1254
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "RenderNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 1257,
          "end": 1269
        },
        "start": 1245,
        "end": 1269
      },
      "directive": null,
      "start": 1245,
      "end": 1270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderNumber",
            "start": 1272,
            "end": 1284
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 1271,
          "end": 1287
        },
        "children": [],
        "closingElement": null,
        "start": 1271,
        "end": 1287
      },
      "directive": null,
      "start": 1271,
      "end": 1288
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderNumber",
            "start": 1290,
            "end": 1302
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "title",
                "start": 1303,
                "end": 1308
              },
              "value": {
                "type": "Literal",
                "value": "react",
                "raw": "\"react\"",
                "start": 1309,
                "end": 1316
              },
              "start": 1303,
              "end": 1316
            }
          ],
          "selfClosing": true,
          "start": 1289,
          "end": 1319
        },
        "children": [],
        "closingElement": null,
        "start": 1289,
        "end": 1319
      },
      "directive": null,
      "start": 1289,
      "end": 1320
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderNumber",
            "start": 1322,
            "end": 1334
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "excessProp",
                "start": 1335,
                "end": 1345
              },
              "value": null,
              "start": 1335,
              "end": 1345
            }
          ],
          "selfClosing": true,
          "start": 1321,
          "end": 1348
        },
        "children": [],
        "closingElement": null,
        "start": 1321,
        "end": 1348
      },
      "directive": null,
      "start": 1321,
      "end": 1349
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "RenderArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1357,
            "end": 1368
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1374,
                      "end": 1379
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1374,
                      "end": 1379
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1374,
                    "end": 1379
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
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
                          "name": "title",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1385,
                          "end": 1390
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1392,
                            "end": 1398
                          },
                          "start": 1390,
                          "end": 1398
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1385,
                        "end": 1398
                      }
                    ],
                    "start": 1383,
                    "end": 1400
                  },
                  "start": 1381,
                  "end": 1400
                },
                "start": 1372,
                "end": 1400
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "title",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1406,
                  "end": 1411
                }
              ],
              "start": 1405,
              "end": 1412
            },
            "id": null,
            "generator": false,
            "start": 1371,
            "end": 1412
          },
          "definite": false,
          "start": 1357,
          "end": 1412
        }
      ],
      "declare": false,
      "start": 1351,
      "end": 1413
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 1414,
          "end": 1423
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "RenderArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1426,
          "end": 1437
        },
        "start": 1414,
        "end": 1437
      },
      "directive": null,
      "start": 1414,
      "end": 1438
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderArray",
            "start": 1440,
            "end": 1451
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 1439,
          "end": 1454
        },
        "children": [],
        "closingElement": null,
        "start": 1439,
        "end": 1454
      },
      "directive": null,
      "start": 1439,
      "end": 1455
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderArray",
            "start": 1457,
            "end": 1468
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "title",
                "start": 1469,
                "end": 1474
              },
              "value": {
                "type": "Literal",
                "value": "react",
                "raw": "\"react\"",
                "start": 1475,
                "end": 1482
              },
              "start": 1469,
              "end": 1482
            }
          ],
          "selfClosing": true,
          "start": 1456,
          "end": 1485
        },
        "children": [],
        "closingElement": null,
        "start": 1456,
        "end": 1485
      },
      "directive": null,
      "start": 1456,
      "end": 1486
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderArray",
            "start": 1488,
            "end": 1499
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "excessProp",
                "start": 1500,
                "end": 1510
              },
              "value": null,
              "start": 1500,
              "end": 1510
            }
          ],
          "selfClosing": true,
          "start": 1487,
          "end": 1513
        },
        "children": [],
        "closingElement": null,
        "start": 1487,
        "end": 1513
      },
      "directive": null,
      "start": 1487,
      "end": 1514
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "RenderPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1548,
            "end": 1561
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1573,
                      "end": 1578
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1573,
                      "end": 1578
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1573,
                    "end": 1578
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
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
                          "name": "title",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1584,
                          "end": 1589
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1591,
                            "end": 1597
                          },
                          "start": 1589,
                          "end": 1597
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1584,
                        "end": 1597
                      }
                    ],
                    "start": 1582,
                    "end": 1599
                  },
                  "start": 1580,
                  "end": 1599
                },
                "start": 1571,
                "end": 1599
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "react",
              "raw": "\"react\"",
              "start": 1604,
              "end": 1611
            },
            "id": null,
            "generator": false,
            "start": 1564,
            "end": 1611
          },
          "definite": false,
          "start": 1548,
          "end": 1611
        }
      ],
      "declare": false,
      "start": 1542,
      "end": 1612
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 1613,
          "end": 1622
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "RenderPromise",
          "optional": false,
          "typeAnnotation": null,
          "start": 1625,
          "end": 1638
        },
        "start": 1613,
        "end": 1638
      },
      "directive": null,
      "start": 1613,
      "end": 1639
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderPromise",
            "start": 1641,
            "end": 1654
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 1640,
          "end": 1657
        },
        "children": [],
        "closingElement": null,
        "start": 1640,
        "end": 1657
      },
      "directive": null,
      "start": 1640,
      "end": 1658
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderPromise",
            "start": 1660,
            "end": 1673
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "title",
                "start": 1674,
                "end": 1679
              },
              "value": {
                "type": "Literal",
                "value": "react",
                "raw": "\"react\"",
                "start": 1680,
                "end": 1687
              },
              "start": 1674,
              "end": 1687
            }
          ],
          "selfClosing": true,
          "start": 1659,
          "end": 1690
        },
        "children": [],
        "closingElement": null,
        "start": 1659,
        "end": 1690
      },
      "directive": null,
      "start": 1659,
      "end": 1691
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderPromise",
            "start": 1693,
            "end": 1706
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "excessProp",
                "start": 1707,
                "end": 1717
              },
              "value": null,
              "start": 1707,
              "end": 1717
            }
          ],
          "selfClosing": true,
          "start": 1692,
          "end": 1720
        },
        "children": [],
        "closingElement": null,
        "start": 1692,
        "end": 1720
      },
      "directive": null,
      "start": 1692,
      "end": 1721
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RenderStringClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1760,
        "end": 1777
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 1786,
          "end": 1791
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 1792,
          "end": 1801
        },
        "optional": false,
        "computed": false,
        "start": 1786,
        "end": 1801
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
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
                  "name": "title",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1804,
                  "end": 1809
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1811,
                    "end": 1817
                  },
                  "start": 1809,
                  "end": 1817
                },
                "accessibility": null,
                "static": false,
                "start": 1804,
                "end": 1817
              }
            ],
            "start": 1802,
            "end": 1819
          }
        ],
        "start": 1801,
        "end": 1820
      },
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
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 1825,
              "end": 1831
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1847,
                          "end": 1851
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1852,
                          "end": 1857
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1847,
                        "end": 1857
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "title",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1858,
                        "end": 1863
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1847,
                      "end": 1863
                    },
                    "start": 1840,
                    "end": 1864
                  }
                ],
                "start": 1834,
                "end": 1868
              },
              "expression": false,
              "start": 1831,
              "end": 1868
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1825,
            "end": 1868
          }
        ],
        "start": 1821,
        "end": 1870
      },
      "abstract": false,
      "declare": false,
      "start": 1754,
      "end": 1870
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 1871,
          "end": 1880
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "RenderStringClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1883,
          "end": 1900
        },
        "start": 1871,
        "end": 1900
      },
      "directive": null,
      "start": 1871,
      "end": 1901
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderStringClass",
            "start": 1903,
            "end": 1920
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 1902,
          "end": 1923
        },
        "children": [],
        "closingElement": null,
        "start": 1902,
        "end": 1923
      },
      "directive": null,
      "start": 1902,
      "end": 1924
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderStringClass",
            "start": 1926,
            "end": 1943
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "title",
                "start": 1944,
                "end": 1949
              },
              "value": {
                "type": "Literal",
                "value": "react",
                "raw": "\"react\"",
                "start": 1950,
                "end": 1957
              },
              "start": 1944,
              "end": 1957
            }
          ],
          "selfClosing": true,
          "start": 1925,
          "end": 1960
        },
        "children": [],
        "closingElement": null,
        "start": 1925,
        "end": 1960
      },
      "directive": null,
      "start": 1925,
      "end": 1961
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "RenderStringClass",
            "start": 1963,
            "end": 1980
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "excessProp",
                "start": 1981,
                "end": 1991
              },
              "value": null,
              "start": 1981,
              "end": 1991
            }
          ],
          "selfClosing": true,
          "start": 1962,
          "end": 1994
        },
        "children": [],
        "closingElement": null,
        "start": 1962,
        "end": 1994
      },
      "directive": null,
      "start": 1962,
      "end": 1995
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 2031,
            "end": 2034
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 2030,
          "end": 2037
        },
        "children": [],
        "closingElement": null,
        "start": 2030,
        "end": 2037
      },
      "directive": null,
      "start": 2030,
      "end": 2038
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "my-custom-element",
            "start": 2040,
            "end": 2057
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 2039,
          "end": 2060
        },
        "children": [],
        "closingElement": null,
        "start": 2039,
        "end": 2060
      },
      "directive": null,
      "start": 2039,
      "end": 2061
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "boop",
            "start": 2115,
            "end": 2119
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 2114,
          "end": 2122
        },
        "children": [],
        "closingElement": null,
        "start": 2114,
        "end": 2122
      },
      "directive": null,
      "start": 2114,
      "end": 2123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "my-undeclared-custom-element",
            "start": 2125,
            "end": 2153
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 2124,
          "end": 2156
        },
        "children": [],
        "closingElement": null,
        "start": 2124,
        "end": 2156
      },
      "directive": null,
      "start": 2124,
      "end": 2157
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactNativeFlatListProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 2410,
        "end": 2434
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 2435,
              "end": 2439
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2435,
            "end": 2439
          }
        ],
        "start": 2434,
        "end": 2440
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2441,
        "end": 2443
      },
      "declare": false,
      "start": 2400,
      "end": 2443
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactNativeFlatList",
        "optional": false,
        "typeAnnotation": null,
        "start": 2453,
        "end": 2472
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 2483,
              "end": 2485
            },
            "start": 2481,
            "end": 2485
          },
          "start": 2476,
          "end": 2485
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ref",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "React",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2494,
                  "end": 2499
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ForwardedRef",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2500,
                  "end": 2512
                },
                "start": 2494,
                "end": 2512
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactNativeFlatList",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2520,
                      "end": 2539
                    },
                    "typeArguments": null,
                    "start": 2513,
                    "end": 2539
                  }
                ],
                "start": 2512,
                "end": 2540
              },
              "start": 2494,
              "end": 2540
            },
            "start": 2492,
            "end": 2540
          },
          "start": 2489,
          "end": 2540
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2554,
              "end": 2558
            },
            "start": 2547,
            "end": 2559
          }
        ],
        "start": 2543,
        "end": 2561
      },
      "expression": false,
      "start": 2444,
      "end": 2561
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "ReactNativeFlatList",
            "start": 2563,
            "end": 2582
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 2562,
          "end": 2585
        },
        "children": [],
        "closingElement": null,
        "start": 2562,
        "end": 2585
      },
      "directive": null,
      "start": 2562,
      "end": 2586
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2638,
        "end": 2640
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 2641,
              "end": 2642
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 2659,
                      "end": 2661
                    },
                    "start": 2657,
                    "end": 2661
                  },
                  "start": 2652,
                  "end": 2661
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2666,
                      "end": 2671
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactElement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2672,
                      "end": 2684
                    },
                    "start": 2666,
                    "end": 2684
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 2685,
                        "end": 2688
                      }
                    ],
                    "start": 2684,
                    "end": 2689
                  },
                  "start": 2666,
                  "end": 2689
                },
                "start": 2663,
                "end": 2689
              },
              "start": 2651,
              "end": 2689
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2641,
            "end": 2689
          }
        ],
        "start": 2640,
        "end": 2690
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
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
                "start": 2702,
                "end": 2703
              },
              "typeArguments": null,
              "start": 2702,
              "end": 2703
            },
            "start": 2700,
            "end": 2703
          },
          "start": 2691,
          "end": 2703
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "Component",
                  "start": 2717,
                  "end": 2726
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true,
                "start": 2716,
                "end": 2729
              },
              "children": [],
              "closingElement": null,
              "start": 2716,
              "end": 2729
            },
            "start": 2709,
            "end": 2730
          }
        ],
        "start": 2705,
        "end": 2732
      },
      "expression": false,
      "start": 2629,
      "end": 2732
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Unresolved",
            "start": 2735,
            "end": 2745
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 2734,
          "end": 2748
        },
        "children": [],
        "closingElement": null,
        "start": 2734,
        "end": 2748
      },
      "directive": null,
      "start": 2734,
      "end": 2749
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Unresolved",
            "start": 2751,
            "end": 2761
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "foo",
                "start": 2762,
                "end": 2765
              },
              "value": {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 2766,
                "end": 2771
              },
              "start": 2762,
              "end": 2771
            }
          ],
          "selfClosing": true,
          "start": 2750,
          "end": 2774
        },
        "children": [],
        "closingElement": null,
        "start": 2750,
        "end": 2774
      },
      "directive": null,
      "start": 2750,
      "end": 2775
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 2785,
        "end": 2791
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 2808,
              "end": 2811
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2830,
                    "end": 2847
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": true,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Literal",
                          "value": "a:b",
                          "raw": "'a:b'",
                          "start": 2861,
                          "end": 2866
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
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
                                  "start": 2871,
                                  "end": 2872
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2874,
                                    "end": 2880
                                  },
                                  "start": 2872,
                                  "end": 2880
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 2871,
                                "end": 2880
                              }
                            ],
                            "start": 2869,
                            "end": 2882
                          },
                          "start": 2867,
                          "end": 2882
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2860,
                        "end": 2883
                      }
                    ],
                    "start": 2848,
                    "end": 2891
                  },
                  "declare": false,
                  "start": 2820,
                  "end": 2891
                }
              ],
              "start": 2812,
              "end": 2895
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 2798,
            "end": 2895
          }
        ],
        "start": 2792,
        "end": 2897
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 2777,
      "end": 2897
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXNamespacedName",
            "namespace": {
              "type": "JSXIdentifier",
              "name": "a",
              "start": 2900,
              "end": 2901
            },
            "name": {
              "type": "JSXIdentifier",
              "name": "b",
              "start": 2902,
              "end": 2903
            },
            "start": 2900,
            "end": 2903
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "a",
                "start": 2904,
                "end": 2905
              },
              "value": {
                "type": "Literal",
                "value": "accepted",
                "raw": "\"accepted\"",
                "start": 2906,
                "end": 2916
              },
              "start": 2904,
              "end": 2916
            }
          ],
          "selfClosing": true,
          "start": 2899,
          "end": 2919
        },
        "children": [],
        "closingElement": null,
        "start": 2899,
        "end": 2919
      },
      "directive": null,
      "start": 2899,
      "end": 2920
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXNamespacedName",
            "namespace": {
              "type": "JSXIdentifier",
              "name": "a",
              "start": 2922,
              "end": 2923
            },
            "name": {
              "type": "JSXIdentifier",
              "name": "b",
              "start": 2924,
              "end": 2925
            },
            "start": 2922,
            "end": 2925
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "b",
                "start": 2926,
                "end": 2927
              },
              "value": {
                "type": "Literal",
                "value": "rejected",
                "raw": "\"rejected\"",
                "start": 2928,
                "end": 2938
              },
              "start": 2926,
              "end": 2938
            }
          ],
          "selfClosing": true,
          "start": 2921,
          "end": 2941
        },
        "children": [],
        "closingElement": null,
        "start": 2921,
        "end": 2941
      },
      "directive": null,
      "start": 2921,
      "end": 2942
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXNamespacedName",
            "namespace": {
              "type": "JSXIdentifier",
              "name": "a",
              "start": 2944,
              "end": 2945
            },
            "name": {
              "type": "JSXIdentifier",
              "name": "b",
              "start": 2946,
              "end": 2947
            },
            "start": 2944,
            "end": 2947
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "a",
                "start": 2948,
                "end": 2949
              },
              "value": {
                "type": "Literal",
                "value": "accepted",
                "raw": "\"accepted\"",
                "start": 2950,
                "end": 2960
              },
              "start": 2948,
              "end": 2960
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "b",
                "start": 2961,
                "end": 2962
              },
              "value": {
                "type": "Literal",
                "value": "rejected",
                "raw": "\"rejected\"",
                "start": 2963,
                "end": 2973
              },
              "start": 2961,
              "end": 2973
            }
          ],
          "selfClosing": true,
          "start": 2943,
          "end": 2976
        },
        "children": [],
        "closingElement": null,
        "start": 2943,
        "end": 2976
      },
      "directive": null,
      "start": 2943,
      "end": 2977
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 2977
}
```
