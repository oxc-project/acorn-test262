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
            "start": 57,
            "end": 62
          },
          "start": 52,
          "end": 62
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 68,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 76
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
            "name": "myHoc",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 89
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComposedComponentProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 115
                  },
                  "constraint": {
                    "type": "TSAnyKeyword",
                    "start": 124,
                    "end": 127
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 93,
                  "end": 127
                }
              ],
              "start": 92,
              "end": 128
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ComposedComponent",
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
                        "start": 153,
                        "end": 158
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ComponentClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 173
                      },
                      "start": 153,
                      "end": 173
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ComposedComponentProps",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 174,
                            "end": 196
                          },
                          "typeArguments": null,
                          "start": 174,
                          "end": 196
                        }
                      ],
                      "start": 173,
                      "end": 197
                    },
                    "start": 153,
                    "end": 197
                  },
                  "start": 151,
                  "end": 197
                },
                "start": 134,
                "end": 197
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "WrapperComponentProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 236
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ComposedComponentProps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 239,
                          "end": 261
                        },
                        "typeArguments": null,
                        "start": 239,
                        "end": 261
                      },
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
                              "name": "myProp",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 266,
                              "end": 272
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 274,
                                "end": 280
                              },
                              "start": 272,
                              "end": 280
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 266,
                            "end": 280
                          }
                        ],
                        "start": 264,
                        "end": 282
                      }
                    ],
                    "start": 239,
                    "end": 282
                  },
                  "declare": false,
                  "start": 210,
                  "end": 283
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
                        "name": "WrapperComponent",
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
                                "start": 312,
                                "end": 317
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ComponentClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 318,
                                "end": 332
                              },
                              "start": 312,
                              "end": 332
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "WrapperComponentProps",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 333,
                                    "end": 354
                                  },
                                  "typeArguments": null,
                                  "start": 333,
                                  "end": 354
                                }
                              ],
                              "start": 332,
                              "end": 355
                            },
                            "start": 312,
                            "end": 355
                          },
                          "start": 310,
                          "end": 355
                        },
                        "start": 294,
                        "end": 355
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 358,
                          "end": 362
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 366,
                          "end": 369
                        },
                        "start": 358,
                        "end": 369
                      },
                      "definite": false,
                      "start": 294,
                      "end": 369
                    }
                  ],
                  "declare": false,
                  "start": 288,
                  "end": 370
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
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComposedComponentProps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 389,
                              "end": 411
                            },
                            "typeArguments": null,
                            "start": 389,
                            "end": 411
                          },
                          "start": 387,
                          "end": 411
                        },
                        "start": 382,
                        "end": 411
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 414,
                          "end": 418
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 422,
                          "end": 425
                        },
                        "start": 414,
                        "end": 425
                      },
                      "definite": false,
                      "start": 382,
                      "end": 425
                    }
                  ],
                  "declare": false,
                  "start": 376,
                  "end": 426
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "WrapperComponent",
                        "start": 433,
                        "end": 449
                      },
                      "typeArguments": null,
                      "attributes": [
                        {
                          "type": "JSXSpreadAttribute",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 454,
                            "end": 459
                          },
                          "start": 450,
                          "end": 460
                        },
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "myProp",
                            "start": 461,
                            "end": 467
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "Literal",
                              "value": "1000000",
                              "raw": "'1000000'",
                              "start": 469,
                              "end": 478
                            },
                            "start": 468,
                            "end": 479
                          },
                          "start": 461,
                          "end": 479
                        }
                      ],
                      "selfClosing": true,
                      "start": 432,
                      "end": 482
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 432,
                    "end": 482
                  },
                  "directive": null,
                  "start": 432,
                  "end": 483
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "WrapperComponent",
                        "start": 489,
                        "end": 505
                      },
                      "typeArguments": null,
                      "attributes": [
                        {
                          "type": "JSXSpreadAttribute",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 510,
                            "end": 515
                          },
                          "start": 506,
                          "end": 516
                        },
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "myProp",
                            "start": 517,
                            "end": 523
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "Literal",
                              "value": 1000000,
                              "raw": "1000000",
                              "start": 525,
                              "end": 532
                            },
                            "start": 524,
                            "end": 533
                          },
                          "start": 517,
                          "end": 533
                        }
                      ],
                      "selfClosing": true,
                      "start": 488,
                      "end": 536
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 488,
                    "end": 536
                  },
                  "directive": null,
                  "start": 488,
                  "end": 537
                }
              ],
              "start": 204,
              "end": 539
            },
            "id": null,
            "generator": false,
            "start": 92,
            "end": 539
          },
          "definite": false,
          "start": 84,
          "end": 539
        }
      ],
      "declare": false,
      "start": 78,
      "end": 540
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 540
}
```
