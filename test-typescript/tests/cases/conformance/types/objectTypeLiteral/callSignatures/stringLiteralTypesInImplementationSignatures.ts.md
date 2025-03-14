stringLiteralTypesInImplementationSignatures.ts
```json
{
  "type": "Program",
  "start": 63,
  "end": 398,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 63,
      "end": 88,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 88,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
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
                "raw": "'hi'",
                "value": "hi"
              }
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 122,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 97,
            "end": 122,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 119,
              "end": 122,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 106,
              "end": 109,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
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
                      "raw": "'hi'",
                      "value": "hi"
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 157,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 129,
            "decorators": [],
            "name": "f2",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 132,
            "end": 157,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 154,
              "end": 157,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
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
                      "raw": "'hi'",
                      "value": "hi"
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
                      "raw": "'hi'",
                      "value": "hi"
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 159,
      "end": 191,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 167,
        "end": 191,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 173,
            "end": 189,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 176,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 176,
              "end": 189,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 186,
                "end": 189,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                        "raw": "'hi'",
                        "value": "hi"
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 166,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 193,
      "end": 250,
      "body": {
        "type": "TSInterfaceBody",
        "start": 205,
        "end": 250,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 211,
            "end": 221,
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
                      "raw": "'hi'",
                      "value": "hi"
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSMethodSignature",
            "start": 226,
            "end": 248,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 229,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
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
                      "raw": "'hi'",
                      "value": "hi"
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
                      "raw": "'hi'",
                      "value": "hi"
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 204,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 252,
      "end": 295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 256,
          "end": 295,
          "definite": false,
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
                              "raw": "'hi'",
                              "value": "hi"
                            }
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 280,
                    "end": 293,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 283,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
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
                              "raw": "'hi'",
                              "value": "hi"
                            }
                          }
                        }
                      }
                    ],
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 297,
      "end": 397,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 397,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 302,
            "decorators": [],
            "name": "b",
            "optional": false
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 314,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 314,
                  "end": 327,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 324,
                    "end": 327,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
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
                            "raw": "'hi'",
                            "value": "hi"
                          }
                        }
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 333,
                "end": 370,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 334,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 336,
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
                  "id": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 348,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
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
                            "raw": "'hi'",
                            "value": "hi"
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
                            "raw": "'hi'",
                            "value": "hi"
                          }
                        }
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 376,
                "end": 395,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 377,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 379,
                  "end": 395,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 392,
                    "end": 395,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
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
                            "raw": "'hi'",
                            "value": "hi"
                          }
                        }
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
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
