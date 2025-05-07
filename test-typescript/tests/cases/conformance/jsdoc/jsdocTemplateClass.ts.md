__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 71,
  "end": 415,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 71,
      "end": 363,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 81,
        "end": 363,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 149,
            "end": 191,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 160,
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
              "start": 161,
              "end": 191,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 165,
                "end": 191,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 175,
                    "end": 185,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 175,
                      "end": 185,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 175,
                        "end": 181,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 175,
                          "end": 179
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 180,
                          "end": 181,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 184,
                        "end": 185,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 310,
            "end": 361,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 310,
              "end": 313,
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
              "start": 313,
              "end": 361,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 327,
                "end": 361,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 337,
                    "end": 355,
                    "argument": {
                      "type": "CallExpression",
                      "start": 344,
                      "end": 355,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 350,
                          "end": 354,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 352,
                              "end": 353,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 350,
                            "end": 351,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 349,
                        "decorators": [],
                        "name": "alpha",
                        "optional": false,
                        "typeAnnotation": null
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 314,
                  "end": 315,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 317,
                  "end": 318,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 320,
                  "end": 325,
                  "decorators": [],
                  "name": "alpha",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 80,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 364,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 368,
          "end": 382,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 368,
            "end": 369,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 372,
            "end": 382,
            "arguments": [
              {
                "type": "Literal",
                "start": 380,
                "end": 381,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 376,
              "end": 379,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 405,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 405,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 388,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 391,
            "end": 405,
            "arguments": [
              {
                "type": "Literal",
                "start": 399,
                "end": 404,
                "raw": "false",
                "value": false,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 395,
              "end": 398,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 406,
      "end": 415,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 406,
        "end": 415,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 406,
          "end": 409,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 406,
            "end": 407,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 408,
            "end": 409,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 412,
          "end": 415,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 412,
            "end": 413,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 414,
            "end": 415,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
