__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalProperties",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "k1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 34,
                      "end": 36
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 39,
                        "end": 45
                      },
                      "start": 37,
                      "end": 45
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 34,
                    "end": 45
                  }
                ],
                "start": 32,
                "end": 47
              },
              "start": 30,
              "end": 47
            },
            "start": 12,
            "end": 47
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 47
        }
      ],
      "declare": true,
      "start": 0,
      "end": 48
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefinedProperties",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "k1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 86
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 88,
                            "end": 94
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 97,
                            "end": 106
                          }
                        ],
                        "start": 88,
                        "end": 106
                      },
                      "start": 86,
                      "end": 106
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 84,
                    "end": 106
                  }
                ],
                "start": 82,
                "end": 108
              },
              "start": 80,
              "end": 108
            },
            "start": 61,
            "end": 108
          },
          "init": null,
          "definite": false,
          "start": 61,
          "end": 108
        }
      ],
      "declare": true,
      "start": 49,
      "end": 109
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringDictionary",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 149,
                            "end": 155
                          },
                          "start": 147,
                          "end": 155
                        },
                        "start": 144,
                        "end": 155
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 158,
                        "end": 164
                      },
                      "start": 156,
                      "end": 164
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 143,
                    "end": 164
                  }
                ],
                "start": 141,
                "end": 166
              },
              "start": 139,
              "end": 166
            },
            "start": 123,
            "end": 166
          },
          "init": null,
          "definite": false,
          "start": 123,
          "end": 166
        }
      ],
      "declare": true,
      "start": 111,
      "end": 167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringDictionary",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 184
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "optionalProperties",
          "optional": false,
          "typeAnnotation": null,
          "start": 187,
          "end": 205
        },
        "start": 168,
        "end": 205
      },
      "directive": null,
      "start": 168,
      "end": 206
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringDictionary",
          "optional": false,
          "typeAnnotation": null,
          "start": 214,
          "end": 230
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefinedProperties",
          "optional": false,
          "typeAnnotation": null,
          "start": 233,
          "end": 252
        },
        "start": 214,
        "end": 252
      },
      "directive": null,
      "start": 214,
      "end": 253
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "probablyArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 299,
                            "end": 305
                          },
                          "start": 297,
                          "end": 305
                        },
                        "start": 294,
                        "end": 305
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 308,
                        "end": 314
                      },
                      "start": 306,
                      "end": 314
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 293,
                    "end": 314
                  }
                ],
                "start": 291,
                "end": 316
              },
              "start": 289,
              "end": 316
            },
            "start": 276,
            "end": 316
          },
          "init": null,
          "definite": false,
          "start": 276,
          "end": 316
        }
      ],
      "declare": true,
      "start": 264,
      "end": 317
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberLiteralKeys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 351,
                      "end": 352
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 355,
                        "end": 361
                      },
                      "start": 353,
                      "end": 361
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 351,
                    "end": 361
                  }
                ],
                "start": 349,
                "end": 363
              },
              "start": 347,
              "end": 363
            },
            "start": 330,
            "end": 363
          },
          "init": null,
          "definite": false,
          "start": 330,
          "end": 363
        }
      ],
      "declare": true,
      "start": 318,
      "end": 364
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "probablyArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 365,
          "end": 378
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numberLiteralKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 381,
          "end": 398
        },
        "start": 365,
        "end": 398
      },
      "directive": null,
      "start": 365,
      "end": 399
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalUndefined",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "k1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 444,
                      "end": 446
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUndefinedKeyword",
                        "start": 449,
                        "end": 458
                      },
                      "start": 447,
                      "end": 458
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 444,
                    "end": 458
                  }
                ],
                "start": 442,
                "end": 460
              },
              "start": 440,
              "end": 460
            },
            "start": 423,
            "end": 460
          },
          "init": null,
          "definite": false,
          "start": 423,
          "end": 460
        }
      ],
      "declare": true,
      "start": 411,
      "end": 461
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dict",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 480,
                            "end": 486
                          },
                          "start": 478,
                          "end": 486
                        },
                        "start": 475,
                        "end": 486
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 489,
                        "end": 495
                      },
                      "start": 487,
                      "end": 495
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 474,
                    "end": 495
                  }
                ],
                "start": 472,
                "end": 497
              },
              "start": 470,
              "end": 497
            },
            "start": 466,
            "end": 497
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 517
          },
          "definite": false,
          "start": 466,
          "end": 517
        }
      ],
      "declare": false,
      "start": 462,
      "end": 518
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 538,
        "end": 539
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
              "start": 540,
              "end": 541
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 540,
            "end": 541
          }
        ],
        "start": 539,
        "end": 542
      },
      "params": [],
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optional",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
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
                            "name": "k1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 564,
                            "end": 566
                          },
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
                                "start": 569,
                                "end": 570
                              },
                              "typeArguments": null,
                              "start": 569,
                              "end": 570
                            },
                            "start": 567,
                            "end": 570
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 564,
                          "end": 570
                        }
                      ],
                      "start": 562,
                      "end": 572
                    },
                    "start": 560,
                    "end": 572
                  },
                  "start": 552,
                  "end": 572
                },
                "init": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 575,
                    "end": 584
                  },
                  "start": 575,
                  "end": 585
                },
                "definite": false,
                "start": 552,
                "end": 585
              }
            ],
            "declare": false,
            "start": 548,
            "end": 586
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dict",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 606,
                                  "end": 612
                                },
                                "start": 604,
                                "end": 612
                              },
                              "start": 601,
                              "end": 612
                            }
                          ],
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
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 615,
                                    "end": 616
                                  },
                                  "typeArguments": null,
                                  "start": 615,
                                  "end": 616
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 619,
                                  "end": 625
                                }
                              ],
                              "start": 615,
                              "end": 625
                            },
                            "start": 613,
                            "end": 625
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 600,
                          "end": 625
                        }
                      ],
                      "start": 598,
                      "end": 627
                    },
                    "start": 596,
                    "end": 627
                  },
                  "start": 592,
                  "end": 627
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 638
                },
                "definite": false,
                "start": 592,
                "end": 638
              }
            ],
            "declare": false,
            "start": 588,
            "end": 639
          }
        ],
        "start": 545,
        "end": 647
      },
      "expression": false,
      "start": 529,
      "end": 647
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 647
}
```
