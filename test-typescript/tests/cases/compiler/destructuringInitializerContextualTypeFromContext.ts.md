__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 515,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "SFC",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "props",
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
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "name": "children",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                },
                "decorators": [],
                "optional": false
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
        "name": "Props",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 265,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 181,
            "name": "Parent",
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
                  "name": "SFC",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "Props",
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
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 184,
            "end": 265,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 185,
                "end": 237,
                "properties": [
                  {
                    "type": "Property",
                    "start": 191,
                    "end": 199,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 199,
                      "name": "children",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 199,
                      "name": "children",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 205,
                    "end": 221,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 209,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 205,
                      "end": 221,
                      "left": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 209,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 212,
                        "end": 221,
                        "value": "Artemis",
                        "raw": "\"Artemis\""
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 227,
                    "end": 235,
                    "argument": {
                      "type": "Identifier",
                      "start": 230,
                      "end": 235,
                      "name": "props",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 242,
              "end": 265,
              "callee": {
                "type": "Identifier",
                "start": 242,
                "end": 247,
                "name": "Child",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 253,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 253,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
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
                        "name": "props",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 291,
            "name": "Child",
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
                  "name": "SFC",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "Props",
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
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 294,
            "end": 399,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 295,
                "end": 347,
                "properties": [
                  {
                    "type": "Property",
                    "start": 301,
                    "end": 309,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 301,
                      "end": 309,
                      "name": "children",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 301,
                      "end": 309,
                      "name": "children",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 315,
                    "end": 331,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 319,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 315,
                      "end": 331,
                      "left": {
                        "type": "Identifier",
                        "start": 315,
                        "end": 319,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 322,
                        "end": 331,
                        "value": "Artemis",
                        "raw": "\"Artemis\""
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 337,
                    "end": 345,
                    "argument": {
                      "type": "Identifier",
                      "start": 340,
                      "end": 345,
                      "name": "props",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "TemplateLiteral",
              "start": 352,
              "end": 399,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 361,
                  "end": 365,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "JSON",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 381,
                      "end": 390,
                      "name": "stringify",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 391,
                      "end": 396,
                      "name": "props",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 352,
                  "end": 361,
                  "value": {
                    "cooked": "name: ",
                    "raw": "name: "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 365,
                  "end": 376,
                  "value": {
                    "cooked": " props: ",
                    "raw": " props: "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 397,
                  "end": 399,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "f",
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
          "start": 443,
          "end": 468,
          "name": "g",
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
                  "name": "as",
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
                  },
                  "decorators": [],
                  "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 469,
        "end": 475,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 471,
          "end": 475
        }
      }
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
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 478,
            "end": 513,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ArrayPattern",
                "start": 479,
                "end": 499,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 480,
                    "end": 482,
                    "name": "_1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "AssignmentPattern",
                    "start": 484,
                    "end": 498,
                    "left": {
                      "type": "Identifier",
                      "start": 484,
                      "end": 486,
                      "name": "_2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 489,
                      "end": 498,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 504,
              "end": 513,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
