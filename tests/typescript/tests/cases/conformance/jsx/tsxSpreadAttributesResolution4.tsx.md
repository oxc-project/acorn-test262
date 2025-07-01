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
        "name": "PoisonedProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 56
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 64
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
              },
              "start": 64,
              "end": 72
            },
            "accessibility": null,
            "static": false,
            "start": 63,
            "end": 73
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 81,
                  "end": 82
                },
                "start": 81,
                "end": 82
              },
              "start": 79,
              "end": 82
            },
            "accessibility": null,
            "static": false,
            "start": 78,
            "end": 83
          }
        ],
        "start": 57,
        "end": 85
      },
      "declare": false,
      "start": 34,
      "end": 85
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Poisoned",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 101
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
          "start": 110,
          "end": 115
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 116,
          "end": 125
        },
        "optional": false,
        "computed": false,
        "start": 110,
        "end": 125
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PoisonedProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 138
            },
            "typeArguments": null,
            "start": 126,
            "end": 138
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 140,
            "end": 142
          }
        ],
        "start": 125,
        "end": 143
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
              "start": 150,
              "end": 156
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
                          "name": "div",
                          "start": 177,
                          "end": 180
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 176,
                        "end": 181
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Hello",
                          "raw": "Hello",
                          "start": 181,
                          "end": 186
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 188,
                          "end": 191
                        },
                        "start": 186,
                        "end": 192
                      },
                      "start": 176,
                      "end": 192
                    },
                    "start": 169,
                    "end": 193
                  }
                ],
                "start": 159,
                "end": 199
              },
              "expression": false,
              "start": 156,
              "end": 199
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 150,
            "end": 199
          }
        ],
        "start": 144,
        "end": 201
      },
      "abstract": false,
      "declare": false,
      "start": 87,
      "end": 201
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PoisonedProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 214,
                  "end": 226
                },
                "typeArguments": null,
                "start": 214,
                "end": 226
              },
              "start": 212,
              "end": 226
            },
            "start": 209,
            "end": 226
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 236
                },
                "value": {
                  "type": "Literal",
                  "value": "hello world",
                  "raw": "\"hello world\"",
                  "start": 238,
                  "end": 251
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 235,
                "end": 251
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 258
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 260,
                  "end": 261
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 257,
                "end": 261
              }
            ],
            "start": 229,
            "end": 263
          },
          "definite": false,
          "start": 209,
          "end": 263
        }
      ],
      "declare": false,
      "start": 203,
      "end": 264
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 277
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Poisoned",
                "start": 281,
                "end": 289
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 297
                  },
                  "start": 290,
                  "end": 298
                }
              ],
              "selfClosing": true,
              "start": 280,
              "end": 301
            },
            "children": [],
            "closingElement": null,
            "start": 280,
            "end": 301
          },
          "definite": false,
          "start": 276,
          "end": 301
        }
      ],
      "declare": false,
      "start": 272,
      "end": 302
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmptyProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
        "end": 319
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
          "start": 328,
          "end": 333
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 334,
          "end": 343
        },
        "optional": false,
        "computed": false,
        "start": 328,
        "end": 343
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 344,
            "end": 346
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 348,
            "end": 350
          }
        ],
        "start": 343,
        "end": 351
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
              "start": 358,
              "end": 364
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
                          "name": "div",
                          "start": 385,
                          "end": 388
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 384,
                        "end": 389
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Default hi",
                          "raw": "Default hi",
                          "start": 389,
                          "end": 399
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 401,
                          "end": 404
                        },
                        "start": 399,
                        "end": 405
                      },
                      "start": 384,
                      "end": 405
                    },
                    "start": 377,
                    "end": 406
                  }
                ],
                "start": 367,
                "end": 412
              },
              "expression": false,
              "start": 364,
              "end": 412
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 358,
            "end": 412
          }
        ],
        "start": 352,
        "end": 414
      },
      "abstract": false,
      "declare": false,
      "start": 304,
      "end": 414
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 429,
                "end": 432
              },
              "start": 427,
              "end": 432
            },
            "start": 426,
            "end": 432
          },
          "init": null,
          "definite": false,
          "start": 426,
          "end": 432
        }
      ],
      "declare": false,
      "start": 422,
      "end": 433
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null,
            "start": 438,
            "end": 440
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptyProp",
                "start": 444,
                "end": 453
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 458,
                    "end": 460
                  },
                  "start": 454,
                  "end": 461
                }
              ],
              "selfClosing": true,
              "start": 443,
              "end": 464
            },
            "children": [],
            "closingElement": null,
            "start": 443,
            "end": 464
          },
          "definite": false,
          "start": 438,
          "end": 464
        }
      ],
      "declare": false,
      "start": 434,
      "end": 465
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 470,
            "end": 472
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptyProp",
                "start": 476,
                "end": 485
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 490,
                    "end": 491
                  },
                  "start": 486,
                  "end": 492
                }
              ],
              "selfClosing": true,
              "start": 475,
              "end": 495
            },
            "children": [],
            "closingElement": null,
            "start": 475,
            "end": 495
          },
          "definite": false,
          "start": 470,
          "end": 495
        }
      ],
      "declare": false,
      "start": 466,
      "end": 495
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e3",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 502
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptyProp",
                "start": 506,
                "end": 515
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ref",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 522,
                          "end": 525
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "input",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 528,
                              "end": 533
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 540,
                                      "end": 544
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "textInput",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 545,
                                      "end": 554
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 540,
                                    "end": 554
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "input",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 557,
                                    "end": 562
                                  },
                                  "start": 540,
                                  "end": 562
                                },
                                "directive": null,
                                "start": 540,
                                "end": 563
                              }
                            ],
                            "start": 538,
                            "end": 565
                          },
                          "id": null,
                          "generator": false,
                          "start": 527,
                          "end": 565
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 522,
                        "end": 565
                      }
                    ],
                    "start": 520,
                    "end": 567
                  },
                  "start": 516,
                  "end": 568
                }
              ],
              "selfClosing": true,
              "start": 505,
              "end": 571
            },
            "children": [],
            "closingElement": null,
            "start": 505,
            "end": 571
          },
          "definite": false,
          "start": 500,
          "end": 571
        }
      ],
      "declare": false,
      "start": 496,
      "end": 571
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e4",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 578
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptyProp",
                "start": 582,
                "end": 591
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data-prop",
                    "start": 592,
                    "end": 601
                  },
                  "value": null,
                  "start": 592,
                  "end": 601
                }
              ],
              "selfClosing": true,
              "start": 581,
              "end": 604
            },
            "children": [],
            "closingElement": null,
            "start": 581,
            "end": 604
          },
          "definite": false,
          "start": 576,
          "end": 604
        }
      ],
      "declare": false,
      "start": 572,
      "end": 604
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e5",
            "optional": false,
            "typeAnnotation": null,
            "start": 609,
            "end": 611
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptyProp",
                "start": 615,
                "end": 624
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Literal",
                          "value": "data-prop",
                          "raw": "\"data-prop\"",
                          "start": 631,
                          "end": 642
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 644,
                          "end": 648
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 631,
                        "end": 648
                      }
                    ],
                    "start": 629,
                    "end": 649
                  },
                  "start": 625,
                  "end": 650
                }
              ],
              "selfClosing": true,
              "start": 614,
              "end": 653
            },
            "children": [],
            "closingElement": null,
            "start": 614,
            "end": 653
          },
          "definite": false,
          "start": 609,
          "end": 653
        }
      ],
      "declare": false,
      "start": 605,
      "end": 653
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 653
}
```
