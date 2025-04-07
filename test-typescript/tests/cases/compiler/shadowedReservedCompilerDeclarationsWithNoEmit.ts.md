__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 36,
  "end": 640,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 36,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 50,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 46,
        "decorators": [],
        "name": "Base",
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
      "start": 51,
      "end": 256,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 256,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 116,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 89,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 116,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 116,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 102,
                    "end": 110,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 102,
                      "end": 109,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 102,
                        "end": 107
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 122,
            "end": 208,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 125,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 125,
              "end": 208,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 128,
                "end": 208,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 138,
                    "end": 155,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 142,
                        "end": 154,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 142,
                          "end": 147,
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 150,
                          "end": 154
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 165,
                    "end": 202,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 165,
                      "end": 201,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 171,
                        "end": 201,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 185,
                            "end": 191,
                            "directive": null,
                            "expression": {
                              "type": "Identifier",
                              "start": 185,
                              "end": 190,
                              "decorators": [],
                              "name": "_this",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 214,
            "end": 254,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 217,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 217,
              "end": 254,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 220,
                "end": 254,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 230,
                    "end": 248,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 234,
                        "end": 247,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 234,
                          "end": 240,
                          "decorators": [],
                          "name": "_super",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 243,
                          "end": 247
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 282,
      "end": 314,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 311,
        "end": 314,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 291,
        "end": 293,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 294,
          "end": 303,
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "RestElement",
          "start": 305,
          "end": 309,
          "argument": {
            "type": "Identifier",
            "start": 308,
            "end": 309,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 316,
      "end": 469,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 338,
        "end": 469,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 344,
            "end": 467,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 344,
              "end": 355,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 355,
              "end": 467,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 358,
                "end": 467,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 368,
                    "end": 376,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 368,
                      "end": 375,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 368,
                        "end": 373
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 385,
                    "end": 405,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 389,
                        "end": 404,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 389,
                          "end": 399,
                          "decorators": [],
                          "name": "_newTarget",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 402,
                          "end": 404,
                          "raw": "\"\"",
                          "value": ""
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 414,
                    "end": 433,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 418,
                        "end": 432,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 418,
                          "end": 419,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MetaProperty",
                          "start": 422,
                          "end": 432,
                          "meta": {
                            "type": "Identifier",
                            "start": 422,
                            "end": 425,
                            "decorators": [],
                            "name": "new",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 426,
                            "end": 432,
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 442,
                    "end": 461,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 446,
                        "end": 460,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 446,
                          "end": 447,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 450,
                          "end": 460,
                          "decorators": [],
                          "name": "_newTarget",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 322,
        "end": 324,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 333,
        "end": 337,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 492,
      "end": 511,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 496,
          "end": 510,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 503,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 506,
            "end": 510,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 512,
      "end": 549,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 532,
        "end": 549,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 538,
            "end": 547,
            "argument": {
              "type": "Literal",
              "start": 545,
              "end": 546,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 527,
        "end": 529,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 572,
      "end": 588,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 576,
          "end": 587,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 576,
            "end": 583,
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 586,
            "end": 587,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 610,
      "end": 626,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 614,
          "end": 625,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 614,
            "end": 621,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 624,
            "end": 625,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 629,
      "end": 640,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
