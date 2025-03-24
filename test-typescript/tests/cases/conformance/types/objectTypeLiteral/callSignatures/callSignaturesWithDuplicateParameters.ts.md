__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 50,
  "end": 783,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 62,
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
          "start": 63,
          "end": 64,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 72,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 103,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 81,
            "end": 103,
            "id": {
              "type": "Identifier",
              "start": 90,
              "end": 93,
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
                "start": 94,
                "end": 95,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 97,
                "end": 98,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 100,
              "end": 103,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 132,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 110,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 113,
            "end": 132,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 129,
              "end": 132,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 139,
            "name": "f3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 142,
            "end": 155,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 143,
                "end": 144,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 152,
              "end": 155,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 187,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 162,
            "name": "f4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 165,
            "end": 187,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 169,
                "end": 173,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 170,
                  "end": 173,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 172,
                    "end": 173,
                    "typeName": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 173,
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
                "start": 175,
                "end": 179,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 176,
                  "end": 179,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 178,
                    "end": 179,
                    "typeName": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 179,
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
              "start": 184,
              "end": 187,
              "body": []
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 165,
              "end": 168,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 166,
                  "end": 167,
                  "name": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 167,
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 189,
      "end": 228,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 202,
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
          "start": 203,
          "end": 212,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 204,
            "end": 212,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 206,
              "end": 212
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 214,
          "end": 223,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 215,
            "end": 223,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 217,
              "end": 223
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 225,
        "end": 228,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 229,
      "end": 276,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 276,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 235,
            "name": "f5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 238,
            "end": 276,
            "id": {
              "type": "Identifier",
              "start": 247,
              "end": 250,
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
                "start": 251,
                "end": 260,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 252,
                  "end": 260,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 254,
                    "end": 260
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 262,
                "end": 271,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 263,
                  "end": 271,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 265,
                    "end": 271
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 273,
              "end": 276,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 277,
      "end": 321,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 321,
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 283,
            "name": "f6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 286,
            "end": 321,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 296,
                "end": 305,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 297,
                  "end": 305,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 299,
                    "end": 305
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 307,
                "end": 316,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 308,
                  "end": 316,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 310,
                    "end": 316
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 318,
              "end": 321,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 322,
      "end": 360,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 360,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 328,
            "name": "f7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 331,
            "end": 360,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 332,
                "end": 341,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 333,
                  "end": 341,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 335,
                    "end": 341
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 343,
                "end": 352,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 344,
                  "end": 352,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 346,
                    "end": 352
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 357,
              "end": 360,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 361,
      "end": 392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 392,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 367,
            "name": "f8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 370,
            "end": 392,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 374,
                "end": 378,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 375,
                  "end": 378,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 377,
                    "end": 378,
                    "typeName": {
                      "type": "Identifier",
                      "start": 377,
                      "end": 378,
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
                "start": 380,
                "end": 384,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 381,
                  "end": 384,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 383,
                    "end": 384,
                    "typeName": {
                      "type": "Identifier",
                      "start": 383,
                      "end": 384,
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
              "start": 389,
              "end": 392,
              "body": []
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 370,
              "end": 373,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 371,
                  "end": 372,
                  "name": {
                    "type": "Identifier",
                    "start": 371,
                    "end": 372,
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 394,
      "end": 486,
      "id": {
        "type": "Identifier",
        "start": 400,
        "end": 401,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 402,
        "end": 486,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 408,
            "end": 421,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 411,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 411,
              "end": 421,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 412,
                  "end": 413,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 415,
                  "end": 416,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 418,
                "end": 421,
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
            "start": 426,
            "end": 456,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 426,
              "end": 430,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 430,
              "end": 456,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 431,
                  "end": 440,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 432,
                    "end": 440,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 434,
                      "end": 440
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 442,
                  "end": 451,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 443,
                    "end": 451,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 445,
                      "end": 451
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 453,
                "end": 456,
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
            "start": 461,
            "end": 484,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 461,
              "end": 465,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 465,
              "end": 484,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 469,
                  "end": 473,
                  "name": "x",
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
                  "start": 475,
                  "end": 479,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 476,
                    "end": 479,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 478,
                      "end": 479,
                      "typeName": {
                        "type": "Identifier",
                        "start": 478,
                        "end": 479,
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
                "start": 481,
                "end": 484,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 465,
                "end": 468,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 466,
                    "end": 467,
                    "name": {
                      "type": "Identifier",
                      "start": 466,
                      "end": 467,
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
      "type": "TSInterfaceDeclaration",
      "start": 488,
      "end": 614,
      "id": {
        "type": "Identifier",
        "start": 498,
        "end": 499,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 500,
        "end": 614,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 506,
            "end": 513,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 507,
                "end": 508,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 510,
                "end": 511,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 518,
            "end": 541,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 519,
                "end": 528,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 520,
                  "end": 528,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 522,
                    "end": 528
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 530,
                "end": 539,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 531,
                  "end": 539,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 533,
                    "end": 539
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
            "start": 546,
            "end": 556,
            "key": {
              "type": "Identifier",
              "start": 546,
              "end": 549,
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
                "start": 550,
                "end": 551,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 553,
                "end": 554,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 561,
            "end": 587,
            "key": {
              "type": "Identifier",
              "start": 561,
              "end": 564,
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
                "start": 565,
                "end": 574,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 566,
                  "end": 574,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 568,
                    "end": 574
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 576,
                "end": 585,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 577,
                  "end": 585,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 579,
                    "end": 585
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 592,
            "end": 612,
            "key": {
              "type": "Identifier",
              "start": 592,
              "end": 596,
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
              "start": 596,
              "end": 599,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 597,
                  "end": 598,
                  "name": {
                    "type": "Identifier",
                    "start": 597,
                    "end": 598,
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
                "start": 600,
                "end": 604,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 601,
                  "end": 604,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 603,
                    "end": 604,
                    "typeName": {
                      "type": "Identifier",
                      "start": 603,
                      "end": 604,
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
                "start": 606,
                "end": 610,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 607,
                  "end": 610,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 609,
                    "end": 610,
                    "typeName": {
                      "type": "Identifier",
                      "start": 609,
                      "end": 610,
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
      "start": 616,
      "end": 674,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 620,
          "end": 673,
          "id": {
            "type": "Identifier",
            "start": 620,
            "end": 673,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 621,
              "end": 673,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 623,
                "end": 673,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 629,
                    "end": 639,
                    "key": {
                      "type": "Identifier",
                      "start": 629,
                      "end": 632,
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
                        "start": 633,
                        "end": 634,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 636,
                        "end": 637,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 644,
                    "end": 671,
                    "key": {
                      "type": "Identifier",
                      "start": 644,
                      "end": 648,
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
                        "start": 649,
                        "end": 658,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 650,
                          "end": 658,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 652,
                            "end": 658
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 660,
                        "end": 669,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 661,
                          "end": 669,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 663,
                            "end": 669
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": null,
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
      "type": "VariableDeclaration",
      "start": 676,
      "end": 783,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 680,
          "end": 783,
          "id": {
            "type": "Identifier",
            "start": 680,
            "end": 681,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 684,
            "end": 783,
            "properties": [
              {
                "type": "Property",
                "start": 690,
                "end": 703,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 690,
                  "end": 693,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 693,
                  "end": 703,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 694,
                      "end": 695,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 697,
                      "end": 698,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 700,
                    "end": 703,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 709,
                "end": 750,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 709,
                  "end": 710,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 712,
                  "end": 750,
                  "id": {
                    "type": "Identifier",
                    "start": 721,
                    "end": 724,
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
                      "start": 725,
                      "end": 734,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 726,
                        "end": 734,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 728,
                          "end": 734
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 736,
                      "end": 745,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 737,
                        "end": 745,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 739,
                          "end": 745
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 747,
                    "end": 750,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 756,
                "end": 781,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 756,
                  "end": 757,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 759,
                  "end": 781,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 763,
                      "end": 767,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 764,
                        "end": 767,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 766,
                          "end": 767,
                          "typeName": {
                            "type": "Identifier",
                            "start": 766,
                            "end": 767,
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
                      "start": 769,
                      "end": 773,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 770,
                        "end": 773,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 772,
                          "end": 773,
                          "typeName": {
                            "type": "Identifier",
                            "start": 772,
                            "end": 773,
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
                    "start": 778,
                    "end": 781,
                    "body": []
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 759,
                    "end": 762,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 760,
                        "end": 761,
                        "name": {
                          "type": "Identifier",
                          "start": 760,
                          "end": 761,
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
                "kind": "init",
                "optional": false
              }
            ]
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
