derivedClassOverridesPublicMembers.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1162,
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
      "end": 392,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 392,
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
            "end": 390,
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
              "end": 390,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 387,
                "end": 390,
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
      "start": 394,
      "end": 749,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 421,
        "end": 749,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 427,
            "end": 439,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 427,
              "end": 428,
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
              "start": 428,
              "end": 438,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 430,
                "end": 438,
                "exprName": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 438,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 444,
            "end": 462,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 444,
              "end": 445,
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
              "start": 445,
              "end": 462,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 459,
                "end": 462,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 446,
                  "end": 457,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 447,
                    "end": 457,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 449,
                      "end": 457,
                      "exprName": {
                        "type": "Identifier",
                        "start": 456,
                        "end": 457,
                        "decorators": [],
                        "name": "y",
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
            "start": 467,
            "end": 488,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 471,
              "end": 472,
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
              "start": 472,
              "end": 488,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 475,
                "end": 488,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 477,
                    "end": 486,
                    "argument": {
                      "type": "Identifier",
                      "start": 484,
                      "end": 485,
                      "decorators": [],
                      "name": "y",
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
            "start": 493,
            "end": 515,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 497,
              "end": 498,
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
              "start": 498,
              "end": 515,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 512,
                "end": 515,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 499,
                  "end": 510,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 500,
                    "end": 510,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 502,
                      "end": 510,
                      "exprName": {
                        "type": "Identifier",
                        "start": 509,
                        "end": 510,
                        "decorators": [],
                        "name": "y",
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
            "start": 520,
            "end": 545,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 520,
              "end": 521,
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
              "start": 521,
              "end": 544,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 523,
                "end": 544,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 524,
                    "end": 535,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 525,
                      "end": 535,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 527,
                        "end": 535,
                        "exprName": {
                          "type": "Identifier",
                          "start": 534,
                          "end": 535,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 537,
                  "end": 544,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 540,
                    "end": 544
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 551,
            "end": 570,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 558,
              "end": 559,
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
              "start": 559,
              "end": 569,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 561,
                "end": 569,
                "exprName": {
                  "type": "Identifier",
                  "start": 568,
                  "end": 569,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 575,
            "end": 600,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 582,
              "end": 583,
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
              "start": 583,
              "end": 600,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 597,
                "end": 600,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 584,
                  "end": 595,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 585,
                    "end": 595,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 587,
                      "end": 595,
                      "exprName": {
                        "type": "Identifier",
                        "start": 594,
                        "end": 595,
                        "decorators": [],
                        "name": "y",
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
            "start": 605,
            "end": 633,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 616,
              "end": 617,
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
              "start": 617,
              "end": 633,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 620,
                "end": 633,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 622,
                    "end": 631,
                    "argument": {
                      "type": "Identifier",
                      "start": 629,
                      "end": 630,
                      "decorators": [],
                      "name": "y",
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
            "start": 638,
            "end": 667,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 649,
              "end": 650,
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
              "start": 650,
              "end": 667,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 664,
                "end": 667,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 651,
                  "end": 662,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 652,
                    "end": 662,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 654,
                      "end": 662,
                      "exprName": {
                        "type": "Identifier",
                        "start": 661,
                        "end": 662,
                        "decorators": [],
                        "name": "y",
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
            "start": 672,
            "end": 704,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 679,
              "end": 680,
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
              "start": 680,
              "end": 703,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 682,
                "end": 703,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 683,
                    "end": 694,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 684,
                      "end": 694,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 686,
                        "end": 694,
                        "exprName": {
                          "type": "Identifier",
                          "start": 693,
                          "end": 694,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 696,
                  "end": 703,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 699,
                    "end": 703
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 710,
            "end": 747,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 710,
              "end": 721,
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
              "start": 721,
              "end": 747,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 735,
                "end": 747,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 737,
                    "end": 745,
                    "expression": {
                      "type": "CallExpression",
                      "start": 737,
                      "end": 745,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 743,
                          "end": 744,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 737,
                        "end": 742
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
                  "start": 722,
                  "end": 733,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 723,
                    "end": 733,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 725,
                      "end": 733,
                      "exprName": {
                        "type": "Identifier",
                        "start": 732,
                        "end": 733,
                        "decorators": [],
                        "name": "y",
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
        "start": 400,
        "end": 407,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 416,
        "end": 420,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 751,
      "end": 783,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 755,
          "end": 782,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 755,
            "end": 765,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 756,
              "end": 765,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 758,
                "end": 765,
                "typeName": {
                  "type": "Identifier",
                  "start": 758,
                  "end": 765,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 768,
            "end": 782,
            "arguments": [
              {
                "type": "Identifier",
                "start": 780,
                "end": 781,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 772,
              "end": 779,
              "decorators": [],
              "name": "Derived",
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
      "start": 784,
      "end": 797,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 788,
          "end": 796,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 788,
            "end": 790,
            "decorators": [],
            "name": "r1",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 793,
            "end": 796,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 793,
              "end": 794,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 795,
              "end": 796,
              "decorators": [],
              "name": "a",
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
      "start": 798,
      "end": 814,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 802,
          "end": 813,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 802,
            "end": 804,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 807,
            "end": 813,
            "arguments": [
              {
                "type": "Identifier",
                "start": 811,
                "end": 812,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 807,
              "end": 810,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 807,
                "end": 808,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 809,
                "end": 810,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 815,
      "end": 828,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 819,
          "end": 827,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 819,
            "end": 821,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 824,
            "end": 827,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 824,
              "end": 825,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 826,
              "end": 827,
              "decorators": [],
              "name": "c",
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
      "start": 829,
      "end": 843,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 833,
          "end": 842,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 833,
            "end": 836,
            "decorators": [],
            "name": "r3a",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 839,
            "end": 842,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 839,
              "end": 840,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 841,
              "end": 842,
              "decorators": [],
              "name": "d",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 844,
      "end": 852,
      "expression": {
        "type": "AssignmentExpression",
        "start": 844,
        "end": 851,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 844,
          "end": 847,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 844,
            "end": 845,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 846,
            "end": 847,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 850,
          "end": 851,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 853,
      "end": 872,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 857,
          "end": 871,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 857,
            "end": 859,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 862,
            "end": 871,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 862,
              "end": 869,
              "decorators": [],
              "name": "Derived",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 870,
              "end": 871,
              "decorators": [],
              "name": "r",
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
      "start": 873,
      "end": 895,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 877,
          "end": 894,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 877,
            "end": 879,
            "decorators": [],
            "name": "r5",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 882,
            "end": 894,
            "arguments": [
              {
                "type": "Identifier",
                "start": 892,
                "end": 893,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 882,
              "end": 891,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 882,
                "end": 889,
                "decorators": [],
                "name": "Derived",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 890,
                "end": 891,
                "decorators": [],
                "name": "s",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 896,
      "end": 915,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 900,
          "end": 914,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 900,
            "end": 902,
            "decorators": [],
            "name": "r6",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 905,
            "end": 914,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 905,
              "end": 912,
              "decorators": [],
              "name": "Derived",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 913,
              "end": 914,
              "decorators": [],
              "name": "t",
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
      "start": 916,
      "end": 936,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 920,
          "end": 935,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 920,
            "end": 923,
            "decorators": [],
            "name": "r6a",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 926,
            "end": 935,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 926,
              "end": 933,
              "decorators": [],
              "name": "Derived",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 934,
              "end": 935,
              "decorators": [],
              "name": "u",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 937,
      "end": 951,
      "expression": {
        "type": "AssignmentExpression",
        "start": 937,
        "end": 950,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 937,
          "end": 946,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 937,
            "end": 944,
            "decorators": [],
            "name": "Derived",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 945,
            "end": 946,
            "decorators": [],
            "name": "t",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 949,
          "end": 950,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 953,
      "end": 1020,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 965,
        "end": 1020,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 971,
            "end": 991,
            "parameters": [
              {
                "type": "Identifier",
                "start": 972,
                "end": 981,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 973,
                  "end": 981,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 975,
                    "end": 981
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 982,
              "end": 990,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 984,
                "end": 990,
                "typeName": {
                  "type": "Identifier",
                  "start": 984,
                  "end": 990,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 996,
            "end": 1018,
            "parameters": [
              {
                "type": "Identifier",
                "start": 997,
                "end": 1006,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 998,
                  "end": 1006,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1000,
                    "end": 1006
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1007,
              "end": 1017,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1009,
                "end": 1017,
                "exprName": {
                  "type": "Identifier",
                  "start": 1016,
                  "end": 1017,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 959,
        "end": 964,
        "decorators": [],
        "name": "Base2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1022,
      "end": 1108,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1051,
        "end": 1108,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1057,
            "end": 1079,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1058,
                "end": 1067,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1059,
                  "end": 1067,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1061,
                    "end": 1067
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1068,
              "end": 1078,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1070,
                "end": 1078,
                "exprName": {
                  "type": "Identifier",
                  "start": 1077,
                  "end": 1078,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 1084,
            "end": 1106,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1085,
                "end": 1094,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1086,
                  "end": 1094,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1088,
                    "end": 1094
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1095,
              "end": 1105,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1097,
                "end": 1105,
                "exprName": {
                  "type": "Identifier",
                  "start": 1104,
                  "end": 1105,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1028,
        "end": 1036,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1045,
        "end": 1050,
        "decorators": [],
        "name": "Base2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1110,
      "end": 1127,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1114,
          "end": 1126,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1114,
            "end": 1126,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1116,
              "end": 1126,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1118,
                "end": 1126,
                "typeName": {
                  "type": "Identifier",
                  "start": 1118,
                  "end": 1126,
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false
                }
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
      "start": 1128,
      "end": 1144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1132,
          "end": 1143,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1132,
            "end": 1134,
            "decorators": [],
            "name": "r7",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1137,
            "end": 1143,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1137,
              "end": 1139,
              "decorators": [],
              "name": "d2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1140,
              "end": 1142,
              "raw": "''",
              "value": ""
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1145,
      "end": 1160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1149,
          "end": 1159,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1149,
            "end": 1151,
            "decorators": [],
            "name": "r8",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1154,
            "end": 1159,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1154,
              "end": 1156,
              "decorators": [],
              "name": "d2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1157,
              "end": 1158,
              "raw": "1",
              "value": 1
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
