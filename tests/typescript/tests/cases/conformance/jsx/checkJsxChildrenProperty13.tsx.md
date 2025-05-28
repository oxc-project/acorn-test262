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
      "end": 360,
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
        "end": 360,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 172,
            "end": 358,
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
              "end": 358,
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
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 245,
                        "end": 288,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 246,
                          "end": 257,
                          "name": "InnerButton"
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "start": 258,
                            "end": 273,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 262,
                              "end": 272,
                              "object": {
                                "type": "ThisExpression",
                                "start": 262,
                                "end": 266
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 267,
                                "end": 272,
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
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
                              "value": "hi",
                              "raw": "\"hi\""
                            }
                          }
                        ],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 288,
                          "end": 301,
                          "value": "\n            ",
                          "raw": "\n            "
                        },
                        {
                          "type": "JSXElement",
                          "start": 301,
                          "end": 323,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 301,
                            "end": 306,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 302,
                              "end": 305,
                              "name": "div"
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": false
                          },
                          "children": [
                            {
                              "type": "JSXText",
                              "start": 306,
                              "end": 317,
                              "value": "Hello World",
                              "raw": "Hello World"
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
                          }
                        },
                        {
                          "type": "JSXText",
                          "start": 323,
                          "end": 336,
                          "value": "\n            ",
                          "raw": "\n            "
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
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 362,
      "end": 402,
      "id": {
        "type": "Identifier",
        "start": 372,
        "end": 387,
        "decorators": [],
        "name": "InnerButtonProp",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 388,
        "end": 402,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 391,
            "end": 400,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 391,
              "end": 392,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 392,
              "end": 400,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 394,
                "end": 400
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
      "start": 404,
      "end": 521,
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
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 430,
        "end": 445,
        "object": {
          "type": "Identifier",
          "start": 430,
          "end": 435,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 436,
          "end": 445,
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
        "start": 445,
        "end": 467,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 446,
            "end": 461,
            "typeName": {
              "type": "Identifier",
              "start": 446,
              "end": 461,
              "decorators": [],
              "name": "InnerButtonProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSAnyKeyword",
            "start": 463,
            "end": 466
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 468,
        "end": 521,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 471,
            "end": 519,
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
            "value": {
              "type": "FunctionExpression",
              "start": 477,
              "end": 519,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 492,
                        "end": 500,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 493,
                          "end": 499,
                          "name": "button"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 500,
                          "end": 505,
                          "value": "Hello",
                          "raw": "Hello"
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
