__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 535,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 283,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "name": "Animal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 283,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 58,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 25,
              "name": "_sound",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 28,
              "end": 58,
              "value": "rustling noise in the bushes",
              "raw": "'rustling noise in the bushes'"
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
            "start": 64,
            "end": 98,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 73,
              "name": "sound",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 98,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "_sound",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
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
            "start": 103,
            "end": 223,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 112,
              "name": "sound",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 223,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 113,
                  "end": 116,
                  "name": "val",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "_sound",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 143,
                        "name": "val",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
            "start": 229,
            "end": 281,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 229,
              "end": 238,
              "name": "makeSound",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 238,
              "end": 281,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 259,
                          "end": 262,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
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
                            "name": "_sound",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
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
      "type": "VariableDeclaration",
      "start": 285,
      "end": 305,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 292,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 295,
            "end": 305,
            "callee": {
              "type": "Identifier",
              "start": 299,
              "end": 305,
              "name": "Animal",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 308,
            "end": 317,
            "name": "makeSound",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 355,
      "end": 418,
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 365,
        "name": "Lion",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 374,
        "end": 380,
        "name": "Animal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 381,
        "end": 418,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 387,
            "end": 402,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 387,
              "end": 392,
              "name": "sound",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 395,
              "end": 402,
              "value": "RAWR!",
              "raw": "'RAWR!'"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "start": 420,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 426,
          "end": 441,
          "id": {
            "type": "Identifier",
            "start": 426,
            "end": 430,
            "name": "lion",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 433,
            "end": 441,
            "callee": {
              "type": "Identifier",
              "start": 437,
              "end": 441,
              "name": "Lion",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "lion",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 447,
            "end": 456,
            "name": "makeSound",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
