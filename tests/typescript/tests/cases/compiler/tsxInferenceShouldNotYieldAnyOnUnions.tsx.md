__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 44
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 45,
                "end": 47
              },
              "declare": false,
              "start": 27,
              "end": 47
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 47
          }
        ],
        "start": 14,
        "end": 49
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 61
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 63
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 62,
            "end": 63
          }
        ],
        "start": 61,
        "end": 64
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropsBase",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 76
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 77,
                  "end": 83
                }
              ],
              "start": 76,
              "end": 84
            },
            "start": 67,
            "end": 84
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropsWithConvert",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 103
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 105
                  },
                  "typeArguments": null,
                  "start": 104,
                  "end": 105
                }
              ],
              "start": 103,
              "end": 106
            },
            "start": 87,
            "end": 106
          }
        ],
        "start": 67,
        "end": 106
      },
      "declare": false,
      "start": 51,
      "end": 107
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropsBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 128
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 130
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 129,
            "end": 130
          }
        ],
        "start": 128,
        "end": 131
      },
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 142
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 144,
                  "end": 145
                },
                "typeArguments": null,
                "start": 144,
                "end": 145
              },
              "start": 142,
              "end": 145
            },
            "accessibility": null,
            "static": false,
            "start": 138,
            "end": 146
          }
        ],
        "start": 132,
        "end": 148
      },
      "declare": false,
      "start": 109,
      "end": 148
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropsWithConvert",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 176
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 178
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 177,
            "end": 178
          }
        ],
        "start": 176,
        "end": 179
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropsBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 197
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 198,
                  "end": 199
                },
                "typeArguments": null,
                "start": 198,
                "end": 199
              }
            ],
            "start": 197,
            "end": 200
          },
          "start": 188,
          "end": 200
        }
      ],
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
              "name": "convert",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 214
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 220,
                          "end": 221
                        },
                        "typeArguments": null,
                        "start": 220,
                        "end": 221
                      },
                      "start": 218,
                      "end": 221
                    },
                    "start": 217,
                    "end": 221
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 226,
                    "end": 232
                  },
                  "start": 223,
                  "end": 232
                },
                "start": 216,
                "end": 232
              },
              "start": 214,
              "end": 232
            },
            "accessibility": null,
            "static": false,
            "start": 207,
            "end": 233
          }
        ],
        "start": 201,
        "end": 235
      },
      "declare": false,
      "start": 150,
      "end": 235
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ShouldInferFromData",
        "optional": false,
        "typeAnnotation": null,
        "start": 246,
        "end": 265
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 267
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 266,
            "end": 267
          }
        ],
        "start": 265,
        "end": 268
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 276,
                "end": 281
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 282,
                      "end": 283
                    },
                    "typeArguments": null,
                    "start": 282,
                    "end": 283
                  }
                ],
                "start": 281,
                "end": 284
              },
              "start": 276,
              "end": 284
            },
            "start": 274,
            "end": 284
          },
          "start": 269,
          "end": 284
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 290
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 298
            },
            "start": 287,
            "end": 298
          },
          "typeArguments": null,
          "start": 287,
          "end": 298
        },
        "start": 285,
        "end": 298
      },
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
                  "start": 313,
                  "end": 316
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true,
                "start": 312,
                "end": 319
              },
              "children": [],
              "closingElement": null,
              "start": 312,
              "end": 319
            },
            "start": 305,
            "end": 320
          }
        ],
        "start": 299,
        "end": 322
      },
      "expression": false,
      "start": 237,
      "end": 322
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "ShouldInferFromData",
          "optional": false,
          "typeAnnotation": null,
          "start": 385,
          "end": 404
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 411
                },
                "value": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 413,
                  "end": 416
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 407,
                "end": 416
              }
            ],
            "start": 405,
            "end": 418
          }
        ],
        "optional": false,
        "start": 385,
        "end": 419
      },
      "directive": null,
      "start": 385,
      "end": 420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "ShouldInferFromData",
          "optional": false,
          "typeAnnotation": null,
          "start": 421,
          "end": 440
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 443,
                  "end": 447
                },
                "value": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 449,
                  "end": 452
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 443,
                "end": 452
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "convert",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 454,
                  "end": 461
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 463,
                      "end": 464
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 468,
                      "end": 470
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 473,
                      "end": 474
                    },
                    "start": 468,
                    "end": 474
                  },
                  "id": null,
                  "generator": false,
                  "start": 463,
                  "end": 474
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 454,
                "end": 474
              }
            ],
            "start": 441,
            "end": 476
          }
        ],
        "optional": false,
        "start": 421,
        "end": 477
      },
      "directive": null,
      "start": 421,
      "end": 478
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "ShouldInferFromData",
          "optional": false,
          "typeAnnotation": null,
          "start": 479,
          "end": 498
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 501,
                  "end": 505
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 507,
                  "end": 508
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 501,
                "end": 508
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "convert",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 510,
                  "end": 517
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 519,
                      "end": 520
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 524,
                      "end": 526
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 529,
                      "end": 530
                    },
                    "start": 524,
                    "end": 530
                  },
                  "id": null,
                  "generator": false,
                  "start": 519,
                  "end": 530
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 510,
                "end": 530
              }
            ],
            "start": 499,
            "end": 532
          }
        ],
        "optional": false,
        "start": 479,
        "end": 533
      },
      "directive": null,
      "start": 479,
      "end": 534
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 545
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ShouldInferFromData",
                "start": 549,
                "end": 568
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data",
                    "start": 569,
                    "end": 573
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 575,
                      "end": 578
                    },
                    "start": 574,
                    "end": 579
                  },
                  "start": 569,
                  "end": 579
                }
              ],
              "selfClosing": true,
              "start": 548,
              "end": 582
            },
            "children": [],
            "closingElement": null,
            "start": 548,
            "end": 582
          },
          "definite": false,
          "start": 543,
          "end": 582
        }
      ],
      "declare": false,
      "start": 537,
      "end": 583
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 590,
            "end": 592
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ShouldInferFromData",
                "start": 596,
                "end": 615
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data",
                    "start": 616,
                    "end": 620
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 622,
                      "end": 625
                    },
                    "start": 621,
                    "end": 626
                  },
                  "start": 616,
                  "end": 626
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "convert",
                    "start": 627,
                    "end": 634
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
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 636,
                          "end": 637
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 641,
                          "end": 643
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 646,
                          "end": 647
                        },
                        "start": 641,
                        "end": 647
                      },
                      "id": null,
                      "generator": false,
                      "start": 636,
                      "end": 647
                    },
                    "start": 635,
                    "end": 648
                  },
                  "start": 627,
                  "end": 648
                }
              ],
              "selfClosing": true,
              "start": 595,
              "end": 651
            },
            "children": [],
            "closingElement": null,
            "start": 595,
            "end": 651
          },
          "definite": false,
          "start": 590,
          "end": 651
        }
      ],
      "declare": false,
      "start": 584,
      "end": 652
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 659,
            "end": 661
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ShouldInferFromData",
                "start": 665,
                "end": 684
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data",
                    "start": 685,
                    "end": 689
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 691,
                      "end": 692
                    },
                    "start": 690,
                    "end": 693
                  },
                  "start": 685,
                  "end": 693
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "convert",
                    "start": 694,
                    "end": 701
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
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 703,
                          "end": 704
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 708,
                          "end": 710
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 713,
                          "end": 714
                        },
                        "start": 708,
                        "end": 714
                      },
                      "id": null,
                      "generator": false,
                      "start": 703,
                      "end": 714
                    },
                    "start": 702,
                    "end": 715
                  },
                  "start": 694,
                  "end": 715
                }
              ],
              "selfClosing": true,
              "start": 664,
              "end": 718
            },
            "children": [],
            "closingElement": null,
            "start": 664,
            "end": 718
          },
          "definite": false,
          "start": 659,
          "end": 718
        }
      ],
      "declare": false,
      "start": 653,
      "end": 719
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 719
}
```
