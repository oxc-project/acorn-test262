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
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 46,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 50,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 256,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 256,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 116,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 89,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 116,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 116,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 102,
                    "end": 110,
                    "expression": {
                      "type": "CallExpression",
                      "start": 102,
                      "end": 109,
                      "callee": {
                        "type": "Super",
                        "start": 102,
                        "end": 107
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 122,
            "end": 208,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 125,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 125,
              "end": 208,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "id": {
                          "type": "Identifier",
                          "start": 142,
                          "end": 147,
                          "name": "_this",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 150,
                          "end": 154
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 165,
                    "end": 202,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 165,
                      "end": 201,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 171,
                        "end": 201,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 185,
                            "end": 191,
                            "expression": {
                              "type": "Identifier",
                              "start": 185,
                              "end": 190,
                              "name": "_this",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 214,
            "end": 254,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 217,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 217,
              "end": 254,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "id": {
                          "type": "Identifier",
                          "start": 234,
                          "end": 240,
                          "name": "_super",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 243,
                          "end": 247
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
    {
      "type": "FunctionDeclaration",
      "start": 282,
      "end": 314,
      "id": {
        "type": "Identifier",
        "start": 291,
        "end": 293,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 294,
          "end": 303,
          "name": "arguments",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 305,
          "end": 309,
          "argument": {
            "type": "Identifier",
            "start": 308,
            "end": 309,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 311,
        "end": 314,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 316,
      "end": 469,
      "id": {
        "type": "Identifier",
        "start": 322,
        "end": 324,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 333,
        "end": 337,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 338,
        "end": 469,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 344,
            "end": 467,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 344,
              "end": 355,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 355,
              "end": 467,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 358,
                "end": 467,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 368,
                    "end": 376,
                    "expression": {
                      "type": "CallExpression",
                      "start": 368,
                      "end": 375,
                      "callee": {
                        "type": "Super",
                        "start": 368,
                        "end": 373
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
                        "id": {
                          "type": "Identifier",
                          "start": 389,
                          "end": 399,
                          "name": "_newTarget",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 402,
                          "end": 404,
                          "value": "",
                          "raw": "\"\""
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 418,
                          "end": 419,
                          "name": "t",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MetaProperty",
                          "start": 422,
                          "end": 432,
                          "meta": {
                            "type": "Identifier",
                            "start": 422,
                            "end": 425,
                            "name": "new",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 426,
                            "end": 432,
                            "name": "target",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 446,
                          "end": 447,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 450,
                          "end": 460,
                          "name": "_newTarget",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
    {
      "type": "VariableDeclaration",
      "start": 492,
      "end": 511,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 496,
          "end": 510,
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 503,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 506,
            "end": 510,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 512,
      "end": 549,
      "id": {
        "type": "Identifier",
        "start": 527,
        "end": 529,
        "name": "f4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 576,
            "end": 583,
            "name": "require",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 586,
            "end": 587,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 614,
            "end": 621,
            "name": "exports",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 624,
            "end": 625,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 629,
      "end": 640,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
