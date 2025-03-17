__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 247,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 22,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 22,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 7,
                "end": 22,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 25,
      "end": 246,
      "test": {
        "type": "BinaryExpression",
        "start": 29,
        "end": 50,
        "left": {
          "type": "UnaryExpression",
          "start": 29,
          "end": 37,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 42,
          "end": 50,
          "value": "string",
          "raw": "\"string\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 52,
        "end": 146,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 58,
            "end": 144,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 62,
                "end": 144,
                "id": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ClassExpression",
                  "start": 66,
                  "end": 144,
                  "id": null,
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 72,
                    "end": 144,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 82,
                        "end": 138,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 82,
                          "end": 93,
                          "name": "constructor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "constructor",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 93,
                          "end": 138,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 96,
                            "end": 138,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 110,
                                "end": 128,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 114,
                                    "end": 127,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 114,
                                      "end": 123,
                                      "name": "y",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 115,
                                        "end": 123,
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 117,
                                          "end": 123
                                        }
                                      },
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "start": 126,
                                      "end": 127,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "let",
                                "declare": false
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": null
                      }
                    ]
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 152,
        "end": 246,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 158,
            "end": 244,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 162,
                "end": 244,
                "id": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ClassExpression",
                  "start": 166,
                  "end": 244,
                  "id": null,
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 172,
                    "end": 244,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 182,
                        "end": 238,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 182,
                          "end": 193,
                          "name": "constructor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "constructor",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 193,
                          "end": 238,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 196,
                            "end": 238,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 210,
                                "end": 228,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 214,
                                    "end": 227,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 214,
                                      "end": 223,
                                      "name": "y",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 215,
                                        "end": 223,
                                        "typeAnnotation": {
                                          "type": "TSNumberKeyword",
                                          "start": 217,
                                          "end": 223
                                        }
                                      },
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "start": 226,
                                      "end": 227,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "let",
                                "declare": false
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": null
                      }
                    ]
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
