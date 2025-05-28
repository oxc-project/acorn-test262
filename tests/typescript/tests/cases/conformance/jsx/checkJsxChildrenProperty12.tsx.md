__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 551,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 54,
        "decorators": [],
        "name": "ButtonProp",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 55,
        "end": 110,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 61,
            "end": 71,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 76,
            "end": 86,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 85,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 91,
            "end": 108,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 99,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 107,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 101,
                "end": 107,
                "typeName": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 107,
                  "decorators": [],
                  "name": "Button",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 112,
      "end": 390,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 124,
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 133,
        "end": 148,
        "object": {
          "type": "Identifier",
          "start": 133,
          "end": 138,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 139,
          "end": 148,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 148,
        "end": 165,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 149,
            "end": 159,
            "typeName": {
              "type": "Identifier",
              "start": 149,
              "end": 159,
              "decorators": [],
              "name": "ButtonProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSAnyKeyword",
            "start": 161,
            "end": 164
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 166,
        "end": 390,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 172,
            "end": 388,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 178,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 388,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 388,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 185,
                    "end": 208,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 189,
                        "end": 207,
                        "id": {
                          "type": "Identifier",
                          "start": 189,
                          "end": 207,
                          "decorators": [],
                          "name": "condition",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 198,
                            "end": 207,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 200,
                              "end": 207
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 211,
                    "end": 382,
                    "test": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 224,
                      "decorators": [],
                      "name": "condition",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 226,
                      "end": 279,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 237,
                          "end": 275,
                          "argument": {
                            "type": "JSXElement",
                            "start": 244,
                            "end": 275,
                            "openingElement": {
                              "type": "JSXOpeningElement",
                              "start": 244,
                              "end": 275,
                              "name": {
                                "type": "JSXIdentifier",
                                "start": 245,
                                "end": 256,
                                "name": "InnerButton"
                              },
                              "typeArguments": null,
                              "attributes": [
                                {
                                  "type": "JSXSpreadAttribute",
                                  "start": 257,
                                  "end": 272,
                                  "argument": {
                                    "type": "MemberExpression",
                                    "start": 261,
                                    "end": 271,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 261,
                                      "end": 265
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 266,
                                      "end": 271,
                                      "decorators": [],
                                      "name": "props",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                }
                              ],
                              "selfClosing": true
                            },
                            "children": [],
                            "closingElement": null
                          }
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 287,
                      "end": 382,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 292,
                          "end": 378,
                          "argument": {
                            "type": "JSXElement",
                            "start": 300,
                            "end": 376,
                            "openingElement": {
                              "type": "JSXOpeningElement",
                              "start": 300,
                              "end": 330,
                              "name": {
                                "type": "JSXIdentifier",
                                "start": 301,
                                "end": 312,
                                "name": "InnerButton"
                              },
                              "typeArguments": null,
                              "attributes": [
                                {
                                  "type": "JSXSpreadAttribute",
                                  "start": 313,
                                  "end": 328,
                                  "argument": {
                                    "type": "MemberExpression",
                                    "start": 317,
                                    "end": 327,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 317,
                                      "end": 321
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 322,
                                      "end": 327,
                                      "decorators": [],
                                      "name": "props",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                }
                              ],
                              "selfClosing": false
                            },
                            "children": [
                              {
                                "type": "JSXText",
                                "start": 330,
                                "end": 335,
                                "value": "\n\t\t\t\t",
                                "raw": "\n\t\t\t\t"
                              },
                              {
                                "type": "JSXElement",
                                "start": 335,
                                "end": 357,
                                "openingElement": {
                                  "type": "JSXOpeningElement",
                                  "start": 335,
                                  "end": 340,
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "start": 336,
                                    "end": 339,
                                    "name": "div"
                                  },
                                  "typeArguments": null,
                                  "attributes": [],
                                  "selfClosing": false
                                },
                                "children": [
                                  {
                                    "type": "JSXText",
                                    "start": 340,
                                    "end": 351,
                                    "value": "Hello World",
                                    "raw": "Hello World"
                                  }
                                ],
                                "closingElement": {
                                  "type": "JSXClosingElement",
                                  "start": 351,
                                  "end": 357,
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "start": 353,
                                    "end": 356,
                                    "name": "div"
                                  }
                                }
                              },
                              {
                                "type": "JSXText",
                                "start": 357,
                                "end": 362,
                                "value": "\n\t\t\t\t",
                                "raw": "\n\t\t\t\t"
                              }
                            ],
                            "closingElement": {
                              "type": "JSXClosingElement",
                              "start": 362,
                              "end": 376,
                              "name": {
                                "type": "JSXIdentifier",
                                "start": 364,
                                "end": 375,
                                "name": "InnerButton"
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 392,
      "end": 432,
      "id": {
        "type": "Identifier",
        "start": 402,
        "end": 417,
        "decorators": [],
        "name": "InnerButtonProp",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 418,
        "end": 432,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 421,
            "end": 430,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 421,
              "end": 422,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 422,
              "end": 430,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 424,
                "end": 430
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
      "start": 434,
      "end": 551,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 440,
        "end": 451,
        "decorators": [],
        "name": "InnerButton",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 460,
        "end": 475,
        "object": {
          "type": "Identifier",
          "start": 460,
          "end": 465,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 466,
          "end": 475,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 475,
        "end": 497,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 476,
            "end": 491,
            "typeName": {
              "type": "Identifier",
              "start": 476,
              "end": 491,
              "decorators": [],
              "name": "InnerButtonProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSAnyKeyword",
            "start": 493,
            "end": 496
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 498,
        "end": 551,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 501,
            "end": 549,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 501,
              "end": 507,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 507,
              "end": 549,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 510,
                "end": 549,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 514,
                    "end": 546,
                    "argument": {
                      "type": "JSXElement",
                      "start": 522,
                      "end": 544,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 522,
                        "end": 530,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 523,
                          "end": 529,
                          "name": "button"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 530,
                          "end": 535,
                          "value": "Hello",
                          "raw": "Hello"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 535,
                        "end": 544,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 537,
                          "end": 543,
                          "name": "button"
                        }
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
