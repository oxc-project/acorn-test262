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
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 49,
        "name": "IUser",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "Name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "IFetchUserProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "children",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "user",
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
                          "name": "IUser",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                        "name": "JSX",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 143,
                        "name": "Element",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 163,
        "name": "FetchUser",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 172,
        "end": 187,
        "object": {
          "type": "Identifier",
          "start": 172,
          "end": 177,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 178,
          "end": 187,
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
        "start": 210,
        "end": 333,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 216,
            "end": 331,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 216,
              "end": 222,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 222,
              "end": 331,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "state",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                              "name": "props",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 278,
                            "end": 286,
                            "name": "children",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
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
                                "name": "state",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 298,
                              "end": 304,
                              "name": "result",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
              "name": "IFetchUserProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSAnyKeyword",
            "start": 205,
            "end": 208
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 341,
      "end": 505,
      "id": {
        "type": "Identifier",
        "start": 350,
        "end": 359,
        "name": "UserName0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 386,
                  "end": 395,
                  "name": "FetchUser"
                },
                "selfClosing": false,
                "typeArguments": null
              },
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
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 411,
                        "end": 415,
                        "name": "user",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "JSXElement",
                      "start": 437,
                      "end": 459,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 437,
                        "end": 441,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 438,
                          "end": 440,
                          "name": "h1"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      },
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
                              "name": "user",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 448,
                              "end": 452,
                              "name": "Name",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                },
                {
                  "type": "JSXText",
                  "start": 475,
                  "end": 484,
                  "value": "\n        ",
                  "raw": "\n        "
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
    {
      "type": "FunctionDeclaration",
      "start": 507,
      "end": 672,
      "id": {
        "type": "Identifier",
        "start": 516,
        "end": 525,
        "name": "UserName1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 552,
                  "end": 561,
                  "name": "FetchUser"
                },
                "selfClosing": false,
                "typeArguments": null
              },
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
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 578,
                        "end": 582,
                        "name": "user",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "JSXElement",
                      "start": 604,
                      "end": 626,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 604,
                        "end": 608,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 605,
                          "end": 607,
                          "name": "h1"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      },
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
                              "name": "user",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 615,
                              "end": 619,
                              "name": "Name",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                },
                {
                  "type": "JSXText",
                  "start": 642,
                  "end": 651,
                  "value": "\n        ",
                  "raw": "\n        "
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
