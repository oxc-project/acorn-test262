__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 981,
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
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 48,
        "name": "Greet",
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
          "start": 49,
          "end": 67,
          "name": "x",
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
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 57,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 58,
                    "end": 66,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 60,
                      "end": 66
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              },
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
              "children": [
                {
                  "type": "JSXText",
                  "start": 84,
                  "end": 91,
                  "value": "Hello, ",
                  "raw": "Hello, "
                },
                {
                  "type": "JSXExpressionContainer",
                  "start": 91,
                  "end": 94,
                  "expression": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 93,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
      "type": "ClassDeclaration",
      "start": 105,
      "end": 228,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 121,
        "name": "BigGreeter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 130,
        "end": 145,
        "object": {
          "type": "Identifier",
          "start": 130,
          "end": 135,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 136,
          "end": 145,
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
        "start": 169,
        "end": 228,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 172,
            "end": 207,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 178,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 207,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      },
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
                      "children": []
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
          },
          {
            "type": "PropertyDefinition",
            "start": 209,
            "end": 226,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 217,
              "name": "greeting",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 152,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 153,
                  "end": 161,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 155,
                    "end": 161
                  }
                },
                "accessibility": null,
                "static": false
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
      }
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
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 241,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 244,
            "end": 253,
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
      "start": 293,
      "end": 319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 297,
          "end": 318,
          "id": {
            "type": "Identifier",
            "start": 297,
            "end": 298,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 301,
            "end": 318,
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
                    "value": "k",
                    "raw": "\"k\""
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
      "start": 368,
      "end": 398,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 397,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 373,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 376,
            "end": 397,
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
                    "value": "myRef",
                    "raw": "\"myRef\""
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
      "start": 434,
      "end": 490,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 438,
          "end": 489,
          "id": {
            "type": "Identifier",
            "start": 438,
            "end": 439,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 442,
            "end": 489,
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 459,
                          "end": 460,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "CallExpression",
                        "start": 464,
                        "end": 485,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 464,
                          "end": 481,
                          "object": {
                            "type": "MemberExpression",
                            "start": 464,
                            "end": 474,
                            "object": {
                              "type": "Identifier",
                              "start": 464,
                              "end": 465,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 466,
                              "end": 474,
                              "name": "greeting",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 475,
                            "end": 481,
                            "name": "substr",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 482,
                            "end": 484,
                            "value": 10,
                            "raw": "10"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
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
      "start": 524,
      "end": 579,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 528,
          "end": 578,
          "id": {
            "type": "Identifier",
            "start": 528,
            "end": 529,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 532,
            "end": 578,
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 549,
                          "end": 550,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "CallExpression",
                        "start": 554,
                        "end": 574,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 554,
                          "end": 570,
                          "object": {
                            "type": "MemberExpression",
                            "start": 554,
                            "end": 564,
                            "object": {
                              "type": "Identifier",
                              "start": 554,
                              "end": 555,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 556,
                              "end": 564,
                              "name": "greeting",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 565,
                            "end": 570,
                            "name": "subtr",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 571,
                            "end": 573,
                            "value": 10,
                            "raw": "10"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
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
      "start": 626,
      "end": 679,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 630,
          "end": 678,
          "id": {
            "type": "Identifier",
            "start": 630,
            "end": 631,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 634,
            "end": 678,
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 651,
                          "end": 652,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "MemberExpression",
                        "start": 656,
                        "end": 674,
                        "object": {
                          "type": "Identifier",
                          "start": 656,
                          "end": 657,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 658,
                          "end": 674,
                          "name": "notARealProperty",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
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
      "start": 709,
      "end": 742,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 713,
          "end": 741,
          "id": {
            "type": "Identifier",
            "start": 713,
            "end": 714,
            "name": "g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 717,
            "end": 741,
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
                      "value": 100,
                      "raw": "100"
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
      "start": 804,
      "end": 843,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 808,
          "end": 842,
          "id": {
            "type": "Identifier",
            "start": 808,
            "end": 809,
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 812,
            "end": 842,
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 822,
                          "end": 823,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "MemberExpression",
                        "start": 827,
                        "end": 838,
                        "object": {
                          "type": "Identifier",
                          "start": 827,
                          "end": 828,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 829,
                          "end": 838,
                          "name": "innerText",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
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
      "start": 922,
      "end": 979,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 926,
          "end": 978,
          "id": {
            "type": "Identifier",
            "start": 926,
            "end": 927,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 930,
            "end": 978,
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 940,
                          "end": 941,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "MemberExpression",
                        "start": 945,
                        "end": 974,
                        "object": {
                          "type": "Identifier",
                          "start": 945,
                          "end": 946,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 947,
                          "end": 974,
                          "name": "propertyNotOnHtmlDivElement",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
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
