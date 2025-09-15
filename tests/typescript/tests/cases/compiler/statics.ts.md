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
        "start": 10,
        "end": 11
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
                "start": 31,
                "end": 32
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
                      "start": 43,
                      "end": 44
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 46,
                        "end": 52
                      },
                      "start": 44,
                      "end": 52
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
                    "start": 43,
                    "end": 53
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
                      "start": 62,
                      "end": 73
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
                                "start": 85,
                                "end": 91
                              },
                              "start": 83,
                              "end": 91
                            },
                            "start": 81,
                            "end": 91
                          },
                          "readonly": false,
                          "static": false,
                          "start": 74,
                          "end": 91
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
                                "start": 104,
                                "end": 110
                              },
                              "start": 102,
                              "end": 110
                            },
                            "start": 100,
                            "end": 110
                          },
                          "readonly": false,
                          "static": false,
                          "start": 93,
                          "end": 110
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
                              "start": 116,
                              "end": 122
                            },
                            "start": 114,
                            "end": 122
                          },
                          "start": 112,
                          "end": 122
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
                                  "start": 138,
                                  "end": 142
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 143,
                                  "end": 144
                                },
                                "optional": false,
                                "computed": false,
                                "start": 138,
                                "end": 144
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
                                        "start": 147,
                                        "end": 148
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 149,
                                        "end": 150
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 147,
                                      "end": 150
                                    },
                                    "operator": "+",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 151,
                                        "end": 155
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "c1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 156,
                                        "end": 158
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 151,
                                      "end": 158
                                    },
                                    "start": 147,
                                    "end": 158
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 159,
                                      "end": 163
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "c2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 164,
                                      "end": 166
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 159,
                                    "end": 166
                                  },
                                  "start": 147,
                                  "end": 166
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 167,
                                  "end": 169
                                },
                                "start": 147,
                                "end": 169
                              },
                              "start": 138,
                              "end": 169
                            },
                            "directive": null,
                            "start": 138,
                            "end": 170
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
                                  "start": 183,
                                  "end": 187
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "g",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 188,
                                  "end": 189
                                },
                                "optional": false,
                                "computed": false,
                                "start": 183,
                                "end": 189
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
                                        "start": 195,
                                        "end": 201
                                      },
                                      "start": 194,
                                      "end": 201
                                    },
                                    "start": 193,
                                    "end": 201
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
                                      "start": 206,
                                      "end": 207
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "f",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 208,
                                      "end": 209
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 206,
                                    "end": 209
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
                                                  "start": 210,
                                                  "end": 214
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "x",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 215,
                                                  "end": 216
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 210,
                                                "end": 216
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
                                                  "start": 217,
                                                  "end": 218
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "y",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 219,
                                                  "end": 220
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 217,
                                                "end": 220
                                              },
                                              "start": 210,
                                              "end": 220
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "v",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 221,
                                              "end": 222
                                            },
                                            "start": 210,
                                            "end": 222
                                          },
                                          "operator": "+",
                                          "right": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "ThisExpression",
                                              "start": 223,
                                              "end": 227
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "c1",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 228,
                                              "end": 230
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 223,
                                            "end": 230
                                          },
                                          "start": 210,
                                          "end": 230
                                        },
                                        "operator": "+",
                                        "right": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 231,
                                            "end": 235
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "c2",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 236,
                                            "end": 238
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 231,
                                          "end": 238
                                        },
                                        "start": 210,
                                        "end": 238
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
                                          "start": 239,
                                          "end": 240
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "pub",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 241,
                                          "end": 244
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 239,
                                        "end": 244
                                      },
                                      "start": 210,
                                      "end": 244
                                    }
                                  ],
                                  "optional": false,
                                  "start": 206,
                                  "end": 245
                                },
                                "id": null,
                                "generator": false,
                                "start": 192,
                                "end": 245
                              },
                              "start": 183,
                              "end": 245
                            },
                            "directive": null,
                            "start": 183,
                            "end": 246
                          }
                        ],
                        "start": 124,
                        "end": 256
                      },
                      "expression": false,
                      "start": 73,
                      "end": 256
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 62,
                    "end": 256
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
                      "start": 273,
                      "end": 277
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 278,
                      "end": 279
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 266,
                    "end": 280
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
                      "start": 296,
                      "end": 299
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 300,
                      "end": 301
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 289,
                    "end": 302
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
                      "start": 318,
                      "end": 319
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
                        "start": 320,
                        "end": 321
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "priv",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 322,
                        "end": 326
                      },
                      "optional": false,
                      "computed": false,
                      "start": 320,
                      "end": 326
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 311,
                    "end": 327
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
                      "start": 343,
                      "end": 344
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
                              "start": 347,
                              "end": 353
                            },
                            "start": 346,
                            "end": 353
                          },
                          "start": 345,
                          "end": 353
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
                                "start": 376,
                                "end": 383
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
                                      "start": 385,
                                      "end": 386
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
                                        "start": 387,
                                        "end": 388
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 389,
                                        "end": 390
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 387,
                                      "end": 390
                                    },
                                    "start": 385,
                                    "end": 390
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
                                      "start": 391,
                                      "end": 392
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "pub",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 393,
                                      "end": 396
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 391,
                                    "end": 396
                                  },
                                  "start": 385,
                                  "end": 396
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
                                    "start": 397,
                                    "end": 398
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "priv",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 399,
                                    "end": 403
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 397,
                                  "end": 403
                                },
                                "start": 385,
                                "end": 403
                              },
                              "start": 376,
                              "end": 404
                            },
                            "start": 369,
                            "end": 405
                          }
                        ],
                        "start": 355,
                        "end": 416
                      },
                      "expression": false,
                      "start": 344,
                      "end": 416
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 336,
                    "end": 416
                  }
                ],
                "start": 33,
                "end": 430
              },
              "abstract": false,
              "declare": false,
              "start": 25,
              "end": 430
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 430
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
                  "start": 439,
                  "end": 440
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 441,
                    "end": 442
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 443,
                    "end": 444
                  },
                  "optional": false,
                  "computed": false,
                  "start": 441,
                  "end": 444
                },
                "definite": false,
                "start": 439,
                "end": 444
              }
            ],
            "declare": false,
            "start": 435,
            "end": 445
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
                "start": 466,
                "end": 467
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
                          "start": 484,
                          "end": 490
                        },
                        "init": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 491,
                          "end": 493
                        },
                        "definite": false,
                        "start": 484,
                        "end": 493
                      }
                    ],
                    "declare": false,
                    "start": 480,
                    "end": 494
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
                        "start": 503,
                        "end": 509
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 512,
                        "end": 513
                      },
                      "start": 503,
                      "end": 514
                    },
                    "directive": null,
                    "start": 503,
                    "end": 515
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
                        "start": 524,
                        "end": 530
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
                            "start": 537,
                            "end": 538
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 539,
                              "end": 540
                            },
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 541,
                              "end": 542
                            },
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 543,
                              "end": 544
                            }
                          ],
                          "start": 533,
                          "end": 545
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 546,
                          "end": 547
                        },
                        "optional": false,
                        "computed": false,
                        "start": 533,
                        "end": 547
                      },
                      "start": 524,
                      "end": 548
                    },
                    "directive": null,
                    "start": 524,
                    "end": 549
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
                        "start": 558,
                        "end": 564
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
                            "start": 567,
                            "end": 568
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 569,
                            "end": 570
                          },
                          "optional": false,
                          "computed": false,
                          "start": 567,
                          "end": 570
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 571,
                            "end": 573
                          }
                        ],
                        "optional": false,
                        "start": 567,
                        "end": 574
                      },
                      "start": 558,
                      "end": 575
                    },
                    "directive": null,
                    "start": 558,
                    "end": 576
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
                        "start": 585,
                        "end": 591
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
                              "start": 598,
                              "end": 599
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 5,
                                "raw": "5",
                                "start": 600,
                                "end": 601
                              },
                              {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 602,
                                "end": 604
                              },
                              {
                                "type": "Literal",
                                "value": 20,
                                "raw": "20",
                                "start": 605,
                                "end": 607
                              }
                            ],
                            "start": 594,
                            "end": 608
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "g",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 609,
                            "end": 610
                          },
                          "optional": false,
                          "computed": false,
                          "start": 594,
                          "end": 610
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
                              "start": 611,
                              "end": 612
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 613,
                              "end": 614
                            },
                            "optional": false,
                            "computed": false,
                            "start": 611,
                            "end": 614
                          }
                        ],
                        "optional": false,
                        "start": 594,
                        "end": 615
                      },
                      "start": 585,
                      "end": 616
                    },
                    "directive": null,
                    "start": 585,
                    "end": 617
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 633,
                      "end": 639
                    },
                    "start": 626,
                    "end": 640
                  }
                ],
                "start": 470,
                "end": 646
              },
              "expression": false,
              "start": 457,
              "end": 646
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 450,
            "end": 646
          }
        ],
        "start": 12,
        "end": 648
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 648
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
            "start": 650,
            "end": 651
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 652,
            "end": 653
          },
          "optional": false,
          "computed": false,
          "start": 650,
          "end": 653
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 650,
        "end": 655
      },
      "directive": null,
      "start": 650,
      "end": 656
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 658
}
```
