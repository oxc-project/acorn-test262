__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 537,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 33,
        "name": "Equals",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 33,
        "end": 39,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 34,
            "end": 35,
            "name": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "A",
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
            "start": 37,
            "end": 38,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "B",
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 42,
        "end": 126,
        "checkType": {
          "type": "TSFunctionType",
          "start": 43,
          "end": 71,
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 43,
            "end": 46,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 44,
                "end": 45,
                "name": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
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
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 71,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 52,
              "end": 71,
              "checkType": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 53,
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 63,
                "typeName": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "trueType": {
                "type": "TSLiteralType",
                "start": 66,
                "end": 67,
                "literal": {
                  "type": "Literal",
                  "start": 66,
                  "end": 67,
                  "value": 1,
                  "raw": "1"
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "start": 70,
                "end": 71,
                "literal": {
                  "type": "Literal",
                  "start": 70,
                  "end": 71,
                  "value": 0,
                  "raw": "0"
                }
              }
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 82,
          "end": 110,
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 82,
            "end": 85,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 83,
                "end": 84,
                "name": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
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
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 110,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 91,
              "end": 110,
              "checkType": {
                "type": "TSTypeReference",
                "start": 91,
                "end": 92,
                "typeName": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 101,
                "end": 102,
                "typeName": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "trueType": {
                "type": "TSLiteralType",
                "start": 105,
                "end": 106,
                "literal": {
                  "type": "Literal",
                  "start": 105,
                  "end": 106,
                  "value": 1,
                  "raw": "1"
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "start": 109,
                "end": 110,
                "literal": {
                  "type": "Literal",
                  "start": 109,
                  "end": 110,
                  "value": 0,
                  "raw": "0"
                }
              }
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 114,
          "end": 118,
          "literal": {
            "type": "Literal",
            "start": 114,
            "end": 118,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 121,
          "end": 126,
          "literal": {
            "type": "Literal",
            "start": 121,
            "end": 126,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 129,
      "end": 298,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 148,
        "name": "State",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 159,
        "end": 298,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 165,
            "end": 184,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 165,
              "end": 173,
              "name": "_context",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 173,
              "end": 183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 175,
                "end": 183,
                "typeName": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 183,
                  "name": "TContext",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 189,
            "end": 204,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 189,
              "end": 195,
              "name": "_value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 209,
            "end": 296,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 216,
              "name": "matches",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 216,
              "end": 296,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 237,
                  "end": 252,
                  "name": "stateValue",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 247,
                    "end": 252,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 249,
                      "end": 252,
                      "typeName": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 252,
                        "name": "TSV",
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
              "body": null,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 216,
                "end": 236,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 217,
                    "end": 235,
                    "name": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 220,
                      "name": "TSV",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 229,
                      "end": 235
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 253,
                "end": 295,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 255,
                  "end": 295,
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 255,
                    "end": 259
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 263,
                    "end": 295,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 263,
                      "end": 295,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 263,
                          "end": 278,
                          "typeName": {
                            "type": "Identifier",
                            "start": 263,
                            "end": 268,
                            "name": "State",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 268,
                            "end": 278,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 269,
                                "end": 277,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 269,
                                  "end": 277,
                                  "name": "TContext",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 281,
                          "end": 295,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 283,
                              "end": 293,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 283,
                                "end": 288,
                                "name": "value",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 288,
                                "end": 293,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 290,
                                  "end": 293,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 290,
                                    "end": 293,
                                    "name": "TSV",
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
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 148,
        "end": 158,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 149,
            "end": 157,
            "name": {
              "type": "Identifier",
              "start": 149,
              "end": 157,
              "name": "TContext",
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 300,
      "end": 536,
      "id": {
        "type": "Identifier",
        "start": 309,
        "end": 311,
        "name": "f1",
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
          "start": 312,
          "end": 341,
          "name": "state",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 317,
            "end": 341,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 319,
              "end": 341,
              "typeName": {
                "type": "Identifier",
                "start": 319,
                "end": 324,
                "name": "State",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 324,
                "end": 341,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 325,
                    "end": 340,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 327,
                        "end": 338,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 327,
                          "end": 330,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 330,
                          "end": 338,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 332,
                            "end": 338
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 343,
        "end": 536,
        "body": [
          {
            "type": "IfStatement",
            "start": 349,
            "end": 534,
            "test": {
              "type": "LogicalExpression",
              "start": 353,
              "end": 395,
              "left": {
                "type": "CallExpression",
                "start": 353,
                "end": 371,
                "callee": {
                  "type": "MemberExpression",
                  "start": 353,
                  "end": 366,
                  "object": {
                    "type": "Identifier",
                    "start": 353,
                    "end": 358,
                    "name": "state",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 359,
                    "end": 366,
                    "name": "matches",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 367,
                    "end": 370,
                    "value": "a",
                    "raw": "'a'"
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 375,
                "end": 395,
                "callee": {
                  "type": "MemberExpression",
                  "start": 375,
                  "end": 388,
                  "object": {
                    "type": "Identifier",
                    "start": 375,
                    "end": 380,
                    "name": "state",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 381,
                    "end": 388,
                    "name": "matches",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 389,
                    "end": 394,
                    "value": "a.b",
                    "raw": "'a.b'"
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 397,
              "end": 534,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 407,
                  "end": 413,
                  "expression": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 412,
                    "name": "state",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 432,
                  "end": 470,
                  "id": {
                    "type": "Identifier",
                    "start": 437,
                    "end": 439,
                    "name": "T1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 442,
                    "end": 469,
                    "typeName": {
                      "type": "Identifier",
                      "start": 442,
                      "end": 448,
                      "name": "Equals",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 448,
                      "end": 469,
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "start": 449,
                          "end": 461,
                          "exprName": {
                            "type": "Identifier",
                            "start": 456,
                            "end": 461,
                            "name": "state",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSNeverKeyword",
                          "start": 463,
                          "end": 468
                        }
                      ]
                    }
                  },
                  "declare": false
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 488,
                  "end": 519,
                  "id": {
                    "type": "Identifier",
                    "start": 493,
                    "end": 495,
                    "name": "T2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 498,
                    "end": 518,
                    "typeName": {
                      "type": "Identifier",
                      "start": 498,
                      "end": 504,
                      "name": "Equals",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 504,
                      "end": 518,
                      "params": [
                        {
                          "type": "TSNeverKeyword",
                          "start": 505,
                          "end": 510
                        },
                        {
                          "type": "TSNeverKeyword",
                          "start": 512,
                          "end": 517
                        }
                      ]
                    }
                  },
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
