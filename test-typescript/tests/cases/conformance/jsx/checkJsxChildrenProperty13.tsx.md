__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 522,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "ButtonProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "children",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "Button",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 124,
        "name": "Button",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 133,
        "end": 148,
        "object": {
          "type": "Identifier",
          "start": 133,
          "end": 138,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 139,
          "end": 148,
          "name": "Component",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 166,
        "end": 360,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 172,
            "end": 358,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 178,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 358,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                                "name": "props",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
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
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 246,
                          "end": 257,
                          "name": "InnerButton"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      },
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
                            "attributes": [],
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 302,
                              "end": 305,
                              "name": "div"
                            },
                            "selfClosing": false,
                            "typeArguments": null
                          },
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
                          "children": [
                            {
                              "type": "JSXText",
                              "start": 306,
                              "end": 317,
                              "value": "Hello World",
                              "raw": "Hello World"
                            }
                          ]
                        },
                        {
                          "type": "JSXText",
                          "start": 323,
                          "end": 336,
                          "value": "\n            ",
                          "raw": "\n            "
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
              "name": "ButtonProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSAnyKeyword",
            "start": 161,
            "end": 164
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 362,
      "end": 402,
      "id": {
        "type": "Identifier",
        "start": 372,
        "end": 387,
        "name": "InnerButtonProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 421,
        "name": "InnerButton",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 430,
        "end": 445,
        "object": {
          "type": "Identifier",
          "start": 430,
          "end": 435,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 436,
          "end": 445,
          "name": "Component",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 468,
        "end": 521,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 471,
            "end": 519,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 471,
              "end": 477,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 477,
              "end": 519,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 493,
                          "end": 499,
                          "name": "button"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      },
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 500,
                          "end": 505,
                          "value": "Hello",
                          "raw": "Hello"
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
              "name": "InnerButtonProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSAnyKeyword",
            "start": 463,
            "end": 466
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
