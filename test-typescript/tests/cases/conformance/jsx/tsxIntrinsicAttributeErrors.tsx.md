__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 493,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 383,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 383,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 28,
            "end": 49,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 45,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 46,
              "end": 49,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 54,
            "end": 105,
            "id": {
              "type": "Identifier",
              "start": 64,
              "end": 76,
              "name": "ElementClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 77,
              "end": 105,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 87,
                  "end": 99,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 93,
                    "name": "render",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 95,
                      "end": 98
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
            "start": 110,
            "end": 176,
            "id": {
              "type": "Identifier",
              "start": 120,
              "end": 139,
              "name": "IntrinsicAttributes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 140,
              "end": 176,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 150,
                  "end": 170,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 153,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 153,
                    "end": 170,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 155,
                      "end": 170,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 155,
                          "end": 161
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 164,
                          "end": 170
                        }
                      ]
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
            "start": 181,
            "end": 241,
            "id": {
              "type": "Identifier",
              "start": 191,
              "end": 215,
              "name": "IntrinsicClassAttributes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 215,
              "end": 218,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 216,
                  "end": 217,
                  "name": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 217,
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
              "start": 219,
              "end": 241,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 229,
                  "end": 235,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 232,
                    "name": "ref",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 232,
                    "end": 235,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 234,
                      "end": 235,
                      "typeName": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 235,
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
            "start": 246,
            "end": 381,
            "id": {
              "type": "Identifier",
              "start": 256,
              "end": 273,
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 274,
              "end": 381,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 284,
                  "end": 355,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 284,
                    "end": 287,
                    "name": "div",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 287,
                    "end": 355,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 289,
                      "end": 355,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 303,
                          "end": 317,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 303,
                            "end": 307,
                            "name": "text",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 308,
                            "end": 316,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 310,
                              "end": 316
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 330,
                          "end": 345,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 330,
                            "end": 335,
                            "name": "width",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 336,
                            "end": 344,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 338,
                              "end": 344
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 365,
                  "end": 375,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 369,
                    "name": "span",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 369,
                    "end": 374,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 371,
                      "end": 374
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 385,
      "end": 469,
      "id": {
        "type": "Identifier",
        "start": 395,
        "end": 396,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 397,
        "end": 469,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 403,
            "end": 467,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 407,
                "end": 416,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 408,
                  "end": 416,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 410,
                    "end": 416
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 417,
              "end": 467,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 419,
                "end": 467,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 429,
                    "end": 438,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 429,
                      "end": 430,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 430,
                      "end": 438,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 432,
                        "end": 438
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 447,
                    "end": 461,
                    "key": {
                      "type": "Identifier",
                      "start": 447,
                      "end": 453,
                      "name": "render",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 455,
                      "end": 461,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 457,
                        "end": 461
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 470,
      "end": 479,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 474,
          "end": 478,
          "id": {
            "type": "Identifier",
            "start": 474,
            "end": 478,
            "name": "E",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 475,
              "end": 478,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 477,
                "end": 478,
                "typeName": {
                  "type": "Identifier",
                  "start": 477,
                  "end": 478,
                  "name": "I",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 480,
      "end": 492,
      "expression": {
        "type": "JSXElement",
        "start": 480,
        "end": 492,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 480,
          "end": 492,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 483,
              "end": 489,
              "name": {
                "type": "JSXIdentifier",
                "start": 483,
                "end": 484,
                "name": "x"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 485,
                "end": 489,
                "expression": {
                  "type": "Literal",
                  "start": 486,
                  "end": 488,
                  "value": 10,
                  "raw": "10"
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 481,
            "end": 482,
            "name": "E"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
