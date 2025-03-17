__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 344,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 195,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 48,
        "end": 195,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 54,
            "end": 193,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 61,
              "end": 192,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 192,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 87,
                    "end": 132,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 93,
                        "end": 131,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 93,
                          "end": 101,
                          "decorators": [],
                          "name": "existing",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "start": 104,
                          "end": 131,
                          "operator": "??",
                          "left": {
                            "type": "MemberExpression",
                            "start": 104,
                            "end": 125,
                            "computed": true,
                            "object": {
                              "type": "MemberExpression",
                              "start": 104,
                              "end": 120,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 104,
                                "end": 111,
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 112,
                                "end": 120,
                                "decorators": [],
                                "name": "metadata",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 121,
                              "end": 124,
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "ArrayExpression",
                            "start": 129,
                            "end": 131,
                            "elements": []
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 141,
                    "end": 186,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 141,
                      "end": 185,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 141,
                        "end": 162,
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "start": 141,
                          "end": 157,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 141,
                            "end": 148,
                            "decorators": [],
                            "name": "context",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 157,
                            "decorators": [],
                            "name": "metadata",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 158,
                          "end": 161,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 165,
                        "end": 185,
                        "elements": [
                          {
                            "type": "SpreadElement",
                            "start": 166,
                            "end": 177,
                            "argument": {
                              "type": "Identifier",
                              "start": 169,
                              "end": 177,
                              "decorators": [],
                              "name": "existing",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 179,
                            "end": 184,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 65,
                  "end": 72,
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 19,
        "decorators": [],
        "name": "appendMeta",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 31,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 31,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            }
          }
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 46,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 38,
            "end": 46,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 40,
              "end": 46
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 197,
      "end": 230,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 227,
        "end": 230,
        "body": []
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 197,
          "end": 218,
          "expression": {
            "type": "CallExpression",
            "start": 198,
            "end": 218,
            "arguments": [
              {
                "type": "Literal",
                "start": 209,
                "end": 212,
                "raw": "'a'",
                "value": "a"
              },
              {
                "type": "Literal",
                "start": 214,
                "end": 217,
                "raw": "'x'",
                "value": "x"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 198,
              "end": 208,
              "decorators": [],
              "name": "appendMeta",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 226,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 232,
      "end": 275,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 272,
        "end": 275,
        "body": []
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 232,
          "end": 253,
          "expression": {
            "type": "CallExpression",
            "start": 233,
            "end": 253,
            "arguments": [
              {
                "type": "Literal",
                "start": 244,
                "end": 247,
                "raw": "'a'",
                "value": "a"
              },
              {
                "type": "Literal",
                "start": 249,
                "end": 252,
                "raw": "'z'",
                "value": "z"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 233,
              "end": 243,
              "decorators": [],
              "name": "appendMeta",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 261,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 270,
        "end": 271,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 277,
      "end": 298,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 277,
        "end": 297,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 277,
          "end": 295,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 277,
            "end": 278,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 279,
            "end": 294,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 279,
              "end": 285,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 286,
              "end": 294,
              "decorators": [],
              "name": "metadata",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 296,
          "end": 297,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 308,
      "end": 329,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 308,
        "end": 328,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 308,
          "end": 326,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 308,
            "end": 309,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 310,
            "end": 325,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 310,
              "end": 316,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 317,
              "end": 325,
              "decorators": [],
              "name": "metadata",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 327,
          "end": 328,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
