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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 36,
                          "end": 37
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 40,
                          "end": 44
                        },
                        "definite": false,
                        "start": 36,
                        "end": 44
                      }
                    ],
                    "declare": false,
                    "start": 32,
                    "end": 45
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 66,
                      "end": 67
                    },
                    "start": 59,
                    "end": 68
                  }
                ],
                "start": 22,
                "end": 74
              },
              "expression": false,
              "start": 19,
              "end": 74
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 74
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
              "start": 91,
              "end": 92
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 109,
                          "end": 111
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 114,
                          "end": 118
                        },
                        "definite": false,
                        "start": 109,
                        "end": 118
                      }
                    ],
                    "declare": false,
                    "start": 105,
                    "end": 119
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 147,
                      "end": 148
                    },
                    "start": 140,
                    "end": 149
                  }
                ],
                "start": 95,
                "end": 155
              },
              "expression": false,
              "start": 92,
              "end": 155
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 80,
            "end": 155
          }
        ],
        "start": 8,
        "end": 157
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 157
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
        "start": 165,
        "end": 166
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
              "start": 167,
              "end": 168
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 167,
            "end": 168
          }
        ],
        "start": 166,
        "end": 169
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
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 177
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
                  "start": 179,
                  "end": 180
                },
                "typeArguments": null,
                "start": 179,
                "end": 180
              },
              "start": 177,
              "end": 180
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
            "start": 176,
            "end": 181
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 191
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 208,
                          "end": 209
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 212,
                          "end": 216
                        },
                        "definite": false,
                        "start": 208,
                        "end": 216
                      }
                    ],
                    "declare": false,
                    "start": 204,
                    "end": 217
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 241,
                      "end": 242
                    },
                    "start": 234,
                    "end": 243
                  }
                ],
                "start": 194,
                "end": 249
              },
              "expression": false,
              "start": 191,
              "end": 249
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 186,
            "end": 249
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
              "start": 266,
              "end": 267
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 284,
                          "end": 286
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 289,
                          "end": 293
                        },
                        "definite": false,
                        "start": 284,
                        "end": 293
                      }
                    ],
                    "declare": false,
                    "start": 280,
                    "end": 294
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 322,
                      "end": 323
                    },
                    "start": 315,
                    "end": 324
                  }
                ],
                "start": 270,
                "end": 330
              },
              "expression": false,
              "start": 267,
              "end": 330
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 255,
            "end": 330
          }
        ],
        "start": 170,
        "end": 332
      },
      "abstract": false,
      "declare": false,
      "start": 159,
      "end": 332
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 339
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 353
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
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "r3",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 370,
                              "end": 372
                            },
                            "init": {
                              "type": "ThisExpression",
                              "start": 375,
                              "end": 379
                            },
                            "definite": false,
                            "start": 370,
                            "end": 379
                          }
                        ],
                        "declare": false,
                        "start": 366,
                        "end": 380
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 403,
                          "end": 404
                        },
                        "start": 396,
                        "end": 405
                      }
                    ],
                    "start": 356,
                    "end": 411
                  },
                  "expression": false,
                  "start": 353,
                  "end": 411
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 348,
                "end": 411
              }
            ],
            "start": 342,
            "end": 413
          },
          "definite": false,
          "start": 338,
          "end": 413
        }
      ],
      "declare": false,
      "start": 334,
      "end": 413
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 413
}
```
