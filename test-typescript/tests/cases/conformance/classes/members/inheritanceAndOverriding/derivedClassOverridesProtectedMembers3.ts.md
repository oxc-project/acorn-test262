derivedClassOverridesProtectedMembers3.ts
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
          "definite": false,
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
                    "key": {
                      "type": "Identifier",
                      "start": 9,
                      "end": 12,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 12,
                      "end": 20,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 14,
                        "end": 20
                      }
                    }
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
      "type": "VariableDeclaration",
      "start": 24,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 60,
          "definite": false,
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
                    "key": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 36,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 36,
                      "end": 44,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 38,
                        "end": 44
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 46,
                    "end": 58,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 49,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 51,
                        "end": 57
                      }
                    }
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
      "type": "ClassDeclaration",
      "start": 62,
      "end": 391,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 391,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 79,
            "end": 91,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 96,
            "end": 114,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 97,
              "end": 114,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 111,
                "end": 114,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 98,
                  "end": 109,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 119,
            "end": 140,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 124,
              "end": 140,
              "async": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 167,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 150,
              "end": 167,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 164,
                "end": 167,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 151,
                  "end": 162,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 172,
            "end": 197,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 173,
              "end": 196,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 175,
                "end": 196,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 176,
                    "end": 187,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
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
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    }
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 203,
            "end": 222,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "decorators": [],
              "name": "r",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
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
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 227,
            "end": 252,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
              "decorators": [],
              "name": "s",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 235,
              "end": 252,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 249,
                "end": 252,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 236,
                  "end": 247,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 257,
            "end": 285,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "decorators": [],
              "name": "t",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 269,
              "end": 285,
              "async": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 290,
            "end": 319,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
              "decorators": [],
              "name": "t",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 302,
              "end": 319,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 316,
                "end": 319,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 303,
                  "end": 314,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 324,
            "end": 356,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 331,
              "end": 332,
              "decorators": [],
              "name": "u",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 332,
              "end": 355,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 334,
                "end": 355,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 335,
                    "end": 346,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
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
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    }
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 362,
            "end": 389,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 362,
              "end": 373,
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
              "start": 373,
              "end": 389,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 387,
                "end": 389,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 374,
                  "end": 385,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "x",
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
        "start": 68,
        "end": 72,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 461,
      "end": 562,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 489,
        "end": 562,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 495,
            "end": 517,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 505,
              "end": 506,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 522,
            "end": 560,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 522,
              "end": 533,
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
              "start": 533,
              "end": 560,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 555,
                          "end": 556,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 549,
                        "end": 554
                      },
                      "optional": false
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
                  "start": 534,
                  "end": 545,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "x",
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
        "start": 467,
        "end": 475,
        "decorators": [],
        "name": "Derived1",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 484,
        "end": 488,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 564,
      "end": 671,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 592,
        "end": 671,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 598,
            "end": 626,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 608,
              "end": 609,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 609,
              "end": 626,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 623,
                "end": 626,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 610,
                  "end": 621,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 631,
            "end": 669,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 631,
              "end": 642,
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
              "start": 642,
              "end": 669,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 664,
                          "end": 665,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 658,
                        "end": 663
                      },
                      "optional": false
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
                  "start": 643,
                  "end": 654,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "x",
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
        "start": 570,
        "end": 578,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 587,
        "end": 591,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 673,
      "end": 783,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 701,
        "end": 783,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 707,
            "end": 738,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 721,
              "end": 722,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 722,
              "end": 738,
              "async": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 743,
            "end": 781,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 743,
              "end": 754,
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
              "start": 754,
              "end": 781,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 776,
                          "end": 777,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 770,
                        "end": 775
                      },
                      "optional": false
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
                  "start": 755,
                  "end": 766,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "x",
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
        "start": 679,
        "end": 687,
        "decorators": [],
        "name": "Derived3",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 696,
        "end": 700,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 785,
      "end": 896,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 813,
        "end": 896,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 819,
            "end": 851,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 833,
              "end": 834,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 834,
              "end": 851,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 848,
                "end": 851,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 835,
                  "end": 846,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 856,
            "end": 894,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 856,
              "end": 867,
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
              "start": 867,
              "end": 894,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 889,
                          "end": 890,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 883,
                        "end": 888
                      },
                      "optional": false
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
                  "start": 868,
                  "end": 879,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "x",
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
        "start": 791,
        "end": 799,
        "decorators": [],
        "name": "Derived4",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 808,
        "end": 812,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 898,
      "end": 1013,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 926,
        "end": 1013,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 932,
            "end": 968,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 942,
              "end": 943,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 943,
              "end": 966,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 945,
                "end": 966,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 946,
                    "end": 957,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
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
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    }
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 973,
            "end": 1011,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 973,
              "end": 984,
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
              "start": 984,
              "end": 1011,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1006,
                          "end": 1007,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 1000,
                        "end": 1005
                      },
                      "optional": false
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
                  "start": 985,
                  "end": 996,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "x",
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
        "start": 904,
        "end": 912,
        "decorators": [],
        "name": "Derived5",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 921,
        "end": 925,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1015,
      "end": 1123,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1043,
        "end": 1123,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1049,
            "end": 1078,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1066,
              "end": 1067,
              "decorators": [],
              "name": "r",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
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
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1083,
            "end": 1121,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1083,
              "end": 1094,
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
              "start": 1094,
              "end": 1121,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1116,
                          "end": 1117,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 1110,
                        "end": 1115
                      },
                      "optional": false
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
                  "start": 1095,
                  "end": 1106,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "x",
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
        "start": 1021,
        "end": 1029,
        "decorators": [],
        "name": "Derived6",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1038,
        "end": 1042,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1125,
      "end": 1239,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1153,
        "end": 1239,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1159,
            "end": 1194,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1176,
              "end": 1177,
              "decorators": [],
              "name": "s",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1177,
              "end": 1194,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1191,
                "end": 1194,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1178,
                  "end": 1189,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1199,
            "end": 1237,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1199,
              "end": 1210,
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
              "start": 1210,
              "end": 1237,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1232,
                          "end": 1233,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 1226,
                        "end": 1231
                      },
                      "optional": false
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
                  "start": 1211,
                  "end": 1222,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "x",
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
        "start": 1131,
        "end": 1139,
        "decorators": [],
        "name": "Derived7",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1148,
        "end": 1152,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1241,
      "end": 1358,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1269,
        "end": 1358,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1275,
            "end": 1313,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1296,
              "end": 1297,
              "decorators": [],
              "name": "t",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1297,
              "end": 1313,
              "async": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1318,
            "end": 1356,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1318,
              "end": 1329,
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
              "start": 1329,
              "end": 1356,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1351,
                          "end": 1352,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 1345,
                        "end": 1350
                      },
                      "optional": false
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
                  "start": 1330,
                  "end": 1341,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "x",
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
        "start": 1247,
        "end": 1255,
        "decorators": [],
        "name": "Derived8",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1264,
        "end": 1268,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1360,
      "end": 1478,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1388,
        "end": 1478,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1394,
            "end": 1433,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1415,
              "end": 1416,
              "decorators": [],
              "name": "t",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1416,
              "end": 1433,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1430,
                "end": 1433,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1417,
                  "end": 1428,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1438,
            "end": 1476,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1438,
              "end": 1449,
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
              "start": 1449,
              "end": 1476,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1471,
                          "end": 1472,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 1465,
                        "end": 1470
                      },
                      "optional": false
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
                  "start": 1450,
                  "end": 1461,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "x",
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
        "start": 1366,
        "end": 1374,
        "decorators": [],
        "name": "Derived9",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1383,
        "end": 1387,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1480,
      "end": 1603,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1509,
        "end": 1603,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1515,
            "end": 1558,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1532,
              "end": 1533,
              "decorators": [],
              "name": "u",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1533,
              "end": 1556,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1535,
                "end": 1556,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1536,
                    "end": 1547,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
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
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    }
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1563,
            "end": 1601,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1563,
              "end": 1574,
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
              "start": 1574,
              "end": 1601,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1596,
                          "end": 1597,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 1590,
                        "end": 1595
                      },
                      "optional": false
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
                  "start": 1575,
                  "end": 1586,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "x",
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
        "start": 1486,
        "end": 1495,
        "decorators": [],
        "name": "Derived10",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1504,
        "end": 1508,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
