__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 648,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 47,
            "name": "optionalProperties",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 47,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 32,
                "end": 47,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 34,
                    "end": 45,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 36,
                      "name": "k1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 37,
                      "end": 45,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 39,
                        "end": 45
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 108,
            "name": "undefinedProperties",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 108,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 82,
                "end": 108,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 84,
                    "end": 106,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 86,
                      "name": "k1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 86,
                      "end": 106,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 88,
                        "end": 106,
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
                        ]
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 166,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 166,
            "name": "stringDictionary",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 166,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 141,
                "end": 166,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 143,
                    "end": 164,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 144,
                        "end": 155,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 147,
                          "end": 155,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 149,
                            "end": 155
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 156,
                      "end": 164,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 158,
                        "end": 164
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 168,
      "end": 206,
      "expression": {
        "type": "AssignmentExpression",
        "start": 168,
        "end": 205,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 168,
          "end": 184,
          "name": "stringDictionary",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 187,
          "end": 205,
          "name": "optionalProperties",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 214,
      "end": 253,
      "expression": {
        "type": "AssignmentExpression",
        "start": 214,
        "end": 252,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 214,
          "end": 230,
          "name": "stringDictionary",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 233,
          "end": 252,
          "name": "undefinedProperties",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 317,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 316,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 316,
            "name": "probablyArray",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 316,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 291,
                "end": 316,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 293,
                    "end": 314,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 294,
                        "end": 305,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 297,
                          "end": 305,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 299,
                            "end": 305
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 306,
                      "end": 314,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 308,
                        "end": 314
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 364,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 330,
          "end": 363,
          "id": {
            "type": "Identifier",
            "start": 330,
            "end": 363,
            "name": "numberLiteralKeys",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 347,
              "end": 363,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 349,
                "end": 363,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 351,
                    "end": 361,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 351,
                      "end": 352,
                      "value": 1,
                      "raw": "1"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 353,
                      "end": 361,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 355,
                        "end": 361
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 365,
      "end": 399,
      "expression": {
        "type": "AssignmentExpression",
        "start": 365,
        "end": 398,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 365,
          "end": 378,
          "name": "probablyArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 381,
          "end": 398,
          "name": "numberLiteralKeys",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 411,
      "end": 461,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 423,
          "end": 460,
          "id": {
            "type": "Identifier",
            "start": 423,
            "end": 460,
            "name": "optionalUndefined",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 440,
              "end": 460,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 442,
                "end": 460,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 444,
                    "end": 458,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 444,
                      "end": 446,
                      "name": "k1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 447,
                      "end": 458,
                      "typeAnnotation": {
                        "type": "TSUndefinedKeyword",
                        "start": 449,
                        "end": 458
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 462,
      "end": 518,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 466,
          "end": 517,
          "id": {
            "type": "Identifier",
            "start": 466,
            "end": 497,
            "name": "dict",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 470,
              "end": 497,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 472,
                "end": 497,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 474,
                    "end": 495,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 475,
                        "end": 486,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 478,
                          "end": 486,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 480,
                            "end": 486
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 487,
                      "end": 495,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 489,
                        "end": 495
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 500,
            "end": 517,
            "name": "optionalUndefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 529,
      "end": 647,
      "id": {
        "type": "Identifier",
        "start": 538,
        "end": 539,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 545,
        "end": 647,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 548,
            "end": 586,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 552,
                "end": 585,
                "id": {
                  "type": "Identifier",
                  "start": 552,
                  "end": 572,
                  "name": "optional",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 560,
                    "end": 572,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 562,
                      "end": 572,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 564,
                          "end": 570,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 564,
                            "end": 566,
                            "name": "k1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 567,
                            "end": 570,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 569,
                              "end": 570,
                              "typeName": {
                                "type": "Identifier",
                                "start": 569,
                                "end": 570,
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
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSNonNullExpression",
                  "start": 575,
                  "end": 585,
                  "expression": {
                    "type": "Identifier",
                    "start": 575,
                    "end": 584,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 588,
            "end": 639,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 592,
                "end": 638,
                "id": {
                  "type": "Identifier",
                  "start": 592,
                  "end": 627,
                  "name": "dict",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 596,
                    "end": 627,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 598,
                      "end": 627,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 600,
                          "end": 625,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 601,
                              "end": 612,
                              "name": "key",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 604,
                                "end": 612,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 606,
                                  "end": 612
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 613,
                            "end": 625,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 615,
                              "end": 625,
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 615,
                                  "end": 616,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 615,
                                    "end": 616,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 619,
                                  "end": 625
                                }
                              ]
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 638,
                  "name": "optional",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "start": 539,
        "end": 542,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 540,
            "end": 541,
            "name": {
              "type": "Identifier",
              "start": 540,
              "end": 541,
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
