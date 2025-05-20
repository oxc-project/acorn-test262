__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4705,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 25,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 14,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 13,
                  "end": 14,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 16,
                "end": 23,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 19,
                  "end": 23,
                  "raw": "'no'",
                  "value": "no"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 32,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 35,
            "end": 56,
            "properties": [
              {
                "type": "Property",
                "start": 37,
                "end": 45,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 40,
                  "end": 45,
                  "raw": "'yes'",
                  "value": "yes"
                }
              },
              {
                "type": "Property",
                "start": 47,
                "end": 54,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 50,
                  "end": 54,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 87,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 65,
            "decorators": [],
            "name": "swap",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 68,
            "end": 87,
            "properties": [
              {
                "type": "Property",
                "start": 70,
                "end": 78,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 73,
                  "end": 78,
                  "raw": "'yes'",
                  "value": "yes"
                }
              },
              {
                "type": "Property",
                "start": 80,
                "end": 85,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "UnaryExpression",
                  "start": 83,
                  "end": 85,
                  "argument": {
                    "type": "Literal",
                    "start": 84,
                    "end": 85,
                    "raw": "1",
                    "value": 1
                  },
                  "operator": "-",
                  "prefix": true
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 165,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 140,
            "decorators": [],
            "name": "addAfter",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 140,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 104,
                "end": 140,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 106,
                    "end": 116,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 106,
                      "end": 107,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 107,
                      "end": 115,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 109,
                        "end": 115
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 117,
                    "end": 127,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 118,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 118,
                      "end": 126,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 120,
                        "end": 126
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 128,
                    "end": 138,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 129,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 129,
                      "end": 138,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 131,
                        "end": 138
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 147,
            "end": 165,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 149,
                "end": 153,
                "argument": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 153,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 155,
                "end": 163,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 158,
                  "end": 163,
                  "raw": "false",
                  "value": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 242,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 242,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 217,
            "decorators": [],
            "name": "addBefore",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 217,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 181,
                "end": 217,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 183,
                    "end": 193,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 183,
                      "end": 184,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 184,
                      "end": 192,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 186,
                        "end": 192
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 194,
                    "end": 204,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 195,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 195,
                      "end": 203,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 197,
                        "end": 203
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 205,
                    "end": 215,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 206,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 206,
                      "end": 215,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 208,
                        "end": 215
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 224,
            "end": 242,
            "properties": [
              {
                "type": "Property",
                "start": 226,
                "end": 234,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 229,
                  "end": 234,
                  "raw": "false",
                  "value": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 236,
                "end": 240,
                "argument": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 240,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 243,
      "end": 311,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 247,
          "end": 311,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 247,
            "end": 281,
            "decorators": [],
            "name": "override",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 281,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 257,
                "end": 281,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 259,
                    "end": 269,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 260,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 260,
                      "end": 268,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 262,
                        "end": 268
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 270,
                    "end": 279,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 271,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 271,
                      "end": 279,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 273,
                        "end": 279
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 288,
            "end": 311,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 290,
                "end": 294,
                "argument": {
                  "type": "Identifier",
                  "start": 293,
                  "end": 294,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 296,
                "end": 309,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 297,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 299,
                  "end": 309,
                  "raw": "'override'",
                  "value": "override"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 312,
      "end": 430,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 316,
          "end": 430,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 360,
            "decorators": [],
            "name": "nested",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 322,
              "end": 360,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 324,
                "end": 360,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 326,
                    "end": 336,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 327,
                      "end": 335,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 329,
                        "end": 335
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 337,
                    "end": 348,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 337,
                      "end": 338,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 338,
                      "end": 347,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 340,
                        "end": 347
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 349,
                    "end": 358,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 349,
                      "end": 350,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 350,
                      "end": 358,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 352,
                        "end": 358
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 367,
            "end": 430,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 369,
                "end": 413,
                "argument": {
                  "type": "ObjectExpression",
                  "start": 372,
                  "end": 413,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 374,
                      "end": 378,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 374,
                        "end": 375,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 377,
                        "end": 378,
                        "raw": "3",
                        "value": 3
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 380,
                      "end": 411,
                      "argument": {
                        "type": "ObjectExpression",
                        "start": 383,
                        "end": 411,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 385,
                            "end": 393,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 385,
                              "end": 386,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 388,
                              "end": 393,
                              "raw": "false",
                              "value": false
                            }
                          },
                          {
                            "type": "Property",
                            "start": 395,
                            "end": 409,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 395,
                              "end": 396,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 398,
                              "end": 409,
                              "raw": "'overriden'",
                              "value": "overriden"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 415,
                "end": 428,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 416,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 418,
                  "end": 428,
                  "raw": "'whatever'",
                  "value": "whatever"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 431,
      "end": 503,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 435,
          "end": 503,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 435,
            "end": 481,
            "decorators": [],
            "name": "combined",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 443,
              "end": 481,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 445,
                "end": 481,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 447,
                    "end": 457,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 447,
                      "end": 448,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 448,
                      "end": 456,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 450,
                        "end": 456
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 458,
                    "end": 468,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 458,
                      "end": 459,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 459,
                      "end": 467,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 461,
                        "end": 467
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 469,
                    "end": 479,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 469,
                      "end": 470,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 470,
                      "end": 479,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 472,
                        "end": 479
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 488,
            "end": 503,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 490,
                "end": 494,
                "argument": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 494,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 496,
                "end": 501,
                "argument": {
                  "type": "Identifier",
                  "start": 499,
                  "end": 501,
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 504,
      "end": 590,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 508,
          "end": 590,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 508,
            "end": 559,
            "decorators": [],
            "name": "combinedAfter",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 521,
              "end": 559,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 523,
                "end": 559,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 525,
                    "end": 535,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 525,
                      "end": 526,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 526,
                      "end": 534,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 528,
                        "end": 534
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 536,
                    "end": 546,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 536,
                      "end": 537,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 537,
                      "end": 545,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 539,
                        "end": 545
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 547,
                    "end": 557,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 547,
                      "end": 548,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 548,
                      "end": 557,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 550,
                        "end": 557
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 566,
            "end": 590,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 568,
                "end": 572,
                "argument": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 572,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 574,
                "end": 579,
                "argument": {
                  "type": "Identifier",
                  "start": 577,
                  "end": 579,
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 581,
                "end": 588,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 581,
                  "end": 582,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 584,
                  "end": 588,
                  "raw": "'ok'",
                  "value": "ok"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 591,
      "end": 719,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 595,
          "end": 719,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 595,
            "end": 657,
            "decorators": [],
            "name": "combinedNestedChangeType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 619,
              "end": 657,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 621,
                "end": 657,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 623,
                    "end": 633,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 623,
                      "end": 624,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 624,
                      "end": 632,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 626,
                        "end": 632
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 634,
                    "end": 645,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 634,
                      "end": 635,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 635,
                      "end": 644,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 637,
                        "end": 644
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 646,
                    "end": 655,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 646,
                      "end": 647,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 647,
                      "end": 655,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 649,
                        "end": 655
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 664,
            "end": 719,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 666,
                "end": 710,
                "argument": {
                  "type": "ObjectExpression",
                  "start": 669,
                  "end": 710,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 671,
                      "end": 675,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 671,
                        "end": 672,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 674,
                        "end": 675,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 677,
                      "end": 708,
                      "argument": {
                        "type": "ObjectExpression",
                        "start": 680,
                        "end": 708,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 682,
                            "end": 690,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 682,
                              "end": 683,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 685,
                              "end": 690,
                              "raw": "false",
                              "value": false
                            }
                          },
                          {
                            "type": "Property",
                            "start": 692,
                            "end": 706,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 692,
                              "end": 693,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 695,
                              "end": 706,
                              "raw": "'overriden'",
                              "value": "overriden"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 712,
                "end": 717,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 712,
                  "end": 713,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "UnaryExpression",
                  "start": 715,
                  "end": 717,
                  "argument": {
                    "type": "Literal",
                    "start": 716,
                    "end": 717,
                    "raw": "1",
                    "value": 1
                  },
                  "operator": "-",
                  "prefix": true
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 720,
      "end": 794,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 724,
          "end": 794,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 724,
            "end": 771,
            "decorators": [],
            "name": "propertyNested",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 738,
              "end": 771,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 740,
                "end": 771,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 742,
                    "end": 769,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 742,
                      "end": 743,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 743,
                      "end": 769,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 745,
                        "end": 769,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 747,
                            "end": 757,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 747,
                              "end": 748,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 748,
                              "end": 756,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 750,
                                "end": 756
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 758,
                            "end": 767,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 758,
                              "end": 759,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 759,
                              "end": 767,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 761,
                                "end": 767
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 778,
            "end": 794,
            "properties": [
              {
                "type": "Property",
                "start": 780,
                "end": 792,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 780,
                  "end": 781,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 783,
                  "end": 792,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 785,
                      "end": 790,
                      "argument": {
                        "type": "Identifier",
                        "start": 789,
                        "end": 790,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 902,
      "end": 937,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 906,
          "end": 936,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 906,
            "end": 908,
            "decorators": [],
            "name": "op",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 911,
            "end": 936,
            "properties": [
              {
                "type": "Property",
                "start": 913,
                "end": 934,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 917,
                  "end": 918,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 919,
                  "end": 934,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 922,
                    "end": 934,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 924,
                        "end": 932,
                        "argument": {
                          "type": "Literal",
                          "start": 931,
                          "end": 932,
                          "raw": "6",
                          "value": 6
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 938,
      "end": 996,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 942,
          "end": 996,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 942,
            "end": 974,
            "decorators": [],
            "name": "getter",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 948,
              "end": 974,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 950,
                "end": 974,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 952,
                    "end": 962,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 952,
                      "end": 953,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 953,
                      "end": 961,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 955,
                        "end": 961
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 963,
                    "end": 972,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 963,
                      "end": 964,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 964,
                      "end": 972,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 966,
                        "end": 972
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 981,
            "end": 996,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 983,
                "end": 988,
                "argument": {
                  "type": "Identifier",
                  "start": 986,
                  "end": 988,
                  "decorators": [],
                  "name": "op",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 990,
                "end": 994,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 990,
                  "end": 991,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 993,
                  "end": 994,
                  "raw": "7",
                  "value": 7
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 997,
      "end": 1011,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 997,
        "end": 1010,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 997,
          "end": 1005,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 997,
            "end": 1003,
            "decorators": [],
            "name": "getter",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1004,
            "end": 1005,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1008,
          "end": 1010,
          "raw": "12",
          "value": 12
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1040,
      "end": 1082,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1044,
          "end": 1081,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1044,
            "end": 1054,
            "decorators": [],
            "name": "spreadFunc",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1057,
            "end": 1081,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 1059,
                "end": 1079,
                "argument": {
                  "type": "FunctionExpression",
                  "start": 1063,
                  "end": 1078,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1075,
                    "end": 1078,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1084,
      "end": 1147,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1089,
        "end": 1095,
        "decorators": [],
        "name": "Header",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1098,
        "end": 1147,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1100,
            "end": 1113,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1100,
              "end": 1104,
              "decorators": [],
              "name": "head",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1104,
              "end": 1112,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1106,
                "end": 1112
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1114,
            "end": 1127,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1114,
              "end": 1118,
              "decorators": [],
              "name": "body",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1118,
              "end": 1126,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1120,
                "end": 1126
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1128,
            "end": 1145,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1128,
              "end": 1137,
              "decorators": [],
              "name": "authToken",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1137,
              "end": 1145,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1139,
                "end": 1145
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1148,
      "end": 1339,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1236,
        "end": 1339,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1242,
            "end": 1337,
            "argument": {
              "type": "ObjectExpression",
              "start": 1249,
              "end": 1337,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 1259,
                  "end": 1273,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 1262,
                    "end": 1273,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 1262,
                      "end": 1266
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1267,
                      "end": 1273,
                      "decorators": [],
                      "name": "header",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 1283,
                  "end": 1292,
                  "argument": {
                    "type": "Identifier",
                    "start": 1286,
                    "end": 1292,
                    "decorators": [],
                    "name": "header",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 1302,
                  "end": 1331,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 1305,
                    "end": 1331,
                    "operator": "&&",
                    "left": {
                      "type": "Identifier",
                      "start": 1305,
                      "end": 1314,
                      "decorators": [],
                      "name": "authToken",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 1318,
                      "end": 1331,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1320,
                          "end": 1329,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1320,
                            "end": 1329,
                            "decorators": [],
                            "name": "authToken",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "start": 1320,
                            "end": 1329,
                            "decorators": [],
                            "name": "authToken",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1157,
        "end": 1166,
        "decorators": [],
        "name": "from16326",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1167,
          "end": 1191,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1171,
            "end": 1191,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1173,
              "end": 1191,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1175,
                  "end": 1189,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1175,
                    "end": 1181,
                    "decorators": [],
                    "name": "header",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1181,
                    "end": 1189,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1183,
                      "end": 1189,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1183,
                        "end": 1189,
                        "decorators": [],
                        "name": "Header",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1193,
          "end": 1207,
          "decorators": [],
          "name": "header",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1199,
            "end": 1207,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1201,
              "end": 1207,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1201,
                "end": 1207,
                "decorators": [],
                "name": "Header",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1209,
          "end": 1226,
          "decorators": [],
          "name": "authToken",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1218,
            "end": 1226,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1220,
              "end": 1226
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1227,
        "end": 1235,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1229,
          "end": 1235,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1229,
            "end": 1235,
            "decorators": [],
            "name": "Header",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1378,
      "end": 1587,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1451,
        "end": 1587,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1457,
            "end": 1481,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1461,
                "end": 1481,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1461,
                  "end": 1462,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1465,
                  "end": 1481,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1467,
                      "end": 1472,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1467,
                        "end": 1468,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1470,
                        "end": 1472,
                        "raw": "12",
                        "value": 12
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1474,
                      "end": 1479,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1474,
                        "end": 1475,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1477,
                        "end": 1479,
                        "raw": "13",
                        "value": 13
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1486,
            "end": 1537,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1486,
              "end": 1537,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1486,
                "end": 1487,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ObjectExpression",
                "start": 1490,
                "end": 1537,
                "properties": [
                  {
                    "type": "SpreadElement",
                    "start": 1500,
                    "end": 1504,
                    "argument": {
                      "type": "Identifier",
                      "start": 1503,
                      "end": 1504,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "SpreadElement",
                    "start": 1514,
                    "end": 1531,
                    "argument": {
                      "type": "LogicalExpression",
                      "start": 1517,
                      "end": 1531,
                      "operator": "&&",
                      "left": {
                        "type": "Identifier",
                        "start": 1517,
                        "end": 1518,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 1522,
                        "end": 1531,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1524,
                            "end": 1529,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1524,
                              "end": 1525,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 1527,
                              "end": 1529,
                              "raw": "14",
                              "value": 14
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1542,
            "end": 1571,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1546,
                "end": 1571,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1546,
                  "end": 1548,
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1551,
                  "end": 1571,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1553,
                      "end": 1570,
                      "argument": {
                        "type": "LogicalExpression",
                        "start": 1556,
                        "end": 1570,
                        "operator": "&&",
                        "left": {
                          "type": "Identifier",
                          "start": 1556,
                          "end": 1557,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "start": 1561,
                          "end": 1570,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1563,
                              "end": 1568,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1563,
                                "end": 1564,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 1566,
                                "end": 1568,
                                "raw": "21",
                                "value": 21
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ReturnStatement",
            "start": 1576,
            "end": 1585,
            "argument": {
              "type": "Identifier",
              "start": 1583,
              "end": 1584,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1387,
        "end": 1411,
        "decorators": [],
        "name": "conditionalSpreadBoolean",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1412,
          "end": 1422,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1413,
            "end": 1422,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1415,
              "end": 1422
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1424,
        "end": 1450,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 1426,
          "end": 1450,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 1428,
              "end": 1438,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1428,
                "end": 1429,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1429,
                "end": 1437,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1431,
                  "end": 1437
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 1439,
              "end": 1448,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1439,
                "end": 1440,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1440,
                "end": 1448,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1442,
                  "end": 1448
                }
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1588,
      "end": 1797,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1659,
        "end": 1797,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1665,
            "end": 1689,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1669,
                "end": 1689,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1669,
                  "end": 1670,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1673,
                  "end": 1689,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1675,
                      "end": 1680,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1675,
                        "end": 1676,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1678,
                        "end": 1680,
                        "raw": "15",
                        "value": 15
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1682,
                      "end": 1687,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1682,
                        "end": 1683,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1685,
                        "end": 1687,
                        "raw": "16",
                        "value": 16
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1694,
            "end": 1746,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1694,
              "end": 1746,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1694,
                "end": 1695,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ObjectExpression",
                "start": 1698,
                "end": 1746,
                "properties": [
                  {
                    "type": "SpreadElement",
                    "start": 1708,
                    "end": 1712,
                    "argument": {
                      "type": "Identifier",
                      "start": 1711,
                      "end": 1712,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "SpreadElement",
                    "start": 1722,
                    "end": 1740,
                    "argument": {
                      "type": "LogicalExpression",
                      "start": 1725,
                      "end": 1740,
                      "operator": "&&",
                      "left": {
                        "type": "Identifier",
                        "start": 1725,
                        "end": 1727,
                        "decorators": [],
                        "name": "nt",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 1731,
                        "end": 1740,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1733,
                            "end": 1738,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1733,
                              "end": 1734,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Identifier",
                              "start": 1736,
                              "end": 1738,
                              "decorators": [],
                              "name": "nt",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1751,
            "end": 1781,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1755,
                "end": 1781,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1755,
                  "end": 1757,
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1760,
                  "end": 1781,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1762,
                      "end": 1780,
                      "argument": {
                        "type": "LogicalExpression",
                        "start": 1765,
                        "end": 1780,
                        "operator": "&&",
                        "left": {
                          "type": "Identifier",
                          "start": 1765,
                          "end": 1767,
                          "decorators": [],
                          "name": "nt",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "start": 1771,
                          "end": 1780,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1773,
                              "end": 1778,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1773,
                                "end": 1774,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "start": 1776,
                                "end": 1778,
                                "decorators": [],
                                "name": "nt",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ReturnStatement",
            "start": 1786,
            "end": 1795,
            "argument": {
              "type": "Identifier",
              "start": 1793,
              "end": 1794,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1597,
        "end": 1620,
        "decorators": [],
        "name": "conditionalSpreadNumber",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1621,
          "end": 1631,
          "decorators": [],
          "name": "nt",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1623,
            "end": 1631,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1625,
              "end": 1631
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1632,
        "end": 1658,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 1634,
          "end": 1658,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 1636,
              "end": 1646,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1636,
                "end": 1637,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1637,
                "end": 1645,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1639,
                  "end": 1645
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 1647,
              "end": 1656,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1647,
                "end": 1648,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1648,
                "end": 1656,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1650,
                  "end": 1656
                }
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1798,
      "end": 2009,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1869,
        "end": 2009,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1875,
            "end": 1901,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1879,
                "end": 1901,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1879,
                  "end": 1880,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1883,
                  "end": 1901,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1885,
                      "end": 1892,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1885,
                        "end": 1886,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1888,
                        "end": 1892,
                        "raw": "'hi'",
                        "value": "hi"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1894,
                      "end": 1899,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1894,
                        "end": 1895,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1897,
                        "end": 1899,
                        "raw": "17",
                        "value": 17
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1906,
            "end": 1958,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1906,
              "end": 1958,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1906,
                "end": 1907,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ObjectExpression",
                "start": 1910,
                "end": 1958,
                "properties": [
                  {
                    "type": "SpreadElement",
                    "start": 1920,
                    "end": 1924,
                    "argument": {
                      "type": "Identifier",
                      "start": 1923,
                      "end": 1924,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "SpreadElement",
                    "start": 1934,
                    "end": 1952,
                    "argument": {
                      "type": "LogicalExpression",
                      "start": 1937,
                      "end": 1952,
                      "operator": "&&",
                      "left": {
                        "type": "Identifier",
                        "start": 1937,
                        "end": 1939,
                        "decorators": [],
                        "name": "st",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 1943,
                        "end": 1952,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1945,
                            "end": 1950,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1945,
                              "end": 1946,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Identifier",
                              "start": 1948,
                              "end": 1950,
                              "decorators": [],
                              "name": "st",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1963,
            "end": 1993,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1967,
                "end": 1993,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1967,
                  "end": 1969,
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1972,
                  "end": 1993,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1974,
                      "end": 1992,
                      "argument": {
                        "type": "LogicalExpression",
                        "start": 1977,
                        "end": 1992,
                        "operator": "&&",
                        "left": {
                          "type": "Identifier",
                          "start": 1977,
                          "end": 1979,
                          "decorators": [],
                          "name": "st",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "start": 1983,
                          "end": 1992,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1985,
                              "end": 1990,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1985,
                                "end": 1986,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "start": 1988,
                                "end": 1990,
                                "decorators": [],
                                "name": "st",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ReturnStatement",
            "start": 1998,
            "end": 2007,
            "argument": {
              "type": "Identifier",
              "start": 2005,
              "end": 2006,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1807,
        "end": 1830,
        "decorators": [],
        "name": "conditionalSpreadString",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1831,
          "end": 1841,
          "decorators": [],
          "name": "st",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1833,
            "end": 1841,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1835,
              "end": 1841
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1842,
        "end": 1868,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 1844,
          "end": 1868,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 1846,
              "end": 1856,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1846,
                "end": 1847,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1847,
                "end": 1855,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1849,
                  "end": 1855
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 1857,
              "end": 1866,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1857,
                "end": 1858,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1858,
                "end": 1866,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1860,
                  "end": 1866
                }
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2033,
      "end": 2051,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2037,
          "end": 2050,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2037,
            "end": 2050,
            "decorators": [],
            "name": "anything",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2045,
              "end": 2050,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2047,
                "end": 2050
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
      "start": 2052,
      "end": 2084,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2056,
          "end": 2083,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2056,
            "end": 2065,
            "decorators": [],
            "name": "spreadAny",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2068,
            "end": 2083,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 2070,
                "end": 2081,
                "argument": {
                  "type": "Identifier",
                  "start": 2073,
                  "end": 2081,
                  "decorators": [],
                  "name": "anything",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 2116,
      "end": 2142,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2124,
        "end": 2142,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2126,
            "end": 2132,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2126,
              "end": 2127,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 2130,
              "end": 2131,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2133,
            "end": 2140,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2133,
              "end": 2134,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2134,
              "end": 2140,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2137,
                "end": 2140,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2122,
        "end": 2123,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2143,
      "end": 2161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2147,
          "end": 2161,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2147,
            "end": 2151,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2148,
              "end": 2151,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2150,
                "end": 2151,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2150,
                  "end": 2151,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 2154,
            "end": 2161,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 2158,
              "end": 2159,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2162,
      "end": 2199,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2166,
          "end": 2199,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2166,
            "end": 2188,
            "decorators": [],
            "name": "spreadC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2173,
              "end": 2188,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2175,
                "end": 2188,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2177,
                    "end": 2186,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2177,
                      "end": 2178,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2178,
                      "end": 2186,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2180,
                        "end": 2186
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2191,
            "end": 2199,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 2193,
                "end": 2197,
                "argument": {
                  "type": "Identifier",
                  "start": 2196,
                  "end": 2197,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2231,
      "end": 2312,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2235,
          "end": 2311,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2235,
            "end": 2269,
            "decorators": [],
            "name": "cplus",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2240,
              "end": 2269,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2242,
                "end": 2269,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2244,
                    "end": 2254,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2244,
                      "end": 2245,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2245,
                      "end": 2253,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2247,
                        "end": 2253
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2255,
                    "end": 2267,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2255,
                      "end": 2259,
                      "decorators": [],
                      "name": "plus",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2261,
                      "end": 2267,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2263,
                        "end": 2267
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2272,
            "end": 2311,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 2274,
                "end": 2278,
                "argument": {
                  "type": "Identifier",
                  "start": 2277,
                  "end": 2278,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 2280,
                "end": 2309,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2280,
                  "end": 2284,
                  "decorators": [],
                  "name": "plus",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 2284,
                  "end": 2309,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2287,
                    "end": 2309,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 2289,
                        "end": 2307,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 2296,
                          "end": 2306,
                          "operator": "+",
                          "left": {
                            "type": "MemberExpression",
                            "start": 2296,
                            "end": 2302,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 2296,
                              "end": 2300
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 2301,
                              "end": 2302,
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 2305,
                            "end": 2306,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 2313,
      "end": 2326,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 2313,
        "end": 2325,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 2313,
          "end": 2323,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2313,
            "end": 2318,
            "decorators": [],
            "name": "cplus",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2319,
            "end": 2323,
            "decorators": [],
            "name": "plus",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2386,
      "end": 2464,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2390,
          "end": 2464,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2390,
            "end": 2431,
            "decorators": [],
            "name": "changeTypeAfter",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2405,
              "end": 2431,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2407,
                "end": 2431,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2409,
                    "end": 2419,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2409,
                      "end": 2410,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2410,
                      "end": 2418,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2412,
                        "end": 2418
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2420,
                    "end": 2429,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2420,
                      "end": 2421,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2421,
                      "end": 2429,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2423,
                        "end": 2429
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2438,
            "end": 2464,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 2440,
                "end": 2444,
                "argument": {
                  "type": "Identifier",
                  "start": 2443,
                  "end": 2444,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 2446,
                "end": 2462,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2446,
                  "end": 2447,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 2449,
                  "end": 2462,
                  "raw": "'wrong type?'",
                  "value": "wrong type?"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2465,
      "end": 2534,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2469,
          "end": 2533,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2469,
            "end": 2509,
            "decorators": [],
            "name": "changeTypeBoth",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2483,
              "end": 2509,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2485,
                "end": 2509,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2487,
                    "end": 2497,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2487,
                      "end": 2488,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2488,
                      "end": 2496,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2490,
                        "end": 2496
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2498,
                    "end": 2507,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2498,
                      "end": 2499,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2499,
                      "end": 2507,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2501,
                        "end": 2507
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2516,
            "end": 2533,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 2518,
                "end": 2522,
                "argument": {
                  "type": "Identifier",
                  "start": 2521,
                  "end": 2522,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 2524,
                "end": 2531,
                "argument": {
                  "type": "Identifier",
                  "start": 2527,
                  "end": 2531,
                  "decorators": [],
                  "name": "swap",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 2548,
      "end": 3354,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2716,
        "end": 3354,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2722,
            "end": 2843,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2726,
                "end": 2842,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2726,
                  "end": 2779,
                  "decorators": [],
                  "name": "optionalUnionStops",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2744,
                    "end": 2779,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 2746,
                      "end": 2779,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 2748,
                          "end": 2777,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2748,
                            "end": 2750,
                            "decorators": [],
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2750,
                            "end": 2777,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 2752,
                              "end": 2777,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 2752,
                                  "end": 2758
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 2761,
                                  "end": 2767
                                },
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 2770,
                                  "end": 2777
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 2782,
                  "end": 2842,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 2784,
                      "end": 2802,
                      "argument": {
                        "type": "Identifier",
                        "start": 2787,
                        "end": 2802,
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 2804,
                      "end": 2821,
                      "argument": {
                        "type": "Identifier",
                        "start": 2807,
                        "end": 2821,
                        "decorators": [],
                        "name": "definiteString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 2823,
                      "end": 2840,
                      "argument": {
                        "type": "Identifier",
                        "start": 2826,
                        "end": 2840,
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 2848,
            "end": 2983,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2852,
                "end": 2982,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2852,
                  "end": 2900,
                  "decorators": [],
                  "name": "optionalUnionDuplicates",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2875,
                    "end": 2900,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 2877,
                      "end": 2900,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 2879,
                          "end": 2898,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2879,
                            "end": 2881,
                            "decorators": [],
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2881,
                            "end": 2898,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 2883,
                              "end": 2898,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 2883,
                                  "end": 2889
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 2892,
                                  "end": 2898
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 2903,
                  "end": 2982,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 2905,
                      "end": 2923,
                      "argument": {
                        "type": "Identifier",
                        "start": 2908,
                        "end": 2923,
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 2925,
                      "end": 2942,
                      "argument": {
                        "type": "Identifier",
                        "start": 2928,
                        "end": 2942,
                        "decorators": [],
                        "name": "definiteString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 2944,
                      "end": 2961,
                      "argument": {
                        "type": "Identifier",
                        "start": 2947,
                        "end": 2961,
                        "decorators": [],
                        "name": "optionalString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 2963,
                      "end": 2980,
                      "argument": {
                        "type": "Identifier",
                        "start": 2966,
                        "end": 2980,
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 2988,
            "end": 3073,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2992,
                "end": 3072,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2992,
                  "end": 3029,
                  "decorators": [],
                  "name": "allOptional",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3003,
                    "end": 3029,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 3005,
                      "end": 3029,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 3007,
                          "end": 3027,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3007,
                            "end": 3009,
                            "decorators": [],
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3010,
                            "end": 3027,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 3012,
                              "end": 3027,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 3012,
                                  "end": 3018
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 3021,
                                  "end": 3027
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 3032,
                  "end": 3072,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 3034,
                      "end": 3051,
                      "argument": {
                        "type": "Identifier",
                        "start": 3037,
                        "end": 3051,
                        "decorators": [],
                        "name": "optionalString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 3053,
                      "end": 3070,
                      "argument": {
                        "type": "Identifier",
                        "start": 3056,
                        "end": 3070,
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 3104,
            "end": 3232,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3108,
                "end": 3232,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3108,
                  "end": 3176,
                  "decorators": [],
                  "name": "computedFirst",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3121,
                    "end": 3176,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 3123,
                      "end": 3176,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 3125,
                          "end": 3135,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3125,
                            "end": 3126,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3126,
                            "end": 3134,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3128,
                              "end": 3134
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 3136,
                          "end": 3146,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3136,
                            "end": 3137,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3137,
                            "end": 3145,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3139,
                              "end": 3145
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 3147,
                          "end": 3174,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 3147,
                            "end": 3166,
                            "raw": "\"before everything\"",
                            "value": "before everything"
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3166,
                            "end": 3174,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3168,
                              "end": 3174
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 3187,
                  "end": 3232,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 3189,
                      "end": 3214,
                      "computed": true,
                      "key": {
                        "type": "Literal",
                        "start": 3190,
                        "end": 3209,
                        "raw": "'before everything'",
                        "value": "before everything"
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 3212,
                        "end": 3214,
                        "raw": "12",
                        "value": 12
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 3216,
                      "end": 3220,
                      "argument": {
                        "type": "Identifier",
                        "start": 3219,
                        "end": 3220,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 3222,
                      "end": 3230,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3222,
                        "end": 3223,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 3225,
                        "end": 3230,
                        "raw": "'yes'",
                        "value": "yes"
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 3237,
            "end": 3352,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3241,
                "end": 3352,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3241,
                  "end": 3302,
                  "decorators": [],
                  "name": "computedAfter",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3254,
                    "end": 3302,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 3256,
                      "end": 3302,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 3258,
                          "end": 3268,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3258,
                            "end": 3259,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3259,
                            "end": 3267,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3261,
                              "end": 3267
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 3269,
                          "end": 3279,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3269,
                            "end": 3270,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3270,
                            "end": 3278,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3272,
                              "end": 3278
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 3280,
                          "end": 3300,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 3280,
                            "end": 3292,
                            "raw": "\"at the end\"",
                            "value": "at the end"
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3292,
                            "end": 3300,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3294,
                              "end": 3300
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 3313,
                  "end": 3352,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 3315,
                      "end": 3319,
                      "argument": {
                        "type": "Identifier",
                        "start": 3318,
                        "end": 3319,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 3321,
                      "end": 3330,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3321,
                        "end": 3322,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 3324,
                        "end": 3330,
                        "raw": "'yeah'",
                        "value": "yeah"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 3332,
                      "end": 3350,
                      "computed": true,
                      "key": {
                        "type": "Literal",
                        "start": 3333,
                        "end": 3345,
                        "raw": "'at the end'",
                        "value": "at the end"
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 3348,
                        "end": 3350,
                        "raw": "14",
                        "value": 14
                      }
                    }
                  ]
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
        "start": 2557,
        "end": 2566,
        "decorators": [],
        "name": "container",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2572,
          "end": 2604,
          "decorators": [],
          "name": "definiteBoolean",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2587,
            "end": 2604,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2589,
              "end": 2604,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2591,
                  "end": 2602,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2591,
                    "end": 2593,
                    "decorators": [],
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2593,
                    "end": 2602,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2595,
                      "end": 2602
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2610,
          "end": 2640,
          "decorators": [],
          "name": "definiteString",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2624,
            "end": 2640,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2626,
              "end": 2640,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2628,
                  "end": 2638,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2628,
                    "end": 2630,
                    "decorators": [],
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2630,
                    "end": 2638,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2632,
                      "end": 2638
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2646,
          "end": 2677,
          "decorators": [],
          "name": "optionalString",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2660,
            "end": 2677,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2662,
              "end": 2677,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2664,
                  "end": 2675,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2664,
                    "end": 2666,
                    "decorators": [],
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2667,
                    "end": 2675,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2669,
                      "end": 2675
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2683,
          "end": 2714,
          "decorators": [],
          "name": "optionalNumber",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2697,
            "end": 2714,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2699,
              "end": 2714,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2701,
                  "end": 2712,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2701,
                    "end": 2703,
                    "decorators": [],
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2704,
                    "end": 2712,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2706,
                      "end": 2712
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3374,
      "end": 3385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3378,
          "end": 3384,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3378,
            "end": 3379,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 3382,
            "end": 3384,
            "raw": "12",
            "value": 12
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 3386,
      "end": 3441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3390,
          "end": 3441,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3390,
            "end": 3427,
            "decorators": [],
            "name": "shortCutted",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3401,
              "end": 3427,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 3403,
                "end": 3427,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 3405,
                    "end": 3415,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3405,
                      "end": 3406,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3406,
                      "end": 3414,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3408,
                        "end": 3414
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3416,
                    "end": 3425,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3416,
                      "end": 3417,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3417,
                      "end": 3425,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3419,
                        "end": 3425
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 3430,
            "end": 3441,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 3432,
                "end": 3436,
                "argument": {
                  "type": "Identifier",
                  "start": 3435,
                  "end": 3436,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 3438,
                "end": 3439,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3438,
                  "end": 3439,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 3438,
                  "end": 3439,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 3459,
      "end": 3501,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3463,
          "end": 3500,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3463,
            "end": 3481,
            "decorators": [],
            "name": "spreadNonPrimitive",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 3484,
            "end": 3500,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 3486,
                "end": 3499,
                "argument": {
                  "type": "TSTypeAssertion",
                  "start": 3489,
                  "end": 3499,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 3497,
                    "end": 3499,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 3490,
                    "end": 3496
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 3523,
      "end": 3592,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3552,
        "end": 3592,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3558,
            "end": 3590,
            "argument": {
              "type": "ObjectExpression",
              "start": 3565,
              "end": 3589,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 3567,
                  "end": 3571,
                  "argument": {
                    "type": "Identifier",
                    "start": 3570,
                    "end": 3571,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 3573,
                  "end": 3577,
                  "argument": {
                    "type": "Identifier",
                    "start": 3576,
                    "end": 3577,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 3579,
                  "end": 3587,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3579,
                    "end": 3581,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 3583,
                    "end": 3587,
                    "raw": "'id'",
                    "value": "id"
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3532,
        "end": 3533,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3540,
          "end": 3544,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3541,
            "end": 3544,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3543,
              "end": 3544,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3543,
                "end": 3544,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3546,
          "end": 3550,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3547,
            "end": 3550,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3549,
              "end": 3550,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3549,
                "end": 3550,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3533,
        "end": 3539,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3534,
            "end": 3535,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3534,
              "end": 3535,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3537,
            "end": 3538,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3537,
              "end": 3538,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3594,
      "end": 3719,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3598,
          "end": 3719,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3598,
            "end": 3668,
            "decorators": [],
            "name": "exclusive",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3607,
              "end": 3668,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 3609,
                "end": 3668,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 3611,
                    "end": 3622,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3611,
                      "end": 3613,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3613,
                      "end": 3621,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3615,
                        "end": 3621
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3623,
                    "end": 3633,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3623,
                      "end": 3624,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3624,
                      "end": 3632,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3626,
                        "end": 3632
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3634,
                    "end": 3644,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3634,
                      "end": 3635,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3635,
                      "end": 3643,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3637,
                        "end": 3643
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3645,
                    "end": 3655,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3645,
                      "end": 3646,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3646,
                      "end": 3654,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3648,
                        "end": 3654
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3656,
                    "end": 3666,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3656,
                      "end": 3657,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3657,
                      "end": 3666,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3659,
                        "end": 3666
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 3675,
            "end": 3719,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3677,
                "end": 3695,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3679,
                    "end": 3683,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3679,
                      "end": 3680,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3682,
                      "end": 3683,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "Property",
                    "start": 3685,
                    "end": 3693,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3685,
                      "end": 3686,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3688,
                      "end": 3693,
                      "raw": "'yes'",
                      "value": "yes"
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 3697,
                "end": 3718,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3699,
                    "end": 3706,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3699,
                      "end": 3700,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3702,
                      "end": 3706,
                      "raw": "'no'",
                      "value": "no"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 3708,
                    "end": 3716,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3708,
                      "end": 3709,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3711,
                      "end": 3716,
                      "raw": "false",
                      "value": false
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3675,
              "end": 3676,
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
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 3720,
      "end": 3809,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3724,
          "end": 3809,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3724,
            "end": 3769,
            "decorators": [],
            "name": "overlap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3731,
              "end": 3769,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 3733,
                "end": 3769,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 3735,
                    "end": 3746,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3735,
                      "end": 3737,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3737,
                      "end": 3745,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3739,
                        "end": 3745
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3747,
                    "end": 3757,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3747,
                      "end": 3748,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3748,
                      "end": 3756,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3750,
                        "end": 3756
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3758,
                    "end": 3767,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3758,
                      "end": 3759,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3759,
                      "end": 3767,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3761,
                        "end": 3767
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 3776,
            "end": 3809,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3778,
                "end": 3786,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3780,
                    "end": 3784,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3780,
                      "end": 3781,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3783,
                      "end": 3784,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 3788,
                "end": 3808,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3790,
                    "end": 3794,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3790,
                      "end": 3791,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3793,
                      "end": 3794,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  {
                    "type": "Property",
                    "start": 3796,
                    "end": 3806,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3796,
                      "end": 3797,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3799,
                      "end": 3806,
                      "raw": "'extra'",
                      "value": "extra"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3776,
              "end": 3777,
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
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 3810,
      "end": 3892,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3814,
          "end": 3892,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3814,
            "end": 3855,
            "decorators": [],
            "name": "overlapConflict",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3829,
              "end": 3855,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 3831,
                "end": 3855,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 3833,
                    "end": 3843,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3833,
                      "end": 3835,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3835,
                      "end": 3842,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3836,
                        "end": 3842
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3844,
                    "end": 3853,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3844,
                      "end": 3845,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3845,
                      "end": 3853,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3847,
                        "end": 3853
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 3862,
            "end": 3892,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3864,
                "end": 3872,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3866,
                    "end": 3870,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3866,
                      "end": 3867,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3869,
                      "end": 3870,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 3874,
                "end": 3891,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3876,
                    "end": 3889,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3876,
                      "end": 3877,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3879,
                      "end": 3889,
                      "raw": "'mismatch'",
                      "value": "mismatch"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3862,
              "end": 3863,
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
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 3893,
      "end": 4004,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3897,
          "end": 4004,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3897,
            "end": 3957,
            "decorators": [],
            "name": "overwriteId",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3908,
              "end": 3957,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 3910,
                "end": 3957,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 3912,
                    "end": 3923,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3912,
                      "end": 3914,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3914,
                      "end": 3922,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3916,
                        "end": 3922
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3924,
                    "end": 3934,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3924,
                      "end": 3925,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3925,
                      "end": 3933,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3927,
                        "end": 3933
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3935,
                    "end": 3945,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3935,
                      "end": 3936,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3936,
                      "end": 3944,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3938,
                        "end": 3944
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3946,
                    "end": 3955,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3946,
                      "end": 3947,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3947,
                      "end": 3955,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3949,
                        "end": 3955
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 3964,
            "end": 4004,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3966,
                "end": 3984,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3968,
                    "end": 3972,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3968,
                      "end": 3969,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3971,
                      "end": 3972,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "Property",
                    "start": 3974,
                    "end": 3982,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3974,
                      "end": 3976,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3978,
                      "end": 3982,
                      "raw": "true",
                      "value": true
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 3986,
                "end": 4003,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3988,
                    "end": 3992,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3988,
                      "end": 3989,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3991,
                      "end": 3992,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "Property",
                    "start": 3994,
                    "end": 4001,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3994,
                      "end": 3995,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3997,
                      "end": 4001,
                      "raw": "'no'",
                      "value": "no"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3964,
              "end": 3965,
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
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 4006,
      "end": 4705,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4099,
        "end": 4705,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4105,
            "end": 4124,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4109,
                "end": 4123,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4109,
                  "end": 4112,
                  "decorators": [],
                  "name": "x01",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 4115,
                  "end": 4123,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 4117,
                      "end": 4121,
                      "argument": {
                        "type": "Identifier",
                        "start": 4120,
                        "end": 4121,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 4129,
            "end": 4154,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4133,
                "end": 4153,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4133,
                  "end": 4136,
                  "decorators": [],
                  "name": "x02",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 4139,
                  "end": 4153,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 4141,
                      "end": 4145,
                      "argument": {
                        "type": "Identifier",
                        "start": 4144,
                        "end": 4145,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4147,
                      "end": 4151,
                      "argument": {
                        "type": "Identifier",
                        "start": 4150,
                        "end": 4151,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 4159,
            "end": 4184,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4163,
                "end": 4183,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4163,
                  "end": 4166,
                  "decorators": [],
                  "name": "x03",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 4169,
                  "end": 4183,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 4171,
                      "end": 4175,
                      "argument": {
                        "type": "Identifier",
                        "start": 4174,
                        "end": 4175,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4177,
                      "end": 4181,
                      "argument": {
                        "type": "Identifier",
                        "start": 4180,
                        "end": 4181,
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 4189,
            "end": 4214,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4193,
                "end": 4213,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4193,
                  "end": 4196,
                  "decorators": [],
                  "name": "x04",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 4199,
                  "end": 4213,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 4201,
                      "end": 4205,
                      "argument": {
                        "type": "Identifier",
                        "start": 4204,
                        "end": 4205,
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4207,
                      "end": 4211,
                      "argument": {
                        "type": "Identifier",
                        "start": 4210,
                        "end": 4211,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 4219,
            "end": 4253,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4223,
                "end": 4252,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4223,
                  "end": 4226,
                  "decorators": [],
                  "name": "x05",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 4229,
                  "end": 4252,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 4231,
                      "end": 4235,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4231,
                        "end": 4232,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 4234,
                        "end": 4235,
                        "raw": "5",
                        "value": 5
                      }
                    },
                    {
                      "type": "Property",
                      "start": 4237,
                      "end": 4244,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4237,
                        "end": 4238,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 4240,
                        "end": 4244,
                        "raw": "'hi'",
                        "value": "hi"
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4246,
                      "end": 4250,
                      "argument": {
                        "type": "Identifier",
                        "start": 4249,
                        "end": 4250,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 4258,
            "end": 4292,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4262,
                "end": 4291,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4262,
                  "end": 4265,
                  "decorators": [],
                  "name": "x06",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 4268,
                  "end": 4291,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 4270,
                      "end": 4274,
                      "argument": {
                        "type": "Identifier",
                        "start": 4273,
                        "end": 4274,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 4276,
                      "end": 4280,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4276,
                        "end": 4277,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 4279,
                        "end": 4280,
                        "raw": "5",
                        "value": 5
                      }
                    },
                    {
                      "type": "Property",
                      "start": 4282,
                      "end": 4289,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4282,
                        "end": 4283,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 4285,
                        "end": 4289,
                        "raw": "'hi'",
                        "value": "hi"
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 4297,
            "end": 4348,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4301,
                "end": 4347,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4301,
                  "end": 4304,
                  "decorators": [],
                  "name": "x07",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 4307,
                  "end": 4347,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 4309,
                      "end": 4313,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4309,
                        "end": 4310,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 4312,
                        "end": 4313,
                        "raw": "5",
                        "value": 5
                      }
                    },
                    {
                      "type": "Property",
                      "start": 4315,
                      "end": 4322,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4315,
                        "end": 4316,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 4318,
                        "end": 4322,
                        "raw": "'hi'",
                        "value": "hi"
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4324,
                      "end": 4328,
                      "argument": {
                        "type": "Identifier",
                        "start": 4327,
                        "end": 4328,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 4330,
                      "end": 4337,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4330,
                        "end": 4331,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 4333,
                        "end": 4337,
                        "raw": "true",
                        "value": true
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4339,
                      "end": 4345,
                      "argument": {
                        "type": "Identifier",
                        "start": 4342,
                        "end": 4345,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 4353,
            "end": 4404,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4357,
                "end": 4403,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4357,
                  "end": 4360,
                  "decorators": [],
                  "name": "x09",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 4363,
                  "end": 4403,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 4365,
                      "end": 4369,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4365,
                        "end": 4366,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 4368,
                        "end": 4369,
                        "raw": "5",
                        "value": 5
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4371,
                      "end": 4375,
                      "argument": {
                        "type": "Identifier",
                        "start": 4374,
                        "end": 4375,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 4377,
                      "end": 4384,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4377,
                        "end": 4378,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 4380,
                        "end": 4384,
                        "raw": "'hi'",
                        "value": "hi"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 4386,
                      "end": 4393,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4386,
                        "end": 4387,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 4389,
                        "end": 4393,
                        "raw": "true",
                        "value": true
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4395,
                      "end": 4401,
                      "argument": {
                        "type": "Identifier",
                        "start": 4398,
                        "end": 4401,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 4409,
            "end": 4457,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4413,
                "end": 4456,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4413,
                  "end": 4416,
                  "decorators": [],
                  "name": "x10",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 4419,
                  "end": 4456,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 4421,
                      "end": 4425,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4421,
                        "end": 4422,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 4424,
                        "end": 4425,
                        "raw": "5",
                        "value": 5
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4427,
                      "end": 4431,
                      "argument": {
                        "type": "Identifier",
                        "start": 4430,
                        "end": 4431,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 4433,
                      "end": 4440,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4433,
                        "end": 4434,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 4436,
                        "end": 4440,
                        "raw": "'hi'",
                        "value": "hi"
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4442,
                      "end": 4446,
                      "argument": {
                        "type": "Identifier",
                        "start": 4445,
                        "end": 4446,
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4448,
                      "end": 4454,
                      "argument": {
                        "type": "Identifier",
                        "start": 4451,
                        "end": 4454,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 4462,
            "end": 4481,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4466,
                "end": 4480,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4466,
                  "end": 4469,
                  "decorators": [],
                  "name": "x11",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 4472,
                  "end": 4480,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 4474,
                      "end": 4478,
                      "argument": {
                        "type": "Identifier",
                        "start": 4477,
                        "end": 4478,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 4486,
            "end": 4513,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4490,
                "end": 4512,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4490,
                  "end": 4493,
                  "decorators": [],
                  "name": "x12",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 4496,
                  "end": 4512,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 4498,
                      "end": 4502,
                      "argument": {
                        "type": "Identifier",
                        "start": 4501,
                        "end": 4502,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4504,
                      "end": 4510,
                      "argument": {
                        "type": "Identifier",
                        "start": 4507,
                        "end": 4510,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 4518,
            "end": 4537,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4522,
                "end": 4536,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4522,
                  "end": 4525,
                  "decorators": [],
                  "name": "x13",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 4528,
                  "end": 4536,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 4530,
                      "end": 4534,
                      "argument": {
                        "type": "Identifier",
                        "start": 4533,
                        "end": 4534,
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 4542,
            "end": 4569,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4546,
                "end": 4568,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4546,
                  "end": 4549,
                  "decorators": [],
                  "name": "x14",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 4552,
                  "end": 4568,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 4554,
                      "end": 4558,
                      "argument": {
                        "type": "Identifier",
                        "start": 4557,
                        "end": 4558,
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4560,
                      "end": 4566,
                      "argument": {
                        "type": "Identifier",
                        "start": 4563,
                        "end": 4566,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 4574,
            "end": 4599,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4578,
                "end": 4598,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4578,
                  "end": 4581,
                  "decorators": [],
                  "name": "x15",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 4584,
                  "end": 4598,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 4586,
                      "end": 4590,
                      "argument": {
                        "type": "Identifier",
                        "start": 4589,
                        "end": 4590,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4592,
                      "end": 4596,
                      "argument": {
                        "type": "Identifier",
                        "start": 4595,
                        "end": 4596,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 4604,
            "end": 4629,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4608,
                "end": 4628,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4608,
                  "end": 4611,
                  "decorators": [],
                  "name": "x16",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 4614,
                  "end": 4628,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 4616,
                      "end": 4620,
                      "argument": {
                        "type": "Identifier",
                        "start": 4619,
                        "end": 4620,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4622,
                      "end": 4626,
                      "argument": {
                        "type": "Identifier",
                        "start": 4625,
                        "end": 4626,
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 4634,
            "end": 4667,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4638,
                "end": 4666,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4638,
                  "end": 4641,
                  "decorators": [],
                  "name": "x17",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 4644,
                  "end": 4666,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 4646,
                      "end": 4650,
                      "argument": {
                        "type": "Identifier",
                        "start": 4649,
                        "end": 4650,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4652,
                      "end": 4656,
                      "argument": {
                        "type": "Identifier",
                        "start": 4655,
                        "end": 4656,
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4658,
                      "end": 4664,
                      "argument": {
                        "type": "Identifier",
                        "start": 4661,
                        "end": 4664,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 4672,
            "end": 4703,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4676,
                "end": 4702,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4676,
                  "end": 4679,
                  "decorators": [],
                  "name": "x18",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 4682,
                  "end": 4702,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 4684,
                      "end": 4688,
                      "argument": {
                        "type": "Identifier",
                        "start": 4687,
                        "end": 4688,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4690,
                      "end": 4694,
                      "argument": {
                        "type": "Identifier",
                        "start": 4693,
                        "end": 4694,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4696,
                      "end": 4700,
                      "argument": {
                        "type": "Identifier",
                        "start": 4699,
                        "end": 4700,
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
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
        "start": 4015,
        "end": 4028,
        "decorators": [],
        "name": "genericSpread",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4035,
          "end": 4039,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4036,
            "end": 4039,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4038,
              "end": 4039,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 4038,
                "end": 4039,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4041,
          "end": 4045,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4042,
            "end": 4045,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4044,
              "end": 4045,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 4044,
                "end": 4045,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4047,
          "end": 4055,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4048,
            "end": 4055,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4050,
              "end": 4055,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 4050,
                  "end": 4051,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4050,
                    "end": 4051,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 4054,
                  "end": 4055,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4054,
                    "end": 4055,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4057,
          "end": 4077,
          "decorators": [],
          "name": "w",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4058,
            "end": 4077,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4060,
              "end": 4077,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 4060,
                  "end": 4061,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4060,
                    "end": 4061,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 4064,
                  "end": 4077,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 4066,
                      "end": 4075,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4066,
                        "end": 4067,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4067,
                        "end": 4075,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4069,
                          "end": 4075
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4079,
          "end": 4097,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4082,
            "end": 4097,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 4084,
              "end": 4097,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 4086,
                  "end": 4095,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4086,
                    "end": 4087,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4087,
                    "end": 4095,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4089,
                      "end": 4095
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4028,
        "end": 4034,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4029,
            "end": 4030,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4029,
              "end": 4030,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4032,
            "end": 4033,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4032,
              "end": 4033,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
