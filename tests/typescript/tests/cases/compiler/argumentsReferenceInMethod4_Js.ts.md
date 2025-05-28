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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 428,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 381,
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
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 381,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                  "right": {
                    "type": "ObjectExpression",
                    "start": 58,
                    "end": 60,
                    "properties": []
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 381,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 66,
                    "end": 84,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 72,
                        "end": 83,
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
                          "value": "bar",
                          "raw": "\"bar\""
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 118,
                    "end": 133,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 118,
                      "end": 132,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 118,
                        "end": 126,
                        "object": {
                          "type": "ThisExpression",
                          "start": 118,
                          "end": 122
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 126,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 167,
                    "end": 200,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 173,
                        "end": 199,
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
                          "object": {
                            "type": "ThisExpression",
                            "start": 185,
                            "end": 189
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 190,
                            "end": 199,
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 234,
                    "end": 259,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 234,
                      "end": 258,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 234,
                        "end": 242,
                        "object": {
                          "type": "ThisExpression",
                          "start": 234,
                          "end": 238
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 242,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 245,
                        "end": 258,
                        "object": {
                          "type": "Identifier",
                          "start": 245,
                          "end": 254,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 255,
                          "end": 258,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 293,
                    "end": 319,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 293,
                      "end": 318,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 293,
                        "end": 301,
                        "object": {
                          "type": "ThisExpression",
                          "start": 293,
                          "end": 297
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 298,
                          "end": 301,
                          "decorators": [],
                          "name": "baz",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 304,
                        "end": 318,
                        "object": {
                          "type": "Identifier",
                          "start": 304,
                          "end": 313,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 314,
                          "end": 317,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 353,
                    "end": 378,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 353,
                      "end": 377,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 353,
                        "end": 365,
                        "object": {
                          "type": "ThisExpression",
                          "start": 353,
                          "end": 357
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 358,
                          "end": 365,
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
          },
          {
            "type": "MethodDefinition",
            "start": 384,
            "end": 426,
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
            "value": {
              "type": "FunctionExpression",
              "start": 397,
              "end": 426,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 413,
                            "end": 416,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "start": 418,
                            "end": 420,
                            "properties": []
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
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
