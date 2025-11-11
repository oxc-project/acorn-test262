__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 20,
                          "end": 21
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "foo",
                              "raw": "\"foo\"",
                              "start": 23,
                              "end": 28
                            },
                            "start": 23,
                            "end": 28
                          },
                          "start": 21,
                          "end": 28
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 20,
                        "end": 28
                      }
                    ],
                    "start": 18,
                    "end": 30
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 35,
                          "end": 36
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "bar",
                              "raw": "\"bar\"",
                              "start": 38,
                              "end": 43
                            },
                            "start": 38,
                            "end": 43
                          },
                          "start": 36,
                          "end": 43
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 35,
                        "end": 43
                      }
                    ],
                    "start": 33,
                    "end": 45
                  }
                ],
                "start": 18,
                "end": 45
              },
              "start": 16,
              "end": 45
            },
            "start": 14,
            "end": 45
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 45
        }
      ],
      "declare": true,
      "start": 0,
      "end": 46
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "el1",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 57
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 58
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 63
          },
          "definite": false,
          "start": 53,
          "end": 63
        }
      ],
      "declare": false,
      "start": 47,
      "end": 64
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 146,
                      "end": 152
                    },
                    "start": 146,
                    "end": 154
                  },
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "t",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 160,
                              "end": 161
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 163,
                                  "end": 166
                                },
                                "start": 163,
                                "end": 166
                              },
                              "start": 161,
                              "end": 166
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 160,
                            "end": 166
                          }
                        ],
                        "start": 158,
                        "end": 168
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "t",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 173,
                              "end": 174
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "b",
                                  "raw": "\"b\"",
                                  "start": 176,
                                  "end": 179
                                },
                                "start": 176,
                                "end": 179
                              },
                              "start": 174,
                              "end": 179
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 173,
                            "end": 179
                          }
                        ],
                        "start": 171,
                        "end": 181
                      }
                    ],
                    "start": 158,
                    "end": 181
                  }
                ],
                "start": 146,
                "end": 182
              },
              "start": 144,
              "end": 182
            },
            "start": 143,
            "end": 182
          },
          "init": null,
          "definite": false,
          "start": 143,
          "end": 182
        }
      ],
      "declare": true,
      "start": 131,
      "end": 183
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "el2",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 192
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 193
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 197
          },
          "definite": false,
          "start": 188,
          "end": 197
        }
      ],
      "declare": false,
      "start": 184,
      "end": 198
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "elem",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 221
            },
            "init": null,
            "definite": false,
            "start": 217,
            "end": 221
          }
        ],
        "declare": false,
        "start": 211,
        "end": 221
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 225,
        "end": 226
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "elem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 242
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 250
                },
                "optional": false,
                "computed": false,
                "start": 238,
                "end": 250
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 238,
              "end": 252
            },
            "directive": null,
            "start": 238,
            "end": 253
          }
        ],
        "start": 228,
        "end": 255
      },
      "start": 206,
      "end": 255
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 267
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 280
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "circle",
                      "raw": "\"circle\"",
                      "start": 282,
                      "end": 290
                    },
                    "start": 282,
                    "end": 290
                  },
                  "start": 280,
                  "end": 290
                },
                "accessibility": null,
                "static": false,
                "start": 276,
                "end": 291
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "radius",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 298
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 300,
                    "end": 306
                  },
                  "start": 298,
                  "end": 306
                },
                "accessibility": null,
                "static": false,
                "start": 292,
                "end": 306
              }
            ],
            "start": 274,
            "end": 308
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 315,
                  "end": 319
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "rectangle",
                      "raw": "\"rectangle\"",
                      "start": 321,
                      "end": 332
                    },
                    "start": 321,
                    "end": 332
                  },
                  "start": 319,
                  "end": 332
                },
                "accessibility": null,
                "static": false,
                "start": 315,
                "end": 333
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "width",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 339
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 341,
                    "end": 347
                  },
                  "start": 339,
                  "end": 347
                },
                "accessibility": null,
                "static": false,
                "start": 334,
                "end": 348
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "height",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 355
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 357,
                    "end": 363
                  },
                  "start": 355,
                  "end": 363
                },
                "accessibility": null,
                "static": false,
                "start": 349,
                "end": 363
              }
            ],
            "start": 313,
            "end": 365
          }
        ],
        "start": 272,
        "end": 365
      },
      "declare": false,
      "start": 257,
      "end": 366
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Circle",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 379
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Shape",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 387
            },
            "typeArguments": null,
            "start": 382,
            "end": 387
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 396
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "circle",
                      "raw": "\"circle\"",
                      "start": 398,
                      "end": 406
                    },
                    "start": 398,
                    "end": 406
                  },
                  "start": 396,
                  "end": 406
                },
                "accessibility": null,
                "static": false,
                "start": 392,
                "end": 406
              }
            ],
            "start": 390,
            "end": 408
          }
        ],
        "start": 382,
        "end": 408
      },
      "declare": false,
      "start": 368,
      "end": 409
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doStuffWithCircle",
        "optional": false,
        "typeAnnotation": null,
        "start": 420,
        "end": 437
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Circle",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 443,
                    "end": 449
                  },
                  "typeArguments": null,
                  "start": 443,
                  "end": 449
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Circle",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 453,
                        "end": 459
                      },
                      "typeArguments": null,
                      "start": 453,
                      "end": 459
                    },
                    {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "newValue",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Circle",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 472,
                                "end": 478
                              },
                              "typeArguments": null,
                              "start": 472,
                              "end": 478
                            },
                            "start": 470,
                            "end": 478
                          },
                          "start": 462,
                          "end": 478
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 483,
                          "end": 487
                        },
                        "start": 480,
                        "end": 487
                      },
                      "start": 461,
                      "end": 487
                    }
                  ],
                  "start": 452,
                  "end": 488
                }
              ],
              "start": 443,
              "end": 488
            },
            "start": 441,
            "end": 488
          },
          "start": 438,
          "end": 488
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 503
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 504,
                  "end": 511
                },
                "optional": false,
                "computed": false,
                "start": 498,
                "end": 511
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 512,
                  "end": 515
                }
              ],
              "optional": false,
              "start": 498,
              "end": 516
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 529,
                            "end": 534
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "setValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 536,
                            "end": 544
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 528,
                        "end": 545
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 548,
                        "end": 551
                      },
                      "definite": false,
                      "start": 528,
                      "end": 551
                    }
                  ],
                  "declare": false,
                  "start": 524,
                  "end": 552
                }
              ],
              "start": 518,
              "end": 562
            },
            "alternate": null,
            "start": 494,
            "end": 562
          }
        ],
        "start": 490,
        "end": 564
      },
      "expression": false,
      "start": 411,
      "end": 564
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 575,
        "end": 577
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 579
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 590,
                        "end": 591
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "\"foo\"",
                            "start": 593,
                            "end": 598
                          },
                          "start": 593,
                          "end": 598
                        },
                        "start": 591,
                        "end": 598
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 590,
                      "end": 598
                    }
                  ],
                  "start": 588,
                  "end": 600
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 605,
                        "end": 606
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "\"bar\"",
                            "start": 608,
                            "end": 613
                          },
                          "start": 608,
                          "end": 613
                        },
                        "start": 606,
                        "end": 613
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 605,
                      "end": 613
                    }
                  ],
                  "start": 603,
                  "end": 615
                }
              ],
              "start": 588,
              "end": 615
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 578,
            "end": 615
          }
        ],
        "start": 577,
        "end": 616
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 620,
                "end": 621
              },
              "typeArguments": null,
              "start": 620,
              "end": 621
            },
            "start": 618,
            "end": 621
          },
          "start": 617,
          "end": 621
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 632,
                      "end": 633
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 631,
                  "end": 634
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 637,
                  "end": 638
                },
                "definite": false,
                "start": 631,
                "end": 638
              }
            ],
            "declare": false,
            "start": 627,
            "end": 639
          }
        ],
        "start": 623,
        "end": 650
      },
      "expression": false,
      "start": 566,
      "end": 650
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 673,
                              "end": 674
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "foo",
                                  "raw": "\"foo\"",
                                  "start": 676,
                                  "end": 681
                                },
                                "start": 676,
                                "end": 681
                              },
                              "start": 674,
                              "end": 681
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 673,
                            "end": 681
                          }
                        ],
                        "start": 671,
                        "end": 683
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 688,
                              "end": 689
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "bar",
                                  "raw": "\"bar\"",
                                  "start": 691,
                                  "end": 696
                                },
                                "start": 691,
                                "end": 696
                              },
                              "start": 689,
                              "end": 696
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 688,
                            "end": 696
                          }
                        ],
                        "start": 686,
                        "end": 698
                      }
                    ],
                    "start": 671,
                    "end": 698
                  },
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 705,
                              "end": 706
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "qwe",
                                  "raw": "\"qwe\"",
                                  "start": 708,
                                  "end": 713
                                },
                                "start": 708,
                                "end": 713
                              },
                              "start": 706,
                              "end": 713
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 705,
                            "end": 713
                          }
                        ],
                        "start": 703,
                        "end": 715
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 720,
                              "end": 721
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "rty",
                                  "raw": "\"rty\"",
                                  "start": 723,
                                  "end": 728
                                },
                                "start": 723,
                                "end": 728
                              },
                              "start": 721,
                              "end": 728
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 720,
                            "end": 728
                          }
                        ],
                        "start": 718,
                        "end": 730
                      }
                    ],
                    "start": 703,
                    "end": 730
                  }
                ],
                "start": 670,
                "end": 731
              },
              "start": 668,
              "end": 731
            },
            "start": 666,
            "end": 731
          },
          "init": null,
          "definite": false,
          "start": 666,
          "end": 731
        }
      ],
      "declare": true,
      "start": 652,
      "end": 732
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "el3",
                "optional": false,
                "typeAnnotation": null,
                "start": 740,
                "end": 743
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 739,
            "end": 744
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 747,
            "end": 749
          },
          "definite": false,
          "start": 739,
          "end": 749
        }
      ],
      "declare": false,
      "start": 733,
      "end": 750
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 759
}
```
