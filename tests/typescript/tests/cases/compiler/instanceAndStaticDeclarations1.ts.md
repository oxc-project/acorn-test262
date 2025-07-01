__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 25
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
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
              "start": 32,
              "end": 43
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 54,
                        "end": 60
                      },
                      "start": 52,
                      "end": 60
                    },
                    "start": 51,
                    "end": 60
                  },
                  "readonly": false,
                  "static": false,
                  "start": 44,
                  "end": 60
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 72,
                        "end": 78
                      },
                      "start": 70,
                      "end": 78
                    },
                    "start": 69,
                    "end": 78
                  },
                  "readonly": false,
                  "static": false,
                  "start": 62,
                  "end": 78
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 80,
                "end": 83
              },
              "expression": false,
              "start": 43,
              "end": 83
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 32,
            "end": 83
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "distance",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 103
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 107,
                        "end": 112
                      },
                      "typeArguments": null,
                      "start": 107,
                      "end": 112
                    },
                    "start": 105,
                    "end": 112
                  },
                  "start": 104,
                  "end": 112
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
                          "name": "dx",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 128,
                          "end": 130
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 133,
                              "end": 137
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 138,
                              "end": 139
                            },
                            "optional": false,
                            "computed": false,
                            "start": 133,
                            "end": 139
                          },
                          "operator": "-",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 142,
                              "end": 143
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 144,
                              "end": 145
                            },
                            "optional": false,
                            "computed": false,
                            "start": 142,
                            "end": 145
                          },
                          "start": 133,
                          "end": 145
                        },
                        "definite": false,
                        "start": 128,
                        "end": 145
                      }
                    ],
                    "declare": false,
                    "start": 124,
                    "end": 146
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
                          "name": "dy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 159,
                          "end": 161
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 164,
                              "end": 168
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 169,
                              "end": 170
                            },
                            "optional": false,
                            "computed": false,
                            "start": 164,
                            "end": 170
                          },
                          "operator": "-",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 173,
                              "end": 174
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 175,
                              "end": 176
                            },
                            "optional": false,
                            "computed": false,
                            "start": 173,
                            "end": 176
                          },
                          "start": 164,
                          "end": 176
                        },
                        "definite": false,
                        "start": 159,
                        "end": 176
                      }
                    ],
                    "declare": false,
                    "start": 155,
                    "end": 177
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 197
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "sqrt",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 198,
                          "end": 202
                        },
                        "optional": false,
                        "computed": false,
                        "start": 193,
                        "end": 202
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dx",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 203,
                              "end": 205
                            },
                            "operator": "*",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dx",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 208,
                              "end": 210
                            },
                            "start": 203,
                            "end": 210
                          },
                          "operator": "+",
                          "right": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dy",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 213,
                              "end": 215
                            },
                            "operator": "*",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dy",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 218,
                              "end": 220
                            },
                            "start": 213,
                            "end": 220
                          },
                          "start": 203,
                          "end": 220
                        }
                      ],
                      "optional": false,
                      "start": 193,
                      "end": 221
                    },
                    "start": 186,
                    "end": 222
                  }
                ],
                "start": 114,
                "end": 228
              },
              "expression": false,
              "start": 103,
              "end": 228
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 88,
            "end": 228
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "origin",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 246
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 253,
                "end": 258
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 259,
                  "end": 260
                },
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 262,
                  "end": 263
                }
              ],
              "start": 249,
              "end": 264
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 233,
            "end": 265
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "distance",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 285
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
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 290,
                        "end": 295
                      },
                      "typeArguments": null,
                      "start": 290,
                      "end": 295
                    },
                    "start": 288,
                    "end": 295
                  },
                  "start": 286,
                  "end": 295
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 301,
                        "end": 306
                      },
                      "typeArguments": null,
                      "start": 301,
                      "end": 306
                    },
                    "start": 299,
                    "end": 306
                  },
                  "start": 297,
                  "end": 306
                }
              ],
              "returnType": null,
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 317,
                          "end": 319
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "distance",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 320,
                          "end": 328
                        },
                        "optional": false,
                        "computed": false,
                        "start": 317,
                        "end": 328
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 329,
                          "end": 331
                        }
                      ],
                      "optional": false,
                      "start": 317,
                      "end": 332
                    },
                    "start": 310,
                    "end": 333
                  }
                ],
                "start": 308,
                "end": 335
              },
              "expression": false,
              "start": 285,
              "end": 335
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 270,
            "end": 335
          }
        ],
        "start": 26,
        "end": 337
      },
      "abstract": false,
      "declare": false,
      "start": 14,
      "end": 337
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 14,
  "end": 337
}
```
