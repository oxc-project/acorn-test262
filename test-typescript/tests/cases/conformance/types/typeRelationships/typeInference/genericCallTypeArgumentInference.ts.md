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
        "name": "foo",
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
          "start": 80,
          "end": 84,
          "name": "t",
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
                "name": "T",
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
              "name": "t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
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
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 105,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 110,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 113,
            "end": 120,
            "callee": {
              "type": "Identifier",
              "start": 113,
              "end": 116,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 117,
                "end": 119,
                "value": "",
                "raw": "''"
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
      "type": "FunctionDeclaration",
      "start": 133,
      "end": 182,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 146,
        "name": "foo2",
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
          "start": 153,
          "end": 157,
          "name": "t",
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
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 159,
          "end": 163,
          "name": "u",
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
                "name": "U",
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
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
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
          },
          {
            "type": "TSTypeParameter",
            "start": 150,
            "end": 151,
            "name": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "name": "U",
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 184,
      "end": 242,
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 198,
        "name": "foo2b",
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
          "start": 205,
          "end": 209,
          "name": "u",
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
                "name": "U",
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
      "body": {
        "type": "BlockStatement",
        "start": 211,
        "end": 242,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 217,
            "end": 226,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 221,
                "end": 225,
                "id": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 225,
                  "name": "x",
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
                        "name": "T",
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
            "type": "ReturnStatement",
            "start": 231,
            "end": 240,
            "argument": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
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
          },
          {
            "type": "TSTypeParameter",
            "start": 202,
            "end": 203,
            "name": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "name": "U",
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
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 264,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 250,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 253,
            "end": 264,
            "callee": {
              "type": "Identifier",
              "start": 253,
              "end": 257,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
      "start": 276,
      "end": 294,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 293,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 282,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 285,
            "end": 293,
            "callee": {
              "type": "Identifier",
              "start": 285,
              "end": 290,
              "name": "foo2b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 291,
                "end": 292,
                "value": 1,
                "raw": "1"
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
      "type": "ClassDeclaration",
      "start": 302,
      "end": 809,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 309,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 316,
        "end": 809,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 322,
            "end": 367,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 322,
              "end": 333,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 333,
              "end": 367,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "t",
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
                          "name": "T",
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
                    "name": "u",
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
                          "name": "U",
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
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 360,
                "end": 367,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 373,
            "end": 414,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 373,
              "end": 376,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 376,
              "end": 414,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 377,
                  "end": 381,
                  "name": "t",
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
                        "name": "T",
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
                {
                  "type": "Identifier",
                  "start": 383,
                  "end": 387,
                  "name": "u",
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
                        "name": "U",
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
                      "name": "t",
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
          },
          {
            "type": "MethodDefinition",
            "start": 420,
            "end": 462,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 420,
              "end": 424,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 424,
              "end": 462,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 425,
                  "end": 429,
                  "name": "t",
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
                        "name": "T",
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
                {
                  "type": "Identifier",
                  "start": 431,
                  "end": 435,
                  "name": "u",
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
                        "name": "U",
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
                      "name": "u",
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
          },
          {
            "type": "MethodDefinition",
            "start": 468,
            "end": 513,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 468,
              "end": 472,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 472,
              "end": 513,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 476,
                  "end": 480,
                  "name": "t",
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
                        "name": "T",
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
                {
                  "type": "Identifier",
                  "start": 482,
                  "end": 486,
                  "name": "u",
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
                        "name": "U",
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
                      "name": "t",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 519,
            "end": 564,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 519,
              "end": 523,
              "name": "foo4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 523,
              "end": 564,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 527,
                  "end": 531,
                  "name": "t",
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
                        "name": "T",
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
                {
                  "type": "Identifier",
                  "start": 533,
                  "end": 537,
                  "name": "u",
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
                        "name": "U",
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
                      "name": "t",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
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
                      "name": "U",
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 570,
            "end": 617,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 570,
              "end": 574,
              "name": "foo5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 574,
              "end": 617,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 580,
                  "end": 584,
                  "name": "t",
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
                        "name": "T",
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
                {
                  "type": "Identifier",
                  "start": 586,
                  "end": 590,
                  "name": "u",
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
                        "name": "U",
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
                      "name": "t",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 577,
                    "end": 578,
                    "name": {
                      "type": "Identifier",
                      "start": 577,
                      "end": 578,
                      "name": "U",
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 623,
            "end": 679,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 623,
              "end": 627,
              "name": "foo6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 627,
              "end": 679,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 636,
                "end": 679,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 646,
                    "end": 655,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 650,
                        "end": 654,
                        "id": {
                          "type": "Identifier",
                          "start": 650,
                          "end": 654,
                          "name": "x",
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
                                "name": "T",
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
                    "type": "ReturnStatement",
                    "start": 664,
                    "end": 673,
                    "argument": {
                      "type": "Identifier",
                      "start": 671,
                      "end": 672,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 631,
                    "end": 632,
                    "name": {
                      "type": "Identifier",
                      "start": 631,
                      "end": 632,
                      "name": "U",
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 685,
            "end": 745,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 685,
              "end": 689,
              "name": "foo7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 689,
              "end": 745,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 696,
                  "end": 700,
                  "name": "u",
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
                        "name": "U",
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
              "body": {
                "type": "BlockStatement",
                "start": 702,
                "end": 745,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 712,
                    "end": 721,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 716,
                        "end": 720,
                        "id": {
                          "type": "Identifier",
                          "start": 716,
                          "end": 720,
                          "name": "x",
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
                                "name": "T",
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
                    "type": "ReturnStatement",
                    "start": 730,
                    "end": 739,
                    "argument": {
                      "type": "Identifier",
                      "start": 737,
                      "end": 738,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 693,
                    "end": 694,
                    "name": {
                      "type": "Identifier",
                      "start": 693,
                      "end": 694,
                      "name": "U",
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 751,
            "end": 807,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 751,
              "end": 755,
              "name": "foo8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 755,
              "end": 807,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 764,
                "end": 807,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 774,
                    "end": 783,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 778,
                        "end": 782,
                        "id": {
                          "type": "Identifier",
                          "start": 778,
                          "end": 782,
                          "name": "x",
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
                                "name": "T",
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
                    "type": "ReturnStatement",
                    "start": 792,
                    "end": 801,
                    "argument": {
                      "type": "Identifier",
                      "start": 799,
                      "end": 800,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 759,
                    "end": 760,
                    "name": {
                      "type": "Identifier",
                      "start": 759,
                      "end": 760,
                      "name": "U",
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
          },
          {
            "type": "TSTypeParameter",
            "start": 313,
            "end": 314,
            "name": {
              "type": "Identifier",
              "start": 313,
              "end": 314,
              "name": "U",
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
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 811,
      "end": 832,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 815,
          "end": 831,
          "id": {
            "type": "Identifier",
            "start": 815,
            "end": 816,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 819,
            "end": 831,
            "callee": {
              "type": "Identifier",
              "start": 823,
              "end": 824,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            ],
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
      "start": 833,
      "end": 855,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 837,
          "end": 854,
          "id": {
            "type": "Identifier",
            "start": 837,
            "end": 839,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 844,
                "end": 847,
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
      "start": 866,
      "end": 889,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 870,
          "end": 888,
          "id": {
            "type": "Identifier",
            "start": 870,
            "end": 872,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 877,
                "end": 881,
                "name": "foo2",
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
      "start": 900,
      "end": 925,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 904,
          "end": 924,
          "id": {
            "type": "Identifier",
            "start": 904,
            "end": 906,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 911,
                "end": 915,
                "name": "foo3",
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
      "start": 937,
      "end": 963,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 941,
          "end": 962,
          "id": {
            "type": "Identifier",
            "start": 941,
            "end": 943,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 948,
                "end": 952,
                "name": "foo4",
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
      "start": 974,
      "end": 999,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 978,
          "end": 998,
          "id": {
            "type": "Identifier",
            "start": 978,
            "end": 980,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 985,
                "end": 989,
                "name": "foo5",
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
      "start": 1011,
      "end": 1029,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1015,
          "end": 1028,
          "id": {
            "type": "Identifier",
            "start": 1015,
            "end": 1017,
            "name": "r9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1022,
                "end": 1026,
                "name": "foo6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
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
      "start": 1036,
      "end": 1057,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1040,
          "end": 1056,
          "id": {
            "type": "Identifier",
            "start": 1040,
            "end": 1043,
            "name": "r10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1048,
                "end": 1052,
                "name": "foo7",
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
                "start": 1053,
                "end": 1055,
                "value": "",
                "raw": "''"
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
      "start": 1064,
      "end": 1083,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1068,
          "end": 1082,
          "id": {
            "type": "Identifier",
            "start": 1068,
            "end": 1071,
            "name": "r11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1076,
                "end": 1080,
                "name": "foo8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
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
      "type": "TSInterfaceDeclaration",
      "start": 1091,
      "end": 1341,
      "id": {
        "type": "Identifier",
        "start": 1101,
        "end": 1102,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
          },
          {
            "type": "TSTypeParameter",
            "start": 1106,
            "end": 1107,
            "name": {
              "type": "Identifier",
              "start": 1106,
              "end": 1107,
              "name": "U",
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
                "name": "t",
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
                      "name": "T",
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
              {
                "type": "Identifier",
                "start": 1126,
                "end": 1130,
                "name": "u",
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
                      "name": "U",
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
                "start": 1141,
                "end": 1145,
                "name": "t",
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
                      "name": "T",
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
              {
                "type": "Identifier",
                "start": 1147,
                "end": 1151,
                "name": "u",
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
                      "name": "U",
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
                  "name": "T",
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
            "start": 1161,
            "end": 1181,
            "key": {
              "type": "Identifier",
              "start": 1161,
              "end": 1165,
              "name": "foo2",
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
                "start": 1166,
                "end": 1170,
                "name": "t",
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
                      "name": "T",
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
              {
                "type": "Identifier",
                "start": 1172,
                "end": 1176,
                "name": "u",
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
                      "name": "U",
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
                  "name": "U",
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
            "start": 1186,
            "end": 1209,
            "key": {
              "type": "Identifier",
              "start": 1186,
              "end": 1190,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "params": [
              {
                "type": "Identifier",
                "start": 1194,
                "end": 1198,
                "name": "t",
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
                      "name": "T",
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
              {
                "type": "Identifier",
                "start": 1200,
                "end": 1204,
                "name": "u",
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
                      "name": "U",
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
                  "name": "T",
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
            "start": 1214,
            "end": 1237,
            "key": {
              "type": "Identifier",
              "start": 1214,
              "end": 1218,
              "name": "foo4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "U",
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
            "params": [
              {
                "type": "Identifier",
                "start": 1222,
                "end": 1226,
                "name": "t",
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
                      "name": "T",
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
              {
                "type": "Identifier",
                "start": 1228,
                "end": 1232,
                "name": "u",
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
                      "name": "U",
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
                  "name": "T",
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
            "start": 1242,
            "end": 1268,
            "key": {
              "type": "Identifier",
              "start": 1242,
              "end": 1246,
              "name": "foo5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1250,
                  "end": 1251,
                  "name": {
                    "type": "Identifier",
                    "start": 1250,
                    "end": 1251,
                    "name": "U",
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
            "params": [
              {
                "type": "Identifier",
                "start": 1253,
                "end": 1257,
                "name": "t",
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
                      "name": "T",
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
              {
                "type": "Identifier",
                "start": 1259,
                "end": 1263,
                "name": "u",
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
                      "name": "U",
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
                  "name": "T",
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
            "start": 1273,
            "end": 1289,
            "key": {
              "type": "Identifier",
              "start": 1273,
              "end": 1277,
              "name": "foo6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1281,
                  "end": 1282,
                  "name": {
                    "type": "Identifier",
                    "start": 1281,
                    "end": 1282,
                    "name": "U",
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
                  "name": "T",
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
            "start": 1294,
            "end": 1314,
            "key": {
              "type": "Identifier",
              "start": 1294,
              "end": 1298,
              "name": "foo7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1302,
                  "end": 1303,
                  "name": {
                    "type": "Identifier",
                    "start": 1302,
                    "end": 1303,
                    "name": "U",
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
            "params": [
              {
                "type": "Identifier",
                "start": 1305,
                "end": 1309,
                "name": "u",
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
                      "name": "U",
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
                  "name": "T",
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
            "start": 1319,
            "end": 1335,
            "key": {
              "type": "Identifier",
              "start": 1319,
              "end": 1323,
              "name": "foo8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1327,
                  "end": 1328,
                  "name": {
                    "type": "Identifier",
                    "start": 1327,
                    "end": 1328,
                    "name": "U",
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
                  "name": "T",
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
      "start": 1343,
      "end": 1368,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1347,
          "end": 1367,
          "id": {
            "type": "Identifier",
            "start": 1347,
            "end": 1367,
            "name": "i",
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
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "start": 1369,
      "end": 1391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1373,
          "end": 1390,
          "id": {
            "type": "Identifier",
            "start": 1373,
            "end": 1375,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1380,
                "end": 1383,
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
      "start": 1402,
      "end": 1425,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1406,
          "end": 1424,
          "id": {
            "type": "Identifier",
            "start": 1406,
            "end": 1408,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1413,
                "end": 1417,
                "name": "foo2",
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
      "start": 1436,
      "end": 1461,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1440,
          "end": 1460,
          "id": {
            "type": "Identifier",
            "start": 1440,
            "end": 1442,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1447,
                "end": 1451,
                "name": "foo3",
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
      "start": 1473,
      "end": 1499,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1477,
          "end": 1498,
          "id": {
            "type": "Identifier",
            "start": 1477,
            "end": 1479,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1484,
                "end": 1488,
                "name": "foo4",
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
      "start": 1510,
      "end": 1535,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1514,
          "end": 1534,
          "id": {
            "type": "Identifier",
            "start": 1514,
            "end": 1516,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1521,
                "end": 1525,
                "name": "foo5",
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
      "start": 1547,
      "end": 1565,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1551,
          "end": 1564,
          "id": {
            "type": "Identifier",
            "start": 1551,
            "end": 1553,
            "name": "r9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1558,
                "end": 1562,
                "name": "foo6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
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
      "start": 1572,
      "end": 1593,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1576,
          "end": 1592,
          "id": {
            "type": "Identifier",
            "start": 1576,
            "end": 1579,
            "name": "r10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1584,
                "end": 1588,
                "name": "foo7",
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
                "start": 1589,
                "end": 1591,
                "value": "",
                "raw": "''"
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
      "start": 1600,
      "end": 1619,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1604,
          "end": 1618,
          "id": {
            "type": "Identifier",
            "start": 1604,
            "end": 1607,
            "name": "r11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1612,
                "end": 1616,
                "name": "foo8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
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
