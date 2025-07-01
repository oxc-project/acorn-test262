__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 29
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 25,
            "end": 39
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "flag",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 48
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 51,
                "end": 58
              },
              "start": 49,
              "end": 58
            },
            "accessibility": null,
            "static": false,
            "start": 44,
            "end": 59
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "short",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 69
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 72,
                "end": 78
              },
              "start": 70,
              "end": 78
            },
            "accessibility": null,
            "static": false,
            "start": 64,
            "end": 79
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "usage",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 89
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 92,
                "end": 98
              },
              "start": 90,
              "end": 98
            },
            "accessibility": null,
            "static": false,
            "start": 84,
            "end": 99
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 107
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 114,
                        "end": 120
                      },
                      "start": 112,
                      "end": 120
                    },
                    "start": 111,
                    "end": 120
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 125,
                    "end": 129
                  },
                  "start": 122,
                  "end": 129
                },
                "start": 110,
                "end": 129
              },
              "start": 108,
              "end": 129
            },
            "accessibility": null,
            "static": false,
            "start": 104,
            "end": 130
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 139
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 142,
                "end": 148
              },
              "start": 140,
              "end": 148
            },
            "accessibility": null,
            "static": false,
            "start": 135,
            "end": 149
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "experimental",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 166
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 169,
                "end": 176
              },
              "start": 167,
              "end": 176
            },
            "accessibility": null,
            "static": false,
            "start": 154,
            "end": 177
          }
        ],
        "start": 19,
        "end": 179
      },
      "declare": false,
      "start": 0,
      "end": 179
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "parser",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 193
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
              "name": "options",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 211
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IOptions",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 213,
                    "end": 221
                  },
                  "typeArguments": null,
                  "start": 213,
                  "end": 221
                },
                "start": 213,
                "end": 223
              },
              "start": 211,
              "end": 223
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 197,
            "end": 224
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 235
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 242,
                          "end": 246
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 247,
                          "end": 254
                        },
                        "optional": false,
                        "computed": false,
                        "start": 242,
                        "end": 254
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 257,
                              "end": 261
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "options",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 262,
                              "end": 269
                            },
                            "optional": false,
                            "computed": false,
                            "start": 257,
                            "end": 269
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sort",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 270,
                            "end": 274
                          },
                          "optional": false,
                          "computed": false,
                          "start": 257,
                          "end": 274
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 284,
                                "end": 285
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 287,
                                "end": 288
                              }
                            ],
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
                                        "name": "aName",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 308,
                                        "end": 313
                                      },
                                      "init": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "a",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 316,
                                              "end": 317
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "name",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 318,
                                              "end": 322
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 316,
                                            "end": 322
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "toLowerCase",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 323,
                                            "end": 334
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 316,
                                          "end": 334
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 316,
                                        "end": 336
                                      },
                                      "definite": false,
                                      "start": 308,
                                      "end": 336
                                    }
                                  ],
                                  "declare": false,
                                  "start": 304,
                                  "end": 337
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
                                        "name": "bName",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 354,
                                        "end": 359
                                      },
                                      "init": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "b",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 362,
                                              "end": 363
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "name",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 364,
                                              "end": 368
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 362,
                                            "end": 368
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "toLowerCase",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 369,
                                            "end": 380
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 362,
                                          "end": 380
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 362,
                                        "end": 382
                                      },
                                      "definite": false,
                                      "start": 354,
                                      "end": 382
                                    }
                                  ],
                                  "declare": false,
                                  "start": 350,
                                  "end": 383
                                },
                                {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "aName",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 401,
                                      "end": 406
                                    },
                                    "operator": ">",
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bName",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 409,
                                      "end": 414
                                    },
                                    "start": 401,
                                    "end": 414
                                  },
                                  "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1",
                                          "start": 441,
                                          "end": 442
                                        },
                                        "start": 434,
                                        "end": 443
                                      }
                                    ],
                                    "start": 416,
                                    "end": 457
                                  },
                                  "alternate": {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "aName",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 467,
                                        "end": 472
                                      },
                                      "operator": "<",
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "bName",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 475,
                                        "end": 480
                                      },
                                      "start": 467,
                                      "end": 480
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "argument": {
                                            "type": "UnaryExpression",
                                            "operator": "-",
                                            "argument": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1",
                                              "start": 508,
                                              "end": 509
                                            },
                                            "prefix": true,
                                            "start": 507,
                                            "end": 509
                                          },
                                          "start": 500,
                                          "end": 510
                                        }
                                      ],
                                      "start": 482,
                                      "end": 524
                                    },
                                    "alternate": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "argument": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0",
                                            "start": 555,
                                            "end": 556
                                          },
                                          "start": 548,
                                          "end": 557
                                        }
                                      ],
                                      "start": 530,
                                      "end": 571
                                    },
                                    "start": 463,
                                    "end": 571
                                  },
                                  "start": 397,
                                  "end": 571
                                }
                              ],
                              "start": 290,
                              "end": 581
                            },
                            "expression": false,
                            "start": 275,
                            "end": 581
                          }
                        ],
                        "optional": false,
                        "start": 257,
                        "end": 582
                      },
                      "start": 242,
                      "end": 582
                    },
                    "directive": null,
                    "start": 242,
                    "end": 583
                  }
                ],
                "start": 238,
                "end": 586
              },
              "expression": false,
              "start": 235,
              "end": 586
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 227,
            "end": 586
          }
        ],
        "start": 194,
        "end": 588
      },
      "abstract": false,
      "declare": false,
      "start": 181,
      "end": 588
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 588
}
```
