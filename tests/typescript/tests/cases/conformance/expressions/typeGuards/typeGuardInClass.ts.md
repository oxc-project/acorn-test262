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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 7,
                    "end": 13
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 16,
                    "end": 22
                  }
                ],
                "start": 7,
                "end": 22
              },
              "start": 5,
              "end": 22
            },
            "start": 4,
            "end": 22
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 22
        }
      ],
      "declare": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "prefix": true,
          "start": 29,
          "end": 37
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 42,
          "end": 50
        },
        "start": 29,
        "end": 50
      },
      "consequent": {
        "type": "BlockStatement",
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 63
                },
                "init": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
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
                          "start": 82,
                          "end": 93
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
                                "kind": "let",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 117,
                                          "end": 123
                                        },
                                        "start": 115,
                                        "end": 123
                                      },
                                      "start": 114,
                                      "end": 123
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 126,
                                      "end": 127
                                    },
                                    "definite": false,
                                    "start": 114,
                                    "end": 127
                                  }
                                ],
                                "declare": false,
                                "start": 110,
                                "end": 128
                              }
                            ],
                            "start": 96,
                            "end": 138
                          },
                          "expression": false,
                          "start": 93,
                          "end": 138
                        },
                        "kind": "constructor",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 82,
                        "end": 138
                      }
                    ],
                    "start": 72,
                    "end": 144
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 66,
                  "end": 144
                },
                "definite": false,
                "start": 62,
                "end": 144
              }
            ],
            "declare": false,
            "start": 58,
            "end": 144
          }
        ],
        "start": 52,
        "end": 146
      },
      "alternate": {
        "type": "BlockStatement",
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
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 163
                },
                "init": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
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
                          "start": 182,
                          "end": 193
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
                                "kind": "let",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSNumberKeyword",
                                          "start": 217,
                                          "end": 223
                                        },
                                        "start": 215,
                                        "end": 223
                                      },
                                      "start": 214,
                                      "end": 223
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 226,
                                      "end": 227
                                    },
                                    "definite": false,
                                    "start": 214,
                                    "end": 227
                                  }
                                ],
                                "declare": false,
                                "start": 210,
                                "end": 228
                              }
                            ],
                            "start": 196,
                            "end": 238
                          },
                          "expression": false,
                          "start": 193,
                          "end": 238
                        },
                        "kind": "constructor",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 182,
                        "end": 238
                      }
                    ],
                    "start": 172,
                    "end": 244
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 166,
                  "end": 244
                },
                "definite": false,
                "start": 162,
                "end": 244
              }
            ],
            "declare": false,
            "start": 158,
            "end": 244
          }
        ],
        "start": 152,
        "end": 246
      },
      "start": 25,
      "end": 246
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 246
}
```
