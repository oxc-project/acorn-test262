__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SFC",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 18,
              "end": 20
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 14,
            "end": 20
          }
        ],
        "start": 13,
        "end": 21
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 36,
                          "end": 37
                        },
                        "typeArguments": null,
                        "start": 36,
                        "end": 37
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 42,
                              "end": 50
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 53,
                                "end": 56
                              },
                              "start": 51,
                              "end": 56
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 42,
                            "end": 56
                          }
                        ],
                        "start": 40,
                        "end": 58
                      }
                    ],
                    "start": 36,
                    "end": 58
                  },
                  "start": 34,
                  "end": 58
                },
                "start": 29,
                "end": 58
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 61,
                "end": 71
              },
              "start": 59,
              "end": 71
            },
            "start": 28,
            "end": 72
          }
        ],
        "start": 22,
        "end": 74
      },
      "declare": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 91
      },
      "typeParameters": null,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 102
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "Apollo",
                      "raw": "\"Apollo\"",
                      "start": 104,
                      "end": 112
                    },
                    "start": 104,
                    "end": 112
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "Artemis",
                      "raw": "\"Artemis\"",
                      "start": 115,
                      "end": 124
                    },
                    "start": 115,
                    "end": 124
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "Dionysus",
                      "raw": "\"Dionysus\"",
                      "start": 127,
                      "end": 137
                    },
                    "start": 127,
                    "end": 137
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "Persephone",
                      "raw": "\"Persephone\"",
                      "start": 140,
                      "end": 152
                    },
                    "start": 140,
                    "end": 152
                  }
                ],
                "start": 104,
                "end": 152
              },
              "start": 102,
              "end": 152
            },
            "accessibility": null,
            "static": false,
            "start": 98,
            "end": 153
          }
        ],
        "start": 92,
        "end": 155
      },
      "declare": false,
      "start": 76,
      "end": 155
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
            "name": "Parent",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SFC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 171,
                  "end": 174
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 175,
                        "end": 180
                      },
                      "typeArguments": null,
                      "start": 175,
                      "end": 180
                    }
                  ],
                  "start": 174,
                  "end": 181
                },
                "start": 171,
                "end": 181
              },
              "start": 169,
              "end": 181
            },
            "start": 163,
            "end": 181
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 191,
                      "end": 199
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 191,
                      "end": 199
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 191,
                    "end": 199
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 209
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 205,
                        "end": 209
                      },
                      "right": {
                        "type": "Literal",
                        "value": "Artemis",
                        "raw": "\"Artemis\"",
                        "start": 212,
                        "end": 221
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 221
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 205,
                    "end": 221
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 230,
                      "end": 235
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 227,
                    "end": 235
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 237
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Child",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 247
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 249,
                        "end": 253
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 249,
                        "end": 253
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 249,
                      "end": 253
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 258,
                        "end": 263
                      },
                      "start": 255,
                      "end": 263
                    }
                  ],
                  "start": 248,
                  "end": 264
                }
              ],
              "optional": false,
              "start": 242,
              "end": 265
            },
            "id": null,
            "generator": false,
            "start": 184,
            "end": 265
          },
          "definite": false,
          "start": 163,
          "end": 265
        }
      ],
      "declare": false,
      "start": 157,
      "end": 266
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
            "name": "Child",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SFC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 284
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 285,
                        "end": 290
                      },
                      "typeArguments": null,
                      "start": 285,
                      "end": 290
                    }
                  ],
                  "start": 284,
                  "end": 291
                },
                "start": 281,
                "end": 291
              },
              "start": 279,
              "end": 291
            },
            "start": 274,
            "end": 291
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 301,
                      "end": 309
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 301,
                      "end": 309
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 301,
                    "end": 309
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 319
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 315,
                        "end": 319
                      },
                      "right": {
                        "type": "Literal",
                        "value": "Artemis",
                        "raw": "\"Artemis\"",
                        "start": 322,
                        "end": 331
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 331
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 315,
                    "end": 331
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 340,
                      "end": 345
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 337,
                    "end": 345
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 295,
                "end": 347
              }
            ],
            "returnType": null,
            "body": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "name: ",
                    "cooked": "name: "
                  },
                  "tail": false,
                  "start": 352,
                  "end": 361
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " props: ",
                    "cooked": " props: "
                  },
                  "tail": false,
                  "start": 365,
                  "end": 376
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 397,
                  "end": 399
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 365
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "JSON",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 376,
                      "end": 380
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stringify",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 381,
                      "end": 390
                    },
                    "optional": false,
                    "computed": false,
                    "start": 376,
                    "end": 390
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 391,
                      "end": 396
                    }
                  ],
                  "optional": false,
                  "start": 376,
                  "end": 397
                }
              ],
              "start": 352,
              "end": 399
            },
            "id": null,
            "generator": false,
            "start": 294,
            "end": 399
          },
          "definite": false,
          "start": 274,
          "end": 399
        }
      ],
      "declare": false,
      "start": 268,
      "end": 400
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 441,
        "end": 442
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "as",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 451,
                        "end": 457
                      },
                      "start": 451,
                      "end": 459
                    },
                    "start": 449,
                    "end": 459
                  },
                  "start": 447,
                  "end": 459
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 464,
                  "end": 468
                },
                "start": 461,
                "end": 468
              },
              "start": 446,
              "end": 468
            },
            "start": 444,
            "end": 468
          },
          "start": 443,
          "end": 468
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 471,
          "end": 475
        },
        "start": 469,
        "end": 475
      },
      "body": null,
      "expression": false,
      "start": 424,
      "end": 475
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 476,
          "end": 477
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 480,
                    "end": 482
                  },
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 484,
                      "end": 486
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 489,
                      "end": 498
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 484,
                    "end": 498
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 479,
                "end": 499
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 513
            },
            "id": null,
            "generator": false,
            "start": 478,
            "end": 513
          }
        ],
        "optional": false,
        "start": 476,
        "end": 514
      },
      "directive": null,
      "start": 476,
      "end": 514
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 514
}
```
