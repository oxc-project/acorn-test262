jsxExcessPropsAndAssignability.tsx
```json
{
  "type": "Program",
  "start": 45,
  "end": 541,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 76,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 75,
        "raw": "'react'",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 52,
          "end": 62,
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 62,
            "decorators": [],
            "name": "React",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 540,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 539,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 89,
            "decorators": [],
            "name": "myHoc",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 92,
            "end": 539,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 204,
              "end": 539,
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 210,
                  "end": 283,
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 236,
                    "decorators": [],
                    "name": "WrapperComponentProps",
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 239,
                    "end": 282,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 239,
                        "end": 261,
                        "typeName": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 261,
                          "decorators": [],
                          "name": "ComposedComponentProps",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 264,
                        "end": 282,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 266,
                            "end": 280,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 266,
                              "end": 272,
                              "decorators": [],
                              "name": "myProp",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 272,
                              "end": 280,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 274,
                                "end": 280
                              }
                            }
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 288,
                  "end": 370,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 294,
                      "end": 369,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 294,
                        "end": 355,
                        "decorators": [],
                        "name": "WrapperComponent",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 310,
                          "end": 355,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 312,
                            "end": 355,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 332,
                              "end": 355,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 333,
                                  "end": 354,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 333,
                                    "end": 354,
                                    "decorators": [],
                                    "name": "WrapperComponentProps",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 312,
                              "end": 332,
                              "left": {
                                "type": "Identifier",
                                "start": 312,
                                "end": 317,
                                "decorators": [],
                                "name": "React",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 318,
                                "end": 332,
                                "decorators": [],
                                "name": "ComponentClass",
                                "optional": false
                              }
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "start": 358,
                        "end": 369,
                        "expression": {
                          "type": "Literal",
                          "start": 358,
                          "end": 362,
                          "raw": "null",
                          "value": null
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 366,
                          "end": 369
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 376,
                  "end": 426,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 382,
                      "end": 425,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 382,
                        "end": 411,
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 387,
                          "end": 411,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 389,
                            "end": 411,
                            "typeName": {
                              "type": "Identifier",
                              "start": 389,
                              "end": 411,
                              "decorators": [],
                              "name": "ComposedComponentProps",
                              "optional": false
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "start": 414,
                        "end": 425,
                        "expression": {
                          "type": "Literal",
                          "start": 414,
                          "end": 418,
                          "raw": "null",
                          "value": null
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 422,
                          "end": 425
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 432,
                  "end": 483,
                  "expression": {
                    "type": "JSXElement",
                    "start": 432,
                    "end": 482,
                    "children": [],
                    "closingElement": null,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 432,
                      "end": 482,
                      "attributes": [
                        {
                          "type": "JSXSpreadAttribute",
                          "start": 450,
                          "end": 460,
                          "argument": {
                            "type": "Identifier",
                            "start": 454,
                            "end": 459,
                            "decorators": [],
                            "name": "props",
                            "optional": false
                          }
                        },
                        {
                          "type": "JSXAttribute",
                          "start": 461,
                          "end": 479,
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 461,
                            "end": 467,
                            "name": "myProp"
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "start": 468,
                            "end": 479,
                            "expression": {
                              "type": "Literal",
                              "start": 469,
                              "end": 478,
                              "raw": "'1000000'",
                              "value": "1000000"
                            }
                          }
                        }
                      ],
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 433,
                        "end": 449,
                        "name": "WrapperComponent"
                      },
                      "selfClosing": true
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 488,
                  "end": 537,
                  "expression": {
                    "type": "JSXElement",
                    "start": 488,
                    "end": 536,
                    "children": [],
                    "closingElement": null,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 488,
                      "end": 536,
                      "attributes": [
                        {
                          "type": "JSXSpreadAttribute",
                          "start": 506,
                          "end": 516,
                          "argument": {
                            "type": "Identifier",
                            "start": 510,
                            "end": 515,
                            "decorators": [],
                            "name": "props",
                            "optional": false
                          }
                        },
                        {
                          "type": "JSXAttribute",
                          "start": 517,
                          "end": 533,
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 517,
                            "end": 523,
                            "name": "myProp"
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "start": 524,
                            "end": 533,
                            "expression": {
                              "type": "Literal",
                              "start": 525,
                              "end": 532,
                              "raw": "1000000",
                              "value": 1000000
                            }
                          }
                        }
                      ],
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 489,
                        "end": 505,
                        "name": "WrapperComponent"
                      },
                      "selfClosing": true
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 134,
                "end": 197,
                "decorators": [],
                "name": "ComposedComponent",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 151,
                  "end": 197,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 153,
                    "end": 197,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 173,
                      "end": 197,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 174,
                          "end": 196,
                          "typeName": {
                            "type": "Identifier",
                            "start": 174,
                            "end": 196,
                            "decorators": [],
                            "name": "ComposedComponentProps",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 153,
                      "end": 173,
                      "left": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 158,
                        "decorators": [],
                        "name": "React",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 173,
                        "decorators": [],
                        "name": "ComponentClass",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 92,
              "end": 128,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 93,
                  "end": 127,
                  "const": false,
                  "constraint": {
                    "type": "TSAnyKeyword",
                    "start": 124,
                    "end": 127
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 115,
                    "decorators": [],
                    "name": "ComposedComponentProps",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
