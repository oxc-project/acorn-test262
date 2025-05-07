__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 428,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 428,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 428,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 381,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 381,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 381,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 66,
                    "end": 84,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 72,
                        "end": 83,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 75,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 78,
                          "end": 83,
                          "raw": "\"bar\"",
                          "value": "bar",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 118,
                    "end": 133,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 118,
                      "end": 132,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 118,
                        "end": 126,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 118,
                          "end": 122
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 126,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 129,
                        "end": 132,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 167,
                    "end": 200,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 173,
                        "end": 199,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 182,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 185,
                          "end": 199,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 185,
                            "end": 189
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 190,
                            "end": 199,
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 234,
                    "end": 259,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 234,
                      "end": 258,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 234,
                        "end": 242,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 234,
                          "end": 238
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 242,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 245,
                        "end": 258,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 245,
                          "end": 254,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 255,
                          "end": 258,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 293,
                    "end": 319,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 293,
                      "end": 318,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 293,
                        "end": 301,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 293,
                          "end": 297
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 298,
                          "end": 301,
                          "decorators": [],
                          "name": "baz",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 304,
                        "end": 318,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 304,
                          "end": 313,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 314,
                          "end": 317,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 353,
                    "end": 378,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 353,
                      "end": 377,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 353,
                        "end": 365,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 353,
                          "end": 357
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 358,
                          "end": 365,
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 368,
                        "end": 377,
                        "decorators": [],
                        "name": "arguments",
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
                  "type": "AssignmentPattern",
                  "start": 52,
                  "end": 60,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 55,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 58,
                    "end": 60,
                    "properties": []
                  },
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 384,
            "end": 426,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 388,
              "end": 397,
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 397,
              "end": 426,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 400,
                "end": 426,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 404,
                    "end": 423,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 411,
                      "end": 422,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 413,
                          "end": 420,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 413,
                            "end": 416,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "start": 418,
                            "end": 420,
                            "properties": []
                          }
                        }
                      ]
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
