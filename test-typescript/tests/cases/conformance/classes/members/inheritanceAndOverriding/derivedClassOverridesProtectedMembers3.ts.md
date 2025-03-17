__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1603,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 23,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 23,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 23,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 9,
                    "end": 21,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9,
                      "end": 12,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 12,
                      "end": 20,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 14,
                        "end": 20
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 60,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 31,
                "end": 60,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 33,
                    "end": 45,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 36,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 36,
                      "end": 44,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 38,
                        "end": 44
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 46,
                    "end": 58,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 49,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 51,
                        "end": 57
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 62,
      "end": 391,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 72,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 391,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 79,
            "end": 91,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "name": "a",
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
              "start": 80,
              "end": 90,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 82,
                "end": 90,
                "exprName": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 96,
            "end": 114,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 97,
              "end": 114,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 98,
                  "end": 109,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 99,
                    "end": 109,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 101,
                      "end": 109,
                      "exprName": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 109,
                        "name": "x",
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
                "start": 111,
                "end": 114,
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
            "start": 119,
            "end": 140,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 124,
              "end": 140,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 127,
                "end": 140,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 129,
                    "end": 138,
                    "argument": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 137,
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
          },
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 167,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 150,
              "end": 167,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 151,
                  "end": 162,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 152,
                    "end": 162,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 154,
                      "end": 162,
                      "exprName": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 162,
                        "name": "x",
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
                "start": 164,
                "end": 167,
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
            "type": "PropertyDefinition",
            "start": 172,
            "end": 197,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "name": "d",
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
              "start": 173,
              "end": 196,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 175,
                "end": 196,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 176,
                    "end": 187,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 177,
                      "end": 187,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 179,
                        "end": 187,
                        "exprName": {
                          "type": "Identifier",
                          "start": 186,
                          "end": 187,
                          "name": "x",
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
                  "start": 189,
                  "end": 196,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 192,
                    "end": 196
                  }
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 203,
            "end": 222,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "name": "r",
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
              "start": 211,
              "end": 221,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 213,
                "end": 221,
                "exprName": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 221,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 227,
            "end": 252,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 235,
              "end": 252,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 236,
                  "end": 247,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 237,
                    "end": 247,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 239,
                      "end": 247,
                      "exprName": {
                        "type": "Identifier",
                        "start": 246,
                        "end": 247,
                        "name": "x",
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
                "start": 249,
                "end": 252,
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
            "start": 257,
            "end": 285,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "name": "t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 269,
              "end": 285,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 272,
                "end": 285,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 274,
                    "end": 283,
                    "argument": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 282,
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
          },
          {
            "type": "MethodDefinition",
            "start": 290,
            "end": 319,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
              "name": "t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 302,
              "end": 319,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 303,
                  "end": 314,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 304,
                    "end": 314,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 306,
                      "end": 314,
                      "exprName": {
                        "type": "Identifier",
                        "start": 313,
                        "end": 314,
                        "name": "x",
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
                "start": 316,
                "end": 319,
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
            "type": "PropertyDefinition",
            "start": 324,
            "end": 356,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 331,
              "end": 332,
              "name": "u",
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
              "start": 332,
              "end": 355,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 334,
                "end": 355,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 335,
                    "end": 346,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 336,
                      "end": 346,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 338,
                        "end": 346,
                        "exprName": {
                          "type": "Identifier",
                          "start": 345,
                          "end": 346,
                          "name": "x",
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
                  "start": 348,
                  "end": 355,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 351,
                    "end": 355
                  }
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 362,
            "end": 389,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 362,
              "end": 373,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 373,
              "end": 389,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 374,
                  "end": 385,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 375,
                    "end": 385,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 377,
                      "end": 385,
                      "exprName": {
                        "type": "Identifier",
                        "start": 384,
                        "end": 385,
                        "name": "x",
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
                "start": 387,
                "end": 389,
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
      "start": 461,
      "end": 562,
      "id": {
        "type": "Identifier",
        "start": 467,
        "end": 475,
        "name": "Derived1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 484,
        "end": 488,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 489,
        "end": 562,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 495,
            "end": 517,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 505,
              "end": 506,
              "name": "a",
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
              "start": 506,
              "end": 516,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 508,
                "end": 516,
                "exprName": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 516,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 522,
            "end": 560,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 522,
              "end": 533,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 533,
              "end": 560,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 534,
                  "end": 545,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 535,
                    "end": 545,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 537,
                      "end": 545,
                      "exprName": {
                        "type": "Identifier",
                        "start": 544,
                        "end": 545,
                        "name": "x",
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
                "start": 547,
                "end": 560,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 549,
                    "end": 558,
                    "expression": {
                      "type": "CallExpression",
                      "start": 549,
                      "end": 557,
                      "callee": {
                        "type": "Super",
                        "start": 549,
                        "end": 554
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 555,
                          "end": 556,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 564,
      "end": 671,
      "id": {
        "type": "Identifier",
        "start": 570,
        "end": 578,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 587,
        "end": 591,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 592,
        "end": 671,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 598,
            "end": 626,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 608,
              "end": 609,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 609,
              "end": 626,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 610,
                  "end": 621,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 611,
                    "end": 621,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 613,
                      "end": 621,
                      "exprName": {
                        "type": "Identifier",
                        "start": 620,
                        "end": 621,
                        "name": "x",
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
                "start": 623,
                "end": 626,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 631,
            "end": 669,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 631,
              "end": 642,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 642,
              "end": 669,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 643,
                  "end": 654,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 644,
                    "end": 654,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 646,
                      "end": 654,
                      "exprName": {
                        "type": "Identifier",
                        "start": 653,
                        "end": 654,
                        "name": "x",
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
                "start": 656,
                "end": 669,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 658,
                    "end": 667,
                    "expression": {
                      "type": "CallExpression",
                      "start": 658,
                      "end": 666,
                      "callee": {
                        "type": "Super",
                        "start": 658,
                        "end": 663
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 664,
                          "end": 665,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 673,
      "end": 783,
      "id": {
        "type": "Identifier",
        "start": 679,
        "end": 687,
        "name": "Derived3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 696,
        "end": 700,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 701,
        "end": 783,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 707,
            "end": 738,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 721,
              "end": 722,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 722,
              "end": 738,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 725,
                "end": 738,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 727,
                    "end": 736,
                    "argument": {
                      "type": "Identifier",
                      "start": 734,
                      "end": 735,
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 743,
            "end": 781,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 743,
              "end": 754,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 754,
              "end": 781,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 755,
                  "end": 766,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 756,
                    "end": 766,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 758,
                      "end": 766,
                      "exprName": {
                        "type": "Identifier",
                        "start": 765,
                        "end": 766,
                        "name": "x",
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
                "start": 768,
                "end": 781,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 770,
                    "end": 779,
                    "expression": {
                      "type": "CallExpression",
                      "start": 770,
                      "end": 778,
                      "callee": {
                        "type": "Super",
                        "start": 770,
                        "end": 775
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 776,
                          "end": 777,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 785,
      "end": 896,
      "id": {
        "type": "Identifier",
        "start": 791,
        "end": 799,
        "name": "Derived4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 808,
        "end": 812,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 813,
        "end": 896,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 819,
            "end": 851,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 833,
              "end": 834,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 834,
              "end": 851,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 835,
                  "end": 846,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 836,
                    "end": 846,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 838,
                      "end": 846,
                      "exprName": {
                        "type": "Identifier",
                        "start": 845,
                        "end": 846,
                        "name": "x",
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
                "start": 848,
                "end": 851,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 856,
            "end": 894,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 856,
              "end": 867,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 867,
              "end": 894,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 868,
                  "end": 879,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 869,
                    "end": 879,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 871,
                      "end": 879,
                      "exprName": {
                        "type": "Identifier",
                        "start": 878,
                        "end": 879,
                        "name": "x",
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
                "start": 881,
                "end": 894,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 883,
                    "end": 892,
                    "expression": {
                      "type": "CallExpression",
                      "start": 883,
                      "end": 891,
                      "callee": {
                        "type": "Super",
                        "start": 883,
                        "end": 888
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 889,
                          "end": 890,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 898,
      "end": 1013,
      "id": {
        "type": "Identifier",
        "start": 904,
        "end": 912,
        "name": "Derived5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 921,
        "end": 925,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 926,
        "end": 1013,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 932,
            "end": 968,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 942,
              "end": 943,
              "name": "d",
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
              "start": 943,
              "end": 966,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 945,
                "end": 966,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 946,
                    "end": 957,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 947,
                      "end": 957,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 949,
                        "end": 957,
                        "exprName": {
                          "type": "Identifier",
                          "start": 956,
                          "end": 957,
                          "name": "x",
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
                  "start": 959,
                  "end": 966,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 962,
                    "end": 966
                  }
                }
              }
            },
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 973,
            "end": 1011,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 973,
              "end": 984,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 984,
              "end": 1011,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 985,
                  "end": 996,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 986,
                    "end": 996,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 988,
                      "end": 996,
                      "exprName": {
                        "type": "Identifier",
                        "start": 995,
                        "end": 996,
                        "name": "x",
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
                "start": 998,
                "end": 1011,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1000,
                    "end": 1009,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1000,
                      "end": 1008,
                      "callee": {
                        "type": "Super",
                        "start": 1000,
                        "end": 1005
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1006,
                          "end": 1007,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 1015,
      "end": 1123,
      "id": {
        "type": "Identifier",
        "start": 1021,
        "end": 1029,
        "name": "Derived6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1038,
        "end": 1042,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1043,
        "end": 1123,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1049,
            "end": 1078,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1066,
              "end": 1067,
              "name": "r",
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
              "start": 1067,
              "end": 1077,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1069,
                "end": 1077,
                "exprName": {
                  "type": "Identifier",
                  "start": 1076,
                  "end": 1077,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 1083,
            "end": 1121,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1083,
              "end": 1094,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1094,
              "end": 1121,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1095,
                  "end": 1106,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1096,
                    "end": 1106,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1098,
                      "end": 1106,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1105,
                        "end": 1106,
                        "name": "x",
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
                "start": 1108,
                "end": 1121,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1110,
                    "end": 1119,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1110,
                      "end": 1118,
                      "callee": {
                        "type": "Super",
                        "start": 1110,
                        "end": 1115
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1116,
                          "end": 1117,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 1125,
      "end": 1239,
      "id": {
        "type": "Identifier",
        "start": 1131,
        "end": 1139,
        "name": "Derived7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1148,
        "end": 1152,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1153,
        "end": 1239,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1159,
            "end": 1194,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1176,
              "end": 1177,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1177,
              "end": 1194,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1178,
                  "end": 1189,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1179,
                    "end": 1189,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1181,
                      "end": 1189,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1188,
                        "end": 1189,
                        "name": "x",
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
                "start": 1191,
                "end": 1194,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 1199,
            "end": 1237,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1199,
              "end": 1210,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1210,
              "end": 1237,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1211,
                  "end": 1222,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1212,
                    "end": 1222,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1214,
                      "end": 1222,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1221,
                        "end": 1222,
                        "name": "x",
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
                "start": 1224,
                "end": 1237,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1226,
                    "end": 1235,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1226,
                      "end": 1234,
                      "callee": {
                        "type": "Super",
                        "start": 1226,
                        "end": 1231
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1232,
                          "end": 1233,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 1241,
      "end": 1358,
      "id": {
        "type": "Identifier",
        "start": 1247,
        "end": 1255,
        "name": "Derived8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1264,
        "end": 1268,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1269,
        "end": 1358,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1275,
            "end": 1313,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1296,
              "end": 1297,
              "name": "t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1297,
              "end": 1313,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1300,
                "end": 1313,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1302,
                    "end": 1311,
                    "argument": {
                      "type": "Identifier",
                      "start": 1309,
                      "end": 1310,
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 1318,
            "end": 1356,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1318,
              "end": 1329,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1329,
              "end": 1356,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1330,
                  "end": 1341,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1331,
                    "end": 1341,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1333,
                      "end": 1341,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1340,
                        "end": 1341,
                        "name": "x",
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
                "start": 1343,
                "end": 1356,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1345,
                    "end": 1354,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1345,
                      "end": 1353,
                      "callee": {
                        "type": "Super",
                        "start": 1345,
                        "end": 1350
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1351,
                          "end": 1352,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 1360,
      "end": 1478,
      "id": {
        "type": "Identifier",
        "start": 1366,
        "end": 1374,
        "name": "Derived9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1383,
        "end": 1387,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1388,
        "end": 1478,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1394,
            "end": 1433,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1415,
              "end": 1416,
              "name": "t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1416,
              "end": 1433,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1417,
                  "end": 1428,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1418,
                    "end": 1428,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1420,
                      "end": 1428,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1427,
                        "end": 1428,
                        "name": "x",
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
                "start": 1430,
                "end": 1433,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 1438,
            "end": 1476,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1438,
              "end": 1449,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1449,
              "end": 1476,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1450,
                  "end": 1461,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1451,
                    "end": 1461,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1453,
                      "end": 1461,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1460,
                        "end": 1461,
                        "name": "x",
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
                "start": 1463,
                "end": 1476,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1465,
                    "end": 1474,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1465,
                      "end": 1473,
                      "callee": {
                        "type": "Super",
                        "start": 1465,
                        "end": 1470
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1471,
                          "end": 1472,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 1480,
      "end": 1603,
      "id": {
        "type": "Identifier",
        "start": 1486,
        "end": 1495,
        "name": "Derived10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1504,
        "end": 1508,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1509,
        "end": 1603,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1515,
            "end": 1558,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1532,
              "end": 1533,
              "name": "u",
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
              "start": 1533,
              "end": 1556,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1535,
                "end": 1556,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1536,
                    "end": 1547,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1537,
                      "end": 1547,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 1539,
                        "end": 1547,
                        "exprName": {
                          "type": "Identifier",
                          "start": 1546,
                          "end": 1547,
                          "name": "x",
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
                  "start": 1549,
                  "end": 1556,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1552,
                    "end": 1556
                  }
                }
              }
            },
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 1563,
            "end": 1601,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1563,
              "end": 1574,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1574,
              "end": 1601,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1575,
                  "end": 1586,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1576,
                    "end": 1586,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1578,
                      "end": 1586,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1585,
                        "end": 1586,
                        "name": "x",
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
                "start": 1588,
                "end": 1601,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1590,
                    "end": 1599,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1590,
                      "end": 1598,
                      "callee": {
                        "type": "Super",
                        "start": 1590,
                        "end": 1595
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1596,
                          "end": 1597,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
