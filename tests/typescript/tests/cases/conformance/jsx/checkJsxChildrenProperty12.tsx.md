__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ButtonProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 54
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 61,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              },
              "start": 62,
              "end": 70
            },
            "accessibility": null,
            "static": false,
            "start": 61,
            "end": 71
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              },
              "start": 77,
              "end": 85
            },
            "accessibility": null,
            "static": false,
            "start": 76,
            "end": 86
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 99
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Button",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 107
                },
                "typeArguments": null,
                "start": 101,
                "end": 107
              },
              "start": 99,
              "end": 107
            },
            "accessibility": null,
            "static": false,
            "start": 91,
            "end": 108
          }
        ],
        "start": 55,
        "end": 110
      },
      "declare": false,
      "start": 34,
      "end": 110
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 124
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
          "start": 133,
          "end": 138
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 148
        },
        "optional": false,
        "computed": false,
        "start": 133,
        "end": 148
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ButtonProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 159
            },
            "typeArguments": null,
            "start": 149,
            "end": 159
          },
          {
            "type": "TSAnyKeyword",
            "start": 161,
            "end": 164
          }
        ],
        "start": 148,
        "end": 165
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
              "start": 172,
              "end": 178
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
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "condition",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 200,
                              "end": 207
                            },
                            "start": 198,
                            "end": 207
                          },
                          "start": 189,
                          "end": 207
                        },
                        "init": null,
                        "definite": false,
                        "start": 189,
                        "end": 207
                      }
                    ],
                    "declare": false,
                    "start": 185,
                    "end": 208
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "condition",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 215,
                      "end": 224
                    },
                    "consequent": {
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
                                "name": "InnerButton",
                                "start": 245,
                                "end": 256
                              },
                              "typeArguments": null,
                              "attributes": [
                                {
                                  "type": "JSXSpreadAttribute",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 261,
                                      "end": 265
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "props",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 266,
                                      "end": 271
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 261,
                                    "end": 271
                                  },
                                  "start": 257,
                                  "end": 272
                                }
                              ],
                              "selfClosing": true,
                              "start": 244,
                              "end": 275
                            },
                            "children": [],
                            "closingElement": null,
                            "start": 244,
                            "end": 275
                          },
                          "start": 237,
                          "end": 275
                        }
                      ],
                      "start": 226,
                      "end": 279
                    },
                    "alternate": {
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
                                "name": "InnerButton",
                                "start": 301,
                                "end": 312
                              },
                              "typeArguments": null,
                              "attributes": [
                                {
                                  "type": "JSXSpreadAttribute",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 317,
                                      "end": 321
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "props",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 322,
                                      "end": 327
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 317,
                                    "end": 327
                                  },
                                  "start": 313,
                                  "end": 328
                                }
                              ],
                              "selfClosing": false,
                              "start": 300,
                              "end": 330
                            },
                            "children": [
                              {
                                "type": "JSXText",
                                "value": "\n\t\t\t\t",
                                "raw": "\n\t\t\t\t",
                                "start": 330,
                                "end": 335
                              },
                              {
                                "type": "JSXElement",
                                "openingElement": {
                                  "type": "JSXOpeningElement",
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "name": "div",
                                    "start": 336,
                                    "end": 339
                                  },
                                  "typeArguments": null,
                                  "attributes": [],
                                  "selfClosing": false,
                                  "start": 335,
                                  "end": 340
                                },
                                "children": [
                                  {
                                    "type": "JSXText",
                                    "value": "Hello World",
                                    "raw": "Hello World",
                                    "start": 340,
                                    "end": 351
                                  }
                                ],
                                "closingElement": {
                                  "type": "JSXClosingElement",
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "name": "div",
                                    "start": 353,
                                    "end": 356
                                  },
                                  "start": 351,
                                  "end": 357
                                },
                                "start": 335,
                                "end": 357
                              },
                              {
                                "type": "JSXText",
                                "value": "\n\t\t\t\t",
                                "raw": "\n\t\t\t\t",
                                "start": 357,
                                "end": 362
                              }
                            ],
                            "closingElement": {
                              "type": "JSXClosingElement",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "InnerButton",
                                "start": 364,
                                "end": 375
                              },
                              "start": 362,
                              "end": 376
                            },
                            "start": 300,
                            "end": 376
                          },
                          "start": 292,
                          "end": 378
                        }
                      ],
                      "start": 287,
                      "end": 382
                    },
                    "start": 211,
                    "end": 382
                  }
                ],
                "start": 181,
                "end": 388
              },
              "expression": false,
              "start": 178,
              "end": 388
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 172,
            "end": 388
          }
        ],
        "start": 166,
        "end": 390
      },
      "abstract": false,
      "declare": false,
      "start": 112,
      "end": 390
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InnerButtonProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 402,
        "end": 417
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 421,
              "end": 422
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 424,
                "end": 430
              },
              "start": 422,
              "end": 430
            },
            "accessibility": null,
            "static": false,
            "start": 421,
            "end": 430
          }
        ],
        "start": 418,
        "end": 432
      },
      "declare": false,
      "start": 392,
      "end": 432
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InnerButton",
        "optional": false,
        "typeAnnotation": null,
        "start": 440,
        "end": 451
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
          "start": 460,
          "end": 465
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 466,
          "end": 475
        },
        "optional": false,
        "computed": false,
        "start": 460,
        "end": 475
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "InnerButtonProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 491
            },
            "typeArguments": null,
            "start": 476,
            "end": 491
          },
          {
            "type": "TSAnyKeyword",
            "start": 493,
            "end": 496
          }
        ],
        "start": 475,
        "end": 497
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
              "start": 501,
              "end": 507
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
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "button",
                          "start": 523,
                          "end": 529
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 522,
                        "end": 530
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Hello",
                          "raw": "Hello",
                          "start": 530,
                          "end": 535
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "button",
                          "start": 537,
                          "end": 543
                        },
                        "start": 535,
                        "end": 544
                      },
                      "start": 522,
                      "end": 544
                    },
                    "start": 514,
                    "end": 546
                  }
                ],
                "start": 510,
                "end": 549
              },
              "expression": false,
              "start": 507,
              "end": 549
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 501,
            "end": 549
          }
        ],
        "start": 498,
        "end": 551
      },
      "abstract": false,
      "declare": false,
      "start": 434,
      "end": 551
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 551
}
```
