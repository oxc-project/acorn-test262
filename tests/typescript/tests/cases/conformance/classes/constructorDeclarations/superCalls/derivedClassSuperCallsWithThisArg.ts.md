__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 479,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 52,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 52,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 27,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 26,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 20,
                "end": 26
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 32,
            "end": 50,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 43,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 43,
              "end": 50,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 50,
                "body": []
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
    {
      "type": "ClassDeclaration",
      "start": 54,
      "end": 137,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 67,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 76,
        "end": 80,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 81,
        "end": 137,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 87,
            "end": 135,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 98,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 98,
              "end": 135,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 101,
                "end": 135,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 111,
                    "end": 123,
                    "expression": {
                      "type": "CallExpression",
                      "start": 111,
                      "end": 122,
                      "callee": {
                        "type": "Super",
                        "start": 111,
                        "end": 116
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 117,
                          "end": 121
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
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
    {
      "type": "ClassDeclaration",
      "start": 139,
      "end": 242,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 153,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 162,
        "end": 166,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 167,
        "end": 242,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 173,
            "end": 240,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 184,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 184,
              "end": 240,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 185,
                  "end": 201,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 201,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 193,
                      "end": 201,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 195,
                        "end": 201
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 203,
                "end": 240,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 213,
                    "end": 225,
                    "expression": {
                      "type": "CallExpression",
                      "start": 213,
                      "end": 224,
                      "callee": {
                        "type": "Super",
                        "start": 213,
                        "end": 218
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 219,
                          "end": 223
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
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
    {
      "type": "ClassDeclaration",
      "start": 244,
      "end": 353,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 250,
        "end": 258,
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 267,
        "end": 271,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 272,
        "end": 353,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 278,
            "end": 351,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 278,
              "end": 289,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 289,
              "end": 351,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 290,
                  "end": 306,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 306,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 298,
                      "end": 306,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 300,
                        "end": 306
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 308,
                "end": 351,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 318,
                    "end": 336,
                    "expression": {
                      "type": "CallExpression",
                      "start": 318,
                      "end": 335,
                      "callee": {
                        "type": "Super",
                        "start": 318,
                        "end": 323
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 324,
                          "end": 334,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "ThisExpression",
                            "start": 330,
                            "end": 334
                          },
                          "id": null,
                          "generator": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
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
    {
      "type": "ClassDeclaration",
      "start": 355,
      "end": 479,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 369,
        "decorators": [],
        "name": "Derived4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 378,
        "end": 382,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 383,
        "end": 479,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 389,
            "end": 477,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 389,
              "end": 400,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 400,
              "end": 477,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 401,
                  "end": 417,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 417,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 409,
                      "end": 417,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 411,
                        "end": 417
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 419,
                "end": 477,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 429,
                    "end": 465,
                    "expression": {
                      "type": "CallExpression",
                      "start": 429,
                      "end": 464,
                      "callee": {
                        "type": "Super",
                        "start": 429,
                        "end": 434
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "FunctionExpression",
                          "start": 435,
                          "end": 463,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 447,
                            "end": 463,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 449,
                                "end": 461,
                                "argument": {
                                  "type": "ThisExpression",
                                  "start": 456,
                                  "end": 460
                                }
                              }
                            ]
                          },
                          "expression": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
