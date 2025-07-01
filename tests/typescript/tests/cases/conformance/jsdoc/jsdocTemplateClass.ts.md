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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 80
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 160
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 163
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
                          "start": 175,
                          "end": 179
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 180,
                          "end": 181
                        },
                        "optional": false,
                        "computed": false,
                        "start": 175,
                        "end": 181
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 184,
                        "end": 185
                      },
                      "start": 175,
                      "end": 185
                    },
                    "directive": null,
                    "start": 175,
                    "end": 185
                  }
                ],
                "start": 165,
                "end": 191
              },
              "expression": false,
              "start": 161,
              "end": 191
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 149,
            "end": 191
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 313
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 314,
                  "end": 315
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 318
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "alpha",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 320,
                  "end": 325
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alpha",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 344,
                        "end": 349
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 350,
                            "end": 351
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 352,
                              "end": 353
                            }
                          ],
                          "optional": false,
                          "start": 350,
                          "end": 354
                        }
                      ],
                      "optional": false,
                      "start": 344,
                      "end": 355
                    },
                    "start": 337,
                    "end": 355
                  }
                ],
                "start": 327,
                "end": 361
              },
              "expression": false,
              "start": 313,
              "end": 361
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 310,
            "end": 361
          }
        ],
        "start": 81,
        "end": 363
      },
      "abstract": false,
      "declare": false,
      "start": 71,
      "end": 363
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 368,
            "end": 369
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 379
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 380,
                "end": 381
              }
            ],
            "start": 372,
            "end": 382
          },
          "definite": false,
          "start": 368,
          "end": 382
        }
      ],
      "declare": false,
      "start": 364,
      "end": 382
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 388
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 398
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 399,
                "end": 404
              }
            ],
            "start": 391,
            "end": 405
          },
          "definite": false,
          "start": 387,
          "end": 405
        }
      ],
      "declare": false,
      "start": 383,
      "end": 405
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 407
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 409
          },
          "optional": false,
          "computed": false,
          "start": 406,
          "end": 409
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 412,
            "end": 413
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 414,
            "end": 415
          },
          "optional": false,
          "computed": false,
          "start": 412,
          "end": 415
        },
        "start": 406,
        "end": 415
      },
      "directive": null,
      "start": 406,
      "end": 415
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 71,
  "end": 415
}
```
