__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 534,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 283,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 283,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 58,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 25,
              "decorators": [],
              "name": "_sound",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 28,
              "end": 58,
              "value": "rustling noise in the bushes",
              "raw": "'rustling noise in the bushes'"
            },
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
            "start": 64,
            "end": 98,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 73,
              "decorators": [],
              "name": "sound",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 98,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 76,
                "end": 98,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 78,
                    "end": 96,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 85,
                      "end": 96,
                      "object": {
                        "type": "ThisExpression",
                        "start": 85,
                        "end": 89
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 96,
                        "decorators": [],
                        "name": "_sound",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 103,
            "end": 223,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 112,
              "decorators": [],
              "name": "sound",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 223,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 113,
                  "end": 116,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 223,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 126,
                    "end": 144,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 126,
                      "end": 143,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 126,
                        "end": 137,
                        "object": {
                          "type": "ThisExpression",
                          "start": 126,
                          "end": 130
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 137,
                          "decorators": [],
                          "name": "_sound",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 143,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 229,
            "end": 281,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 229,
              "end": 238,
              "decorators": [],
              "name": "makeSound",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 238,
              "end": 281,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 241,
                "end": 281,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 251,
                    "end": 275,
                    "expression": {
                      "type": "CallExpression",
                      "start": 251,
                      "end": 275,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 251,
                        "end": 262,
                        "object": {
                          "type": "Identifier",
                          "start": 251,
                          "end": 258,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 259,
                          "end": 262,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 263,
                          "end": 274,
                          "object": {
                            "type": "ThisExpression",
                            "start": 263,
                            "end": 267
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 268,
                            "end": 274,
                            "decorators": [],
                            "name": "_sound",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
            "kind": "method",
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
      "type": "VariableDeclaration",
      "start": 285,
      "end": 305,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 292,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 295,
            "end": 305,
            "callee": {
              "type": "Identifier",
              "start": 299,
              "end": 305,
              "decorators": [],
              "name": "Animal",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 306,
      "end": 319,
      "expression": {
        "type": "CallExpression",
        "start": 306,
        "end": 319,
        "callee": {
          "type": "MemberExpression",
          "start": 306,
          "end": 317,
          "object": {
            "type": "Identifier",
            "start": 306,
            "end": 307,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 308,
            "end": 317,
            "decorators": [],
            "name": "makeSound",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 355,
      "end": 418,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 365,
        "decorators": [],
        "name": "Lion",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 374,
        "end": 380,
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 381,
        "end": 418,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 387,
            "end": 402,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 387,
              "end": 392,
              "decorators": [],
              "name": "sound",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 395,
              "end": 402,
              "value": "RAWR!",
              "raw": "'RAWR!'"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 420,
      "end": 441,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 426,
          "end": 441,
          "id": {
            "type": "Identifier",
            "start": 426,
            "end": 430,
            "decorators": [],
            "name": "lion",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 433,
            "end": 441,
            "callee": {
              "type": "Identifier",
              "start": 437,
              "end": 441,
              "decorators": [],
              "name": "Lion",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 442,
      "end": 458,
      "expression": {
        "type": "CallExpression",
        "start": 442,
        "end": 458,
        "callee": {
          "type": "MemberExpression",
          "start": 442,
          "end": 456,
          "object": {
            "type": "Identifier",
            "start": 442,
            "end": 446,
            "decorators": [],
            "name": "lion",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 447,
            "end": 456,
            "decorators": [],
            "name": "makeSound",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
