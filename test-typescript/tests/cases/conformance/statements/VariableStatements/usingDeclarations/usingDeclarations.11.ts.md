__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 515,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 10,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 10,
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
      "start": 11,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 100,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 36,
            "end": 98,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 47,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 47,
              "end": 98,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 50,
                "end": 98,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 60,
                    "end": 75,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 66,
                        "end": 74,
                        "id": {
                          "type": "Identifier",
                          "start": 66,
                          "end": 67,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 70,
                          "end": 74,
                          "value": null,
                          "raw": "null"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "using",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 84,
                    "end": 92,
                    "expression": {
                      "type": "CallExpression",
                      "start": 84,
                      "end": 91,
                      "callee": {
                        "type": "Super",
                        "start": 84,
                        "end": 89
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
      "type": "ClassDeclaration",
      "start": 101,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 109,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 118,
        "end": 119,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 190,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 126,
            "end": 188,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 137,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 137,
              "end": 188,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 140,
                "end": 188,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 150,
                    "end": 158,
                    "expression": {
                      "type": "CallExpression",
                      "start": 150,
                      "end": 157,
                      "callee": {
                        "type": "Super",
                        "start": 150,
                        "end": 155
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 167,
                    "end": 182,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 173,
                        "end": 181,
                        "id": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 174,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 177,
                          "end": 181,
                          "value": null,
                          "raw": "null"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "using",
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
      "type": "ClassDeclaration",
      "start": 191,
      "end": 291,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 199,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 208,
        "end": 209,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 210,
        "end": 291,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 216,
            "end": 222,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 220,
              "end": 221,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 227,
            "end": 289,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 227,
              "end": 238,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 238,
              "end": 289,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 241,
                "end": 289,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 251,
                    "end": 266,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 257,
                        "end": 265,
                        "id": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 258,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 261,
                          "end": 265,
                          "value": null,
                          "raw": "null"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "using",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 275,
                    "end": 283,
                    "expression": {
                      "type": "CallExpression",
                      "start": 275,
                      "end": 282,
                      "callee": {
                        "type": "Super",
                        "start": 275,
                        "end": 280
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
      "type": "ClassDeclaration",
      "start": 292,
      "end": 397,
      "id": {
        "type": "Identifier",
        "start": 298,
        "end": 300,
        "name": "C4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 309,
        "end": 310,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 311,
        "end": 397,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 317,
            "end": 395,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 328,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 328,
              "end": 395,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 329,
                  "end": 345,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 336,
                    "end": 345,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 337,
                      "end": 345,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 339,
                        "end": 345
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 347,
                "end": 395,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 357,
                    "end": 372,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 363,
                        "end": 371,
                        "id": {
                          "type": "Identifier",
                          "start": 363,
                          "end": 364,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 367,
                          "end": 371,
                          "value": null,
                          "raw": "null"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "using",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 381,
                    "end": 389,
                    "expression": {
                      "type": "CallExpression",
                      "start": 381,
                      "end": 388,
                      "callee": {
                        "type": "Super",
                        "start": 381,
                        "end": 386
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
      "type": "ClassDeclaration",
      "start": 398,
      "end": 514,
      "id": {
        "type": "Identifier",
        "start": 404,
        "end": 406,
        "name": "C5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 415,
        "end": 416,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 417,
        "end": 514,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 423,
            "end": 429,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 423,
              "end": 424,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 427,
              "end": 428,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 434,
            "end": 512,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 434,
              "end": 445,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 445,
              "end": 512,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 446,
                  "end": 462,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 453,
                    "end": 462,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 454,
                      "end": 462,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 456,
                        "end": 462
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 464,
                "end": 512,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 474,
                    "end": 489,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 480,
                        "end": 488,
                        "id": {
                          "type": "Identifier",
                          "start": 480,
                          "end": 481,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 484,
                          "end": 488,
                          "value": null,
                          "raw": "null"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "using",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 498,
                    "end": 506,
                    "expression": {
                      "type": "CallExpression",
                      "start": 498,
                      "end": 505,
                      "callee": {
                        "type": "Super",
                        "start": 498,
                        "end": 503
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
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
