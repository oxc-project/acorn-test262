file.tsx
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
        "decorators": [],
        "name": "React",
        "optional": false
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
      "type": "TSDeclareFunction",
      "start": 33,
      "end": 119,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 76,
        "decorators": [],
        "name": "ComponentWithTwoAttributes",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 82,
          "end": 104,
          "decorators": [],
          "name": "l",
          "optional": false,
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
                  "key": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 90,
                    "decorators": [],
                    "name": "key1",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "decorators": [],
                        "name": "K",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 95,
                  "end": 103,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 100,
                    "decorators": [],
                    "name": "value",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "decorators": [],
                        "name": "V",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
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
              "decorators": [],
              "name": "JSX",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 111,
              "end": 118,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 76,
        "end": 81,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 77,
            "end": 78,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 79,
            "end": 80,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 127,
      "end": 323,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 176,
                  "decorators": [],
                  "name": "a0",
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 179,
                  "end": 235,
                  "children": [],
                  "closingElement": null,
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
                            "decorators": [],
                            "name": "key1",
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
                            "decorators": [],
                            "name": "value",
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
                    "selfClosing": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 246,
                  "decorators": [],
                  "name": "a1",
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 249,
                  "end": 321,
                  "children": [],
                  "closingElement": null,
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
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 282,
                                "end": 286,
                                "decorators": [],
                                "name": "key1",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "start": 282,
                                "end": 286,
                                "decorators": [],
                                "name": "key1",
                                "optional": false
                              }
                            },
                            {
                              "type": "Property",
                              "start": 288,
                              "end": 300,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 288,
                                "end": 293,
                                "decorators": [],
                                "name": "value",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "start": 295,
                                "end": 300,
                                "decorators": [],
                                "name": "value",
                                "optional": false
                              }
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
                          "raw": "\"Component\"",
                          "value": "Component"
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 250,
                      "end": 276,
                      "name": "ComponentWithTwoAttributes"
                    },
                    "selfClosing": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 139,
        "decorators": [],
        "name": "Baz",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 145,
          "end": 152,
          "decorators": [],
          "name": "key1",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 154,
          "end": 162,
          "decorators": [],
          "name": "value",
          "optional": false,
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
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 139,
        "end": 144,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 140,
            "end": 141,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 142,
            "end": 143,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 325,
      "end": 390,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 342,
        "end": 346,
        "decorators": [],
        "name": "Link",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 350,
          "end": 375,
          "decorators": [],
          "name": "l",
          "optional": false,
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
                  "key": {
                    "type": "Identifier",
                    "start": 354,
                    "end": 358,
                    "decorators": [],
                    "name": "func",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 358,
                    "end": 374,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 360,
                      "end": 374,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 361,
                          "end": 367,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
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
                                "decorators": [],
                                "name": "U",
                                "optional": false
                              }
                            }
                          }
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
                  }
                }
              ]
            }
          }
        }
      ],
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
              "decorators": [],
              "name": "JSX",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 382,
              "end": 389,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 346,
        "end": 349,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 347,
            "end": 348,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 398,
      "end": 479,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 454,
                  "decorators": [],
                  "name": "o",
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 457,
                  "end": 477,
                  "children": [],
                  "closingElement": null,
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
                            "decorators": [],
                            "name": "func",
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
                    "selfClosing": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 407,
        "end": 417,
        "decorators": [],
        "name": "createLink",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 418,
          "end": 441,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 422,
            "end": 441,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 424,
              "end": 441,
              "params": [
                {
                  "type": "Identifier",
                  "start": 425,
                  "end": 434,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 426,
                    "end": 434,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 428,
                      "end": 434
                    }
                  }
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
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 481,
      "end": 566,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 540,
                  "end": 541,
                  "decorators": [],
                  "name": "o",
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 544,
                  "end": 564,
                  "children": [],
                  "closingElement": null,
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
                            "decorators": [],
                            "name": "func",
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
                    "selfClosing": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 490,
        "end": 501,
        "decorators": [],
        "name": "createLink1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 502,
          "end": 528,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 506,
            "end": 528,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 508,
              "end": 528,
              "params": [
                {
                  "type": "Identifier",
                  "start": 509,
                  "end": 518,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 510,
                    "end": 518,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 512,
                      "end": 518
                    }
                  }
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
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 568,
      "end": 666,
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
            "key": {
              "type": "Identifier",
              "start": 602,
              "end": 608,
              "decorators": [],
              "name": "values",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 608,
              "end": 618,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 610,
                "end": 618,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 610,
                  "end": 615,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 624,
            "end": 664,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 624,
              "end": 637,
              "decorators": [],
              "name": "selectHandler",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 637,
              "end": 663,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 639,
                "end": 663,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 640,
                    "end": 654,
                    "decorators": [],
                    "name": "selectedVal",
                    "optional": false,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
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
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 578,
        "end": 592,
        "decorators": [],
        "name": "InferParamProp",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 592,
        "end": 595,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 593,
            "end": 594,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 593,
              "end": 594,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 668,
      "end": 746,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 685,
        "end": 704,
        "decorators": [],
        "name": "InferParamComponent",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 708,
          "end": 731,
          "decorators": [],
          "name": "attr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 712,
            "end": 731,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 714,
              "end": 731,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 714,
                "end": 728,
                "decorators": [],
                "name": "InferParamProp",
                "optional": false
              }
            }
          }
        }
      ],
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
              "decorators": [],
              "name": "JSX",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 738,
              "end": 745,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 704,
        "end": 707,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 705,
            "end": 706,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 705,
              "end": 706,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 758,
            "end": 759,
            "decorators": [],
            "name": "i",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 762,
            "end": 836,
            "children": [],
            "closingElement": null,
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
                          "raw": "1",
                          "value": 1
                        },
                        {
                          "type": "Literal",
                          "start": 795,
                          "end": 796,
                          "raw": "2",
                          "value": 2
                        },
                        {
                          "type": "Literal",
                          "start": 798,
                          "end": 799,
                          "raw": "3",
                          "value": 3
                        },
                        {
                          "type": "Literal",
                          "start": 801,
                          "end": 802,
                          "raw": "4",
                          "value": 4
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
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 829,
                        "end": 832,
                        "body": []
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 821,
                          "end": 824,
                          "decorators": [],
                          "name": "val",
                          "optional": false
                        }
                      ]
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
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
