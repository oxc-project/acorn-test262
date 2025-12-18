__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Either",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 67
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 68,
            "end": 69
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 72
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 71,
            "end": 72
          }
        ],
        "start": 67,
        "end": 73
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Left",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 80
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 82
                  },
                  "typeArguments": null,
                  "start": 81,
                  "end": 82
                }
              ],
              "start": 80,
              "end": 83
            },
            "start": 76,
            "end": 83
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Right",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 91
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 92,
                    "end": 93
                  },
                  "typeArguments": null,
                  "start": 92,
                  "end": 93
                }
              ],
              "start": 91,
              "end": 94
            },
            "start": 86,
            "end": 94
          }
        ],
        "start": 76,
        "end": 94
      },
      "declare": false,
      "start": 56,
      "end": 95
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Left",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 105
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 106,
            "end": 107
          }
        ],
        "start": 105,
        "end": 108
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "Left",
                  "raw": "'Left'",
                  "start": 118,
                  "end": 124
                },
                "start": 118,
                "end": 124
              },
              "start": 116,
              "end": 124
            },
            "accessibility": null,
            "static": false,
            "start": 113,
            "end": 125
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 127
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 130
                },
                "typeArguments": null,
                "start": 129,
                "end": 130
              },
              "start": 127,
              "end": 130
            },
            "accessibility": null,
            "static": false,
            "start": 126,
            "end": 130
          }
        ],
        "start": 111,
        "end": 132
      },
      "declare": false,
      "start": 96,
      "end": 133
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Right",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 144
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 146
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 145,
            "end": 146
          }
        ],
        "start": 144,
        "end": 147
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "Right",
                  "raw": "'Right'",
                  "start": 157,
                  "end": 164
                },
                "start": 157,
                "end": 164
              },
              "start": 155,
              "end": 164
            },
            "accessibility": null,
            "static": false,
            "start": 152,
            "end": 165
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 167
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 170
                },
                "typeArguments": null,
                "start": 169,
                "end": 170
              },
              "start": 167,
              "end": 170
            },
            "accessibility": null,
            "static": false,
            "start": 166,
            "end": 170
          }
        ],
        "start": 150,
        "end": 172
      },
      "declare": false,
      "start": 134,
      "end": 173
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mkLeft",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 187
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 192
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 191,
                  "end": 192
                }
              ],
              "start": 190,
              "end": 193
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 198
                    },
                    "typeArguments": null,
                    "start": 197,
                    "end": 198
                  },
                  "start": 195,
                  "end": 198
                },
                "start": 194,
                "end": 198
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Either",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 207
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 208,
                        "end": 209
                      },
                      "typeArguments": null,
                      "start": 208,
                      "end": 209
                    },
                    {
                      "type": "TSNeverKeyword",
                      "start": 211,
                      "end": 216
                    }
                  ],
                  "start": 207,
                  "end": 217
                },
                "start": 201,
                "end": 217
              },
              "start": 199,
              "end": 217
            },
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 224,
                    "end": 227
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Left",
                    "raw": "'Left'",
                    "start": 229,
                    "end": 235
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 224,
                  "end": 235
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 237,
                    "end": 238
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 237,
                    "end": 238
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 237,
                  "end": 238
                }
              ],
              "start": 222,
              "end": 240
            },
            "id": null,
            "generator": false,
            "start": 190,
            "end": 241
          },
          "definite": false,
          "start": 181,
          "end": 241
        }
      ],
      "declare": false,
      "start": 175,
      "end": 242
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mkRight",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 256
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 260,
                    "end": 261
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 260,
                  "end": 261
                }
              ],
              "start": 259,
              "end": 262
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 267
                    },
                    "typeArguments": null,
                    "start": 266,
                    "end": 267
                  },
                  "start": 264,
                  "end": 267
                },
                "start": 263,
                "end": 267
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Either",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 276
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 277,
                      "end": 282
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 284,
                        "end": 285
                      },
                      "typeArguments": null,
                      "start": 284,
                      "end": 285
                    }
                  ],
                  "start": 276,
                  "end": 286
                },
                "start": 270,
                "end": 286
              },
              "start": 268,
              "end": 286
            },
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 296
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Right",
                    "raw": "'Right'",
                    "start": 298,
                    "end": 305
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 293,
                  "end": 305
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 307,
                    "end": 308
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 307,
                    "end": 308
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 307,
                  "end": 308
                }
              ],
              "start": 291,
              "end": 310
            },
            "id": null,
            "generator": false,
            "start": 259,
            "end": 311
          },
          "definite": false,
          "start": 249,
          "end": 311
        }
      ],
      "declare": false,
      "start": 243,
      "end": 312
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 328
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 329,
            "end": 330
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 333
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 332,
            "end": 333
          }
        ],
        "start": 328,
        "end": 334
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PromiseLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 346,
            "end": 357
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 358,
                  "end": 359
                },
                "typeArguments": null,
                "start": 358,
                "end": 359
              }
            ],
            "start": 357,
            "end": 360
          },
          "start": 346,
          "end": 360
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "succeed",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 381
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 382,
                      "end": 383
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 382,
                    "end": 383
                  }
                ],
                "start": 381,
                "end": 384
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 388,
                        "end": 389
                      },
                      "typeArguments": null,
                      "start": 388,
                      "end": 389
                    },
                    "start": 386,
                    "end": 389
                  },
                  "start": 385,
                  "end": 389
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 392,
                    "end": 400
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNeverKeyword",
                        "start": 401,
                        "end": 406
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 408,
                          "end": 409
                        },
                        "typeArguments": null,
                        "start": 408,
                        "end": 409
                      }
                    ],
                    "start": 400,
                    "end": 410
                  },
                  "start": 392,
                  "end": 410
                },
                "start": 390,
                "end": 410
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "EPromise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 432,
                        "end": 440
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 441,
                              "end": 448
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 449,
                              "end": 456
                            },
                            "optional": false,
                            "computed": false,
                            "start": 441,
                            "end": 456
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "mkRight",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 457,
                                "end": 464
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 465,
                                  "end": 466
                                }
                              ],
                              "optional": false,
                              "start": 457,
                              "end": 467
                            }
                          ],
                          "optional": false,
                          "start": 441,
                          "end": 468
                        }
                      ],
                      "start": 428,
                      "end": 469
                    },
                    "start": 421,
                    "end": 470
                  }
                ],
                "start": 411,
                "end": 476
              },
              "expression": false,
              "start": 381,
              "end": 476
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 367,
            "end": 476
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fail",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 493
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 494,
                      "end": 495
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 494,
                    "end": 495
                  }
                ],
                "start": 493,
                "end": 496
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 500,
                        "end": 501
                      },
                      "typeArguments": null,
                      "start": 500,
                      "end": 501
                    },
                    "start": 498,
                    "end": 501
                  },
                  "start": 497,
                  "end": 501
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 504,
                    "end": 512
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 513,
                          "end": 514
                        },
                        "typeArguments": null,
                        "start": 513,
                        "end": 514
                      },
                      {
                        "type": "TSNeverKeyword",
                        "start": 516,
                        "end": 521
                      }
                    ],
                    "start": 512,
                    "end": 522
                  },
                  "start": 504,
                  "end": 522
                },
                "start": 502,
                "end": 522
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "EPromise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 544,
                        "end": 552
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 553,
                              "end": 560
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 561,
                              "end": 568
                            },
                            "optional": false,
                            "computed": false,
                            "start": 553,
                            "end": 568
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "mkLeft",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 569,
                                "end": 575
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 576,
                                  "end": 577
                                }
                              ],
                              "optional": false,
                              "start": 569,
                              "end": 578
                            }
                          ],
                          "optional": false,
                          "start": 553,
                          "end": 579
                        }
                      ],
                      "start": 540,
                      "end": 580
                    },
                    "start": 533,
                    "end": 581
                  }
                ],
                "start": 523,
                "end": 587
              },
              "expression": false,
              "start": 493,
              "end": 587
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 482,
            "end": 587
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
              "start": 593,
              "end": 604
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
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PromiseLike",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 617,
                          "end": 628
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Either",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 629,
                                "end": 635
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 636,
                                      "end": 637
                                    },
                                    "typeArguments": null,
                                    "start": 636,
                                    "end": 637
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 639,
                                      "end": 640
                                    },
                                    "typeArguments": null,
                                    "start": 639,
                                    "end": 640
                                  }
                                ],
                                "start": 635,
                                "end": 641
                              },
                              "start": 629,
                              "end": 641
                            }
                          ],
                          "start": 628,
                          "end": 642
                        },
                        "start": 617,
                        "end": 642
                      },
                      "start": 615,
                      "end": 642
                    },
                    "start": 614,
                    "end": 642
                  },
                  "readonly": true,
                  "static": false,
                  "start": 605,
                  "end": 642
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 644,
                "end": 647
              },
              "expression": false,
              "start": 604,
              "end": 647
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 593,
            "end": 647
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 657
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 658,
                      "end": 659
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 662,
                        "end": 663
                      },
                      "typeArguments": null,
                      "start": 662,
                      "end": 663
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 658,
                    "end": 663
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 665,
                      "end": 667
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSNeverKeyword",
                      "start": 670,
                      "end": 675
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 665,
                    "end": 675
                  }
                ],
                "start": 657,
                "end": 676
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "EPromise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 760,
                        "end": 768
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNeverKeyword",
                            "start": 769,
                            "end": 774
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 776,
                              "end": 777
                            },
                            "typeArguments": null,
                            "start": 776,
                            "end": 777
                          }
                        ],
                        "start": 768,
                        "end": 778
                      },
                      "start": 760,
                      "end": 778
                    },
                    "start": 758,
                    "end": 778
                  },
                  "start": 754,
                  "end": 778
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "onfulfilled",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 811,
                                    "end": 812
                                  },
                                  "typeArguments": null,
                                  "start": 811,
                                  "end": 812
                                },
                                "start": 809,
                                "end": 812
                              },
                              "start": 804,
                              "end": 812
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 817,
                                    "end": 818
                                  },
                                  "typeArguments": null,
                                  "start": 817,
                                  "end": 818
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "PromiseLike",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 821,
                                    "end": 832
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "B",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 833,
                                          "end": 834
                                        },
                                        "typeArguments": null,
                                        "start": 833,
                                        "end": 834
                                      }
                                    ],
                                    "start": 832,
                                    "end": 835
                                  },
                                  "start": 821,
                                  "end": 835
                                }
                              ],
                              "start": 817,
                              "end": 835
                            },
                            "start": 814,
                            "end": 835
                          },
                          "start": 803,
                          "end": 835
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 839,
                          "end": 843
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 846,
                          "end": 855
                        }
                      ],
                      "start": 802,
                      "end": 855
                    },
                    "start": 800,
                    "end": 855
                  },
                  "start": 788,
                  "end": 855
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "onrejected",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "reason",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 888,
                                  "end": 891
                                },
                                "start": 886,
                                "end": 891
                              },
                              "start": 880,
                              "end": 891
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 896,
                                    "end": 898
                                  },
                                  "typeArguments": null,
                                  "start": 896,
                                  "end": 898
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "PromiseLike",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 901,
                                    "end": 912
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "B1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 913,
                                          "end": 915
                                        },
                                        "typeArguments": null,
                                        "start": 913,
                                        "end": 915
                                      }
                                    ],
                                    "start": 912,
                                    "end": 916
                                  },
                                  "start": 901,
                                  "end": 916
                                }
                              ],
                              "start": 896,
                              "end": 916
                            },
                            "start": 893,
                            "end": 916
                          },
                          "start": 879,
                          "end": 916
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 920,
                          "end": 924
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 927,
                          "end": 936
                        }
                      ],
                      "start": 878,
                      "end": 936
                    },
                    "start": 876,
                    "end": 936
                  },
                  "start": 865,
                  "end": 936
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PromiseLike",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 944,
                    "end": 955
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 956,
                              "end": 957
                            },
                            "typeArguments": null,
                            "start": 956,
                            "end": 957
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 960,
                              "end": 962
                            },
                            "typeArguments": null,
                            "start": 960,
                            "end": 962
                          }
                        ],
                        "start": 956,
                        "end": 962
                      }
                    ],
                    "start": 955,
                    "end": 963
                  },
                  "start": 944,
                  "end": 963
                },
                "start": 942,
                "end": 963
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 981,
                            "end": 985
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 986,
                            "end": 987
                          },
                          "optional": false,
                          "computed": false,
                          "start": 981,
                          "end": 987
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 988,
                          "end": 992
                        },
                        "optional": false,
                        "computed": false,
                        "start": 981,
                        "end": 992
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "either",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1111,
                              "end": 1117
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "ChainExpression",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "onfulfilled",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1121,
                                  "end": 1132
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "TSAsExpression",
                                      "expression": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "either",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1136,
                                        "end": 1142
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Right",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1146,
                                          "end": 1151
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "A",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1152,
                                                "end": 1153
                                              },
                                              "typeArguments": null,
                                              "start": 1152,
                                              "end": 1153
                                            }
                                          ],
                                          "start": 1151,
                                          "end": 1154
                                        },
                                        "start": 1146,
                                        "end": 1154
                                      },
                                      "start": 1136,
                                      "end": 1154
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1156,
                                      "end": 1157
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1135,
                                    "end": 1157
                                  }
                                ],
                                "optional": true,
                                "start": 1121,
                                "end": 1158
                              },
                              "start": 1121,
                              "end": 1158
                            },
                            "operator": "??",
                            "right": {
                              "type": "TSAsExpression",
                              "expression": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "TSAsExpression",
                                    "expression": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "either",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1163,
                                      "end": 1169
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Right",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1173,
                                        "end": 1178
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "A",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1179,
                                              "end": 1180
                                            },
                                            "typeArguments": null,
                                            "start": 1179,
                                            "end": 1180
                                          }
                                        ],
                                        "start": 1178,
                                        "end": 1181
                                      },
                                      "start": 1173,
                                      "end": 1181
                                    },
                                    "start": 1163,
                                    "end": 1181
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1183,
                                    "end": 1184
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1162,
                                  "end": 1184
                                },
                                "typeAnnotation": {
                                  "type": "TSUnknownKeyword",
                                  "start": 1188,
                                  "end": 1195
                                },
                                "start": 1162,
                                "end": 1195
                              },
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1199,
                                  "end": 1200
                                },
                                "typeArguments": null,
                                "start": 1199,
                                "end": 1200
                              },
                              "start": 1162,
                              "end": 1200
                            },
                            "start": 1121,
                            "end": 1200
                          },
                          "id": null,
                          "generator": false,
                          "start": 1111,
                          "end": 1200
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onrejected",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1214,
                          "end": 1224
                        }
                      ],
                      "optional": false,
                      "start": 981,
                      "end": 1234
                    },
                    "start": 974,
                    "end": 1234
                  }
                ],
                "start": 964,
                "end": 1240
              },
              "expression": false,
              "start": 657,
              "end": 1240
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 653,
            "end": 1240
          }
        ],
        "start": 361,
        "end": 1242
      },
      "abstract": false,
      "declare": false,
      "start": 314,
      "end": 1242
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "withTypedFailure",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1268,
                  "end": 1276
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1277,
                      "end": 1283
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 1285,
                      "end": 1291
                    }
                  ],
                  "start": 1276,
                  "end": 1292
                },
                "start": 1268,
                "end": 1292
              },
              "start": 1266,
              "end": 1292
            },
            "start": 1250,
            "end": 1292
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "EPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 1295,
                "end": 1303
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fail",
                "optional": false,
                "typeAnnotation": null,
                "start": 1304,
                "end": 1308
              },
              "optional": false,
              "computed": false,
              "start": 1295,
              "end": 1308
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1309,
                "end": 1310
              }
            ],
            "optional": false,
            "start": 1295,
            "end": 1311
          },
          "definite": false,
          "start": 1250,
          "end": 1311
        }
      ],
      "declare": false,
      "start": 1244,
      "end": 1312
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "withTypedFailure",
                "optional": false,
                "typeAnnotation": null,
                "start": 1476,
                "end": 1492
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 1493,
                "end": 1497
              },
              "optional": false,
              "computed": false,
              "start": 1476,
              "end": 1497
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1498,
                    "end": 1499
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1503,
                      "end": 1504
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toUpperCase",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1505,
                      "end": 1516
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1503,
                    "end": 1516
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1503,
                  "end": 1518
                },
                "id": null,
                "generator": false,
                "start": 1498,
                "end": 1518
              }
            ],
            "optional": false,
            "start": 1476,
            "end": 1519
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 1520,
            "end": 1524
          },
          "optional": false,
          "computed": false,
          "start": 1476,
          "end": 1524
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "console",
              "optional": false,
              "typeAnnotation": null,
              "start": 1525,
              "end": 1532
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 1533,
              "end": 1536
            },
            "optional": false,
            "computed": false,
            "start": 1525,
            "end": 1536
          }
        ],
        "optional": false,
        "start": 1476,
        "end": 1537
      },
      "directive": null,
      "start": 1476,
      "end": 1538
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 1555,
        "end": 1559
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "withTypedFailure",
                "optional": false,
                "typeAnnotation": null,
                "start": 1574,
                "end": 1590
              },
              "start": 1568,
              "end": 1590
            },
            "directive": null,
            "start": 1568,
            "end": 1591
          }
        ],
        "start": 1562,
        "end": 1593
      },
      "expression": false,
      "start": 1540,
      "end": 1593
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 1593
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 56,
    "end": 60,
    "range": [
      56,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "Either",
    "start": 61,
    "end": 67,
    "range": [
      61,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "Left",
    "start": 76,
    "end": 80,
    "range": [
      76,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "Right",
    "start": 86,
    "end": 91,
    "range": [
      86,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 96,
    "end": 100,
    "range": [
      96,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "Left",
    "start": 101,
    "end": 105,
    "range": [
      101,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 113,
    "end": 116,
    "range": [
      113,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "String",
    "value": "'Left'",
    "start": 118,
    "end": 124,
    "range": [
      118,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 134,
    "end": 138,
    "range": [
      134,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "Right",
    "start": 139,
    "end": 144,
    "range": [
      139,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 152,
    "end": 155,
    "range": [
      152,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "String",
    "value": "'Right'",
    "start": 157,
    "end": 164,
    "range": [
      157,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 175,
    "end": 180,
    "range": [
      175,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "mkLeft",
    "start": 181,
    "end": 187,
    "range": [
      181,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "Either",
    "start": 201,
    "end": 207,
    "range": [
      201,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 211,
    "end": 216,
    "range": [
      211,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 218,
    "end": 220,
    "range": [
      218,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 224,
    "end": 227,
    "range": [
      224,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "String",
    "value": "'Left'",
    "start": 229,
    "end": 235,
    "range": [
      229,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 243,
    "end": 248,
    "range": [
      243,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "mkRight",
    "start": 249,
    "end": 256,
    "range": [
      249,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "Either",
    "start": 270,
    "end": 276,
    "range": [
      270,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 277,
    "end": 282,
    "range": [
      277,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 287,
    "end": 289,
    "range": [
      287,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 293,
    "end": 296,
    "range": [
      293,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "String",
    "value": "'Right'",
    "start": 298,
    "end": 305,
    "range": [
      298,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 314,
    "end": 319,
    "range": [
      314,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "EPromise",
    "start": 320,
    "end": 328,
    "range": [
      320,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 335,
    "end": 345,
    "range": [
      335,
      345
    ]
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 346,
    "end": 357,
    "range": [
      346,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 367,
    "end": 373,
    "range": [
      367,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "succeed",
    "start": 374,
    "end": 381,
    "range": [
      374,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "EPromise",
    "start": 392,
    "end": 400,
    "range": [
      392,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 401,
    "end": 406,
    "range": [
      401,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 421,
    "end": 427,
    "range": [
      421,
      427
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 428,
    "end": 431,
    "range": [
      428,
      431
    ]
  },
  {
    "type": "Identifier",
    "value": "EPromise",
    "start": 432,
    "end": 440,
    "range": [
      432,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 441,
    "end": 448,
    "range": [
      441,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 449,
    "end": 456,
    "range": [
      449,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "mkRight",
    "start": 457,
    "end": 464,
    "range": [
      457,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 482,
    "end": 488,
    "range": [
      482,
      488
    ]
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 489,
    "end": 493,
    "range": [
      489,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "EPromise",
    "start": 504,
    "end": 512,
    "range": [
      504,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 516,
    "end": 521,
    "range": [
      516,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 533,
    "end": 539,
    "range": [
      533,
      539
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 540,
    "end": 543,
    "range": [
      540,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "EPromise",
    "start": 544,
    "end": 552,
    "range": [
      544,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 553,
    "end": 560,
    "range": [
      553,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 561,
    "end": 568,
    "range": [
      561,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Identifier",
    "value": "mkLeft",
    "start": 569,
    "end": 575,
    "range": [
      569,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 593,
    "end": 604,
    "range": [
      593,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 605,
    "end": 613,
    "range": [
      605,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 617,
    "end": 628,
    "range": [
      617,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "Either",
    "start": 629,
    "end": 635,
    "range": [
      629,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 653,
    "end": 657,
    "range": [
      653,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 665,
    "end": 667,
    "range": [
      665,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 670,
    "end": 675,
    "range": [
      670,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 754,
    "end": 758,
    "range": [
      754,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Identifier",
    "value": "EPromise",
    "start": 760,
    "end": 768,
    "range": [
      760,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 769,
    "end": 774,
    "range": [
      769,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "onfulfilled",
    "start": 788,
    "end": 799,
    "range": [
      788,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 804,
    "end": 809,
    "range": [
      804,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 814,
    "end": 816,
    "range": [
      814,
      816
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 821,
    "end": 832,
    "range": [
      821,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 839,
    "end": 843,
    "range": [
      839,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 846,
    "end": 855,
    "range": [
      846,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Identifier",
    "value": "onrejected",
    "start": 865,
    "end": 875,
    "range": [
      865,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Identifier",
    "value": "reason",
    "start": 880,
    "end": 886,
    "range": [
      880,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 888,
    "end": 891,
    "range": [
      888,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 893,
    "end": 895,
    "range": [
      893,
      895
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 896,
    "end": 898,
    "range": [
      896,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 901,
    "end": 912,
    "range": [
      901,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 913,
    "end": 915,
    "range": [
      913,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 920,
    "end": 924,
    "range": [
      920,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 927,
    "end": 936,
    "range": [
      927,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 944,
    "end": 955,
    "range": [
      944,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 960,
    "end": 962,
    "range": [
      960,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 974,
    "end": 980,
    "range": [
      974,
      980
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 981,
    "end": 985,
    "range": [
      981,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 988,
    "end": 992,
    "range": [
      988,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "either",
    "start": 1111,
    "end": 1117,
    "range": [
      1111,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1118,
    "end": 1120,
    "range": [
      1118,
      1120
    ]
  },
  {
    "type": "Identifier",
    "value": "onfulfilled",
    "start": 1121,
    "end": 1132,
    "range": [
      1121,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1132,
    "end": 1134,
    "range": [
      1132,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Identifier",
    "value": "either",
    "start": 1136,
    "end": 1142,
    "range": [
      1136,
      1142
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1143,
    "end": 1145,
    "range": [
      1143,
      1145
    ]
  },
  {
    "type": "Identifier",
    "value": "Right",
    "start": 1146,
    "end": 1151,
    "range": [
      1146,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 1159,
    "end": 1161,
    "range": [
      1159,
      1161
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Identifier",
    "value": "either",
    "start": 1163,
    "end": 1169,
    "range": [
      1163,
      1169
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1170,
    "end": 1172,
    "range": [
      1170,
      1172
    ]
  },
  {
    "type": "Identifier",
    "value": "Right",
    "start": 1173,
    "end": 1178,
    "range": [
      1173,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1185,
    "end": 1187,
    "range": [
      1185,
      1187
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1188,
    "end": 1195,
    "range": [
      1188,
      1195
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1196,
    "end": 1198,
    "range": [
      1196,
      1198
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Identifier",
    "value": "onrejected",
    "start": 1214,
    "end": 1224,
    "range": [
      1214,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1244,
    "end": 1249,
    "range": [
      1244,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "withTypedFailure",
    "start": 1250,
    "end": 1266,
    "range": [
      1250,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "EPromise",
    "start": 1268,
    "end": 1276,
    "range": [
      1268,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1277,
    "end": 1283,
    "range": [
      1277,
      1283
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
      1284
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1285,
    "end": 1291,
    "range": [
      1285,
      1291
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Identifier",
    "value": "EPromise",
    "start": 1295,
    "end": 1303,
    "range": [
      1295,
      1303
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 1304,
    "end": 1308,
    "range": [
      1304,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Identifier",
    "value": "withTypedFailure",
    "start": 1476,
    "end": 1492,
    "range": [
      1476,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1492,
    "end": 1493,
    "range": [
      1492,
      1493
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1493,
    "end": 1497,
    "range": [
      1493,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1500,
    "end": 1502,
    "range": [
      1500,
      1502
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 1505,
    "end": 1516,
    "range": [
      1505,
      1516
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1517,
    "end": 1518,
    "range": [
      1517,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1520,
    "end": 1524,
    "range": [
      1520,
      1524
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1524,
    "end": 1525,
    "range": [
      1524,
      1525
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1525,
    "end": 1532,
    "range": [
      1525,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1533,
    "end": 1536,
    "range": [
      1533,
      1536
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1540,
    "end": 1545,
    "range": [
      1540,
      1545
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1546,
    "end": 1554,
    "range": [
      1546,
      1554
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1555,
    "end": 1559,
    "range": [
      1555,
      1559
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1568,
    "end": 1573,
    "range": [
      1568,
      1573
    ]
  },
  {
    "type": "Identifier",
    "value": "withTypedFailure",
    "start": 1574,
    "end": 1590,
    "range": [
      1574,
      1590
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  }
]
```
