__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 246,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 22,
            "decorators": [],
            "name": "x",
            "optional": false,
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
          "argument": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 62,
                "end": 144,
                "id": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ClassExpression",
                  "start": 66,
                  "end": 144,
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 72,
                    "end": 144,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 82,
                        "end": 138,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 82,
                          "end": 93,
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 93,
                          "end": 138,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 96,
                            "end": 138,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 110,
                                "end": 128,
                                "kind": "let",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 114,
                                    "end": 127,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 114,
                                      "end": 123,
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 115,
                                        "end": 123,
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 117,
                                          "end": 123
                                        }
                                      }
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "start": 126,
                                      "end": 127,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "definite": false
                                  }
                                ],
                                "declare": false
                              }
                            ]
                          },
                          "expression": false
                        },
                        "kind": "constructor",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null
                      }
                    ]
                  },
                  "abstract": false,
                  "declare": false
                },
                "definite": false
              }
            ],
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 162,
                "end": 244,
                "id": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ClassExpression",
                  "start": 166,
                  "end": 244,
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 172,
                    "end": 244,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 182,
                        "end": 238,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 182,
                          "end": 193,
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 193,
                          "end": 238,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 196,
                            "end": 238,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 210,
                                "end": 228,
                                "kind": "let",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 214,
                                    "end": 227,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 214,
                                      "end": 223,
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 215,
                                        "end": 223,
                                        "typeAnnotation": {
                                          "type": "TSNumberKeyword",
                                          "start": 217,
                                          "end": 223
                                        }
                                      }
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "start": 226,
                                      "end": 227,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "definite": false
                                  }
                                ],
                                "declare": false
                              }
                            ]
                          },
                          "expression": false
                        },
                        "kind": "constructor",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null
                      }
                    ]
                  },
                  "abstract": false,
                  "declare": false
                },
                "definite": false
              }
            ],
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
