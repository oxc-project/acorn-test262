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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 55
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 58,
                    "end": 60
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 60
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 72,
                          "end": 75
                        },
                        "init": {
                          "type": "Literal",
                          "value": "bar",
                          "raw": "\"bar\"",
                          "start": 78,
                          "end": 83
                        },
                        "definite": false,
                        "start": 72,
                        "end": 83
                      }
                    ],
                    "declare": false,
                    "start": 66,
                    "end": 84
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 118,
                          "end": 122
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 123,
                          "end": 126
                        },
                        "optional": false,
                        "computed": false,
                        "start": 118,
                        "end": 126
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 129,
                        "end": 132
                      },
                      "start": 118,
                      "end": 132
                    },
                    "directive": null,
                    "start": 118,
                    "end": 133
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
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 173,
                          "end": 182
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 185,
                            "end": 189
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 190,
                            "end": 199
                          },
                          "optional": false,
                          "computed": false,
                          "start": 185,
                          "end": 199
                        },
                        "definite": false,
                        "start": 173,
                        "end": 199
                      }
                    ],
                    "declare": false,
                    "start": 167,
                    "end": 200
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 234,
                          "end": 238
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 239,
                          "end": 242
                        },
                        "optional": false,
                        "computed": false,
                        "start": 234,
                        "end": 242
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 245,
                          "end": 254
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 255,
                          "end": 258
                        },
                        "optional": false,
                        "computed": false,
                        "start": 245,
                        "end": 258
                      },
                      "start": 234,
                      "end": 258
                    },
                    "directive": null,
                    "start": 234,
                    "end": 259
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 293,
                          "end": 297
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "baz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 298,
                          "end": 301
                        },
                        "optional": false,
                        "computed": false,
                        "start": 293,
                        "end": 301
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 304,
                          "end": 313
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 314,
                          "end": 317
                        },
                        "optional": false,
                        "computed": true,
                        "start": 304,
                        "end": 318
                      },
                      "start": 293,
                      "end": 318
                    },
                    "directive": null,
                    "start": 293,
                    "end": 319
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 353,
                          "end": 357
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 358,
                          "end": 365
                        },
                        "optional": false,
                        "computed": false,
                        "start": 353,
                        "end": 365
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 368,
                        "end": 377
                      },
                      "start": 353,
                      "end": 377
                    },
                    "directive": null,
                    "start": 353,
                    "end": 378
                  }
                ],
                "start": 62,
                "end": 381
              },
              "expression": false,
              "start": 51,
              "end": 381
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 50,
            "end": 381
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null,
              "start": 388,
              "end": 397
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
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 413,
                            "end": 416
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [],
                            "start": 418,
                            "end": 420
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 413,
                          "end": 420
                        }
                      ],
                      "start": 411,
                      "end": 422
                    },
                    "start": 404,
                    "end": 423
                  }
                ],
                "start": 400,
                "end": 426
              },
              "expression": false,
              "start": 397,
              "end": 426
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 384,
            "end": 426
          }
        ],
        "start": 8,
        "end": 428
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 428
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 428
}
```
