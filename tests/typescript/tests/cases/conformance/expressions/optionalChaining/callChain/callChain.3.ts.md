__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 474,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 23,
        "decorators": [],
        "name": "absorb",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 28,
        "end": 31,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 30,
          "end": 31,
          "typeName": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 88,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 87,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 87,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 87,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 50,
                "end": 87,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 50,
                    "end": 75,
                    "members": [
                      {
                        "type": "TSMethodSignature",
                        "start": 52,
                        "end": 73,
                        "key": {
                          "type": "Identifier",
                          "start": 52,
                          "end": 53,
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "computed": false,
                        "optional": true,
                        "kind": "method",
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 54,
                          "end": 57,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 55,
                              "end": 56,
                              "name": {
                                "type": "Identifier",
                                "start": 55,
                                "end": 56,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false
                            }
                          ]
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 58,
                            "end": 69,
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 61,
                              "end": 69,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 63,
                                "end": 69,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 64,
                                    "end": 68,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 64,
                                      "end": 65,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 65,
                                      "end": 68,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 67,
                                        "end": 68,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 67,
                                          "end": 68,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 70,
                          "end": 73,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 72,
                            "end": 73,
                            "typeName": {
                              "type": "Identifier",
                              "start": 72,
                              "end": 73,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 78,
                    "end": 87
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 125,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 124,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 105,
            "decorators": [],
            "name": "n1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 105,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 99,
                "end": 105
              }
            }
          },
          "init": {
            "type": "ChainExpression",
            "start": 108,
            "end": 124,
            "expression": {
              "type": "CallExpression",
              "start": 108,
              "end": 124,
              "callee": {
                "type": "MemberExpression",
                "start": 108,
                "end": 112,
                "object": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 109,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 115,
                  "end": 123,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 116,
                      "end": 121,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 117,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 119,
                        "end": 121,
                        "value": 12,
                        "raw": "12"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": true
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 233,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 232,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 208,
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 208,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 202,
                "end": 208
              }
            }
          },
          "init": {
            "type": "ChainExpression",
            "start": 211,
            "end": 232,
            "expression": {
              "type": "CallExpression",
              "start": 211,
              "end": 232,
              "callee": {
                "type": "MemberExpression",
                "start": 211,
                "end": 215,
                "object": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 215,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 218,
                  "end": 231,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 219,
                      "end": 230,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 220,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "CallExpression",
                        "start": 222,
                        "end": 230,
                        "callee": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 228,
                          "decorators": [],
                          "name": "absorb",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": true
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 246,
      "end": 293,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 292,
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 274,
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 274,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 256,
                "end": 274,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 256,
                    "end": 262
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 265,
                    "end": 274
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ChainExpression",
            "start": 277,
            "end": 292,
            "expression": {
              "type": "CallExpression",
              "start": 277,
              "end": 292,
              "callee": {
                "type": "MemberExpression",
                "start": 277,
                "end": 281,
                "object": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 278,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 281,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 284,
                  "end": 291,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 285,
                      "end": 290,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 285,
                        "end": 286,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 288,
                        "end": 290,
                        "value": 12,
                        "raw": "12"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": true
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 310,
      "end": 363,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 316,
          "end": 362,
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 338,
            "decorators": [],
            "name": "n4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 318,
              "end": 338,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 320,
                "end": 338,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 320,
                    "end": 326
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 329,
                    "end": 338
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ChainExpression",
            "start": 341,
            "end": 362,
            "expression": {
              "type": "CallExpression",
              "start": 341,
              "end": 362,
              "callee": {
                "type": "MemberExpression",
                "start": 341,
                "end": 345,
                "object": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 342,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 345,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 348,
                  "end": 361,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 349,
                      "end": 360,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 349,
                        "end": 350,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "CallExpression",
                        "start": 352,
                        "end": 360,
                        "callee": {
                          "type": "Identifier",
                          "start": 352,
                          "end": 358,
                          "decorators": [],
                          "name": "absorb",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": true
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 428,
      "end": 453,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 432,
          "end": 452,
          "id": {
            "type": "Identifier",
            "start": 432,
            "end": 434,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ChainExpression",
            "start": 437,
            "end": 452,
            "expression": {
              "type": "CallExpression",
              "start": 437,
              "end": 452,
              "callee": {
                "type": "MemberExpression",
                "start": 437,
                "end": 441,
                "object": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 438,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 440,
                  "end": 441,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 444,
                  "end": 451,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 445,
                      "end": 450,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 445,
                        "end": 446,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 448,
                        "end": 450,
                        "value": 12,
                        "raw": "12"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": true
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 454,
      "end": 474,
      "expression": {
        "type": "AssignmentExpression",
        "start": 454,
        "end": 473,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 454,
          "end": 456,
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 459,
          "end": 473,
          "callee": {
            "type": "TSNonNullExpression",
            "start": 459,
            "end": 464,
            "expression": {
              "type": "MemberExpression",
              "start": 459,
              "end": 463,
              "object": {
                "type": "TSNonNullExpression",
                "start": 459,
                "end": 461,
                "expression": {
                  "type": "Identifier",
                  "start": 459,
                  "end": 460,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "property": {
                "type": "Identifier",
                "start": 462,
                "end": 463,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ObjectExpression",
              "start": 465,
              "end": 472,
              "properties": [
                {
                  "type": "Property",
                  "start": 466,
                  "end": 471,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 466,
                    "end": 467,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 469,
                    "end": 471,
                    "value": 12,
                    "raw": "12"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          ],
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
