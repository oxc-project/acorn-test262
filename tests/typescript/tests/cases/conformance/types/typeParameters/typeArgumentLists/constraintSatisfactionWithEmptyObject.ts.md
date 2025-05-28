__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 85,
  "end": 561,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 85,
      "end": 125,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 97,
        "end": 115,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 98,
            "end": 114,
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 108,
              "end": 114,
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 114,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
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
          "start": 116,
          "end": 120,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 117,
            "end": 120,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 119,
              "end": 120,
              "typeName": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
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
        "start": 122,
        "end": 125,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 142,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 141,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 131,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 134,
            "end": 141,
            "callee": {
              "type": "Identifier",
              "start": 134,
              "end": 137,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 138,
                "end": 140,
                "properties": []
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
      "start": 143,
      "end": 154,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 153,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 148,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 151,
            "end": 153,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 155,
      "end": 171,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 170,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 163,
            "end": 170,
            "callee": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 167,
                "end": 169,
                "properties": []
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
      "start": 173,
      "end": 235,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 180,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 180,
        "end": 198,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 181,
            "end": 197,
            "name": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 191,
              "end": 197,
              "typeName": {
                "type": "Identifier",
                "start": 191,
                "end": 197,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
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
        "start": 199,
        "end": 235,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 205,
            "end": 233,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 205,
              "end": 216,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 216,
              "end": 233,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 217,
                  "end": 228,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 228,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 225,
                      "end": 228,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 227,
                        "end": 228,
                        "typeName": {
                          "type": "Identifier",
                          "start": 227,
                          "end": 228,
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
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 230,
                "end": 233,
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 256,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 255,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 243,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 246,
            "end": 255,
            "callee": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 252,
                "end": 254,
                "properties": []
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 258,
      "end": 301,
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 269,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 269,
        "end": 287,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 270,
            "end": 286,
            "name": {
              "type": "Identifier",
              "start": 270,
              "end": 271,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 280,
              "end": 286,
              "typeName": {
                "type": "Identifier",
                "start": 280,
                "end": 286,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
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
        "start": 288,
        "end": 301,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 294,
            "end": 299,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 294,
              "end": 295,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 295,
              "end": 298,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 297,
                "end": 298,
                "typeName": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 298,
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
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 302,
      "end": 315,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 314,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 314,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 314,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 309,
                "end": 314,
                "typeName": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 310,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 310,
                  "end": 314,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 311,
                      "end": 313,
                      "members": []
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
      "type": "FunctionDeclaration",
      "start": 334,
      "end": 371,
      "id": {
        "type": "Identifier",
        "start": 343,
        "end": 347,
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
        "start": 347,
        "end": 361,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 348,
            "end": 360,
            "name": {
              "type": "Identifier",
              "start": 348,
              "end": 349,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 358,
              "end": 360,
              "members": []
            },
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
          "start": 362,
          "end": 366,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 363,
            "end": 366,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 365,
              "end": 366,
              "typeName": {
                "type": "Identifier",
                "start": 365,
                "end": 366,
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
        "start": 368,
        "end": 371,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 372,
      "end": 389,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 376,
          "end": 388,
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 377,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 380,
            "end": 388,
            "callee": {
              "type": "Identifier",
              "start": 380,
              "end": 384,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 385,
                "end": 387,
                "properties": []
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
      "start": 390,
      "end": 401,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 394,
          "end": 400,
          "id": {
            "type": "Identifier",
            "start": 394,
            "end": 395,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 398,
            "end": 400,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 419,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 418,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 407,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 410,
            "end": 418,
            "callee": {
              "type": "Identifier",
              "start": 410,
              "end": 414,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 415,
                "end": 417,
                "properties": []
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
      "start": 421,
      "end": 480,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 427,
        "end": 429,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 429,
        "end": 443,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 430,
            "end": 442,
            "name": {
              "type": "Identifier",
              "start": 430,
              "end": 431,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 440,
              "end": 442,
              "members": []
            },
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
        "start": 444,
        "end": 480,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 450,
            "end": 478,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 450,
              "end": 461,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 461,
              "end": 478,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 462,
                  "end": 473,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 469,
                    "end": 473,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 470,
                      "end": 473,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 472,
                        "end": 473,
                        "typeName": {
                          "type": "Identifier",
                          "start": 472,
                          "end": 473,
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
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 475,
                "end": 478,
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 482,
      "end": 502,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 486,
          "end": 501,
          "id": {
            "type": "Identifier",
            "start": 486,
            "end": 488,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 491,
            "end": 501,
            "callee": {
              "type": "Identifier",
              "start": 495,
              "end": 497,
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 498,
                "end": 500,
                "properties": []
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 504,
      "end": 544,
      "id": {
        "type": "Identifier",
        "start": 514,
        "end": 516,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 516,
        "end": 530,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 517,
            "end": 529,
            "name": {
              "type": "Identifier",
              "start": 517,
              "end": 518,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 527,
              "end": 529,
              "members": []
            },
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
        "start": 531,
        "end": 544,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 537,
            "end": 542,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 537,
              "end": 538,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 538,
              "end": 541,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 540,
                "end": 541,
                "typeName": {
                  "type": "Identifier",
                  "start": 540,
                  "end": 541,
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
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 545,
      "end": 560,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 549,
          "end": 559,
          "id": {
            "type": "Identifier",
            "start": 549,
            "end": 559,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 551,
              "end": 559,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 553,
                "end": 559,
                "typeName": {
                  "type": "Identifier",
                  "start": 553,
                  "end": 555,
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 555,
                  "end": 559,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 556,
                      "end": 558,
                      "members": []
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
