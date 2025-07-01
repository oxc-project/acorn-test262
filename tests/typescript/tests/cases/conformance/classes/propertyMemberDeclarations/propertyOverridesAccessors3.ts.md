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
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
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
              "type": "Identifier",
              "decorators": [],
              "name": "_sound",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 25
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "rustling noise in the bushes",
              "raw": "'rustling noise in the bushes'",
              "start": 28,
              "end": 58
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 19,
            "end": 58
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sound",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 73
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 85,
                        "end": 89
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_sound",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 90,
                        "end": 96
                      },
                      "optional": false,
                      "computed": false,
                      "start": 85,
                      "end": 96
                    },
                    "start": 78,
                    "end": 96
                  }
                ],
                "start": 76,
                "end": 98
              },
              "expression": false,
              "start": 73,
              "end": 98
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 64,
            "end": 98
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sound",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 112
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 116
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
                          "start": 126,
                          "end": 130
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_sound",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 131,
                          "end": 137
                        },
                        "optional": false,
                        "computed": false,
                        "start": 126,
                        "end": 137
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 143
                      },
                      "start": 126,
                      "end": 143
                    },
                    "directive": null,
                    "start": 126,
                    "end": 144
                  }
                ],
                "start": 118,
                "end": 223
              },
              "expression": false,
              "start": 112,
              "end": 223
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 103,
            "end": 223
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeSound",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 238
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 251,
                          "end": 258
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 259,
                          "end": 262
                        },
                        "optional": false,
                        "computed": false,
                        "start": 251,
                        "end": 262
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 263,
                            "end": 267
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_sound",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 268,
                            "end": 274
                          },
                          "optional": false,
                          "computed": false,
                          "start": 263,
                          "end": 274
                        }
                      ],
                      "optional": false,
                      "start": 251,
                      "end": 275
                    },
                    "directive": null,
                    "start": 251,
                    "end": 275
                  }
                ],
                "start": 241,
                "end": 281
              },
              "expression": false,
              "start": 238,
              "end": 281
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 229,
            "end": 281
          }
        ],
        "start": 13,
        "end": 283
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 283
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 292
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Animal",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 305
            },
            "typeArguments": null,
            "arguments": [],
            "start": 295,
            "end": 305
          },
          "definite": false,
          "start": 291,
          "end": 305
        }
      ],
      "declare": false,
      "start": 285,
      "end": 305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 307
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "makeSound",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 317
          },
          "optional": false,
          "computed": false,
          "start": 306,
          "end": 317
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 306,
        "end": 319
      },
      "directive": null,
      "start": 306,
      "end": 319
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Lion",
        "optional": false,
        "typeAnnotation": null,
        "start": 361,
        "end": 365
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 374,
        "end": 380
      },
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
              "name": "sound",
              "optional": false,
              "typeAnnotation": null,
              "start": 387,
              "end": 392
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "RAWR!",
              "raw": "'RAWR!'",
              "start": 395,
              "end": 402
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 387,
            "end": 402
          }
        ],
        "start": 381,
        "end": 418
      },
      "abstract": false,
      "declare": false,
      "start": 355,
      "end": 418
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "lion",
            "optional": false,
            "typeAnnotation": null,
            "start": 426,
            "end": 430
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lion",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 441
            },
            "typeArguments": null,
            "arguments": [],
            "start": 433,
            "end": 441
          },
          "definite": false,
          "start": 426,
          "end": 441
        }
      ],
      "declare": false,
      "start": 420,
      "end": 441
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "lion",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 446
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "makeSound",
            "optional": false,
            "typeAnnotation": null,
            "start": 447,
            "end": 456
          },
          "optional": false,
          "computed": false,
          "start": 442,
          "end": 456
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 442,
        "end": 458
      },
      "directive": null,
      "start": 442,
      "end": 458
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 534
}
```
