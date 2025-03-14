jsxElementType.tsx
```json
{
  "type": "Program",
  "start": 44,
  "end": 2978,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 75,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 74,
        "raw": "\"react\"",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 51,
          "end": 61,
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 61,
            "decorators": [],
            "name": "React",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 77,
      "end": 137,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 102,
        "decorators": [],
        "name": "React18ReactFragment",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 105,
        "end": 136,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 118,
          "end": 136,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 119,
              "end": 135,
              "typeName": {
                "type": "Identifier",
                "start": 119,
                "end": 135,
                "decorators": [],
                "name": "React18ReactNode",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 105,
          "end": 118,
          "decorators": [],
          "name": "ReadonlyArray",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 138,
      "end": 324,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 159,
        "decorators": [],
        "name": "React18ReactNode",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 164,
        "end": 323,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 166,
            "end": 189,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 184,
              "end": 189,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 185,
                  "end": 188
                }
              ]
            },
            "typeName": {
              "type": "TSQualifiedName",
              "start": 166,
              "end": 184,
              "left": {
                "type": "Identifier",
                "start": 166,
                "end": 171,
                "decorators": [],
                "name": "React",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 172,
                "end": 184,
                "decorators": [],
                "name": "ReactElement",
                "optional": false
              }
            }
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
            "start": 216,
            "end": 236,
            "typeName": {
              "type": "Identifier",
              "start": 216,
              "end": 236,
              "decorators": [],
              "name": "React18ReactFragment",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 241,
            "end": 258,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 241,
              "end": 258,
              "left": {
                "type": "Identifier",
                "start": 241,
                "end": 246,
                "decorators": [],
                "name": "React",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 247,
                "end": 258,
                "decorators": [],
                "name": "ReactPortal",
                "optional": false
              }
            }
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
            "start": 298,
            "end": 323,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 305,
              "end": 323,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 306,
                  "end": 322,
                  "typeName": {
                    "type": "Identifier",
                    "start": 306,
                    "end": 322,
                    "decorators": [],
                    "name": "React18ReactNode",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 298,
              "end": 305,
              "decorators": [],
              "name": "Promise",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 420,
      "end": 545,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 425,
        "end": 454,
        "decorators": [],
        "name": "NewReactJSXElementConstructor",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 462,
        "end": 544,
        "types": [
          {
            "type": "TSFunctionType",
            "start": 465,
            "end": 495,
            "params": [
              {
                "type": "Identifier",
                "start": 466,
                "end": 474,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 471,
                  "end": 474,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 473,
                    "end": 474,
                    "typeName": {
                      "type": "Identifier",
                      "start": 473,
                      "end": 474,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 476,
              "end": 495,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 479,
                "end": 495,
                "typeName": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 495,
                  "decorators": [],
                  "name": "React18ReactNode",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSConstructorType",
            "start": 502,
            "end": 543,
            "abstract": false,
            "params": [
              {
                "type": "Identifier",
                "start": 507,
                "end": 515,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 512,
                  "end": 515,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 514,
                    "end": 515,
                    "typeName": {
                      "type": "Identifier",
                      "start": 514,
                      "end": 515,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 517,
              "end": 543,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 520,
                "end": 543,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 535,
                  "end": 543,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 536,
                      "end": 537,
                      "typeName": {
                        "type": "Identifier",
                        "start": 536,
                        "end": 537,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 539,
                      "end": 542
                    }
                  ]
                },
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 520,
                  "end": 535,
                  "left": {
                    "type": "Identifier",
                    "start": 520,
                    "end": 525,
                    "decorators": [],
                    "name": "React",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 526,
                    "end": 535,
                    "decorators": [],
                    "name": "Component",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 454,
        "end": 457,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 455,
            "end": 456,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 455,
              "end": 456,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 547,
      "end": 754,
      "body": {
        "type": "TSModuleBlock",
        "start": 562,
        "end": 754,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 566,
            "end": 752,
            "body": {
              "type": "TSModuleBlock",
              "start": 580,
              "end": 752,
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 586,
                  "end": 649,
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "start": 591,
                    "end": 602,
                    "decorators": [],
                    "name": "ElementType",
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 605,
                    "end": 648,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 605,
                        "end": 611
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 614,
                        "end": 648,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 643,
                          "end": 648,
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 644,
                              "end": 647
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 614,
                          "end": 643,
                          "decorators": [],
                          "name": "NewReactJSXElementConstructor",
                          "optional": false
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 654,
                  "end": 748,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 682,
                    "end": 748,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 690,
                        "end": 742,
                        "computed": true,
                        "key": {
                          "type": "Literal",
                          "start": 691,
                          "end": 710,
                          "raw": "'my-custom-element'",
                          "value": "my-custom-element"
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 711,
                          "end": 741,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 713,
                            "end": 741,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 732,
                              "end": 741,
                              "params": [
                                {
                                  "type": "TSUnknownKeyword",
                                  "start": 733,
                                  "end": 740
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 713,
                              "end": 732,
                              "left": {
                                "type": "Identifier",
                                "start": 713,
                                "end": 718,
                                "decorators": [],
                                "name": "React",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 719,
                                "end": 732,
                                "decorators": [],
                                "name": "DOMAttributes",
                                "optional": false
                              }
                            }
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 664,
                    "end": 681,
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 576,
              "end": 579,
              "decorators": [],
              "name": "JSX",
              "optional": false
            },
            "kind": "namespace"
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 555,
        "end": 561,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
    },
    {
      "type": "VariableDeclaration",
      "start": 756,
      "end": 820,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 760,
          "end": 819,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 760,
            "end": 819,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 769,
              "end": 819,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 771,
                "end": 819,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 800,
                  "end": 819,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 801,
                      "end": 818,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 803,
                          "end": 816,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 803,
                            "end": 808,
                            "decorators": [],
                            "name": "title",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 808,
                            "end": 816,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 810,
                              "end": 816
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 771,
                  "end": 800,
                  "decorators": [],
                  "name": "NewReactJSXElementConstructor",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 822,
      "end": 897,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 828,
          "end": 896,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 828,
            "end": 841,
            "decorators": [],
            "name": "RenderElement",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 844,
            "end": 896,
            "async": false,
            "body": {
              "type": "JSXElement",
              "start": 878,
              "end": 896,
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 883,
                  "end": 890,
                  "expression": {
                    "type": "Identifier",
                    "start": 884,
                    "end": 889,
                    "decorators": [],
                    "name": "title",
                    "optional": false
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 890,
                "end": 896,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 892,
                  "end": 895,
                  "name": "div"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 878,
                "end": 883,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 879,
                  "end": 882,
                  "name": "div"
                },
                "selfClosing": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 845,
                "end": 873,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 847,
                    "end": 852,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 847,
                      "end": 852,
                      "decorators": [],
                      "name": "title",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 847,
                      "end": 852,
                      "decorators": [],
                      "name": "title",
                      "optional": false
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 854,
                  "end": 873,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 856,
                    "end": 873,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 858,
                        "end": 871,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 858,
                          "end": 863,
                          "decorators": [],
                          "name": "title",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 863,
                          "end": 871,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 865,
                            "end": 871
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 898,
      "end": 924,
      "expression": {
        "type": "AssignmentExpression",
        "start": 898,
        "end": 923,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 898,
          "end": 907,
          "decorators": [],
          "name": "Component",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 910,
          "end": 923,
          "decorators": [],
          "name": "RenderElement",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 925,
      "end": 943,
      "expression": {
        "type": "JSXElement",
        "start": 925,
        "end": 942,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 925,
          "end": 942,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 926,
            "end": 939,
            "name": "RenderElement"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 944,
      "end": 976,
      "expression": {
        "type": "JSXElement",
        "start": 944,
        "end": 975,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 944,
          "end": 975,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 959,
              "end": 972,
              "name": {
                "type": "JSXIdentifier",
                "start": 959,
                "end": 964,
                "name": "title"
              },
              "value": {
                "type": "Literal",
                "start": 965,
                "end": 972,
                "raw": "\"react\"",
                "value": "react"
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 945,
            "end": 958,
            "name": "RenderElement"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 977,
      "end": 1006,
      "expression": {
        "type": "JSXElement",
        "start": 977,
        "end": 1005,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 977,
          "end": 1005,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 992,
              "end": 1002,
              "name": {
                "type": "JSXIdentifier",
                "start": 992,
                "end": 1002,
                "name": "excessProp"
              },
              "value": null
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 978,
            "end": 991,
            "name": "RenderElement"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1008,
      "end": 1069,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1014,
          "end": 1068,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1014,
            "end": 1026,
            "decorators": [],
            "name": "RenderString",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1029,
            "end": 1068,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 1063,
              "end": 1068,
              "decorators": [],
              "name": "title",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 1030,
                "end": 1058,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1032,
                    "end": 1037,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1032,
                      "end": 1037,
                      "decorators": [],
                      "name": "title",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 1032,
                      "end": 1037,
                      "decorators": [],
                      "name": "title",
                      "optional": false
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1039,
                  "end": 1058,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 1041,
                    "end": 1058,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1043,
                        "end": 1056,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1043,
                          "end": 1048,
                          "decorators": [],
                          "name": "title",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1048,
                          "end": 1056,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1050,
                            "end": 1056
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1070,
      "end": 1095,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1070,
        "end": 1094,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1070,
          "end": 1079,
          "decorators": [],
          "name": "Component",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1082,
          "end": 1094,
          "decorators": [],
          "name": "RenderString",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1096,
      "end": 1113,
      "expression": {
        "type": "JSXElement",
        "start": 1096,
        "end": 1112,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 1096,
          "end": 1112,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 1097,
            "end": 1109,
            "name": "RenderString"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1114,
      "end": 1145,
      "expression": {
        "type": "JSXElement",
        "start": 1114,
        "end": 1144,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 1114,
          "end": 1144,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 1128,
              "end": 1141,
              "name": {
                "type": "JSXIdentifier",
                "start": 1128,
                "end": 1133,
                "name": "title"
              },
              "value": {
                "type": "Literal",
                "start": 1134,
                "end": 1141,
                "raw": "\"react\"",
                "value": "react"
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 1115,
            "end": 1127,
            "name": "RenderString"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1146,
      "end": 1174,
      "expression": {
        "type": "JSXElement",
        "start": 1146,
        "end": 1173,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 1146,
          "end": 1173,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 1160,
              "end": 1170,
              "name": {
                "type": "JSXIdentifier",
                "start": 1160,
                "end": 1170,
                "name": "excessProp"
              },
              "value": null
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 1147,
            "end": 1159,
            "name": "RenderString"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1176,
      "end": 1244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1182,
          "end": 1243,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1182,
            "end": 1194,
            "decorators": [],
            "name": "RenderNumber",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1197,
            "end": 1243,
            "async": false,
            "body": {
              "type": "MemberExpression",
              "start": 1231,
              "end": 1243,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1231,
                "end": 1236,
                "decorators": [],
                "name": "title",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1237,
                "end": 1243,
                "decorators": [],
                "name": "length",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 1198,
                "end": 1226,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1200,
                    "end": 1205,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1200,
                      "end": 1205,
                      "decorators": [],
                      "name": "title",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 1200,
                      "end": 1205,
                      "decorators": [],
                      "name": "title",
                      "optional": false
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1207,
                  "end": 1226,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 1209,
                    "end": 1226,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1211,
                        "end": 1224,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1211,
                          "end": 1216,
                          "decorators": [],
                          "name": "title",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1216,
                          "end": 1224,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1218,
                            "end": 1224
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1245,
      "end": 1270,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1245,
        "end": 1269,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1245,
          "end": 1254,
          "decorators": [],
          "name": "Component",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1257,
          "end": 1269,
          "decorators": [],
          "name": "RenderNumber",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1271,
      "end": 1288,
      "expression": {
        "type": "JSXElement",
        "start": 1271,
        "end": 1287,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 1271,
          "end": 1287,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 1272,
            "end": 1284,
            "name": "RenderNumber"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1289,
      "end": 1320,
      "expression": {
        "type": "JSXElement",
        "start": 1289,
        "end": 1319,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 1289,
          "end": 1319,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 1303,
              "end": 1316,
              "name": {
                "type": "JSXIdentifier",
                "start": 1303,
                "end": 1308,
                "name": "title"
              },
              "value": {
                "type": "Literal",
                "start": 1309,
                "end": 1316,
                "raw": "\"react\"",
                "value": "react"
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 1290,
            "end": 1302,
            "name": "RenderNumber"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1321,
      "end": 1349,
      "expression": {
        "type": "JSXElement",
        "start": 1321,
        "end": 1348,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 1321,
          "end": 1348,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 1335,
              "end": 1345,
              "name": {
                "type": "JSXIdentifier",
                "start": 1335,
                "end": 1345,
                "name": "excessProp"
              },
              "value": null
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 1322,
            "end": 1334,
            "name": "RenderNumber"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1351,
      "end": 1413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1357,
          "end": 1412,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1357,
            "end": 1368,
            "decorators": [],
            "name": "RenderArray",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1371,
            "end": 1412,
            "async": false,
            "body": {
              "type": "ArrayExpression",
              "start": 1405,
              "end": 1412,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1406,
                  "end": 1411,
                  "decorators": [],
                  "name": "title",
                  "optional": false
                }
              ]
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 1372,
                "end": 1400,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1374,
                    "end": 1379,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1374,
                      "end": 1379,
                      "decorators": [],
                      "name": "title",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 1374,
                      "end": 1379,
                      "decorators": [],
                      "name": "title",
                      "optional": false
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1381,
                  "end": 1400,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 1383,
                    "end": 1400,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1385,
                        "end": 1398,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1385,
                          "end": 1390,
                          "decorators": [],
                          "name": "title",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1390,
                          "end": 1398,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1392,
                            "end": 1398
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1414,
      "end": 1438,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1414,
        "end": 1437,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1414,
          "end": 1423,
          "decorators": [],
          "name": "Component",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1426,
          "end": 1437,
          "decorators": [],
          "name": "RenderArray",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1439,
      "end": 1455,
      "expression": {
        "type": "JSXElement",
        "start": 1439,
        "end": 1454,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 1439,
          "end": 1454,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 1440,
            "end": 1451,
            "name": "RenderArray"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1456,
      "end": 1486,
      "expression": {
        "type": "JSXElement",
        "start": 1456,
        "end": 1485,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 1456,
          "end": 1485,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 1469,
              "end": 1482,
              "name": {
                "type": "JSXIdentifier",
                "start": 1469,
                "end": 1474,
                "name": "title"
              },
              "value": {
                "type": "Literal",
                "start": 1475,
                "end": 1482,
                "raw": "\"react\"",
                "value": "react"
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 1457,
            "end": 1468,
            "name": "RenderArray"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1487,
      "end": 1514,
      "expression": {
        "type": "JSXElement",
        "start": 1487,
        "end": 1513,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 1487,
          "end": 1513,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 1500,
              "end": 1510,
              "name": {
                "type": "JSXIdentifier",
                "start": 1500,
                "end": 1510,
                "name": "excessProp"
              },
              "value": null
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 1488,
            "end": 1499,
            "name": "RenderArray"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1542,
      "end": 1612,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1548,
          "end": 1611,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1548,
            "end": 1561,
            "decorators": [],
            "name": "RenderPromise",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1564,
            "end": 1611,
            "async": true,
            "body": {
              "type": "Literal",
              "start": 1604,
              "end": 1611,
              "raw": "\"react\"",
              "value": "react"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 1571,
                "end": 1599,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1573,
                    "end": 1578,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1573,
                      "end": 1578,
                      "decorators": [],
                      "name": "title",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 1573,
                      "end": 1578,
                      "decorators": [],
                      "name": "title",
                      "optional": false
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1580,
                  "end": 1599,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 1582,
                    "end": 1599,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1584,
                        "end": 1597,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1584,
                          "end": 1589,
                          "decorators": [],
                          "name": "title",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1589,
                          "end": 1597,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1591,
                            "end": 1597
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1613,
      "end": 1639,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1613,
        "end": 1638,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1613,
          "end": 1622,
          "decorators": [],
          "name": "Component",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1625,
          "end": 1638,
          "decorators": [],
          "name": "RenderPromise",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1640,
      "end": 1658,
      "expression": {
        "type": "JSXElement",
        "start": 1640,
        "end": 1657,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 1640,
          "end": 1657,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 1641,
            "end": 1654,
            "name": "RenderPromise"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1659,
      "end": 1691,
      "expression": {
        "type": "JSXElement",
        "start": 1659,
        "end": 1690,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 1659,
          "end": 1690,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 1674,
              "end": 1687,
              "name": {
                "type": "JSXIdentifier",
                "start": 1674,
                "end": 1679,
                "name": "title"
              },
              "value": {
                "type": "Literal",
                "start": 1680,
                "end": 1687,
                "raw": "\"react\"",
                "value": "react"
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 1660,
            "end": 1673,
            "name": "RenderPromise"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1692,
      "end": 1721,
      "expression": {
        "type": "JSXElement",
        "start": 1692,
        "end": 1720,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 1692,
          "end": 1720,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 1707,
              "end": 1717,
              "name": {
                "type": "JSXIdentifier",
                "start": 1707,
                "end": 1717,
                "name": "excessProp"
              },
              "value": null
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 1693,
            "end": 1706,
            "name": "RenderPromise"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1754,
      "end": 1870,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1821,
        "end": 1870,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1825,
            "end": 1868,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1825,
              "end": 1831,
              "decorators": [],
              "name": "render",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1831,
              "end": 1868,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1834,
                "end": 1868,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1840,
                    "end": 1864,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1847,
                      "end": 1863,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 1847,
                        "end": 1857,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1847,
                          "end": 1851
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1852,
                          "end": 1857,
                          "decorators": [],
                          "name": "props",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1858,
                        "end": 1863,
                        "decorators": [],
                        "name": "title",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1760,
        "end": 1777,
        "decorators": [],
        "name": "RenderStringClass",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 1786,
        "end": 1801,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1786,
          "end": 1791,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1792,
          "end": 1801,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1801,
        "end": 1820,
        "params": [
          {
            "type": "TSTypeLiteral",
            "start": 1802,
            "end": 1819,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1804,
                "end": 1817,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1804,
                  "end": 1809,
                  "decorators": [],
                  "name": "title",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1809,
                  "end": 1817,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1811,
                    "end": 1817
                  }
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1871,
      "end": 1901,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1871,
        "end": 1900,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1871,
          "end": 1880,
          "decorators": [],
          "name": "Component",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1883,
          "end": 1900,
          "decorators": [],
          "name": "RenderStringClass",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1902,
      "end": 1924,
      "expression": {
        "type": "JSXElement",
        "start": 1902,
        "end": 1923,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 1902,
          "end": 1923,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 1903,
            "end": 1920,
            "name": "RenderStringClass"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1925,
      "end": 1961,
      "expression": {
        "type": "JSXElement",
        "start": 1925,
        "end": 1960,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 1925,
          "end": 1960,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 1944,
              "end": 1957,
              "name": {
                "type": "JSXIdentifier",
                "start": 1944,
                "end": 1949,
                "name": "title"
              },
              "value": {
                "type": "Literal",
                "start": 1950,
                "end": 1957,
                "raw": "\"react\"",
                "value": "react"
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 1926,
            "end": 1943,
            "name": "RenderStringClass"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1962,
      "end": 1995,
      "expression": {
        "type": "JSXElement",
        "start": 1962,
        "end": 1994,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 1962,
          "end": 1994,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 1981,
              "end": 1991,
              "name": {
                "type": "JSXIdentifier",
                "start": 1981,
                "end": 1991,
                "name": "excessProp"
              },
              "value": null
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 1963,
            "end": 1980,
            "name": "RenderStringClass"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2030,
      "end": 2038,
      "expression": {
        "type": "JSXElement",
        "start": 2030,
        "end": 2037,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 2030,
          "end": 2037,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 2031,
            "end": 2034,
            "name": "div"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2039,
      "end": 2061,
      "expression": {
        "type": "JSXElement",
        "start": 2039,
        "end": 2060,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 2039,
          "end": 2060,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 2040,
            "end": 2057,
            "name": "my-custom-element"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2114,
      "end": 2123,
      "expression": {
        "type": "JSXElement",
        "start": 2114,
        "end": 2122,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 2114,
          "end": 2122,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 2115,
            "end": 2119,
            "name": "boop"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2124,
      "end": 2157,
      "expression": {
        "type": "JSXElement",
        "start": 2124,
        "end": 2156,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 2124,
          "end": 2156,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 2125,
            "end": 2153,
            "name": "my-undeclared-custom-element"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2400,
      "end": 2443,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2441,
        "end": 2443,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2410,
        "end": 2434,
        "decorators": [],
        "name": "ReactNativeFlatListProps",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2434,
        "end": 2440,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2435,
            "end": 2439,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2435,
              "end": 2439,
              "decorators": [],
              "name": "Item",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2444,
      "end": 2561,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2543,
        "end": 2561,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2547,
            "end": 2559,
            "argument": {
              "type": "Literal",
              "start": 2554,
              "end": 2558,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2453,
        "end": 2472,
        "decorators": [],
        "name": "ReactNativeFlatList",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2476,
          "end": 2485,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2481,
            "end": 2485,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2483,
              "end": 2485,
              "members": []
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2489,
          "end": 2540,
          "decorators": [],
          "name": "ref",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2492,
            "end": 2540,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2494,
              "end": 2540,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2512,
                "end": 2540,
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "start": 2513,
                    "end": 2539,
                    "exprName": {
                      "type": "Identifier",
                      "start": 2520,
                      "end": 2539,
                      "decorators": [],
                      "name": "ReactNativeFlatList",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "TSQualifiedName",
                "start": 2494,
                "end": 2512,
                "left": {
                  "type": "Identifier",
                  "start": 2494,
                  "end": 2499,
                  "decorators": [],
                  "name": "React",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 2500,
                  "end": 2512,
                  "decorators": [],
                  "name": "ForwardedRef",
                  "optional": false
                }
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 2562,
      "end": 2586,
      "expression": {
        "type": "JSXElement",
        "start": 2562,
        "end": 2585,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 2562,
          "end": 2585,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 2563,
            "end": 2582,
            "name": "ReactNativeFlatList"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2629,
      "end": 2732,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2705,
        "end": 2732,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2709,
            "end": 2730,
            "argument": {
              "type": "JSXElement",
              "start": 2716,
              "end": 2729,
              "children": [],
              "closingElement": null,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 2716,
                "end": 2729,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 2717,
                  "end": 2726,
                  "name": "Component"
                },
                "selfClosing": true
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2638,
        "end": 2640,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2691,
          "end": 2703,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2700,
            "end": 2703,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2702,
              "end": 2703,
              "typeName": {
                "type": "Identifier",
                "start": 2702,
                "end": 2703,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2640,
        "end": 2690,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2641,
            "end": 2689,
            "const": false,
            "constraint": {
              "type": "TSFunctionType",
              "start": 2651,
              "end": 2689,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2652,
                  "end": 2661,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2657,
                    "end": 2661,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 2659,
                      "end": 2661,
                      "members": []
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2663,
                "end": 2689,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2666,
                  "end": 2689,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2684,
                    "end": 2689,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 2685,
                        "end": 2688
                      }
                    ]
                  },
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 2666,
                    "end": 2684,
                    "left": {
                      "type": "Identifier",
                      "start": 2666,
                      "end": 2671,
                      "decorators": [],
                      "name": "React",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2672,
                      "end": 2684,
                      "decorators": [],
                      "name": "ReactElement",
                      "optional": false
                    }
                  }
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2641,
              "end": 2642,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2734,
      "end": 2749,
      "expression": {
        "type": "JSXElement",
        "start": 2734,
        "end": 2748,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 2734,
          "end": 2748,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 2735,
            "end": 2745,
            "name": "Unresolved"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2750,
      "end": 2775,
      "expression": {
        "type": "JSXElement",
        "start": 2750,
        "end": 2774,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 2750,
          "end": 2774,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 2762,
              "end": 2771,
              "name": {
                "type": "JSXIdentifier",
                "start": 2762,
                "end": 2765,
                "name": "foo"
              },
              "value": {
                "type": "Literal",
                "start": 2766,
                "end": 2771,
                "raw": "\"abc\"",
                "value": "abc"
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 2751,
            "end": 2761,
            "name": "Unresolved"
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2777,
      "end": 2897,
      "body": {
        "type": "TSModuleBlock",
        "start": 2792,
        "end": 2897,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 2798,
            "end": 2895,
            "body": {
              "type": "TSModuleBlock",
              "start": 2812,
              "end": 2895,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 2820,
                  "end": 2891,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 2848,
                    "end": 2891,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2860,
                        "end": 2883,
                        "computed": true,
                        "key": {
                          "type": "Literal",
                          "start": 2861,
                          "end": 2866,
                          "raw": "'a:b'",
                          "value": "a:b"
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2867,
                          "end": 2882,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 2869,
                            "end": 2882,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 2871,
                                "end": 2880,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 2871,
                                  "end": 2872,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2872,
                                  "end": 2880,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2874,
                                    "end": 2880
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 2830,
                    "end": 2847,
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 2808,
              "end": 2811,
              "decorators": [],
              "name": "JSX",
              "optional": false
            },
            "kind": "namespace"
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 2785,
        "end": 2791,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
    },
    {
      "type": "ExpressionStatement",
      "start": 2899,
      "end": 2920,
      "expression": {
        "type": "JSXElement",
        "start": 2899,
        "end": 2919,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 2899,
          "end": 2919,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 2904,
              "end": 2916,
              "name": {
                "type": "JSXIdentifier",
                "start": 2904,
                "end": 2905,
                "name": "a"
              },
              "value": {
                "type": "Literal",
                "start": 2906,
                "end": 2916,
                "raw": "\"accepted\"",
                "value": "accepted"
              }
            }
          ],
          "name": {
            "type": "JSXNamespacedName",
            "start": 2900,
            "end": 2903,
            "name": {
              "type": "JSXIdentifier",
              "start": 2902,
              "end": 2903,
              "name": "b"
            },
            "namespace": {
              "type": "JSXIdentifier",
              "start": 2900,
              "end": 2901,
              "name": "a"
            }
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2921,
      "end": 2942,
      "expression": {
        "type": "JSXElement",
        "start": 2921,
        "end": 2941,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 2921,
          "end": 2941,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 2926,
              "end": 2938,
              "name": {
                "type": "JSXIdentifier",
                "start": 2926,
                "end": 2927,
                "name": "b"
              },
              "value": {
                "type": "Literal",
                "start": 2928,
                "end": 2938,
                "raw": "\"rejected\"",
                "value": "rejected"
              }
            }
          ],
          "name": {
            "type": "JSXNamespacedName",
            "start": 2922,
            "end": 2925,
            "name": {
              "type": "JSXIdentifier",
              "start": 2924,
              "end": 2925,
              "name": "b"
            },
            "namespace": {
              "type": "JSXIdentifier",
              "start": 2922,
              "end": 2923,
              "name": "a"
            }
          },
          "selfClosing": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2943,
      "end": 2977,
      "expression": {
        "type": "JSXElement",
        "start": 2943,
        "end": 2976,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 2943,
          "end": 2976,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 2948,
              "end": 2960,
              "name": {
                "type": "JSXIdentifier",
                "start": 2948,
                "end": 2949,
                "name": "a"
              },
              "value": {
                "type": "Literal",
                "start": 2950,
                "end": 2960,
                "raw": "\"accepted\"",
                "value": "accepted"
              }
            },
            {
              "type": "JSXAttribute",
              "start": 2961,
              "end": 2973,
              "name": {
                "type": "JSXIdentifier",
                "start": 2961,
                "end": 2962,
                "name": "b"
              },
              "value": {
                "type": "Literal",
                "start": 2963,
                "end": 2973,
                "raw": "\"rejected\"",
                "value": "rejected"
              }
            }
          ],
          "name": {
            "type": "JSXNamespacedName",
            "start": 2944,
            "end": 2947,
            "name": {
              "type": "JSXIdentifier",
              "start": 2946,
              "end": 2947,
              "name": "b"
            },
            "namespace": {
              "type": "JSXIdentifier",
              "start": 2944,
              "end": 2945,
              "name": "a"
            }
          },
          "selfClosing": true
        }
      }
    }
  ],
  "sourceType": "script"
}
```
