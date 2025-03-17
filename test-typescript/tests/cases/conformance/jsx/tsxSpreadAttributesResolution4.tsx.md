__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 653,
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
      "end": 85,
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 85,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 63,
            "end": 73,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 78,
            "end": 83,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 82,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 81,
                "end": 82,
                "literal": {
                  "type": "Literal",
                  "start": 81,
                  "end": 82,
                  "raw": "2",
                  "value": 2
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
        "start": 44,
        "end": 56,
        "decorators": [],
        "name": "PoisonedProp",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 87,
      "end": 201,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 144,
        "end": 201,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 150,
            "end": 199,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 156,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 156,
              "end": 199,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 199,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 169,
                    "end": 193,
                    "argument": {
                      "type": "JSXElement",
                      "start": 176,
                      "end": 192,
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 181,
                          "end": 186,
                          "raw": "Hello",
                          "value": "Hello"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 186,
                        "end": 192,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 188,
                          "end": 191,
                          "name": "div"
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 176,
                        "end": 181,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 177,
                          "end": 180,
                          "name": "div"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 101,
        "decorators": [],
        "name": "Poisoned",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 110,
        "end": 125,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 110,
          "end": 115,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 116,
          "end": 125,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 125,
        "end": 143,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 126,
            "end": 138,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 126,
              "end": 138,
              "decorators": [],
              "name": "PoisonedProp",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 140,
            "end": 142,
            "members": []
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 203,
      "end": 264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 263,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 226,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 212,
              "end": 226,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 214,
                "end": 226,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 226,
                  "decorators": [],
                  "name": "PoisonedProp",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 229,
            "end": 263,
            "properties": [
              {
                "type": "Property",
                "start": 235,
                "end": 251,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 236,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 238,
                  "end": 251,
                  "raw": "\"hello world\"",
                  "value": "hello world"
                }
              },
              {
                "type": "Property",
                "start": 257,
                "end": 261,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 260,
                  "end": 261,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 272,
      "end": 302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 301,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 277,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 280,
            "end": 301,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 280,
              "end": 301,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 290,
                  "end": 298,
                  "argument": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 297,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 281,
                "end": 289,
                "name": "Poisoned"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 304,
      "end": 414,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 352,
        "end": 414,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 358,
            "end": 412,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 358,
              "end": 364,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 364,
              "end": 412,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 367,
                "end": 412,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 377,
                    "end": 406,
                    "argument": {
                      "type": "JSXElement",
                      "start": 384,
                      "end": 405,
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 389,
                          "end": 399,
                          "raw": "Default hi",
                          "value": "Default hi"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 399,
                        "end": 405,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 401,
                          "end": 404,
                          "name": "div"
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 384,
                        "end": 389,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 385,
                          "end": 388,
                          "name": "div"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 310,
        "end": 319,
        "decorators": [],
        "name": "EmptyProp",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 328,
        "end": 343,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 328,
          "end": 333,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 334,
          "end": 343,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 343,
        "end": 351,
        "params": [
          {
            "type": "TSTypeLiteral",
            "start": 344,
            "end": 346,
            "members": []
          },
          {
            "type": "TSTypeLiteral",
            "start": 348,
            "end": 350,
            "members": []
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 422,
      "end": 433,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 426,
          "end": 432,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 426,
            "end": 432,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 427,
              "end": 432,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 429,
                "end": 432
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 434,
      "end": 465,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 438,
          "end": 464,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 438,
            "end": 440,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 443,
            "end": 464,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 443,
              "end": 464,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 454,
                  "end": 461,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 458,
                    "end": 460,
                    "properties": []
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 444,
                "end": 453,
                "name": "EmptyProp"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 466,
      "end": 495,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 470,
          "end": 495,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 470,
            "end": 472,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 475,
            "end": 495,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 475,
              "end": 495,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 486,
                  "end": 492,
                  "argument": {
                    "type": "Identifier",
                    "start": 490,
                    "end": 491,
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 476,
                "end": 485,
                "name": "EmptyProp"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 496,
      "end": 571,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 500,
          "end": 571,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 500,
            "end": 502,
            "decorators": [],
            "name": "e3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 505,
            "end": 571,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 505,
              "end": 571,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 516,
                  "end": 568,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 520,
                    "end": 567,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 522,
                        "end": 565,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 522,
                          "end": 525,
                          "decorators": [],
                          "name": "ref",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 527,
                          "end": 565,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 538,
                            "end": 565,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 540,
                                "end": 563,
                                "directive": null,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 540,
                                  "end": 562,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 540,
                                    "end": 554,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 540,
                                      "end": 544
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 545,
                                      "end": 554,
                                      "decorators": [],
                                      "name": "textInput",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 557,
                                    "end": 562,
                                    "decorators": [],
                                    "name": "input",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 528,
                              "end": 533,
                              "decorators": [],
                              "name": "input",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ]
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 506,
                "end": 515,
                "name": "EmptyProp"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 572,
      "end": 604,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 576,
          "end": 604,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 576,
            "end": 578,
            "decorators": [],
            "name": "e4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 581,
            "end": 604,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 581,
              "end": 604,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 592,
                  "end": 601,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 592,
                    "end": 601,
                    "name": "data-prop"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 582,
                "end": 591,
                "name": "EmptyProp"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 605,
      "end": 653,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 609,
          "end": 653,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 609,
            "end": 611,
            "decorators": [],
            "name": "e5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 614,
            "end": 653,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 614,
              "end": 653,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 625,
                  "end": 650,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 629,
                    "end": 649,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 631,
                        "end": 648,
                        "computed": false,
                        "key": {
                          "type": "Literal",
                          "start": 631,
                          "end": 642,
                          "raw": "\"data-prop\"",
                          "value": "data-prop"
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 644,
                          "end": 648,
                          "raw": "true",
                          "value": true
                        }
                      }
                    ]
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 615,
                "end": 624,
                "name": "EmptyProp"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
