__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 767,
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
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 49,
        "decorators": [],
        "name": "IUser",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 50,
        "end": 71,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 56,
            "end": 69,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 60,
              "decorators": [],
              "name": "Name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 68,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 62,
                "end": 68
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
      "type": "TSInterfaceDeclaration",
      "start": 73,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 98,
        "decorators": [],
        "name": "IFetchUserProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 99,
        "end": 146,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 105,
            "end": 144,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 113,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 143,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 115,
                "end": 143,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 116,
                    "end": 127,
                    "decorators": [],
                    "name": "user",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 120,
                      "end": 127,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 122,
                        "end": 127,
                        "typeName": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 127,
                          "decorators": [],
                          "name": "IUser",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 129,
                  "end": 143,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 132,
                    "end": 143,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 132,
                      "end": 143,
                      "left": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 135,
                        "decorators": [],
                        "name": "JSX",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 143,
                        "decorators": [],
                        "name": "Element",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  }
                }
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
      "start": 148,
      "end": 333,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 163,
        "decorators": [],
        "name": "FetchUser",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 172,
        "end": 187,
        "object": {
          "type": "Identifier",
          "start": 172,
          "end": 177,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 178,
          "end": 187,
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
        "start": 187,
        "end": 209,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 188,
            "end": 203,
            "typeName": {
              "type": "Identifier",
              "start": 188,
              "end": 203,
              "decorators": [],
              "name": "IFetchUserProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSAnyKeyword",
            "start": 205,
            "end": 208
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 210,
        "end": 333,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 216,
            "end": 331,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 216,
              "end": 222,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 222,
              "end": 331,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 225,
                "end": 331,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 235,
                    "end": 325,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 242,
                      "end": 324,
                      "test": {
                        "type": "MemberExpression",
                        "start": 242,
                        "end": 252,
                        "object": {
                          "type": "ThisExpression",
                          "start": 242,
                          "end": 246
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 252,
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "start": 267,
                        "end": 305,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 267,
                          "end": 286,
                          "object": {
                            "type": "MemberExpression",
                            "start": 267,
                            "end": 277,
                            "object": {
                              "type": "ThisExpression",
                              "start": 267,
                              "end": 271
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 272,
                              "end": 277,
                              "decorators": [],
                              "name": "props",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 278,
                            "end": 286,
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 287,
                            "end": 304,
                            "object": {
                              "type": "MemberExpression",
                              "start": 287,
                              "end": 297,
                              "object": {
                                "type": "ThisExpression",
                                "start": 287,
                                "end": 291
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 292,
                                "end": 297,
                                "decorators": [],
                                "name": "state",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 298,
                              "end": 304,
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        ],
                        "optional": false
                      },
                      "alternate": {
                        "type": "Literal",
                        "start": 320,
                        "end": 324,
                        "value": null,
                        "raw": "null"
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
      "type": "FunctionDeclaration",
      "start": 344,
      "end": 507,
      "id": {
        "type": "Identifier",
        "start": 353,
        "end": 361,
        "decorators": [],
        "name": "UserName",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 364,
        "end": 507,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 370,
            "end": 505,
            "argument": {
              "type": "JSXElement",
              "start": 387,
              "end": 498,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 387,
                "end": 398,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 388,
                  "end": 397,
                  "name": "FetchUser"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 398,
                  "end": 411,
                  "value": "\n            ",
                  "raw": "\n            "
                },
                {
                  "type": "JSXExpressionContainer",
                  "start": 411,
                  "end": 477,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 413,
                    "end": 475,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 413,
                        "end": 417,
                        "decorators": [],
                        "name": "user",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "JSXElement",
                      "start": 439,
                      "end": 461,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 439,
                        "end": 443,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 440,
                          "end": 442,
                          "name": "h1"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXExpressionContainer",
                          "start": 443,
                          "end": 456,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 445,
                            "end": 454,
                            "object": {
                              "type": "Identifier",
                              "start": 445,
                              "end": 449,
                              "decorators": [],
                              "name": "user",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 450,
                              "end": 454,
                              "decorators": [],
                              "name": "NAme",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 456,
                        "end": 461,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 458,
                          "end": 460,
                          "name": "h1"
                        }
                      }
                    },
                    "id": null,
                    "generator": false
                  }
                },
                {
                  "type": "JSXText",
                  "start": 477,
                  "end": 486,
                  "value": "\n        ",
                  "raw": "\n        "
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 486,
                "end": 498,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 488,
                  "end": 497,
                  "name": "FetchUser"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 509,
      "end": 767,
      "id": {
        "type": "Identifier",
        "start": 518,
        "end": 527,
        "decorators": [],
        "name": "UserName1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 530,
        "end": 767,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 536,
            "end": 765,
            "argument": {
              "type": "JSXElement",
              "start": 553,
              "end": 758,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 553,
                "end": 564,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 554,
                  "end": 563,
                  "name": "FetchUser"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 564,
                  "end": 592,
                  "value": "\n\n\n            \n            ",
                  "raw": "\n\n\n            \n            "
                },
                {
                  "type": "JSXExpressionContainer",
                  "start": 592,
                  "end": 658,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 594,
                    "end": 656,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 594,
                        "end": 598,
                        "decorators": [],
                        "name": "user",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "JSXElement",
                      "start": 620,
                      "end": 642,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 620,
                        "end": 624,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 621,
                          "end": 623,
                          "name": "h1"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXExpressionContainer",
                          "start": 624,
                          "end": 637,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 626,
                            "end": 635,
                            "object": {
                              "type": "Identifier",
                              "start": 626,
                              "end": 630,
                              "decorators": [],
                              "name": "user",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 631,
                              "end": 635,
                              "decorators": [],
                              "name": "Name",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 637,
                        "end": 642,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 639,
                          "end": 641,
                          "name": "h1"
                        }
                      }
                    },
                    "id": null,
                    "generator": false
                  }
                },
                {
                  "type": "JSXText",
                  "start": 658,
                  "end": 671,
                  "value": "\n            ",
                  "raw": "\n            "
                },
                {
                  "type": "JSXExpressionContainer",
                  "start": 671,
                  "end": 737,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 673,
                    "end": 735,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 673,
                        "end": 677,
                        "decorators": [],
                        "name": "user",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "JSXElement",
                      "start": 699,
                      "end": 721,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 699,
                        "end": 703,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 700,
                          "end": 702,
                          "name": "h1"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXExpressionContainer",
                          "start": 703,
                          "end": 716,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 705,
                            "end": 714,
                            "object": {
                              "type": "Identifier",
                              "start": 705,
                              "end": 709,
                              "decorators": [],
                              "name": "user",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 710,
                              "end": 714,
                              "decorators": [],
                              "name": "Name",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 716,
                        "end": 721,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 718,
                          "end": 720,
                          "name": "h1"
                        }
                      }
                    },
                    "id": null,
                    "generator": false
                  }
                },
                {
                  "type": "JSXText",
                  "start": 737,
                  "end": 746,
                  "value": "\n        ",
                  "raw": "\n        "
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 746,
                "end": 758,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 748,
                  "end": 757,
                  "name": "FetchUser"
                }
              }
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
