__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 665,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 82,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 82,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 69,
            "end": 80,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 80,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 74,
                "end": 80
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 83,
      "end": 126,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 126,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 113,
            "end": 124,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 116,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 124,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 118,
                "end": 124
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 97,
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 106,
        "end": 110,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 127,
      "end": 170,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 155,
        "end": 170,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 157,
            "end": 168,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 160,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 168,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 162,
                "end": 168
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 141,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 150,
        "end": 154,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 172,
      "end": 303,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 180,
        "end": 303,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 186,
            "end": 209,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 189,
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
              "start": 189,
              "end": 209,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 190,
                  "end": 197,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 191,
                    "end": 197,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 193,
                      "end": 197,
                      "literal": {
                        "type": "Literal",
                        "start": 193,
                        "end": 197,
                        "raw": "'hi'",
                        "value": "hi",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 198,
                "end": 208,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 200,
                  "end": 208,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 208,
                    "decorators": [],
                    "name": "Derived1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 214,
            "end": 238,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 217,
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
              "start": 217,
              "end": 238,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 218,
                  "end": 226,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 219,
                    "end": 226,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 221,
                      "end": 226,
                      "literal": {
                        "type": "Literal",
                        "start": 221,
                        "end": 226,
                        "raw": "'bye'",
                        "value": "bye",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 227,
                "end": 237,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 229,
                  "end": 237,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 237,
                    "decorators": [],
                    "name": "Derived2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 243,
            "end": 264,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 243,
              "end": 246,
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
              "start": 246,
              "end": 264,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 247,
                  "end": 256,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 248,
                    "end": 256,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 250,
                      "end": 256
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 257,
                "end": 263,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 259,
                  "end": 263,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 259,
                    "end": 263,
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 269,
            "end": 301,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 272,
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
              "start": 272,
              "end": 301,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 276,
                "end": 301,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 286,
                    "end": 295,
                    "argument": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 294,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 178,
        "end": 179,
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
      "start": 304,
      "end": 320,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 319,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 309,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 312,
            "end": 319,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
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
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 322,
      "end": 420,
      "body": {
        "type": "TSInterfaceBody",
        "start": 334,
        "end": 420,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 340,
            "end": 363,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 340,
              "end": 343,
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
                "start": 344,
                "end": 351,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 345,
                  "end": 351,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 347,
                    "end": 351,
                    "literal": {
                      "type": "Literal",
                      "start": 347,
                      "end": 351,
                      "raw": "'hi'",
                      "value": "hi",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 352,
              "end": 362,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 354,
                "end": 362,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 362,
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 368,
            "end": 392,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 368,
              "end": 371,
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
                "start": 372,
                "end": 380,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 373,
                  "end": 380,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 375,
                    "end": 380,
                    "literal": {
                      "type": "Literal",
                      "start": 375,
                      "end": 380,
                      "raw": "'bye'",
                      "value": "bye",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 381,
              "end": 391,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 383,
                "end": 391,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 383,
                  "end": 391,
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 397,
            "end": 418,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 397,
              "end": 400,
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
                "start": 401,
                "end": 410,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 402,
                  "end": 410,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 404,
                    "end": 410
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 411,
              "end": 417,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 413,
                "end": 417,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 417,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 332,
        "end": 333,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 421,
      "end": 430,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 425,
          "end": 429,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 425,
            "end": 429,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 426,
              "end": 429,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 428,
                "end": 429,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 429,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "start": 432,
      "end": 526,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 525,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 525,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 437,
              "end": 525,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 439,
                "end": 525,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 445,
                    "end": 468,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 445,
                      "end": 448,
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
                        "start": 449,
                        "end": 456,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 450,
                          "end": 456,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 452,
                            "end": 456,
                            "literal": {
                              "type": "Literal",
                              "start": 452,
                              "end": 456,
                              "raw": "'hi'",
                              "value": "hi",
                              "regex": null,
                              "bigint": null
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 457,
                      "end": 467,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 459,
                        "end": 467,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 459,
                          "end": 467,
                          "decorators": [],
                          "name": "Derived1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 473,
                    "end": 497,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 473,
                      "end": 476,
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
                        "start": 477,
                        "end": 485,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 478,
                          "end": 485,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 480,
                            "end": 485,
                            "literal": {
                              "type": "Literal",
                              "start": 480,
                              "end": 485,
                              "raw": "'bye'",
                              "value": "bye",
                              "regex": null,
                              "bigint": null
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 486,
                      "end": 496,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 488,
                        "end": 496,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 488,
                          "end": 496,
                          "decorators": [],
                          "name": "Derived2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 502,
                    "end": 523,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 502,
                      "end": 505,
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
                        "start": 506,
                        "end": 515,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 507,
                          "end": 515,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 509,
                            "end": 515
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 516,
                      "end": 522,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 518,
                        "end": 522,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 518,
                          "end": 522,
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
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
      "type": "ExpressionStatement",
      "start": 528,
      "end": 534,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 528,
        "end": 533,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 528,
          "end": 529,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 532,
          "end": 533,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 535,
      "end": 541,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 535,
        "end": 540,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 535,
          "end": 536,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 539,
          "end": 540,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 543,
      "end": 549,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 543,
        "end": 548,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 543,
          "end": 544,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 547,
          "end": 548,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 550,
      "end": 556,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 550,
        "end": 555,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 550,
          "end": 551,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 554,
          "end": 555,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 558,
      "end": 564,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 558,
        "end": 563,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 558,
          "end": 559,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 562,
          "end": 563,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 565,
      "end": 571,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 565,
        "end": 570,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 565,
          "end": 566,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 569,
          "end": 570,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 573,
      "end": 604,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 577,
          "end": 603,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 577,
            "end": 589,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 579,
              "end": 589,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 581,
                "end": 589,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 581,
                  "end": 589,
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 592,
            "end": 603,
            "arguments": [
              {
                "type": "Literal",
                "start": 598,
                "end": 602,
                "raw": "'hi'",
                "value": "hi",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 592,
              "end": 597,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 592,
                "end": 593,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 594,
                "end": 597,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 605,
      "end": 637,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 609,
          "end": 636,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 609,
            "end": 621,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 611,
              "end": 621,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 613,
                "end": 621,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 613,
                  "end": 621,
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 624,
            "end": 636,
            "arguments": [
              {
                "type": "Literal",
                "start": 630,
                "end": 635,
                "raw": "'bye'",
                "value": "bye",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 624,
              "end": 629,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 624,
                "end": 625,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 626,
                "end": 629,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 638,
      "end": 665,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 642,
          "end": 664,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 642,
            "end": 650,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 644,
              "end": 650,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 646,
                "end": 650,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 646,
                  "end": 650,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 653,
            "end": 664,
            "arguments": [
              {
                "type": "Literal",
                "start": 659,
                "end": 663,
                "raw": "'hm'",
                "value": "hm",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 653,
              "end": 658,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 653,
                "end": 654,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 655,
                "end": 658,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
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
