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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "name": "ka",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 11,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 8,
                "end": 11
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
      "start": 13,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 31,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 31,
            "name": "nested",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 29,
                      "name": "ki",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": null,
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 50,
            "name": "other",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 50,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 44,
                "end": 50
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
      "start": 52,
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 65,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 65,
            "name": "rest",
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
      "start": 67,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 108,
            "name": "complex",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 87,
                              "end": 89,
                              "name": "ka",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 91,
                            "end": 93,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 91,
                              "end": 93,
                              "name": "ki",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 97,
                    "end": 106,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 98,
                      "end": 106,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 100,
                        "end": 106
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
      "declare": false
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
          "properties": [
            {
              "type": "Property",
              "start": 112,
              "end": 132,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectPattern",
                "start": 115,
                "end": 132,
                "properties": [
                  {
                    "type": "Property",
                    "start": 117,
                    "end": 119,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 119,
                      "name": "ka",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 119,
                      "name": "ka",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 121,
                    "end": 130,
                    "argument": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 130,
                      "name": "nested",
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
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 134,
              "end": 142,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 137,
                "end": 142,
                "name": "other",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 144,
              "end": 151,
              "argument": {
                "type": "Identifier",
                "start": 147,
                "end": 151,
                "name": "rest",
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
        },
        "right": {
          "type": "Identifier",
          "start": 155,
          "end": 162,
          "name": "complex",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 294,
            "name": "overEmit",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 197,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 201,
                                "end": 203,
                                "name": "ka",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 203,
                                "end": 211,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 205,
                                  "end": 211
                                }
                              },
                              "accessibility": null,
                              "static": false
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 213,
                              "end": 222,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 213,
                                "end": 214,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 214,
                                "end": 222,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 216,
                                  "end": 222
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 228,
                    "end": 269,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 229,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 233,
                              "end": 234,
                              "name": "z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 234,
                              "end": 242,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 236,
                                "end": 242
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 244,
                            "end": 255,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 244,
                              "end": 246,
                              "name": "ki",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 246,
                              "end": 254,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 248,
                                "end": 254
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 256,
                            "end": 266,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 256,
                              "end": 258,
                              "name": "ku",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 258,
                              "end": 266,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 260,
                                "end": 266
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
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 270,
                    "end": 281,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 272,
                      "name": "ke",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 272,
                      "end": 280,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 274,
                        "end": 280
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 282,
                    "end": 292,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 282,
                      "end": 284,
                      "name": "ko",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 284,
                      "end": 292,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 286,
                        "end": 292
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
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 458,
            "end": 513,
            "properties": [
              {
                "type": "Property",
                "start": 460,
                "end": 485,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 461,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrayPattern",
                  "start": 463,
                  "end": 485,
                  "elements": [
                    {
                      "type": "ObjectPattern",
                      "start": 464,
                      "end": 478,
                      "properties": [
                        {
                          "type": "RestElement",
                          "start": 466,
                          "end": 476,
                          "argument": {
                            "type": "Identifier",
                            "start": 469,
                            "end": 476,
                            "name": "nested2",
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
                    },
                    {
                      "type": "RestElement",
                      "start": 480,
                      "end": 484,
                      "argument": {
                        "type": "Identifier",
                        "start": 483,
                        "end": 484,
                        "name": "y",
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
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 487,
                "end": 501,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 487,
                  "end": 488,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 490,
                  "end": 501,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 492,
                      "end": 493,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 492,
                        "end": 493,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 492,
                        "end": 493,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 495,
                      "end": 499,
                      "argument": {
                        "type": "Identifier",
                        "start": 498,
                        "end": 499,
                        "name": "c",
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
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 503,
                "end": 511,
                "argument": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 511,
                  "name": "rest2",
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
          },
          "init": {
            "type": "Identifier",
            "start": 516,
            "end": 524,
            "name": "overEmit",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "properties": [
            {
              "type": "Property",
              "start": 529,
              "end": 554,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 529,
                "end": 530,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrayPattern",
                "start": 532,
                "end": 554,
                "elements": [
                  {
                    "type": "ObjectPattern",
                    "start": 533,
                    "end": 547,
                    "properties": [
                      {
                        "type": "RestElement",
                        "start": 535,
                        "end": 545,
                        "argument": {
                          "type": "Identifier",
                          "start": 538,
                          "end": 545,
                          "name": "nested2",
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
                  },
                  {
                    "type": "RestElement",
                    "start": 549,
                    "end": 553,
                    "argument": {
                      "type": "Identifier",
                      "start": 552,
                      "end": 553,
                      "name": "y",
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
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 556,
              "end": 570,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 556,
                "end": 557,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectPattern",
                "start": 559,
                "end": 570,
                "properties": [
                  {
                    "type": "Property",
                    "start": 561,
                    "end": 562,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 561,
                      "end": 562,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 561,
                      "end": 562,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 564,
                    "end": 568,
                    "argument": {
                      "type": "Identifier",
                      "start": 567,
                      "end": 568,
                      "name": "c",
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
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 572,
              "end": 580,
              "argument": {
                "type": "Identifier",
                "start": 575,
                "end": 580,
                "name": "rest2",
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
        },
        "right": {
          "type": "Identifier",
          "start": 585,
          "end": 593,
          "name": "overEmit",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
