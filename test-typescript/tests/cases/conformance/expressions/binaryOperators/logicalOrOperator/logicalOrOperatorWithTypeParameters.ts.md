__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 575,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "fn1",
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
          "start": 19,
          "end": 23,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 23,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 22,
              "end": 23,
              "typeName": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
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
          "start": 25,
          "end": 29,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 29,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 28,
              "end": 29,
              "typeName": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
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
        "start": 31,
        "end": 125,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 37,
            "end": 53,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 41,
                "end": 52,
                "id": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 43,
                  "name": "r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 46,
                  "end": 52,
                  "left": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 58,
            "end": 77,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 62,
                "end": 76,
                "id": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 67,
                  "name": "r2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 67,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 66,
                      "end": 67,
                      "typeName": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
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
                "init": {
                  "type": "LogicalExpression",
                  "start": 70,
                  "end": 76,
                  "left": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 76,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 82,
            "end": 98,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 86,
                "end": 97,
                "id": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 88,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 91,
                  "end": 97,
                  "left": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 92,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 97,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 103,
            "end": 123,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 107,
                "end": 122,
                "id": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 113,
                  "name": "r4",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 109,
                    "end": 113,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 111,
                      "end": 113,
                      "members": []
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 116,
                  "end": 122,
                  "left": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 122,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
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
      "start": 127,
      "end": 362,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 139,
        "name": "fn2",
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
          "start": 177,
          "end": 181,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 178,
            "end": 181,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 180,
              "end": 181,
              "typeName": {
                "type": "Identifier",
                "start": 180,
                "end": 181,
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
          "start": 183,
          "end": 187,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 184,
            "end": 187,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 186,
              "end": 187,
              "typeName": {
                "type": "Identifier",
                "start": 186,
                "end": 187,
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
        {
          "type": "Identifier",
          "start": 189,
          "end": 193,
          "name": "v",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 190,
            "end": 193,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 192,
              "end": 193,
              "typeName": {
                "type": "Identifier",
                "start": 192,
                "end": 193,
                "name": "V",
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
        "start": 195,
        "end": 362,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 201,
            "end": 217,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 205,
                "end": 216,
                "id": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 207,
                  "name": "r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 210,
                  "end": 216,
                  "left": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 216,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 248,
            "end": 264,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 252,
                "end": 263,
                "id": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 254,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 257,
                  "end": 263,
                  "left": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 258,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 263,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 269,
            "end": 288,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 273,
                "end": 287,
                "id": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 278,
                  "name": "r4",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 275,
                    "end": 278,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 277,
                      "end": 278,
                      "typeName": {
                        "type": "Identifier",
                        "start": 277,
                        "end": 278,
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
                "init": {
                  "type": "LogicalExpression",
                  "start": 281,
                  "end": 287,
                  "left": {
                    "type": "Identifier",
                    "start": 281,
                    "end": 282,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 286,
                    "end": 287,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 293,
            "end": 309,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 297,
                "end": 308,
                "id": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 299,
                  "name": "r5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 302,
                  "end": 308,
                  "left": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 303,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 307,
                    "end": 308,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 314,
            "end": 334,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 318,
                "end": 333,
                "id": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 324,
                  "name": "r6",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 320,
                    "end": 324,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 322,
                      "end": 324,
                      "members": []
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 327,
                  "end": 333,
                  "left": {
                    "type": "Identifier",
                    "start": 327,
                    "end": 328,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 332,
                    "end": 333,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 139,
        "end": 176,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 140,
            "end": 141,
            "name": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
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
            "start": 143,
            "end": 144,
            "name": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 160,
            "end": 161,
            "name": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "name": "V",
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
      "start": 364,
      "end": 575,
      "id": {
        "type": "Identifier",
        "start": 373,
        "end": 376,
        "name": "fn3",
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
          "start": 449,
          "end": 453,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 450,
            "end": 453,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 452,
              "end": 453,
              "typeName": {
                "type": "Identifier",
                "start": 452,
                "end": 453,
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
          "start": 455,
          "end": 459,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 456,
            "end": 459,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 458,
              "end": 459,
              "typeName": {
                "type": "Identifier",
                "start": 458,
                "end": 459,
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
        "start": 461,
        "end": 575,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 467,
            "end": 483,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 471,
                "end": 482,
                "id": {
                  "type": "Identifier",
                  "start": 471,
                  "end": 473,
                  "name": "r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 476,
                  "end": 482,
                  "left": {
                    "type": "Identifier",
                    "start": 476,
                    "end": 477,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 481,
                    "end": 482,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 488,
            "end": 508,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 492,
                "end": 507,
                "id": {
                  "type": "Identifier",
                  "start": 492,
                  "end": 498,
                  "name": "r2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 494,
                    "end": 498,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 496,
                      "end": 498,
                      "members": []
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 501,
                  "end": 507,
                  "left": {
                    "type": "Identifier",
                    "start": 501,
                    "end": 502,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 506,
                    "end": 507,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 513,
            "end": 537,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 517,
                "end": 536,
                "id": {
                  "type": "Identifier",
                  "start": 517,
                  "end": 519,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 522,
                  "end": 536,
                  "left": {
                    "type": "Identifier",
                    "start": 522,
                    "end": 523,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "ObjectExpression",
                    "start": 527,
                    "end": 536,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 529,
                        "end": 534,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 529,
                          "end": 530,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 532,
                          "end": 534,
                          "value": "",
                          "raw": "''"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 542,
            "end": 573,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 546,
                "end": 572,
                "id": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 563,
                  "name": "r4",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 548,
                    "end": 563,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 550,
                      "end": 563,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 552,
                          "end": 561,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 552,
                            "end": 553,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 553,
                            "end": 561,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 555,
                              "end": 561
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 566,
                  "end": 572,
                  "left": {
                    "type": "Identifier",
                    "start": 566,
                    "end": 567,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 571,
                    "end": 572,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 376,
        "end": 448,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 377,
            "end": 411,
            "name": {
              "type": "Identifier",
              "start": 377,
              "end": 378,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 387,
              "end": 411,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 389,
                  "end": 399,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 389,
                    "end": 390,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 390,
                    "end": 398,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 392,
                      "end": 398
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 400,
                  "end": 409,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 400,
                    "end": 401,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 401,
                    "end": 409,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 403,
                      "end": 409
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 413,
            "end": 447,
            "name": {
              "type": "Identifier",
              "start": 413,
              "end": 414,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 423,
              "end": 447,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 425,
                  "end": 435,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 426,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 426,
                    "end": 434,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 428,
                      "end": 434
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 436,
                  "end": 445,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 437,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 437,
                    "end": 445,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 439,
                      "end": 445
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
