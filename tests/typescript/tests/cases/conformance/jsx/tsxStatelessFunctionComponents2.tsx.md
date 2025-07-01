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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Greet",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 48
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 57
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 60,
                      "end": 66
                    },
                    "start": 58,
                    "end": 66
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 53,
                  "end": 66
                }
              ],
              "start": 52,
              "end": 67
            },
            "start": 50,
            "end": 67
          },
          "start": 49,
          "end": 67
        }
      ],
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
                  "start": 80,
                  "end": 83
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 79,
                "end": 84
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "Hello, ",
                  "raw": "Hello, ",
                  "start": 84,
                  "end": 91
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 92,
                    "end": 93
                  },
                  "start": 91,
                  "end": 94
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 96,
                  "end": 99
                },
                "start": 94,
                "end": 100
              },
              "start": 79,
              "end": 100
            },
            "start": 72,
            "end": 101
          }
        ],
        "start": 69,
        "end": 103
      },
      "expression": false,
      "start": 34,
      "end": 103
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BigGreeter",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 121
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
          "start": 130,
          "end": 135
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 136,
          "end": 145
        },
        "optional": false,
        "computed": false,
        "start": 130,
        "end": 145
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 152
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 155,
                    "end": 161
                  },
                  "start": 153,
                  "end": 161
                },
                "accessibility": null,
                "static": false,
                "start": 148,
                "end": 161
              }
            ],
            "start": 146,
            "end": 163
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 165,
            "end": 167
          }
        ],
        "start": 145,
        "end": 168
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
              "start": 172,
              "end": 178
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
                          "start": 193,
                          "end": 196
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 192,
                        "end": 197
                      },
                      "children": [],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 199,
                          "end": 202
                        },
                        "start": 197,
                        "end": 203
                      },
                      "start": 192,
                      "end": 203
                    },
                    "start": 185,
                    "end": 204
                  }
                ],
                "start": 181,
                "end": 207
              },
              "expression": false,
              "start": 178,
              "end": 207
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 172,
            "end": 207
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "greeting",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 217
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 219,
                "end": 225
              },
              "start": 217,
              "end": 225
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 209,
            "end": 226
          }
        ],
        "start": 169,
        "end": 228
      },
      "abstract": false,
      "declare": false,
      "start": 105,
      "end": 228
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 241
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Greet",
                "start": 245,
                "end": 250
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 244,
              "end": 253
            },
            "children": [],
            "closingElement": null,
            "start": 244,
            "end": 253
          },
          "definite": false,
          "start": 240,
          "end": 253
        }
      ],
      "declare": false,
      "start": 236,
      "end": 254
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 298
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Greet",
                "start": 302,
                "end": 307
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 308,
                    "end": 311
                  },
                  "value": {
                    "type": "Literal",
                    "value": "k",
                    "raw": "\"k\"",
                    "start": 312,
                    "end": 315
                  },
                  "start": 308,
                  "end": 315
                }
              ],
              "selfClosing": true,
              "start": 301,
              "end": 318
            },
            "children": [],
            "closingElement": null,
            "start": 301,
            "end": 318
          },
          "definite": false,
          "start": 297,
          "end": 318
        }
      ],
      "declare": false,
      "start": 293,
      "end": 319
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 373
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Greet",
                "start": 377,
                "end": 382
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ref",
                    "start": 383,
                    "end": 386
                  },
                  "value": {
                    "type": "Literal",
                    "value": "myRef",
                    "raw": "\"myRef\"",
                    "start": 387,
                    "end": 394
                  },
                  "start": 383,
                  "end": 394
                }
              ],
              "selfClosing": true,
              "start": 376,
              "end": 397
            },
            "children": [],
            "closingElement": null,
            "start": 376,
            "end": 397
          },
          "definite": false,
          "start": 372,
          "end": 397
        }
      ],
      "declare": false,
      "start": 368,
      "end": 398
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 438,
            "end": 439
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "BigGreeter",
                "start": 443,
                "end": 453
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ref",
                    "start": 454,
                    "end": 457
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 459,
                          "end": 460
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 464,
                              "end": 465
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "greeting",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 466,
                              "end": 474
                            },
                            "optional": false,
                            "computed": false,
                            "start": 464,
                            "end": 474
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "substr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 475,
                            "end": 481
                          },
                          "optional": false,
                          "computed": false,
                          "start": 464,
                          "end": 481
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 482,
                            "end": 484
                          }
                        ],
                        "optional": false,
                        "start": 464,
                        "end": 485
                      },
                      "id": null,
                      "generator": false,
                      "start": 459,
                      "end": 485
                    },
                    "start": 458,
                    "end": 486
                  },
                  "start": 454,
                  "end": 486
                }
              ],
              "selfClosing": true,
              "start": 442,
              "end": 489
            },
            "children": [],
            "closingElement": null,
            "start": 442,
            "end": 489
          },
          "definite": false,
          "start": 438,
          "end": 489
        }
      ],
      "declare": false,
      "start": 434,
      "end": 490
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 528,
            "end": 529
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "BigGreeter",
                "start": 533,
                "end": 543
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ref",
                    "start": 544,
                    "end": 547
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 549,
                          "end": 550
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 554,
                              "end": 555
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "greeting",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 556,
                              "end": 564
                            },
                            "optional": false,
                            "computed": false,
                            "start": 554,
                            "end": 564
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "subtr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 565,
                            "end": 570
                          },
                          "optional": false,
                          "computed": false,
                          "start": 554,
                          "end": 570
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 571,
                            "end": 573
                          }
                        ],
                        "optional": false,
                        "start": 554,
                        "end": 574
                      },
                      "id": null,
                      "generator": false,
                      "start": 549,
                      "end": 574
                    },
                    "start": 548,
                    "end": 575
                  },
                  "start": 544,
                  "end": 575
                }
              ],
              "selfClosing": true,
              "start": 532,
              "end": 578
            },
            "children": [],
            "closingElement": null,
            "start": 532,
            "end": 578
          },
          "definite": false,
          "start": 528,
          "end": 578
        }
      ],
      "declare": false,
      "start": 524,
      "end": 579
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 630,
            "end": 631
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "BigGreeter",
                "start": 635,
                "end": 645
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ref",
                    "start": 646,
                    "end": 649
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 651,
                          "end": 652
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 656,
                          "end": 657
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "notARealProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 658,
                          "end": 674
                        },
                        "optional": false,
                        "computed": false,
                        "start": 656,
                        "end": 674
                      },
                      "id": null,
                      "generator": false,
                      "start": 651,
                      "end": 674
                    },
                    "start": 650,
                    "end": 675
                  },
                  "start": 646,
                  "end": 675
                }
              ],
              "selfClosing": true,
              "start": 634,
              "end": 678
            },
            "children": [],
            "closingElement": null,
            "start": 634,
            "end": 678
          },
          "definite": false,
          "start": 630,
          "end": 678
        }
      ],
      "declare": false,
      "start": 626,
      "end": 679
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 713,
            "end": 714
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "BigGreeter",
                "start": 718,
                "end": 728
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 729,
                    "end": 732
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 100,
                      "raw": "100",
                      "start": 734,
                      "end": 737
                    },
                    "start": 733,
                    "end": 738
                  },
                  "start": 729,
                  "end": 738
                }
              ],
              "selfClosing": true,
              "start": 717,
              "end": 741
            },
            "children": [],
            "closingElement": null,
            "start": 717,
            "end": 741
          },
          "definite": false,
          "start": 713,
          "end": 741
        }
      ],
      "declare": false,
      "start": 709,
      "end": 742
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 808,
            "end": 809
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 813,
                "end": 816
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ref",
                    "start": 817,
                    "end": 820
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 822,
                          "end": 823
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 827,
                          "end": 828
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "innerText",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 829,
                          "end": 838
                        },
                        "optional": false,
                        "computed": false,
                        "start": 827,
                        "end": 838
                      },
                      "id": null,
                      "generator": false,
                      "start": 822,
                      "end": 838
                    },
                    "start": 821,
                    "end": 839
                  },
                  "start": 817,
                  "end": 839
                }
              ],
              "selfClosing": true,
              "start": 812,
              "end": 842
            },
            "children": [],
            "closingElement": null,
            "start": 812,
            "end": 842
          },
          "definite": false,
          "start": 808,
          "end": 842
        }
      ],
      "declare": false,
      "start": 804,
      "end": 843
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 926,
            "end": 927
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 931,
                "end": 934
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ref",
                    "start": 935,
                    "end": 938
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 940,
                          "end": 941
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 945,
                          "end": 946
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "propertyNotOnHtmlDivElement",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 947,
                          "end": 974
                        },
                        "optional": false,
                        "computed": false,
                        "start": 945,
                        "end": 974
                      },
                      "id": null,
                      "generator": false,
                      "start": 940,
                      "end": 974
                    },
                    "start": 939,
                    "end": 975
                  },
                  "start": 935,
                  "end": 975
                }
              ],
              "selfClosing": true,
              "start": 930,
              "end": 978
            },
            "children": [],
            "closingElement": null,
            "start": 930,
            "end": 978
          },
          "definite": false,
          "start": 926,
          "end": 978
        }
      ],
      "declare": false,
      "start": 922,
      "end": 979
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 980
}
```
