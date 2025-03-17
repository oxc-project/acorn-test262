__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 63,
  "end": 395,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 63,
      "end": 84,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 76,
          "end": 82,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 82,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 79,
              "end": 82
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 85,
      "end": 110,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 107,
        "end": 110,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 97,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 98,
          "end": 105,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 99,
            "end": 105,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 101,
              "end": 105,
              "literal": {
                "type": "Literal",
                "start": 101,
                "end": 105,
                "raw": "'hi'",
                "value": "hi"
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 112,
      "end": 164,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 164,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 126,
            "end": 141,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 129,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 129,
              "end": 141,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 130,
                  "end": 139,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 131,
                    "end": 139,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 133,
                      "end": 139
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 146,
            "end": 162,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 146,
              "end": 149,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 149,
              "end": 162,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 162,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 150,
                  "end": 157,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 151,
                    "end": 157,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 153,
                      "end": 157,
                      "literal": {
                        "type": "Literal",
                        "start": 153,
                        "end": 157,
                        "raw": "'hi'",
                        "value": "hi"
                      }
                    }
                  }
                }
              ],
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
        "start": 118,
        "end": 119,
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
      "type": "TSInterfaceDeclaration",
      "start": 166,
      "end": 262,
      "body": {
        "type": "TSInterfaceBody",
        "start": 178,
        "end": 262,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 184,
            "end": 193,
            "params": [
              {
                "type": "Identifier",
                "start": 185,
                "end": 191,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 186,
                  "end": 191,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 188,
                    "end": 191,
                    "literal": {
                      "type": "Literal",
                      "start": 188,
                      "end": 191,
                      "raw": "'a'",
                      "value": "a"
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 198,
            "end": 208,
            "params": [
              {
                "type": "Identifier",
                "start": 199,
                "end": 206,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 200,
                  "end": 206,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 202,
                    "end": 206,
                    "literal": {
                      "type": "Literal",
                      "start": 202,
                      "end": 206,
                      "raw": "'hi'",
                      "value": "hi"
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 213,
            "end": 233,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 213,
              "end": 216,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 217,
                "end": 223,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 218,
                  "end": 223,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 220,
                    "end": 223,
                    "literal": {
                      "type": "Literal",
                      "start": 220,
                      "end": 223,
                      "raw": "'a'",
                      "value": "a"
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 225,
                "end": 231,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 226,
                  "end": 231,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 228,
                    "end": 231,
                    "literal": {
                      "type": "Literal",
                      "start": 228,
                      "end": 231,
                      "raw": "'a'",
                      "value": "a"
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 238,
            "end": 260,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 238,
              "end": 241,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 242,
                "end": 249,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 243,
                  "end": 249,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 245,
                    "end": 249,
                    "literal": {
                      "type": "Literal",
                      "start": 245,
                      "end": 249,
                      "raw": "'hi'",
                      "value": "hi"
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 251,
                "end": 258,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 252,
                  "end": 258,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 254,
                    "end": 258,
                    "literal": {
                      "type": "Literal",
                      "start": 254,
                      "end": 258,
                      "raw": "'hi'",
                      "value": "hi"
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 177,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 338,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 338,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 338,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 271,
                "end": 338,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 277,
                    "end": 287,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 278,
                        "end": 285,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 279,
                          "end": 285,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 281,
                            "end": 285,
                            "literal": {
                              "type": "Literal",
                              "start": 281,
                              "end": 285,
                              "raw": "'hi'",
                              "value": "hi"
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 292,
                    "end": 301,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 293,
                        "end": 299,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 294,
                          "end": 299,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 296,
                            "end": 299,
                            "literal": {
                              "type": "Literal",
                              "start": 296,
                              "end": 299,
                              "raw": "'a'",
                              "value": "a"
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 306,
                    "end": 319,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 306,
                      "end": 309,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 310,
                        "end": 317,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 311,
                          "end": 317,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 313,
                            "end": 317,
                            "literal": {
                              "type": "Literal",
                              "start": 313,
                              "end": 317,
                              "raw": "'hi'",
                              "value": "hi"
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": null,
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 324,
                    "end": 336,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 324,
                      "end": 327,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 328,
                        "end": 334,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 329,
                          "end": 334,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 331,
                            "end": 334,
                            "literal": {
                              "type": "Literal",
                              "start": 331,
                              "end": 334,
                              "raw": "'a'",
                              "value": "a"
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": null,
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 340,
      "end": 394,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 344,
          "end": 394,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 344,
            "end": 345,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 348,
            "end": 394,
            "properties": [
              {
                "type": "Property",
                "start": 354,
                "end": 370,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 357,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 357,
                  "end": 370,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 367,
                    "end": 370,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 358,
                      "end": 365,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 359,
                        "end": 365,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 361,
                          "end": 365,
                          "literal": {
                            "type": "Literal",
                            "start": 361,
                            "end": 365,
                            "raw": "'hi'",
                            "value": "hi"
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 376,
                "end": 391,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 379,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 379,
                  "end": 391,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 388,
                    "end": 391,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 380,
                      "end": 386,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 381,
                        "end": 386,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 383,
                          "end": 386,
                          "literal": {
                            "type": "Literal",
                            "start": 383,
                            "end": 386,
                            "raw": "'a'",
                            "value": "a"
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
