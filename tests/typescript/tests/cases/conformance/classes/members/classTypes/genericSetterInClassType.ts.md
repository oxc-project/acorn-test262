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
        "name": "Generic",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 29,
                    "end": 30
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 29,
                  "end": 30
                }
              ],
              "start": 28,
              "end": 31
            },
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 46,
                    "end": 47
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 51,
                          "end": 52
                        },
                        "typeArguments": null,
                        "start": 51,
                        "end": 52
                      },
                      "start": 49,
                      "end": 52
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 74,
                              "end": 75
                            },
                            "typeAnnotation": {
                              "type": "TSNeverKeyword",
                              "start": 79,
                              "end": 84
                            },
                            "start": 74,
                            "end": 84
                          },
                          "start": 67,
                          "end": 85
                        }
                      ],
                      "start": 53,
                      "end": 95
                    },
                    "expression": false,
                    "start": 47,
                    "end": 95
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 42,
                  "end": 95
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 109
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 110,
                        "end": 111
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 113,
                      "end": 116
                    },
                    "expression": false,
                    "start": 109,
                    "end": 116
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 104,
                  "end": 116
                }
              ],
              "start": 32,
              "end": 122
            },
            "abstract": false,
            "declare": false,
            "start": 21,
            "end": 122
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
                  "start": 132,
                  "end": 133
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 141
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 142,
                        "end": 148
                      }
                    ],
                    "start": 141,
                    "end": 149
                  },
                  "arguments": [],
                  "start": 136,
                  "end": 151
                },
                "definite": false,
                "start": 132,
                "end": 151
              }
            ],
            "declare": false,
            "start": 128,
            "end": 152
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 158
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 159,
                  "end": 160
                },
                "optional": false,
                "computed": false,
                "start": 157,
                "end": 160
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 164
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 166
                },
                "optional": false,
                "computed": false,
                "start": 163,
                "end": 166
              },
              "start": 157,
              "end": 166
            },
            "directive": null,
            "start": 157,
            "end": 167
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Box",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 182
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 184
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 183,
                  "end": 184
                }
              ],
              "start": 182,
              "end": 185
            },
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
                    "type": "PrivateIdentifier",
                    "name": "value",
                    "start": 196,
                    "end": 202
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 205,
                        "end": 206
                      },
                      "typeArguments": null,
                      "start": 205,
                      "end": 206
                    },
                    "start": 203,
                    "end": 206
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": true,
                  "readonly": false,
                  "accessibility": null,
                  "start": 196,
                  "end": 207
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 229,
                    "end": 234
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
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 258,
                              "end": 262
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "value",
                              "start": 263,
                              "end": 269
                            },
                            "optional": false,
                            "computed": false,
                            "start": 258,
                            "end": 269
                          },
                          "start": 251,
                          "end": 270
                        }
                      ],
                      "start": 237,
                      "end": 280
                    },
                    "expression": false,
                    "start": 234,
                    "end": 280
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 225,
                  "end": 280
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 298,
                    "end": 303
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
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 304,
                        "end": 309
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
                                "start": 325,
                                "end": 329
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "value",
                                "start": 330,
                                "end": 336
                              },
                              "optional": false,
                              "computed": false,
                              "start": 325,
                              "end": 336
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 339,
                              "end": 344
                            },
                            "start": 325,
                            "end": 344
                          },
                          "directive": null,
                          "start": 325,
                          "end": 345
                        }
                      ],
                      "start": 311,
                      "end": 355
                    },
                    "expression": false,
                    "start": 303,
                    "end": 355
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 294,
                  "end": 355
                }
              ],
              "start": 186,
              "end": 361
            },
            "abstract": false,
            "declare": false,
            "start": 173,
            "end": 361
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 375,
                    "end": 378
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 379,
                        "end": 385
                      }
                    ],
                    "start": 378,
                    "end": 386
                  },
                  "arguments": [],
                  "start": 371,
                  "end": 388
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 389,
                  "end": 394
                },
                "optional": false,
                "computed": false,
                "start": 371,
                "end": 394
              },
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 397,
                "end": 398
              },
              "start": 371,
              "end": 398
            },
            "directive": null,
            "start": 371,
            "end": 399
          }
        ],
        "start": 15,
        "end": 401
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 401
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 401
}
```
