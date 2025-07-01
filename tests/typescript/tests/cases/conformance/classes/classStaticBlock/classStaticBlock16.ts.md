__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "getX",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14,
                          "end": 15
                        },
                        "typeArguments": null,
                        "start": 14,
                        "end": 15
                      },
                      "start": 12,
                      "end": 15
                    },
                    "start": 11,
                    "end": 15
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 20,
                    "end": 26
                  },
                  "start": 17,
                  "end": 26
                },
                "start": 10,
                "end": 26
              },
              "start": 8,
              "end": 26
            },
            "start": 4,
            "end": 26
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 26
        }
      ],
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 35
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
              "type": "PrivateIdentifier",
              "name": "x",
              "start": 40,
              "end": 42
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 45,
              "end": 46
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 40,
            "end": 46
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
              "start": 49,
              "end": 60
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 64,
                      "end": 70
                    },
                    "start": 62,
                    "end": 70
                  },
                  "start": 61,
                  "end": 70
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
                          "start": 78,
                          "end": 82
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "x",
                          "start": 83,
                          "end": 85
                        },
                        "optional": false,
                        "computed": false,
                        "start": 78,
                        "end": 85
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 88,
                        "end": 89
                      },
                      "start": 78,
                      "end": 89
                    },
                    "directive": null,
                    "start": 78,
                    "end": 90
                  }
                ],
                "start": 72,
                "end": 94
              },
              "expression": false,
              "start": 60,
              "end": 94
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 49,
            "end": 94
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getX",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 151,
                    "end": 155
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
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 164,
                              "end": 165
                            },
                            "typeArguments": null,
                            "start": 164,
                            "end": 165
                          },
                          "start": 162,
                          "end": 165
                        },
                        "start": 159,
                        "end": 165
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 170,
                        "end": 173
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "x",
                        "start": 174,
                        "end": 176
                      },
                      "optional": false,
                      "computed": false,
                      "start": 170,
                      "end": 176
                    },
                    "id": null,
                    "generator": false,
                    "start": 158,
                    "end": 176
                  },
                  "start": 151,
                  "end": 176
                },
                "directive": null,
                "start": 151,
                "end": 177
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getY",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 182,
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
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "D",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 195,
                              "end": 196
                            },
                            "typeArguments": null,
                            "start": 195,
                            "end": 196
                          },
                          "start": 193,
                          "end": 196
                        },
                        "start": 190,
                        "end": 196
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 201,
                        "end": 204
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "y",
                        "start": 205,
                        "end": 207
                      },
                      "optional": false,
                      "computed": false,
                      "start": 201,
                      "end": 207
                    },
                    "id": null,
                    "generator": false,
                    "start": 189,
                    "end": 207
                  },
                  "start": 182,
                  "end": 207
                },
                "directive": null,
                "start": 182,
                "end": 208
              }
            ],
            "start": 98,
            "end": 212
          }
        ],
        "start": 36,
        "end": 214
      },
      "abstract": false,
      "declare": false,
      "start": 28,
      "end": 214
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "getY",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 230,
                          "end": 231
                        },
                        "typeArguments": null,
                        "start": 230,
                        "end": 231
                      },
                      "start": 228,
                      "end": 231
                    },
                    "start": 227,
                    "end": 231
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 236,
                    "end": 242
                  },
                  "start": 233,
                  "end": 242
                },
                "start": 226,
                "end": 242
              },
              "start": 224,
              "end": 242
            },
            "start": 220,
            "end": 242
          },
          "init": null,
          "definite": false,
          "start": 220,
          "end": 242
        }
      ],
      "declare": false,
      "start": 216,
      "end": 243
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 250,
        "end": 251
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
              "type": "PrivateIdentifier",
              "name": "y",
              "start": 256,
              "end": 258
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 261,
              "end": 262
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 256,
            "end": 262
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getX",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 318,
                    "end": 322
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
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 331,
                              "end": 332
                            },
                            "typeArguments": null,
                            "start": 331,
                            "end": 332
                          },
                          "start": 329,
                          "end": 332
                        },
                        "start": 326,
                        "end": 332
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 337,
                        "end": 340
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "x",
                        "start": 341,
                        "end": 343
                      },
                      "optional": false,
                      "computed": false,
                      "start": 337,
                      "end": 343
                    },
                    "id": null,
                    "generator": false,
                    "start": 325,
                    "end": 343
                  },
                  "start": 318,
                  "end": 343
                },
                "directive": null,
                "start": 318,
                "end": 344
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getY",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 353
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
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "D",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 362,
                              "end": 363
                            },
                            "typeArguments": null,
                            "start": 362,
                            "end": 363
                          },
                          "start": 360,
                          "end": 363
                        },
                        "start": 357,
                        "end": 363
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 368,
                        "end": 371
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "y",
                        "start": 372,
                        "end": 374
                      },
                      "optional": false,
                      "computed": false,
                      "start": 368,
                      "end": 374
                    },
                    "id": null,
                    "generator": false,
                    "start": 356,
                    "end": 374
                  },
                  "start": 349,
                  "end": 374
                },
                "directive": null,
                "start": 349,
                "end": 375
              }
            ],
            "start": 266,
            "end": 379
          }
        ],
        "start": 252,
        "end": 381
      },
      "abstract": false,
      "declare": false,
      "start": 244,
      "end": 381
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 381
}
```
