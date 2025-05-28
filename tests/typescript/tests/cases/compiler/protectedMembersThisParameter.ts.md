__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1837,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 47,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "Message",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 47,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 45,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 34,
              "decorators": [],
              "name": "secret",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 34,
              "end": 45,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 36,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 38,
                  "end": 42
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 43,
                "end": 45,
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 48,
      "end": 224,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 68,
        "decorators": [],
        "name": "MessageWrapper",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 224,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 106,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 80,
              "decorators": [],
              "name": "message",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 89,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 82,
                "end": 89,
                "typeName": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 89,
                  "decorators": [],
                  "name": "Message",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": {
              "type": "NewExpression",
              "start": 92,
              "end": 105,
              "callee": {
                "type": "Identifier",
                "start": 96,
                "end": 103,
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
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
            "start": 109,
            "end": 222,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 113,
              "decorators": [],
              "name": "wrap",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 113,
              "end": 222,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 113,
                "end": 116,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 114,
                    "end": 115,
                    "name": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 115,
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
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 119,
                "end": 222,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 125,
                    "end": 146,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 129,
                        "end": 145,
                        "id": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 130,
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 133,
                          "end": 145,
                          "object": {
                            "type": "ThisExpression",
                            "start": 133,
                            "end": 137
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 138,
                            "end": 145,
                            "decorators": [],
                            "name": "message",
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
                    "start": 151,
                    "end": 218,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 155,
                        "end": 218,
                        "id": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 156,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "FunctionExpression",
                          "start": 159,
                          "end": 218,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 168,
                              "end": 175,
                              "decorators": [],
                              "name": "this",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 172,
                                "end": 175,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 174,
                                  "end": 175,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 174,
                                    "end": 175,
                                    "decorators": [],
                                    "name": "T",
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
                            "start": 177,
                            "end": 218,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 185,
                                "end": 196,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 185,
                                  "end": 195,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 185,
                                    "end": 193,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 185,
                                      "end": 186,
                                      "decorators": [],
                                      "name": "m",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 187,
                                      "end": 193,
                                      "decorators": [],
                                      "name": "secret",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
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
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
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
      "start": 226,
      "end": 256,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 233,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 234,
        "end": 256,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 238,
            "end": 254,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 248,
              "end": 249,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 249,
              "end": 254,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 252,
                "end": 254,
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 257,
      "end": 297,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 264,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 273,
        "end": 274,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 275,
        "end": 297,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 279,
            "end": 295,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 289,
              "end": 290,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 290,
              "end": 295,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 293,
                "end": 295,
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 298,
      "end": 338,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 304,
        "end": 305,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 314,
        "end": 315,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 316,
        "end": 338,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 320,
            "end": 336,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 331,
              "end": 336,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 334,
                "end": 336,
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 339,
      "end": 369,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 345,
        "end": 346,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 347,
        "end": 369,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 351,
            "end": 367,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 361,
              "end": 362,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 362,
              "end": 367,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 365,
                "end": 367,
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 371,
      "end": 601,
      "id": {
        "type": "Identifier",
        "start": 380,
        "end": 382,
        "decorators": [],
        "name": "bA",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 382,
        "end": 395,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 383,
            "end": 394,
            "name": {
              "type": "Identifier",
              "start": 383,
              "end": 384,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 393,
              "end": 394,
              "typeName": {
                "type": "Identifier",
                "start": 393,
                "end": 394,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 396,
          "end": 403,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 400,
            "end": 403,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 402,
              "end": 403,
              "typeName": {
                "type": "Identifier",
                "start": 402,
                "end": 403,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 405,
          "end": 411,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 408,
            "end": 411,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 410,
              "end": 411,
              "typeName": {
                "type": "Identifier",
                "start": 410,
                "end": 411,
                "decorators": [],
                "name": "B",
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
        "start": 413,
        "end": 601,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 417,
            "end": 426,
            "expression": {
              "type": "CallExpression",
              "start": 417,
              "end": 425,
              "callee": {
                "type": "MemberExpression",
                "start": 417,
                "end": 423,
                "object": {
                  "type": "ThisExpression",
                  "start": 417,
                  "end": 421
                },
                "property": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 423,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 429,
            "end": 437,
            "expression": {
              "type": "CallExpression",
              "start": 429,
              "end": 436,
              "callee": {
                "type": "MemberExpression",
                "start": 429,
                "end": 434,
                "object": {
                  "type": "Identifier",
                  "start": 429,
                  "end": 432,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 434,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 440,
            "end": 448,
            "expression": {
              "type": "CallExpression",
              "start": 440,
              "end": 447,
              "callee": {
                "type": "MemberExpression",
                "start": 440,
                "end": 445,
                "object": {
                  "type": "Identifier",
                  "start": 440,
                  "end": 443,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 444,
                  "end": 445,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 602,
      "end": 693,
      "id": {
        "type": "Identifier",
        "start": 611,
        "end": 613,
        "decorators": [],
        "name": "bB",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 613,
        "end": 626,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 614,
            "end": 625,
            "name": {
              "type": "Identifier",
              "start": 614,
              "end": 615,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 624,
              "end": 625,
              "typeName": {
                "type": "Identifier",
                "start": 624,
                "end": 625,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 627,
          "end": 634,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 631,
            "end": 634,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 633,
              "end": 634,
              "typeName": {
                "type": "Identifier",
                "start": 633,
                "end": 634,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 636,
          "end": 642,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 639,
            "end": 642,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 641,
              "end": 642,
              "typeName": {
                "type": "Identifier",
                "start": 641,
                "end": 642,
                "decorators": [],
                "name": "B",
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
        "start": 644,
        "end": 693,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 648,
            "end": 657,
            "expression": {
              "type": "CallExpression",
              "start": 648,
              "end": 656,
              "callee": {
                "type": "MemberExpression",
                "start": 648,
                "end": 654,
                "object": {
                  "type": "ThisExpression",
                  "start": 648,
                  "end": 652
                },
                "property": {
                  "type": "Identifier",
                  "start": 653,
                  "end": 654,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 660,
            "end": 669,
            "expression": {
              "type": "CallExpression",
              "start": 660,
              "end": 668,
              "callee": {
                "type": "MemberExpression",
                "start": 660,
                "end": 666,
                "object": {
                  "type": "ThisExpression",
                  "start": 660,
                  "end": 664
                },
                "property": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 666,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 672,
            "end": 680,
            "expression": {
              "type": "CallExpression",
              "start": 672,
              "end": 679,
              "callee": {
                "type": "MemberExpression",
                "start": 672,
                "end": 677,
                "object": {
                  "type": "Identifier",
                  "start": 672,
                  "end": 675,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 676,
                  "end": 677,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 683,
            "end": 691,
            "expression": {
              "type": "CallExpression",
              "start": 683,
              "end": 690,
              "callee": {
                "type": "MemberExpression",
                "start": 683,
                "end": 688,
                "object": {
                  "type": "Identifier",
                  "start": 683,
                  "end": 686,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 687,
                  "end": 688,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 694,
      "end": 817,
      "id": {
        "type": "Identifier",
        "start": 703,
        "end": 705,
        "decorators": [],
        "name": "bC",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 705,
        "end": 718,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 706,
            "end": 717,
            "name": {
              "type": "Identifier",
              "start": 706,
              "end": 707,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 716,
              "end": 717,
              "typeName": {
                "type": "Identifier",
                "start": 716,
                "end": 717,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 719,
          "end": 726,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 723,
            "end": 726,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 725,
              "end": 726,
              "typeName": {
                "type": "Identifier",
                "start": 725,
                "end": 726,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 728,
          "end": 734,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 731,
            "end": 734,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 733,
              "end": 734,
              "typeName": {
                "type": "Identifier",
                "start": 733,
                "end": 734,
                "decorators": [],
                "name": "B",
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
        "start": 736,
        "end": 817,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 740,
            "end": 749,
            "expression": {
              "type": "CallExpression",
              "start": 740,
              "end": 748,
              "callee": {
                "type": "MemberExpression",
                "start": 740,
                "end": 746,
                "object": {
                  "type": "ThisExpression",
                  "start": 740,
                  "end": 744
                },
                "property": {
                  "type": "Identifier",
                  "start": 745,
                  "end": 746,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 752,
            "end": 761,
            "expression": {
              "type": "CallExpression",
              "start": 752,
              "end": 760,
              "callee": {
                "type": "MemberExpression",
                "start": 752,
                "end": 758,
                "object": {
                  "type": "ThisExpression",
                  "start": 752,
                  "end": 756
                },
                "property": {
                  "type": "Identifier",
                  "start": 757,
                  "end": 758,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 764,
            "end": 772,
            "expression": {
              "type": "CallExpression",
              "start": 764,
              "end": 771,
              "callee": {
                "type": "MemberExpression",
                "start": 764,
                "end": 769,
                "object": {
                  "type": "Identifier",
                  "start": 764,
                  "end": 767,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 768,
                  "end": 769,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 791,
            "end": 799,
            "expression": {
              "type": "CallExpression",
              "start": 791,
              "end": 798,
              "callee": {
                "type": "MemberExpression",
                "start": 791,
                "end": 796,
                "object": {
                  "type": "Identifier",
                  "start": 791,
                  "end": 794,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 795,
                  "end": 796,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 818,
      "end": 929,
      "id": {
        "type": "Identifier",
        "start": 827,
        "end": 829,
        "decorators": [],
        "name": "bZ",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 829,
        "end": 842,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 830,
            "end": 841,
            "name": {
              "type": "Identifier",
              "start": 830,
              "end": 831,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 840,
              "end": 841,
              "typeName": {
                "type": "Identifier",
                "start": 840,
                "end": 841,
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 843,
          "end": 850,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 847,
            "end": 850,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 849,
              "end": 850,
              "typeName": {
                "type": "Identifier",
                "start": 849,
                "end": 850,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 852,
          "end": 858,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 855,
            "end": 858,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 857,
              "end": 858,
              "typeName": {
                "type": "Identifier",
                "start": 857,
                "end": 858,
                "decorators": [],
                "name": "B",
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
        "start": 860,
        "end": 929,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 864,
            "end": 873,
            "expression": {
              "type": "CallExpression",
              "start": 864,
              "end": 872,
              "callee": {
                "type": "MemberExpression",
                "start": 864,
                "end": 870,
                "object": {
                  "type": "ThisExpression",
                  "start": 864,
                  "end": 868
                },
                "property": {
                  "type": "Identifier",
                  "start": 869,
                  "end": 870,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 876,
            "end": 884,
            "expression": {
              "type": "CallExpression",
              "start": 876,
              "end": 883,
              "callee": {
                "type": "MemberExpression",
                "start": 876,
                "end": 881,
                "object": {
                  "type": "Identifier",
                  "start": 876,
                  "end": 879,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 880,
                  "end": 881,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 903,
            "end": 911,
            "expression": {
              "type": "CallExpression",
              "start": 903,
              "end": 910,
              "callee": {
                "type": "MemberExpression",
                "start": 903,
                "end": 908,
                "object": {
                  "type": "Identifier",
                  "start": 903,
                  "end": 906,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 907,
                  "end": 908,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 930,
      "end": 1061,
      "id": {
        "type": "Identifier",
        "start": 939,
        "end": 946,
        "decorators": [],
        "name": "bString",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 946,
        "end": 964,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 947,
            "end": 963,
            "name": {
              "type": "Identifier",
              "start": 947,
              "end": 948,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 957,
              "end": 963
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 965,
          "end": 972,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 969,
            "end": 972,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 971,
              "end": 972,
              "typeName": {
                "type": "Identifier",
                "start": 971,
                "end": 972,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 974,
          "end": 980,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 977,
            "end": 980,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 979,
              "end": 980,
              "typeName": {
                "type": "Identifier",
                "start": 979,
                "end": 980,
                "decorators": [],
                "name": "B",
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
        "start": 982,
        "end": 1061,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 986,
            "end": 1005,
            "expression": {
              "type": "CallExpression",
              "start": 986,
              "end": 1004,
              "callee": {
                "type": "MemberExpression",
                "start": 986,
                "end": 1002,
                "object": {
                  "type": "ThisExpression",
                  "start": 986,
                  "end": 990
                },
                "property": {
                  "type": "Identifier",
                  "start": 991,
                  "end": 1002,
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1008,
            "end": 1016,
            "expression": {
              "type": "CallExpression",
              "start": 1008,
              "end": 1015,
              "callee": {
                "type": "MemberExpression",
                "start": 1008,
                "end": 1013,
                "object": {
                  "type": "Identifier",
                  "start": 1008,
                  "end": 1011,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1012,
                  "end": 1013,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1035,
            "end": 1043,
            "expression": {
              "type": "CallExpression",
              "start": 1035,
              "end": 1042,
              "callee": {
                "type": "MemberExpression",
                "start": 1035,
                "end": 1040,
                "object": {
                  "type": "Identifier",
                  "start": 1035,
                  "end": 1038,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1039,
                  "end": 1040,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 1062,
      "end": 1153,
      "id": {
        "type": "Identifier",
        "start": 1071,
        "end": 1075,
        "decorators": [],
        "name": "bAny",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1075,
        "end": 1078,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1076,
            "end": 1077,
            "name": {
              "type": "Identifier",
              "start": 1076,
              "end": 1077,
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
      "params": [
        {
          "type": "Identifier",
          "start": 1079,
          "end": 1086,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1083,
            "end": 1086,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1085,
              "end": 1086,
              "typeName": {
                "type": "Identifier",
                "start": 1085,
                "end": 1086,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1088,
          "end": 1094,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1091,
            "end": 1094,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1093,
              "end": 1094,
              "typeName": {
                "type": "Identifier",
                "start": 1093,
                "end": 1094,
                "decorators": [],
                "name": "B",
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
        "start": 1096,
        "end": 1153,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1100,
            "end": 1108,
            "expression": {
              "type": "CallExpression",
              "start": 1100,
              "end": 1107,
              "callee": {
                "type": "MemberExpression",
                "start": 1100,
                "end": 1105,
                "object": {
                  "type": "Identifier",
                  "start": 1100,
                  "end": 1103,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1104,
                  "end": 1105,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1127,
            "end": 1135,
            "expression": {
              "type": "CallExpression",
              "start": 1127,
              "end": 1134,
              "callee": {
                "type": "MemberExpression",
                "start": 1127,
                "end": 1132,
                "object": {
                  "type": "Identifier",
                  "start": 1127,
                  "end": 1130,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1131,
                  "end": 1132,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
    },
    {
      "type": "ClassDeclaration",
      "start": 1155,
      "end": 1731,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1161,
        "end": 1162,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1163,
        "end": 1731,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1167,
            "end": 1183,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1177,
              "end": 1178,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1178,
              "end": 1183,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1181,
                "end": 1183,
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
            "start": 1187,
            "end": 1253,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1187,
              "end": 1195,
              "decorators": [],
              "name": "derived1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1195,
              "end": 1253,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1196,
                  "end": 1203,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1199,
                    "end": 1203,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1201,
                      "end": 1203,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1201,
                        "end": 1203,
                        "decorators": [],
                        "name": "D1",
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
                "start": 1205,
                "end": 1253,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1211,
                    "end": 1219,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1211,
                      "end": 1218,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1211,
                        "end": 1216,
                        "object": {
                          "type": "Identifier",
                          "start": 1211,
                          "end": 1214,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1215,
                          "end": 1216,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1224,
                    "end": 1233,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1224,
                      "end": 1232,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1224,
                        "end": 1230,
                        "object": {
                          "type": "Identifier",
                          "start": 1224,
                          "end": 1227,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1228,
                          "end": 1230,
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
            "start": 1256,
            "end": 1336,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1256,
              "end": 1269,
              "decorators": [],
              "name": "derived1ThisD",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1269,
              "end": 1336,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1270,
                  "end": 1277,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1274,
                    "end": 1277,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1276,
                      "end": 1277,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1276,
                        "end": 1277,
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1279,
                  "end": 1286,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1282,
                    "end": 1286,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1284,
                      "end": 1286,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1284,
                        "end": 1286,
                        "decorators": [],
                        "name": "D1",
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
                "start": 1288,
                "end": 1336,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1294,
                    "end": 1302,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1294,
                      "end": 1301,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1294,
                        "end": 1299,
                        "object": {
                          "type": "Identifier",
                          "start": 1294,
                          "end": 1297,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1298,
                          "end": 1299,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1307,
                    "end": 1316,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1307,
                      "end": 1315,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1307,
                        "end": 1313,
                        "object": {
                          "type": "Identifier",
                          "start": 1307,
                          "end": 1310,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1311,
                          "end": 1313,
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
            "start": 1339,
            "end": 1405,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1339,
              "end": 1353,
              "decorators": [],
              "name": "derived1ThisD1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1353,
              "end": 1405,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1354,
                  "end": 1362,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1358,
                    "end": 1362,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1360,
                      "end": 1362,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1360,
                        "end": 1362,
                        "decorators": [],
                        "name": "D1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1364,
                  "end": 1371,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1367,
                    "end": 1371,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1369,
                      "end": 1371,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1369,
                        "end": 1371,
                        "decorators": [],
                        "name": "D1",
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
                "start": 1373,
                "end": 1405,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1379,
                    "end": 1387,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1379,
                      "end": 1386,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1379,
                        "end": 1384,
                        "object": {
                          "type": "Identifier",
                          "start": 1379,
                          "end": 1382,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1383,
                          "end": 1384,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1392,
                    "end": 1401,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1392,
                      "end": 1400,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1392,
                        "end": 1398,
                        "object": {
                          "type": "Identifier",
                          "start": 1392,
                          "end": 1395,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1396,
                          "end": 1398,
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
            "start": 1409,
            "end": 1526,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1409,
              "end": 1417,
              "decorators": [],
              "name": "derived2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1417,
              "end": 1526,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1418,
                  "end": 1425,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1421,
                    "end": 1425,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1423,
                      "end": 1425,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1423,
                        "end": 1425,
                        "decorators": [],
                        "name": "D2",
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
                "start": 1427,
                "end": 1526,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1433,
                    "end": 1441,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1433,
                      "end": 1440,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1433,
                        "end": 1438,
                        "object": {
                          "type": "Identifier",
                          "start": 1433,
                          "end": 1436,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1437,
                          "end": 1438,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1497,
                    "end": 1506,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1497,
                      "end": 1505,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1497,
                        "end": 1503,
                        "object": {
                          "type": "Identifier",
                          "start": 1497,
                          "end": 1500,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1501,
                          "end": 1503,
                          "decorators": [],
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
            "start": 1529,
            "end": 1660,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1529,
              "end": 1542,
              "decorators": [],
              "name": "derived2ThisD",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1542,
              "end": 1660,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1543,
                  "end": 1550,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1547,
                    "end": 1550,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1549,
                      "end": 1550,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1549,
                        "end": 1550,
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1552,
                  "end": 1559,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1555,
                    "end": 1559,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1557,
                      "end": 1559,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1557,
                        "end": 1559,
                        "decorators": [],
                        "name": "D2",
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
                "start": 1561,
                "end": 1660,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1567,
                    "end": 1575,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1567,
                      "end": 1574,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1567,
                        "end": 1572,
                        "object": {
                          "type": "Identifier",
                          "start": 1567,
                          "end": 1570,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1571,
                          "end": 1572,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1631,
                    "end": 1640,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1631,
                      "end": 1639,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1631,
                        "end": 1637,
                        "object": {
                          "type": "Identifier",
                          "start": 1631,
                          "end": 1634,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1635,
                          "end": 1637,
                          "decorators": [],
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
            "start": 1663,
            "end": 1729,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1663,
              "end": 1677,
              "decorators": [],
              "name": "derived2ThisD2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1677,
              "end": 1729,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1678,
                  "end": 1686,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1682,
                    "end": 1686,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1684,
                      "end": 1686,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1684,
                        "end": 1686,
                        "decorators": [],
                        "name": "D2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1688,
                  "end": 1695,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1691,
                    "end": 1695,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1693,
                      "end": 1695,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1693,
                        "end": 1695,
                        "decorators": [],
                        "name": "D2",
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
                "start": 1697,
                "end": 1729,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1703,
                    "end": 1711,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1703,
                      "end": 1710,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1703,
                        "end": 1708,
                        "object": {
                          "type": "Identifier",
                          "start": 1703,
                          "end": 1706,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1707,
                          "end": 1708,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1716,
                    "end": 1725,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1716,
                      "end": 1724,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1716,
                        "end": 1722,
                        "object": {
                          "type": "Identifier",
                          "start": 1716,
                          "end": 1719,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1720,
                          "end": 1722,
                          "decorators": [],
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
            },
            "kind": "method",
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
      "start": 1732,
      "end": 1774,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1738,
        "end": 1740,
        "decorators": [],
        "name": "D1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1749,
        "end": 1750,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1751,
        "end": 1774,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1755,
            "end": 1772,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1765,
              "end": 1767,
              "decorators": [],
              "name": "d1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1767,
              "end": 1772,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1770,
                "end": 1772,
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1775,
      "end": 1836,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1781,
        "end": 1783,
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1792,
        "end": 1793,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1794,
        "end": 1836,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1798,
            "end": 1814,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1808,
              "end": 1809,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1809,
              "end": 1814,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1812,
                "end": 1814,
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
            "start": 1817,
            "end": 1834,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1827,
              "end": 1829,
              "decorators": [],
              "name": "d2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1829,
              "end": 1834,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1832,
                "end": 1834,
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
