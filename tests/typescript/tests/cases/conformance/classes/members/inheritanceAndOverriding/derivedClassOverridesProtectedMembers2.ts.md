__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1318,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 23,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
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
      "start": 24,
      "end": 60,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 60,
            "decorators": [],
            "name": "y",
            "optional": false,
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
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 62,
      "end": 490,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 72,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 490,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 79,
            "end": 101,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 100,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 92,
                "end": 100,
                "exprName": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 106,
            "end": 134,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 117,
              "end": 134,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 118,
                  "end": 129,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 119,
                    "end": 129,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 121,
                      "end": 129,
                      "exprName": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 129,
                        "decorators": [],
                        "name": "x",
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
                "start": 131,
                "end": 134,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 170,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 154,
              "end": 170,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 157,
                "end": 170,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 159,
                    "end": 168,
                    "argument": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
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
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 175,
            "end": 207,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 190,
              "end": 207,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 191,
                  "end": 202,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 192,
                    "end": 202,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 194,
                      "end": 202,
                      "exprName": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 202,
                        "decorators": [],
                        "name": "x",
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
                "start": 204,
                "end": 207,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "PropertyDefinition",
            "start": 212,
            "end": 248,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 223,
              "end": 246,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 225,
                "end": 246,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 226,
                    "end": 237,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 227,
                      "end": 237,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 229,
                        "end": 237,
                        "exprName": {
                          "type": "Identifier",
                          "start": 236,
                          "end": 237,
                          "decorators": [],
                          "name": "x",
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
                  "start": 239,
                  "end": 246,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 242,
                    "end": 246
                  }
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          },
          {
            "type": "PropertyDefinition",
            "start": 254,
            "end": 283,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 272,
              "end": 282,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 274,
                "end": 282,
                "exprName": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 282,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 288,
            "end": 323,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 305,
              "end": 306,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 306,
              "end": 323,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 307,
                  "end": 318,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 308,
                    "end": 318,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 310,
                      "end": 318,
                      "exprName": {
                        "type": "Identifier",
                        "start": 317,
                        "end": 318,
                        "decorators": [],
                        "name": "x",
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
                "start": 320,
                "end": 323,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 328,
            "end": 366,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 350,
              "end": 366,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 353,
                "end": 366,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 355,
                    "end": 364,
                    "argument": {
                      "type": "Identifier",
                      "start": 362,
                      "end": 363,
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
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 371,
            "end": 410,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 392,
              "end": 393,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 393,
              "end": 410,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 394,
                  "end": 405,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 395,
                    "end": 405,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 397,
                      "end": 405,
                      "exprName": {
                        "type": "Identifier",
                        "start": 404,
                        "end": 405,
                        "decorators": [],
                        "name": "x",
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
                "start": 407,
                "end": 410,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "PropertyDefinition",
            "start": 415,
            "end": 458,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 432,
              "end": 433,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 433,
              "end": 456,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 435,
                "end": 456,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 436,
                    "end": 447,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 437,
                      "end": 447,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 439,
                        "end": 447,
                        "exprName": {
                          "type": "Identifier",
                          "start": 446,
                          "end": 447,
                          "decorators": [],
                          "name": "x",
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
                  "start": 449,
                  "end": 456,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 452,
                    "end": 456
                  }
                }
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 460,
            "end": 488,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 460,
              "end": 471,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 471,
              "end": 488,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 472,
                  "end": 483,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 473,
                    "end": 483,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 475,
                      "end": 483,
                      "exprName": {
                        "type": "Identifier",
                        "start": 482,
                        "end": 483,
                        "decorators": [],
                        "name": "x",
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
                "start": 485,
                "end": 488,
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
      "type": "ClassDeclaration",
      "start": 550,
      "end": 906,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 556,
        "end": 563,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 572,
        "end": 576,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 577,
        "end": 906,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 583,
            "end": 595,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 583,
              "end": 584,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 584,
              "end": 594,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 586,
                "end": 594,
                "exprName": {
                  "type": "Identifier",
                  "start": 593,
                  "end": 594,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 600,
            "end": 618,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 600,
              "end": 601,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 601,
              "end": 618,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 602,
                  "end": 613,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 603,
                    "end": 613,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 605,
                      "end": 613,
                      "exprName": {
                        "type": "Identifier",
                        "start": 612,
                        "end": 613,
                        "decorators": [],
                        "name": "y",
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
                "start": 615,
                "end": 618,
                "body": []
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
            "end": 644,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 627,
              "end": 628,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 628,
              "end": 644,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 631,
                "end": 644,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 633,
                    "end": 642,
                    "argument": {
                      "type": "Identifier",
                      "start": 640,
                      "end": 641,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 649,
            "end": 671,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 653,
              "end": 654,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 654,
              "end": 671,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 655,
                  "end": 666,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 656,
                    "end": 666,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 658,
                      "end": 666,
                      "exprName": {
                        "type": "Identifier",
                        "start": 665,
                        "end": 666,
                        "decorators": [],
                        "name": "y",
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
                "start": 668,
                "end": 671,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 676,
            "end": 701,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 676,
              "end": 677,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 677,
              "end": 700,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 679,
                "end": 700,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 680,
                    "end": 691,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 681,
                      "end": 691,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 683,
                        "end": 691,
                        "exprName": {
                          "type": "Identifier",
                          "start": 690,
                          "end": 691,
                          "decorators": [],
                          "name": "y",
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
                  "start": 693,
                  "end": 700,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 696,
                    "end": 700
                  }
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 707,
            "end": 726,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 714,
              "end": 715,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 715,
              "end": 725,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 717,
                "end": 725,
                "exprName": {
                  "type": "Identifier",
                  "start": 724,
                  "end": 725,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 731,
            "end": 756,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 738,
              "end": 739,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 739,
              "end": 756,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 740,
                  "end": 751,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 741,
                    "end": 751,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 743,
                      "end": 751,
                      "exprName": {
                        "type": "Identifier",
                        "start": 750,
                        "end": 751,
                        "decorators": [],
                        "name": "y",
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
                "start": 753,
                "end": 756,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 761,
            "end": 789,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 772,
              "end": 773,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 773,
              "end": 789,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 776,
                "end": 789,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 778,
                    "end": 787,
                    "argument": {
                      "type": "Identifier",
                      "start": 785,
                      "end": 786,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 794,
            "end": 823,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 805,
              "end": 806,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 806,
              "end": 823,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 807,
                  "end": 818,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 808,
                    "end": 818,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 810,
                      "end": 818,
                      "exprName": {
                        "type": "Identifier",
                        "start": 817,
                        "end": 818,
                        "decorators": [],
                        "name": "y",
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
                "start": 820,
                "end": 823,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 828,
            "end": 860,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 835,
              "end": 836,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 836,
              "end": 859,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 838,
                "end": 859,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 839,
                    "end": 850,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 840,
                      "end": 850,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 842,
                        "end": 850,
                        "exprName": {
                          "type": "Identifier",
                          "start": 849,
                          "end": 850,
                          "decorators": [],
                          "name": "y",
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
                  "start": 852,
                  "end": 859,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 855,
                    "end": 859
                  }
                }
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 866,
            "end": 904,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 866,
              "end": 877,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 877,
              "end": 904,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 878,
                  "end": 889,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 879,
                    "end": 889,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 881,
                      "end": 889,
                      "exprName": {
                        "type": "Identifier",
                        "start": 888,
                        "end": 889,
                        "decorators": [],
                        "name": "y",
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
                "start": 891,
                "end": 904,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 893,
                    "end": 902,
                    "expression": {
                      "type": "CallExpression",
                      "start": 893,
                      "end": 901,
                      "callee": {
                        "type": "Super",
                        "start": 893,
                        "end": 898
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 899,
                          "end": 900,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
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
      "start": 908,
      "end": 940,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 912,
          "end": 939,
          "id": {
            "type": "Identifier",
            "start": 912,
            "end": 922,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 913,
              "end": 922,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 915,
                "end": 922,
                "typeName": {
                  "type": "Identifier",
                  "start": 915,
                  "end": 922,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 925,
            "end": 939,
            "callee": {
              "type": "Identifier",
              "start": 929,
              "end": 936,
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 937,
                "end": 938,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
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
      "start": 941,
      "end": 954,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 945,
          "end": 953,
          "id": {
            "type": "Identifier",
            "start": 945,
            "end": 947,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 950,
            "end": 953,
            "object": {
              "type": "Identifier",
              "start": 950,
              "end": 951,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 952,
              "end": 953,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 955,
      "end": 971,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 959,
          "end": 970,
          "id": {
            "type": "Identifier",
            "start": 959,
            "end": 961,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 964,
            "end": 970,
            "callee": {
              "type": "MemberExpression",
              "start": 964,
              "end": 967,
              "object": {
                "type": "Identifier",
                "start": 964,
                "end": 965,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 966,
                "end": 967,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 968,
                "end": 969,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
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
      "start": 972,
      "end": 985,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 976,
          "end": 984,
          "id": {
            "type": "Identifier",
            "start": 976,
            "end": 978,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 981,
            "end": 984,
            "object": {
              "type": "Identifier",
              "start": 981,
              "end": 982,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 983,
              "end": 984,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 986,
      "end": 1000,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 990,
          "end": 999,
          "id": {
            "type": "Identifier",
            "start": 990,
            "end": 993,
            "decorators": [],
            "name": "r3a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 996,
            "end": 999,
            "object": {
              "type": "Identifier",
              "start": 996,
              "end": 997,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 998,
              "end": 999,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1001,
      "end": 1009,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1001,
        "end": 1008,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1001,
          "end": 1004,
          "object": {
            "type": "Identifier",
            "start": 1001,
            "end": 1002,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1003,
            "end": 1004,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 1007,
          "end": 1008,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1010,
      "end": 1029,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1014,
          "end": 1028,
          "id": {
            "type": "Identifier",
            "start": 1014,
            "end": 1016,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1019,
            "end": 1028,
            "object": {
              "type": "Identifier",
              "start": 1019,
              "end": 1026,
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1027,
              "end": 1028,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1030,
      "end": 1052,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1034,
          "end": 1051,
          "id": {
            "type": "Identifier",
            "start": 1034,
            "end": 1036,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1039,
            "end": 1051,
            "callee": {
              "type": "MemberExpression",
              "start": 1039,
              "end": 1048,
              "object": {
                "type": "Identifier",
                "start": 1039,
                "end": 1046,
                "decorators": [],
                "name": "Derived",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1047,
                "end": 1048,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1049,
                "end": 1050,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
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
      "start": 1053,
      "end": 1072,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1057,
          "end": 1071,
          "id": {
            "type": "Identifier",
            "start": 1057,
            "end": 1059,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1062,
            "end": 1071,
            "object": {
              "type": "Identifier",
              "start": 1062,
              "end": 1069,
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1070,
              "end": 1071,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1073,
      "end": 1093,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1077,
          "end": 1092,
          "id": {
            "type": "Identifier",
            "start": 1077,
            "end": 1080,
            "decorators": [],
            "name": "r6a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1083,
            "end": 1092,
            "object": {
              "type": "Identifier",
              "start": 1083,
              "end": 1090,
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1091,
              "end": 1092,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1094,
      "end": 1108,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1094,
        "end": 1107,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1094,
          "end": 1103,
          "object": {
            "type": "Identifier",
            "start": 1094,
            "end": 1101,
            "decorators": [],
            "name": "Derived",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1102,
            "end": 1103,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 1106,
          "end": 1107,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1110,
      "end": 1177,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1116,
        "end": 1121,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1122,
        "end": 1177,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1128,
            "end": 1148,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1129,
                "end": 1138,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1130,
                  "end": 1138,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1132,
                    "end": 1138
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1139,
              "end": 1147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1141,
                "end": 1147,
                "typeName": {
                  "type": "Identifier",
                  "start": 1141,
                  "end": 1147,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 1153,
            "end": 1175,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1154,
                "end": 1163,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1155,
                  "end": 1163,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1157,
                    "end": 1163
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1164,
              "end": 1174,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1166,
                "end": 1174,
                "exprName": {
                  "type": "Identifier",
                  "start": 1173,
                  "end": 1174,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1179,
      "end": 1265,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1185,
        "end": 1193,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1202,
        "end": 1207,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1208,
        "end": 1265,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1214,
            "end": 1236,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1215,
                "end": 1224,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1216,
                  "end": 1224,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1218,
                    "end": 1224
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1225,
              "end": 1235,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1227,
                "end": 1235,
                "exprName": {
                  "type": "Identifier",
                  "start": 1234,
                  "end": 1235,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 1241,
            "end": 1263,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1242,
                "end": 1251,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1243,
                  "end": 1251,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1245,
                    "end": 1251
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1252,
              "end": 1262,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1254,
                "end": 1262,
                "exprName": {
                  "type": "Identifier",
                  "start": 1261,
                  "end": 1262,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1267,
      "end": 1284,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1271,
          "end": 1283,
          "id": {
            "type": "Identifier",
            "start": 1271,
            "end": 1283,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1273,
              "end": 1283,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1275,
                "end": 1283,
                "typeName": {
                  "type": "Identifier",
                  "start": 1275,
                  "end": 1283,
                  "decorators": [],
                  "name": "Derived2",
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
      "type": "VariableDeclaration",
      "start": 1285,
      "end": 1301,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1289,
          "end": 1300,
          "id": {
            "type": "Identifier",
            "start": 1289,
            "end": 1291,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1294,
            "end": 1300,
            "object": {
              "type": "Identifier",
              "start": 1294,
              "end": 1296,
              "decorators": [],
              "name": "d2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1297,
              "end": 1299,
              "value": "",
              "raw": "''"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1302,
      "end": 1317,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1306,
          "end": 1316,
          "id": {
            "type": "Identifier",
            "start": 1306,
            "end": 1308,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1311,
            "end": 1316,
            "object": {
              "type": "Identifier",
              "start": 1311,
              "end": 1313,
              "decorators": [],
              "name": "d2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1314,
              "end": 1315,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
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
