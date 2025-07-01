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
        "name": "UserName",
        "optional": false,
        "typeAnnotation": null,
        "start": 353,
        "end": 361
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
                  "start": 388,
                  "end": 397
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 387,
                "end": 398
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n            ",
                  "raw": "\n            ",
                  "start": 398,
                  "end": 411
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
                        "start": 413,
                        "end": 417
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
                          "start": 440,
                          "end": 442
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 439,
                        "end": 443
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
                              "start": 445,
                              "end": 449
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "NAme",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 450,
                              "end": 454
                            },
                            "optional": false,
                            "computed": false,
                            "start": 445,
                            "end": 454
                          },
                          "start": 443,
                          "end": 456
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "h1",
                          "start": 458,
                          "end": 460
                        },
                        "start": 456,
                        "end": 461
                      },
                      "start": 439,
                      "end": 461
                    },
                    "id": null,
                    "generator": false,
                    "start": 413,
                    "end": 475
                  },
                  "start": 411,
                  "end": 477
                },
                {
                  "type": "JSXText",
                  "value": "\n        ",
                  "raw": "\n        ",
                  "start": 477,
                  "end": 486
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FetchUser",
                  "start": 488,
                  "end": 497
                },
                "start": 486,
                "end": 498
              },
              "start": 387,
              "end": 498
            },
            "start": 370,
            "end": 505
          }
        ],
        "start": 364,
        "end": 507
      },
      "expression": false,
      "start": 344,
      "end": 507
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UserName1",
        "optional": false,
        "typeAnnotation": null,
        "start": 518,
        "end": 527
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
                  "start": 554,
                  "end": 563
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 553,
                "end": 564
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n\n\n            \n            ",
                  "raw": "\n\n\n            \n            ",
                  "start": 564,
                  "end": 592
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
                        "start": 594,
                        "end": 598
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
                          "start": 621,
                          "end": 623
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 620,
                        "end": 624
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
                              "start": 626,
                              "end": 630
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 631,
                              "end": 635
                            },
                            "optional": false,
                            "computed": false,
                            "start": 626,
                            "end": 635
                          },
                          "start": 624,
                          "end": 637
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "h1",
                          "start": 639,
                          "end": 641
                        },
                        "start": 637,
                        "end": 642
                      },
                      "start": 620,
                      "end": 642
                    },
                    "id": null,
                    "generator": false,
                    "start": 594,
                    "end": 656
                  },
                  "start": 592,
                  "end": 658
                },
                {
                  "type": "JSXText",
                  "value": "\n            ",
                  "raw": "\n            ",
                  "start": 658,
                  "end": 671
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
                        "start": 673,
                        "end": 677
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
                          "start": 700,
                          "end": 702
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 699,
                        "end": 703
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
                              "start": 705,
                              "end": 709
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 710,
                              "end": 714
                            },
                            "optional": false,
                            "computed": false,
                            "start": 705,
                            "end": 714
                          },
                          "start": 703,
                          "end": 716
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "h1",
                          "start": 718,
                          "end": 720
                        },
                        "start": 716,
                        "end": 721
                      },
                      "start": 699,
                      "end": 721
                    },
                    "id": null,
                    "generator": false,
                    "start": 673,
                    "end": 735
                  },
                  "start": 671,
                  "end": 737
                },
                {
                  "type": "JSXText",
                  "value": "\n        ",
                  "raw": "\n        ",
                  "start": 737,
                  "end": 746
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FetchUser",
                  "start": 748,
                  "end": 757
                },
                "start": 746,
                "end": 758
              },
              "start": 553,
              "end": 758
            },
            "start": 536,
            "end": 765
          }
        ],
        "start": 530,
        "end": 767
      },
      "expression": false,
      "start": 509,
      "end": 767
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 767
}
```
