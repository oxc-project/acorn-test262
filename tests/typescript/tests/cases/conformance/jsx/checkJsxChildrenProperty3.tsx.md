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
        "name": "IUser",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 49
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
              "name": "Name",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 60
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 62,
                "end": 68
              },
              "start": 60,
              "end": 68
            },
            "accessibility": null,
            "static": false,
            "start": 56,
            "end": 69
          }
        ],
        "start": 50,
        "end": 71
      },
      "declare": false,
      "start": 34,
      "end": 71
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFetchUserProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 98
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
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 113
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "user",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IUser",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 122,
                          "end": 127
                        },
                        "typeArguments": null,
                        "start": 122,
                        "end": 127
                      },
                      "start": 120,
                      "end": 127
                    },
                    "start": 116,
                    "end": 127
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
                        "name": "JSX",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 132,
                        "end": 135
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Element",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 136,
                        "end": 143
                      },
                      "start": 132,
                      "end": 143
                    },
                    "typeArguments": null,
                    "start": 132,
                    "end": 143
                  },
                  "start": 129,
                  "end": 143
                },
                "start": 115,
                "end": 143
              },
              "start": 113,
              "end": 143
            },
            "accessibility": null,
            "static": false,
            "start": 105,
            "end": 144
          }
        ],
        "start": 99,
        "end": 146
      },
      "declare": false,
      "start": 73,
      "end": 146
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FetchUser",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 163
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
          "start": 172,
          "end": 177
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 178,
          "end": 187
        },
        "optional": false,
        "computed": false,
        "start": 172,
        "end": 187
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IFetchUserProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 203
            },
            "typeArguments": null,
            "start": 188,
            "end": 203
          },
          {
            "type": "TSAnyKeyword",
            "start": 205,
            "end": 208
          }
        ],
        "start": 187,
        "end": 209
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
              "start": 216,
              "end": 222
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
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 242,
                          "end": 246
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 247,
                          "end": 252
                        },
                        "optional": false,
                        "computed": false,
                        "start": 242,
                        "end": 252
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 267,
                              "end": 271
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "props",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 272,
                              "end": 277
                            },
                            "optional": false,
                            "computed": false,
                            "start": 267,
                            "end": 277
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 278,
                            "end": 286
                          },
                          "optional": false,
                          "computed": false,
                          "start": 267,
                          "end": 286
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 287,
                                "end": 291
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "state",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 292,
                                "end": 297
                              },
                              "optional": false,
                              "computed": false,
                              "start": 287,
                              "end": 297
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 298,
                              "end": 304
                            },
                            "optional": false,
                            "computed": false,
                            "start": 287,
                            "end": 304
                          }
                        ],
                        "optional": false,
                        "start": 267,
                        "end": 305
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 320,
                        "end": 324
                      },
                      "start": 242,
                      "end": 324
                    },
                    "start": 235,
                    "end": 325
                  }
                ],
                "start": 225,
                "end": 331
              },
              "expression": false,
              "start": 222,
              "end": 331
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 216,
            "end": 331
          }
        ],
        "start": 210,
        "end": 333
      },
      "abstract": false,
      "declare": false,
      "start": 148,
      "end": 333
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UserName0",
        "optional": false,
        "typeAnnotation": null,
        "start": 350,
        "end": 359
      },
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
                  "name": "FetchUser",
                  "start": 386,
                  "end": 395
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 385,
                "end": 396
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n            ",
                  "raw": "\n            ",
                  "start": 396,
                  "end": 409
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "user",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 411,
                        "end": 415
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "h1",
                          "start": 438,
                          "end": 440
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 437,
                        "end": 441
                      },
                      "children": [
                        {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "user",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 443,
                              "end": 447
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 448,
                              "end": 452
                            },
                            "optional": false,
                            "computed": false,
                            "start": 443,
                            "end": 452
                          },
                          "start": 441,
                          "end": 454
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "h1",
                          "start": 456,
                          "end": 458
                        },
                        "start": 454,
                        "end": 459
                      },
                      "start": 437,
                      "end": 459
                    },
                    "id": null,
                    "generator": false,
                    "start": 411,
                    "end": 473
                  },
                  "start": 409,
                  "end": 475
                },
                {
                  "type": "JSXText",
                  "value": "\n        ",
                  "raw": "\n        ",
                  "start": 475,
                  "end": 484
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FetchUser",
                  "start": 486,
                  "end": 495
                },
                "start": 484,
                "end": 496
              },
              "start": 385,
              "end": 496
            },
            "start": 368,
            "end": 503
          }
        ],
        "start": 362,
        "end": 505
      },
      "expression": false,
      "start": 341,
      "end": 505
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UserName1",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 525
      },
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
                  "name": "FetchUser",
                  "start": 552,
                  "end": 561
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 551,
                "end": 562
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n\n            ",
                  "raw": "\n\n            ",
                  "start": 562,
                  "end": 576
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "user",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 578,
                        "end": 582
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "h1",
                          "start": 605,
                          "end": 607
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 604,
                        "end": 608
                      },
                      "children": [
                        {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "user",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 610,
                              "end": 614
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 615,
                              "end": 619
                            },
                            "optional": false,
                            "computed": false,
                            "start": 610,
                            "end": 619
                          },
                          "start": 608,
                          "end": 621
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "h1",
                          "start": 623,
                          "end": 625
                        },
                        "start": 621,
                        "end": 626
                      },
                      "start": 604,
                      "end": 626
                    },
                    "id": null,
                    "generator": false,
                    "start": 578,
                    "end": 640
                  },
                  "start": 576,
                  "end": 642
                },
                {
                  "type": "JSXText",
                  "value": "\n        ",
                  "raw": "\n        ",
                  "start": 642,
                  "end": 651
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FetchUser",
                  "start": 653,
                  "end": 662
                },
                "start": 651,
                "end": 663
              },
              "start": 551,
              "end": 663
            },
            "start": 534,
            "end": 670
          }
        ],
        "start": 528,
        "end": 672
      },
      "expression": false,
      "start": 507,
      "end": 672
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 672
}
```
