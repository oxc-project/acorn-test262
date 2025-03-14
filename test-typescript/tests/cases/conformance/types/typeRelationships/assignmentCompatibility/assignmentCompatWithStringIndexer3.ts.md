__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 62,
  "end": 514,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 62,
      "end": 93,
      "body": {
        "type": "TSInterfaceBody",
        "start": 77,
        "end": 93,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 79,
            "end": 91,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 82,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 76,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 94,
      "end": 141,
      "body": {
        "type": "TSInterfaceBody",
        "start": 125,
        "end": 141,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 127,
            "end": 139,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 130,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 138,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 120,
          "end": 124,
          "expression": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "decorators": [],
            "name": "Base",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 111,
        "decorators": [],
        "name": "Derived",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 142,
      "end": 193,
      "body": {
        "type": "TSInterfaceBody",
        "start": 177,
        "end": 193,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 179,
            "end": 191,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 169,
          "end": 176,
          "expression": {
            "type": "Identifier",
            "start": 169,
            "end": 176,
            "decorators": [],
            "name": "Derived",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 160,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 195,
      "end": 204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 203,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 203,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 203,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 202,
                "end": 203,
                "typeName": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 203,
                  "decorators": [],
                  "name": "A",
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
      "start": 205,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 237,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 237,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 211,
              "end": 237,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 213,
                "end": 237,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 215,
                    "end": 235,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 216,
                        "end": 225,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 217,
                          "end": 225,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 219,
                            "end": 225
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 226,
                      "end": 234,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 228,
                        "end": 234
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
      "type": "ExpressionStatement",
      "start": 238,
      "end": 245,
      "expression": {
        "type": "AssignmentExpression",
        "start": 238,
        "end": 244,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 238,
          "end": 239,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 242,
          "end": 244,
          "decorators": [],
          "name": "b1",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 255,
      "end": 262,
      "expression": {
        "type": "AssignmentExpression",
        "start": 255,
        "end": 261,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 255,
          "end": 257,
          "decorators": [],
          "name": "b1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 260,
          "end": 261,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 273,
      "end": 514,
      "body": {
        "type": "TSModuleBlock",
        "start": 289,
        "end": 514,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 295,
            "end": 353,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 322,
              "end": 353,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 332,
                  "end": 347,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 333,
                      "end": 342,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 334,
                        "end": 342,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 336,
                          "end": 342
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 343,
                    "end": 346,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 345,
                      "end": 346,
                      "typeName": {
                        "type": "Identifier",
                        "start": 345,
                        "end": 346,
                        "decorators": [],
                        "name": "T",
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
              "start": 301,
              "end": 302,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 302,
              "end": 321,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 303,
                  "end": 320,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 313,
                    "end": 320,
                    "typeName": {
                      "type": "Identifier",
                      "start": 313,
                      "end": 320,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 304,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 362,
            "end": 512,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 396,
              "end": 512,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 406,
                  "end": 418,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 410,
                      "end": 417,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 410,
                        "end": 417,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 411,
                          "end": 417,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 413,
                            "end": 417,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 414,
                              "end": 417,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 415,
                                  "end": 416,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 415,
                                    "end": 416,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 413,
                              "end": 414,
                              "decorators": [],
                              "name": "A",
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
                  "start": 427,
                  "end": 458,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 431,
                      "end": 458,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 431,
                        "end": 458,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 432,
                          "end": 458,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 434,
                            "end": 458,
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "start": 436,
                                "end": 456,
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "start": 437,
                                    "end": 446,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 438,
                                      "end": 446,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 440,
                                        "end": 446
                                      }
                                    }
                                  }
                                ],
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 447,
                                  "end": 455,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 449,
                                    "end": 455
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
                  "type": "ExpressionStatement",
                  "start": 467,
                  "end": 473,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 467,
                    "end": 472,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 468,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 471,
                      "end": 472,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 491,
                  "end": 497,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 491,
                    "end": 496,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 491,
                      "end": 492,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 495,
                      "end": 496,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 371,
              "end": 374,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 374,
              "end": 393,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 375,
                  "end": 392,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 385,
                    "end": 392,
                    "typeName": {
                      "type": "Identifier",
                      "start": 385,
                      "end": 392,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 375,
                    "end": 376,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 280,
        "end": 288,
        "decorators": [],
        "name": "Generics",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
