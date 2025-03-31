__ESTREE_TEST__:PASS:
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
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 82,
        "end": 98,
        "expression": {
          "type": "Literal",
          "start": 90,
          "end": 97,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 101,
      "end": 260,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 108,
        "end": 260,
        "id": {
          "type": "Identifier",
          "start": 113,
          "end": 118,
          "name": "Props",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
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
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 139,
                    "name": "renderNumber",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                        "value": false,
                        "raw": "false"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 149,
                  "end": 180,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 157,
                    "name": "children",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 157,
                    "end": 180,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 159,
                      "end": 180,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 160,
                          "end": 171,
                          "name": "arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 163,
                            "end": 171,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 165,
                              "end": 171
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                  },
                  "accessibility": null,
                  "static": false
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 195,
                    "end": 207,
                    "name": "renderNumber",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 221,
                  "end": 253,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 229,
                    "name": "children",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 229,
                    "end": 252,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 231,
                      "end": 252,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 232,
                          "end": 243,
                          "name": "arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 235,
                            "end": 243,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 237,
                              "end": 243
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 262,
      "end": 317,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 269,
        "end": 317,
        "id": {
          "type": "Identifier",
          "start": 286,
          "end": 289,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 290,
            "end": 302,
            "name": "props",
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
                  "name": "Props",
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
        "body": null,
        "declare": true,
        "typeParameters": null,
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
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 309,
                "end": 316,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 319,
      "end": 551,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 326,
        "end": 551,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 332,
            "end": 550,
            "id": {
              "type": "Identifier",
              "start": 332,
              "end": 336,
              "name": "Test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 339,
              "end": 550,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "openingFragment": {
                        "type": "JSXOpeningFragment",
                        "start": 362,
                        "end": 364
                      },
                      "closingFragment": {
                        "type": "JSXClosingFragment",
                        "start": 540,
                        "end": 543
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 364,
                          "end": 371,
                          "value": "\n      ",
                          "raw": "\n      "
                        },
                        {
                          "type": "JSXElement",
                          "start": 371,
                          "end": 397,
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
                            "selfClosing": false,
                            "typeArguments": null
                          },
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
                          "children": [
                            {
                              "type": "JSXExpressionContainer",
                              "start": 376,
                              "end": 391,
                              "expression": {
                                "type": "ArrowFunctionExpression",
                                "start": 377,
                                "end": 390,
                                "id": null,
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 378,
                                    "end": 383,
                                    "name": "value",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 388,
                                  "end": 390,
                                  "body": []
                                },
                                "typeParameters": null,
                                "returnType": null
                              }
                            }
                          ]
                        },
                        {
                          "type": "JSXText",
                          "start": 397,
                          "end": 404,
                          "value": "\n      ",
                          "raw": "\n      "
                        },
                        {
                          "type": "JSXElement",
                          "start": 404,
                          "end": 443,
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
                            "selfClosing": false,
                            "typeArguments": null
                          },
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
                          "children": [
                            {
                              "type": "JSXExpressionContainer",
                              "start": 422,
                              "end": 437,
                              "expression": {
                                "type": "ArrowFunctionExpression",
                                "start": 423,
                                "end": 436,
                                "id": null,
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 424,
                                    "end": 429,
                                    "name": "value",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 434,
                                  "end": 436,
                                  "body": []
                                },
                                "typeParameters": null,
                                "returnType": null
                              }
                            }
                          ]
                        },
                        {
                          "type": "JSXText",
                          "start": 443,
                          "end": 451,
                          "value": "\n\n      ",
                          "raw": "\n\n      "
                        },
                        {
                          "type": "JSXElement",
                          "start": 451,
                          "end": 483,
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
                                    "id": null,
                                    "expression": false,
                                    "generator": false,
                                    "async": false,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 467,
                                        "end": 472,
                                        "name": "value",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "body": {
                                      "type": "BlockStatement",
                                      "start": 477,
                                      "end": 479,
                                      "body": []
                                    },
                                    "typeParameters": null,
                                    "returnType": null
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
                            "selfClosing": true,
                            "typeArguments": null
                          },
                          "closingElement": null,
                          "children": []
                        },
                        {
                          "type": "JSXText",
                          "start": 483,
                          "end": 490,
                          "value": "\n      ",
                          "raw": "\n      "
                        },
                        {
                          "type": "JSXElement",
                          "start": 490,
                          "end": 535,
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
                                    "id": null,
                                    "expression": false,
                                    "generator": false,
                                    "async": false,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 519,
                                        "end": 524,
                                        "name": "value",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "body": {
                                      "type": "BlockStatement",
                                      "start": 529,
                                      "end": 531,
                                      "body": []
                                    },
                                    "typeParameters": null,
                                    "returnType": null
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
                            "selfClosing": true,
                            "typeArguments": null
                          },
                          "closingElement": null,
                          "children": []
                        },
                        {
                          "type": "JSXText",
                          "start": 535,
                          "end": 540,
                          "value": "\n    ",
                          "raw": "\n    "
                        }
                      ]
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
