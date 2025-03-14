classWithBaseClassButNoConstructor.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 593,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 45,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 45,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 43,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 28,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 43,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 43,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 29,
                  "end": 38,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 30,
                    "end": 38,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 32,
                      "end": 38
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
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 47,
      "end": 88,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 68,
        "end": 88,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 74,
            "end": 86,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 77,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 85,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
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
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 63,
        "end": 67,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 99,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 116,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 109,
            "end": 116,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 133,
            "decorators": [],
            "name": "c2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 136,
            "end": 144,
            "arguments": [
              {
                "type": "Literal",
                "start": 142,
                "end": 143,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 153,
      "end": 199,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 170,
        "end": 199,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 176,
            "end": 197,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 187,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 187,
              "end": 197,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 194,
                "end": 197,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 188,
                  "end": 192,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 189,
                    "end": 192,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 191,
                      "end": 192,
                      "typeName": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 192,
                        "decorators": [],
                        "name": "T",
                        "optional": false
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
        "start": 159,
        "end": 164,
        "decorators": [],
        "name": "Base2",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 164,
        "end": 169,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 165,
            "end": 166,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 167,
            "end": 168,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 201,
      "end": 248,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 233,
        "end": 248,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 239,
            "end": 246,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 242,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 242,
              "end": 245,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 244,
                "end": 245,
                "typeName": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 245,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
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
        "start": 207,
        "end": 208,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 222,
        "end": 227,
        "decorators": [],
        "name": "Base2",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 227,
        "end": 232,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 228,
            "end": 229,
            "typeName": {
              "type": "Identifier",
              "start": 228,
              "end": 229,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 230,
            "end": 231,
            "typeName": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
              "decorators": [],
              "name": "U",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 208,
        "end": 213,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 209,
            "end": 210,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 211,
            "end": 212,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 250,
      "end": 261,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 260,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 256,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 259,
            "end": 260,
            "decorators": [],
            "name": "D",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 262,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 277,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 267,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 270,
            "end": 277,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 274,
              "end": 275,
              "decorators": [],
              "name": "D",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 288,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 292,
          "end": 305,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 292,
            "end": 294,
            "decorators": [],
            "name": "d2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 297,
            "end": 305,
            "arguments": [
              {
                "type": "Literal",
                "start": 303,
                "end": 304,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
              "decorators": [],
              "name": "D",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 340,
      "end": 400,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 385,
        "end": 400,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 391,
            "end": 398,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 391,
              "end": 394,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 394,
              "end": 397,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 396,
                "end": 397,
                "typeName": {
                  "type": "Identifier",
                  "start": 396,
                  "end": 397,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
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
        "start": 346,
        "end": 348,
        "decorators": [],
        "name": "D2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 363,
        "end": 368,
        "decorators": [],
        "name": "Base2",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 368,
        "end": 384,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 369,
            "end": 375
          },
          {
            "type": "TSNumberKeyword",
            "start": 377,
            "end": 383
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 348,
        "end": 354,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 349,
            "end": 350,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 352,
            "end": 353,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 352,
              "end": 353,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 414,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 413,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 408,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 411,
            "end": 413,
            "decorators": [],
            "name": "D2",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 415,
      "end": 432,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 419,
          "end": 431,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 419,
            "end": 421,
            "decorators": [],
            "name": "d3",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 424,
            "end": 431,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "decorators": [],
              "name": "D",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 442,
      "end": 460,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 446,
          "end": 459,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 446,
            "end": 448,
            "decorators": [],
            "name": "d4",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 451,
            "end": 459,
            "arguments": [
              {
                "type": "Literal",
                "start": 457,
                "end": 458,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 455,
              "end": 456,
              "decorators": [],
              "name": "D",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 468,
      "end": 527,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 507,
        "end": 527,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 513,
            "end": 525,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 513,
              "end": 516,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 516,
              "end": 524,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 518,
                "end": 524
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
        "start": 474,
        "end": 476,
        "decorators": [],
        "name": "D3",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 485,
        "end": 490,
        "decorators": [],
        "name": "Base2",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 490,
        "end": 506,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 491,
            "end": 497
          },
          {
            "type": "TSNumberKeyword",
            "start": 499,
            "end": 505
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 529,
      "end": 541,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 533,
          "end": 540,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 533,
            "end": 535,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 538,
            "end": 540,
            "decorators": [],
            "name": "D3",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 542,
      "end": 559,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 546,
          "end": 558,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 546,
            "end": 548,
            "decorators": [],
            "name": "d5",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 551,
            "end": 558,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 555,
              "end": 556,
              "decorators": [],
              "name": "D",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 569,
      "end": 587,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 573,
          "end": 586,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 573,
            "end": 575,
            "decorators": [],
            "name": "d6",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 578,
            "end": 586,
            "arguments": [
              {
                "type": "Literal",
                "start": 584,
                "end": 585,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 582,
              "end": 583,
              "decorators": [],
              "name": "D",
              "optional": false
            }
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
