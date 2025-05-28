__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 63,
  "end": 394,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 63,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 85,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 97,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "value": "hi",
                "raw": "'hi'"
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 107,
        "end": 110,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 112,
      "end": 164,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 164,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 126,
            "end": 141,
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
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 129,
              "end": 141,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 146,
            "end": 162,
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
            "value": {
              "type": "FunctionExpression",
              "start": 149,
              "end": 162,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                        "value": "hi",
                        "raw": "'hi'"
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 162,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 166,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 177,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 178,
        "end": 262,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 184,
            "end": 193,
            "typeParameters": null,
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
                      "value": "a",
                      "raw": "'a'"
                    }
                  }
                }
              }
            ],
            "returnType": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 198,
            "end": 208,
            "typeParameters": null,
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
                      "value": "hi",
                      "raw": "'hi'"
                    }
                  }
                }
              }
            ],
            "returnType": null
          },
          {
            "type": "TSMethodSignature",
            "start": 213,
            "end": 233,
            "key": {
              "type": "Identifier",
              "start": 213,
              "end": 216,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
                      "value": "a",
                      "raw": "'a'"
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
                      "value": "a",
                      "raw": "'a'"
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 238,
            "end": 260,
            "key": {
              "type": "Identifier",
              "start": 238,
              "end": 241,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
                      "value": "hi",
                      "raw": "'hi'"
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
                      "value": "hi",
                      "raw": "'hi'"
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 338,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 338,
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
                    "typeParameters": null,
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
                              "value": "hi",
                              "raw": "'hi'"
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 292,
                    "end": 301,
                    "typeParameters": null,
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
                              "value": "a",
                              "raw": "'a'"
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 306,
                    "end": 319,
                    "key": {
                      "type": "Identifier",
                      "start": 306,
                      "end": 309,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
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
                              "value": "hi",
                              "raw": "'hi'"
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 324,
                    "end": 336,
                    "key": {
                      "type": "Identifier",
                      "start": 324,
                      "end": 327,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
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
                              "value": "a",
                              "raw": "'a'"
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 340,
      "end": 394,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 344,
          "end": 394,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 357,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 357,
                  "end": 370,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
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
                            "value": "hi",
                            "raw": "'hi'"
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 367,
                    "end": 370,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 376,
                "end": 391,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 379,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 379,
                  "end": 391,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
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
                            "value": "a",
                            "raw": "'a'"
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 388,
                    "end": 391,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
