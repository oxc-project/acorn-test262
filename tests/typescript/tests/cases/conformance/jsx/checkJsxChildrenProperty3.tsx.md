__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 672,
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
      "start": 341,
      "end": 505,
      "id": {
        "type": "Identifier",
        "start": 350,
        "end": 359,
        "decorators": [],
        "name": "UserName0",
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
        "start": 362,
        "end": 505,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 368,
            "end": 503,
            "argument": {
              "type": "JSXElement",
              "start": 385,
              "end": 496,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 385,
                "end": 396,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 386,
                  "end": 395,
                  "name": "FetchUser"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 396,
                  "end": 409,
                  "value": "\n            ",
                  "raw": "\n            "
                },
                {
                  "type": "JSXExpressionContainer",
                  "start": 409,
                  "end": 475,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 411,
                    "end": 473,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 411,
                        "end": 415,
                        "decorators": [],
                        "name": "user",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "JSXElement",
                      "start": 437,
                      "end": 459,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 437,
                        "end": 441,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 438,
                          "end": 440,
                          "name": "h1"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXExpressionContainer",
                          "start": 441,
                          "end": 454,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 443,
                            "end": 452,
                            "object": {
                              "type": "Identifier",
                              "start": 443,
                              "end": 447,
                              "decorators": [],
                              "name": "user",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 448,
                              "end": 452,
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
                        "start": 454,
                        "end": 459,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 456,
                          "end": 458,
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
                  "start": 475,
                  "end": 484,
                  "value": "\n        ",
                  "raw": "\n        "
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 484,
                "end": 496,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 486,
                  "end": 495,
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
      "start": 507,
      "end": 672,
      "id": {
        "type": "Identifier",
        "start": 516,
        "end": 525,
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
        "start": 528,
        "end": 672,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 534,
            "end": 670,
            "argument": {
              "type": "JSXElement",
              "start": 551,
              "end": 663,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 551,
                "end": 562,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 552,
                  "end": 561,
                  "name": "FetchUser"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 562,
                  "end": 576,
                  "value": "\n\n            ",
                  "raw": "\n\n            "
                },
                {
                  "type": "JSXExpressionContainer",
                  "start": 576,
                  "end": 642,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 578,
                    "end": 640,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 578,
                        "end": 582,
                        "decorators": [],
                        "name": "user",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "JSXElement",
                      "start": 604,
                      "end": 626,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 604,
                        "end": 608,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 605,
                          "end": 607,
                          "name": "h1"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXExpressionContainer",
                          "start": 608,
                          "end": 621,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 610,
                            "end": 619,
                            "object": {
                              "type": "Identifier",
                              "start": 610,
                              "end": 614,
                              "decorators": [],
                              "name": "user",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 615,
                              "end": 619,
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
                        "start": 621,
                        "end": 626,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 623,
                          "end": 625,
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
                  "start": 642,
                  "end": 651,
                  "value": "\n        ",
                  "raw": "\n        "
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 651,
                "end": 663,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 653,
                  "end": 662,
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
