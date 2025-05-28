__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 647,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "let",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 12,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 15,
      "end": 646,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 27,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 30,
        "end": 646,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 36,
            "end": 48,
            "expression": {
              "type": "Literal",
              "start": 36,
              "end": 48,
              "value": "use strict",
              "raw": "\"use strict\""
            },
            "directive": "use strict"
          },
          {
            "type": "VariableDeclaration",
            "start": 53,
            "end": 69,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 57,
                "end": 68,
                "id": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 63,
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 66,
                  "end": 68,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 74,
            "end": 92,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 78,
                "end": 91,
                "id": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 84,
                  "decorators": [],
                  "name": "static",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 87,
                  "end": 91,
                  "value": "hi",
                  "raw": "\"hi\""
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 97,
            "end": 114,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 101,
                "end": 113,
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 104,
                  "decorators": [],
                  "name": "let",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 107,
                  "end": 113,
                  "value": "blah",
                  "raw": "\"blah\""
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 119,
            "end": 140,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 123,
                "end": 140,
                "id": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 130,
                  "decorators": [],
                  "name": "package",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 133,
                  "end": 140,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 145,
            "end": 167,
            "id": {
              "type": "Identifier",
              "start": 154,
              "end": 161,
              "decorators": [],
              "name": "package",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 164,
              "end": 167,
              "body": []
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 172,
            "end": 214,
            "id": {
              "type": "Identifier",
              "start": 181,
              "end": 184,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 185,
                "end": 192,
                "decorators": [],
                "name": "private",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 194,
                "end": 204,
                "decorators": [],
                "name": "implements",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 206,
                "end": 209,
                "decorators": [],
                "name": "let",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 211,
              "end": 214,
              "body": []
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 219,
            "end": 260,
            "id": {
              "type": "Identifier",
              "start": 228,
              "end": 231,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 231,
              "end": 254,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 232,
                  "end": 242,
                  "name": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 242,
                    "decorators": [],
                    "name": "implements",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 244,
                  "end": 253,
                  "name": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 253,
                    "decorators": [],
                    "name": "protected",
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
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 257,
              "end": 260,
              "body": []
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 265,
            "end": 322,
            "id": {
              "type": "Identifier",
              "start": 274,
              "end": 278,
              "decorators": [],
              "name": "barn",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 279,
                "end": 317,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 281,
                  "end": 317,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 283,
                    "end": 317,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 284,
                        "end": 291,
                        "decorators": [],
                        "name": "private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 293,
                        "end": 299,
                        "decorators": [],
                        "name": "public",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 301,
                        "end": 308,
                        "decorators": [],
                        "name": "package",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 310,
                      "end": 317,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 313,
                        "end": 317
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 319,
              "end": 322,
              "body": []
            },
            "expression": false
          },
          {
            "type": "ExpressionStatement",
            "start": 327,
            "end": 367,
            "expression": {
              "type": "CallExpression",
              "start": 327,
              "end": 366,
              "callee": {
                "type": "Identifier",
                "start": 327,
                "end": 331,
                "decorators": [],
                "name": "barn",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 332,
                  "end": 365,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 333,
                      "end": 340,
                      "decorators": [],
                      "name": "private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 342,
                      "end": 348,
                      "decorators": [],
                      "name": "public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 350,
                      "end": 357,
                      "decorators": [],
                      "name": "package",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 362,
                    "end": 365,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 373,
            "end": 418,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 377,
                "end": 418,
                "id": {
                  "type": "Identifier",
                  "start": 377,
                  "end": 384,
                  "decorators": [],
                  "name": "myClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ClassExpression",
                  "start": 387,
                  "end": 418,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 400,
                    "decorators": [],
                    "name": "package",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "superClass": {
                    "type": "Identifier",
                    "start": 409,
                    "end": 415,
                    "decorators": [],
                    "name": "public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 416,
                    "end": 418,
                    "body": []
                  },
                  "abstract": false,
                  "declare": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 424,
            "end": 442,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 428,
                "end": 441,
                "id": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 441,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 429,
                    "end": 441,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 431,
                      "end": 441,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 431,
                        "end": 441,
                        "left": {
                          "type": "Identifier",
                          "start": 431,
                          "end": 437,
                          "decorators": [],
                          "name": "public",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 438,
                          "end": 441,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
            "type": "FunctionDeclaration",
            "start": 448,
            "end": 478,
            "id": {
              "type": "Identifier",
              "start": 457,
              "end": 460,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 461,
                "end": 473,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 462,
                  "end": 473,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 464,
                    "end": 473,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 464,
                      "end": 473,
                      "left": {
                        "type": "Identifier",
                        "start": 464,
                        "end": 471,
                        "decorators": [],
                        "name": "private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 472,
                        "end": 473,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 475,
              "end": 478,
              "body": []
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 483,
            "end": 522,
            "id": {
              "type": "Identifier",
              "start": 492,
              "end": 496,
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 497,
                "end": 517,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 498,
                  "end": 517,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 500,
                    "end": 517,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 500,
                      "end": 517,
                      "left": {
                        "type": "TSQualifiedName",
                        "start": 500,
                        "end": 515,
                        "left": {
                          "type": "Identifier",
                          "start": 500,
                          "end": 507,
                          "decorators": [],
                          "name": "private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 508,
                          "end": 515,
                          "decorators": [],
                          "name": "package",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 516,
                        "end": 517,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 519,
              "end": 522,
              "body": []
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 527,
            "end": 574,
            "id": {
              "type": "Identifier",
              "start": 536,
              "end": 540,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 541,
                "end": 569,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 542,
                  "end": 569,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 544,
                    "end": 569,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 544,
                      "end": 569,
                      "left": {
                        "type": "TSQualifiedName",
                        "start": 544,
                        "end": 559,
                        "left": {
                          "type": "Identifier",
                          "start": 544,
                          "end": 551,
                          "decorators": [],
                          "name": "private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 552,
                          "end": 559,
                          "decorators": [],
                          "name": "package",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 560,
                        "end": 569,
                        "decorators": [],
                        "name": "protected",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 571,
              "end": 574,
              "body": []
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 579,
            "end": 617,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 583,
                "end": 616,
                "id": {
                  "type": "Identifier",
                  "start": 583,
                  "end": 616,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 584,
                    "end": 616,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 586,
                      "end": 616,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 586,
                        "end": 616,
                        "left": {
                          "type": "TSQualifiedName",
                          "start": 586,
                          "end": 614,
                          "left": {
                            "type": "TSQualifiedName",
                            "start": 586,
                            "end": 603,
                            "left": {
                              "type": "Identifier",
                              "start": 586,
                              "end": 595,
                              "decorators": [],
                              "name": "interface",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 596,
                              "end": 603,
                              "decorators": [],
                              "name": "package",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 604,
                            "end": 614,
                            "decorators": [],
                            "name": "implements",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 615,
                          "end": 616,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
            "type": "ExpressionStatement",
            "start": 622,
            "end": 630,
            "expression": {
              "type": "CallExpression",
              "start": 622,
              "end": 629,
              "callee": {
                "type": "Identifier",
                "start": 622,
                "end": 627,
                "decorators": [],
                "name": "ublic",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 635,
            "end": 644,
            "expression": {
              "type": "CallExpression",
              "start": 635,
              "end": 643,
              "callee": {
                "type": "Identifier",
                "start": 635,
                "end": 641,
                "decorators": [],
                "name": "static",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
