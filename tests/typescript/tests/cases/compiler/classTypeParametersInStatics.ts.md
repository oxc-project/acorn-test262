__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 879,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 879,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 13,
        "decorators": [],
        "name": "Editor",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 879,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 22,
            "end": 877,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 29,
              "end": 877,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 35,
                "end": 39,
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 39,
                "end": 42,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 40,
                    "end": 41,
                    "name": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 41,
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
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 43,
                "end": 877,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 53,
                    "end": 74,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 64,
                      "decorators": [],
                      "name": "next",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 64,
                      "end": 73,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 66,
                        "end": 73,
                        "typeName": {
                          "type": "Identifier",
                          "start": 66,
                          "end": 70,
                          "decorators": [],
                          "name": "List",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 70,
                          "end": 73,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 71,
                              "end": 72,
                              "typeName": {
                                "type": "Identifier",
                                "start": 71,
                                "end": 72,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
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
                    "accessibility": "public"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 83,
                    "end": 104,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 90,
                      "end": 94,
                      "decorators": [],
                      "name": "prev",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 94,
                      "end": 103,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 96,
                        "end": 103,
                        "typeName": {
                          "type": "Identifier",
                          "start": 96,
                          "end": 100,
                          "decorators": [],
                          "name": "List",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 100,
                          "end": 103,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 101,
                              "end": 102,
                              "typeName": {
                                "type": "Identifier",
                                "start": 101,
                                "end": 102,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
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
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 114,
                    "end": 186,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 125,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 125,
                      "end": 186,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 126,
                          "end": 148,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 133,
                            "end": 148,
                            "decorators": [],
                            "name": "isHead",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 139,
                              "end": 148,
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 141,
                                "end": 148
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 150,
                          "end": 164,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 157,
                            "end": 164,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 161,
                              "end": 164,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 163,
                                "end": 164,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 163,
                                  "end": 164,
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
                        "start": 166,
                        "end": 186,
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
                    "start": 196,
                    "end": 405,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 218,
                      "decorators": [],
                      "name": "MakeHead",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 218,
                      "end": 405,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 220,
                        "end": 229,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 222,
                          "end": 229,
                          "typeName": {
                            "type": "Identifier",
                            "start": 222,
                            "end": 226,
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 226,
                            "end": 229,
                            "params": [
                              {
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
                            ]
                          }
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 230,
                        "end": 405,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 260,
                            "end": 305,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 264,
                                "end": 304,
                                "id": {
                                  "type": "Identifier",
                                  "start": 264,
                                  "end": 278,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 269,
                                    "end": 278,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 271,
                                      "end": 278,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 271,
                                        "end": 275,
                                        "decorators": [],
                                        "name": "List",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 275,
                                        "end": 278,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 276,
                                            "end": 277,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 276,
                                              "end": 277,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null
                                          }
                                        ]
                                      }
                                    }
                                  }
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "start": 281,
                                  "end": 304,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 285,
                                    "end": 289,
                                    "decorators": [],
                                    "name": "List",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 289,
                                    "end": 292,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 290,
                                        "end": 291,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 290,
                                          "end": 291,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 293,
                                      "end": 297,
                                      "value": true,
                                      "raw": "true"
                                    },
                                    {
                                      "type": "Literal",
                                      "start": 299,
                                      "end": 303,
                                      "value": null,
                                      "raw": "null"
                                    }
                                  ]
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 318,
                            "end": 337,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 318,
                              "end": 336,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 318,
                                "end": 328,
                                "object": {
                                  "type": "Identifier",
                                  "start": 318,
                                  "end": 323,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 324,
                                  "end": 328,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 331,
                                "end": 336,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 350,
                            "end": 369,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 350,
                              "end": 368,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 350,
                                "end": 360,
                                "object": {
                                  "type": "Identifier",
                                  "start": 350,
                                  "end": 355,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 356,
                                  "end": 360,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 363,
                                "end": 368,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "directive": null
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 382,
                            "end": 395,
                            "argument": {
                              "type": "Identifier",
                              "start": 389,
                              "end": 394,
                              "decorators": [],
                              "name": "entry",
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
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 423,
                    "end": 640,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 437,
                      "end": 446,
                      "decorators": [],
                      "name": "MakeHead2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 446,
                      "end": 640,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 446,
                        "end": 449,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 447,
                            "end": 448,
                            "name": {
                              "type": "Identifier",
                              "start": 447,
                              "end": 448,
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
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 451,
                        "end": 460,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 453,
                          "end": 460,
                          "typeName": {
                            "type": "Identifier",
                            "start": 453,
                            "end": 457,
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 457,
                            "end": 460,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 458,
                                "end": 459,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 458,
                                  "end": 459,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 461,
                        "end": 640,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 495,
                            "end": 540,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 499,
                                "end": 539,
                                "id": {
                                  "type": "Identifier",
                                  "start": 499,
                                  "end": 513,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 504,
                                    "end": 513,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 506,
                                      "end": 513,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 506,
                                        "end": 510,
                                        "decorators": [],
                                        "name": "List",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 510,
                                        "end": 513,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 511,
                                            "end": 512,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 511,
                                              "end": 512,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null
                                          }
                                        ]
                                      }
                                    }
                                  }
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "start": 516,
                                  "end": 539,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 520,
                                    "end": 524,
                                    "decorators": [],
                                    "name": "List",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 524,
                                    "end": 527,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 525,
                                        "end": 526,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 525,
                                          "end": 526,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 528,
                                      "end": 532,
                                      "value": true,
                                      "raw": "true"
                                    },
                                    {
                                      "type": "Literal",
                                      "start": 534,
                                      "end": 538,
                                      "value": null,
                                      "raw": "null"
                                    }
                                  ]
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 553,
                            "end": 572,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 553,
                              "end": 571,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 553,
                                "end": 563,
                                "object": {
                                  "type": "Identifier",
                                  "start": 553,
                                  "end": 558,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 559,
                                  "end": 563,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 566,
                                "end": 571,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 585,
                            "end": 604,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 585,
                              "end": 603,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 585,
                                "end": 595,
                                "object": {
                                  "type": "Identifier",
                                  "start": 585,
                                  "end": 590,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 591,
                                  "end": 595,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 598,
                                "end": 603,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "directive": null
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 617,
                            "end": 630,
                            "argument": {
                              "type": "Identifier",
                              "start": 624,
                              "end": 629,
                              "decorators": [],
                              "name": "entry",
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
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 652,
                    "end": 869,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 666,
                      "end": 675,
                      "decorators": [],
                      "name": "MakeHead3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 675,
                      "end": 869,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 675,
                        "end": 678,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 676,
                            "end": 677,
                            "name": {
                              "type": "Identifier",
                              "start": 676,
                              "end": 677,
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
                        "start": 680,
                        "end": 689,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 682,
                          "end": 689,
                          "typeName": {
                            "type": "Identifier",
                            "start": 682,
                            "end": 686,
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 686,
                            "end": 689,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 687,
                                "end": 688,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 687,
                                  "end": 688,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 690,
                        "end": 869,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 724,
                            "end": 769,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 728,
                                "end": 768,
                                "id": {
                                  "type": "Identifier",
                                  "start": 728,
                                  "end": 742,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 733,
                                    "end": 742,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 735,
                                      "end": 742,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 735,
                                        "end": 739,
                                        "decorators": [],
                                        "name": "List",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 739,
                                        "end": 742,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 740,
                                            "end": 741,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 740,
                                              "end": 741,
                                              "decorators": [],
                                              "name": "U",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null
                                          }
                                        ]
                                      }
                                    }
                                  }
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "start": 745,
                                  "end": 768,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 749,
                                    "end": 753,
                                    "decorators": [],
                                    "name": "List",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 753,
                                    "end": 756,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 754,
                                        "end": 755,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 754,
                                          "end": 755,
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 757,
                                      "end": 761,
                                      "value": true,
                                      "raw": "true"
                                    },
                                    {
                                      "type": "Literal",
                                      "start": 763,
                                      "end": 767,
                                      "value": null,
                                      "raw": "null"
                                    }
                                  ]
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 782,
                            "end": 801,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 782,
                              "end": 800,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 782,
                                "end": 792,
                                "object": {
                                  "type": "Identifier",
                                  "start": 782,
                                  "end": 787,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 788,
                                  "end": 792,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 795,
                                "end": 800,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 814,
                            "end": 833,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 814,
                              "end": 832,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 814,
                                "end": 824,
                                "object": {
                                  "type": "Identifier",
                                  "start": 814,
                                  "end": 819,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 820,
                                  "end": 824,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 827,
                                "end": 832,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "directive": null
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 846,
                            "end": 859,
                            "argument": {
                              "type": "Identifier",
                              "start": 853,
                              "end": 858,
                              "decorators": [],
                              "name": "entry",
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
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
