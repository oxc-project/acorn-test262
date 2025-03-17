__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 837,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 31,
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
      "type": "TSDeclareFunction",
      "start": 33,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 76,
        "name": "ComponentWithTwoAttributes",
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
          "start": 82,
          "end": 104,
          "name": "l",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 83,
            "end": 104,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 85,
              "end": 104,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 86,
                  "end": 94,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 90,
                    "name": "key1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 92,
                      "end": 93,
                      "typeName": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 93,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 95,
                  "end": 103,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 100,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 100,
                    "end": 103,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 102,
                      "end": 103,
                      "typeName": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 103,
                        "name": "V",
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
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 76,
        "end": 81,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 77,
            "end": 78,
            "name": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 79,
            "end": 80,
            "name": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "name": "V",
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
        "start": 105,
        "end": 118,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 107,
          "end": 118,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 107,
            "end": 118,
            "left": {
              "type": "Identifier",
              "start": 107,
              "end": 110,
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 111,
              "end": 118,
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
      "type": "FunctionDeclaration",
      "start": 127,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 139,
        "name": "Baz",
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
          "start": 145,
          "end": 152,
          "name": "key1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 149,
            "end": 152,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 151,
              "end": 152,
              "typeName": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
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
        },
        {
          "type": "Identifier",
          "start": 154,
          "end": 162,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 159,
            "end": 162,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 161,
              "end": 162,
              "typeName": {
                "type": "Identifier",
                "start": 161,
                "end": 162,
                "name": "U",
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
      "body": {
        "type": "BlockStatement",
        "start": 164,
        "end": 323,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 170,
            "end": 235,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 174,
                "end": 235,
                "id": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 176,
                  "name": "a0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 179,
                  "end": 235,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 179,
                    "end": 235,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "start": 207,
                        "end": 218,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 207,
                          "end": 211,
                          "name": "key1"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 212,
                          "end": 218,
                          "expression": {
                            "type": "Identifier",
                            "start": 213,
                            "end": 217,
                            "name": "key1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 219,
                        "end": 232,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 219,
                          "end": 224,
                          "name": "value"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 225,
                          "end": 232,
                          "expression": {
                            "type": "Identifier",
                            "start": 226,
                            "end": 231,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 180,
                      "end": 206,
                      "name": "ComponentWithTwoAttributes"
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
            "start": 240,
            "end": 321,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 244,
                "end": 321,
                "id": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 246,
                  "name": "a1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 249,
                  "end": 321,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 249,
                    "end": 321,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 277,
                        "end": 302,
                        "argument": {
                          "type": "ObjectExpression",
                          "start": 281,
                          "end": 301,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 282,
                              "end": 286,
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 282,
                                "end": 286,
                                "name": "key1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 282,
                                "end": 286,
                                "name": "key1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 288,
                              "end": 300,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 288,
                                "end": 293,
                                "name": "value",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 295,
                                "end": 300,
                                "name": "value",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 303,
                        "end": 318,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 303,
                          "end": 306,
                          "name": "key"
                        },
                        "value": {
                          "type": "Literal",
                          "start": 307,
                          "end": 318,
                          "value": "Component",
                          "raw": "\"Component\""
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 250,
                      "end": 276,
                      "name": "ComponentWithTwoAttributes"
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
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 139,
        "end": 144,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 140,
            "end": 141,
            "name": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 142,
            "end": 143,
            "name": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "name": "U",
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
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 325,
      "end": 390,
      "id": {
        "type": "Identifier",
        "start": 342,
        "end": 346,
        "name": "Link",
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
          "start": 350,
          "end": 375,
          "name": "l",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 351,
            "end": 375,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 353,
              "end": 375,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 354,
                  "end": 374,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 354,
                    "end": 358,
                    "name": "func",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 358,
                    "end": 374,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 360,
                      "end": 374,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 361,
                          "end": 367,
                          "name": "arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 364,
                            "end": 367,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 366,
                              "end": 367,
                              "typeName": {
                                "type": "Identifier",
                                "start": 366,
                                "end": 367,
                                "name": "U",
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
                        "start": 368,
                        "end": 374,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 370,
                          "end": 374
                        }
                      }
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 346,
        "end": 349,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 347,
            "end": 348,
            "name": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
              "name": "U",
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
        "start": 376,
        "end": 389,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 378,
          "end": 389,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 378,
            "end": 389,
            "left": {
              "type": "Identifier",
              "start": 378,
              "end": 381,
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 382,
              "end": 389,
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
      "type": "FunctionDeclaration",
      "start": 398,
      "end": 479,
      "id": {
        "type": "Identifier",
        "start": 407,
        "end": 417,
        "name": "createLink",
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
          "start": 418,
          "end": 441,
          "name": "func",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 422,
            "end": 441,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 424,
              "end": 441,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 425,
                  "end": 434,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 426,
                    "end": 434,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 428,
                      "end": 434
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 435,
                "end": 441,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 437,
                  "end": 441
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 443,
        "end": 479,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 449,
            "end": 477,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 453,
                "end": 477,
                "id": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 454,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 457,
                  "end": 477,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 457,
                    "end": 477,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "start": 463,
                        "end": 474,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 463,
                          "end": 467,
                          "name": "func"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 468,
                          "end": 474,
                          "expression": {
                            "type": "Identifier",
                            "start": 469,
                            "end": 473,
                            "name": "func",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 458,
                      "end": 462,
                      "name": "Link"
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 481,
      "end": 566,
      "id": {
        "type": "Identifier",
        "start": 490,
        "end": 501,
        "name": "createLink1",
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
          "start": 502,
          "end": 528,
          "name": "func",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 506,
            "end": 528,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 508,
              "end": 528,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 509,
                  "end": 518,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 510,
                    "end": 518,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 512,
                      "end": 518
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 519,
                "end": 528,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 521,
                  "end": 528
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 530,
        "end": 566,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 536,
            "end": 564,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 540,
                "end": 564,
                "id": {
                  "type": "Identifier",
                  "start": 540,
                  "end": 541,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 544,
                  "end": 564,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 544,
                    "end": 564,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "start": 550,
                        "end": 561,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 550,
                          "end": 554,
                          "name": "func"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 555,
                          "end": 561,
                          "expression": {
                            "type": "Identifier",
                            "start": 556,
                            "end": 560,
                            "name": "func",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 545,
                      "end": 549,
                      "name": "Link"
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 568,
      "end": 666,
      "id": {
        "type": "Identifier",
        "start": 578,
        "end": 592,
        "name": "InferParamProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 592,
        "end": 595,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 593,
            "end": 594,
            "name": {
              "type": "Identifier",
              "start": 593,
              "end": 594,
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
        "start": 596,
        "end": 666,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 602,
            "end": 619,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 602,
              "end": 608,
              "name": "values",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 608,
              "end": 618,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 610,
                "end": 618,
                "typeName": {
                  "type": "Identifier",
                  "start": 610,
                  "end": 615,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 615,
                  "end": 618,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 616,
                      "end": 617,
                      "typeName": {
                        "type": "Identifier",
                        "start": 616,
                        "end": 617,
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 624,
            "end": 664,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 624,
              "end": 637,
              "name": "selectHandler",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 637,
              "end": 663,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 639,
                "end": 663,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 640,
                    "end": 654,
                    "name": "selectedVal",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 651,
                      "end": 654,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 653,
                        "end": 654,
                        "typeName": {
                          "type": "Identifier",
                          "start": 653,
                          "end": 654,
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
                  "start": 656,
                  "end": 663,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 659,
                    "end": 663
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
      "type": "TSDeclareFunction",
      "start": 668,
      "end": 746,
      "id": {
        "type": "Identifier",
        "start": 685,
        "end": 704,
        "name": "InferParamComponent",
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
          "start": 708,
          "end": 731,
          "name": "attr",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 712,
            "end": 731,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 714,
              "end": 731,
              "typeName": {
                "type": "Identifier",
                "start": 714,
                "end": 728,
                "name": "InferParamProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 728,
                "end": 731,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 729,
                    "end": 730,
                    "typeName": {
                      "type": "Identifier",
                      "start": 729,
                      "end": 730,
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 704,
        "end": 707,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 705,
            "end": 706,
            "name": {
              "type": "Identifier",
              "start": 705,
              "end": 706,
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
        "start": 732,
        "end": 745,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 734,
          "end": 745,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 734,
            "end": 745,
            "left": {
              "type": "Identifier",
              "start": 734,
              "end": 737,
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 738,
              "end": 745,
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
      "type": "VariableDeclaration",
      "start": 754,
      "end": 837,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 758,
          "end": 836,
          "id": {
            "type": "Identifier",
            "start": 758,
            "end": 759,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 762,
            "end": 836,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 762,
              "end": 836,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 783,
                  "end": 804,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 783,
                    "end": 789,
                    "name": "values"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 790,
                    "end": 804,
                    "expression": {
                      "type": "ArrayExpression",
                      "start": 791,
                      "end": 803,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 792,
                          "end": 793,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 795,
                          "end": 796,
                          "value": 2,
                          "raw": "2"
                        },
                        {
                          "type": "Literal",
                          "start": 798,
                          "end": 799,
                          "value": 3,
                          "raw": "3"
                        },
                        {
                          "type": "Literal",
                          "start": 801,
                          "end": 802,
                          "value": 4,
                          "raw": "4"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 805,
                  "end": 833,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 805,
                    "end": 818,
                    "name": "selectHandler"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 819,
                    "end": 833,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 820,
                      "end": 832,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 821,
                          "end": 824,
                          "name": "val",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 829,
                        "end": 832,
                        "body": []
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 763,
                "end": 782,
                "name": "InferParamComponent"
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
