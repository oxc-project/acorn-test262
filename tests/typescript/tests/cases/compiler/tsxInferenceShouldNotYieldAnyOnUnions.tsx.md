__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 719,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 49,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 47,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 27,
              "end": 47,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 44,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 45,
                "end": 47,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 51,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 61,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 61,
        "end": 64,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 62,
            "end": 63,
            "name": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 67,
        "end": 106,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 67,
            "end": 84,
            "typeName": {
              "type": "Identifier",
              "start": 67,
              "end": 76,
              "decorators": [],
              "name": "PropsBase",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 76,
              "end": 84,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 77,
                  "end": 83
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 87,
            "end": 106,
            "typeName": {
              "type": "Identifier",
              "start": 87,
              "end": 103,
              "decorators": [],
              "name": "PropsWithConvert",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 103,
              "end": 106,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 104,
                  "end": 105,
                  "typeName": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 109,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 128,
        "decorators": [],
        "name": "PropsBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 128,
        "end": 131,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 129,
            "end": 130,
            "name": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 132,
        "end": 148,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 138,
            "end": 146,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 142,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 145,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 144,
                "end": 145,
                "typeName": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 145,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "TSInterfaceDeclaration",
      "start": 150,
      "end": 235,
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 176,
        "decorators": [],
        "name": "PropsWithConvert",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 176,
        "end": 179,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 177,
            "end": 178,
            "name": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 188,
          "end": 200,
          "expression": {
            "type": "Identifier",
            "start": 188,
            "end": 197,
            "decorators": [],
            "name": "PropsBase",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 197,
            "end": 200,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 198,
                "end": 199,
                "typeName": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 199,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 201,
        "end": 235,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 207,
            "end": 233,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 214,
              "decorators": [],
              "name": "convert",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 214,
              "end": 232,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 216,
                "end": 232,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 217,
                    "end": 221,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 218,
                      "end": 221,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 220,
                        "end": 221,
                        "typeName": {
                          "type": "Identifier",
                          "start": 220,
                          "end": 221,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 223,
                  "end": 232,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 226,
                    "end": 232
                  }
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
      "type": "FunctionDeclaration",
      "start": 237,
      "end": 322,
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 265,
        "decorators": [],
        "name": "ShouldInferFromData",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 265,
        "end": 268,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 266,
            "end": 267,
            "name": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 269,
          "end": 284,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 274,
            "end": 284,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 276,
              "end": 284,
              "typeName": {
                "type": "Identifier",
                "start": 276,
                "end": 281,
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 281,
                "end": 284,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 282,
                    "end": 283,
                    "typeName": {
                      "type": "Identifier",
                      "start": 282,
                      "end": 283,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 285,
        "end": 298,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 287,
          "end": 298,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 287,
            "end": 298,
            "left": {
              "type": "Identifier",
              "start": 287,
              "end": 290,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 291,
              "end": 298,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 299,
        "end": 322,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 305,
            "end": 320,
            "argument": {
              "type": "JSXElement",
              "start": 312,
              "end": 319,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 312,
                "end": 319,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 313,
                  "end": 316,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true
              },
              "children": [],
              "closingElement": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 385,
      "end": 420,
      "expression": {
        "type": "CallExpression",
        "start": 385,
        "end": 419,
        "callee": {
          "type": "Identifier",
          "start": 385,
          "end": 404,
          "decorators": [],
          "name": "ShouldInferFromData",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 405,
            "end": 418,
            "properties": [
              {
                "type": "Property",
                "start": 407,
                "end": 416,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 411,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 413,
                  "end": 416,
                  "value": "1",
                  "raw": "\"1\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 421,
      "end": 478,
      "expression": {
        "type": "CallExpression",
        "start": 421,
        "end": 477,
        "callee": {
          "type": "Identifier",
          "start": 421,
          "end": 440,
          "decorators": [],
          "name": "ShouldInferFromData",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 441,
            "end": 476,
            "properties": [
              {
                "type": "Property",
                "start": 443,
                "end": 452,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 443,
                  "end": 447,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 449,
                  "end": 452,
                  "value": "1",
                  "raw": "\"1\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 454,
                "end": 474,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 454,
                  "end": 461,
                  "decorators": [],
                  "name": "convert",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 463,
                  "end": 474,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 463,
                      "end": 464,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 468,
                    "end": 474,
                    "left": {
                      "type": "Literal",
                      "start": 468,
                      "end": 470,
                      "value": "",
                      "raw": "\"\""
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "start": 473,
                      "end": 474,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 479,
      "end": 534,
      "expression": {
        "type": "CallExpression",
        "start": 479,
        "end": 533,
        "callee": {
          "type": "Identifier",
          "start": 479,
          "end": 498,
          "decorators": [],
          "name": "ShouldInferFromData",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 499,
            "end": 532,
            "properties": [
              {
                "type": "Property",
                "start": 501,
                "end": 508,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 505,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 507,
                  "end": 508,
                  "value": 2,
                  "raw": "2"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 510,
                "end": 530,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 517,
                  "decorators": [],
                  "name": "convert",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 519,
                  "end": 530,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 519,
                      "end": 520,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 524,
                    "end": 530,
                    "left": {
                      "type": "Literal",
                      "start": 524,
                      "end": 526,
                      "value": "",
                      "raw": "\"\""
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "start": 529,
                      "end": 530,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 537,
      "end": 583,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 543,
          "end": 582,
          "id": {
            "type": "Identifier",
            "start": 543,
            "end": 545,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 548,
            "end": 582,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 548,
              "end": 582,
              "name": {
                "type": "JSXIdentifier",
                "start": 549,
                "end": 568,
                "name": "ShouldInferFromData"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 569,
                  "end": 579,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 569,
                    "end": 573,
                    "name": "data"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 574,
                    "end": 579,
                    "expression": {
                      "type": "Literal",
                      "start": 575,
                      "end": 578,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 584,
      "end": 652,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 590,
          "end": 651,
          "id": {
            "type": "Identifier",
            "start": 590,
            "end": 592,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 595,
            "end": 651,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 595,
              "end": 651,
              "name": {
                "type": "JSXIdentifier",
                "start": 596,
                "end": 615,
                "name": "ShouldInferFromData"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 616,
                  "end": 626,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 616,
                    "end": 620,
                    "name": "data"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 621,
                    "end": 626,
                    "expression": {
                      "type": "Literal",
                      "start": 622,
                      "end": 625,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 627,
                  "end": 648,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 627,
                    "end": 634,
                    "name": "convert"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 635,
                    "end": 648,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 636,
                      "end": 647,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 636,
                          "end": 637,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "start": 641,
                        "end": 647,
                        "left": {
                          "type": "Literal",
                          "start": 641,
                          "end": 643,
                          "value": "",
                          "raw": "\"\""
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 646,
                          "end": 647,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "id": null,
                      "generator": false
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 653,
      "end": 719,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 659,
          "end": 718,
          "id": {
            "type": "Identifier",
            "start": 659,
            "end": 661,
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 664,
            "end": 718,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 664,
              "end": 718,
              "name": {
                "type": "JSXIdentifier",
                "start": 665,
                "end": 684,
                "name": "ShouldInferFromData"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 685,
                  "end": 693,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 685,
                    "end": 689,
                    "name": "data"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 690,
                    "end": 693,
                    "expression": {
                      "type": "Literal",
                      "start": 691,
                      "end": 692,
                      "value": 2,
                      "raw": "2"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 694,
                  "end": 715,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 694,
                    "end": 701,
                    "name": "convert"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 702,
                    "end": 715,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 703,
                      "end": 714,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 703,
                          "end": 704,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "start": 708,
                        "end": 714,
                        "left": {
                          "type": "Literal",
                          "start": 708,
                          "end": 710,
                          "value": "",
                          "raw": "\"\""
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 713,
                          "end": 714,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "id": null,
                      "generator": false
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
