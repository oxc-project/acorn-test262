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
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 76,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 82,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
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
      "type": "TSInterfaceDeclaration",
      "start": 94,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 111,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 120,
          "end": 124,
          "expression": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 130,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 138,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
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
      "type": "TSInterfaceDeclaration",
      "start": 142,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 160,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 169,
          "end": 176,
          "expression": {
            "type": "Identifier",
            "start": 169,
            "end": 176,
            "name": "Derived",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
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
      "start": 195,
      "end": 204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 203,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 203,
            "name": "a",
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
                  "name": "A",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 237,
            "name": "b1",
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
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 217,
                          "end": 225,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 219,
                            "end": 225
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 226,
                      "end": 234,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 228,
                        "end": 234
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 242,
          "end": 244,
          "name": "b1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "b1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 260,
          "end": 261,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 273,
      "end": 514,
      "id": {
        "type": "Identifier",
        "start": 280,
        "end": 288,
        "name": "Generics",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 289,
        "end": 514,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 295,
            "end": 353,
            "id": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
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
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 334,
                        "end": 342,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 336,
                          "end": 342
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 302,
              "end": 321,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 303,
                  "end": 320,
                  "name": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 304,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 313,
                    "end": 320,
                    "typeName": {
                      "type": "Identifier",
                      "start": 313,
                      "end": 320,
                      "name": "Derived",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 362,
            "end": 512,
            "id": {
              "type": "Identifier",
              "start": 371,
              "end": 374,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                      "id": {
                        "type": "Identifier",
                        "start": 410,
                        "end": 417,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 411,
                          "end": 417,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 413,
                            "end": 417,
                            "typeName": {
                              "type": "Identifier",
                              "start": 413,
                              "end": 414,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
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
                  "start": 427,
                  "end": 458,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 431,
                      "end": 458,
                      "id": {
                        "type": "Identifier",
                        "start": 431,
                        "end": 458,
                        "name": "b",
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
                                    "name": "x",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 438,
                                      "end": 446,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 440,
                                        "end": 446
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 447,
                                  "end": 455,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 449,
                                    "end": 455
                                  }
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null
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
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 471,
                      "end": 472,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
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
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 495,
                      "end": 496,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 374,
              "end": 393,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 375,
                  "end": 392,
                  "name": {
                    "type": "Identifier",
                    "start": 375,
                    "end": 376,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 385,
                    "end": 392,
                    "typeName": {
                      "type": "Identifier",
                      "start": 385,
                      "end": 392,
                      "name": "Derived",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "returnType": null
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
