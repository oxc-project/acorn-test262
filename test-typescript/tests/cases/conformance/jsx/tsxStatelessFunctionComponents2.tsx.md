__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 980,
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
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 103,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 103,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 72,
            "end": 101,
            "argument": {
              "type": "JSXElement",
              "start": 79,
              "end": 100,
              "children": [
                {
                  "type": "JSXText",
                  "start": 84,
                  "end": 91,
                  "raw": "Hello, ",
                  "value": "Hello, "
                },
                {
                  "type": "JSXExpressionContainer",
                  "start": 91,
                  "end": 94,
                  "expression": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 93,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 94,
                "end": 100,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 96,
                  "end": 99,
                  "name": "div"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 79,
                "end": 84,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 80,
                  "end": 83,
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
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 48,
        "decorators": [],
        "name": "Greet",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 49,
          "end": 67,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 67,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 52,
              "end": 67,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 53,
                  "end": 66,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 57,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 58,
                    "end": 66,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 60,
                      "end": 66
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 105,
      "end": 228,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 169,
        "end": 228,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 172,
            "end": 207,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 178,
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
              "start": 178,
              "end": 207,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 207,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 185,
                    "end": 204,
                    "argument": {
                      "type": "JSXElement",
                      "start": 192,
                      "end": 203,
                      "children": [],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 197,
                        "end": 203,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 199,
                          "end": 202,
                          "name": "div"
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 192,
                        "end": 197,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 193,
                          "end": 196,
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
          },
          {
            "type": "PropertyDefinition",
            "start": 209,
            "end": 226,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 217,
              "decorators": [],
              "name": "greeting",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 225,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 219,
                "end": 225
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 121,
        "decorators": [],
        "name": "BigGreeter",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 130,
        "end": 145,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 130,
          "end": 135,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 136,
          "end": 145,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 145,
        "end": 168,
        "params": [
          {
            "type": "TSTypeLiteral",
            "start": 146,
            "end": 163,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 148,
                "end": 161,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 152,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 153,
                  "end": 161,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 155,
                    "end": 161
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 165,
            "end": 167,
            "members": []
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 253,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 241,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 244,
            "end": 253,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 244,
              "end": 253,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 245,
                "end": 250,
                "name": "Greet"
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
      "start": 293,
      "end": 319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 297,
          "end": 318,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 297,
            "end": 298,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 301,
            "end": 318,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 301,
              "end": 318,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 308,
                  "end": 315,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 308,
                    "end": 311,
                    "name": "key"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 312,
                    "end": 315,
                    "raw": "\"k\"",
                    "value": "k"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 302,
                "end": 307,
                "name": "Greet"
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
      "start": 368,
      "end": 398,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 397,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 373,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 376,
            "end": 397,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 376,
              "end": 397,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 383,
                  "end": 394,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 383,
                    "end": 386,
                    "name": "ref"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 387,
                    "end": 394,
                    "raw": "\"myRef\"",
                    "value": "myRef"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 377,
                "end": 382,
                "name": "Greet"
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
      "start": 434,
      "end": 490,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 438,
          "end": 489,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 438,
            "end": 439,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 442,
            "end": 489,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 442,
              "end": 489,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 454,
                  "end": 486,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 454,
                    "end": 457,
                    "name": "ref"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 458,
                    "end": 486,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 459,
                      "end": 485,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 464,
                        "end": 485,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 482,
                            "end": 484,
                            "raw": "10",
                            "value": 10
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 464,
                          "end": 481,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 464,
                            "end": 474,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 464,
                              "end": 465,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 466,
                              "end": 474,
                              "decorators": [],
                              "name": "greeting",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 475,
                            "end": 481,
                            "decorators": [],
                            "name": "substr",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 459,
                          "end": 460,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 443,
                "end": 453,
                "name": "BigGreeter"
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
      "start": 524,
      "end": 579,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 528,
          "end": 578,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 528,
            "end": 529,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 532,
            "end": 578,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 532,
              "end": 578,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 544,
                  "end": 575,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 544,
                    "end": 547,
                    "name": "ref"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 548,
                    "end": 575,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 549,
                      "end": 574,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 554,
                        "end": 574,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 571,
                            "end": 573,
                            "raw": "10",
                            "value": 10
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 554,
                          "end": 570,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 554,
                            "end": 564,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 554,
                              "end": 555,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 556,
                              "end": 564,
                              "decorators": [],
                              "name": "greeting",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 565,
                            "end": 570,
                            "decorators": [],
                            "name": "subtr",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 549,
                          "end": 550,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 533,
                "end": 543,
                "name": "BigGreeter"
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
      "start": 626,
      "end": 679,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 630,
          "end": 678,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 630,
            "end": 631,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 634,
            "end": 678,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 634,
              "end": 678,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 646,
                  "end": 675,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 646,
                    "end": 649,
                    "name": "ref"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 650,
                    "end": 675,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 651,
                      "end": 674,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 656,
                        "end": 674,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 656,
                          "end": 657,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 658,
                          "end": 674,
                          "decorators": [],
                          "name": "notARealProperty",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 651,
                          "end": 652,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 635,
                "end": 645,
                "name": "BigGreeter"
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
      "start": 709,
      "end": 742,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 713,
          "end": 741,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 713,
            "end": 714,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 717,
            "end": 741,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 717,
              "end": 741,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 729,
                  "end": 738,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 729,
                    "end": 732,
                    "name": "key"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 733,
                    "end": 738,
                    "expression": {
                      "type": "Literal",
                      "start": 734,
                      "end": 737,
                      "raw": "100",
                      "value": 100
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 718,
                "end": 728,
                "name": "BigGreeter"
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
      "start": 804,
      "end": 843,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 808,
          "end": 842,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 808,
            "end": 809,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 812,
            "end": 842,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 812,
              "end": 842,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 817,
                  "end": 839,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 817,
                    "end": 820,
                    "name": "ref"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 821,
                    "end": 839,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 822,
                      "end": 838,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 827,
                        "end": 838,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 827,
                          "end": 828,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 829,
                          "end": 838,
                          "decorators": [],
                          "name": "innerText",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 822,
                          "end": 823,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 813,
                "end": 816,
                "name": "div"
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
      "start": 922,
      "end": 979,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 926,
          "end": 978,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 926,
            "end": 927,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 930,
            "end": 978,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 930,
              "end": 978,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 935,
                  "end": 975,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 935,
                    "end": 938,
                    "name": "ref"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 939,
                    "end": 975,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 940,
                      "end": 974,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 945,
                        "end": 974,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 945,
                          "end": 946,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 947,
                          "end": 974,
                          "decorators": [],
                          "name": "propertyNotOnHtmlDivElement",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 940,
                          "end": 941,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 931,
                "end": 934,
                "name": "div"
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
