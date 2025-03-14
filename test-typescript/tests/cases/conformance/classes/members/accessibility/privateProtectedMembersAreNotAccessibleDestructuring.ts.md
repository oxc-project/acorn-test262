privateProtectedMembersAreNotAccessibleDestructuring.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 522,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 188,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 188,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 27,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "decorators": [],
              "name": "priv",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 47,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 46,
              "decorators": [],
              "name": "prot",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 79,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 73,
              "decorators": [],
              "name": "privateMethod",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 79,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 76,
                "end": 79,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 84,
            "end": 186,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 85,
              "end": 186,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 88,
                "end": 186,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 98,
                    "end": 130,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 102,
                        "end": 129,
                        "definite": false,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 102,
                          "end": 122,
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 104,
                              "end": 111,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 104,
                                "end": 108,
                                "decorators": [],
                                "name": "priv",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "start": 110,
                                "end": 111,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              }
                            },
                            {
                              "type": "Property",
                              "start": 113,
                              "end": 120,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 113,
                                "end": 117,
                                "decorators": [],
                                "name": "prot",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "start": 119,
                                "end": 120,
                                "decorators": [],
                                "name": "b",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 125,
                          "end": 129
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 145,
                    "end": 174,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 149,
                        "end": 173,
                        "definite": false,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 149,
                          "end": 163,
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 151,
                              "end": 155,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 151,
                                "end": 155,
                                "decorators": [],
                                "name": "priv",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "start": 151,
                                "end": 155,
                                "decorators": [],
                                "name": "priv",
                                "optional": false
                              }
                            },
                            {
                              "type": "Property",
                              "start": 157,
                              "end": 161,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 157,
                                "end": 161,
                                "decorators": [],
                                "name": "prot",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "start": 157,
                                "end": 161,
                                "decorators": [],
                                "name": "prot",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 166,
                          "end": 173,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 170,
                            "end": 171,
                            "decorators": [],
                            "name": "K",
                            "optional": false
                          }
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
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "K",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 189,
      "end": 306,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 207,
        "end": 306,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 213,
            "end": 304,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 213,
              "end": 215,
              "decorators": [],
              "name": "m2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 215,
              "end": 304,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 218,
                "end": 304,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 228,
                    "end": 251,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 232,
                        "end": 250,
                        "definite": false,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 232,
                          "end": 243,
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 234,
                              "end": 241,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 234,
                                "end": 238,
                                "decorators": [],
                                "name": "priv",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "start": 240,
                                "end": 241,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 246,
                          "end": 250
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 269,
                    "end": 292,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 273,
                        "end": 291,
                        "definite": false,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 273,
                          "end": 284,
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 275,
                              "end": 282,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 275,
                                "end": 279,
                                "decorators": [],
                                "name": "prot",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "start": 281,
                                "end": 282,
                                "decorators": [],
                                "name": "b",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 287,
                          "end": 291
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
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 196,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 205,
        "end": 206,
        "decorators": [],
        "name": "K",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 307,
      "end": 323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 311,
          "end": 322,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 311,
            "end": 312,
            "decorators": [],
            "name": "k",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 315,
            "end": 322,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 324,
      "end": 341,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 340,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 328,
            "end": 336,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 330,
                "end": 334,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 334,
                  "decorators": [],
                  "name": "priv",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 334,
                  "decorators": [],
                  "name": "priv",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 339,
            "end": 340,
            "decorators": [],
            "name": "k",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 351,
      "end": 368,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 367,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 355,
            "end": 363,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 357,
                "end": 361,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 357,
                  "end": 361,
                  "decorators": [],
                  "name": "prot",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 357,
                  "end": 361,
                  "decorators": [],
                  "name": "prot",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 366,
            "end": 367,
            "decorators": [],
            "name": "k",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 378,
      "end": 404,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 403,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 382,
            "end": 399,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 384,
                "end": 397,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 397,
                  "decorators": [],
                  "name": "privateMethod",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 397,
                  "decorators": [],
                  "name": "privateMethod",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 402,
            "end": 403,
            "decorators": [],
            "name": "k",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 414,
      "end": 462,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 418,
          "end": 461,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 418,
            "end": 457,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 420,
                "end": 427,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 424,
                  "decorators": [],
                  "name": "priv",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 427,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 429,
                "end": 436,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 429,
                  "end": 433,
                  "decorators": [],
                  "name": "prot",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 436,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 438,
                "end": 455,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 451,
                  "decorators": [],
                  "name": "privateMethod",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 455,
                  "decorators": [],
                  "name": "pm",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 460,
            "end": 461,
            "decorators": [],
            "name": "k",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 472,
      "end": 521,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 517,
        "end": 521,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 481,
        "end": 482,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 483,
          "end": 515,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 485,
              "end": 489,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 485,
                "end": 489,
                "decorators": [],
                "name": "priv",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 485,
                "end": 489,
                "decorators": [],
                "name": "priv",
                "optional": false
              }
            },
            {
              "type": "Property",
              "start": 491,
              "end": 495,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 491,
                "end": 495,
                "decorators": [],
                "name": "prot",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 491,
                "end": 495,
                "decorators": [],
                "name": "prot",
                "optional": false
              }
            },
            {
              "type": "Property",
              "start": 497,
              "end": 510,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 497,
                "end": 510,
                "decorators": [],
                "name": "privateMethod",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 497,
                "end": 510,
                "decorators": [],
                "name": "privateMethod",
                "optional": false
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 512,
            "end": 515,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 514,
              "end": 515,
              "typeName": {
                "type": "Identifier",
                "start": 514,
                "end": 515,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
