__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1798,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 23,
        "name": "ActionsObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 30,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 29,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 29,
              "name": "State",
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
        "start": 31,
        "end": 79,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 37,
            "end": 77,
            "parameters": [
              {
                "type": "Identifier",
                "start": 38,
                "end": 50,
                "name": "prop",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 42,
                  "end": 50,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 44,
                    "end": 50
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 76,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 53,
                "end": 76,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 54,
                    "end": 66,
                    "name": "state",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 59,
                      "end": 66,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 61,
                        "end": 66,
                        "typeName": {
                          "type": "Identifier",
                          "start": 61,
                          "end": 66,
                          "name": "State",
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
                  "start": 68,
                  "end": 76,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 71,
                    "end": 76,
                    "typeName": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 76,
                      "name": "State",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 81,
      "end": 220,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 98,
        "name": "Options",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 98,
        "end": 114,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 99,
            "end": 104,
            "name": {
              "type": "Identifier",
              "start": 99,
              "end": 104,
              "name": "State",
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
            "start": 106,
            "end": 113,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 113,
              "name": "Actions",
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
        "start": 115,
        "end": 220,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 121,
            "end": 135,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 126,
              "name": "state",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 134,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 129,
                "end": 134,
                "typeName": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 134,
                  "name": "State",
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
            "start": 140,
            "end": 187,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 144,
              "name": "view",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 186,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 147,
                "end": 186,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 148,
                    "end": 160,
                    "name": "state",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 153,
                      "end": 160,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 155,
                        "end": 160,
                        "typeName": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 160,
                          "name": "State",
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
                    "start": 162,
                    "end": 178,
                    "name": "actions",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 169,
                      "end": 178,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 171,
                        "end": 178,
                        "typeName": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 178,
                          "name": "Actions",
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
                  "start": 180,
                  "end": 186,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 183,
                    "end": 186
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 192,
            "end": 218,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 199,
              "name": "actions",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 217,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 201,
                "end": 217,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 201,
                    "end": 207
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 210,
                    "end": 217,
                    "typeName": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 217,
                      "name": "Actions",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
      "type": "TSDeclareFunction",
      "start": 222,
      "end": 324,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 242,
        "name": "app",
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
          "start": 288,
          "end": 316,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 291,
            "end": 316,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 293,
              "end": 316,
              "typeName": {
                "type": "Identifier",
                "start": 293,
                "end": 300,
                "name": "Options",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 300,
                "end": 316,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 301,
                    "end": 306,
                    "typeName": {
                      "type": "Identifier",
                      "start": 301,
                      "end": 306,
                      "name": "State",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 308,
                    "end": 315,
                    "typeName": {
                      "type": "Identifier",
                      "start": 308,
                      "end": 315,
                      "name": "Actions",
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
        "start": 242,
        "end": 287,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 243,
            "end": 248,
            "name": {
              "type": "Identifier",
              "start": 243,
              "end": 248,
              "name": "State",
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
            "start": 250,
            "end": 286,
            "name": {
              "type": "Identifier",
              "start": 250,
              "end": 257,
              "name": "Actions",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 266,
              "end": 286,
              "typeName": {
                "type": "Identifier",
                "start": 266,
                "end": 279,
                "name": "ActionsObject",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 279,
                "end": 286,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 280,
                    "end": 285,
                    "typeName": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 285,
                      "name": "State",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 317,
        "end": 323,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 319,
          "end": 323
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 326,
      "end": 467,
      "expression": {
        "type": "CallExpression",
        "start": 326,
        "end": 466,
        "callee": {
          "type": "Identifier",
          "start": 326,
          "end": 329,
          "name": "app",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 330,
            "end": 465,
            "properties": [
              {
                "type": "Property",
                "start": 336,
                "end": 346,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 341,
                  "name": "state",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 343,
                  "end": 346,
                  "value": 100,
                  "raw": "100"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 352,
                "end": 424,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 359,
                  "name": "actions",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 361,
                  "end": 424,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 371,
                      "end": 382,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 371,
                        "end": 374,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 376,
                        "end": 382,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 376,
                            "end": 377,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "Identifier",
                          "start": 381,
                          "end": 382,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 430,
                "end": 462,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 430,
                  "end": 434,
                  "name": "view",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 436,
                  "end": 462,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 437,
                      "end": 438,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 440,
                      "end": 441,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "TSAsExpression",
                    "start": 446,
                    "end": 462,
                    "expression": {
                      "type": "Identifier",
                      "start": 446,
                      "end": 455,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 459,
                      "end": 462
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
      "type": "TSInterfaceDeclaration",
      "start": 470,
      "end": 517,
      "id": {
        "type": "Identifier",
        "start": 480,
        "end": 483,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 484,
        "end": 517,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 490,
            "end": 515,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 490,
              "end": 493,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 493,
              "end": 514,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 495,
                "end": 514,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 496,
                    "end": 505,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 497,
                      "end": 505,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 499,
                        "end": 505
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 507,
                  "end": 514,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 510,
                    "end": 514
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
      "start": 519,
      "end": 573,
      "id": {
        "type": "Identifier",
        "start": 536,
        "end": 539,
        "name": "foo",
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
          "start": 555,
          "end": 568,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 556,
            "end": 568,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 558,
              "end": 568,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 558,
                  "end": 564
                },
                {
                  "type": "TSTypeReference",
                  "start": 567,
                  "end": 568,
                  "typeName": {
                    "type": "Identifier",
                    "start": 567,
                    "end": 568,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
        "start": 539,
        "end": 554,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 540,
            "end": 553,
            "name": {
              "type": "Identifier",
              "start": 540,
              "end": 541,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 550,
              "end": 553,
              "typeName": {
                "type": "Identifier",
                "start": 550,
                "end": 553,
                "name": "Bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 569,
        "end": 572,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 571,
          "end": 572,
          "typeName": {
            "type": "Identifier",
            "start": 571,
            "end": 572,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 575,
      "end": 647,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 581,
          "end": 646,
          "id": {
            "type": "Identifier",
            "start": 581,
            "end": 582,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 585,
            "end": 646,
            "callee": {
              "type": "Identifier",
              "start": 585,
              "end": 588,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 589,
                "end": 645,
                "properties": [
                  {
                    "type": "Property",
                    "start": 595,
                    "end": 643,
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 595,
                      "end": 598,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 598,
                      "end": 643,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 599,
                          "end": 600,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 602,
                        "end": 643,
                        "body": []
                      },
                      "declare": false,
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 649,
      "end": 781,
      "id": {
        "type": "Identifier",
        "start": 659,
        "end": 667,
        "name": "Options2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 667,
        "end": 683,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 668,
            "end": 673,
            "name": {
              "type": "Identifier",
              "start": 668,
              "end": 673,
              "name": "State",
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
            "start": 675,
            "end": 682,
            "name": {
              "type": "Identifier",
              "start": 675,
              "end": 682,
              "name": "Actions",
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
        "start": 684,
        "end": 781,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 690,
            "end": 704,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 690,
              "end": 695,
              "name": "state",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 696,
              "end": 703,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 698,
                "end": 703,
                "typeName": {
                  "type": "Identifier",
                  "start": 698,
                  "end": 703,
                  "name": "State",
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
            "start": 709,
            "end": 756,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 709,
              "end": 713,
              "name": "view",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 714,
              "end": 755,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 716,
                "end": 755,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 717,
                    "end": 729,
                    "name": "state",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 722,
                      "end": 729,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 724,
                        "end": 729,
                        "typeName": {
                          "type": "Identifier",
                          "start": 724,
                          "end": 729,
                          "name": "State",
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
                    "start": 731,
                    "end": 747,
                    "name": "actions",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 738,
                      "end": 747,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 740,
                        "end": 747,
                        "typeName": {
                          "type": "Identifier",
                          "start": 740,
                          "end": 747,
                          "name": "Actions",
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
                  "start": 749,
                  "end": 755,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 752,
                    "end": 755
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 761,
            "end": 779,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 761,
              "end": 768,
              "name": "actions",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 769,
              "end": 778,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 771,
                "end": 778,
                "typeName": {
                  "type": "Identifier",
                  "start": 771,
                  "end": 778,
                  "name": "Actions",
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
      "type": "TSDeclareFunction",
      "start": 783,
      "end": 887,
      "id": {
        "type": "Identifier",
        "start": 800,
        "end": 804,
        "name": "app2",
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
          "start": 850,
          "end": 879,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 853,
            "end": 879,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 855,
              "end": 879,
              "typeName": {
                "type": "Identifier",
                "start": 855,
                "end": 863,
                "name": "Options2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 863,
                "end": 879,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 864,
                    "end": 869,
                    "typeName": {
                      "type": "Identifier",
                      "start": 864,
                      "end": 869,
                      "name": "State",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 871,
                    "end": 878,
                    "typeName": {
                      "type": "Identifier",
                      "start": 871,
                      "end": 878,
                      "name": "Actions",
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
        "start": 804,
        "end": 849,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 805,
            "end": 810,
            "name": {
              "type": "Identifier",
              "start": 805,
              "end": 810,
              "name": "State",
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
            "start": 812,
            "end": 848,
            "name": {
              "type": "Identifier",
              "start": 812,
              "end": 819,
              "name": "Actions",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 828,
              "end": 848,
              "typeName": {
                "type": "Identifier",
                "start": 828,
                "end": 841,
                "name": "ActionsObject",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 841,
                "end": 848,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 842,
                    "end": 847,
                    "typeName": {
                      "type": "Identifier",
                      "start": 842,
                      "end": 847,
                      "name": "State",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 880,
        "end": 886,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 882,
          "end": 886
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 889,
      "end": 1031,
      "expression": {
        "type": "CallExpression",
        "start": 889,
        "end": 1030,
        "callee": {
          "type": "Identifier",
          "start": 889,
          "end": 893,
          "name": "app2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 894,
            "end": 1029,
            "properties": [
              {
                "type": "Property",
                "start": 900,
                "end": 910,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 900,
                  "end": 905,
                  "name": "state",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 907,
                  "end": 910,
                  "value": 100,
                  "raw": "100"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 916,
                "end": 988,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 916,
                  "end": 923,
                  "name": "actions",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 925,
                  "end": 988,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 935,
                      "end": 946,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 935,
                        "end": 938,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 940,
                        "end": 946,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 940,
                            "end": 941,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "Identifier",
                          "start": 945,
                          "end": 946,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 994,
                "end": 1026,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 994,
                  "end": 998,
                  "name": "view",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1000,
                  "end": 1026,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1001,
                      "end": 1002,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1004,
                      "end": 1005,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "TSAsExpression",
                    "start": 1010,
                    "end": 1026,
                    "expression": {
                      "type": "Identifier",
                      "start": 1010,
                      "end": 1019,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1023,
                      "end": 1026
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
      "type": "TSTypeAliasDeclaration",
      "start": 1034,
      "end": 1089,
      "id": {
        "type": "Identifier",
        "start": 1039,
        "end": 1051,
        "name": "ActionsArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1051,
        "end": 1058,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1052,
            "end": 1057,
            "name": {
              "type": "Identifier",
              "start": 1052,
              "end": 1057,
              "name": "State",
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
        "type": "TSArrayType",
        "start": 1061,
        "end": 1088,
        "elementType": {
          "type": "TSFunctionType",
          "start": 1062,
          "end": 1085,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1063,
              "end": 1075,
              "name": "state",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1068,
                "end": 1075,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1070,
                  "end": 1075,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1070,
                    "end": 1075,
                    "name": "State",
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
            "start": 1077,
            "end": 1085,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1080,
              "end": 1085,
              "typeName": {
                "type": "Identifier",
                "start": 1080,
                "end": 1085,
                "name": "State",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1091,
      "end": 1193,
      "id": {
        "type": "Identifier",
        "start": 1108,
        "end": 1112,
        "name": "app3",
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
          "start": 1157,
          "end": 1185,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1160,
            "end": 1185,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1162,
              "end": 1185,
              "typeName": {
                "type": "Identifier",
                "start": 1162,
                "end": 1169,
                "name": "Options",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1169,
                "end": 1185,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1170,
                    "end": 1175,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1170,
                      "end": 1175,
                      "name": "State",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1177,
                    "end": 1184,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1177,
                      "end": 1184,
                      "name": "Actions",
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
        "start": 1112,
        "end": 1156,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1113,
            "end": 1118,
            "name": {
              "type": "Identifier",
              "start": 1113,
              "end": 1118,
              "name": "State",
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
            "start": 1120,
            "end": 1155,
            "name": {
              "type": "Identifier",
              "start": 1120,
              "end": 1127,
              "name": "Actions",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1136,
              "end": 1155,
              "typeName": {
                "type": "Identifier",
                "start": 1136,
                "end": 1148,
                "name": "ActionsArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1148,
                "end": 1155,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1149,
                    "end": 1154,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1149,
                      "end": 1154,
                      "name": "State",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1186,
        "end": 1192,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1188,
          "end": 1192
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1195,
      "end": 1332,
      "expression": {
        "type": "CallExpression",
        "start": 1195,
        "end": 1331,
        "callee": {
          "type": "Identifier",
          "start": 1195,
          "end": 1199,
          "name": "app3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1200,
            "end": 1330,
            "properties": [
              {
                "type": "Property",
                "start": 1206,
                "end": 1216,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1206,
                  "end": 1211,
                  "name": "state",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1213,
                  "end": 1216,
                  "value": 100,
                  "raw": "100"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1222,
                "end": 1289,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1222,
                  "end": 1229,
                  "name": "actions",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 1231,
                  "end": 1289,
                  "elements": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1241,
                      "end": 1247,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1241,
                          "end": 1242,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Identifier",
                        "start": 1246,
                        "end": 1247,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1295,
                "end": 1327,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1295,
                  "end": 1299,
                  "name": "view",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1301,
                  "end": 1327,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1302,
                      "end": 1303,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1305,
                      "end": 1306,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "TSAsExpression",
                    "start": 1311,
                    "end": 1327,
                    "expression": {
                      "type": "Identifier",
                      "start": 1311,
                      "end": 1320,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1324,
                      "end": 1327
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
      "type": "TSModuleDeclaration",
      "start": 1334,
      "end": 1425,
      "id": {
        "type": "Identifier",
        "start": 1344,
        "end": 1347,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1348,
        "end": 1425,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1354,
            "end": 1381,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1361,
              "end": 1381,
              "id": {
                "type": "Identifier",
                "start": 1371,
                "end": 1378,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1379,
                "end": 1381,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1386,
            "end": 1423,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1393,
              "end": 1423,
              "id": {
                "type": "Identifier",
                "start": 1403,
                "end": 1420,
                "name": "IntrinsicElements",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 1421,
                "end": 1423,
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
      "type": "TSInterfaceDeclaration",
      "start": 1427,
      "end": 1518,
      "id": {
        "type": "Identifier",
        "start": 1437,
        "end": 1452,
        "name": "ActionsObjectOr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1452,
        "end": 1459,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1453,
            "end": 1458,
            "name": {
              "type": "Identifier",
              "start": 1453,
              "end": 1458,
              "name": "State",
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
        "start": 1460,
        "end": 1518,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1466,
            "end": 1516,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1467,
                "end": 1479,
                "name": "prop",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1471,
                  "end": 1479,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1473,
                    "end": 1479
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1480,
              "end": 1515,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1482,
                "end": 1515,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 1483,
                    "end": 1506,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1484,
                        "end": 1496,
                        "name": "state",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1489,
                          "end": 1496,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1491,
                            "end": 1496,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1491,
                              "end": 1496,
                              "name": "State",
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
                      "start": 1498,
                      "end": 1506,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1501,
                        "end": 1506,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1501,
                          "end": 1506,
                          "name": "State",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1510,
                    "end": 1515,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1510,
                      "end": 1515,
                      "name": "State",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1520,
      "end": 1664,
      "id": {
        "type": "Identifier",
        "start": 1537,
        "end": 1541,
        "name": "App4",
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
          "start": 1589,
          "end": 1649,
          "name": "props",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1594,
            "end": 1649,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 1596,
              "end": 1649,
              "types": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 1596,
                  "end": 1630,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1596,
                    "end": 1619,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1596,
                      "end": 1603,
                      "name": "Options",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1603,
                      "end": 1619,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1604,
                          "end": 1609,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1604,
                            "end": 1609,
                            "name": "State",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1611,
                          "end": 1618,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1611,
                            "end": 1618,
                            "name": "Actions",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 1620,
                    "end": 1629,
                    "literal": {
                      "type": "Literal",
                      "start": 1620,
                      "end": 1629,
                      "value": "actions",
                      "raw": "\"actions\""
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 1633,
                  "end": 1649,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1635,
                      "end": 1647,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1635,
                        "end": 1640,
                        "name": "state",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1640,
                        "end": 1647,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1642,
                          "end": 1647,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1642,
                            "end": 1647,
                            "name": "State",
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
        "start": 1541,
        "end": 1588,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1542,
            "end": 1547,
            "name": {
              "type": "Identifier",
              "start": 1542,
              "end": 1547,
              "name": "State",
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
            "start": 1549,
            "end": 1587,
            "name": {
              "type": "Identifier",
              "start": 1549,
              "end": 1556,
              "name": "Actions",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1565,
              "end": 1587,
              "typeName": {
                "type": "Identifier",
                "start": 1565,
                "end": 1580,
                "name": "ActionsObjectOr",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1580,
                "end": 1587,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1581,
                    "end": 1586,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1581,
                      "end": 1586,
                      "name": "State",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1650,
        "end": 1663,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1652,
          "end": 1663,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 1652,
            "end": 1663,
            "left": {
              "type": "Identifier",
              "start": 1652,
              "end": 1655,
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 1656,
              "end": 1663,
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
      "start": 1666,
      "end": 1710,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1672,
          "end": 1709,
          "id": {
            "type": "Identifier",
            "start": 1672,
            "end": 1673,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1676,
            "end": 1709,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1676,
              "end": 1709,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 1682,
                  "end": 1693,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1682,
                    "end": 1687,
                    "name": "state"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 1688,
                    "end": 1693,
                    "expression": {
                      "type": "Literal",
                      "start": 1689,
                      "end": 1692,
                      "value": 100,
                      "raw": "100"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1694,
                  "end": 1706,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1694,
                    "end": 1697,
                    "name": "foo"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 1698,
                    "end": 1706,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1699,
                      "end": 1705,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1699,
                          "end": 1700,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Identifier",
                        "start": 1704,
                        "end": 1705,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
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
                "start": 1677,
                "end": 1681,
                "name": "App4"
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
