__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 63,
  "end": 397,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 63,
      "end": 88,
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
          "end": 83,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 83,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 79,
              "end": 83,
              "literal": {
                "type": "Literal",
                "start": 79,
                "end": 83,
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
        "start": 85,
        "end": 88,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 122,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 97,
            "end": 122,
            "id": {
              "type": "Identifier",
              "start": 106,
              "end": 109,
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
                "start": 110,
                "end": 117,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 111,
                  "end": 117,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 113,
                    "end": 117,
                    "literal": {
                      "type": "Literal",
                      "start": 113,
                      "end": 117,
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
              "start": 119,
              "end": 122,
              "body": []
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 157,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 157,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 129,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 132,
            "end": 157,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 133,
                "end": 140,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 134,
                  "end": 140,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 136,
                    "end": 140,
                    "literal": {
                      "type": "Literal",
                      "start": 136,
                      "end": 140,
                      "value": "hi",
                      "raw": "'hi'"
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 142,
                "end": 149,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 143,
                  "end": 149,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 145,
                    "end": 149,
                    "literal": {
                      "type": "Literal",
                      "start": 145,
                      "end": 149,
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
              "start": 154,
              "end": 157,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 159,
      "end": 191,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 166,
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
        "start": 167,
        "end": 191,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 173,
            "end": 189,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 176,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 176,
              "end": 189,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 177,
                  "end": 184,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 178,
                    "end": 184,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 180,
                      "end": 184,
                      "literal": {
                        "type": "Literal",
                        "start": 180,
                        "end": 184,
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
                "start": 186,
                "end": 189,
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
      "start": 193,
      "end": 250,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 204,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 205,
        "end": 250,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 211,
            "end": 221,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 212,
                "end": 219,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 213,
                  "end": 219,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 215,
                    "end": 219,
                    "literal": {
                      "type": "Literal",
                      "start": 215,
                      "end": 219,
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
            "start": 226,
            "end": 248,
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 229,
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
                "start": 230,
                "end": 237,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 231,
                  "end": 237,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 233,
                    "end": 237,
                    "literal": {
                      "type": "Literal",
                      "start": 233,
                      "end": 237,
                      "value": "hi",
                      "raw": "'hi'"
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 239,
                "end": 246,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 240,
                  "end": 246,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 242,
                    "end": 246,
                    "literal": {
                      "type": "Literal",
                      "start": 242,
                      "end": 246,
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
      "start": 252,
      "end": 295,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 256,
          "end": 295,
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 295,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 257,
              "end": 295,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 259,
                "end": 295,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 265,
                    "end": 275,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 266,
                        "end": 273,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 267,
                          "end": 273,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 269,
                            "end": 273,
                            "literal": {
                              "type": "Literal",
                              "start": 269,
                              "end": 273,
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
                    "start": 280,
                    "end": 293,
                    "key": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 283,
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
                        "start": 284,
                        "end": 291,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 285,
                          "end": 291,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 287,
                            "end": 291,
                            "literal": {
                              "type": "Literal",
                              "start": 287,
                              "end": 291,
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
      "start": 297,
      "end": 397,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 397,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 302,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 305,
            "end": 397,
            "properties": [
              {
                "type": "Property",
                "start": 311,
                "end": 327,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 314,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 314,
                  "end": 327,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 315,
                      "end": 322,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 316,
                        "end": 322,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 318,
                          "end": 322,
                          "literal": {
                            "type": "Literal",
                            "start": 318,
                            "end": 322,
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
                    "start": 324,
                    "end": 327,
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
                "start": 333,
                "end": 370,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 334,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 336,
                  "end": 370,
                  "id": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 348,
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
                      "start": 349,
                      "end": 356,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 350,
                        "end": 356,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 352,
                          "end": 356,
                          "literal": {
                            "type": "Literal",
                            "start": 352,
                            "end": 356,
                            "value": "hi",
                            "raw": "'hi'"
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 358,
                      "end": 365,
                      "decorators": [],
                      "name": "y",
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 376,
                "end": 395,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 377,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 379,
                  "end": 395,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 380,
                      "end": 387,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 381,
                        "end": 387,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 383,
                          "end": 387,
                          "literal": {
                            "type": "Literal",
                            "start": 383,
                            "end": 387,
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
                    "start": 392,
                    "end": 395,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
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
