__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4706,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 13,
                  "end": 14,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 16,
                "end": 23,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 19,
                  "end": 23,
                  "value": "no",
                  "raw": "'no'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 32,
            "name": "o2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 40,
                  "end": 45,
                  "value": "yes",
                  "raw": "'yes'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 47,
                "end": 54,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 50,
                  "end": 54,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 65,
            "name": "swap",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 73,
                  "end": 78,
                  "value": "yes",
                  "raw": "'yes'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 80,
                "end": 85,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "UnaryExpression",
                  "start": 83,
                  "end": 85,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 84,
                    "end": 85,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 140,
            "name": "addAfter",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 106,
                      "end": 107,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 107,
                      "end": 115,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 109,
                        "end": 115
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 117,
                    "end": 127,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 118,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 118,
                      "end": 126,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 120,
                        "end": 126
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 128,
                    "end": 138,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 129,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 129,
                      "end": 138,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 131,
                        "end": 138
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
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 155,
                "end": 163,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 158,
                  "end": 163,
                  "value": false,
                  "raw": "false"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 217,
            "name": "addBefore",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 183,
                      "end": 184,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 184,
                      "end": 192,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 186,
                        "end": 192
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 194,
                    "end": 204,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 195,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 195,
                      "end": 203,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 197,
                        "end": 203
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 205,
                    "end": 215,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 206,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 206,
                      "end": 215,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 208,
                        "end": 215
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
            "type": "ObjectExpression",
            "start": 224,
            "end": 242,
            "properties": [
              {
                "type": "Property",
                "start": 226,
                "end": 234,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 229,
                  "end": 234,
                  "value": false,
                  "raw": "false"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "SpreadElement",
                "start": 236,
                "end": 240,
                "argument": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 240,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 247,
            "end": 281,
            "name": "override",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 260,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 260,
                      "end": 268,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 262,
                        "end": 268
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 270,
                    "end": 279,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 271,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 271,
                      "end": 279,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 273,
                        "end": 279
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
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 296,
                "end": 309,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 297,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 299,
                  "end": 309,
                  "value": "override",
                  "raw": "'override'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 360,
            "name": "nested",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 327,
                      "end": 335,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 329,
                        "end": 335
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 337,
                    "end": 348,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 337,
                      "end": 338,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 338,
                      "end": 347,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 340,
                        "end": 347
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 349,
                    "end": 358,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 349,
                      "end": 350,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 350,
                      "end": 358,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 352,
                        "end": 358
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 374,
                        "end": 375,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 377,
                        "end": 378,
                        "value": 3,
                        "raw": "3"
                      },
                      "kind": "init",
                      "optional": false
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 385,
                              "end": 386,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 388,
                              "end": 393,
                              "value": false,
                              "raw": "false"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 395,
                            "end": 409,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 395,
                              "end": 396,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 398,
                              "end": 409,
                              "value": "overriden",
                              "raw": "'overriden'"
                            },
                            "kind": "init",
                            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 416,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 418,
                  "end": 428,
                  "value": "whatever",
                  "raw": "'whatever'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 435,
            "end": 481,
            "name": "combined",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 447,
                      "end": 448,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 448,
                      "end": 456,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 450,
                        "end": 456
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 458,
                    "end": 468,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 458,
                      "end": 459,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 459,
                      "end": 467,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 461,
                        "end": 467
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 469,
                    "end": 479,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 469,
                      "end": 470,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 470,
                      "end": 479,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 472,
                        "end": 479
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
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "o2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 508,
            "end": 559,
            "name": "combinedAfter",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 525,
                      "end": 526,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 526,
                      "end": 534,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 528,
                        "end": 534
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 536,
                    "end": 546,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 536,
                      "end": 537,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 537,
                      "end": 545,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 539,
                        "end": 545
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 547,
                    "end": 557,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 547,
                      "end": 548,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 548,
                      "end": 557,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 550,
                        "end": 557
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
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "o2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 581,
                "end": 588,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 581,
                  "end": 582,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 584,
                  "end": 588,
                  "value": "ok",
                  "raw": "'ok'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 595,
            "end": 657,
            "name": "combinedNestedChangeType",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 623,
                      "end": 624,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 624,
                      "end": 632,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 626,
                        "end": 632
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 634,
                    "end": 645,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 634,
                      "end": 635,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 635,
                      "end": 644,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 637,
                        "end": 644
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 646,
                    "end": 655,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 646,
                      "end": 647,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 647,
                      "end": 655,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 649,
                        "end": 655
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 671,
                        "end": 672,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 674,
                        "end": 675,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 682,
                              "end": 683,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 685,
                              "end": 690,
                              "value": false,
                              "raw": "false"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 692,
                            "end": 706,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 692,
                              "end": 693,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 695,
                              "end": 706,
                              "value": "overriden",
                              "raw": "'overriden'"
                            },
                            "kind": "init",
                            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 712,
                  "end": 713,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "UnaryExpression",
                  "start": 715,
                  "end": 717,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 716,
                    "end": 717,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 724,
            "end": 771,
            "name": "propertyNested",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 742,
                      "end": 743,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 747,
                              "end": 748,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 748,
                              "end": 756,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 750,
                                "end": 756
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 758,
                            "end": 767,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 758,
                              "end": 759,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 759,
                              "end": 767,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 761,
                                "end": 767
                              }
                            },
                            "accessibility": null,
                            "static": false
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
          "init": {
            "type": "ObjectExpression",
            "start": 778,
            "end": 794,
            "properties": [
              {
                "type": "Property",
                "start": 780,
                "end": 792,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 780,
                  "end": 781,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 906,
            "end": 908,
            "name": "op",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 917,
                  "end": 918,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 919,
                  "end": 934,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "value": 6,
                          "raw": "6"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 942,
            "end": 974,
            "name": "getter",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 952,
                      "end": 953,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 953,
                      "end": 961,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 955,
                        "end": 961
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 963,
                    "end": 972,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 963,
                      "end": 964,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 964,
                      "end": 972,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 966,
                        "end": 972
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
                  "name": "op",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 990,
                "end": 994,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 990,
                  "end": 991,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 993,
                  "end": 994,
                  "value": 7,
                  "raw": "7"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 997,
      "end": 1011,
      "expression": {
        "type": "AssignmentExpression",
        "start": 997,
        "end": 1010,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 997,
          "end": 1005,
          "object": {
            "type": "Identifier",
            "start": 997,
            "end": 1003,
            "name": "getter",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1004,
            "end": 1005,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1008,
          "end": 1010,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 1044,
            "end": 1054,
            "name": "spreadFunc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1075,
                    "end": 1078,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1084,
      "end": 1147,
      "id": {
        "type": "Identifier",
        "start": 1089,
        "end": 1095,
        "name": "Header",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1098,
        "end": 1147,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1100,
            "end": 1113,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1100,
              "end": 1104,
              "name": "head",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1104,
              "end": 1112,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1106,
                "end": 1112
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1114,
            "end": 1127,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1114,
              "end": 1118,
              "name": "body",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1118,
              "end": 1126,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1120,
                "end": 1126
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1128,
            "end": 1145,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1128,
              "end": 1137,
              "name": "authToken",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1137,
              "end": 1145,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1139,
                "end": 1145
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
      "type": "FunctionDeclaration",
      "start": 1148,
      "end": 1339,
      "id": {
        "type": "Identifier",
        "start": 1157,
        "end": 1166,
        "name": "from16326",
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
          "start": 1167,
          "end": 1191,
          "name": "this",
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1175,
                    "end": 1181,
                    "name": "header",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1181,
                    "end": 1189,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1183,
                      "end": 1189,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1183,
                        "end": 1189,
                        "name": "Header",
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
        {
          "type": "Identifier",
          "start": 1193,
          "end": 1207,
          "name": "header",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1199,
            "end": 1207,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1201,
              "end": 1207,
              "typeName": {
                "type": "Identifier",
                "start": 1201,
                "end": 1207,
                "name": "Header",
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
          "start": 1209,
          "end": 1226,
          "name": "authToken",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1218,
            "end": 1226,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1220,
              "end": 1226
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                    "object": {
                      "type": "ThisExpression",
                      "start": 1262,
                      "end": 1266
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1267,
                      "end": 1273,
                      "name": "header",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
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
                    "name": "header",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "left": {
                      "type": "Identifier",
                      "start": 1305,
                      "end": 1314,
                      "name": "authToken",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 1318,
                      "end": 1331,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1320,
                          "end": 1329,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1320,
                            "end": 1329,
                            "name": "authToken",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1320,
                            "end": 1329,
                            "name": "authToken",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
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
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1227,
        "end": 1235,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1229,
          "end": 1235,
          "typeName": {
            "type": "Identifier",
            "start": 1229,
            "end": 1235,
            "name": "Header",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1378,
      "end": 1587,
      "id": {
        "type": "Identifier",
        "start": 1387,
        "end": 1411,
        "name": "conditionalSpreadBoolean",
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
          "start": 1412,
          "end": 1422,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1413,
            "end": 1422,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1415,
              "end": 1422
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 1461,
                  "end": 1462,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1467,
                        "end": 1468,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1470,
                        "end": 1472,
                        "value": 12,
                        "raw": "12"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1474,
                      "end": 1479,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1474,
                        "end": 1475,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1477,
                        "end": 1479,
                        "value": 13,
                        "raw": "13"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1486,
            "end": 1537,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1486,
              "end": 1537,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1486,
                "end": 1487,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "left": {
                        "type": "Identifier",
                        "start": 1517,
                        "end": 1518,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "&&",
                      "right": {
                        "type": "ObjectExpression",
                        "start": 1522,
                        "end": 1531,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1524,
                            "end": 1529,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1524,
                              "end": 1525,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1527,
                              "end": 1529,
                              "value": 14,
                              "raw": "14"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            },
            "directive": null
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
                "id": {
                  "type": "Identifier",
                  "start": 1546,
                  "end": 1548,
                  "name": "o2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "left": {
                          "type": "Identifier",
                          "start": 1556,
                          "end": 1557,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "&&",
                        "right": {
                          "type": "ObjectExpression",
                          "start": 1561,
                          "end": 1570,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1563,
                              "end": 1568,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1563,
                                "end": 1564,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 1566,
                                "end": 1568,
                                "value": 21,
                                "raw": "21"
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        }
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 1576,
            "end": 1585,
            "argument": {
              "type": "Identifier",
              "start": 1583,
              "end": 1584,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1428,
                "end": 1429,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1429,
                "end": 1437,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1431,
                  "end": 1437
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1439,
              "end": 1448,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1439,
                "end": 1440,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1440,
                "end": 1448,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1442,
                  "end": 1448
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1588,
      "end": 1797,
      "id": {
        "type": "Identifier",
        "start": 1597,
        "end": 1620,
        "name": "conditionalSpreadNumber",
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
          "start": 1621,
          "end": 1631,
          "name": "nt",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1623,
            "end": 1631,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1625,
              "end": 1631
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 1669,
                  "end": 1670,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1675,
                        "end": 1676,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1678,
                        "end": 1680,
                        "value": 15,
                        "raw": "15"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1682,
                      "end": 1687,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1682,
                        "end": 1683,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1685,
                        "end": 1687,
                        "value": 16,
                        "raw": "16"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1694,
            "end": 1746,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1694,
              "end": 1746,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1694,
                "end": 1695,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "left": {
                        "type": "Identifier",
                        "start": 1725,
                        "end": 1727,
                        "name": "nt",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "&&",
                      "right": {
                        "type": "ObjectExpression",
                        "start": 1731,
                        "end": 1740,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1733,
                            "end": 1738,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1733,
                              "end": 1734,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1736,
                              "end": 1738,
                              "name": "nt",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            },
            "directive": null
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
                "id": {
                  "type": "Identifier",
                  "start": 1755,
                  "end": 1757,
                  "name": "o2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "left": {
                          "type": "Identifier",
                          "start": 1765,
                          "end": 1767,
                          "name": "nt",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "&&",
                        "right": {
                          "type": "ObjectExpression",
                          "start": 1771,
                          "end": 1780,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1773,
                              "end": 1778,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1773,
                                "end": 1774,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 1776,
                                "end": 1778,
                                "name": "nt",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        }
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 1786,
            "end": 1795,
            "argument": {
              "type": "Identifier",
              "start": 1793,
              "end": 1794,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1636,
                "end": 1637,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1637,
                "end": 1645,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1639,
                  "end": 1645
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1647,
              "end": 1656,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1647,
                "end": 1648,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1648,
                "end": 1656,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1650,
                  "end": 1656
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1798,
      "end": 2009,
      "id": {
        "type": "Identifier",
        "start": 1807,
        "end": 1830,
        "name": "conditionalSpreadString",
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
          "start": 1831,
          "end": 1841,
          "name": "st",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1833,
            "end": 1841,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1835,
              "end": 1841
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 1879,
                  "end": 1880,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1885,
                        "end": 1886,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1888,
                        "end": 1892,
                        "value": "hi",
                        "raw": "'hi'"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1894,
                      "end": 1899,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1894,
                        "end": 1895,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1897,
                        "end": 1899,
                        "value": 17,
                        "raw": "17"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1906,
            "end": 1958,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1906,
              "end": 1958,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1906,
                "end": 1907,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "left": {
                        "type": "Identifier",
                        "start": 1937,
                        "end": 1939,
                        "name": "st",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "&&",
                      "right": {
                        "type": "ObjectExpression",
                        "start": 1943,
                        "end": 1952,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1945,
                            "end": 1950,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1945,
                              "end": 1946,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1948,
                              "end": 1950,
                              "name": "st",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            },
            "directive": null
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
                "id": {
                  "type": "Identifier",
                  "start": 1967,
                  "end": 1969,
                  "name": "o2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "left": {
                          "type": "Identifier",
                          "start": 1977,
                          "end": 1979,
                          "name": "st",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "&&",
                        "right": {
                          "type": "ObjectExpression",
                          "start": 1983,
                          "end": 1992,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1985,
                              "end": 1990,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1985,
                                "end": 1986,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 1988,
                                "end": 1990,
                                "name": "st",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        }
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 1998,
            "end": 2007,
            "argument": {
              "type": "Identifier",
              "start": 2005,
              "end": 2006,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1846,
                "end": 1847,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1847,
                "end": 1855,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1849,
                  "end": 1855
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1857,
              "end": 1866,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1857,
                "end": 1858,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1858,
                "end": 1866,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1860,
                  "end": 1866
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 2037,
            "end": 2050,
            "name": "anything",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2045,
              "end": 2050,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2047,
                "end": 2050
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 2056,
            "end": 2065,
            "name": "spreadAny",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "anything",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2116,
      "end": 2142,
      "id": {
        "type": "Identifier",
        "start": 2122,
        "end": 2123,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2124,
        "end": 2142,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2126,
            "end": 2132,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2126,
              "end": 2127,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 2130,
              "end": 2131,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2133,
            "end": 2140,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2133,
              "end": 2134,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2134,
              "end": 2140,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2137,
                "end": 2140,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 2147,
            "end": 2151,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2148,
              "end": 2151,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2150,
                "end": 2151,
                "typeName": {
                  "type": "Identifier",
                  "start": 2150,
                  "end": 2151,
                  "name": "C",
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
          "init": {
            "type": "NewExpression",
            "start": 2154,
            "end": 2161,
            "callee": {
              "type": "Identifier",
              "start": 2158,
              "end": 2159,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 2166,
            "end": 2188,
            "name": "spreadC",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2177,
                      "end": 2178,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2178,
                      "end": 2186,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2180,
                        "end": 2186
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 2235,
            "end": 2269,
            "name": "cplus",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2244,
                      "end": 2245,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2245,
                      "end": 2253,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2247,
                        "end": 2253
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 2255,
                    "end": 2267,
                    "key": {
                      "type": "Identifier",
                      "start": 2255,
                      "end": 2259,
                      "name": "plus",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 2280,
                "end": 2309,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2280,
                  "end": 2284,
                  "name": "plus",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 2284,
                  "end": 2309,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "left": {
                            "type": "MemberExpression",
                            "start": 2296,
                            "end": 2302,
                            "object": {
                              "type": "ThisExpression",
                              "start": 2296,
                              "end": 2300
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2301,
                              "end": 2302,
                              "name": "p",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 2305,
                            "end": 2306,
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2313,
      "end": 2326,
      "expression": {
        "type": "CallExpression",
        "start": 2313,
        "end": 2325,
        "callee": {
          "type": "MemberExpression",
          "start": 2313,
          "end": 2323,
          "object": {
            "type": "Identifier",
            "start": 2313,
            "end": 2318,
            "name": "cplus",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2319,
            "end": 2323,
            "name": "plus",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 2390,
            "end": 2431,
            "name": "changeTypeAfter",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2409,
                      "end": 2410,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2410,
                      "end": 2418,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2412,
                        "end": 2418
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2420,
                    "end": 2429,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2420,
                      "end": 2421,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2421,
                      "end": 2429,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2423,
                        "end": 2429
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
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 2446,
                "end": 2462,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2446,
                  "end": 2447,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2449,
                  "end": 2462,
                  "value": "wrong type?",
                  "raw": "'wrong type?'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 2469,
            "end": 2509,
            "name": "changeTypeBoth",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2487,
                      "end": 2488,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2488,
                      "end": 2496,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2490,
                        "end": 2496
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2498,
                    "end": 2507,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2498,
                      "end": 2499,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2499,
                      "end": 2507,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2501,
                        "end": 2507
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
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "swap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2548,
      "end": 3354,
      "id": {
        "type": "Identifier",
        "start": 2557,
        "end": 2566,
        "name": "container",
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
          "start": 2572,
          "end": 2604,
          "name": "definiteBoolean",
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2591,
                    "end": 2593,
                    "name": "sn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2593,
                    "end": 2602,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2595,
                      "end": 2602
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
        {
          "type": "Identifier",
          "start": 2610,
          "end": 2640,
          "name": "definiteString",
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2628,
                    "end": 2630,
                    "name": "sn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2630,
                    "end": 2638,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2632,
                      "end": 2638
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
        {
          "type": "Identifier",
          "start": 2646,
          "end": 2677,
          "name": "optionalString",
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
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2664,
                    "end": 2666,
                    "name": "sn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2667,
                    "end": 2675,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2669,
                      "end": 2675
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
        {
          "type": "Identifier",
          "start": 2683,
          "end": 2714,
          "name": "optionalNumber",
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
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2701,
                    "end": 2703,
                    "name": "sn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2704,
                    "end": 2712,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2706,
                      "end": 2712
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
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 2726,
                  "end": 2779,
                  "name": "optionalUnionStops",
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2748,
                            "end": 2750,
                            "name": "sn",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                        "name": "definiteBoolean",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "definiteString",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "optionalNumber",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2852,
                  "end": 2900,
                  "name": "optionalUnionDuplicates",
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2879,
                            "end": 2881,
                            "name": "sn",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                        "name": "definiteBoolean",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "definiteString",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "optionalString",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "optionalNumber",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2992,
                  "end": 3029,
                  "name": "allOptional",
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
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3007,
                            "end": 3009,
                            "name": "sn",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                        "name": "optionalString",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "optionalNumber",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 3108,
                  "end": 3176,
                  "name": "computedFirst",
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3125,
                            "end": 3126,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3126,
                            "end": 3134,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3128,
                              "end": 3134
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 3136,
                          "end": 3146,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3136,
                            "end": 3137,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3137,
                            "end": 3145,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3139,
                              "end": 3145
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 3147,
                          "end": 3174,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Literal",
                            "start": 3147,
                            "end": 3166,
                            "value": "before everything",
                            "raw": "\"before everything\""
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3166,
                            "end": 3174,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3168,
                              "end": 3174
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
                  "type": "ObjectExpression",
                  "start": 3187,
                  "end": 3232,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 3189,
                      "end": 3214,
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "Literal",
                        "start": 3190,
                        "end": 3209,
                        "value": "before everything",
                        "raw": "'before everything'"
                      },
                      "value": {
                        "type": "Literal",
                        "start": 3212,
                        "end": 3214,
                        "value": 12,
                        "raw": "12"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "SpreadElement",
                      "start": 3216,
                      "end": 3220,
                      "argument": {
                        "type": "Identifier",
                        "start": 3219,
                        "end": 3220,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 3222,
                      "end": 3230,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3222,
                        "end": 3223,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 3225,
                        "end": 3230,
                        "value": "yes",
                        "raw": "'yes'"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 3241,
                  "end": 3302,
                  "name": "computedAfter",
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3258,
                            "end": 3259,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3259,
                            "end": 3267,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3261,
                              "end": 3267
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 3269,
                          "end": 3279,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3269,
                            "end": 3270,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3270,
                            "end": 3278,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3272,
                              "end": 3278
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 3280,
                          "end": 3300,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Literal",
                            "start": 3280,
                            "end": 3292,
                            "value": "at the end",
                            "raw": "\"at the end\""
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3292,
                            "end": 3300,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3294,
                              "end": 3300
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
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 3321,
                      "end": 3330,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3321,
                        "end": 3322,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 3324,
                        "end": 3330,
                        "value": "yeah",
                        "raw": "'yeah'"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 3332,
                      "end": 3350,
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "Literal",
                        "start": 3333,
                        "end": 3345,
                        "value": "at the end",
                        "raw": "'at the end'"
                      },
                      "value": {
                        "type": "Literal",
                        "start": 3348,
                        "end": 3350,
                        "value": 14,
                        "raw": "14"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
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
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 3378,
            "end": 3379,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 3382,
            "end": 3384,
            "value": 12,
            "raw": "12"
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3390,
            "end": 3427,
            "name": "shortCutted",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3405,
                      "end": 3406,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3406,
                      "end": 3414,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3408,
                        "end": 3414
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3416,
                    "end": 3425,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3416,
                      "end": 3417,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3417,
                      "end": 3425,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3419,
                        "end": 3425
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
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 3438,
                "end": 3439,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3438,
                  "end": 3439,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 3438,
                  "end": 3439,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3463,
            "end": 3481,
            "name": "spreadNonPrimitive",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3523,
      "end": 3592,
      "id": {
        "type": "Identifier",
        "start": 3532,
        "end": 3533,
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
          "start": 3540,
          "end": 3544,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3541,
            "end": 3544,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3543,
              "end": 3544,
              "typeName": {
                "type": "Identifier",
                "start": 3543,
                "end": 3544,
                "name": "T",
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
          "start": 3546,
          "end": 3550,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3547,
            "end": 3550,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3549,
              "end": 3550,
              "typeName": {
                "type": "Identifier",
                "start": 3549,
                "end": 3550,
                "name": "U",
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
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "Property",
                  "start": 3579,
                  "end": 3587,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3579,
                    "end": 3581,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3583,
                    "end": 3587,
                    "value": "id",
                    "raw": "'id'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3533,
        "end": 3539,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3534,
            "end": 3535,
            "name": {
              "type": "Identifier",
              "start": 3534,
              "end": 3535,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 3537,
            "end": 3538,
            "name": {
              "type": "Identifier",
              "start": 3537,
              "end": 3538,
              "name": "U",
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
          "id": {
            "type": "Identifier",
            "start": 3598,
            "end": 3668,
            "name": "exclusive",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3611,
                      "end": 3613,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3613,
                      "end": 3621,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3615,
                        "end": 3621
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3623,
                    "end": 3633,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3623,
                      "end": 3624,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3624,
                      "end": 3632,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3626,
                        "end": 3632
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3634,
                    "end": 3644,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3634,
                      "end": 3635,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3635,
                      "end": 3643,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3637,
                        "end": 3643
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3645,
                    "end": 3655,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3645,
                      "end": 3646,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3646,
                      "end": 3654,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3648,
                        "end": 3654
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3656,
                    "end": 3666,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3656,
                      "end": 3657,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3657,
                      "end": 3666,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3659,
                        "end": 3666
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
            "type": "CallExpression",
            "start": 3675,
            "end": 3719,
            "callee": {
              "type": "Identifier",
              "start": 3675,
              "end": 3676,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3679,
                      "end": 3680,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3682,
                      "end": 3683,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3685,
                    "end": 3693,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3685,
                      "end": 3686,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3688,
                      "end": 3693,
                      "value": "yes",
                      "raw": "'yes'"
                    },
                    "kind": "init",
                    "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3699,
                      "end": 3700,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3702,
                      "end": 3706,
                      "value": "no",
                      "raw": "'no'"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3708,
                    "end": 3716,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3708,
                      "end": 3709,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3711,
                      "end": 3716,
                      "value": false,
                      "raw": "false"
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
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3724,
            "end": 3769,
            "name": "overlap",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3735,
                      "end": 3737,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3737,
                      "end": 3745,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3739,
                        "end": 3745
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3747,
                    "end": 3757,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3747,
                      "end": 3748,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3748,
                      "end": 3756,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3750,
                        "end": 3756
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3758,
                    "end": 3767,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3758,
                      "end": 3759,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3759,
                      "end": 3767,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3761,
                        "end": 3767
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
            "type": "CallExpression",
            "start": 3776,
            "end": 3809,
            "callee": {
              "type": "Identifier",
              "start": 3776,
              "end": 3777,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3780,
                      "end": 3781,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3783,
                      "end": 3784,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3790,
                      "end": 3791,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3793,
                      "end": 3794,
                      "value": 2,
                      "raw": "2"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3796,
                    "end": 3806,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3796,
                      "end": 3797,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3799,
                      "end": 3806,
                      "value": "extra",
                      "raw": "'extra'"
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
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3814,
            "end": 3855,
            "name": "overlapConflict",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3833,
                      "end": 3835,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3835,
                      "end": 3842,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3836,
                        "end": 3842
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3844,
                    "end": 3853,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3844,
                      "end": 3845,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3845,
                      "end": 3853,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3847,
                        "end": 3853
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
            "type": "CallExpression",
            "start": 3862,
            "end": 3892,
            "callee": {
              "type": "Identifier",
              "start": 3862,
              "end": 3863,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3866,
                      "end": 3867,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3869,
                      "end": 3870,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3876,
                      "end": 3877,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3879,
                      "end": 3889,
                      "value": "mismatch",
                      "raw": "'mismatch'"
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
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3897,
            "end": 3957,
            "name": "overwriteId",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3912,
                      "end": 3914,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3914,
                      "end": 3922,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3916,
                        "end": 3922
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3924,
                    "end": 3934,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3924,
                      "end": 3925,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3925,
                      "end": 3933,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3927,
                        "end": 3933
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3935,
                    "end": 3945,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3935,
                      "end": 3936,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3936,
                      "end": 3944,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3938,
                        "end": 3944
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3946,
                    "end": 3955,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3946,
                      "end": 3947,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3947,
                      "end": 3955,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3949,
                        "end": 3955
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
            "type": "CallExpression",
            "start": 3964,
            "end": 4004,
            "callee": {
              "type": "Identifier",
              "start": 3964,
              "end": 3965,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3968,
                      "end": 3969,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3971,
                      "end": 3972,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3974,
                    "end": 3982,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3974,
                      "end": 3976,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3978,
                      "end": 3982,
                      "value": true,
                      "raw": "true"
                    },
                    "kind": "init",
                    "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3988,
                      "end": 3989,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3991,
                      "end": 3992,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3994,
                    "end": 4001,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3994,
                      "end": 3995,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3997,
                      "end": 4001,
                      "value": "no",
                      "raw": "'no'"
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4006,
      "end": 4705,
      "id": {
        "type": "Identifier",
        "start": 4015,
        "end": 4028,
        "name": "genericSpread",
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
          "start": 4035,
          "end": 4039,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4036,
            "end": 4039,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4038,
              "end": 4039,
              "typeName": {
                "type": "Identifier",
                "start": 4038,
                "end": 4039,
                "name": "T",
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
          "start": 4041,
          "end": 4045,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4042,
            "end": 4045,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4044,
              "end": 4045,
              "typeName": {
                "type": "Identifier",
                "start": 4044,
                "end": 4045,
                "name": "U",
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
          "start": 4047,
          "end": 4055,
          "name": "v",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 4050,
                    "end": 4051,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 4054,
                  "end": 4055,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4054,
                    "end": 4055,
                    "name": "U",
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
        },
        {
          "type": "Identifier",
          "start": 4057,
          "end": 4077,
          "name": "w",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 4060,
                    "end": 4061,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4066,
                        "end": 4067,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4067,
                        "end": 4075,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4069,
                          "end": 4075
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
        },
        {
          "type": "Identifier",
          "start": 4079,
          "end": 4097,
          "name": "obj",
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4086,
                    "end": 4087,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4087,
                    "end": 4095,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4089,
                      "end": 4095
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
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 4109,
                  "end": 4112,
                  "name": "x01",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 4133,
                  "end": 4136,
                  "name": "x02",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 4163,
                  "end": 4166,
                  "name": "x03",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "u",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 4193,
                  "end": 4196,
                  "name": "x04",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "u",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 4223,
                  "end": 4226,
                  "name": "x05",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4231,
                        "end": 4232,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 4234,
                        "end": 4235,
                        "value": 5,
                        "raw": "5"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 4237,
                      "end": 4244,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4237,
                        "end": 4238,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 4240,
                        "end": 4244,
                        "value": "hi",
                        "raw": "'hi'"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4246,
                      "end": 4250,
                      "argument": {
                        "type": "Identifier",
                        "start": 4249,
                        "end": 4250,
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 4262,
                  "end": 4265,
                  "name": "x06",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 4276,
                      "end": 4280,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4276,
                        "end": 4277,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 4279,
                        "end": 4280,
                        "value": 5,
                        "raw": "5"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 4282,
                      "end": 4289,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4282,
                        "end": 4283,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 4285,
                        "end": 4289,
                        "value": "hi",
                        "raw": "'hi'"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 4301,
                  "end": 4304,
                  "name": "x07",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4309,
                        "end": 4310,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 4312,
                        "end": 4313,
                        "value": 5,
                        "raw": "5"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 4315,
                      "end": 4322,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4315,
                        "end": 4316,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 4318,
                        "end": 4322,
                        "value": "hi",
                        "raw": "'hi'"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4324,
                      "end": 4328,
                      "argument": {
                        "type": "Identifier",
                        "start": 4327,
                        "end": 4328,
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 4330,
                      "end": 4337,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4330,
                        "end": 4331,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 4333,
                        "end": 4337,
                        "value": true,
                        "raw": "true"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4339,
                      "end": 4345,
                      "argument": {
                        "type": "Identifier",
                        "start": 4342,
                        "end": 4345,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 4357,
                  "end": 4360,
                  "name": "x09",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4365,
                        "end": 4366,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 4368,
                        "end": 4369,
                        "value": 5,
                        "raw": "5"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4371,
                      "end": 4375,
                      "argument": {
                        "type": "Identifier",
                        "start": 4374,
                        "end": 4375,
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 4377,
                      "end": 4384,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4377,
                        "end": 4378,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 4380,
                        "end": 4384,
                        "value": "hi",
                        "raw": "'hi'"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 4386,
                      "end": 4393,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4386,
                        "end": 4387,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 4389,
                        "end": 4393,
                        "value": true,
                        "raw": "true"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4395,
                      "end": 4401,
                      "argument": {
                        "type": "Identifier",
                        "start": 4398,
                        "end": 4401,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 4413,
                  "end": 4416,
                  "name": "x10",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4421,
                        "end": 4422,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 4424,
                        "end": 4425,
                        "value": 5,
                        "raw": "5"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4427,
                      "end": 4431,
                      "argument": {
                        "type": "Identifier",
                        "start": 4430,
                        "end": 4431,
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 4433,
                      "end": 4440,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4433,
                        "end": 4434,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 4436,
                        "end": 4440,
                        "value": "hi",
                        "raw": "'hi'"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "SpreadElement",
                      "start": 4442,
                      "end": 4446,
                      "argument": {
                        "type": "Identifier",
                        "start": 4445,
                        "end": 4446,
                        "name": "u",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 4466,
                  "end": 4469,
                  "name": "x11",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 4490,
                  "end": 4493,
                  "name": "x12",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 4522,
                  "end": 4525,
                  "name": "x13",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "w",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 4546,
                  "end": 4549,
                  "name": "x14",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "w",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 4578,
                  "end": 4581,
                  "name": "x15",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 4608,
                  "end": 4611,
                  "name": "x16",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "w",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 4638,
                  "end": 4641,
                  "name": "x17",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "w",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 4676,
                  "end": 4679,
                  "name": "x18",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "w",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
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
        "start": 4028,
        "end": 4034,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4029,
            "end": 4030,
            "name": {
              "type": "Identifier",
              "start": 4029,
              "end": 4030,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 4032,
            "end": 4033,
            "name": {
              "type": "Identifier",
              "start": 4032,
              "end": 4033,
              "name": "U",
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
