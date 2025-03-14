file.tsx
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
        "optional": false
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
      "end": 71,
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
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 60,
              "decorators": [],
              "name": "Name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 68,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 62,
                "end": 68
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
        "end": 49,
        "decorators": [],
        "name": "IUser",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 73,
      "end": 146,
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
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 113,
              "decorators": [],
              "name": "children",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 143,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 115,
                "end": 143,
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
                          "optional": false
                        }
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
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 143,
                        "decorators": [],
                        "name": "Element",
                        "optional": false
                      }
                    }
                  }
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
        "start": 83,
        "end": 98,
        "decorators": [],
        "name": "IFetchUserProps",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 148,
      "end": 333,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 210,
        "end": 333,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 216,
            "end": 331,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 216,
              "end": 222,
              "decorators": [],
              "name": "render",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 222,
              "end": 331,
              "async": false,
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
                      "alternate": {
                        "type": "Literal",
                        "start": 320,
                        "end": 324,
                        "raw": "null",
                        "value": null
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "start": 267,
                        "end": 305,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 287,
                            "end": 304,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 287,
                              "end": 297,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 287,
                                "end": 291
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 292,
                                "end": 297,
                                "decorators": [],
                                "name": "state",
                                "optional": false
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 298,
                              "end": 304,
                              "decorators": [],
                              "name": "result",
                              "optional": false
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 267,
                          "end": 286,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 267,
                            "end": 277,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 267,
                              "end": 271
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 272,
                              "end": 277,
                              "decorators": [],
                              "name": "props",
                              "optional": false
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 278,
                            "end": 286,
                            "decorators": [],
                            "name": "children",
                            "optional": false
                          }
                        },
                        "optional": false
                      },
                      "test": {
                        "type": "MemberExpression",
                        "start": 242,
                        "end": 252,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 242,
                          "end": 246
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 252,
                          "decorators": [],
                          "name": "state",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 163,
        "decorators": [],
        "name": "FetchUser",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 172,
        "end": 187,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 172,
          "end": 177,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 178,
          "end": 187,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
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
              "optional": false
            }
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
      "start": 344,
      "end": 507,
      "async": false,
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
              "children": [
                {
                  "type": "JSXText",
                  "start": 398,
                  "end": 411,
                  "raw": "\n            ",
                  "value": "\n            "
                },
                {
                  "type": "JSXExpressionContainer",
                  "start": 411,
                  "end": 477,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 413,
                    "end": 475,
                    "async": false,
                    "body": {
                      "type": "JSXElement",
                      "start": 439,
                      "end": 461,
                      "children": [
                        {
                          "type": "JSXExpressionContainer",
                          "start": 443,
                          "end": 456,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 445,
                            "end": 454,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 445,
                              "end": 449,
                              "decorators": [],
                              "name": "user",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 450,
                              "end": 454,
                              "decorators": [],
                              "name": "NAme",
                              "optional": false
                            }
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
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 439,
                        "end": 443,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 440,
                          "end": 442,
                          "name": "h1"
                        },
                        "selfClosing": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 413,
                        "end": 417,
                        "decorators": [],
                        "name": "user",
                        "optional": false
                      }
                    ]
                  }
                },
                {
                  "type": "JSXText",
                  "start": 477,
                  "end": 486,
                  "raw": "\n        ",
                  "value": "\n        "
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
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 387,
                "end": 398,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 388,
                  "end": 397,
                  "name": "FetchUser"
                },
                "selfClosing": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 353,
        "end": 361,
        "decorators": [],
        "name": "UserName",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 509,
      "end": 767,
      "async": false,
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
              "children": [
                {
                  "type": "JSXText",
                  "start": 564,
                  "end": 592,
                  "raw": "\n\n\n            \n            ",
                  "value": "\n\n\n            \n            "
                },
                {
                  "type": "JSXExpressionContainer",
                  "start": 592,
                  "end": 658,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 594,
                    "end": 656,
                    "async": false,
                    "body": {
                      "type": "JSXElement",
                      "start": 620,
                      "end": 642,
                      "children": [
                        {
                          "type": "JSXExpressionContainer",
                          "start": 624,
                          "end": 637,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 626,
                            "end": 635,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 626,
                              "end": 630,
                              "decorators": [],
                              "name": "user",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 631,
                              "end": 635,
                              "decorators": [],
                              "name": "Name",
                              "optional": false
                            }
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
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 620,
                        "end": 624,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 621,
                          "end": 623,
                          "name": "h1"
                        },
                        "selfClosing": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 594,
                        "end": 598,
                        "decorators": [],
                        "name": "user",
                        "optional": false
                      }
                    ]
                  }
                },
                {
                  "type": "JSXText",
                  "start": 658,
                  "end": 671,
                  "raw": "\n            ",
                  "value": "\n            "
                },
                {
                  "type": "JSXExpressionContainer",
                  "start": 671,
                  "end": 737,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 673,
                    "end": 735,
                    "async": false,
                    "body": {
                      "type": "JSXElement",
                      "start": 699,
                      "end": 721,
                      "children": [
                        {
                          "type": "JSXExpressionContainer",
                          "start": 703,
                          "end": 716,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 705,
                            "end": 714,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 705,
                              "end": 709,
                              "decorators": [],
                              "name": "user",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 710,
                              "end": 714,
                              "decorators": [],
                              "name": "Name",
                              "optional": false
                            }
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
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 699,
                        "end": 703,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 700,
                          "end": 702,
                          "name": "h1"
                        },
                        "selfClosing": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 673,
                        "end": 677,
                        "decorators": [],
                        "name": "user",
                        "optional": false
                      }
                    ]
                  }
                },
                {
                  "type": "JSXText",
                  "start": 737,
                  "end": 746,
                  "raw": "\n        ",
                  "value": "\n        "
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
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 553,
                "end": 564,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 554,
                  "end": 563,
                  "name": "FetchUser"
                },
                "selfClosing": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 518,
        "end": 527,
        "decorators": [],
        "name": "UserName1",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
