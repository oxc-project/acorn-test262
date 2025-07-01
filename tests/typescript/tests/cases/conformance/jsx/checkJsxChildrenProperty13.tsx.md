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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "InnerButton",
                          "start": 246,
                          "end": 257
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 262,
                                "end": 266
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 267,
                                "end": 272
                              },
                              "optional": false,
                              "computed": false,
                              "start": 262,
                              "end": 272
                            },
                            "start": 258,
                            "end": 273
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "children",
                              "start": 274,
                              "end": 282
                            },
                            "value": {
                              "type": "Literal",
                              "value": "hi",
                              "raw": "\"hi\"",
                              "start": 283,
                              "end": 287
                            },
                            "start": 274,
                            "end": 287
                          }
                        ],
                        "selfClosing": false,
                        "start": 245,
                        "end": 288
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "\n            ",
                          "raw": "\n            ",
                          "start": 288,
                          "end": 301
                        },
                        {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 302,
                              "end": 305
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": false,
                            "start": 301,
                            "end": 306
                          },
                          "children": [
                            {
                              "type": "JSXText",
                              "value": "Hello World",
                              "raw": "Hello World",
                              "start": 306,
                              "end": 317
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "div",
                              "start": 319,
                              "end": 322
                            },
                            "start": 317,
                            "end": 323
                          },
                          "start": 301,
                          "end": 323
                        },
                        {
                          "type": "JSXText",
                          "value": "\n            ",
                          "raw": "\n            ",
                          "start": 323,
                          "end": 336
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "InnerButton",
                          "start": 338,
                          "end": 349
                        },
                        "start": 336,
                        "end": 350
                      },
                      "start": 245,
                      "end": 350
                    },
                    "start": 237,
                    "end": 352
                  }
                ],
                "start": 181,
                "end": 358
              },
              "expression": false,
              "start": 178,
              "end": 358
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 172,
            "end": 358
          }
        ],
        "start": 166,
        "end": 360
      },
      "abstract": false,
      "declare": false,
      "start": 112,
      "end": 360
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InnerButtonProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 372,
        "end": 387
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
              "start": 391,
              "end": 392
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 394,
                "end": 400
              },
              "start": 392,
              "end": 400
            },
            "accessibility": null,
            "static": false,
            "start": 391,
            "end": 400
          }
        ],
        "start": 388,
        "end": 402
      },
      "declare": false,
      "start": 362,
      "end": 402
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
        "start": 410,
        "end": 421
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
          "start": 430,
          "end": 435
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 436,
          "end": 445
        },
        "optional": false,
        "computed": false,
        "start": 430,
        "end": 445
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
              "start": 446,
              "end": 461
            },
            "typeArguments": null,
            "start": 446,
            "end": 461
          },
          {
            "type": "TSAnyKeyword",
            "start": 463,
            "end": 466
          }
        ],
        "start": 445,
        "end": 467
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
              "start": 471,
              "end": 477
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
                          "start": 493,
                          "end": 499
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 492,
                        "end": 500
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Hello",
                          "raw": "Hello",
                          "start": 500,
                          "end": 505
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "button",
                          "start": 507,
                          "end": 513
                        },
                        "start": 505,
                        "end": 514
                      },
                      "start": 492,
                      "end": 514
                    },
                    "start": 484,
                    "end": 516
                  }
                ],
                "start": 480,
                "end": 519
              },
              "expression": false,
              "start": 477,
              "end": 519
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 471,
            "end": 519
          }
        ],
        "start": 468,
        "end": 521
      },
      "abstract": false,
      "declare": false,
      "start": 404,
      "end": 521
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 521
}
```
