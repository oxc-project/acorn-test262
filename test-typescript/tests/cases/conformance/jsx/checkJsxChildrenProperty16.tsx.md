checkJsxChildrenProperty16.tsx
```json
{
  "type": "Program",
  "start": 67,
  "end": 551,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 67,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 79,
        "decorators": [],
        "name": "React",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 82,
        "end": 98,
        "expression": {
          "type": "Literal",
          "start": 90,
          "end": 97,
          "raw": "'react'",
          "value": "react"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 101,
      "end": 260,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 108,
        "end": 260,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 113,
          "end": 118,
          "decorators": [],
          "name": "Props",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 123,
          "end": 259,
          "types": [
            {
              "type": "TSTypeLiteral",
              "start": 125,
              "end": 182,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 127,
                  "end": 148,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 139,
                    "decorators": [],
                    "name": "renderNumber",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 140,
                    "end": 147,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 142,
                      "end": 147,
                      "literal": {
                        "type": "Literal",
                        "start": 142,
                        "end": 147,
                        "raw": "false",
                        "value": false
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 149,
                  "end": 180,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 157,
                    "decorators": [],
                    "name": "children",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 157,
                    "end": 180,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 159,
                      "end": 180,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 160,
                          "end": 171,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 163,
                            "end": 171,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 165,
                              "end": 171
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 173,
                        "end": 180,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 176,
                          "end": 180
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "type": "TSTypeLiteral",
              "start": 187,
              "end": 259,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 195,
                  "end": 214,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 195,
                    "end": 207,
                    "decorators": [],
                    "name": "renderNumber",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 207,
                    "end": 213,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 209,
                      "end": 213,
                      "literal": {
                        "type": "Literal",
                        "start": 209,
                        "end": 213,
                        "raw": "true",
                        "value": true
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 221,
                  "end": 253,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 229,
                    "decorators": [],
                    "name": "children",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 229,
                    "end": 252,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 231,
                      "end": 252,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 232,
                          "end": 243,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 235,
                            "end": 243,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 237,
                              "end": 243
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 245,
                        "end": 252,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 248,
                          "end": 252
                        }
                      }
                    }
                  }
                }
              ]
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 262,
      "end": 317,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 269,
        "end": 317,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 286,
          "end": 289,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 290,
            "end": 302,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 295,
              "end": 302,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 297,
                "end": 302,
                "typeName": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 302,
                  "decorators": [],
                  "name": "Props",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 303,
          "end": 316,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 305,
            "end": 316,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 305,
              "end": 316,
              "left": {
                "type": "Identifier",
                "start": 305,
                "end": 308,
                "decorators": [],
                "name": "JSX",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 309,
                "end": 316,
                "decorators": [],
                "name": "Element",
                "optional": false
              }
            }
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 319,
      "end": 551,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 326,
        "end": 551,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 332,
            "end": 550,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 332,
              "end": 336,
              "decorators": [],
              "name": "Test",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 339,
              "end": 550,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 345,
                "end": 550,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 349,
                    "end": 548,
                    "argument": {
                      "type": "JSXFragment",
                      "start": 362,
                      "end": 543,
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 364,
                          "end": 371,
                          "raw": "\n      ",
                          "value": "\n      "
                        },
                        {
                          "type": "JSXElement",
                          "start": 371,
                          "end": 397,
                          "children": [
                            {
                              "type": "JSXExpressionContainer",
                              "start": 376,
                              "end": 391,
                              "expression": {
                                "type": "ArrowFunctionExpression",
                                "start": 377,
                                "end": 390,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 388,
                                  "end": 390,
                                  "body": []
                                },
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 378,
                                    "end": 383,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false
                                  }
                                ]
                              }
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "start": 391,
                            "end": 397,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 393,
                              "end": 396,
                              "name": "Foo"
                            }
                          },
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 371,
                            "end": 376,
                            "attributes": [],
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 372,
                              "end": 375,
                              "name": "Foo"
                            },
                            "selfClosing": false
                          }
                        },
                        {
                          "type": "JSXText",
                          "start": 397,
                          "end": 404,
                          "raw": "\n      ",
                          "value": "\n      "
                        },
                        {
                          "type": "JSXElement",
                          "start": 404,
                          "end": 443,
                          "children": [
                            {
                              "type": "JSXExpressionContainer",
                              "start": 422,
                              "end": 437,
                              "expression": {
                                "type": "ArrowFunctionExpression",
                                "start": 423,
                                "end": 436,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 434,
                                  "end": 436,
                                  "body": []
                                },
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 424,
                                    "end": 429,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false
                                  }
                                ]
                              }
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "start": 437,
                            "end": 443,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 439,
                              "end": 442,
                              "name": "Foo"
                            }
                          },
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 404,
                            "end": 422,
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "start": 409,
                                "end": 421,
                                "name": {
                                  "type": "JSXIdentifier",
                                  "start": 409,
                                  "end": 421,
                                  "name": "renderNumber"
                                },
                                "value": null
                              }
                            ],
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 405,
                              "end": 408,
                              "name": "Foo"
                            },
                            "selfClosing": false
                          }
                        },
                        {
                          "type": "JSXText",
                          "start": 443,
                          "end": 451,
                          "raw": "\n\n      ",
                          "value": "\n\n      "
                        },
                        {
                          "type": "JSXElement",
                          "start": 451,
                          "end": 483,
                          "children": [],
                          "closingElement": null,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 451,
                            "end": 483,
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "start": 456,
                                "end": 480,
                                "name": {
                                  "type": "JSXIdentifier",
                                  "start": 456,
                                  "end": 464,
                                  "name": "children"
                                },
                                "value": {
                                  "type": "JSXExpressionContainer",
                                  "start": 465,
                                  "end": 480,
                                  "expression": {
                                    "type": "ArrowFunctionExpression",
                                    "start": 466,
                                    "end": 479,
                                    "async": false,
                                    "body": {
                                      "type": "BlockStatement",
                                      "start": 477,
                                      "end": 479,
                                      "body": []
                                    },
                                    "expression": false,
                                    "generator": false,
                                    "id": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 467,
                                        "end": 472,
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false
                                      }
                                    ]
                                  }
                                }
                              }
                            ],
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 452,
                              "end": 455,
                              "name": "Foo"
                            },
                            "selfClosing": true
                          }
                        },
                        {
                          "type": "JSXText",
                          "start": 483,
                          "end": 490,
                          "raw": "\n      ",
                          "value": "\n      "
                        },
                        {
                          "type": "JSXElement",
                          "start": 490,
                          "end": 535,
                          "children": [],
                          "closingElement": null,
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "start": 490,
                            "end": 535,
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "start": 495,
                                "end": 507,
                                "name": {
                                  "type": "JSXIdentifier",
                                  "start": 495,
                                  "end": 507,
                                  "name": "renderNumber"
                                },
                                "value": null
                              },
                              {
                                "type": "JSXAttribute",
                                "start": 508,
                                "end": 532,
                                "name": {
                                  "type": "JSXIdentifier",
                                  "start": 508,
                                  "end": 516,
                                  "name": "children"
                                },
                                "value": {
                                  "type": "JSXExpressionContainer",
                                  "start": 517,
                                  "end": 532,
                                  "expression": {
                                    "type": "ArrowFunctionExpression",
                                    "start": 518,
                                    "end": 531,
                                    "async": false,
                                    "body": {
                                      "type": "BlockStatement",
                                      "start": 529,
                                      "end": 531,
                                      "body": []
                                    },
                                    "expression": false,
                                    "generator": false,
                                    "id": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 519,
                                        "end": 524,
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false
                                      }
                                    ]
                                  }
                                }
                              }
                            ],
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 491,
                              "end": 494,
                              "name": "Foo"
                            },
                            "selfClosing": true
                          }
                        },
                        {
                          "type": "JSXText",
                          "start": 535,
                          "end": 540,
                          "raw": "\n    ",
                          "value": "\n    "
                        }
                      ],
                      "closingFragment": {
                        "type": "JSXClosingFragment",
                        "start": 540,
                        "end": 543
                      },
                      "openingFragment": {
                        "type": "JSXOpeningFragment",
                        "start": 362,
                        "end": 364
                      }
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
