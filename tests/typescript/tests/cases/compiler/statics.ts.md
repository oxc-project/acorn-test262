__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 29
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 40,
                      "end": 41
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 43,
                        "end": 49
                      },
                      "start": 41,
                      "end": 49
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 40,
                    "end": 50
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 59,
                      "end": 70
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 82,
                                "end": 88
                              },
                              "start": 80,
                              "end": 88
                            },
                            "start": 78,
                            "end": 88
                          },
                          "readonly": false,
                          "static": false,
                          "start": 71,
                          "end": 88
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 101,
                                "end": 107
                              },
                              "start": 99,
                              "end": 107
                            },
                            "start": 97,
                            "end": 107
                          },
                          "readonly": false,
                          "static": false,
                          "start": 90,
                          "end": 107
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 113,
                              "end": 119
                            },
                            "start": 111,
                            "end": 119
                          },
                          "start": 109,
                          "end": 119
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 135,
                                  "end": 139
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 140,
                                  "end": 141
                                },
                                "optional": false,
                                "computed": false,
                                "start": 135,
                                "end": 141
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "C",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 144,
                                        "end": 145
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 146,
                                        "end": 147
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 144,
                                      "end": 147
                                    },
                                    "operator": "+",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 148,
                                        "end": 152
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "c1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 153,
                                        "end": 155
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 148,
                                      "end": 155
                                    },
                                    "start": 144,
                                    "end": 155
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 156,
                                      "end": 160
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "c2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 161,
                                      "end": 163
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 156,
                                    "end": 163
                                  },
                                  "start": 144,
                                  "end": 163
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 164,
                                  "end": 166
                                },
                                "start": 144,
                                "end": 166
                              },
                              "start": 135,
                              "end": 166
                            },
                            "directive": null,
                            "start": 135,
                            "end": 167
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 180,
                                  "end": 184
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "g",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 185,
                                  "end": 186
                                },
                                "optional": false,
                                "computed": false,
                                "start": 180,
                                "end": 186
                              },
                              "right": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "v",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 192,
                                        "end": 198
                                      },
                                      "start": 191,
                                      "end": 198
                                    },
                                    "start": 190,
                                    "end": 198
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 203,
                                      "end": 204
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "f",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 205,
                                      "end": 206
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 203,
                                    "end": 206
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "ThisExpression",
                                                  "start": 207,
                                                  "end": 211
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "x",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 212,
                                                  "end": 213
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 207,
                                                "end": 213
                                              },
                                              "operator": "+",
                                              "right": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "C",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 214,
                                                  "end": 215
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "y",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 216,
                                                  "end": 217
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 214,
                                                "end": 217
                                              },
                                              "start": 207,
                                              "end": 217
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "v",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 218,
                                              "end": 219
                                            },
                                            "start": 207,
                                            "end": 219
                                          },
                                          "operator": "+",
                                          "right": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "ThisExpression",
                                              "start": 220,
                                              "end": 224
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "c1",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 225,
                                              "end": 227
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 220,
                                            "end": 227
                                          },
                                          "start": 207,
                                          "end": 227
                                        },
                                        "operator": "+",
                                        "right": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 228,
                                            "end": 232
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "c2",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 233,
                                            "end": 235
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 228,
                                          "end": 235
                                        },
                                        "start": 207,
                                        "end": 235
                                      },
                                      "operator": "+",
                                      "right": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 236,
                                          "end": 237
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "pub",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 238,
                                          "end": 241
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 236,
                                        "end": 241
                                      },
                                      "start": 207,
                                      "end": 241
                                    }
                                  ],
                                  "optional": false,
                                  "start": 203,
                                  "end": 242
                                },
                                "id": null,
                                "generator": false,
                                "start": 189,
                                "end": 242
                              },
                              "start": 180,
                              "end": 242
                            },
                            "directive": null,
                            "start": 180,
                            "end": 243
                          }
                        ],
                        "start": 121,
                        "end": 253
                      },
                      "expression": false,
                      "start": 70,
                      "end": 253
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 59,
                    "end": 253
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "priv",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 274
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 275,
                      "end": 276
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 263,
                    "end": 277
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pub",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 293,
                      "end": 296
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 297,
                      "end": 298
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 286,
                    "end": 299
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 316
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 317,
                        "end": 318
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "priv",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 319,
                        "end": 323
                      },
                      "optional": false,
                      "computed": false,
                      "start": 317,
                      "end": 323
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 308,
                    "end": 324
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 340,
                      "end": 341
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 344,
                              "end": 350
                            },
                            "start": 343,
                            "end": 350
                          },
                          "start": 342,
                          "end": 350
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Literal",
                                "value": "wow: ",
                                "raw": "\"wow: \"",
                                "start": 373,
                                "end": 380
                              },
                              "operator": "+",
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "n",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 382,
                                      "end": 383
                                    },
                                    "operator": "+",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "C",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 384,
                                        "end": 385
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 386,
                                        "end": 387
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 384,
                                      "end": 387
                                    },
                                    "start": 382,
                                    "end": 387
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 388,
                                      "end": 389
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "pub",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 390,
                                      "end": 393
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 388,
                                    "end": 393
                                  },
                                  "start": 382,
                                  "end": 393
                                },
                                "operator": "+",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "C",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 394,
                                    "end": 395
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "priv",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 396,
                                    "end": 400
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 394,
                                  "end": 400
                                },
                                "start": 382,
                                "end": 400
                              },
                              "start": 373,
                              "end": 401
                            },
                            "start": 366,
                            "end": 402
                          }
                        ],
                        "start": 352,
                        "end": 413
                      },
                      "expression": false,
                      "start": 341,
                      "end": 413
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 333,
                    "end": 413
                  }
                ],
                "start": 30,
                "end": 427
              },
              "abstract": false,
              "declare": false,
              "start": 22,
              "end": 427
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 427
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 436,
                  "end": 437
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 439
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 440,
                    "end": 441
                  },
                  "optional": false,
                  "computed": false,
                  "start": 438,
                  "end": 441
                },
                "definite": false,
                "start": 436,
                "end": 441
              }
            ],
            "declare": false,
            "start": 432,
            "end": 442
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 464
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 481,
                          "end": 487
                        },
                        "init": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 488,
                          "end": 490
                        },
                        "definite": false,
                        "start": 481,
                        "end": 490
                      }
                    ],
                    "declare": false,
                    "start": 477,
                    "end": 491
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 500,
                        "end": 506
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 509,
                        "end": 510
                      },
                      "start": 500,
                      "end": 511
                    },
                    "directive": null,
                    "start": 500,
                    "end": 512
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 521,
                        "end": 527
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 534,
                            "end": 535
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 536,
                              "end": 537
                            },
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 538,
                              "end": 539
                            },
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 540,
                              "end": 541
                            }
                          ],
                          "start": 530,
                          "end": 542
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 543,
                          "end": 544
                        },
                        "optional": false,
                        "computed": false,
                        "start": 530,
                        "end": 544
                      },
                      "start": 521,
                      "end": 545
                    },
                    "directive": null,
                    "start": 521,
                    "end": 546
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 555,
                        "end": 561
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 564,
                            "end": 565
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 566,
                            "end": 567
                          },
                          "optional": false,
                          "computed": false,
                          "start": 564,
                          "end": 567
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 568,
                            "end": 570
                          }
                        ],
                        "optional": false,
                        "start": 564,
                        "end": 571
                      },
                      "start": 555,
                      "end": 572
                    },
                    "directive": null,
                    "start": 555,
                    "end": 573
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 582,
                        "end": 588
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 595,
                              "end": 596
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 5,
                                "raw": "5",
                                "start": 597,
                                "end": 598
                              },
                              {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 599,
                                "end": 601
                              },
                              {
                                "type": "Literal",
                                "value": 20,
                                "raw": "20",
                                "start": 602,
                                "end": 604
                              }
                            ],
                            "start": 591,
                            "end": 605
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "g",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 606,
                            "end": 607
                          },
                          "optional": false,
                          "computed": false,
                          "start": 591,
                          "end": 607
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 608,
                              "end": 609
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 610,
                              "end": 611
                            },
                            "optional": false,
                            "computed": false,
                            "start": 608,
                            "end": 611
                          }
                        ],
                        "optional": false,
                        "start": 591,
                        "end": 612
                      },
                      "start": 582,
                      "end": 613
                    },
                    "directive": null,
                    "start": 582,
                    "end": 614
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 630,
                      "end": 636
                    },
                    "start": 623,
                    "end": 637
                  }
                ],
                "start": 467,
                "end": 643
              },
              "expression": false,
              "start": 454,
              "end": 643
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 447,
            "end": 643
          }
        ],
        "start": 9,
        "end": 645
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 645
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 647,
            "end": 648
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 649,
            "end": 650
          },
          "optional": false,
          "computed": false,
          "start": 647,
          "end": 650
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 647,
        "end": 652
      },
      "directive": null,
      "start": 647,
      "end": 653
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 655
}
```
