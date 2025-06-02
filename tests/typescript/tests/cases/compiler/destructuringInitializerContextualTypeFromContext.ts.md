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
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 18,
              "end": 20,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 74,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 28,
            "end": 72,
            "typeParameters": null,
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 36,
                          "end": 37,
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 42,
                              "end": 50,
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 51,
                              "end": 56,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 53,
                                "end": 56
                              }
                            },
                            "accessibility": null,
                            "static": false
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 76,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 91,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 92,
        "end": 155,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 98,
            "end": 153,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 102,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
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
                      "value": "Apollo",
                      "raw": "\"Apollo\""
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
                      "value": "Artemis",
                      "raw": "\"Artemis\""
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
                      "value": "Dionysus",
                      "raw": "\"Dionysus\""
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
                      "value": "Persephone",
                      "raw": "\"Persephone\""
                    }
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
      "type": "VariableDeclaration",
      "start": 157,
      "end": 266,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 265,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 174,
                  "decorators": [],
                  "name": "SFC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 174,
                  "end": 181,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 175,
                      "end": 180,
                      "typeName": {
                        "type": "Identifier",
                        "start": 175,
                        "end": 180,
                        "decorators": [],
                        "name": "Props",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 184,
            "end": 265,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 185,
                "end": 237,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 191,
                    "end": 199,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 199,
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 199,
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 205,
                    "end": 221,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 209,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                      "right": {
                        "type": "Literal",
                        "start": 212,
                        "end": 221,
                        "value": "Artemis",
                        "raw": "\"Artemis\""
                      },
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 227,
                    "end": 235,
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "start": 230,
                      "end": 235,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 242,
              "end": 265,
              "callee": {
                "type": "Identifier",
                "start": 242,
                "end": 247,
                "decorators": [],
                "name": "Child",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 253,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 253,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
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
              "optional": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 268,
      "end": 400,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 399,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 284,
                  "decorators": [],
                  "name": "SFC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 284,
                  "end": 291,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 285,
                      "end": 290,
                      "typeName": {
                        "type": "Identifier",
                        "start": 285,
                        "end": 290,
                        "decorators": [],
                        "name": "Props",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 294,
            "end": 399,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 295,
                "end": 347,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 301,
                    "end": 309,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 301,
                      "end": 309,
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 301,
                      "end": 309,
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 315,
                    "end": 331,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 319,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                      "right": {
                        "type": "Literal",
                        "start": 322,
                        "end": 331,
                        "value": "Artemis",
                        "raw": "\"Artemis\""
                      },
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 337,
                    "end": 345,
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "start": 340,
                      "end": 345,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "TemplateLiteral",
              "start": 352,
              "end": 399,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 352,
                  "end": 361,
                  "value": {
                    "raw": "name: ",
                    "cooked": "name: "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 365,
                  "end": 376,
                  "value": {
                    "raw": " props: ",
                    "cooked": " props: "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 397,
                  "end": 399,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
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
                  "callee": {
                    "type": "MemberExpression",
                    "start": 376,
                    "end": 390,
                    "object": {
                      "type": "Identifier",
                      "start": 376,
                      "end": 380,
                      "decorators": [],
                      "name": "JSON",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 381,
                      "end": 390,
                      "decorators": [],
                      "name": "stringify",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
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
                  "optional": false
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 424,
      "end": 475,
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 442,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
              "typeParameters": null,
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
              }
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
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 476,
      "end": 514,
      "expression": {
        "type": "CallExpression",
        "start": 476,
        "end": 514,
        "callee": {
          "type": "Identifier",
          "start": 476,
          "end": 477,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 478,
            "end": 513,
            "expression": true,
            "async": false,
            "typeParameters": null,
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
                    "right": {
                      "type": "Identifier",
                      "start": 489,
                      "end": 498,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 504,
              "end": 513,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
