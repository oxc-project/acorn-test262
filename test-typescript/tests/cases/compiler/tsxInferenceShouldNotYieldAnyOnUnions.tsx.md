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
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
            "attributes": [],
            "exportKind": "type"
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
        "name": "Props",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "PropsBase",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "PropsWithConvert",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
        "name": "PropsBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "name": "PropsWithConvert",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": "PropsBase",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
              "name": "convert",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "t",
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
                          "name": "T",
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
        "name": "ShouldInferFromData",
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
          "start": 269,
          "end": 284,
          "name": "props",
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
                "name": "Props",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 313,
                  "end": 316,
                  "name": "div"
                },
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            }
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 291,
              "end": 298,
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
          "name": "ShouldInferFromData",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 411,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 413,
                  "end": 416,
                  "value": "1",
                  "raw": "\"1\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
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
          "name": "ShouldInferFromData",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 443,
                  "end": 447,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 449,
                  "end": 452,
                  "value": "1",
                  "raw": "\"1\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 454,
                "end": 474,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 454,
                  "end": 461,
                  "name": "convert",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 463,
                  "end": 474,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 463,
                      "end": 464,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
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
          "name": "ShouldInferFromData",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 505,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 507,
                  "end": 508,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 510,
                "end": 530,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 517,
                  "name": "convert",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 519,
                  "end": 530,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 519,
                      "end": 520,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 537,
      "end": 583,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 543,
          "end": 582,
          "id": {
            "type": "Identifier",
            "start": 543,
            "end": 545,
            "name": "f1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 548,
            "end": 582,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 548,
              "end": 582,
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
              "name": {
                "type": "JSXIdentifier",
                "start": 549,
                "end": 568,
                "name": "ShouldInferFromData"
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 584,
      "end": 652,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 590,
          "end": 651,
          "id": {
            "type": "Identifier",
            "start": 590,
            "end": 592,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 595,
            "end": 651,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 595,
              "end": 651,
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 636,
                          "end": 637,
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 596,
                "end": 615,
                "name": "ShouldInferFromData"
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 653,
      "end": 719,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 659,
          "end": 718,
          "id": {
            "type": "Identifier",
            "start": 659,
            "end": 661,
            "name": "f3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 664,
            "end": 718,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 664,
              "end": 718,
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 703,
                          "end": 704,
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 665,
                "end": 684,
                "name": "ShouldInferFromData"
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
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
