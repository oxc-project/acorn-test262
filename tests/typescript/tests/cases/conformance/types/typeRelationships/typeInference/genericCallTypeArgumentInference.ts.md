__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 64,
  "end": 1625,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 64,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 76,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 76,
        "end": 79,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 77,
            "end": 78,
            "name": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
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
          "start": 80,
          "end": 84,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 81,
            "end": 84,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 83,
              "end": 84,
              "typeName": {
                "type": "Identifier",
                "start": 83,
                "end": 84,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 86,
        "end": 103,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 92,
            "end": 101,
            "argument": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 105,
      "end": 121,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 110,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 113,
            "end": 120,
            "callee": {
              "type": "Identifier",
              "start": 113,
              "end": 116,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 117,
                "end": 119,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 133,
      "end": 182,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 146,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 146,
        "end": 152,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 147,
            "end": 148,
            "name": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 150,
            "end": 151,
            "name": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "U",
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
          "start": 153,
          "end": 157,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 154,
            "end": 157,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 156,
              "end": 157,
              "typeName": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 159,
          "end": 163,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 160,
            "end": 163,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 162,
              "end": 163,
              "typeName": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 165,
        "end": 182,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 171,
            "end": 180,
            "argument": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 184,
      "end": 242,
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 198,
        "decorators": [],
        "name": "foo2b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 198,
        "end": 204,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 199,
            "end": 200,
            "name": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 202,
            "end": 203,
            "name": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "decorators": [],
              "name": "U",
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
          "start": 205,
          "end": 209,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 206,
            "end": 209,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 208,
              "end": 209,
              "typeName": {
                "type": "Identifier",
                "start": 208,
                "end": 209,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 211,
        "end": 242,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 217,
            "end": 226,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 221,
                "end": 225,
                "id": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 225,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 222,
                    "end": 225,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 224,
                      "end": 225,
                      "typeName": {
                        "type": "Identifier",
                        "start": 224,
                        "end": 225,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
            "type": "ReturnStatement",
            "start": 231,
            "end": 240,
            "argument": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 265,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 264,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 250,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 253,
            "end": 264,
            "callee": {
              "type": "Identifier",
              "start": 253,
              "end": 257,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 258,
                "end": 260,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 262,
                "end": 263,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 276,
      "end": 294,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 293,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 282,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 285,
            "end": 293,
            "callee": {
              "type": "Identifier",
              "start": 285,
              "end": 290,
              "decorators": [],
              "name": "foo2b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 291,
                "end": 292,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 302,
      "end": 809,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 309,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 309,
        "end": 315,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 310,
            "end": 311,
            "name": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 313,
            "end": 314,
            "name": {
              "type": "Identifier",
              "start": 313,
              "end": 314,
              "decorators": [],
              "name": "U",
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 316,
        "end": 809,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 322,
            "end": 367,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 322,
              "end": 333,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 333,
              "end": 367,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 334,
                  "end": 345,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 345,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 342,
                      "end": 345,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 344,
                        "end": 345,
                        "typeName": {
                          "type": "Identifier",
                          "start": 344,
                          "end": 345,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 347,
                  "end": 358,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 354,
                    "end": 358,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 355,
                      "end": 358,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 357,
                        "end": 358,
                        "typeName": {
                          "type": "Identifier",
                          "start": 357,
                          "end": 358,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 360,
                "end": 367,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 373,
            "end": 414,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 373,
              "end": 376,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 376,
              "end": 414,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 377,
                  "end": 381,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 378,
                    "end": 381,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 380,
                      "end": 381,
                      "typeName": {
                        "type": "Identifier",
                        "start": 380,
                        "end": 381,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 383,
                  "end": 387,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 384,
                    "end": 387,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 386,
                      "end": 387,
                      "typeName": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 387,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 389,
                "end": 414,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 399,
                    "end": 408,
                    "argument": {
                      "type": "Identifier",
                      "start": 406,
                      "end": 407,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
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
            "start": 420,
            "end": 462,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 420,
              "end": 424,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 424,
              "end": 462,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 425,
                  "end": 429,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 431,
                  "end": 435,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 432,
                    "end": 435,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 434,
                      "end": 435,
                      "typeName": {
                        "type": "Identifier",
                        "start": 434,
                        "end": 435,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 437,
                "end": 462,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 447,
                    "end": 456,
                    "argument": {
                      "type": "Identifier",
                      "start": 454,
                      "end": 455,
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
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
            "start": 468,
            "end": 513,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 468,
              "end": 472,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 472,
              "end": 513,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 472,
                "end": 475,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 473,
                    "end": 474,
                    "name": {
                      "type": "Identifier",
                      "start": 473,
                      "end": 474,
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
                  "start": 476,
                  "end": 480,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 477,
                    "end": 480,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 479,
                      "end": 480,
                      "typeName": {
                        "type": "Identifier",
                        "start": 479,
                        "end": 480,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 482,
                  "end": 486,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 483,
                    "end": 486,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 485,
                      "end": 486,
                      "typeName": {
                        "type": "Identifier",
                        "start": 485,
                        "end": 486,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 488,
                "end": 513,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 498,
                    "end": 507,
                    "argument": {
                      "type": "Identifier",
                      "start": 505,
                      "end": 506,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
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
            "start": 519,
            "end": 564,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 519,
              "end": 523,
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 523,
              "end": 564,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 523,
                "end": 526,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 524,
                    "end": 525,
                    "name": {
                      "type": "Identifier",
                      "start": 524,
                      "end": 525,
                      "decorators": [],
                      "name": "U",
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
                  "start": 527,
                  "end": 531,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 528,
                    "end": 531,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 530,
                      "end": 531,
                      "typeName": {
                        "type": "Identifier",
                        "start": 530,
                        "end": 531,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 533,
                  "end": 537,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 534,
                    "end": 537,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 536,
                      "end": 537,
                      "typeName": {
                        "type": "Identifier",
                        "start": 536,
                        "end": 537,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 539,
                "end": 564,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 549,
                    "end": 558,
                    "argument": {
                      "type": "Identifier",
                      "start": 556,
                      "end": 557,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
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
            "start": 570,
            "end": 617,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 570,
              "end": 574,
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 574,
              "end": 617,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 574,
                "end": 579,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 575,
                    "end": 576,
                    "name": {
                      "type": "Identifier",
                      "start": 575,
                      "end": 576,
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 577,
                    "end": 578,
                    "name": {
                      "type": "Identifier",
                      "start": 577,
                      "end": 578,
                      "decorators": [],
                      "name": "U",
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
                  "start": 580,
                  "end": 584,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 581,
                    "end": 584,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 583,
                      "end": 584,
                      "typeName": {
                        "type": "Identifier",
                        "start": 583,
                        "end": 584,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 586,
                  "end": 590,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 587,
                    "end": 590,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 589,
                      "end": 590,
                      "typeName": {
                        "type": "Identifier",
                        "start": 589,
                        "end": 590,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 592,
                "end": 617,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 602,
                    "end": 611,
                    "argument": {
                      "type": "Identifier",
                      "start": 609,
                      "end": 610,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
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
            "start": 623,
            "end": 679,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 623,
              "end": 627,
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 627,
              "end": 679,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 627,
                "end": 633,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 628,
                    "end": 629,
                    "name": {
                      "type": "Identifier",
                      "start": 628,
                      "end": 629,
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 631,
                    "end": 632,
                    "name": {
                      "type": "Identifier",
                      "start": 631,
                      "end": 632,
                      "decorators": [],
                      "name": "U",
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
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 636,
                "end": 679,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 646,
                    "end": 655,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 650,
                        "end": 654,
                        "id": {
                          "type": "Identifier",
                          "start": 650,
                          "end": 654,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 651,
                            "end": 654,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 653,
                              "end": 654,
                              "typeName": {
                                "type": "Identifier",
                                "start": 653,
                                "end": 654,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
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
                    "type": "ReturnStatement",
                    "start": 664,
                    "end": 673,
                    "argument": {
                      "type": "Identifier",
                      "start": 671,
                      "end": 672,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
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
            "start": 685,
            "end": 745,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 685,
              "end": 689,
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 689,
              "end": 745,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 689,
                "end": 695,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 690,
                    "end": 691,
                    "name": {
                      "type": "Identifier",
                      "start": 690,
                      "end": 691,
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 693,
                    "end": 694,
                    "name": {
                      "type": "Identifier",
                      "start": 693,
                      "end": 694,
                      "decorators": [],
                      "name": "U",
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
                  "start": 696,
                  "end": 700,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 697,
                    "end": 700,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 699,
                      "end": 700,
                      "typeName": {
                        "type": "Identifier",
                        "start": 699,
                        "end": 700,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 702,
                "end": 745,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 712,
                    "end": 721,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 716,
                        "end": 720,
                        "id": {
                          "type": "Identifier",
                          "start": 716,
                          "end": 720,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 717,
                            "end": 720,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 719,
                              "end": 720,
                              "typeName": {
                                "type": "Identifier",
                                "start": 719,
                                "end": 720,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
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
                    "type": "ReturnStatement",
                    "start": 730,
                    "end": 739,
                    "argument": {
                      "type": "Identifier",
                      "start": 737,
                      "end": 738,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
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
            "start": 751,
            "end": 807,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 751,
              "end": 755,
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 755,
              "end": 807,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 755,
                "end": 761,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 756,
                    "end": 757,
                    "name": {
                      "type": "Identifier",
                      "start": 756,
                      "end": 757,
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 759,
                    "end": 760,
                    "name": {
                      "type": "Identifier",
                      "start": 759,
                      "end": 760,
                      "decorators": [],
                      "name": "U",
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
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 764,
                "end": 807,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 774,
                    "end": 783,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 778,
                        "end": 782,
                        "id": {
                          "type": "Identifier",
                          "start": 778,
                          "end": 782,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 779,
                            "end": 782,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 781,
                              "end": 782,
                              "typeName": {
                                "type": "Identifier",
                                "start": 781,
                                "end": 782,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
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
                    "type": "ReturnStatement",
                    "start": 792,
                    "end": 801,
                    "argument": {
                      "type": "Identifier",
                      "start": 799,
                      "end": 800,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 811,
      "end": 832,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 815,
          "end": 831,
          "id": {
            "type": "Identifier",
            "start": 815,
            "end": 816,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 819,
            "end": 831,
            "callee": {
              "type": "Identifier",
              "start": 823,
              "end": 824,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 825,
                "end": 827,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 829,
                "end": 830,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 833,
      "end": 855,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 837,
          "end": 854,
          "id": {
            "type": "Identifier",
            "start": 837,
            "end": 839,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 842,
            "end": 854,
            "callee": {
              "type": "MemberExpression",
              "start": 842,
              "end": 847,
              "object": {
                "type": "Identifier",
                "start": 842,
                "end": 843,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 844,
                "end": 847,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 848,
                "end": 850,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 852,
                "end": 853,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 866,
      "end": 889,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 870,
          "end": 888,
          "id": {
            "type": "Identifier",
            "start": 870,
            "end": 872,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 875,
            "end": 888,
            "callee": {
              "type": "MemberExpression",
              "start": 875,
              "end": 881,
              "object": {
                "type": "Identifier",
                "start": 875,
                "end": 876,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 877,
                "end": 881,
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 882,
                "end": 884,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 886,
                "end": 887,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 900,
      "end": 925,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 904,
          "end": 924,
          "id": {
            "type": "Identifier",
            "start": 904,
            "end": 906,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 909,
            "end": 924,
            "callee": {
              "type": "MemberExpression",
              "start": 909,
              "end": 915,
              "object": {
                "type": "Identifier",
                "start": 909,
                "end": 910,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 911,
                "end": 915,
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 916,
                "end": 920,
                "value": true,
                "raw": "true"
              },
              {
                "type": "Literal",
                "start": 922,
                "end": 923,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 937,
      "end": 963,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 941,
          "end": 962,
          "id": {
            "type": "Identifier",
            "start": 941,
            "end": 943,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 946,
            "end": 962,
            "callee": {
              "type": "MemberExpression",
              "start": 946,
              "end": 952,
              "object": {
                "type": "Identifier",
                "start": 946,
                "end": 947,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 948,
                "end": 952,
                "decorators": [],
                "name": "foo4",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 953,
                "end": 955,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 957,
                "end": 961,
                "value": true,
                "raw": "true"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 974,
      "end": 999,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 978,
          "end": 998,
          "id": {
            "type": "Identifier",
            "start": 978,
            "end": 980,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 983,
            "end": 998,
            "callee": {
              "type": "MemberExpression",
              "start": 983,
              "end": 989,
              "object": {
                "type": "Identifier",
                "start": 983,
                "end": 984,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 985,
                "end": 989,
                "decorators": [],
                "name": "foo5",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 990,
                "end": 994,
                "value": true,
                "raw": "true"
              },
              {
                "type": "Literal",
                "start": 996,
                "end": 997,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1011,
      "end": 1029,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1015,
          "end": 1028,
          "id": {
            "type": "Identifier",
            "start": 1015,
            "end": 1017,
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1020,
            "end": 1028,
            "callee": {
              "type": "MemberExpression",
              "start": 1020,
              "end": 1026,
              "object": {
                "type": "Identifier",
                "start": 1020,
                "end": 1021,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1022,
                "end": 1026,
                "decorators": [],
                "name": "foo6",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1036,
      "end": 1057,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1040,
          "end": 1056,
          "id": {
            "type": "Identifier",
            "start": 1040,
            "end": 1043,
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1046,
            "end": 1056,
            "callee": {
              "type": "MemberExpression",
              "start": 1046,
              "end": 1052,
              "object": {
                "type": "Identifier",
                "start": 1046,
                "end": 1047,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1048,
                "end": 1052,
                "decorators": [],
                "name": "foo7",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1053,
                "end": 1055,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1064,
      "end": 1083,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1068,
          "end": 1082,
          "id": {
            "type": "Identifier",
            "start": 1068,
            "end": 1071,
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1074,
            "end": 1082,
            "callee": {
              "type": "MemberExpression",
              "start": 1074,
              "end": 1080,
              "object": {
                "type": "Identifier",
                "start": 1074,
                "end": 1075,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1076,
                "end": 1080,
                "decorators": [],
                "name": "foo8",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1091,
      "end": 1341,
      "id": {
        "type": "Identifier",
        "start": 1101,
        "end": 1102,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1102,
        "end": 1108,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1103,
            "end": 1104,
            "name": {
              "type": "Identifier",
              "start": 1103,
              "end": 1104,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 1106,
            "end": 1107,
            "name": {
              "type": "Identifier",
              "start": 1106,
              "end": 1107,
              "decorators": [],
              "name": "U",
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1109,
        "end": 1341,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1115,
            "end": 1132,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1120,
                "end": 1124,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1121,
                  "end": 1124,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1123,
                    "end": 1124,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1123,
                      "end": 1124,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1126,
                "end": 1130,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1127,
                  "end": 1130,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1129,
                    "end": 1130,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1129,
                      "end": 1130,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null
          },
          {
            "type": "TSMethodSignature",
            "start": 1137,
            "end": 1156,
            "key": {
              "type": "Identifier",
              "start": 1137,
              "end": 1140,
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
                "start": 1141,
                "end": 1145,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1142,
                  "end": 1145,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1144,
                    "end": 1145,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1144,
                      "end": 1145,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1147,
                "end": 1151,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1148,
                  "end": 1151,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1150,
                    "end": 1151,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1150,
                      "end": 1151,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1152,
              "end": 1155,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1154,
                "end": 1155,
                "typeName": {
                  "type": "Identifier",
                  "start": 1154,
                  "end": 1155,
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
          },
          {
            "type": "TSMethodSignature",
            "start": 1161,
            "end": 1181,
            "key": {
              "type": "Identifier",
              "start": 1161,
              "end": 1165,
              "decorators": [],
              "name": "foo2",
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
                "start": 1166,
                "end": 1170,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1167,
                  "end": 1170,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1169,
                    "end": 1170,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1169,
                      "end": 1170,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1172,
                "end": 1176,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1173,
                  "end": 1176,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1175,
                    "end": 1176,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1175,
                      "end": 1176,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1177,
              "end": 1180,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1179,
                "end": 1180,
                "typeName": {
                  "type": "Identifier",
                  "start": 1179,
                  "end": 1180,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
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
            "start": 1186,
            "end": 1209,
            "key": {
              "type": "Identifier",
              "start": 1186,
              "end": 1190,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1190,
              "end": 1193,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1191,
                  "end": 1192,
                  "name": {
                    "type": "Identifier",
                    "start": 1191,
                    "end": 1192,
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
                "start": 1194,
                "end": 1198,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1195,
                  "end": 1198,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1197,
                    "end": 1198,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1197,
                      "end": 1198,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1200,
                "end": 1204,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1201,
                  "end": 1204,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1203,
                    "end": 1204,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1203,
                      "end": 1204,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1205,
              "end": 1208,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1207,
                "end": 1208,
                "typeName": {
                  "type": "Identifier",
                  "start": 1207,
                  "end": 1208,
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
          },
          {
            "type": "TSMethodSignature",
            "start": 1214,
            "end": 1237,
            "key": {
              "type": "Identifier",
              "start": 1214,
              "end": 1218,
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1218,
              "end": 1221,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1219,
                  "end": 1220,
                  "name": {
                    "type": "Identifier",
                    "start": 1219,
                    "end": 1220,
                    "decorators": [],
                    "name": "U",
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
                "start": 1222,
                "end": 1226,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1223,
                  "end": 1226,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1225,
                    "end": 1226,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1225,
                      "end": 1226,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1228,
                "end": 1232,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1229,
                  "end": 1232,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1231,
                    "end": 1232,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1231,
                      "end": 1232,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1233,
              "end": 1236,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1235,
                "end": 1236,
                "typeName": {
                  "type": "Identifier",
                  "start": 1235,
                  "end": 1236,
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
          },
          {
            "type": "TSMethodSignature",
            "start": 1242,
            "end": 1268,
            "key": {
              "type": "Identifier",
              "start": 1242,
              "end": 1246,
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1246,
              "end": 1252,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1247,
                  "end": 1248,
                  "name": {
                    "type": "Identifier",
                    "start": 1247,
                    "end": 1248,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1250,
                  "end": 1251,
                  "name": {
                    "type": "Identifier",
                    "start": 1250,
                    "end": 1251,
                    "decorators": [],
                    "name": "U",
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
                "start": 1253,
                "end": 1257,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1254,
                  "end": 1257,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1256,
                    "end": 1257,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1256,
                      "end": 1257,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1259,
                "end": 1263,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1260,
                  "end": 1263,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1262,
                    "end": 1263,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1262,
                      "end": 1263,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1264,
              "end": 1267,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1266,
                "end": 1267,
                "typeName": {
                  "type": "Identifier",
                  "start": 1266,
                  "end": 1267,
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
          },
          {
            "type": "TSMethodSignature",
            "start": 1273,
            "end": 1289,
            "key": {
              "type": "Identifier",
              "start": 1273,
              "end": 1277,
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1277,
              "end": 1283,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1278,
                  "end": 1279,
                  "name": {
                    "type": "Identifier",
                    "start": 1278,
                    "end": 1279,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1281,
                  "end": 1282,
                  "name": {
                    "type": "Identifier",
                    "start": 1281,
                    "end": 1282,
                    "decorators": [],
                    "name": "U",
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
              "start": 1285,
              "end": 1288,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1287,
                "end": 1288,
                "typeName": {
                  "type": "Identifier",
                  "start": 1287,
                  "end": 1288,
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
          },
          {
            "type": "TSMethodSignature",
            "start": 1294,
            "end": 1314,
            "key": {
              "type": "Identifier",
              "start": 1294,
              "end": 1298,
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1298,
              "end": 1304,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1299,
                  "end": 1300,
                  "name": {
                    "type": "Identifier",
                    "start": 1299,
                    "end": 1300,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1302,
                  "end": 1303,
                  "name": {
                    "type": "Identifier",
                    "start": 1302,
                    "end": 1303,
                    "decorators": [],
                    "name": "U",
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
                "start": 1305,
                "end": 1309,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1306,
                  "end": 1309,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1308,
                    "end": 1309,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1308,
                      "end": 1309,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1310,
              "end": 1313,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1312,
                "end": 1313,
                "typeName": {
                  "type": "Identifier",
                  "start": 1312,
                  "end": 1313,
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
          },
          {
            "type": "TSMethodSignature",
            "start": 1319,
            "end": 1335,
            "key": {
              "type": "Identifier",
              "start": 1319,
              "end": 1323,
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1323,
              "end": 1329,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1324,
                  "end": 1325,
                  "name": {
                    "type": "Identifier",
                    "start": 1324,
                    "end": 1325,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1327,
                  "end": 1328,
                  "name": {
                    "type": "Identifier",
                    "start": 1327,
                    "end": 1328,
                    "decorators": [],
                    "name": "U",
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
              "start": 1331,
              "end": 1334,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1333,
                "end": 1334,
                "typeName": {
                  "type": "Identifier",
                  "start": 1333,
                  "end": 1334,
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1343,
      "end": 1368,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1347,
          "end": 1367,
          "id": {
            "type": "Identifier",
            "start": 1347,
            "end": 1367,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1348,
              "end": 1367,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1350,
                "end": 1367,
                "typeName": {
                  "type": "Identifier",
                  "start": 1350,
                  "end": 1351,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1351,
                  "end": 1367,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1352,
                      "end": 1358
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1360,
                      "end": 1366
                    }
                  ]
                }
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
      "start": 1369,
      "end": 1391,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1373,
          "end": 1390,
          "id": {
            "type": "Identifier",
            "start": 1373,
            "end": 1375,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1378,
            "end": 1390,
            "callee": {
              "type": "MemberExpression",
              "start": 1378,
              "end": 1383,
              "object": {
                "type": "Identifier",
                "start": 1378,
                "end": 1379,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1380,
                "end": 1383,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1384,
                "end": 1386,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 1388,
                "end": 1389,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1402,
      "end": 1425,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1406,
          "end": 1424,
          "id": {
            "type": "Identifier",
            "start": 1406,
            "end": 1408,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1411,
            "end": 1424,
            "callee": {
              "type": "MemberExpression",
              "start": 1411,
              "end": 1417,
              "object": {
                "type": "Identifier",
                "start": 1411,
                "end": 1412,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1413,
                "end": 1417,
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1418,
                "end": 1420,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 1422,
                "end": 1423,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1436,
      "end": 1461,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1440,
          "end": 1460,
          "id": {
            "type": "Identifier",
            "start": 1440,
            "end": 1442,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1445,
            "end": 1460,
            "callee": {
              "type": "MemberExpression",
              "start": 1445,
              "end": 1451,
              "object": {
                "type": "Identifier",
                "start": 1445,
                "end": 1446,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1447,
                "end": 1451,
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1452,
                "end": 1456,
                "value": true,
                "raw": "true"
              },
              {
                "type": "Literal",
                "start": 1458,
                "end": 1459,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1473,
      "end": 1499,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1477,
          "end": 1498,
          "id": {
            "type": "Identifier",
            "start": 1477,
            "end": 1479,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1482,
            "end": 1498,
            "callee": {
              "type": "MemberExpression",
              "start": 1482,
              "end": 1488,
              "object": {
                "type": "Identifier",
                "start": 1482,
                "end": 1483,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1484,
                "end": 1488,
                "decorators": [],
                "name": "foo4",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1489,
                "end": 1491,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 1493,
                "end": 1497,
                "value": true,
                "raw": "true"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1510,
      "end": 1535,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1514,
          "end": 1534,
          "id": {
            "type": "Identifier",
            "start": 1514,
            "end": 1516,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1519,
            "end": 1534,
            "callee": {
              "type": "MemberExpression",
              "start": 1519,
              "end": 1525,
              "object": {
                "type": "Identifier",
                "start": 1519,
                "end": 1520,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1521,
                "end": 1525,
                "decorators": [],
                "name": "foo5",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1526,
                "end": 1530,
                "value": true,
                "raw": "true"
              },
              {
                "type": "Literal",
                "start": 1532,
                "end": 1533,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1547,
      "end": 1565,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1551,
          "end": 1564,
          "id": {
            "type": "Identifier",
            "start": 1551,
            "end": 1553,
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1556,
            "end": 1564,
            "callee": {
              "type": "MemberExpression",
              "start": 1556,
              "end": 1562,
              "object": {
                "type": "Identifier",
                "start": 1556,
                "end": 1557,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1558,
                "end": 1562,
                "decorators": [],
                "name": "foo6",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1572,
      "end": 1593,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1576,
          "end": 1592,
          "id": {
            "type": "Identifier",
            "start": 1576,
            "end": 1579,
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1582,
            "end": 1592,
            "callee": {
              "type": "MemberExpression",
              "start": 1582,
              "end": 1588,
              "object": {
                "type": "Identifier",
                "start": 1582,
                "end": 1583,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1584,
                "end": 1588,
                "decorators": [],
                "name": "foo7",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1589,
                "end": 1591,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1600,
      "end": 1619,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1604,
          "end": 1618,
          "id": {
            "type": "Identifier",
            "start": 1604,
            "end": 1607,
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1610,
            "end": 1618,
            "callee": {
              "type": "MemberExpression",
              "start": 1610,
              "end": 1616,
              "object": {
                "type": "Identifier",
                "start": 1610,
                "end": 1611,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1612,
                "end": 1616,
                "decorators": [],
                "name": "foo8",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
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
