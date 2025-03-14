__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 596,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "decorators": [],
            "name": "ka",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 11,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 8,
                "end": 11
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 31,
            "decorators": [],
            "name": "nested",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 25,
                "end": 31,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 27,
                    "end": 29,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 29,
                      "decorators": [],
                      "name": "ki",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 50,
            "decorators": [],
            "name": "other",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 50,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 44,
                "end": 50
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 65,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 65,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 65,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 62,
                "end": 65,
                "members": []
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 108,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 108,
            "decorators": [],
            "name": "complex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 108,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 80,
                "end": 108,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 82,
                    "end": 96,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 83,
                      "end": 95,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 85,
                        "end": 95,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 87,
                            "end": 90,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 87,
                              "end": 89,
                              "decorators": [],
                              "name": "ka",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 91,
                            "end": 93,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 91,
                              "end": 93,
                              "decorators": [],
                              "name": "ki",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 97,
                    "end": 106,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 98,
                      "end": 106,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 100,
                        "end": 106
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 164,
      "expression": {
        "type": "AssignmentExpression",
        "start": 111,
        "end": 162,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 111,
          "end": 152,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 112,
              "end": 132,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ObjectPattern",
                "start": 115,
                "end": 132,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 117,
                    "end": 119,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 119,
                      "decorators": [],
                      "name": "ka",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 119,
                      "decorators": [],
                      "name": "ka",
                      "optional": false
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 121,
                    "end": 130,
                    "argument": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 130,
                      "decorators": [],
                      "name": "nested",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false
                  }
                ]
              }
            },
            {
              "type": "Property",
              "start": 134,
              "end": 142,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 137,
                "end": 142,
                "decorators": [],
                "name": "other",
                "optional": false
              }
            },
            {
              "type": "RestElement",
              "start": 144,
              "end": 151,
              "argument": {
                "type": "Identifier",
                "start": 147,
                "end": 151,
                "decorators": [],
                "name": "rest",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ]
        },
        "right": {
          "type": "Identifier",
          "start": 155,
          "end": 162,
          "decorators": [],
          "name": "complex",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 180,
      "end": 295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 294,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 294,
            "decorators": [],
            "name": "overEmit",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 294,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 194,
                "end": 294,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 196,
                    "end": 227,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 197,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 197,
                      "end": 226,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 199,
                        "end": 226,
                        "elementType": {
                          "type": "TSTypeLiteral",
                          "start": 199,
                          "end": 224,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 201,
                              "end": 212,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 201,
                                "end": 203,
                                "decorators": [],
                                "name": "ka",
                                "optional": false
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 203,
                                "end": 211,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 205,
                                  "end": 211
                                }
                              }
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 213,
                              "end": 222,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 213,
                                "end": 214,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 214,
                                "end": 222,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 216,
                                  "end": 222
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 228,
                    "end": 269,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 229,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 229,
                      "end": 268,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 231,
                        "end": 268,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 233,
                            "end": 243,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 233,
                              "end": 234,
                              "decorators": [],
                              "name": "z",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 234,
                              "end": 242,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 236,
                                "end": 242
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 244,
                            "end": 255,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 244,
                              "end": 246,
                              "decorators": [],
                              "name": "ki",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 246,
                              "end": 254,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 248,
                                "end": 254
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 256,
                            "end": 266,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 256,
                              "end": 258,
                              "decorators": [],
                              "name": "ku",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 258,
                              "end": 266,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 260,
                                "end": 266
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 270,
                    "end": 281,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 272,
                      "decorators": [],
                      "name": "ke",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 272,
                      "end": 280,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 274,
                        "end": 280
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 282,
                    "end": 292,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 282,
                      "end": 284,
                      "decorators": [],
                      "name": "ko",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 284,
                      "end": 292,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 286,
                        "end": 292
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 454,
      "end": 525,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 458,
          "end": 524,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 458,
            "end": 513,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 460,
                "end": 485,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 461,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayPattern",
                  "start": 463,
                  "end": 485,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "ObjectPattern",
                      "start": 464,
                      "end": 478,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "RestElement",
                          "start": 466,
                          "end": 476,
                          "argument": {
                            "type": "Identifier",
                            "start": 469,
                            "end": 476,
                            "decorators": [],
                            "name": "nested2",
                            "optional": false
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ]
                    },
                    {
                      "type": "RestElement",
                      "start": 480,
                      "end": 484,
                      "argument": {
                        "type": "Identifier",
                        "start": 483,
                        "end": 484,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 487,
                "end": 501,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 487,
                  "end": 488,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectPattern",
                  "start": 490,
                  "end": 501,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 492,
                      "end": 493,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 492,
                        "end": 493,
                        "decorators": [],
                        "name": "z",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 492,
                        "end": 493,
                        "decorators": [],
                        "name": "z",
                        "optional": false
                      }
                    },
                    {
                      "type": "RestElement",
                      "start": 495,
                      "end": 499,
                      "argument": {
                        "type": "Identifier",
                        "start": 498,
                        "end": 499,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "RestElement",
                "start": 503,
                "end": 511,
                "argument": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 511,
                  "decorators": [],
                  "name": "rest2",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 516,
            "end": 524,
            "decorators": [],
            "name": "overEmit",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 526,
      "end": 595,
      "expression": {
        "type": "AssignmentExpression",
        "start": 527,
        "end": 593,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 527,
          "end": 582,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 529,
              "end": 554,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 529,
                "end": 530,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ArrayPattern",
                "start": 532,
                "end": 554,
                "decorators": [],
                "elements": [
                  {
                    "type": "ObjectPattern",
                    "start": 533,
                    "end": 547,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "RestElement",
                        "start": 535,
                        "end": 545,
                        "argument": {
                          "type": "Identifier",
                          "start": 538,
                          "end": 545,
                          "decorators": [],
                          "name": "nested2",
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ]
                  },
                  {
                    "type": "RestElement",
                    "start": 549,
                    "end": 553,
                    "argument": {
                      "type": "Identifier",
                      "start": 552,
                      "end": 553,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false
              }
            },
            {
              "type": "Property",
              "start": 556,
              "end": 570,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 556,
                "end": 557,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ObjectPattern",
                "start": 559,
                "end": 570,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 561,
                    "end": 562,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 561,
                      "end": 562,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 561,
                      "end": 562,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 564,
                    "end": 568,
                    "argument": {
                      "type": "Identifier",
                      "start": 567,
                      "end": 568,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false
                  }
                ]
              }
            },
            {
              "type": "RestElement",
              "start": 572,
              "end": 580,
              "argument": {
                "type": "Identifier",
                "start": 575,
                "end": 580,
                "decorators": [],
                "name": "rest2",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ]
        },
        "right": {
          "type": "Identifier",
          "start": 585,
          "end": 593,
          "decorators": [],
          "name": "overEmit",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
