__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 521,
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
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "raw": "'react'",
          "value": "react"
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 110,
      "body": {
        "type": "TSInterfaceBody",
        "start": 55,
        "end": 110,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 61,
            "end": 71,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 76,
            "end": 86,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 85,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 91,
            "end": 108,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 99,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 107,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 101,
                "end": 107,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 107,
                  "decorators": [],
                  "name": "Button",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 44,
        "end": 54,
        "decorators": [],
        "name": "ButtonProp",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 112,
      "end": 360,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 166,
        "end": 360,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 172,
            "end": 358,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 358,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 358,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 237,
                    "end": 352,
                    "argument": {
                      "type": "JSXElement",
                      "start": 245,
                      "end": 350,
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 288,
                          "end": 301,
                          "raw": "\n            ",
                          "value": "\n            "
                        },
                        {
                          "type": "JSXElement",
                          "start": 301,
                          "end": 323,
                          "children": [
                            {
                              "type": "JSXText",
                              "start": 306,
                              "end": 317,
                              "raw": "Hello World",
                              "value": "Hello World"
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "start": 317,
                            "end": 323,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 319,
                              "end": 322,
                              "name": "div"
                            }
                          },
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 301,
                            "end": 306,
                            "attributes": [],
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 302,
                              "end": 305,
                              "name": "div"
                            },
                            "selfClosing": false,
                            "typeArguments": null
                          }
                        },
                        {
                          "type": "JSXText",
                          "start": 323,
                          "end": 336,
                          "raw": "\n            ",
                          "value": "\n            "
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 336,
                        "end": 350,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 338,
                          "end": 349,
                          "name": "InnerButton"
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 245,
                        "end": 288,
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "start": 258,
                            "end": 273,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 262,
                              "end": 272,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 262,
                                "end": 266
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 267,
                                "end": 272,
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "JSXAttribute",
                            "start": 274,
                            "end": 287,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 274,
                              "end": 282,
                              "name": "children"
                            },
                            "value": {
                              "type": "Literal",
                              "start": 283,
                              "end": 287,
                              "raw": "\"hi\"",
                              "value": "hi"
                            }
                          }
                        ],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 246,
                          "end": 257,
                          "name": "InnerButton"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 133,
        "end": 148,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 133,
          "end": 138,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 139,
          "end": 148,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
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
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 149,
              "end": 159,
              "decorators": [],
              "name": "ButtonProp",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSAnyKeyword",
            "start": 161,
            "end": 164
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 362,
      "end": 402,
      "body": {
        "type": "TSInterfaceBody",
        "start": 388,
        "end": 402,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 391,
            "end": 400,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 391,
              "end": 392,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 392,
              "end": 400,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 394,
                "end": 400
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 372,
        "end": 387,
        "decorators": [],
        "name": "InnerButtonProp",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 404,
      "end": 521,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 468,
        "end": 521,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 471,
            "end": 519,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 471,
              "end": 477,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 477,
              "end": 519,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 480,
                "end": 519,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 484,
                    "end": 516,
                    "argument": {
                      "type": "JSXElement",
                      "start": 492,
                      "end": 514,
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 500,
                          "end": 505,
                          "raw": "Hello",
                          "value": "Hello"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 505,
                        "end": 514,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 507,
                          "end": 513,
                          "name": "button"
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 492,
                        "end": 500,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 493,
                          "end": 499,
                          "name": "button"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 421,
        "decorators": [],
        "name": "InnerButton",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 430,
        "end": 445,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 430,
          "end": 435,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 436,
          "end": 445,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 445,
        "end": 467,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 446,
            "end": 461,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 446,
              "end": 461,
              "decorators": [],
              "name": "InnerButtonProp",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSAnyKeyword",
            "start": 463,
            "end": 466
          }
        ]
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
