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
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 82,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 69,
            "end": 80,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "name": "foo",
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
              "start": 72,
              "end": 80,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 74,
                "end": 80
              }
            },
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
      "type": "ClassDeclaration",
      "start": 83,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 97,
        "name": "Derived1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 106,
        "end": 110,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 126,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 113,
            "end": 124,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 116,
              "name": "bar",
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
              "start": 116,
              "end": 124,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 118,
                "end": 124
              }
            },
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
      "type": "ClassDeclaration",
      "start": 127,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 141,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 150,
        "end": 154,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 155,
        "end": 170,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 157,
            "end": 168,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 160,
              "name": "baz",
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
              "start": 160,
              "end": 168,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 162,
                "end": 168
              }
            },
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
      "type": "ClassDeclaration",
      "start": 172,
      "end": 303,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 179,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 180,
        "end": 303,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 186,
            "end": 209,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 189,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 189,
              "end": 209,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 190,
                  "end": 197,
                  "name": "x",
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
                        "value": "hi",
                        "raw": "'hi'"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 198,
                "end": 208,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 200,
                  "end": 208,
                  "typeName": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 208,
                    "name": "Derived1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 214,
            "end": 238,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 217,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 217,
              "end": 238,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 218,
                  "end": 226,
                  "name": "x",
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
                        "value": "bye",
                        "raw": "'bye'"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 227,
                "end": 237,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 229,
                  "end": 237,
                  "typeName": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 237,
                    "name": "Derived2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 243,
            "end": 264,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 243,
              "end": 246,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 246,
              "end": 264,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 247,
                  "end": 256,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 248,
                    "end": 256,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 250,
                      "end": 256
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 257,
                "end": 263,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 259,
                  "end": 263,
                  "typeName": {
                    "type": "Identifier",
                    "start": 259,
                    "end": 263,
                    "name": "Base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 269,
            "end": 301,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 272,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 272,
              "end": 301,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
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
      "start": 304,
      "end": 320,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 319,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 309,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 312,
            "end": 319,
            "callee": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 322,
      "end": 420,
      "id": {
        "type": "Identifier",
        "start": 332,
        "end": 333,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 334,
        "end": 420,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 340,
            "end": 363,
            "key": {
              "type": "Identifier",
              "start": 340,
              "end": 343,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 344,
                "end": 351,
                "name": "x",
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
                      "value": "hi",
                      "raw": "'hi'"
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 352,
              "end": 362,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 354,
                "end": 362,
                "typeName": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 362,
                  "name": "Derived1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 368,
            "end": 392,
            "key": {
              "type": "Identifier",
              "start": 368,
              "end": 371,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 372,
                "end": 380,
                "name": "x",
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
                      "value": "bye",
                      "raw": "'bye'"
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 381,
              "end": 391,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 383,
                "end": 391,
                "typeName": {
                  "type": "Identifier",
                  "start": 383,
                  "end": 391,
                  "name": "Derived2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 397,
            "end": 418,
            "key": {
              "type": "Identifier",
              "start": 397,
              "end": 400,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 401,
                "end": 410,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 402,
                  "end": 410,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 404,
                    "end": 410
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 411,
              "end": 417,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 413,
                "end": 417,
                "typeName": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 417,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 425,
            "end": 429,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 426,
              "end": 429,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 428,
                "end": 429,
                "typeName": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 429,
                  "name": "I",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 525,
            "name": "a",
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
                    "key": {
                      "type": "Identifier",
                      "start": 445,
                      "end": 448,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 449,
                        "end": 456,
                        "name": "x",
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
                              "value": "hi",
                              "raw": "'hi'"
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 457,
                      "end": 467,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 459,
                        "end": 467,
                        "typeName": {
                          "type": "Identifier",
                          "start": 459,
                          "end": 467,
                          "name": "Derived1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 473,
                    "end": 497,
                    "key": {
                      "type": "Identifier",
                      "start": 473,
                      "end": 476,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 477,
                        "end": 485,
                        "name": "x",
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
                              "value": "bye",
                              "raw": "'bye'"
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 486,
                      "end": 496,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 488,
                        "end": 496,
                        "typeName": {
                          "type": "Identifier",
                          "start": 488,
                          "end": 496,
                          "name": "Derived2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 502,
                    "end": 523,
                    "key": {
                      "type": "Identifier",
                      "start": 502,
                      "end": 505,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 506,
                        "end": 515,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 507,
                          "end": 515,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 509,
                            "end": 515
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 516,
                      "end": 522,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 518,
                        "end": 522,
                        "typeName": {
                          "type": "Identifier",
                          "start": 518,
                          "end": 522,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 528,
      "end": 534,
      "expression": {
        "type": "AssignmentExpression",
        "start": 528,
        "end": 533,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 528,
          "end": 529,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 532,
          "end": 533,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 535,
      "end": 541,
      "expression": {
        "type": "AssignmentExpression",
        "start": 535,
        "end": 540,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 535,
          "end": 536,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 539,
          "end": 540,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 543,
      "end": 549,
      "expression": {
        "type": "AssignmentExpression",
        "start": 543,
        "end": 548,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 543,
          "end": 544,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 547,
          "end": 548,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 550,
      "end": 556,
      "expression": {
        "type": "AssignmentExpression",
        "start": 550,
        "end": 555,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 550,
          "end": 551,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 554,
          "end": 555,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 558,
      "end": 564,
      "expression": {
        "type": "AssignmentExpression",
        "start": 558,
        "end": 563,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 558,
          "end": 559,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 562,
          "end": 563,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 565,
      "end": 571,
      "expression": {
        "type": "AssignmentExpression",
        "start": 565,
        "end": 570,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 565,
          "end": 566,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 569,
          "end": 570,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 577,
            "end": 589,
            "name": "r1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 579,
              "end": 589,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 581,
                "end": 589,
                "typeName": {
                  "type": "Identifier",
                  "start": 581,
                  "end": 589,
                  "name": "Derived1",
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
            "type": "CallExpression",
            "start": 592,
            "end": 603,
            "callee": {
              "type": "MemberExpression",
              "start": 592,
              "end": 597,
              "object": {
                "type": "Identifier",
                "start": 592,
                "end": 593,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 594,
                "end": 597,
                "name": "foo",
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
                "start": 598,
                "end": 602,
                "value": "hi",
                "raw": "'hi'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 609,
            "end": 621,
            "name": "r2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 611,
              "end": 621,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 613,
                "end": 621,
                "typeName": {
                  "type": "Identifier",
                  "start": 613,
                  "end": 621,
                  "name": "Derived2",
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
            "type": "CallExpression",
            "start": 624,
            "end": 636,
            "callee": {
              "type": "MemberExpression",
              "start": 624,
              "end": 629,
              "object": {
                "type": "Identifier",
                "start": 624,
                "end": 625,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 626,
                "end": 629,
                "name": "foo",
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
                "start": 630,
                "end": 635,
                "value": "bye",
                "raw": "'bye'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 642,
            "end": 650,
            "name": "r3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 644,
              "end": 650,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 646,
                "end": 650,
                "typeName": {
                  "type": "Identifier",
                  "start": 646,
                  "end": 650,
                  "name": "Base",
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
            "type": "CallExpression",
            "start": 653,
            "end": 664,
            "callee": {
              "type": "MemberExpression",
              "start": 653,
              "end": 658,
              "object": {
                "type": "Identifier",
                "start": 653,
                "end": 654,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 655,
                "end": 658,
                "name": "foo",
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
                "start": 659,
                "end": 663,
                "value": "hm",
                "raw": "'hm'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
