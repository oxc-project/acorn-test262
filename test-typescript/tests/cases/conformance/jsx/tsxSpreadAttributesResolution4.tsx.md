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
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 56,
        "name": "PoisonedProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 85,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 63,
            "end": 73,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 78,
            "end": 83,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": 2,
                  "raw": "2"
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
      "start": 87,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 101,
        "name": "Poisoned",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 110,
        "end": 125,
        "object": {
          "type": "Identifier",
          "start": 110,
          "end": 115,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 116,
          "end": 125,
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
        "start": 144,
        "end": 201,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 150,
            "end": 199,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 156,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 156,
              "end": 199,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      },
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 181,
                          "end": 186,
                          "value": "Hello",
                          "raw": "Hello"
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
        "start": 125,
        "end": 143,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 126,
            "end": 138,
            "typeName": {
              "type": "Identifier",
              "start": 126,
              "end": 138,
              "name": "PoisonedProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 140,
            "end": 142,
            "members": []
          }
        ]
      }
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
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 226,
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 212,
              "end": 226,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 214,
                "end": 226,
                "typeName": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 226,
                  "name": "PoisonedProp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 236,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 238,
                  "end": 251,
                  "value": "hello world",
                  "raw": "\"hello world\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 257,
                "end": 261,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 260,
                  "end": 261,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 277,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 280,
            "end": 301,
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
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 304,
      "end": 414,
      "id": {
        "type": "Identifier",
        "start": 310,
        "end": 319,
        "name": "EmptyProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 328,
        "end": 343,
        "object": {
          "type": "Identifier",
          "start": 328,
          "end": 333,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 334,
          "end": 343,
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
        "start": 352,
        "end": 414,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 358,
            "end": 412,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 358,
              "end": 364,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 364,
              "end": 412,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      },
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 389,
                          "end": 399,
                          "value": "Default hi",
                          "raw": "Default hi"
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
      }
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
          "id": {
            "type": "Identifier",
            "start": 426,
            "end": 432,
            "name": "j",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 427,
              "end": 432,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 429,
                "end": 432
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 438,
            "end": 440,
            "name": "e1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 443,
            "end": 464,
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
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 470,
            "end": 472,
            "name": "e2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 475,
            "end": 495,
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
                    "name": "j",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 500,
            "end": 502,
            "name": "e3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 505,
            "end": 571,
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 522,
                          "end": 525,
                          "name": "ref",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 527,
                          "end": 565,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 528,
                              "end": 533,
                              "name": "input",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 538,
                            "end": 565,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 540,
                                "end": 563,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 540,
                                  "end": 562,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 540,
                                    "end": 554,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 540,
                                      "end": 544
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 545,
                                      "end": 554,
                                      "name": "textInput",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 557,
                                    "end": 562,
                                    "name": "input",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "directive": null
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "kind": "init",
                        "optional": false
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
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 576,
            "end": 578,
            "name": "e4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 581,
            "end": 604,
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
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 609,
            "end": 611,
            "name": "e5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 614,
            "end": 653,
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Literal",
                          "start": 631,
                          "end": 642,
                          "value": "data-prop",
                          "raw": "\"data-prop\""
                        },
                        "value": {
                          "type": "Literal",
                          "start": 644,
                          "end": 648,
                          "value": true,
                          "raw": "true"
                        },
                        "kind": "init",
                        "optional": false
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
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
