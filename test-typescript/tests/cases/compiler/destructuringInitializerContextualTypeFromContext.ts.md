__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 514,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 74,
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 74,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 28,
            "end": 72,
            "params": [
              {
                "type": "Identifier",
                "start": 29,
                "end": 58,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 34,
                  "end": 58,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 36,
                    "end": 58,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 36,
                        "end": 37,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 36,
                          "end": 37,
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 40,
                        "end": 58,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 42,
                            "end": 56,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 42,
                              "end": 50,
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": true,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 51,
                              "end": 56,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 53,
                                "end": 56
                              }
                            }
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 71,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 61,
                "end": 71,
                "types": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 61,
                    "end": 64
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 67,
                    "end": 71
                  }
                ]
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "SFC",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 20,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 18,
              "end": 20,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 76,
      "end": 155,
      "body": {
        "type": "TSInterfaceBody",
        "start": 92,
        "end": 155,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 98,
            "end": 153,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 102,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 152,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 104,
                "end": 152,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 104,
                    "end": 112,
                    "literal": {
                      "type": "Literal",
                      "start": 104,
                      "end": 112,
                      "raw": "\"Apollo\"",
                      "value": "Apollo"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 115,
                    "end": 124,
                    "literal": {
                      "type": "Literal",
                      "start": 115,
                      "end": 124,
                      "raw": "\"Artemis\"",
                      "value": "Artemis"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 127,
                    "end": 137,
                    "literal": {
                      "type": "Literal",
                      "start": 127,
                      "end": 137,
                      "raw": "\"Dionysus\"",
                      "value": "Dionysus"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 140,
                    "end": 152,
                    "literal": {
                      "type": "Literal",
                      "start": 140,
                      "end": 152,
                      "raw": "\"Persephone\"",
                      "value": "Persephone"
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 91,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 157,
      "end": 266,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 265,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 181,
            "decorators": [],
            "name": "Parent",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 169,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 171,
                "end": 181,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 174,
                  "end": 181,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 175,
                      "end": 180,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 175,
                        "end": 180,
                        "decorators": [],
                        "name": "Props",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 174,
                  "decorators": [],
                  "name": "SFC",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 184,
            "end": 265,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 242,
              "end": 265,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 248,
                  "end": 264,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 249,
                      "end": 253,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 253,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 253,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 255,
                      "end": 263,
                      "argument": {
                        "type": "Identifier",
                        "start": 258,
                        "end": 263,
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 242,
                "end": 247,
                "decorators": [],
                "name": "Child",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 185,
                "end": 237,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 191,
                    "end": 199,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 199,
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 199,
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 205,
                    "end": 221,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 209,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 205,
                      "end": 221,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 209,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 212,
                        "end": 221,
                        "raw": "\"Artemis\"",
                        "value": "Artemis"
                      },
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 227,
                    "end": 235,
                    "argument": {
                      "type": "Identifier",
                      "start": 230,
                      "end": 235,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ],
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 268,
      "end": 400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 399,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 291,
            "decorators": [],
            "name": "Child",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 279,
              "end": 291,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 281,
                "end": 291,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 284,
                  "end": 291,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 285,
                      "end": 290,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 285,
                        "end": 290,
                        "decorators": [],
                        "name": "Props",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 284,
                  "decorators": [],
                  "name": "SFC",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 294,
            "end": 399,
            "async": false,
            "body": {
              "type": "TemplateLiteral",
              "start": 352,
              "end": 399,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 361,
                  "end": 365,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "CallExpression",
                  "start": 376,
                  "end": 397,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 391,
                      "end": 396,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 376,
                    "end": 390,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 376,
                      "end": 380,
                      "decorators": [],
                      "name": "JSON",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 381,
                      "end": 390,
                      "decorators": [],
                      "name": "stringify",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 352,
                  "end": 361,
                  "tail": false,
                  "value": {
                    "cooked": "name: ",
                    "raw": "name: "
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 365,
                  "end": 376,
                  "tail": false,
                  "value": {
                    "cooked": " props: ",
                    "raw": " props: "
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 397,
                  "end": 399,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 295,
                "end": 347,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 301,
                    "end": 309,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 301,
                      "end": 309,
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 301,
                      "end": 309,
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 315,
                    "end": 331,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 319,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 315,
                      "end": 331,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 315,
                        "end": 319,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 322,
                        "end": 331,
                        "raw": "\"Artemis\"",
                        "value": "Artemis"
                      },
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 337,
                    "end": 345,
                    "argument": {
                      "type": "Identifier",
                      "start": 340,
                      "end": 345,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ],
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 424,
      "end": 475,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 442,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 443,
          "end": 468,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 444,
            "end": 468,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 446,
              "end": 468,
              "params": [
                {
                  "type": "Identifier",
                  "start": 447,
                  "end": 459,
                  "decorators": [],
                  "name": "as",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 449,
                    "end": 459,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 451,
                      "end": 459,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 451,
                        "end": 457
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 461,
                "end": 468,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 464,
                  "end": 468
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 469,
        "end": 475,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 471,
          "end": 475
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 476,
      "end": 514,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 476,
        "end": 514,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 478,
            "end": 513,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 504,
              "end": 513,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ArrayPattern",
                "start": 479,
                "end": 499,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 480,
                    "end": 482,
                    "decorators": [],
                    "name": "_1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "AssignmentPattern",
                    "start": 484,
                    "end": 498,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 484,
                      "end": 486,
                      "decorators": [],
                      "name": "_2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Identifier",
                      "start": 489,
                      "end": 498,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 476,
          "end": 477,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
