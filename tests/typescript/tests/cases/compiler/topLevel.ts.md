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
        "name": "IPoint",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 24
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              },
              "start": 24,
              "end": 31
            },
            "accessibility": null,
            "static": false,
            "start": 23,
            "end": 32
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 39,
                "end": 45
              },
              "start": 38,
              "end": 45
            },
            "accessibility": null,
            "static": false,
            "start": 37,
            "end": 46
          }
        ],
        "start": 17,
        "end": 48
      },
      "declare": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 61
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPoint",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 79
          },
          "typeArguments": null,
          "start": 73,
          "end": 79
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 97
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 105,
                    "end": 106
                  },
                  "readonly": false,
                  "static": false,
                  "start": 98,
                  "end": 106
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 115
                  },
                  "readonly": false,
                  "static": false,
                  "start": 107,
                  "end": 115
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 116,
                "end": 118
              },
              "expression": false,
              "start": 97,
              "end": 118
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 86,
            "end": 118
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "move",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 134
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
                  "name": "xo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 138,
                      "end": 144
                    },
                    "start": 137,
                    "end": 144
                  },
                  "start": 135,
                  "end": 144
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 148,
                      "end": 154
                    },
                    "start": 147,
                    "end": 154
                  },
                  "start": 145,
                  "end": 154
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
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 159,
                          "end": 163
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 164,
                          "end": 165
                        },
                        "optional": false,
                        "computed": false,
                        "start": 159,
                        "end": 165
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "xo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 169
                      },
                      "start": 159,
                      "end": 169
                    },
                    "directive": null,
                    "start": 159,
                    "end": 170
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 172,
                          "end": 176
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 177,
                          "end": 178
                        },
                        "optional": false,
                        "computed": false,
                        "start": 172,
                        "end": 178
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "yo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 180,
                        "end": 182
                      },
                      "start": 172,
                      "end": 182
                    },
                    "directive": null,
                    "start": 172,
                    "end": 183
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 192,
                      "end": 196
                    },
                    "start": 185,
                    "end": 197
                  }
                ],
                "start": 156,
                "end": 203
              },
              "expression": false,
              "start": 134,
              "end": 203
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 123,
            "end": 203
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 223
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Literal",
                              "value": "(",
                              "raw": "\"(\"",
                              "start": 237,
                              "end": 240
                            },
                            "operator": "+",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 241,
                                "end": 245
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 246,
                                "end": 247
                              },
                              "optional": false,
                              "computed": false,
                              "start": 241,
                              "end": 247
                            },
                            "start": 237,
                            "end": 247
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": ",",
                            "raw": "\",\"",
                            "start": 248,
                            "end": 251
                          },
                          "start": 237,
                          "end": 251
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 252,
                            "end": 256
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 257,
                            "end": 258
                          },
                          "optional": false,
                          "computed": false,
                          "start": 252,
                          "end": 258
                        },
                        "start": 237,
                        "end": 258
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": ")",
                        "raw": "\")\"",
                        "start": 259,
                        "end": 262
                      },
                      "start": 237,
                      "end": 262
                    },
                    "start": 229,
                    "end": 264
                  }
                ],
                "start": 226,
                "end": 270
              },
              "expression": false,
              "start": 223,
              "end": 270
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 208,
            "end": 270
          }
        ],
        "start": 80,
        "end": 272
      },
      "abstract": false,
      "declare": false,
      "start": 50,
      "end": 272
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
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 284
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 285,
            "end": 287
          },
          "definite": false,
          "start": 278,
          "end": 287
        }
      ],
      "declare": false,
      "start": 274,
      "end": 288
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
          "start": 289,
          "end": 295
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
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 307
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 308,
                  "end": 309
                },
                {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 310,
                  "end": 311
                }
              ],
              "start": 298,
              "end": 312
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "move",
              "optional": false,
              "typeAnnotation": null,
              "start": 313,
              "end": 317
            },
            "optional": false,
            "computed": false,
            "start": 298,
            "end": 317
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 318,
              "end": 319
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 320,
              "end": 321
            }
          ],
          "optional": false,
          "start": 298,
          "end": 322
        },
        "start": 289,
        "end": 323
      },
      "directive": null,
      "start": 289,
      "end": 324
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 336,
        "end": 337
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "origin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 355,
                    "end": 361
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 366,
                      "end": 371
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 372,
                        "end": 373
                      },
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 374,
                        "end": 375
                      }
                    ],
                    "start": 362,
                    "end": 376
                  },
                  "definite": false,
                  "start": 355,
                  "end": 376
                }
              ],
              "declare": false,
              "start": 351,
              "end": 377
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 344,
            "end": 377
          }
        ],
        "start": 338,
        "end": 379
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 326,
      "end": 379
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
          "start": 381,
          "end": 387
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 391
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "origin",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 398
              },
              "optional": false,
              "computed": false,
              "start": 390,
              "end": 398
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "move",
              "optional": false,
              "typeAnnotation": null,
              "start": 399,
              "end": 403
            },
            "optional": false,
            "computed": false,
            "start": 390,
            "end": 403
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 404,
              "end": 405
            },
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 406,
              "end": 407
            }
          ],
          "optional": false,
          "start": 390,
          "end": 408
        },
        "start": 381,
        "end": 409
      },
      "directive": null,
      "start": 381,
      "end": 410
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 411
}
```
